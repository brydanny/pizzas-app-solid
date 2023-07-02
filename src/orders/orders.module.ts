import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from './controllers/order/order.controller';
import { OrdersService } from './services/orders.service';
import { Order, OrderSchema } from './entities/order.entity';
import { PizzasModule } from '../pizzas/pizzas.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Order.name,
        schema: OrderSchema,
      },
    ]),
    PizzasModule,
  ],
  controllers: [OrderController],
  providers: [OrdersService],
})
export class OrdersModule {}
