import { Model } from 'mongoose';

import { PizzaStrategy } from './pizza.strategy';

export class CustomPizzaStrategy implements PizzaStrategy {
  private toppings: string[];
  private size: string;
  private crust: string;
  private type: string;
  private specialInstructions: string;

  constructor(
    size: string,
    toppings: string[],
    crust: string,
    specialInstructions: string,
  ) {
    this.toppings = toppings;
    this.size = size;
    this.crust = crust;
    this.specialInstructions = specialInstructions;
    this.type = 'PERSONALIZADA';
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
      `Preparando pizza personalizada con ingredientes: ${this.toppings.join(
        ', ',
      )}`,
    );
    return newPizza;
  }
}
