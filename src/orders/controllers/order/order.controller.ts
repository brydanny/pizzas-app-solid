import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { OrdersService } from './../../services/orders.service';
import { CreateOrderDto } from '../../dtos/orders.dtos';

@Controller('order')
export class OrderController {
  constructor(private ordersService: OrdersService) {}
  @Get()
  getOrders() {
    return this.ordersService.findAll();
  }
  @Post()
  createOrderPredefinedPizza(@Body() payload: CreateOrderDto) {
    return this.ordersService.createOrderPredefinedPizza(payload);
  }
  @Post('custom')
  createOrderCustomPizza(@Body() payload: CreateOrderDto) {
    return this.ordersService.createOrderCustomPizza(payload);
  }
}
