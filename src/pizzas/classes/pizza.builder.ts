import { Injectable } from '@nestjs/common';
import { PizzaStrategy } from './pizza.strategy';

@Injectable()
export class PizzaBuilder {
  private strategy: PizzaStrategy;

  setStrategy(strategy: PizzaStrategy): void {
    this.strategy = strategy;
  }

  preparePizza(): string {
    if (!this.strategy) {
      throw new Error('Strategy not set');
    }

    return this.strategy.prepare();
  }
}
