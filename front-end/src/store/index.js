import { configureStore} from '@reduxjs/toolkit'
import {paginationSlice} from './reducers/pagination'
import {filterSlice} from './reducers/movieFilter'


export default configureStore({
    reducer:{
        pagination: paginationSlice.reducer,
        filter: filterSlice.reducer
    }
})

