console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('js/app.js', 'utf8');

describe('', function () {
  it('Did you copy the provided code into **app.js** exactly as it is written?', function () {
    let structure = function() {
      const app = new Vue({
      });
    };

    let isMatch = Structured.match(code, structure);
    assert.isOk(isMatch);
  });
});