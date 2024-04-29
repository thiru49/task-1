import { configureStore } from "@reduxjs/toolkit";
import usersReducers from './Admin/admin'

const store = configureStore({
    reducer:{
        admin:usersReducers
    }})

export default store;    