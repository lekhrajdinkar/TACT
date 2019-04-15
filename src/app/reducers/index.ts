import {ActionReducer, ActionReducerMap,  createFeatureSelector,  createSelector,  MetaReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../auth/auth.model';
import { AuthActionTypes, AuthActions, AuthState, authReducer } from '../auth/auth.actions';

//Global State
export interface TactState {
  authState : AuthState
}

export const reducers: ActionReducerMap<TactState> = {
  authState: authReducer //reducer is mapped with state
};

export const metaReducers: MetaReducer<TactState>[] = !environment.production ? [] : [];

