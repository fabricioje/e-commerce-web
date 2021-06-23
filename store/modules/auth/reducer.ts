import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import User from '../../../pages/dtos/User';

const authSlice = createSlice({
    name: 'auth',
    initialState: { loggedUser: null as User } ,
    reducers: {
        setLoggedUser(state, action: PayloadAction<User>) {
            state.loggedUser = action.payload; 
        },
        clearLoggedUser(state) {
            state.loggedUser = null;
        },
    }
})

export const { setLoggedUser, clearLoggedUser } = authSlice.actions;
export default authSlice.reducer;