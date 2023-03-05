import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
  replies?: Replies[];
}

export interface Replies extends Comment {
  replyingTo: string;
}

export type CommentsState = {
  comments: Comment[];
};

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    initializeComments: (state, { payload }: PayloadAction<Comment[]>) => {
      state.comments.push(...payload);
    },
  },
});

export default commentsSlice.reducer;
export const { initializeComments } = commentsSlice.actions;
