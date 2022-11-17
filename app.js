import {getCliArgs} from './src/getCliArgs.js'
import {extractIdFromUrl} from './src/urlParser.js'
import {readLogs} from './src/readLogs.js'
import {countUniqKeys} from './src/handleKeys.js'

const {
  path: logsPath                 = './logs',
  count: mostFrequentItemsNumber = 5
} = getCliArgs()

let ids = []

const getIdFromLine = line => {
  const id = extractIdFromUrl(line)
  if (id !== null) ids.push(id)
}

await readLogs(logsPath, getIdFromLine)

const data = countUniqKeys(ids)
  .sort((current, next) => next.count - current.count)
  .slice(0, mostFrequentItemsNumber)

console.table(data)
