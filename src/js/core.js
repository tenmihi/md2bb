import Marked from 'marked';

const renderer = new Marked.Renderer();
renderer.strong = function (string) {
  return `[b]${string}[/b]`;
};

const Md2SteamBBCode = function (text) {
  return Marked(text, { renderer: this.renderer });
};

export default Md2SteamBBCode;
