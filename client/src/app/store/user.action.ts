import { createAction, props } from '@ngrx/store';

export const registerLeft = createAction('[Register Component] Left user', props<{ userId: number }>());
export const registerRight = createAction('[Register Component] Right user', props<{ userId: number }>());