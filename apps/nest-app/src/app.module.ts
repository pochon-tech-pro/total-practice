import { Module } from '@nestjs/common';
import { CustomerModule } from './sale/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './sale/ui/auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './sale/ui/auth/app.controller';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, AuthModule, UsersModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
