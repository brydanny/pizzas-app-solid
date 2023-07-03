import { PromotionStrategy } from './promotion.strategy';

export class TwoForOnePromotionStrategy implements PromotionStrategy {
  private quantity: number;
  constructor(quantity: number) {
    this.quantity = quantity;
  }
  applyPromotion(): number {
    const today = new Date().getDay();

    if (today === 2 || today === 3) {
      this.quantity = this.quantity * 2;
    }
    return this.quantity;
  }
}
