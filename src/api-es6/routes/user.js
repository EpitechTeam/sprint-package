import express from 'express'
import ensureAuthorized from './../middlewares/ensureAuthorized'
import { me } from '../services/user.service'
let router	= express.Router()

router.get('/me', ensureAuthorized, me)

module.exports = router
