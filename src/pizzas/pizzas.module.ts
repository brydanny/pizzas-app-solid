import { Module } from '@nestjs/common';
import { PizzaController } from './controllers/pizza/pizza.controller';
import { PizzasService } from './services/pizzas.service';

@Module({
  controllers: [PizzaController],
  providers: [PizzasService],
})
export class PizzasModule {}
