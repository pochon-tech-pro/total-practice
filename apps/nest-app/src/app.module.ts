import { Module } from '@nestjs/common';
import { CustomerModule } from './sale/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
