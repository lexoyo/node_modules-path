

Get the path of the `node_modules` folder in your scripts or CLI or `package.json`. This is useful when you are building a library that can either be used as an npm dependency or directly, [see this question on SO](https://stackoverflow.com/questions/44279838/copy-assets-from-npm).

Install with `npm install node_modules-path --save`. Use it in your `packge.json` like this:

```
"name": "my-super-project",
"scripts": {
  "build": "cp -R `node_modules`/font-awesome/fonts/* dist/fonts/",
```

Or you can use the env var `NODE_MODULES` exported by the script, but only in the same process.

