import Marked from 'marked';

const renderer = new Marked.Renderer();

// Heading
renderer.heading = function (string) {
  return `[h1]${string}[/h1]`;
};

// Italic
renderer.em = function (string) {
  return `[i]${string}[/i]`;
};

// Strong
renderer.strong = function (string) {
  return `[b]${string}[/b]`;
};

// Strike
renderer.del = function (string) {
  return `[strike]${string}[/strike]`;
};

// Paragraph
renderer.paragraph = function (text) {
  return text;
};

// Url
renderer.link = function (href, title, text) {
  return `[url=${href}]${text}[/url]`;
};

// List or Olist
renderer.list = function (body, ordered) {
  if (ordered) {
    return `[olist]\n${body}[/olist]`;
  }
  return `[list]\n${body}[/list]`;
};

// List item
renderer.listitem = function (string) {
  return `[*]${string}\n`;
};

// Quote
renderer.blockquote = function (text) {
  const reg = /^\[(.*?)\]/;
  if (reg.test(text)) { // Contain author
    return `[quote=${RegExp.$1}]${text.replace(reg, '')}[/quote]`;
  }
  return `[quote]${text}[/quote]`;
};

// Code
renderer.codespan = function (string) {
  return `[code]${string}[/code]\n`;
};

const Md2SteamBBCode = function (text) {
  return Marked(text, { renderer });
};

export default Md2SteamBBCode;
