// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/e2e_dev"
  },
  production:{
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
