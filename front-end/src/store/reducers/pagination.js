import { createSlice } from '@reduxjs/toolkit'

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        count: 1,
        page: 1
    },
    reducers:{
        changePagination (state, action) {
            
            state.page = action.payload
        },
        setCountOfPage (state, action) {
            state.count = action.payload
        }
    }
})

export const { changePagination, setCountOfPage } = paginationSlice.actions

export default paginationSlice.reducer