/*---------------------
	:: Messages
	-> model
---------------------*/
module.exports = {
tableName: 'Users',
    adapter: 'mysqladapter',
    migrate: 'safe',
  "schema": true,
  "attributes": {
    "userId": {
      "required": true,
      "type": "integer",
      "primaryKey": true
    },
    "username": {
      "type": "string",
      "size": 45
    },
    "message": {
      "type": "string",
      "size": 45
    }
  },
  "tableName": "Messages"
}