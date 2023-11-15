import { createReducer, on } from '@ngrx/store';
import { registerLeft, registerRight } from './user.action';

export const initialState = {
  leftUserId: 0,
  rightUserId: 0,
};

export const userReducer = createReducer(
  initialState,
  on(registerLeft, (state, { userId }) => {
    return { ...state, leftUserId: userId };
  }),
  on(registerRight, (state, { userId }) => {
    return { ...state, rightUserId: userId };
  })
);
