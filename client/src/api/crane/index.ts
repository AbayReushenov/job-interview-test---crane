import { connect } from '../connect';

export interface Crane {
  _id: string;
  name: string;
  key: boolean,
  start: boolean,
  limits: boolean,
  automates: boolean,
  controllers: boolean,
  accidents: boolean,
  temperature: boolean,
  ogp: boolean,
  voltage: boolean,
  current: boolean,
}

export const crane = {
  get: async (): Promise<Crane[]> => {
    const { data } = await connect.get<Crane[]>('/crane');
    return data;
  },
};
