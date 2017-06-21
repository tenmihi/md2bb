import assert from 'assert';

import md2bbi from '../src/js/core.js';
const md2bbr = require('../src/js/core.js');

describe("use", function() {

  it("require", function() {
    assert.equal(typeof md2bbr, "function");
  });

  it("import", function() {
    assert.equal(typeof md2bbi, "function");
  });

});
