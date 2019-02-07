import {createAction, handleActions} from 'redux-actions';

/**
 * Actions
 */
const NAME_SPACE = 'FORM/';
const TEXT_INPUT = 'TEXT_INPUT';
const SUBMIT = 'SUBMIT';

/**
 * Reducers
 */
// 動的に作成されるため空を指定する
const initialState = {};

export default handleActions({
  [TEXT_INPUT]: (state, { payload }) => {
    const { index: id, value } = payload;
    const field = state.fields.filter(field => field.id === id)[0];

    state.fields[id] = {
      id,
      type: field.type,
      value: field.value = value,
      error: field.error = value === ''
    };
    state.isSendable = !state.fields.some(state => state.error === true);

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
export const input = createAction(TEXT_INPUT, (index, value) => ({ index, value }));
export const submit = createAction(SUBMIT, hasError => hasError);
