import { createSlice } from "@reduxjs/toolkit";

export const drumSlice = createSlice({
    name: 'drums',
    initialState: {
        display: "",
        volume: 0.3,
    },
    reducers: {
        displaySound: (state, action) => {
            state.display = action.payload
        },
        changeVolume: (state, action) => {
            state.volume = action.payload
        },
    }
})

export const { displaySound, changeVolume } = drumSlice.actions

export default drumSlice.reducer