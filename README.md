# Spectacle documentation site

[![Build Status](https://travis-ci.org/FormidableLabs/spectacle-docs.svg?branch=master)](https://travis-ci.org/FormidableLabs/spectacle-docs)

Now built with react-static!

## Getting Started

To install and run the docs site locally:

```bash
yarn install
yarn start
```
Note that paths in local development are based on a root of "/" but be careful when defining relative and absolute paths
inline or doing url parsing, as the production output root will be "open-source/spectacle."

## Want to see if you're ready to :shipit:?
To build the staging build output and serve it with the canonical path it'll have when built as a lander for formidable.com:
```bash
yarn stage
yarn serve
```
This step is important for validating that both the `basePath` used by the static HTML output and the `basename` used
by the client-side router are working as expected. This is also where you'll want to validate that there are no hardcoded,
inlined, or malformed asset paths that worked locally but will not resolve correctly in production!

## Ready to Publish?
To publish to NPM run

**This package _must_ be published with `npm@5.6.0`**

```bash
npm version <newversion | major | minor | patch> (see Versioning notes below)
git push origin master && git push --tags
npm publish
```

## Ready to Deploy?
OSS landers are deployed by the formidable.com package, see `DEPLOYMENT.md` or `lib/actions.js` there for how the build output is consumed.


## Tips for developing
* Almost all of your code will be executed in two contexts, first in node for server-side rendering and static html generation,
then client-side as a PWA. In addition to writing [node-safe code](https://github.com/nozzle/react-static/blob/master/docs/concepts.md#writing-universal-node-safe-code),
this also means that it's necessary to validate that both the static html and and the PWA are working as expected.

* In addition to two execution contexts, there are three stages: development, staging, and production. `yarn start` uses
a local dev server with live reload that takes about one second to rebuild. This is a good choice for most local development,
but it's important to keep in mind that **the development server does not build the static html.** For that, you will
want to use `yarn stage && yarn serve`. The `yarn build` command is used by formidable.com within its build script that
moves the output of this lander into the correct location within the overall site output.

* When debugging an issue with the static html output, don't be shy about cracking open the `dist` folder and looking at
the output!

* When debugging an issue with the PWA or SSR-PWA coordination, consider using `yarn stage-debug` -- this builds
the staging output without minification/uglification and propagates warnings/errors.

* We have seen errors related to minification, uglification, and codesplitting before, please do not treat the debug build
or the local dev server as 1:1 with production output!

## Tips for getting the most out of react-static and webpack documentation and tooling
* We are on react-static v5 due to blocking stability issues with v6, which means...

    * You'll want to make sure that when you refer to the docs you're in the v5 branch.

    * When you install the react-static CLI tool globally, you'll want to use the v5 version (`npm install -g react-static@^5.9.12`)
    which currently has a wider selection of working templates that can be very useful as executable canonical references.

    * If you're looking for the client-side router documentation for react-static to see how to implement a certain behavior,
     the best place to start is in the [react-router docs](https://reacttraining.com/react-router/web/api/), which
     react-static v5 uses under the hood. There are a few additional react-static specific properties for [Router](https://github.com/nozzle/react-static/blob/v5/docs/components.md#router),
     [Routes](https://github.com/nozzle/react-static/blob/v5/docs/components.md#routes), and [Link](https://github.com/nozzle/react-static/blob/v5/docs/components.md#link)
     but if you need something from the routing that doesn't seem to covered in the react-static api, the react-router
     docs are pretty likely to have you covered.

    * You'll ~~want~~ need to use Webpack 3 plugins. Webpack has an [interesting approach](https://github.com/webpack/webpack.js.org/issues/1854)
    to documenting old versions. The existing documentation is broadly usable but you may want to familiarize yourself
    with this [introductory v3 to v4 migration guide](https://webpack.js.org/migrate/4/) and the relevant [react-static
    docs](https://github.com/nozzle/react-static/blob/v5/docs/config.md#webpack)

    * Interestingly, some webpack v4 loaders still work with v3, while some webpack v3 loaders _don't_ work with webpack v3.
    Version-twiddling or using a different loader for reasons that are unclear may be required. When tweaking webpack,
    it's extra-important to validate both PWA and static html output and clear out cached files.

## Using this project as a template:

This lander is designed to be easily re-used as a template for other projects.

What to change:

- Docs Content: markdown content lives in `src/content/docs`. Any markdown files placed here will be rendered as separate pages, and header tags will be rendered into a hierarchical sidebar. (Please make sure header tags do not include any special symbols as they will be used to create anchor tags and hashes)
- Main page content
    - `src/screens/home/_content.js` includes section titles, descriptions, and assets urls
    - `src/screens/home/hero.js`
- Constants: client and static constants live in `src/constants.js` and `static-config-parts/constants.js` respectively
- Assets: logos, sidebar svgs and favicons (TODO: These are all very similar svgs, and could some day live in a separate repo, and take props like color, name etc)
