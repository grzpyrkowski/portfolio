import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./features/board/toDoSlice";
import modalAddFormSlice from "./features/board/modalAddFormSlice";
import modalUpdateFormSlice from "./features/board/modalUpdateFormSlice";

export const store = configureStore({
    reducer: {
        tasks: toDoReducer,
        modalAddForm: modalAddFormSlice,
        modalUpdateForm: modalUpdateFormSlice
    },
});