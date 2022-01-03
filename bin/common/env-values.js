module.exports = {
  mysqlDatabaseUrl: process.env.MYSQL_DATABASE_URL || process.env.JAWSDB_URL || process.env.CLEARDB_DATABASE_URL,
  postgresqlDatabaseUrl: process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.PGDB_URL
}
