import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePizzaDto } from '../../dtos/pizzas.dtos';
import { PizzasService } from '../../services/pizzas.service';

@Controller('pizza')
export class PizzaController {
  constructor(private pizzasService: PizzasService) {}
  @Get()
  getPizzas() {
    console.log('0001');
    return this.pizzasService.findAll();
    //return 'Hola desde modulo de pizzas';
  }
  @Post()
  create(@Body() payload: CreatePizzaDto) {
    return this.pizzasService.create(payload);
  }
}
