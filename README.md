# FreeOps Tool Website

A modern static site showcasing FreeOps open-source projects and contributors, with automated data sync from your GitHub organization.

## Quick start

1. Install dependencies
   ```
   npm install
   ```
2. Development
   ```
   npm run dev
   ```
3. Build
   ```
   npm run build
   ```

## Configuration

- Set your GitHub org via env:
  - Local: `export ORG=your-org && export GITHUB_TOKEN=ghp_xxx`
  - GitHub Actions: set `GITHUB_TOKEN` secret (default provided) and optional `GITHUB_ORG` repo/organization variable.
- Repositories must include the topic `opensource` to appear. You can change this topic via `TOPIC` env.

## Syncing data

- Run locally:
  ```
  ORG=your-org TOPIC=opensource GITHUB_TOKEN=ghp_xxx npm run fetch:data
  ```
- This writes JSON under `public/data`, which the UI consumes.

## Automation

- The workflow `.github/workflows/sync.yml` runs nightly and on manual dispatch to:
  - Fetch repos with the `opensource` topic
  - Aggregate contributors
  - Commit updated JSON when changed
  - Build the site

Deploy to your host (e.g., Vercel/Netlify) to build on push.
