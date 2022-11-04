#!/usr/bin/env zx

const PORT = 8080
await $`npm run build:h5`.quiet()
let server = $`live-server dist --port ${PORT} --no-browser --quiet`.quiet()
server.catch(()=>{})
await $`wait-on http://localhost:${PORT} && cypress run --e2e --headless`
await server.kill();




