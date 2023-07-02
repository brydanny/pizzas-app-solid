import { PizzaStrategy } from './pizza.strategy';

export class HawaianaPizzaStrategy implements PizzaStrategy {
  prepare(): string {
    return 'Preparing Hawaina pizza';
  }
}
