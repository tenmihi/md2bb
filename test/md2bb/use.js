import assert from 'assert';

import md2bb_import from '../../src/js/md2bb.js';
const md2bb_require = require('../../src/js/md2bb.js');

describe("when use md2bb", function() {

  it("require ok", function() {
    assert.equal(typeof md2bb_require, "object");
  });

  it("import ok", function() {
    assert.equal(typeof md2bb_import, "function");
  });

});
