import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesController } from './devices.controller';
import { DevicesService } from './devices.service';
import { DevicesResolver } from './devices.resolver';
import { Device, DevicesSchema } from './devices.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Device.name, schema: DevicesSchema }]),
  ],
  controllers: [DevicesController],
  providers: [DevicesService, DevicesResolver]
})

export class DevicesModule {}
