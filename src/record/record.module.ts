import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common'
import { RecordController } from './record.controller'
import { RecordMiddleware } from './record.middleware'
import { RecordService } from './record.service'

@Module({
    controllers: [RecordController],
    providers: [RecordService],
})
export class RecordModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(RecordMiddleware).forRoutes('/records')
    }
}
