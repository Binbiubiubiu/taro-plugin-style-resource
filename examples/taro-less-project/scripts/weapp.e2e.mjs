#!/usr/bin/env zx

await $`npm run build:weapp`.quiet()
await $`mocha --file ./cypress/e2e/weapp.e2e.ts`



