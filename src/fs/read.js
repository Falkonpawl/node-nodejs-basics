import { readFile } from "fs/promises"

const read = async () => {
    try {
        const content = await readFile("files/fileToRead.txt", 'utf-8')
        console.log(content)
      } catch {
        throw new Error("FS operation failed")
      }
};

await read();