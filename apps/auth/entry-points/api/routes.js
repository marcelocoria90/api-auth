import express from 'express'
import {AuthControllers} from './controllers.js'

export const router = express.Router()

router.post('/login', controllers.login)
