import { combineReducers } from 'redux';
import commentReducer from './commentReducer';
import deleteModalReducer from './deleteModalReducer';

const reducers = combineReducers({
  comment: commentReducer,
  deleteModal: deleteModalReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
