import express from 'express';
import { createTrip, getTrips, updateTrip } from '../controllers/tripController';

const router = express.Router();

router.post('/trips', createTrip);
router.get('/trips', getTrips);
router.put('/trips/:id', updateTrip);

export default router;
