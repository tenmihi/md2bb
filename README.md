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

### Spoiler

```
# markdown
~~string~~

# bbcode
[spoiler]string[/spoiler]
```

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
~string~

# bbcode
[strike]string[/strike]
```

### UnderLine

```
# markdown
_string_

# bbcode
[u]string[/u]
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

### Noparse

```
# markdown
``string``

# bbcode
[noparse]string[/noparse]
```

### Quote

```
# markdown
> string

# bbcode
[quote]string[/quote]
```

with author

```
# markdown
>[tenmihi] string

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

## Author

tenmihi

## License

MIT
