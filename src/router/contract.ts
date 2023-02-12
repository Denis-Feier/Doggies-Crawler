import { Router, Request, Response } from 'express'

const router = Router()

router.get('/:address/:tokenId', (req: Request, res: Response) => {
    const address = req.params.address
    const tokenId = req.params.tokenId
    console.log(`contract ${address} ${tokenId}`)
})

export default router