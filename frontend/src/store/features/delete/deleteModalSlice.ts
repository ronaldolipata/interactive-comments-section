import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialState = {
  showDeleteModal: boolean;
};

const initialState: initialState = {
  showDeleteModal: false,
};

const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<boolean>) => {
      state.showDeleteModal = action.payload;
    },
  },
});

export default deleteModalSlice.reducer;
export const { show } = deleteModalSlice.actions;
