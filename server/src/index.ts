import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import hpp from 'hpp'
import contactRoute from './routes/contact.route.js'

const app = express()
app.use(helmet())
app.use(cors({ origin: process.env.ALLOWED_ORIGIN?.split(',') ?? true }))
app.use(hpp())
app.use(express.json())

app.get('/health', (_req, res) => res.json({ ok: true }))
app.use('/contact', contactRoute)

const port = process.env.PORT ?? 5000
app.listen(port, () => console.log(`API on :${port}`))
