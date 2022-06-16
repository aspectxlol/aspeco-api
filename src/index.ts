import express from 'express'
import bodyParser from 'body-parser'
import { Intents, TextChannel } from 'discord.js'
import { config } from 'dotenv'
import aspectxBot from './structures/bot'
import { clientRouter, guildsRouter, messagesRouter, tokenRouter, pingRouter } from './routes'
config()

const app = express()
const client = new aspectxBot({
    intents: new Intents(32767)
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api/client', clientRouter)
app.use('/api/guilds', guildsRouter)
app.use('/api/message', messagesRouter)
app.use('/api/token', tokenRouter)
app.use('/api/ping', pingRouter)

const port = process.env.PORT || 3000
app.listen(port, () => {
    client.login(process.env.TOKEN)
    console.info(`Server Started on port ${port}`)
})

export default client