# md2bb

> [Steam BB Code](http://steamcommunity.com/comment/WorkshopItem/formattinghelp). Text written by markdown like syntax.

[![npm version](https://badge.fury.io/js/md2bb.svg)](https://badge.fury.io/js/md2bb)

## Installation

```console
$ npm install md2bb
```

## Usage

```js
var md2bb = require('md2bb');
console.log(md2bb.parse('**Markdown**'));
// OUTPUT: [b]Markdown[/b]
```

## Features

- Write steam review (and guide) more easily

## Syntax

About Steam BBCode format is [here](http://steamcommunity.com/comment/WorkshopItem/formattinghelp).

| Name               | Markdown                | BBCode                          |
|:-------------------|:-----------------------:|:-------------------------------:|
| Header             | # string                | [h1]string[/h1]                 |
| Bold               | **string**              | [b]string[/b]                   |    
| Underline          | _string_                | [u]string[/u]                   |
| Italic             | *string*                | [i]string[/i]                   |
| Strike             | ~string~                | [strike]string[/strike]         |
| Spoiler            | ~~string~~              | [spoiler]string[/spoiler]       |
| Noparse            | ``text``                | [noparse]text[/noparse]         |
| Url                | [linkname](example.com) | [url=example.com]linkname[/url] |
| List               | * item                  | [list][*]item[/list]            |
| OList              | 1. item                 | [olist][*]item[/olist]          |
| Quote              | > text                  | [quote]text[/quote]             |
| Quote(with author) | >[yourname] text        | [quote=yourname]text[/quote]    |
| Code               | `text`                  | [code]text[/code]               |

## Author

tenmihi

## License

MIT
