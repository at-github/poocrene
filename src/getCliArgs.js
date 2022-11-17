import {decode} from 'node:querystring'

export const getCliArgs = () => {
  const argsEntries = process.argv.slice(2)
    .map(arg => arg.split('='))

  return Object.fromEntries(argsEntries)
}
