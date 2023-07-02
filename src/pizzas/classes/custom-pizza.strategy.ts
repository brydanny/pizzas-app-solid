import { PizzaStrategy } from './pizza.strategy';

export class CustomPizzaStrategy implements PizzaStrategy {
  private toppings: string[];

  constructor(toppings: string[]) {
    this.toppings = toppings;
  }
  prepare(): string {
    return `Preparing custom pizza with toppings: ${this.toppings.join(', ')}`;
  }
}
