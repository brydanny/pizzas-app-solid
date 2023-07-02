import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { OrdersService } from './../../services/orders.service';
import { CreateOrderDto } from '../../dtos/orders.dtos';
import { PizzaBuilder } from './../../../pizzas/classes/pizza.builder';
import { CustomPizzaStrategy } from '../../../pizzas/classes/custom-pizza.strategy';

@Controller('order')
export class OrderController {
  constructor(
    private ordersService: OrdersService,
    @Inject(PizzaBuilder) private pizzaBuilder: PizzaBuilder,
  ) {}
  @Get()
  getOrders() {
    return this.ordersService.findAll();
  }
  @Post()
  create(@Body() payload: CreateOrderDto) {
    return this.ordersService.create(payload);
  }
  @Post('custom')
  createOrderCustomPizza(): string {
    this.pizzaBuilder.setStrategy(
      new CustomPizzaStrategy(['Cheese', 'Mushrooms', 'Pepperoni']),
    );
    return this.pizzaBuilder.preparePizza();
  }
}
