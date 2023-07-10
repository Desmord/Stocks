import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { TransactionType } from '../Utilities/Transaction';

type UserData = {
    _id: string,
    login: string,
    password: string,
    tips: string[],
    transactions: TransactionType[],
}

const initialState: UserData = {
    _id: ``,
    login: ``,
    password: ``,
    tips: [],
    transactions: [],
}

const UserDataSlice = createSlice({
    name: `user`,
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{
            _id: string, login: string, password: string, tips: string[], transactions: TransactionType[]
        }>) => {
            state = action.payload;
        },
        setID: (state, action: PayloadAction<string>) => {
            state._id = action.payload;
        },
        setLogin: (state, action: PayloadAction<string>) => {
            state.login = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setTips: (state, action: PayloadAction<[string]>) => {
            state.tips = action.payload;
        },
        setTransaction: (state, action: PayloadAction<[TransactionType]>) => {
            state.transactions = action.payload;
        }
    }
})

export const {
    setUser,
    setID,
    setLogin,
    setPassword,
    setTips,
    setTransaction,
} = UserDataSlice.actions;

export default UserDataSlice.reducer;