import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common'
import { Response, Request } from 'express'

@Catch(HttpException)
export class UpdateExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        const request = ctx.getRequest<Request>()
        const status = exception.getStatus()

        response.status(500).json({
            statusCode: 500,
            timestamp: new Date().toDateString(),
            path: request.url,
        })
    }
}
