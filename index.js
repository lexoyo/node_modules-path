#!/usr/bin/env node

// get our parent folder path
const path = require('path');
const fs = require('fs');

const pwd = __dirname.split(path.sep);

function getPath(moduleName, folder = pwd) {
  if(folder.length < 2) return null;
  const nodeModulesPath = folder.concat(['node_modules']).join(path.sep);
  if(fs.existsSync(nodeModulesPath + '/' + (moduleName || ''))) {
    return nodeModulesPath;
  }
  //console.log('not found:', nodeModulesPath + '/' + (moduleName || ''));
  return getPath(moduleName, folder.slice(0, -1));
};

const result = getPath(process.argv[2]);

// set an env var - avail to the current process, not in the global shell process
process.env.NODE_MODULES = result;

// return the node_module path 
console.log(result);

// for use in a nodejs script
module.exports = getPath;

