import { Controller, Get } from '@nestjs/common';

@Controller('pizza')
export class PizzaController {
  @Get()
  getPizzas(): string {
    return 'lista de pizzas';
  }
}
