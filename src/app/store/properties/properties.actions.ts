import { Action } from '@ngrx/store';
import { Property } from 'src/app/core/models/property';
export enum PropertyActionTypes {
  LoadProperties = '[Property] Load Properties',
  LoadPropertiesSuccess = '[Property] Load Properties Success',
  LoadPropertiesFailure = '[Property] Load Properties Failure',
  UpdateOffset = '[Property] Update Offset',
}

export class LoadProperties implements Action {
  readonly type = PropertyActionTypes.LoadProperties;
}

export class LoadPropertiesSuccess implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesSuccess;
  constructor(public payload: { properties: any[] }) {}
}

export class LoadPropertiesFailure implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesFailure;
  constructor(public payload: { error: string }) {}
}
export class UpdateOffset implements Action {
  readonly type = PropertyActionTypes.UpdateOffset;
  constructor(public payload: { offset: Number }) {}
}
export type PropertyActions =
  | LoadProperties
  | LoadPropertiesSuccess
  | LoadPropertiesFailure
  | UpdateOffset;
