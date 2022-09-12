# muzzomo-frontend

The muzzom app frontend. This app is build on NextJS

## Prerequisites

1. NodeJS+NPM - use the installer or CLI
2. A unix-like shell (MacOS shell, Linux shells)
3. Docker and docker-compose

## Running the app

The `.env` file is not commited to the repo, so it has to be manually configured

Create a `.env` file at the root of the muzzomo-frontend directoy with the following variables specified:

- NODE_ENV=development|production

Go into the `docker-compose.yml` file and map the frontend port for the host to match the port in the `Dockerfile` file.

To run the app, open a shell and run the following

```bash
    npm install
    npm run build
    npm run dev
```

To deploy the app, open a shell and run the following

```bash
    npm run build
    cd boot
    sh boot.sh
```