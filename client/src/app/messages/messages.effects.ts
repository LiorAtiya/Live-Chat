import { Injectable } from '@angular/core';
import { Actions, createEffect, OnInitEffects, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
} from '@ngrx/data';
import { Message } from './message';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class MessagesEffects implements OnInitEffects {
  private _messagesService: EntityCollectionService<Message>;

  initMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType('INIT_MESSAGES'),
      mergeMap(() =>
        this._messagesService.getAll().pipe(
          map((messages) => ({ type: 'USERS_LOADED', payload: messages })),
          catchError(() => of({ type: 'LOAD_USERS_ERROR' }))
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return {
      type: 'INIT_MESSAGES',
    };
  }

  constructor(
    private actions$: Actions,
    serviceFactory: EntityCollectionServiceFactory
  ) {
    this._messagesService = serviceFactory.create('Messages');
  }
}
