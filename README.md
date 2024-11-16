# Nurl Website

The official website for Nurl, where tabletop legends are made.

## Developing

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Solid apps are built with _presets_, which optimize your project for deployment to different environments.

By default, `pnpm run build` will generate a Node app that you can run with `pnpm start`. To use a different preset, add it to the `devDependencies` in `package.json` and specify in your `app.config.ts`.

## This project was created with the [Solid CLI](https://solid-cli.netlify.app)
