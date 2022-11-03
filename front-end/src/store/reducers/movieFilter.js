import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name: 'movieFilter',
    initialState: {
        inputFilter: ''
    },
    reducers:{
        setInputFilter (state, action) {
            
            state.inputFilter = action.payload
        }
    }
})

export const { setInputFilter } = filterSlice.actions

export default filterSlice.reducer