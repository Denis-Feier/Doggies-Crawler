import { Router } from 'express'

import contract from './contract'
import crawler from './crawler'

const router = Router()

router.use('/contract', contract)

router.use('/crawler', crawler)

export default router
