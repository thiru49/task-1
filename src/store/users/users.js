import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        register: {
            reducer(state, action) {
                const { name, email, password } = action.payload;
                state.push({ id:v4(),name, email, password });
            },
            prepare(name, email, password) {
                return { payload: {name, email, password } };
            }
        }
    }
});

export const { register } = usersSlice.actions;
export default usersSlice.reducer;
