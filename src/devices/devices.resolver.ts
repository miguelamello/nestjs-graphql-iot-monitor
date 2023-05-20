import { Resolver, Query, Args } from '@nestjs/graphql';
import { DevicesService } from './devices.service';

@Resolver('Device')
export class DevicesResolver {
  constructor(
    private devicesService: DevicesService
  ) {}

  @Query()
  async deviceById(@Args('id') id: string) {
    return this.devicesService.deviceById(id);
  }

  @Query()
  async deviceByName(@Args('name') name: string) {
    return this.devicesService.deviceByName(name);
  }

  @Query()
  async devicesByName(@Args('name') name: string) {
    return this.devicesService.devicesByName(name);
  }

  @Query()
  async deviceTypes() {
    return this.devicesService.deviceTypes();
  }

  @Query()
  async devicesByType(@Args('type') type: string) {
    return this.devicesService.devicesByType(type);
  }

  @Query()
  async deviceLocations() {
    return this.devicesService.deviceLocations();
  }
 
  @Query()
  async devicesByLocation(@Args('location') location: string) {
    return this.devicesService.devicesByLocation(location);
  }

}

