const assert = require('assert');
const fs = require('fs');
const path = require('path');

const dest = './tests/node_modules/module1/';
const fileName = 'index.js';
console.log('Test: move the script to', dest);

fs.copyFileSync(fileName, dest + fileName);
const node_modules = require(dest + fileName);


const pwd = __dirname;
const node_modules1 = path.resolve(__dirname, 'tests/node_modules');
const node_modules2 = path.resolve(__dirname, 'tests/node_modules/module1/node_modules');

assert.equal(node_modules(), node_modules2);
assert.equal(node_modules('module1'), node_modules1);
assert.equal(node_modules('module2'), node_modules2);
console.log('Test success');

console.log('Cleanup: remove', dest + fileName);
fs.unlinkSync(dest + fileName);

console.log('Done');

