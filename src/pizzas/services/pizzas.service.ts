import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as winston from 'winston';

import { Pizza } from '../entities/pizza.entity';
import { CreatePizzaDto } from '../dtos/pizzas.dtos';

@Injectable()
export class PizzasService {
  constructor(
    private configService: ConfigService,
    @InjectModel(Pizza.name) private pizzaModel: Model<Pizza>,
  ) {}

  private readonly logger = winston.createLogger({
    transports: [new winston.transports.File({ filename: 'pizzas-app.log' })],
  });

  findAll() {
    const apiKey = this.configService.get('API_KEY');
    const dbName = this.configService.get('DATABASE_NAME');
    this.logger.info(apiKey, dbName);
    this.logger.info(`register-pass: ${apiKey} - ${dbName}`);
    return this.pizzaModel.find().exec();
  }
  create(data: CreatePizzaDto) {
    const newPizza = new this.pizzaModel(data);
    this.logger.info(newPizza);
    return newPizza.save();
  }
}
