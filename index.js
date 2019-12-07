"use strict"

const fileType = require("file-type")
const readChunk = require("read-chunk")

module.exports = async (filename) => {
    if (typeof filename !== "string") throw new TypeError("filename is not a string!")

    return fileType(await readChunk(filename, 0, fileType.minimumBytes)).mime
}

module.exports.sync = (filename) => {
    if (typeof filename !== "string") throw new TypeError("filename is not a string!")

    return fileType(readChunk.sync(filename, 0, fileType.minimumBytes)).mime
}
