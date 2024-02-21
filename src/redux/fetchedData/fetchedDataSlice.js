import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const fetchedDataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		populateFetchedData: (state, action) => {
			state.data = action.payload;
		},
		clearFetchedData: (state) => {
			state.data = [];
		},
		editCheckFetchedData: (state, action) => {
			state.data = state.data.map((data) => {
				if (
					data.plant_id === action.payload &&
					// data.plant_status === "true" ||
					data.plant_status === true
				) {
					return { ...data, plant_status: false };
				} else if (
					data.plant_id === action.payload &&
					data.plant_status === false
				) {
					return { ...data, plant_status: true };
				}
				return data;
			});
		},
	},

	extraReducers: (builder) => {},
});

export const {
	populateFetchedData,
	clearFetchedData,
	editCheckFetchedData,
	filterFetchData,
} = fetchedDataSlice.actions;

export const selectCount = (state) => state.counter.value;
export default fetchedDataSlice.reducer;
