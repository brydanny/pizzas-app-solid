import { PizzaStrategy } from './pizza.strategy';

export class HawaianaPizzaStrategy implements PizzaStrategy {
  private toppings: string[];
  private size: string;
  private crust: string;
  private type: string;
  private name: string;
  private specialInstructions: string;

  constructor(size: string, specialInstructions: string) {
    this.toppings = ['Piña', 'Jamón', 'Queso Mozzarella', 'Salsa de Tomate'];
    this.size = size;
    this.crust = 'ORIGINAL';
    this.specialInstructions = specialInstructions;
    this.type = 'PREESTABLECIDO';
    this.name = 'HAWAIANA';
  }

  prepare(): any {
    const newPizza = {
      type: this.type,
      size: this.size,
      crust: this.crust,
      toppings: this.toppings,
      specialInstructions: this.specialInstructions,
      status: 'PREPARADO',
    };
    console.log(
      `Preparando pizza ${this.name} con ingredientes: ${this.toppings.join(
        ', ',
      )}`,
    );
    return newPizza;
  }
}
