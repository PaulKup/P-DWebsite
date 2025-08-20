import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { contactController } from '../controllers/contact.controller.js'
const router = Router()
const limiter = rateLimit({ windowMs: 60_000, max: 10 })
router.post('/', limiter, contactController.handle)
export default router
