import express, { json } from 'express'
import 'dotenv/config'
import * as config from './config.js'

export const createApp = ({ cnxDb }) => {
  const app = express()
  app.use(json())
  app.disable('x-powered-by')

  cnxDb()

  const PORT = config.api.port

  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT} 🚀`)
  })
}
