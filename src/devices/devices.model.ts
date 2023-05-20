import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Schema()
export class Device extends Document {

  @Field() 
  @Prop({ required: true })
  name: string

  @Field() 
  @Prop({ required: true }) 
  location: string

  @Field()
  @Prop({ required: true })
  type: string

  @Field()
  @Prop({ required: true, default: Date.now })
  created: string

}

export const DevicesSchema = SchemaFactory.createForClass(Device);
