import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	theme: false,
};

export const themeSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.theme = !state.theme;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
