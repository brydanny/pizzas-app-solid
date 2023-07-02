import { Injectable, Inject } from '@nestjs/common';
import { Db } from 'mongodb';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private apikey: string,
    @Inject('MONGO') private database: Db,
  ) {}

  getHello(): string {
    return `Hello World! ${this.apikey}`;
  }
  getPizzas() {
    const pizzasCollection = this.database.collection('pizza');
    return pizzasCollection.find().toArray();
  }
}
