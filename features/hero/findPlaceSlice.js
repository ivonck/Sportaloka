import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Paralayang", icon: "icon-para" },
    { id: 2, name: "Diving", icon: "icon-diving" },
    { id: 3, name: "Hiking", icon: "icon-hiking" },
    { id: 4, name: "Rafting", icon: "icon-rafting" },
    { id: 5, name: "Camping", icon: "icon-camping" },

  ],
  currentTab: "Hotel",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
