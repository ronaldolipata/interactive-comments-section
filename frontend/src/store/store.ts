import { configureStore } from '@reduxjs/toolkit';

import commentsSliceReducer from './features/comments/commentsSlice';
import deleteModalSliceReducer from './features/delete/deleteModalSlice';

export const store = configureStore({
  reducer: {
    commentsSlice: commentsSliceReducer,
    deleteModal: deleteModalSliceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
