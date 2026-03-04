import express from 'express';
import { bookSeatController } from './booking.controller.js';
const router = express.Router();
router.get('/book/:seatId', bookSeatController);
export default router;