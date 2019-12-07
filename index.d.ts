declare const filea: {
    /**
    * Get the mime type of a file asyncronously.
    * @param filename The file to get the mime type for.
    * @example
    * ```
    * const filea = require("filea");
    *
    * (async () => {
    *     await filea("image.png")
    *     //=> image/png
    * })()
    * ```
    */
    (filename: string): Promise<string>

    /**
    * Get the mime type of a file syncronously.
    * @param filename The file to get the mime type for.
    * @example
    * ```
    * const filea = require("filea");
    *
    * filea.sync("image.png")
    * //=> image/png
    * ```
    */
    sync(filename: string): string
}

export = filea;
