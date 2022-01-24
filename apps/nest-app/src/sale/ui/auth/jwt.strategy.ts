import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';
import { Staff } from '../staffs/staffs.service';

export type JWTPayload = {
  sub: Staff['id'];
  username: Staff['name'];
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  // @nestjs/passportの内部でJwtStrategy.validate()を実行しているので、明示的に実行している部分はありません。
  async validate(payload: JWTPayload) {
    return { userId: payload.sub, username: payload.username };
  }
}
