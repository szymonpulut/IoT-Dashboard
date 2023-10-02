import fs from 'fs'
import { print } from 'graphql'

import typeDefs from '@/typeDefs'

const printedTypeDefs = print(typeDefs)
fs.writeFileSync('joinedSchema.graphql', printedTypeDefs)
