import pkg from 'oracledb'
const { createPool } = pkg

export async function cnxDb () {
  try {
    await createPool({
      user: process.env.ORACLE_USER,
      password: process.env.ORACLE_PASSWORD,
      connectString: process.env.ORACLE_CONNECTION_STRING
    })
    console.log('⚡ Connected to OracleDb ⚡')
  } catch (error) {
    console.error('Error connecting to Oracle DB:', error)
  }
}
