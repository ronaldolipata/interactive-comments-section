import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export function showDeleteModal(value: boolean) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SHOW,
      payload: value,
    });
  };
}

export function hideDeleteModal(value: boolean) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HIDE,
      payload: value,
    });
  };
}
