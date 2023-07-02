import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PizzaController } from './controllers/pizza/pizza.controller';
import { PizzasService } from './services/pizzas.service';
import { Pizza, PizzaSchema } from './entities/pizza.entity';

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
  providers: [PizzasService],
})
export class PizzasModule {}
