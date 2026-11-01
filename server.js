import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, 'dist')
const port = process.env.PORT || 3000

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', service: 'launchpad-demo' })
})

app.use(express.static(distPath))

// Send the React app for client-side routes.
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`LaunchPad is running on port ${port}`)
})