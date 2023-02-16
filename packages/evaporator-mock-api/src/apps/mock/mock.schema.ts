import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type MockDocument = Mock & Document

@Schema()
export class Mock {
  @Prop()
  name: string

  @Prop()
  endpoint: string

  @Prop()
  timeout: number

  @Prop()
  data: string

  @Prop()
  creator: string
  @Prop({
        default:()=>new Date()
    })
  createdAt: Date
}

export const MockSchema = SchemaFactory.createForClass(Mock)
