import { Module } from '@nestjs/common';
import { CustomerModule } from './sale/customer.module';

@Module({
  imports: [CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
