import { configureStore } from "@reduxjs/toolkit";
import UserDataReducer from './UserDataSlice';

const store = configureStore({
    reducer: {
        userData: UserDataReducer
    }
})

export default store;