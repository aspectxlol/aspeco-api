import { Router } from "express";
import client from "..";

const router = Router()

router.post('/client/displayname', (req, res) => {
    const { guildId, name } = req.body


    const guild = client.guilds.cache.get(guildId)
    if(!guild) res.status(404).send('no guild found')
    if(!name) res.send('please specify a nick')

    const me = guild?.members.cache.get(client.user?.id!)
    me?.setNickname(name).then(() => {
        res.send(`successfuly changed username to ${name}, on ${guild?.name}`)
    })
})

router.get('/client/displayname', (req, res) => {
    const { guildId } = req.body


    const guild = client.guilds.cache.get(guildId)
    if(!guild) res.status(404).send('no guild found')

    const me = guild?.members.cache.get(client.user?.id!)
    res.send(me?.displayName)
})

export default router