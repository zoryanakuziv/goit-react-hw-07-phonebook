import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filter-actions';

export const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});
