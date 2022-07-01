import { PropertyActions, PropertyActionTypes } from './properties.actions';
import { State, initialState } from './properties.state';

export function propertyReducer(
  state = initialState,
  action: PropertyActions
): State {
  switch (action.type) {
    case PropertyActionTypes.LoadProperties:
      return {
        ...state,
      };

    case PropertyActionTypes.LoadPropertiesSuccess:
      return {
        ...state,
        properties: action.payload.properties,
        error: '',
      };

    case PropertyActionTypes.LoadPropertiesFailure:
      return {
        ...state,
        properties: [],
        error: action.payload.error,
      };
    case PropertyActionTypes.UpdateOffset:
      return { ...state, offset: action.payload.offset };

    default:
      return { ...state };
  }
}
