import { Module } from '@nestjs/common';
import { PizzaController } from './controllers/pizza/pizza.controller';

@Module({
  controllers: [PizzaController],
})
export class PizzasModule {}
