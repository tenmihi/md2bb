# md2steam-bbcode

> Convert [Steam](http://store.steampowered.com) review (or guide) written by markdown to [Steam BB Code Format](http://steamcommunity.com/comment/WorkshopItem/formattinghelp).

[![npm version](https://badge.fury.io/js/md2steam-bbcode.svg)](https://badge.fury.io/js/md2steam-bbcode)

## Installation

```console
$ npm install md2steam-bbcode
```

## Usage

```js
var md2SteamBBCode = require('Md2SteamBBCode');
console.log(md2SteamBBCode('**Markdown**'));
// OUTPUT: [b]Markdown[/b]
```

## Features

- Write steam review (and guide) more easily

## Syntax

About Steam BBCode format is [here](http://steamcommunity.com/comment/WorkshopItem/formattinghelp).

### Italic

` \*string\* => [i]string[/i] `

### Bold

` \**string\** => [b]string[/b] `

### Strike

` \~~string\~~ => [strike]string[/strike] `

### Link

` \[linkname](example.com) => [url=example.com]linkname[/url] `

### Code

`` `string` => [code]string[/code] ``

### Quote

`\>string => [quote]string[/quote]`

with author

`\>[tenmihi]string => [quote=tenmihi]string[/quote]`

### Listitem

```
\* itemA
\* itemB

=>

[list]
  [\*] itemA
  [\*] itemB
[/list]
```

with order

```
\1. itemA
\2. itemB

=>

[olist]
  [\*] itemA
  [\*] itemB
[/olist]
```

### Spoiler

Not supported, will be supported soon.

### Noparse

Not supported, will be supported soon.

## Author

tenmihi

## License

MIT
