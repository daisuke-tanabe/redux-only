import { createAction, handleActions } from 'redux-actions';

/**
 * Actions
 */
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

/**
 * Reducers
 */
const initialState = {
  count: 0
};

export default handleActions({
  [INCREMENT]: state => Object.assign({}, state, {
    count: state.count += 1
  }),
  [DECREMENT]: state => Object.assign({}, state, {
    count: state.count -= 1
  })
}, initialState);

/**
 * Action Creators
 */
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);
