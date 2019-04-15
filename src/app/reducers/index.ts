import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Fund } from '../FEATURES/fund-module/fund.model';

export interface TactState {
  //users : User[];
  //funds : Fund[];
  //currentUser : User;

}

export const reducers: ActionReducerMap<TactState> = {

};


export const metaReducers: MetaReducer<TactState>[] = !environment.production ? [] : [];
