import assert from 'assert';
import Md2SteamBBCode from '../src/js/core.js';

describe("md2bb", function() {

  it("em", function() {
    assert.equal('[i]test[/i]', Md2SteamBBCode('*test*'));
  });

  it("strong", function() {
    assert.equal('[b]test[/b]', Md2SteamBBCode('**test**'));
  });

  it("strike", function() {
    assert.equal('[strike]test[/strike]', Md2SteamBBCode('~~test~~'));
  });

  it("link", function() {
    assert.equal('[url=example.com]link[/url]', Md2SteamBBCode('[link](example.com)'));
  });

  it("list", function() {
    assert.equal('[list]\n[*]test\n[*]test\n[/list]', Md2SteamBBCode('* test\n* test'));
  });

  it("olist", function() {
    assert.equal('[olist]\n[*]test\n[*]test\n[/olist]', Md2SteamBBCode('1. test\n1. test'));
  });

  it("quote", function() {
    assert.equal('[quote]test[/quote]', Md2SteamBBCode('>test'));
  });

  it("quote with author", function() {
    assert.equal('[quote=tenmihi]test[/quote]', Md2SteamBBCode('>[tenmihi]test'));
  });

  it("code span", function() {
    assert.equal('[code]test[/code]', Md2SteamBBCode('`test`'));
  });

});
