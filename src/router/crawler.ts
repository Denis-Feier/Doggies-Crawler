import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    console.log('crawler')
    res.status(200).json({ data: 'ok'})
})


router.get('/:jobId', (req: Request, res: Response) => {
    const jobId = req.params.jobId;
    console.log(`crawler ${jobId}`)
    res.status(200).json({ data: 'ok'})
})

export default router
