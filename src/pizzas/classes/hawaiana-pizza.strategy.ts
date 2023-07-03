import { PizzaStrategy } from './pizza.strategy';

export class HawaianaPizzaStrategy implements PizzaStrategy {
  private toppings: string[];
  private size: string;
  private crust: string;
  private type: string;
  private name: string;
  private specialInstructions: string;
  private quantity: number;

  constructor(size: string, specialInstructions: string, quantity: number) {
    this.toppings = ['Piña', 'Jamón', 'Queso Mozzarella', 'Salsa de Tomate'];
    this.size = size;
    this.crust = 'ORIGINAL';
    this.specialInstructions = specialInstructions;
    this.type = 'PREESTABLECIDO';
    this.name = 'HAWAIANA';
    this.quantity = quantity;
  }

  prepare(): any {
    const newPizza = {
      type: this.type,
      size: this.size,
      crust: this.crust,
      toppings: this.toppings,
      specialInstructions: this.specialInstructions,
      status: 'PREPARADO',
      name: this.name,
      quantity: this.quantity,
    };
    console.log(
      `Preparando ${this.quantity} pizzas ${
        this.name
      } con ingredientes: ${this.toppings.join(', ')}`,
    );
    return newPizza;
  }
}
