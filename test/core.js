import assert from 'assert';
import md2bb from '../src/js/core.js';

describe("core", function() {

  it("em", function() {
    assert.equal('[i]test[/i]', md2bb('*test*'));
  });

  it("strong", function() {
    assert.equal('[b]test[/b]', md2bb('**test**'));
  });

  it("strike", function() {
    assert.equal('[strike]test[/strike]', md2bb('~~test~~'));
  });

  it("link", function() {
    assert.equal('[url=example.com]link[/url]', md2bb('[link](example.com)'));
  });

  it("list", function() {
    assert.equal('[list]\n[*]test\n[*]test\n[/list]', md2bb('* test\n* test'));
  });

  it("olist", function() {
    assert.equal('[olist]\n[*]test\n[*]test\n[/olist]', md2bb('1. test\n1. test'));
  });

  it("quote", function() {
    assert.equal('[quote]test[/quote]', md2bb('>test'));
  });

  it("quote with author", function() {
    assert.equal('[quote=tenmihi]test[/quote]', md2bb('>[tenmihi]test'));
  });

  it("code span", function() {
    assert.equal('[code]test[/code]', md2bb('`test`'));
  });

});
