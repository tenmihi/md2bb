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

```
# markdown
*string*

# bbcode
[i]string[/i]
```

### Bold

```
# markdown
**string**

# bbcode
[b]string[/b]
```

### Strike

```
# markdown
~~string~~

# bbcode
[strike]string[/strike]
```

### Link

```
# markdown
[linkname](example.com)

# bbcode
[url=example.com]linkname[/url]
```

### Code

```
# markdown
`string`

# bbcode
[code]string[/code]
```

### Quote

```
# markdown
>string

# bbcode
[quote]string[/quote]
```

with author

```
# markdown
>[tenmihi]string

# bbcode
[quote=tenmihi]string[/quote]
```

### Listitem

```
# markdown
* itemA
* itemB

# bbcode
[list]
  [*] itemA
  [*] itemB
[/list]
```

with order

```
# markdown
1. itemA
2. itemB

# bbcode
[olist]
  [*] itemA
  [*] itemB
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
