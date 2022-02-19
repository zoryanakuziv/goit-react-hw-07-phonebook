import { combineReducers } from '@reduxjs/toolkit';
import { contactApi } from './contacts-api';
import { filter } from 'redux/filter/filter-reducers';

export const contacts = combineReducers({
  [contactApi.reducerPath]: contactApi.reducer,
  filter,
});
