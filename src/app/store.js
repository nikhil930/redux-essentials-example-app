import { configureStore } from '@reduxjs/toolkit'
import postsreducer from '../features/posts/PostsSlice'

export default configureStore({
  reducer: {
    posts: postsreducer,
  },
})
