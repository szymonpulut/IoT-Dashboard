import { loadFiles } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const loadedTypeDefs = await loadFiles(`${__dirname}/api/**/*.schema.*`, {
  ignoreIndex: true,
  requireMethod: async (path) => {
    return await import(url.pathToFileURL(path) as unknown as string)
  },
  extensions: ['graphql'],
})

const typeDefs = mergeTypeDefs(loadedTypeDefs)

export default typeDefs
