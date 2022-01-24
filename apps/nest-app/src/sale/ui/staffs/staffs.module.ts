import { Module } from '@nestjs/common';
import { StaffsService } from './staffs.service';

@Module({
  providers: [StaffsService],
  exports: [StaffsService],
})
export class StaffsModule {}
