import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 2,
  tables: [
    tableSchema({
      name: 'transactions',
      columns: [
        { name: 'asset', type: 'string', isOptional: true },
        { name: 'error', type: 'boolean' },
        { name: 'from', type: 'string' },
        { name: 'hash', type: 'string' },
        { name: 'native', type: 'string', isOptional: true },
        { name: 'pending', type: 'boolean' },
        { name: 'timestamp', type: 'number', isOptional: true },
        { name: 'to', type: 'string' },
        { name: 'txfee', type: 'string', isOptional: true },
        { name: 'value', type: 'string', isOptional: true },
      ]
    }),
  ]
})
