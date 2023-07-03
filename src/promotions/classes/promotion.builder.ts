import { Injectable } from '@nestjs/common';
import { PromotionStrategy } from './promotion.strategy';

@Injectable()
export class PromotionBuilder {
  private strategy: PromotionStrategy;

  setStrategy(strategy: PromotionStrategy): void {
    this.strategy = strategy;
  }
  applyPromotion(): number {
    if (!this.strategy) {
      throw new Error('Strategy not set');
    }

    return this.strategy.applyPromotion();
  }
}
