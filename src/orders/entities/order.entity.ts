import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document {
  @Prop()
  type: string;
  @Prop()
  size: string;
  @Prop()
  crust: string;
  @Prop()
  toppings: string[];
  @Prop()
  quantity: number;
  @Prop()
  specialInstructions: string;
  @Prop()
  status: string;
  @Prop()
  totalPrice: number;
}
export const OrderSchema = SchemaFactory.createForClass(Order);
