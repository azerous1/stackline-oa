import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const appDataSlice = createSlice({
    name: 'appData',
    initialState,
    reducers: {
        updateData: (state, action) => {
            console.log("new data: ", action.payload)
            console.log("state: ", state)
            state.value = [action.payload]
        }
    },
});

export const { updateData } = appDataSlice.actions;

export const selectData = (state) => {
    return state.appData.value;
}

export default appDataSlice.reducer;
