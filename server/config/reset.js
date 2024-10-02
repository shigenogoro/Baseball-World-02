import 'dotenv/config'
import { pool } from './database.js'
import playerData from '../data/players.js'



const createPlayersTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS players;

        CREATE TABLE IF NOT EXISTS players (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            teams TEXT []
        )
    `

    try {
        const res = await pool.query(createTableQuery);
        console.log('players table created successfully')
    } catch(err) {
        console.error('error creating players table', err)
    }
}

const seedPlayersTable = async () => {
    await createPlayersTable()

    // Traverse the giftData
    playerData.forEach((player) => {
        const insertQuery = {
          text: 'INSERT INTO players (name, image, description, teams) VALUES ($1, $2, $3, $4)'
        }

        const values = [
            player.name,
            player.image,
            player.description,
            player.teams
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting player', err)
                return
            }
        
            console.log(`✅ ${player.name} added successfully`)
        })
    })
}

// Call seedGiftsTable function
seedPlayersTable()