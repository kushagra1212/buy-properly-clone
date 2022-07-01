import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { State } from './app.state';
import * as fromPropertiesState from './properties/properties.state';
import * as fromPropertiesReducer from './properties/properties.reducer';
import { PropertyActions } from './properties/properties.actions';
import { Actions } from '@ngrx/effects';
export const reducers: ActionReducerMap<State, PropertyActions> = {
  [fromPropertiesState.propertiesFeatureKey]:
    fromPropertiesReducer.propertyReducer,
};
export const metaReducers: MetaReducer<State, PropertyActions>[] =
  !environment.production ? [] : [];
