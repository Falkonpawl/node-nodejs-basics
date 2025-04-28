import { access, writeFile } from "fs/promises"
import path from "path"

const create = async () => {
  const filePath = path.join("files", "fresh.txt")
  try {
    await access("fresh.txt")
    throw new Error("FS operation failed")
  } catch (error) {
    if (error.code === "ENOENT") {
      await writeFile(filePath, "I am fresh and young")
    } else {
      throw error
    }
  }
}

await create()
