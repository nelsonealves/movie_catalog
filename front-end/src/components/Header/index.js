import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@mui/styles';
import { BorderBottom } from '@mui/icons-material';
import useStyles from './styles'
import TextField from '../TextField'
import Button from '../Button'
import Stack from '@mui/material/Stack';
import { changePagination } from '../../store/reducers/pagination'
import { setInputFilter } from '../../store/reducers/movieFilter'
import OutlinedButton from '@mui/material/Button';
const Header = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [inputText, setInputText] = useState('')
    useEffect(() => {
        //setOpenSection(trigger);
    }, [])

    const handleSearchClick = () => {
        console.log(inputText)
        dispatch(changePagination(1))
        dispatch(setInputFilter(inputText))
    }

    const handleInputText = (event) => {

        setInputText(event.target.value)
    }

    const callPostMovie = async () => {
        await fetch(`http://localhost:4000/films`, { method: 'post'})
        window.location.reload()
    }

    return (
        <header className={classes.container} >

            <section className={classes.header}>
                <div className={classes.img}>
                    <img style={{ minWidth: '300px', width: '70%' }} src="/nelsonflix-logo.png"></img>
                </div>
            </section>


            <section className={classes.finder}>
                <h1>
                    EXPLORE NOSSO CATÁLOGO DE FILMES
                </h1>
                <Stack
                    className={classes.stack}
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-around"
                    alignItems={{ xs: 'stretch', sm: 'center' }}>

                    <div style={{ flexGrow: '2' }} >
                        <TextField
                            placeholder={'Procure pelo título, diretor ou produtor'}
                            value={inputText}
                            onChange={handleInputText} />
                    </div>

                    <div style={{ flexGrow: '1' }} >
                        <Button onClick={handleSearchClick}>Buscar</Button>
                    </div>
                </Stack>
                <div  >
                    <OutlinedButton onClick={()=>{callPostMovie()}}>Atualizar filmes</OutlinedButton>
                </div>
            </section>
        </header >

    );
}

export default Header;