import { createWriteStream } from "fs"

const write = async () => {
  const stream = createWriteStream("files/fileToWrite.txt")
  process.stdin.pipe(stream)
  stream.on("error", () => {
    throw new Error("FS operation failed")
  })
}

await write()
