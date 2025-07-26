import { Request, Response } from 'express';
import { Trip } from '../models/Trip';

export const createTrip = async (req: Request, res: Response) => {
  try {
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json(trip);
  } catch (err) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

export const getTrips = async (_: Request, res: Response) => {
  const trips = await Trip.find().sort({ createdAt: -1 });
  res.json(trips);
};

export const updateTrip = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedTrip) return res.status(404).json({ error: 'Trip not found' });
    res.json(updatedTrip);
  } catch {
    res.status(400).json({ error: 'Invalid ID or body' });
  }
};
