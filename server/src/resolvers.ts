import { loadFiles } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'
import path from 'path'
import url from 'url'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const loadedResolvers = await loadFiles(`${__dirname}/api/**/*.resolver.*`, {
  ignoreIndex: true,
  requireMethod: async (path) => {
    return await import(url.pathToFileURL(path) as unknown as string)
  },
})

const resolvers = mergeResolvers(loadedResolvers)

export default resolvers
