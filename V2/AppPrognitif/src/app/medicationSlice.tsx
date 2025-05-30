import { createSlice } from "@reduxjs/toolkit";


const medicationSlice = createSlice({
  name: 'medications',
  initialState: {
    data: [],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchMedications.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchMedications.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//       })
//       .addCase(fetchMedications.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to fetch medications';
//       });
//   },
});

export default medicationSlice.reducer;