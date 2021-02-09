import { createAction, handleActions } from 'redux-actions';

const START_LOAIDNG = 'loading/START_LOAIDNG';
const FINISH_LOAIDNG = 'loading/FINISH_LOAIDNG';

export const startLoading = createAction(
  START_LOAIDNG,
  (requestType) => requestType,
);
export const finishLoading = createAction(
  FINISH_LOAIDNG,
  (requestType) => requestType,
);

const initialState = {};

const loading = handleActions(
  {
    [START_LOAIDNG]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOAIDNG]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
