import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useFetch from 'react-fetch-hook'
import { makeStyles } from '@mui/styles';
import { BorderBottom } from '@mui/icons-material';
import useStyles from './styles'
import TextField from '../TextField'
import { withStyles } from "@mui/styles"
import { useMediaQuery, useTheme } from '@mui/material';
import clsx from 'clsx'
import { setCountOfPage } from '../../store/reducers/pagination'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

const ListMoviesComponent = (props) => {
    const classes = useStyles()

    const theme = useTheme()
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(false)
    const [movieSelected, setMovieSelected] = useState(0)
    const SxMatches = useMediaQuery(theme.breakpoints.up('md'));
    const MdMatches = useMediaQuery(theme.breakpoints.only('md'));
    const SmMatches = useMediaQuery(theme.breakpoints.down('sm'));
    const pagination = useSelector(state => state.pagination)
    const filter = useSelector(state => state.filter)

    const { isLoading, data, error } = useFetch(`http://localhost:4000/films?page=${pagination.page - 1}&search=${filter.inputFilter}`, { method: 'get' })

    const handleClick = (index) => {
        setMovieSelected(index)
        setOpenModal(true)
    }

    const buildCard = (id, image, title, director, producer, index) => {
        return (
            <section key={id} className={classes.card} onClick={() => { handleClick(index) }} >
                <div className={classes.icon}>
                    <img className={classes.img} alt={title} src={image} />
                </div>
                <div className={classes.row}>
                    <span>{title}</span>
                </div>
                <div className={classes.row}>
                    <span className={classes.spanDesc}>Direção: {director}</span>
                </div>
                <div className={classes.row}>
                    <span className={classes.spanDesc}>Produtor: {producer}</span>
                </div>

            </section>
        )
    }
    if (isLoading) return (
        <span>isLoading...</span>
    )
    if (error) return (
        <span>Não foi possível carregar os filmes. Tente novamente mais tarde!</span>
    )

    const ModalComponent = (props) => {
        return (
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={() => { setOpenModal(false) }}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box className={classes.modal}>
                        <div className={classes.icon}>
                            <img style={{width: '100%'}}  alt={data.data[movieSelected].title} src={data.data[movieSelected].movie_banner} />
                        </div>
                        <div className={classes.row}>
                            <span>{data.data[movieSelected].title}</span>
                        </div>
                        <div className={classes.row}>
                            <span className={classes.spanDesc}>Direção: {data.data[movieSelected].director}</span>
                        </div>
                        <div className={classes.row}>
                            <span className={classes.spanDesc}>Produtor: {data.data[movieSelected].producer}</span>
                        </div>
                        <div className={classes.row}>
                            <span className={classes.spanDesc}>Produtor: {data.data[movieSelected].description}</span>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        )
    }
    if (!error) {
        if (data.count) {

            dispatch(setCountOfPage(Math.ceil(data.count / 10)))
        }
        return (
            <main className={classes.container} >
                <ModalComponent />
                <div className={clsx({ [classes.list]: SxMatches, [classes.listTablet]: MdMatches, [classes.listMobile]: SmMatches })}>
                    {data.data.map((dataCard, index) => {

                        return (
                            buildCard(dataCard.id, dataCard.image, dataCard.title, dataCard.director, dataCard.producer, index)
                        )

                    }

                    )}
                </div>
            </main >

        );
    }

}

export default ListMoviesComponent;