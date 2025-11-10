/* eslint-disable no-console */
import { Octokit } from "@octokit/rest";
import fs from "node:fs";
import path from "node:path";

type Project = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  open_issues_count: number;
  updated_at: string;
  topics?: string[];
  language?: string | null;
};

type Contributor = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string | null;
  contributions?: number;
  twitter_username?: string | null;
};

const ORG = process.env.ORG || process.env.GITHUB_ORG;
const TOKEN = process.env.GITHUB_TOKEN;
const TOPIC = process.env.TOPIC || "opensource";

if (!ORG) {
  console.error("Missing ORG env. Set ORG or GITHUB_ORG to your GitHub organization.");
  process.exit(1);
}
if (!TOKEN) {
  console.error("Missing GITHUB_TOKEN env with read:org and repo scopes.");
  process.exit(1);
}

const octokit = new Octokit({ auth: TOKEN });

async function paginate<T>(fn: (page: number) => Promise<T[]>): Promise<T[]> {
  const results: T[] = [];
  let page = 1;
  // simple pagination up to 50 pages
  while (page <= 50) {
    const chunk = await fn(page);
    if (!chunk.length) break;
    results.push(...chunk);
    page += 1;
  }
  return results;
}

async function fetchOrgRepos(): Promise<Project[]> {
  const repos = await paginate(async (page) => {
    const res = await octokit.repos.listForOrg({
      org: ORG!,
      type: "public",
      per_page: 100,
      page
    });
    return res.data as any[];
  });

  const filtered = repos.filter((r: any) => (r.topics || []).includes(TOPIC));

  return filtered.map((r: any) => ({
    id: r.id,
    name: r.name,
    description: r.description,
    html_url: r.html_url,
    homepage: r.homepage,
    stargazers_count: r.stargazers_count,
    open_issues_count: r.open_issues_count,
    updated_at: r.updated_at,
    topics: r.topics,
    language: r.language
  }));
}

async function fetchContributorsForRepo(repo: string): Promise<Contributor[]> {
  const list = await paginate(async (page) => {
    const res = await octokit.repos.listContributors({
      owner: ORG!,
      repo,
      per_page: 100,
      page
    });
    return res.data as any[];
  });
  return list.map((u: any) => ({
    id: u.id,
    login: u.login,
    avatar_url: u.avatar_url,
    html_url: u.html_url,
    contributions: u.contributions
  }));
}

async function hydrateUsers(users: Contributor[]): Promise<Contributor[]> {
  const uniqueById = new Map<number, Contributor>();
  users.forEach((u) => uniqueById.set(u.id, u));
  const all = Array.from(uniqueById.values());
  const hydrated: Contributor[] = [];
  // rate-friendly: batch with limited concurrency
  const concurrency = 6;
  let i = 0;
  async function worker() {
    while (i < all.length) {
      const current = all[i++];
      try {
        const res = await octokit.users.getByUsername({ username: current.login });
        hydrated.push({
          ...current,
          name: res.data.name,
          twitter_username: (res.data as any).twitter_username ?? null
        });
      } catch {
        hydrated.push(current);
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return hydrated;
}

async function main() {
  console.log(`Fetching repos for org=${ORG} topic=${TOPIC}`);
  const projects = await fetchOrgRepos();
  console.log(`Found ${projects.length} tagged repositories`);

  const contributorsNested = await Promise.all(
    projects.map((p) => fetchContributorsForRepo(p.name))
  );
  const contributorsFlat = contributorsNested.flat();
  const contributors = await hydrateUsers(contributorsFlat);

  const dataDir = path.join(process.cwd(), "public", "data");
  fs.mkdirSync(dataDir, { recursive: true });
  fs.writeFileSync(
    path.join(dataDir, "projects.json"),
    JSON.stringify({ projects }, null, 2)
  );
  fs.writeFileSync(
    path.join(dataDir, "contributors.json"),
    JSON.stringify({ contributors }, null, 2)
  );
  console.log("Wrote public/data/projects.json and contributors.json");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

