import { Property } from 'src/app/core/models/property';

export const propertiesFeatureKey = 'propertiesState_';

export interface State {
  properties: any;
  error: string;
  limit: Number;
  offset: Number;
}

export const initialState: State = {
  properties: { data: [], totalCount: 0 },
  error: '',
  limit: 5,
  offset: 0,
};
