# VECTOR External Docs

Public documentation for the VECTOR platform, covering player setup, developer onboarding, and game integration guides.

## Contents

- Home
- Gamers
  - Getting Started
  - FAQ
- Developers
  - Getting Started
  - Integrations
    - Unreal
    - Unity
    - Custom
  - FAQ

## Development

Install dependencies:

```bash
pnpm install
```

Run the local docs site:

```bash
pnpm dev
```

Open `http://localhost:8000`.

Build for production:

```bash
pnpm build
```

## Notes

This repository is intended for public-facing documentation only. Do not commit local environment files, generated build output, private test credentials, or runtime DRM token files.
