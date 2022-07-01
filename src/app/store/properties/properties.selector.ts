import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State, propertiesFeatureKey } from './properties.state';
const getPropertiesFeatureState =
  createFeatureSelector<State>(propertiesFeatureKey);

export const getproperties = createSelector(
  getPropertiesFeatureState,
  (state: State) => state.properties
);

export const getErrorFromProperties = createSelector(
  getPropertiesFeatureState,
  (state: State) => state.error
);

export const getPropertiesOffsetAndLimit = createSelector(
  getPropertiesFeatureState,
  (state: State) => ({ limit: state.limit, offset: state.offset })
);
