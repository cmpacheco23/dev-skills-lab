import { Router } from 'express'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// GET localhost:3000/todos
// skillsCtrl.index is the controller function
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.post('/', skillsCtrl.create)

export { router }
