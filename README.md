# Modernjs BFF Issue: Empty body on POST requests

This is a minimal example for an issue I am encountering with modernjs.
No matter what approach is taken, the api only contains an empty body.
In this example two post routes are implemented, `/api/hello` without any dynamic route paths
and `/api/dynpath/[id]` containing a single dynamic path argument.
Both functions catch all arguments using `..args: any`.
The curl command used and the log from nodejs follow bellow.

```
# Test curl command
curl -X POST http://localhost:8080/api/hello -H "Content-Type: application/json" -d '{"data":"This is the body of the post request."}'
{"message":"Hello Modern.js"}

# nodejs log
[
  {
    params: {},
    query: {},
    headers: {
      accept: '*/*',
      'content-length': '48',
      'content-type': 'application/json',
      host: 'localhost:8080',
      'user-agent': 'curl/8.13.0'
    },
    cookies: undefined,
    body: null
  }
]

# Test curl command
curl -X POST http://localhost:8080/api/dynpath/foobar -H "Content-Type: application/json" -d '{"data":"This is the body of the post request."}'
{"message":"Hello Modern.js"}

# nodejs log
[
  'foobar',
  {
    params: { id: 'foobar' },
    query: {},
    headers: {
      accept: '*/*',
      'content-length': '48',
      'content-type': 'application/json',
      host: 'localhost:8080',
      'user-agent': 'curl/8.13.0'
    },
    cookies: undefined,
    body: null
  }
```


# Original Readme below

---

# Modern.js App

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Enable optional features or add a new entry:

```bash
pnpm new
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm serve
```

