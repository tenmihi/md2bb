import Parser from 'simple-parser'

export default class Md2bb extends Parser {
  constructor () {
    super()

    this.setRules([
      {
        name: 'bold',
        regex: /\*\*(.*?)\*\*/g,
        replacement: '[b]$1[/b]',
      },
      {
        name: 'italic',
        regex: /\*(.*?)\*/g,
        replacement: '[i]$1[/i]',
      },
      {
        name: 'under_line',
        regex: /\_(.*?)\_/g,
        replacement: '[u]$1[/u]',
      },
      {
        name: 'spoiler',
        regex: /~~((.|\n)*?)~~/g,
        replacement: '[spoiler]$1[/spoiler]',
      },
      {
        name: 'strike',
        regex: /~(.*?)~/g,
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
        regex: /``((.|\n)*?)``/g,
        replacement: '[noparse]$1[/noparse]',
      },
      {
        name: 'code',
        regex: /`((.|\n)*?)`/g,
        replacement: '[code]$1[/code]',
      },
      {
        name: 'quote',
        regex: /(\n|^)\>[ ](.*)/g,
        replacement:'$1[quote]$2[/quote]',
      },
      {
        name: 'quote_with_author',
        regex: /(\n|^)\>\[(.*)\][ ](.*)/g,
        replacement:'$1[quote=$2]$3[/quote]',
      },
      {
        name: 'quote_fix',
        regex: /\[\/quote\]\n\[quote\]/,
        replacement: "\n",
      },
      {
        name: 'ol_list',
        regex: /(\n|^)[ ]*[0-9]+\.[ ](.*)/g,
        replacement:'$1[olist]\n[*]$2\n[/olist]',
      },
      {
        name: 'ol_list_fix',
        regex: /\n\[\/olist\]\n\[olist\]/g,
        replacement:'',
      },
      {
        name: 'ulist',
        regex: /(\n|^)[ ]*[\*\-\+][ ](.*)/g,
        replacement:'$1[ulist]\n[*]$2\n[/ulist]',
      },
      {
        name: 'ul_list_fix',
        regex: /\n\[\/ulist\]\n\[ulist\]/g,
        replacement:'',
      },
    ])
  }
}
