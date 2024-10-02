import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import GetPlayersController from '../controllers/players.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * Create an express router
 */
const router = express.Router()

router.get('/', GetPlayersController.getPlayers)

/**
 * Create another GET route at the /:giftId endpoint that responds with status 200 
 * and sends the player.html file (we'll be creating this later).
 */

router.get('/:playerId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/player.html'))
})

export default router