import Replacer from './replacer.js'

class Md2bb extends Replacer {
  constructor () {
    super();

    let rules = [
      {
        name: 'bold',
        regex: /(\*\*)(.*?)\1/g,
        replacement: '[b]$2[/b]',
      },
      {
        name: 'italic',
        regex: /(\*)(.*?)\1/g,
        replacement: '[i]$2[/i]',
      },
      {
        name: 'under_line',
        regex: /(\_)(.*?)\1/g,
        replacement: '[u]$2[/u]',
      },
      {
        name: 'spoiler',
        regex: /\~\~(.*?)\~\~/g,
        replacement: '[spoiler]$1[/spoiler]',
      },
      {
        name: 'strike',
        regex: /\~{1}(.*?)\~{1}/g,  // TODO: 2個以上並んだ記号にもマッチするので直す必要あり
        replacement: '[strike]$1[/strike]',
      },
      {
        name: 'header',
        regex: /(\n|^)(#{1})[ ](.*)/g,
        replacement: '$1[h1]$3[/h1]',
      },
      {
        name: 'link',
        regex: /\[([^\[]+)\]\(([^\)]+)\)/g,
        replacement: "[url=$2]$1[/url]",
      },
      {
        name: 'noparse',
        regex: /``(.*?)``/g,
        replacement: '[noparse]$1[/noparse]',
      },
      {
        name: 'code',
        regex: /`(.*?)`{1}/g, // TODO: 2個以上並んだ記号にもマッチするので直す必要あり
        replacement: '[code]$1[/code]',
      },
      {
        name: 'quote',
        regex: /(\n|^)\>[ ](.*)/g,
        replacement:'[quote]$2[/quote]',
      },
      {
        name: 'quote_with_author',
        regex: /(\n|^)\>\[(.*)\][ ](.*)/g,
        replacement:'[quote=$2]$3[/quote]',
      },
      {
        name: 'quote_fix',
        regex: /\[\/quote\]\[quote\]/,
        replacement: "\n",
      },
      {
        name: 'ol_list',
        regex: /(\n|^)[ ]*[0-9]+\.[ ](.*)/g,
        replacement:'[olist]\n[*]$2\n[/olist]',
      },
      {
        name: 'ol_list_fix',
        regex: /\n\[\/olist\][ ]?\[olist\]/g,
        replacement:'',
      },
      {
        name: 'ulist',
        regex: /(\n|^)[ ]*[\*\-\+][ ](.*)/g,
        replacement:'[ulist]\n[*]$2\n[/ulist]',
      },
      {
        name: 'ul_list_fix',
        regex: /\n\[\/ulist\][ ]?\[ulist\]/g,
        replacement:'',
      },
    ]

    super.setRules(rules)
  }
}

export default Md2bb
