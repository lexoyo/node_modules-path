#!/usr/bin/env node

// get our parent folder path
const path = require('path');
const fs = require('fs');

const pwd = __dirname.split(path.sep);

function getPath(moduleName, folder = pwd) {
  if(folder.length < 1) {
    logError(moduleName, folder);
    return null;
  }
  const nodeModulesPath = folder.concat(['node_modules']).join(path.sep);
  if(fs.existsSync(nodeModulesPath + '/' + (moduleName || ''))) {
    return nodeModulesPath;
  }
  res = getPath(moduleName, folder.slice(0, -1));
  if(!res) logError(moduleName, folder);
  return res;
};

function logError(moduleName, folder) {
  console.error(`Could not find the node_modules folder ${ moduleName ? "which contains " + moduleName : "" } in ${ folder.join('/') }`);
}
const result = getPath(process.argv[2]);

// set an env var - avail to the current process, not in the global shell process
process.env.NODE_MODULES = result;

// return the node_module path
console.log(result);

// for use in a nodejs script
module.exports = getPath;

