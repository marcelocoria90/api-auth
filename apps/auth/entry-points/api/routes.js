import express from 'express'
import * as controllers from './controllers.js'

export const router = express.Router()

router.post('/login', controllers.login)
