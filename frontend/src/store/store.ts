import { configureStore } from '@reduxjs/toolkit';
import deleteModalSliceReducer from './features/delete/deleteModalSlice';

export const store = configureStore({
  reducer: {
    deleteModal: deleteModalSliceReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
