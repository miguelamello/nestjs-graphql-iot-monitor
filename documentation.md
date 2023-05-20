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

Production server: `http://devices.orionsoft.site/graphql`<br>
Development server: `http://localhost:3000/graphql`

## Endpoints
The API provides the following endpoints:

`/graphql`

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
The API provides a schema described below. The schema is used to query the API 
and to get the data you want. Continue reading to learn how to use the schema.

```
  type Device {
    id: String
    name: String
    location: String
    type: String
    created: String
  }

  type Query {
    deviceById(id: String): Device
    deviceByName(name: String): Device
    devicesByName(name: String): [Device]
  }
```

Note: A playground is provided to test the API. The playground can be accessed 
by clicking on the following link in any browser:

`http://devices.orionsoft.site/graphql`



