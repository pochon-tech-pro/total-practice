import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Staff } from '../users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  // @nestjs/passportの内部でLocalStrategy.validate()を実行しているので、明示的に実行している部分はありません。
  async validate(name: string, pass: string): Promise<Omit<Staff, 'password'>> {
    const staff = await this.authService.validateUser(name, pass);
    if (!staff) {
      throw new UnauthorizedException();
    }
    return staff;
  }
}
