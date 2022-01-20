import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    // > we choose a property name of sub to hold our userId value to be consistent with JWT standard
    // subクレームは、JWTのRFC基準に従うために実装しておく必要があります。
    // subクレームは、ユーザーの一意識別子を表現します（値の形式はRFC7519）。基本的にDBのPrimaryKeyでよさそう。
    // https://qiita.com/TakahikoKawasaki/items/8f0e422c7edd2d220e06
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
