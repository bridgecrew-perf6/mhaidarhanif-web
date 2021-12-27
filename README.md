# mhaidarhanif-web

M Haidar Hanif's personal website with React+Remix. Deployed to Vercel.

Current repo is at [mhaidarhanif-web](https://github.com/mhaidarhanif/mhaidarhanif-web) on GitHub.

## Variants

The website has been rebuilt a lot of times. Some of them are still in here:

- [mhaidarhanif-web-remix-fly](https://github.com/mhaidarhanif/mhaidarhanif-web-remix-fly)
- [mhaidarhanif-web-nx-monorepo](https://github.com/mhaidarhanif/mhaidarhanif-web-nx-monorepo)
- [mhaidarhanif-web-gatsby](https://github.com/mhaidarhanif/mhaidarhanif-web-gatsby)

## Development

Read [Remix Docs](https://remix.run/docs).

To run this Remix app locally, make sure the project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).
