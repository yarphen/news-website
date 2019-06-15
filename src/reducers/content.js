import { handleActions } from 'redux-actions';
import actionTypes from '../actionTypes';

const initialState = {
  items: [],
  error: null,
  loading: false,
  hasMore: true,
};

const contentRequestStart = state => ({
  ...state,
  loading: true,
  error: null,
  hasMore: true,
});

const contentRequestSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  error: null,
  items: [...(state.items || []), ...(payload.items || [])],
  hasMore: payload.hasMore,
});

const contentRequestFail = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
  items: [],
  hasMore: false,
});

const contentClear = () => ({ ...initialState });

export const content = handleActions({
  [actionTypes.CONTENT_REQUEST_START]: contentRequestStart,
  [actionTypes.CONTENT_REQUEST_SUCCESS]: contentRequestSuccess,
  [actionTypes.CONTENT_REQUEST_FAIL]: contentRequestFail,
  [actionTypes.CONTENT_CLEAR]: contentClear,
}, initialState);
