import { readdir, access } from "fs/promises"

const list = async () => {
  try {
    await access("files")
    const files = await readdir("files")
    console.log(files)
  } catch {
    throw new Error("FS operation failed")
  }
}

await list()
