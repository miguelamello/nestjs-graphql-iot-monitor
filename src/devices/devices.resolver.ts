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

  /*@ResolveField()
  async posts(@Parent() author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }*/
}

