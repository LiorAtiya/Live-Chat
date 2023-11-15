import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
} from '@ngrx/data';
import { User } from './user';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class UsersEffects implements OnInitEffects {
  private _userService: EntityCollectionService<User>;

  initUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType('INIT_USERS'),
      mergeMap(() =>
        this._userService.getAll().pipe(
          map((users) => ({ type: 'USERS_LOADED', payload: users })),
          catchError(() => of({ type: 'LOAD_USERS_ERROR' }))
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return { type: 'INIT_USERS' };
  }

  constructor(
    private actions$: Actions,
    serviceFactory: EntityCollectionServiceFactory
  ) {
    this._userService = serviceFactory.create('Users');
  }
}
