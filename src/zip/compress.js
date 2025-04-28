import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"

const compress = async () => {
  const readStream = createReadStream("files/fileToCompress.txt")
  const writeStream = createWriteStream("files/archive.gz")
  const gzip = createGzip()
  readStream
    .pipe(gzip)
    .pipe(writeStream)
    .on("error", () => {
      throw new Error("FS operation failed")
    })
}

await compress()
