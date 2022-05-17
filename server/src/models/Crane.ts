import mongoose from 'mongoose';

interface ICrane extends mongoose.Document {
  name: string;
  date: Date;
}

const CraneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  key: {
    type: Boolean,
    required: true,
  },
  start: {
    type: Boolean,
    required: true,
  },
  limits: {
    type: Boolean,
    required: true,
  },
  automates: {
    type: Boolean,
    required: true,
  },
  controllers: {
    type: Boolean,
    required: true,
  },
  accidents: {
    type: Boolean,
    required: true,
  },
  temperature: {
    type: Boolean,
    required: true,
  },
  ogp: {
    type: Boolean,
    required: true,
  },
  voltage: {
    type: Boolean,
    required: true,
  },
  current: {
    type: Boolean,
    required: true,
  },
});

export const Crane = mongoose.model<ICrane>('Crane', CraneSchema);
