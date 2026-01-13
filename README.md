# hub-core

> Core models and interfaces for JavaScript / TypeScript hub

This library contains the core interfaces and event models used by the hub ecosystem.

## Install

This package is published to GitHub Packages under the scope `@parrot-ha` as `@parrot-ha/hub-core`.

To install from GitHub Packages (after it's published):

```
npm install @parrot-ha/hub-core
```

## Development

Build and test locally:

```bash
npm install
npm run build
npm test
```

## Publish (CI - recommended)

This repository includes a GitHub Actions workflow that publishes the package to GitHub Packages when a GitHub Release is published.

To publish via CI:

1. Create a GitHub Release (via the web UI or `gh release create`).
2. The `release: published` event will trigger the workflow which runs tests, builds, and publishes the package.

Notes:
- The workflow uses the repository's `GITHUB_TOKEN` and requests `packages: write` permission so it can publish.
- Ensure Actions are allowed to write packages in your repository/org settings if your org restricts permissions.

## Publish (manual)

If you prefer to publish from your machine, you can publish directly to GitHub Packages using a personal access token with `write:packages` scope.

```bash
# build
npm run build

# tell npm to use the GitHub Packages registry for the scope
npm config set @parrot-ha:registry https://npm.pkg.github.com/

# set your token (replace YOUR_TOKEN)
npm config set //npm.pkg.github.com/:_authToken YOUR_TOKEN

# publish
npm publish --registry https://npm.pkg.github.com/
```

## Releasing

To bump the package version, create a tag and push (this also works with the GitHub Release flow):

```bash
npm version patch -m "Release v%s"
git push origin main
git push --tags
```

## Package metadata

Package name: `@parrot-ha/hub-core`

The package is configured to publish to `https://npm.pkg.github.com/` via `publishConfig` in `package.json`.

---

If you'd like, I can also add a GitHub Release step to automatically create a release when a tag is pushed, or prepare and push a version bump and tag for you — tell me which you'd like me to do next.
# hub-core
core models and interfaces for javascript / typescript hub
