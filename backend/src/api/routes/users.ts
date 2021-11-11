import express from 'express';
import { insertOneUser } from '../controllers/controllersUsers';

const router = express.Router();

router.post('/users', insertOneUser);

export default router;
