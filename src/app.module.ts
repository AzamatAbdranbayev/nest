import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { RecordModule } from './record/record.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        RecordModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
