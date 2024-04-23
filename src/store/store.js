import { configureStore } from "@reduxjs/toolkit";
import usersReducers from './users/users.js'

const store = configureStore({
    reducer:{
        users:usersReducers
    }})

export default store;    