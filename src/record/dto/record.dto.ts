import { IsString, IsNumber, Length } from 'class-validator'

const minSize = 3
// DTO на создание записи
export class CreateRecordDto {
    @IsString()
    @Length(minSize)
    name: string

    @IsString()
    @Length(minSize)
    value: string
}

// DTO на обновление записи
export class UpdateRecordDto {
    @IsNumber()
    id: number

    @IsString()
    @Length(minSize)
    name: string

    @IsString()
    @Length(minSize)
    value: string
}
