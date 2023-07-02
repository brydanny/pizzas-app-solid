import { Module } from '@nestjs/common';
import { OrderController } from './controllers/order/order.controller';

@Module({
  controllers: [OrderController]
})
export class OrdersModule {}
