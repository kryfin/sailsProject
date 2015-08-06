/**
* Person.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
connection: 'localhostMysqlServer',
 "schema": true,
  "attributes": {
    
    "personId": {
      "columnName": "person_id",
      "type": "integer",
      "autoIncrement": true,
      "primaryKey": true
    },
    "personName": {
      "columnName": "person_name",
      "type": "string",
      "size": 50
    },
    "personAddress": {
      "columnName": "person_address",
      "type": "string",
      "size": 100
    },
    "personCnic": {
      "columnName": "person_cnic",
      "required": true,
      "type": "string",
      "size": 13
    },
    "personContact": {
      "columnName": "person_contact",
      "type": "string",
      "size": 14
    }


    // "id":{ 
    	
    //   "type": "integer",
    //   "autoIncrement": true,
    //   "primaryKey": true,
    //         "model":'Accounts'

    //     }

  },
  "tableName": "person"
};

