<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Nawkookuhtoo — Agent Hints (concise)

This file contains focused, actionable info to help an AI coding agent be productive in this repository.

- Project type: Angular 19 app with optional SSR (Angular standalone bootstrap + `@angular/ssr`).
- Key entrypoints:
  - `src/main.ts` — client bootstrap via `bootstrapApplication(AppComponent, appConfig)`.
  - `src/main.server.ts` — server bootstrap (exports `default` bootstrap function for SSR).
  - `src/server.ts` — Express-based SSR runtime using `@angular/ssr/node` (exports `reqHandler`).

- Important scripts (from `package.json`):
  - `npm start` / `ng serve` — run the dev server on `http://localhost:4200/`.
  - `npm run build` / `ng build` — produce browser/server artifacts in `dist/`.
  - `npm run serve:ssr:nawkookuhtoo` — run built SSR server: `node dist/nawkookuhtoo/server/server.mjs`.

- Architecture & runtime notes:
  - The app uses Angular "standalone" bootstrap (no `NgModule` root). Look for `bootstrapApplication(...)`.
  - Client hydration is enabled: `provideClientHydration(withEventReplay())` in `src/app/app.config.ts`.
  - Server config merges client config with server providers in `src/app/app.config.server.ts` via `mergeApplicationConfig`.
  - Routing for browser is `src/app/app.routes.ts` (currently empty). Server routes live in `src/app/app.routes.server.ts` and use `RenderMode.Prerender` for the wildcard entry.
  - `src/server.ts` serves static `../browser` files, and uses `AngularNodeAppEngine` to render non-static routes.

- Project-specific patterns and conventions:
  - Standalone components: components use `imports: [...]` in the decorator (see `src/app/app.component.ts`).
  - App-wide providers are assembled into `appConfig` (client) and `config` (server). Prefer updating those files for provider changes.
  - SSR-safe code: server entry uses `isMainModule(import.meta.url)` to decide whether to start `listen()` — follow that pattern when adding CLI/server code.
  - Email sending via `emailjs` is used directly in `AppComponent` — be careful with secrets (they are in source here). Do not commit new secrets.
  - Styling: Tailwind is present (`tailwind.config.js`) and `styles.css` is in `src/`.

- Testing & debug
  - Unit tests: run `npm test` (uses Karma / Jasmine by default).
  - To debug SSR locally: build artifacts (`npm run build`), then run `npm run serve:ssr:nawkookuhtoo`. The server will log `Node Express server listening on http://localhost:<port>`; default port is `4000` or `PORT` env var.

- Dependency & integration notes:
  - Key runtime deps: `@angular/*` (v19), `@angular/ssr`, `express`, and `@emailjs/browser`.
  - Server logic depends on `dist/<project>/server/server.mjs` after a full build — be mindful of build targets when modifying server exports.

- When editing routing or rendering:
  - Update `src/app/app.routes.ts` for client routes.
  - Update `src/app/app.routes.server.ts` for server rendering rules.
  - Use `provideServerRendering()` and `provideServerRouting(...)` when altering server DI.

- Files to inspect for quick context (use these as examples):
  - `src/main.ts`, `src/main.server.ts`, `src/server.ts`
  - `src/app/app.config.ts`, `src/app/app.config.server.ts`
  - `src/app/app.routes.ts`, `src/app/app.routes.server.ts`
  - `src/app/app.component.ts` (shows data structures, EmailJS usage, and view helpers)

- What not to assume:
  - There is no pre-existing `.github/copilot-instructions.md` or `AGENT.md` file to merge — this file was created from discoverable code.
  - Project-level CI or E2E scripts are not present in `package.json`; do not invent CI steps unless the user asks.

- If you'd like more depth on any area (SSR debug, adding server providers, or where to add routes), tell me which section to expand and I will iterate.
