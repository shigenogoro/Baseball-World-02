import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import playerData from '../data/players.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Create an express router
 */
const router = express.Router()

/**
 * Create a GET route at the / endpoint that responds with status 200 and sends a JSON of the playerData.
 */
router.get('/', (req, res) => {
    res.status(200).json(playerData)
})

/**
 * Create another GET route at the /:giftId endpoint that responds with status 200 
 * and sends the player.html file (we'll be creating this later).
 */

router.get('/:playerId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router