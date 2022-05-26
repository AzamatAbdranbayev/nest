import {
    Body,
    Controller,
    Get,
    HttpCode,
    Post,
    Put,
    UseFilters,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common'
import { CreateRecordDto, UpdateRecordDto } from './dto/record.dto'
import { UpdateExceptionFilter } from './record.filter'
import { RecordService } from './record.service'

@Controller('records')
export class RecordController {
    constructor(private recordService: RecordService) {}

    @Post('/add')
    @UsePipes(new ValidationPipe())
    create(@Body() createDto: CreateRecordDto) {
        return this.recordService.create(createDto)
    }
    //
    @Put('/update')
    @UseFilters(new UpdateExceptionFilter())
    @HttpCode(201)
    @UsePipes(new ValidationPipe())
    update(@Body() updateDto: UpdateRecordDto) {
        return this.recordService.update(updateDto)
    }

    //
    @Get('/get')
    get() {
        return this.recordService.get()
    }
}
