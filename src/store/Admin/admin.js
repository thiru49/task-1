import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = [];

const usersSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        register: {
            reducer(state, action) {
                const { name, imageList} = action.payload;
                state.push({ id:v4(),name,imageList});
                console.log(state)
            },
            prepare({name, imageList}) {
                return { payload: {name,imageList} };
            }
        }
    }
});
console.log()
export const { register } = usersSlice.actions;
export default usersSlice.reducer;
