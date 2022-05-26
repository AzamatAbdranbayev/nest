import {
    HttpException,
    HttpStatus,
    Injectable,
    NestMiddleware,
} from '@nestjs/common'
import { Request, Response } from 'express'
@Injectable()
export class RecordMiddleware implements NestMiddleware {
    constructor() {}

    public async use(req: Request, res: Response, next: () => void) {
        if (req.method !== 'POST' && req.originalUrl === '/records/add') {
            throw new HttpException(
                'тип запроса не post',
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
        if (req.method !== 'PUT' && req.originalUrl === '/records/update') {
            throw new HttpException(
                'тип запроса не put',
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }

        next()
    }
}
