import actionTypes from '../actionTypes';
import { api } from '../util';

const fetchItems = ({
  q, tag, limit, offset,
}) => async (dispatch) => {
  dispatch({ type: actionTypes.CONTENT_REQUEST_START });
  try {
    const result = await api.fetchItems(q, tag, limit, offset);
    dispatch({ type: actionTypes.CONTENT_REQUEST_SUCCESS, payload: { items: result, hasMore: result.length === limit } });
  } catch (err) {
    dispatch({ type: actionTypes.CONTENT_REQUEST_FAIL, payload: err.toString() });
  }
};

const clearItems = () => ({
  type: actionTypes.CONTENT_CLEAR,
});

export const contentActions = { fetchItems, clearItems };
