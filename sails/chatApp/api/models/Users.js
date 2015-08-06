/*---------------------
	:: Users
	-> model
---------------------*/
module.exports = {
	tableName: 'Users',
    adapter: 'mysqladapter',
    migrate: 'safe',
	    


 "schema": true,
  "attributes": {
    "username": {
      "type": "string",
      "size": 45
    },
    "password": {
      "type": "string",
      "size": 45
    }
  },
  "tableName": "Users"
};