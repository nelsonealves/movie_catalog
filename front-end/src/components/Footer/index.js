import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useSelector, useDispatch } from 'react-redux'
import { changePagination } from '../../store/reducers/pagination'
import useStyles from './styles'
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Item from '@mui/material/Paper';
import { w } from 'react-router-dom'
const FooterComponent = (props) => {

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
                <div>
                    <span className={classes.span}>Site desenvolvido por Nelson Espindola Alves </span>
                </div>
                <div>
                    <span className={classes.span}>Desenvolvedor Full Stack</span>
                </div>
                <div className={classes.span} >
                    <a href="https://github.com/nelsonealves">
                    <IconButton>

<GitHubIcon className={classes.span} />
</IconButton>
                    </a>
                   <a href="https://www.linkedin.com/in/nelson-alves-6651a1153/">
                   <IconButton >
                        
                        <LinkedInIcon className={classes.span} />
                    

                </IconButton>
                   </a>
                    

                </div>
            </Stack>
        </div>

    );

}

export default FooterComponent