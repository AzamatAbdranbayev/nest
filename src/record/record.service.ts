import { Injectable } from '@nestjs/common'
import { CreateRecordDto, UpdateRecordDto } from './dto/record.dto'

@Injectable()
export class RecordService {
    constructor() {}

    async create(dto: CreateRecordDto) {
        return 'created'
    }

    async update(dto: UpdateRecordDto) {
        return 'updated'
    }

    async get() {
        return {
            name: 1,
        }
    }
}
