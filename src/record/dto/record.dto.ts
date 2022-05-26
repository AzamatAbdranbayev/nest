import { ApiProperty } from '@nestjs/swagger'
import { IsString, IsNumber, Length } from 'class-validator'

const minSize = 3
// DTO на создание записи
export class CreateRecordDto {
    @IsString()
    @Length(minSize)
    @ApiProperty({ example: 'some name', description: 'наименование записи' })
    name: string

    @IsString()
    @Length(minSize)
    @ApiProperty({
        example: 'some value',
        description: 'Значение записи',
    })
    value: string
}

// DTO на обновление записи
export class UpdateRecordDto {
    @IsNumber()
    @ApiProperty({ example: '123', description: 'айди записи' })
    id: number

    @IsString()
    @Length(minSize)
    @ApiProperty({ example: 'some name', description: 'наименование записи' })
    name: string

    @IsString()
    @Length(minSize)
    @ApiProperty({
        example: 'some value',
        description: 'Значение записи',
    })
    value: string
}
