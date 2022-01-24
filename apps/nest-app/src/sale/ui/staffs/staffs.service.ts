import { Injectable } from '@nestjs/common';

export type Staff = {
  id: number;
  name: string;
  password: string;
};

@Injectable()
export class StaffsService {
  private readonly staffs: Staff[] = [
    {
      id: 1,
      name: 'A',
      password: 'a',
    },
  ];

  async findOne(name: string): Promise<Staff | undefined> {
    return this.staffs.find((staff) => staff.name === name);
  }
}
