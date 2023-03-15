import { Router } from 'express';
import { getPacients, createPacient, updatePacient, deletePacient, getPacient } from '../controllers/pacients.controlles.js'

const router = Router();


router.get('/pacients', getPacients)
router.get('/pacient/:id', getPacient)
router.post('/pacient',createPacient)
router.patch('/pacient/:id', updatePacient )
router.delete('/pacient/:id',deletePacient)


export default router