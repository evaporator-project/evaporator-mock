
import { MockSchema } from './mock.schema'
const {
  mockSchemaName,
} = global.conf.datasource.mongodb
export const mockProviders = [
  {
    provide: 'MONGODB_CONNECTION_MockRepository',
    useFactory: (connection: any) =>
      connection.model('mock_model', MockSchema, mockSchemaName),
    inject: ['MONGODB_CONNECTION'],
  }
]
