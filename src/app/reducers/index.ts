import {ActionReducer, ActionReducerMap,  createFeatureSelector,  createSelector,  MetaReducer} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthState, authReducer } from '../auth/auth.reducer';

//Global State
export interface TactState {
  authState : AuthState
}

export const reducers: ActionReducerMap<TactState> = {
  authState: authReducer //reducer is mapped with state
};

export const metaReducers: MetaReducer<TactState>[] = !environment.production ? [] : [];

