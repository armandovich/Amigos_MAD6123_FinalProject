import express from 'express'
import project from '../controllers/project.js'

const router = express.Router()

router.get('/project', (req, res) => {
    project.get(req, res);
})

router.post('/project', (req, res) => {
    project.post(req, res);
})

router.patch('/project/:id', async (req, res) => {
    project.patch(req, res);
})

router.delete('/project/:id', async (req, res) => {
    project.delete(req, res);
})

export default router