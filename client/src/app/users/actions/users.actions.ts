import { createAction, props } from '@ngrx/store';

export const setRegisteredUser = createAction(
  '[Users] Set Registered User',
  props<{ id: number; side: string }>()
);
