import { configureStore } from "@reduxjs/toolkit";
import  {charactersSlice }  from "../slices/characatersSlice";

export const store = configureStore({
    reducer:{
        characters: charactersSlice.reducer,
    }
})