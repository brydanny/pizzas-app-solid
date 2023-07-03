import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dtos/orders.dtos';
import { PizzaBuilder } from '../../pizzas/classes/pizza.builder';
import { CustomPizzaStrategy } from '../../pizzas/classes/custom-pizza.strategy';
import { HawaianaPizzaStrategy } from '../../pizzas/classes/hawaiana-pizza.strategy';
@Injectable()
export class OrdersService {
  constructor(
    private configService: ConfigService,
    @InjectModel(Order.name) private orderModel: Model<Order>,
    @Inject(PizzaBuilder) private pizzaBuilder: PizzaBuilder,
  ) {}

  findAll() {
    return this.orderModel.find().exec();
  }
  createOrderPredefinedPizza(data: CreateOrderDto) {
    console.log(data);
    this.pizzaBuilder.setStrategy(
      new HawaianaPizzaStrategy(data.size, data.specialInstructions),
    );
    const newOrderPizza = new this.orderModel(this.pizzaBuilder.preparePizza());
    return newOrderPizza.save();
  }
  createOrderCustomPizza(data: CreateOrderDto) {
    console.log(data);
    this.pizzaBuilder.setStrategy(
      new CustomPizzaStrategy(
        data.size,
        data.toppings,
        data.crust,
        data.specialInstructions,
      ),
    );
    const newOrderPizza = new this.orderModel(this.pizzaBuilder.preparePizza());
    return newOrderPizza.save();
  }
}
