# API Documentaion For Devices Monitoring

## Description
This API documentation provides information about the functionality of the 
devices monitoring API. The API is used to monitor the devices connected to the 
network. The API provides functionality described below.

## Version
No versioning is used for this API. This is a evolving API and the changes will 
be reflected in the documentation. We garantee that the changes will be backward 
compatible. 

## Servers
The API is hosted on the following servers:

Production server: `http://graphql.orionsoft.site`<br>
Development server: `http://localhost:3030/graphql`

## Endpoints
Differently from REST APIs, GraphQL APIs have only one endpoint where all the 
requests are sent. The endpoint for this API is:

Remote endoint: `http://graphql.orionsoft.site`<br>
Local endpoint: `http://localhost:3030/graphql`

### Methods
The API provides only one method: `POST`

### Headers
The API requires the following headers:

`Content-Type: application/json`

### Request Body
 The request body is required and must be a valid GraphQL query. 

 - For development:
 We recommend you to use a GraphQL desktop client to query the API. 
 Usually, the client will provide a GraphQL body to query the API.

 - For production:
 We recommend you to use a GraphQL client module suitable to your 
 programing language and production environment to query the API.

## Authentication
No authentication is required to use this API.

## Schema
The API provides the schema described below. The schema is used to query the API 
and to get the data you want. Continue reading to learn how to use the schema.

```
  type Device {
    id: ID 
    name: String
    location: String
    type: String
    created: String
  }

  type Query {
    deviceById(id: ID): Device
    deviceByName(name: String): Device
    devicesByName(name: String): [Device]
    deviceTypes: [String]
    devicesByType(type: String): [Device]
    deviceLocations: [String]
    devicesByLocation(location: String): [Device]
  }
```

Note: A playground is provided to test the API. The playground can be accessed 
by clicking on the following link in any browser:

`http://devices.orionsoft.site/graphql`

## Querying
The beauty of GraphQL is that you can query the API to get the data you want. 
Look at the schema above and you will see that the API provides seven queries 
that you can use to get the data you want.

The following methods exists for querying the API:

1) deviceById
2) deviceByName
3) devicesByName
4) deviceTypes
5) devicesByType
6) deviceLocations
7) devicesByLocation

### 1) deviceById
This query is used to get a device by its id. The query requires the id of the 
device as an argument. The query returns a device object if the device is found 
or null if the device is not found. 

#### Examples

1.1) Querying a device by its id and returning all the fields of the device:

```
  query {
    deviceById( id: "64697500582615bda4581f6b") {
      id
      name
      location
      type
      created
    }
  }
```
The response will be:

```
  {
    "data": {
      "device": {
        "id": "64697500582615bda4581f6b",
        "name": "Norland-S3D",
        "location": "Norland",
        "type": "S3D",
        "created": "2019-01-23T00:00:00.000Z"
      }
    }
  }
```

![devicesById.png](https://github.com/miguelamello/graphql/blob/main/images/devicesById.png)

1.2) Querying a device by its id and returning only the name and location fields:

```
  query {
    device( id: "64697500582615bda4581f6b") {
      name
      location
    }
  }
```

The response will be:

```
  {
    "data": {
      "device": {
        "name": "Norland-S3D",
        "location": "Norland"
      }
    }
  }
```

![devicesById(1).png](https://github.com/miguelamello/graphql/blob/main/images/devicesById(1).png)
### 2) deviceByName
This query is used to get a device by its name. The query requires the name of 
the device as an argument. The query returns a device object if the device is 
found or null if the device is not found.

#### Examples

2.1) Querying a device by its name and returning all the fields of the device:

```
  query {
    deviceByName( name: "Norland-S3D") {
      id
      name
      location
      type
      created
    }
  }
```
Note: The name of the device is case sensitive.

The response will be:

```
  {
    "data": {
      "deviceByName": {
        "id": "646825582e1d2015648b3aa1",
        "name": "Norland-S3D",
        "location": "Norland",
        "type": "S3D",
        "created": "2019-01-23T00:00:00.000Z"
      }
    }
  }
```

### 3) devicesByName
This query is used to get all the devices that match a name. The query requires 
the name of the devices as an argument. The query returns an array of devices 
that match the name or an empty array if no device is found.

#### Examples

3.1) Querying all the devices that match a name and returning all the fields of 
the devices:

```
  query {
    devicesByName( name: "Norland") {
      id
      name
      location
      type
      created
    }
  }
```

The response will be:

```
  {
    "data": {
      "devicesByName": [
        {
          "id": "646825582e1d2015648b3aa1",
          "name": "Norland-S3D",
          "location": "Sector 3-D",
          "type": "Pressure",
          "created": "2023-05-07T18:23:48-03:00"
        },
        {
          "id": "646826962e1d2015648b3aa2",
          "name": "Norland",
          "location": "Sector 44-A",
          "type": "Pressure",
          "created": "2023-05-02T18:23:48-03:00"
        },
        {
          "id": "6468271d2e1d2015648b3aa3",
          "name": "Norland",
          "location": "Sector 1-F",
          "type": "Pressure",
          "created": "2023-05-14T18:23:48-03:00"
        }
      ]
    }
  }
```

### 4) deviceTypes
This query is used to get all the device types. The query requires no arguments.
The query returns an array of device types. 

#### Examples

4.1) Querying all the device types:

```
  query {
    deviceTypes
  }
```

The response will be:

```
  {
    "data": {
      "deviceTypes": [
        "Pressure",
        "Temperature",
        "Humidity",
      ]
    }
  }
```

### 5) devicesByType
This query is used to get all the devices that match a type. The query requires 
the type of the devices as an argument. The query returns an array of devices 
that match the type or an empty array if no device is found. 

#### Examples

5.1) Querying all the devices that match a type and returning all the fields of 
the devices:

```
  query {
    devicesByType( type: "Pressure") {
      id
      name
      location
      type
      created
    }
  }
```

The response will be:

```
  {
    "data": {
      "devicesByType": [
        {
          "id": "646825582e1d2015648b3aa1",
          "name": "Norland-S3D",
          "location": "Sector 3-D",
          "type": "Pressure",
          "created": "2023-05-07T18:23:48-03:00"
        },
        {
          "id": "646826962e1d2015648b3aa2",
          "name": "Norland",
          "location": "Sector 44-A",
          "type": "Pressure",
          "created": "2023-05-02T18:23:48-03:00"
        },
        {
          "id": "6468271d2e1d2015648b3aa3",
          "name": "Norland",
          "location": "Sector 1-F",
          "type": "Pressure",
          "created": "2023-05-14T18:23:48-03:00"
        }
      ]
    }
  }
```

![devicesByType.png](https://github.com/miguelamello/graphql/blob/main/images/devicesByType.png)
### 6) devicesLocations
This query is used to get all the devices locations. The query requires no 
arguments. The query returns an array of devices locations. 

#### Examples

6.1) Querying all the devices locations:

```
  query {
    devicesLocations
  }
```

The response will be:

```
  {
    "data": {
      "devicesLocations": [
        "Sector 1-A",
        "Sector 1-B",
        "Sector 1-C",
        "Sector 1-F",
        "Sector 2-A",
        "Sector 2-B",
        "Sector 22-K",
        "Sector 3-A",
        "Sector 3-D",
        "Sector 4-B",
        "Sector 4-C",
        "Sector 4-D",
        "Sector 44-A",
        "Sector 5-D",
        "Sector 6-C",
        "Sector 6-D",
        "Sector 7-A",
        "Sector 7-C"
      ]
    }
  }
```

### 7) devicesByLocation
This query is used to get all the devices that match a location. The query 
requires the location of the devices as an argument. The query returns an array 
of devices that match the location or an empty array if no device is found.

#### Examples

7.1) Querying all the devices that match a location and returning all the fields 
of the devices:

```
  query {
    devicesByLocation( location: "Sector 5-D") {
      id
      name
      location
      type
      created
    }
  }
```

The response will be:

```
  {
    "data": {
      "devicesByLocation": [
        {
          "id": "646825582e1d2015648b3aa5",
          "name": "Eclipse-W2D",
          "location": "Sector 5-D",
          "type": "Temperature",
          "created": "2023-05-11T12:10:41-03:00"
        },
        {
          "id": "646825582e1d2015648b3ab1",
          "name": "Galaxy-T3D",
          "location": "Sector 5-D",
          "type": "Pressure",
          "created": "2023-05-23T13:55:56-03:00"
        }
      ]
    }
  }
```
