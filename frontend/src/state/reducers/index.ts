import { combineReducers } from 'redux';
import deleteModalReducer from './deleteModalReducer';

const reducers = combineReducers({
  deleteModal: deleteModalReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>