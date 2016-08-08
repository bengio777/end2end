// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgres://localhost/e2e_dev"
  },
  production:{
    connection: process.env.DATABASE_URL
  }
}
