import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { mockProviders} from './mock.providers'
import { MockService } from './mock.service'
import { MockController } from './mock.controller'

@Module({
    imports: [DatabaseModule],
    controllers: [MockController],
    providers: [
        MockService,
        ...mockProviders,
    ],
})
export class MockModule {}
