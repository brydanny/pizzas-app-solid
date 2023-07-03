import { Module } from '@nestjs/common';
import { PromotionController } from './controllers/promotion/promotion.controller';
import { PromotionBuilder } from './classes/promotion.builder';

@Module({
  controllers: [PromotionController],
  providers: [PromotionBuilder],
  exports: [PromotionBuilder],
})
export class PromotionsModule {}
