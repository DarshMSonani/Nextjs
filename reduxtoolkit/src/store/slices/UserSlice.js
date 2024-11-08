import { createSlice } from "@reduxjs/toolkit";
import { cleareAllUser } from "../action";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1)
        },
        deleteUsers(state) {
            return []
        }
    },
    extraReducers(builder) {
        builder.addCase(cleareAllUser, () => {
            return [];
        })
    }
});

// console.log('action :>> ', userSlice.actions);

export default userSlice.reducer

export const { addUser, removeUser, deleteUsers } = userSlice.actions