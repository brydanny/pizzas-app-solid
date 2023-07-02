import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class Pizza {
  id: number;
  name: string;
  toppings: string[];
  size: string;
  price: number;
}
