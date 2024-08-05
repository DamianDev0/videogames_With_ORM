import {Router} from 'express'
import DeveloperController from '../controllers/developerController'

export const developerRouter = Router()

developerRouter.get('/', DeveloperController.getAllDeveloper)

developerRouter.get('/:id', DeveloperController.getDeveloperById)

developerRouter.post('/', DeveloperController.createDeveloper)