import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const modalUpdateFormSlice = createSlice({
    name: 'modalForm',
    initialState,
    reducers: {
        openModalUpdate: (state, action) => {
            state.isUpdateFormOpen = true;
        },
        closeModalUpdate: (state, action) => {
            state.isUpdateFormOpen = false
        }
    }
})

export const { openModalUpdate, closeModalUpdate } = modalUpdateFormSlice.actions

export default modalUpdateFormSlice.reducer;
