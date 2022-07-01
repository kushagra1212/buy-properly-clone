import * as fromProperties from './properties/properties.state';

export interface State {
  [fromProperties.propertiesFeatureKey]: fromProperties.State;
}
