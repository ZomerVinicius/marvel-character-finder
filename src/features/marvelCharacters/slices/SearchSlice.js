import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: ''
  },
  reducers: {
    setSearchValue: (state, action) => {
      state.search = action.payload
    }
  }
})

export const { setSearchValue } = searchSlice.actions

export const selectSearch = (state) => state.search

export default searchSlice.reducer
