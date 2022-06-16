import { TextChannel } from "discord.js";
import { Router } from "express";
import client from "..";

const router = Router()

router.post('/send', (req, res) => {
    const { channelId, message } = req.body
    const channel = client.channels.cache.get(channelId) as TextChannel
    if(!channel) res.status(404).send({
        message: 'channel not found'
    })

    if(!message) res.send({
        message: 'please specify a message'
    })

    channel.send({content: `${message}`}).then(() => {
        res.send(`Message Send to channel ${channel.name}`)
    })
}) 

export default router