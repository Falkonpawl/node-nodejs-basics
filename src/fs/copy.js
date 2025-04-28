import { cp, access } from "fs/promises"

const copy = async () => {
    try{
    await access('./files')
    try{
    await access('./files_copy')
    throw new Error('FS operation failed')
  } catch(error){
    if (error.code !== 'ENOENT') {
        throw new Error('FS operation failed')
    }
  }
  await cp('./files', './files_copy', {recursive: true})}
  catch{
    throw new Error('FS operation failed')
  }
}


await copy()
