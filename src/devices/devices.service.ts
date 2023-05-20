import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from './devices.model';

@Injectable()
export class DevicesService {

  constructor(@InjectModel(Device.name) private deviceModel: Model<Device>) {}

  async deviceById(id: string): Promise<Device> {
    return this.deviceModel.findById(id);
  }

  async deviceByName(name: string): Promise<Device> {
    return this.deviceModel.findOne({ name: name });
  }

  async devicesByName(name: string): Promise<Device[]> {
    const regex = new RegExp(name, 'i');
    return this.deviceModel.find({ name: { $regex: regex } });
  }

}
