

Retrieve the path of the `node_modules` folder. This is useful when you are building a library that can either be used as an npm dependency or directly, [see this question on SO](https://stackoverflow.com/questions/44279838/copy-assets-from-npm).

Install with `npm i node_modules-path`

In a shell script

```
$ echo `npm run node_modules`
```

In you packge.json npm scripts

```
   "build:fonts": "mkdir -p dist/fonts && cp -R `node_modules`/font-awesome/fonts/* `node_modules`/npm-font-open-sans/fonts/* dist/fonts/",
```

Or you can use the env var `NODE_MODULES` exported by the script, but only in the same process.

