# Developer Voice

Developer Voice website built with DatoCMS + Next.js

```sh
npm run i       # install dependencies

npm run dev     # start development server
npm run schema  # download graphql schema & codegen types
npm run types   # run typescript compiler
npm run fix     # run prettier & eslint --fix

npm run build   # build production version
npm run start   # start production server
npm run clean   # remove .next directory
```

### Initial Setup

Forgotten steps, for deploying

1. Vercel requires Node 14.x, currently
1. Add `.env.local` contents to Vercel, too
1. Hook up Vercel project with GitHub repo
1. Hook up DatoCMS Build Trigger to Vercel
1. Update DatoCMS Preview Extension site URL
