#!/usr/bin/env node

// get our parent folder path
const Path = require('path');
const path = Path.resolve(__dirname, '..');

// set an env var - avail to the current process, not in the global shell process
process.env.NODE_MODULES = path;

// return the node_module path 
console.log(path);

