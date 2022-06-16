import { Router } from "express";
import client from "..";

const router = Router()

router.post('/name', (req, res) => {
    const { username } = req.body

    client.user?.setUsername(username).then(() => {
        res.send(`changed username to ${client.user?.username}`)
    })
})

router.get('/name', (req, res) => {
    res.send(client.user?.username)
})

export default router