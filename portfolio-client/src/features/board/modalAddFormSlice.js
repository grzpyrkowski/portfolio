import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}

const modalAddFormSlice = createSlice({
    name: 'modalForm',
    initialState,
    reducers: {
        openModalAdd: (state, action) => {
            state.isAddFormOpen = true;
        },
        closeModalAdd: (state, action) => {
            state.isAddFormOpen = false
        }
    }
})

export const { openModalAdd, closeModalAdd } = modalAddFormSlice.actions

export default modalAddFormSlice.reducer;
