import {open, readdir} from 'node:fs/promises'

export const readLogs = async (logsFolder, callback) => {
  try {
    const paths = await readdir(logsFolder)

    for (const path of paths) {
      const file = await open(logsFolder + '/' + path);

      for await (const line of file.readLines()) {
        callback(line)
      }
    }
  } catch (err) {
    console.error('⚠️', err)
  }
}
