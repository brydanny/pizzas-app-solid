import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pizza extends Document {
  @Prop()
  name: string;
  @Prop()
  toppings: string[];
  @Prop()
  size: string;
  @Prop()
  price: number;
}

export const PizzaSchema = SchemaFactory.createForClass(Pizza);
