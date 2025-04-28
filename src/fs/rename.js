import { rename as fsRename, access } from "fs/promises"

const rename = async () => {
  try {
    await access("files/wrongFilename.txt")
    try {
      await access("files/properFilename.md")
      throw new Error("FS operation failed")
    } catch (error) {
      if (error.code !== "ENOENT") {
        throw new Error("FS operation failed")
      }
    }
    await fsRename("files/wrongFilename.txt", "files/properFilename.md")
  } catch {
    throw new Error("FS operation failed")
  }
}

await rename()
