export const api = {
  port: process.env.PORT || 3009
}

export const oracle = {
  host: process.env.ORACLE_CONNECTION_STRING || 'localhost:1521/ORCL',
  user: process.env.ORACLE_USER || 'web',
  password: process.env.ORACLE_PASSWORD || 'web'
}
