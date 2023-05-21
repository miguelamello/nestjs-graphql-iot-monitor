
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Device {
    id?: Nullable<string>;
    name?: Nullable<string>;
    location?: Nullable<string>;
    type?: Nullable<string>;
    created?: Nullable<string>;
}

export abstract class IQuery {
    abstract deviceById(id?: Nullable<string>): Nullable<Device> | Promise<Nullable<Device>>;

    abstract deviceByName(name?: Nullable<string>): Nullable<Device> | Promise<Nullable<Device>>;

    abstract devicesByName(name?: Nullable<string>): Nullable<Nullable<Device>[]> | Promise<Nullable<Nullable<Device>[]>>;

    abstract deviceTypes(): Nullable<Nullable<string>[]> | Promise<Nullable<Nullable<string>[]>>;

    abstract devicesByType(type?: Nullable<string>): Nullable<Nullable<Device>[]> | Promise<Nullable<Nullable<Device>[]>>;

    abstract devicesLocations(): Nullable<Nullable<string>[]> | Promise<Nullable<Nullable<string>[]>>;

    abstract devicesByLocation(location?: Nullable<string>): Nullable<Nullable<Device>[]> | Promise<Nullable<Nullable<Device>[]>>;
}

type Nullable<T> = T | null;
