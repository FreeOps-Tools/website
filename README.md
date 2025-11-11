# FreeOps Tool Website

A modern static site showcasing FreeOps open-source projects and contributors, with automated data sync from your GitHub organization.

## Quick start

1. Install dependencies

   ```sh
   npm install

   ```sh
2. Development

   ```sh
   npm run dev

   ```sh
3. Build

   ```sh
   npm run build
   ```

## Configuration

- Set your GitHub org via env:
  - Local: add to `.env.local` (see below) or `export ORG=your-org && export GITHUB_TOKEN=ghp_xxx`
  - GitHub Actions: set `GITHUB_TOKEN` secret (default provided) and optional `GITHUB_ORG` repo/organization variable.
- Repositories must include the topic `opensource` to appear. You can change this topic via `TOPIC` env.

### Local `.env.local`

Create `.env.local` (git-ignored) with:

```sh
ORG=your-org
TOPIC=opensource
GITHUB_TOKEN=ghp_xxx
```

## Syncing data

- Run locally:
  ```sh
  ORG=your-org TOPIC=opensource GITHUB_TOKEN=ghp_xxx npm run fetch:data

  ```sh
- This writes JSON under `public/data`, which the UI consumes.

## Automation

- The workflow `.github/workflows/sync.yml` runs nightly and on manual dispatch to:
  - Fetch repos with the `opensource` topic
  - Aggregate contributors
  - Commit updated JSON when changed
  - Redeploy the site
