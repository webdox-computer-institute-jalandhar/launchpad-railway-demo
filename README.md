# LaunchPad — React website for a Railway deployment tutorial

A polished React + Vite landing-page/dashboard demo served by a tiny Express server. It is designed to be deployed as a Node.js service on Railway.

## Requirements

- Node.js 20 or newer
- npm
- Git (for the GitHub deployment workflow)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Test the production build locally

```bash
npm run build
npm start
```

Open http://localhost:3000. Check the health endpoint at http://localhost:3000/health.

## Deploy to Railway using GitHub

1. Extract this ZIP.
2. Create a new GitHub repository and push the project files to it.
3. Sign in to Railway and choose **New Project** → **Deploy from GitHub Repo**.
4. Connect GitHub if prompted, then select this repository.
5. Railway detects the Node.js project. The included `railway.json` sets:
   - Build command: `npm run build`
   - Start command: `npm start`
   - Health check path: `/health`
6. Wait for the deployment to finish.
7. Open the generated public domain from the Railway service's **Settings → Networking** section. Generate a domain if one has not been created.
8. Visit the public URL and confirm the LaunchPad homepage loads.

## What Railway needs to know

- `npm run build` creates the production website in `dist/`.
- `npm start` starts Express.
- Express serves the built React files and listens on `0.0.0.0` using Railway's injected `PORT` environment variable.
- `/health` returns HTTP 200 for Railway's health check.

No environment variables or database are required for this demo.

## Suggested video flow

1. Show the finished website locally.
2. Explain the project structure: `src/`, `server.js`, `package.json`, and `railway.json`.
3. Push the project to GitHub.
4. Create a Railway project from the GitHub repository.
5. Explain the build and start commands.
6. Generate a Railway public domain.
7. Open the live website and test `/health`.
8. Make a small text change, push it to GitHub, and show Railway's automatic redeployment.

## Troubleshooting

- **Build fails:** open Railway's build logs. Confirm Node 20+ is used and dependencies install successfully.
- **Application failed to respond:** make sure the start command is `npm start` and the server listens on `0.0.0.0` using `process.env.PORT`.
- **Health check fails:** open `/health` on the deployed domain. It should return `{"status":"ok","service":"launchpad-demo"}`.
- **Blank page:** inspect the browser console and Railway deployment logs. Confirm `npm run build` completed and `dist/index.html` exists.

## Tech stack

React 18 · Vite 6 · Express 4 · Lucide React
