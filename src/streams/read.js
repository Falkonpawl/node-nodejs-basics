import { createReadStream } from "fs"

const read = async () => {
  const stream = createReadStream("files/fileToRead.txt")
  stream.pipe(process.stdout)
  stream.on("error", () => {
    throw new Error("FS operation failed")
  })
}

await read()
