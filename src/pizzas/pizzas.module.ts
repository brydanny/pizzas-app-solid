import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaController } from './controllers/pizza/pizza.controller';
import { PizzasService } from './services/pizzas.service';
import { Pizza, PizzaSchema } from './entities/pizza.entity';
import { PizzaBuilder } from './classes/pizza.builder';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pizza.name,
        schema: PizzaSchema,
      },
    ]),
  ],
  controllers: [PizzaController],
  providers: [PizzasService, PizzaBuilder],
  exports: [PizzaBuilder],
})
export class PizzasModule {}
