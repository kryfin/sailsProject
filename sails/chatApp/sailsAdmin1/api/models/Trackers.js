/**
* Trackers.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 connection: 'localhostMysqlServer',
   "schema": true,
  "attributes": {
  "trackerId": {
      "columnName": "tracker_id",
    
      "type": "integer",
      "autoIncrement": true,
      "primaryKey": true
    },
    "trackerImei": {
      "columnName": "tracker_imei",
      "type": "string",
      "size": 30
    },
  
    "accountId": {
      "columnName": "account_id",
      "type": "integer"
    }
    
  },
  "tableName": "tracker"
};

