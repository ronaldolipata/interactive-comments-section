import { Action } from '../actions/index';
import { ActionType } from '../action-types/index';

const initialState = false;

function reducer(state: boolean = initialState, action: Action) {
  switch (action.type) {
    case ActionType.SHOW:
      return action.payload;
    case ActionType.HIDE:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
