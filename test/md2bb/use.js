import assert from 'assert';

import md2bb_import from '../../index.js';
const md2bb_require = require('../../index.js');

describe("when use md2bb", function() {

  it("require ok", function() {
    assert.equal(typeof md2bb_require, "object");
  });

  it("import ok", function() {
    assert.equal(typeof md2bb_import, "function");
  });

});
