import { configureStore } from "@reduxjs/toolkit";
import drumReducer from './features/drumSlice'

export default configureStore({
    reducer: {
        drums: drumReducer
    }
})