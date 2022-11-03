import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import {changePagination} from '../../store/reducers/pagination'
import useStyles from './styles'

const PaginationComponent = (props) => {

    const classes = useStyles()
    const pagination = useSelector(state => state.pagination)
    const dispatch = useDispatch()

    const handleClick = (event, value) => {
       
        dispatch(changePagination(value))
    }
    
    // console.log({counter})
    return (
        <div>
            <Stack 
                spacing={2} 
                className={classes.container}
                alignItems="center"
                >
                <Pagination count={pagination.count} page={pagination.page} onChange={handleClick}/>
            </Stack>
        </div>

    );

}

export default PaginationComponent