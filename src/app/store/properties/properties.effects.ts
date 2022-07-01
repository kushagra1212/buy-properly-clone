import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { mergeMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { PropertyService } from 'src/app/core/services/property/property.service';
import {
  PropertyActionTypes,
  LoadProperties,
  LoadPropertiesFailure,
  LoadPropertiesSuccess,
} from './properties.actions';
import { getPropertiesOffsetAndLimit } from './properties.selector';

@Injectable()
export class PropertiesEffects {
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService,
    private store: Store
  ) {}

  loadProperties$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(PropertyActionTypes.LoadProperties),
      withLatestFrom(this.store.select(getPropertiesOffsetAndLimit)),
      mergeMap((action) => {
        return this.propertyService.getProperties(action[1]).pipe(
          map((res: any) => {
            return new LoadPropertiesSuccess({ properties: res });
          }),
          catchError((err) => of(new LoadPropertiesFailure({ error: err })))
        );
      })
    );
  });
}
