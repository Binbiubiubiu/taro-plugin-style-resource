#!/usr/bin/env zx

const PORT = 8080
await $`npm run build:h5`
let server = $`live-server dist --port ${PORT} --no-browser --quiet`
server.catch(()=>{})
await $`wait-on http://localhost:${PORT} && npm run cy:run`
await $`kill-port ${PORT}`
