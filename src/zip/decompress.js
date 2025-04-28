import { createReadStream, createWriteStream } from "fs"
import { createGunzip } from "zlib"

const decompress = async () => {
  const readStream = createReadStream("files/archive.gz")
  const writeStream = createWriteStream("files/fileToCompress.txt")
  const gunzip = createGunzip()
  readStream
    .pipe(gunzip)
    .pipe(writeStream)
    .on("error", () => {
      throw new Error("FS operation failed")
    })
}

await decompress()
