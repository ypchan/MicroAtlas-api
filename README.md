# MicroAtlas Frontend Prototype

MicroAtlas is a global DADA2-derived 16S ASV atlas for microbial diversity exploration. This repository currently contains only the web frontend prototype. All data are mock data from static TypeScript files under `src/data`.

## Tech Stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-inspired local components
- lucide-react
- Recharts
- TanStack Table
- Static placeholder map component

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Run With Docker

```bash
docker build -t microatlas-frontend .
docker run --rm -p 3000:3000 microatlas-frontend
```

Or with Compose:

```bash
docker compose up -d --build
```

Then open `http://localhost:3000`.

This image is based on the Next.js `standalone` output, so it is suitable for a small server deployment without installing Node on the host.

To use a different host port, copy `.env.example` to `.env` and change `MICROATLAS_PORT`.

## Optional Reverse Proxy

If you want a domain and HTTPS, put a reverse proxy in front of the app container.

- Caddy example: `deploy/Caddyfile.example`
- Nginx example: `deploy/nginx.conf.example`

Use them as templates and replace `microatlas.example.com` with your real domain.

## Server Deployment

Recommended layout on the server:

```bash
/opt/microatlas-api
```

Install prerequisites first:

- Docker Engine
- Docker Compose plugin
- Git

Deployment flow:

```bash
cd /opt
git clone <your-repo-url> microatlas-api
cd microatlas-api
docker compose up -d --build
```

If you use GitHub CLI, the clone step is:

```bash
gh repo clone <owner>/<repo>
cd <repo>
docker compose up -d --build
```

For updates after a `git pull`, run:

```bash
./deploy/update.sh
```

If you prefer shorter commands, the repository also provides:

```bash
make up
make logs
make ps
make update
```

The website process is the `microatlas-web` container defined in `docker-compose.yml`.

Useful checks:

```bash
docker compose ps
docker compose logs -f microatlas-web
```

## Data Policy Prototype

ASV sequences are treated as internal search targets only. The frontend deliberately does not expose or display ASV sequences and does not offer ASV FASTA downloads. Future sequence similarity search will run as controlled server-side queries.

## Prototype Access and Feedback

- A local browser-only registration gate is included. Non-registered users can browse the home page only; registered users unlock the full prototype. Registered users are stored in `localStorage` for prototype testing only.
- Developer test account: `developer@microatlas.local` / `microatlas-dev`. The frontend also provides a one-click developer login button on the registration panel.
- A floating Issue window lets users submit data annotations, correction suggestions, and interface feedback. Submissions are stored locally until real backend issue tracking is connected.
- The footer includes Shenzhen University Archaeal Biology Center attribution for the portal owner.

## Mock Data

The prototype uses mock data in:

- `src/data/summary.ts`
- `src/data/samples.ts`
- `src/data/asvs.ts`
- `src/data/taxa.ts`
- `src/data/searchResults.ts`
- `src/data/chartData.ts`

## TODO: Future Backend Integration

- Connect pages to the MicroAtlas API instead of static mock data.
- Add authenticated, controlled sequence search backed by vsearch workers.
- Add PostgreSQL metadata storage and ClickHouse analytical summaries.
- Add real download job creation and result polling.
- Add API-backed filter facets and pagination.
- Replace local registration with real authentication and user roles.
- Connect the Issue window to backend curation and feedback tracking.
- Wire the future MicroAtlasR package to the same API.
- Add production deployment configuration, analytics, and observability.
