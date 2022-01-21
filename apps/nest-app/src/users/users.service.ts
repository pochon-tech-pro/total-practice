import { Injectable } from '@nestjs/common';

export type Staff = {
  id: number;
  name: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: Staff[] = [
    {
      id: 1,
      name: 'A',
      password: 'a',
    },
  ];

  async findOne(name: string): Promise<Staff | undefined> {
    return this.users.find((user) => user.name === name);
  }
}
