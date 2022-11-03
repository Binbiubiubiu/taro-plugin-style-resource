#!/usr/bin/env zx

await $`npm run build:weapp`.quiet()
await $`mocha`



