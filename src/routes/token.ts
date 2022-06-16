import { Router } from "express"

const router = Router()

router.post('/', (req, res) => {
    const { password } = req.body

    if(!(password === process.env.PASSWORD)) res.status(401).send({ message: 'UnAuthorized' })
    res.send(process.env.TOKEN)

})
export default router