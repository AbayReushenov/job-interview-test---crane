import { Crane } from './Crane';

const newCrane = new Crane({
  name: "Кран Пятый",
  key: true,
  start: true,
  limits: true,
  automates: true,
  controllers: true,
  accidents: true,
  temperature: true,
  ogp: true,
  voltage: true,
  current: true,
});


export const create = async () => newCrane.save();
