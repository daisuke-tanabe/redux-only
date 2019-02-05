import { createAction, handleActions } from 'redux-actions';

/**
 * Actions
 */
const INITIALIZE = 'INITIALIZE';
const INPUT = 'INPUT';
const SUBMIT = 'SUBMIT';

/**
 * Reducers
 */
const initialState = {};

export default handleActions({
  [INITIALIZE]: (state, { payload }) => payload,

  [INPUT]: (state, { payload }) => {
    const { index: id, value } = payload;
    const field = state.field.filter(field => field.id === id)[0];
    const newData = {
      id,
      type: field.type,
      value: field.value = value,
      error: field.error = value === ''
    };
    state.field[id] = newData;

    state.isSendable = !state.field.some(state => state.error === true);

    return state;
  },

  [SUBMIT]: (state, { payload: hasError }) => {
    state.isSendable = !hasError;
    return state;
  },
}, initialState);

/**
 * Action Creators
 */
export const initialize = createAction(INITIALIZE, data => data);
export const input = createAction(INPUT, (index, value) => ({ index, value }));
export const submit = createAction(SUBMIT, hasError => hasError);
