import { rm, access } from "fs/promises"

const remove = async () => {
  try {
    await access("files/fileToRemove.txt")
    await rm("files/fileToRemove.txt")
  } catch {
    throw new Error("FS operation failed")
  }
}

await remove()
