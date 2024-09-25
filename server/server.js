import express from 'express';
import playersRouter from './routes/players.js'

const app = express();

/**
 * Middleware
 */
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/players', playersRouter)

/**
 * Define Routing
 */
// Home Page
app.get('/', (req, res) => {
    res.status(200).send('<h1>Home Page</h1>');
})

// 404 Error
app.get('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
})

/**
 * Start the server
 */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})