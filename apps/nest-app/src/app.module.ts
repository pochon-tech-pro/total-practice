import { Module } from '@nestjs/common';
import { SaleModule } from './sale/sale.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './sale/ui/auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from './sale/ui/auth/auth.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), SaleModule, AuthModule, UsersModule],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
