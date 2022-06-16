import { Router } from "express"
import client from ".."

const router = Router()

router.get('/', (req, res) => {
    res.send(`${client.ws.ping}`)
})

export default router