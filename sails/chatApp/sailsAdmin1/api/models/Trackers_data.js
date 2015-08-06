/**
* Trackers-data.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	 connection: 'localhostMysqlServer',
 "schema": true,
  "attributes": {
 "trackerDataId": {
      "columnName": "tracker_data_id",

      "type": "integer",
      "autoIncrement": true,
      "primaryKey": true
    },
    "packetHeader": {
      "type": "string",
      "size": 50
    },
    "imei": {
      "type": "string",
      "size": 50
    },
    "stringCounter": {
      "columnName": "StringCounter",
      "type": "string",
      "size": 50
    },
    "trackID": {
      "columnName": "TrackID",
      "type": "string",
      "size": 50
    },
    "lat": {
      "columnName": "Lat",
      "type": "string",
      "size": 50
    },
    "lon": {
      "columnName": "Lon",
      "type": "string",
      "size": 50
    },
    "timeDate": {
      "columnName": "TimeDate",
      "type": "string",
      "size": 50
    },
    "fixNoFixERROR": {
      "columnName": "FixNoFixERROR",
      "type": "string",
      "size": 50
    },
    "satUsed": {
      "columnName": "SatUsed",
      "type": "string",
      "size": 50
    },
    "rSSI": {
      "columnName": "RSSI",
      "type": "string",
      "size": 50
    },
    "speed": {
      "columnName": "Speed",
      "type": "string",
      "size": 50
    },
    "heading": {
      "columnName": "Heading",
      "type": "string",
      "size": 50
    },
    "mileage": {
      "columnName": "Mileage",
      "type": "string",
      "size": 50
    },
    "timeTraveled": {
      "columnName": "TimeTraveled",
      "type": "string",
      "size": 50
    },
    "mCC": {
      "columnName": "MCC",
      "type": "string",
      "size": 50
    },
    "lNC": {
      "columnName": "LNC",
      "type": "string",
      "size": 50
    },
    "lAC": {
      "columnName": "LAC",
      "type": "string",
      "size": 50
    },
    "cI": {
      "columnName": "CI",
      "type": "string",
      "size": 50
    },
    "state": {
      "columnName": "State",
      "type": "string",
      "size": 50
    },
    "internalBatteryVolts": {
      "columnName": "InternalBatteryVolts",
      "type": "string",
      "size": 50
    },
    "mainBatteryVolts": {
      "columnName": "MainBatteryVolts",
      "type": "string",
      "size": 50
    },
    "aD1": {
      "columnName": "AD1",
      "type": "string",
      "size": 50
    },
    "aD2": {
      "columnName": "AD2",
      "type": "string",
      "size": 50
    },
    "aD3": {
      "columnName": "AD3",
      "type": "string",
      "size": 50
    },
    "aD4": {
      "columnName": "AD4",
      "type": "string",
      "size": 50
    },
    "sIM": {
      "columnName": "SIM",
      "type": "string",
      "size": 50
    },
    "extension": {
      "columnName": "Extension",
      "type": "string",
      "size": 50
    },
    "checksum": {
      "columnName": "Checksum",
      "type": "string",
      "size": 50
    },
    "trackerId1": {
      "columnName": "tracker_id1",
      "type": "integer"
    }
  },
  "tableName": "tracker_data"

};

