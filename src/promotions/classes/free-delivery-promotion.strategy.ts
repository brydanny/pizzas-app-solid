import { PromotionStrategy } from './promotion.strategy';
export class FreeDeliveryPromotionStrategy implements PromotionStrategy {
  private delivery: number;
  constructor(delivery: number) {
    this.delivery = delivery;
  }
  applyPromotion(): number {
    const today = new Date().getDay();

    if (today === 4) {
      this.delivery = 0;
    }
    return this.delivery;
  }
}
