import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  destination: { type: String, required: true },
  days: { type: Number, required: true },
  budget: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Trip = mongoose.model('Trip', tripSchema);
