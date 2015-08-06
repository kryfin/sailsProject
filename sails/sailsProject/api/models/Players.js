/*---------------------
	:: Players
	-> model
---------------------*/
module.exports = {

tableName: 'Players',
  adapter: 'mysqladapter',
    migrate: 'safe',
	    
'mysqladapter': {
		module		: 'sails-mysql',
		host		: 'localhost',
		port:3306,

		user		: 'root',
		password	: 'admin123',
		database	: 'newdb'
	},

 "schema": true,
  "attributes": {
    "name": {
      "type": "string",
      "size": 45
    },
    "score": {
      "type": "string",
      "size": 45
    }
  },
  "tableName": "Players"
}