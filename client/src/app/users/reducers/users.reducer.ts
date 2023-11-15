import { createReducer, on } from '@ngrx/store';
import { setRegisteredUser } from '../actions/users.actions';

export const usersFeatureKey = 'users';

export interface State {
  rightUser: number;
  leftUser: number;
}

export const initialState: State = {
  rightUser: 0,
  leftUser: 0,
};

export const userReducer = createReducer(
  initialState,
  on(setRegisteredUser, (state, action) => ({
    ...state,
    [action.side + 'User']: action.id,
  }))
);
