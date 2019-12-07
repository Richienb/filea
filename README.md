# Filea [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/filea/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/filea)

Get the mime type of a file.

[![NPM Badge](https://nodei.co/npm/filea.png)](https://npmjs.com/package/filea)

## Install

```sh
npm install filea
```

## Usage

```js
const filea = require("filea");

(async () => {
    await filea("image.png")
    //=> image/png
})()
```

## API

### filea(filename)

### filea.sync(filename)

#### filename

Type: `string`

The file to get the mime type for.
