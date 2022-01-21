import { Injectable } from '@nestjs/common';
import { Staff, UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    name: string,
    pass: string,
  ): Promise<Omit<Staff, 'password'>> {
    const staff = await this.usersService.findOne(name);
    if (staff && staff.password === pass) {
      const { password, ...result } = staff;
      return result;
    }
    return null;
  }

  async login(staff: Omit<Staff, 'password'>) {
    // > we choose a property name of sub to hold our userId value to be consistent with JWT standard
    // subクレームは、JWTのRFC基準に従うために実装しておく必要があります。
    // subクレームは、ユーザーの一意識別子を表現します（値の形式はRFC7519）。基本的にDBのPrimaryKeyでよさそう。
    // https://qiita.com/TakahikoKawasaki/items/8f0e422c7edd2d220e06
    const payload = { username: staff.name, sub: staff.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
