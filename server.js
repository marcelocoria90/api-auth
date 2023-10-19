import { createApp } from './app.js'
import { cnxDb } from './apps/auth/data-access/database.js'

createApp({ cnxDb })
