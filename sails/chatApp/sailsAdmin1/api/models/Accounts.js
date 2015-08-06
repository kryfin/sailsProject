/**
* Accounts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
connection: 'localhostMysqlServer',
   "schema": true,
  "attributes": {
  
   "accountId": {
      "columnName": "account_id",
      
      "type": "integer",
      "autoIncrement": true,
      "primaryKey": true
    },
    "accountName": {
      "columnName": "account_name",
      "type": "string",
      "size": 50
    },
    "accountPassword": {
      "columnName": "account_password",
      "type": "string",
      "size": 100
    },
    "personId": {
      "columnName": "person_id",
      "type": "integer"
    },
    "roleId": {
      "columnName": "role_id",
      "type": "integer"
    }
    //       owner: {
    //   model: 'person'
    // }
  },
  "tableName": "accounts"
};

