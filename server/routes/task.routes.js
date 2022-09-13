import {Router} from 'express';
import {
  getTask,
  getTasks,
  deleteTask,
  updateTask,
  createTask
} from '../controllers/task.controllers.js';

const router = Router();

router.get('/tasks', getTasks);
router.get('/task/:id', getTask)
router.post('/task', createTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', deleteTask);

export default router;