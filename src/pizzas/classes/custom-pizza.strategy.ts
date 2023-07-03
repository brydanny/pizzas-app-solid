import { Inject } from '@nestjs/common';
import { PizzaStrategy } from './pizza.strategy';
import { PromotionBuilder } from '../../promotions/classes/promotion.builder';
import { FreeDeliveryPromotionStrategy } from '../../promotions/classes/free-delivery-promotion.strategy';

export class CustomPizzaStrategy implements PizzaStrategy {
  private toppings: string[];
  private size: string;
  private crust: string;
  private type: string;
  private specialInstructions: string;
  private quantity: number;

  constructor(
    size: string,
    toppings: string[],
    crust: string,
    specialInstructions: string,
    quantity: number,
  ) {
    this.toppings = toppings;
    this.size = size;
    this.crust = crust;
    this.specialInstructions = specialInstructions;
    this.type = 'PERSONALIZADA';
    this.quantity = quantity;
  }

  /*getTotalPrice(): number {
    let totalPrice = this.quantity * 10;
    const delivery = 10;
    this.promotionBuilder.setStrategy(
      new FreeDeliveryPromotionStrategy(delivery),
    );

    totalPrice = this.promotionBuilder.applyPromotion();

    return totalPrice;
  }*/
  prepare(): any {
    const newPizza = {
      type: this.type,
      size: this.size,
      crust: this.crust,
      toppings: this.toppings,
      specialInstructions: this.specialInstructions,
      status: 'PREPARADO',
      quantity: this.quantity,
    };
    console.log(
      `Preparando  ${
        this.quantity
      } pizza personalizada con ingredientes: ${this.toppings.join(', ')}`,
    );
    return newPizza;
  }
}
