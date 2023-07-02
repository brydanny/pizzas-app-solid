import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';
import config from 'config';
import { ConfigType } from '@nestjs/config';

const API_KEY = '1234567890';
const API_KEY_PROD = 'PROD123567890';

//const pizzaCollection = database.collection('pizza');
//const pizza = await pizzaCollection.find().toArray();
//console.log(pizza);

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName } =
          configService.mongo;
        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName,
        };
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    // {
    //   provide: 'MONGO',
    //   useFactory: async () => {
    //     const uri =
    //       'mongodb://root:root@localhost:27017/?authMechanism=DEFAULT';
    //     const client = new MongoClient(uri);
    //     await client.connect();
    //     const database = client.db('pizza-db');
    //     return database;
    //   },
    //   inject: [config.KEY],
    // },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const { connection, user, password, host, port, dbName } =
          configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authMechanism=DEFAULT`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    },
  ],
  exports: ['API_KEY', 'MONGO', MongooseModule],
})
export class DatabaseModule {}
