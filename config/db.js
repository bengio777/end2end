console.log(process.env.NODE_ENV)
var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile.js')[environment];

var knex = require('knex')(config)
module.exports = {
  knex: knex,
  bookshelf: require('bookshelf')(knex)
}