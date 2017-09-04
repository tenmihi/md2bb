import assert from 'assert';
import Md2bb from '../../index.js';

describe('md2bb', function() {

  let md2bb;
  before(function(done) {
    md2bb = new Md2bb();
    done();
  });

  describe(('when text has only one tag'), function() {

    it("italic can parse", function() {
      assert.equal('[i]test[/i]', md2bb.parse('*test*'));
    });

    it("bold can parse", function() {
      assert.equal('[b]test[/b]', md2bb.parse('**test**'));
    });

    it("strike can parse", function() {
      assert.equal('[strike]test[/strike]', md2bb.parse('~test~'));
    });

    it("spoiler can parse", function() {
      assert.equal('[spoiler]test[/spoiler]', md2bb.parse('~~test~~'));
    });

    it("link can parse", function() {
      assert.equal('[url=example.com]link[/url]', md2bb.parse('[link](example.com)'));
    });

    it("list can parse", function() {
      assert.equal('[ulist]\n[*]test\n[*]test\n[/ulist]', md2bb.parse('* test\n* test'));
    });

    it("olist can parse", function() {
      assert.equal('[olist]\n[*]test\n[*]test\n[/olist]', md2bb.parse('1. test\n1. test'));
    });

    it("quote can parse", function() {
      assert.equal('[quote]test[/quote]', md2bb.parse('> test'));
    });

    it("quote with author can parse", function() {
      assert.equal('[quote=tenmihi]test[/quote]', md2bb.parse('>[tenmihi] test'));
    });

    it("code span can parse", function() {
      assert.equal('[code]test[/code]', md2bb.parse('`test`'));
    });

    it("no parse span can parse", function() {
      assert.equal('[noparse]test[/noparse]', md2bb.parse('``test``'));
    });

  });

  describe(('when large text'), function() {

    let beforeText, afterText;
    before(function(done) {
      beforeText = `
      `;
      afterText = `
      `;
      done();
    });

    it('result is text.', function() {
        assert.equal(typeof beforeText, 'string');
    });

    it('parse is correct.', function() {
        assert.equal(afterText, md2bb.parse(beforeText));
    });
  });

});
