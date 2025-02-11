import { createSlice } from "@reduxjs/toolkit";

interface IAuthState {
    isAuth: boolean;
}

const initialState: IAuthState = {
    isAuth: true,
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isAuth = true;
        },
        logout(state) {
            state.isAuth = false;
        },
    },
});

export const {login, logout} = AuthSlice.actions
export default AuthSlice.reducer