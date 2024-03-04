import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./features/board/toDoSlice";

export const store = configureStore({
    reducer: {
        tasks: toDoReducer,
    },
});