import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dtos/orders.dtos';

@Injectable()
export class OrdersService {
  constructor(
    private configService: ConfigService,
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  findAll() {
    return this.orderModel.find().exec();
  }
  create(data: CreateOrderDto) {
    const newOrderPizza = new this.orderModel(data);
    return newOrderPizza.save();
  }
}
