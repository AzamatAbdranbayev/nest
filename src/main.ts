import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    await app.listen(process.env.BACK_PORT, () => {
        console.log('server started on port : ', process.env.BACK_PORT)
    })
}
bootstrap()
