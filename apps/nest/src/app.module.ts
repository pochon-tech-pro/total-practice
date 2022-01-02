import { Module } from '@nestjs/common';
import { CustomerModule } from './sale/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
