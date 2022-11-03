import { makeStyles } from '@mui/styles';
import moviesWallpaper from '../../assets/movies-wallpaper.png'

const useStyles = makeStyles({
    container: {
        width: '100%',
    },
    list: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        paddingTop: '1em',
    },
    listTablet: {
        gridTemplateColumns: '1fr 1fr '
    },
    listMobile: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    img: {
        width: '100%',
    },
    card: {
        margin: '3em',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer'
    },
    icon: {
        textAlign: 'center',
        width: '100%',
    },
    finder: {
        marginTop: '3em',
        marginBottom: '3em'
    },
    row: {
        width: '100%',
        textAlign: 'center',
        color: "#404142"
    },
    spanDesc: {
        fontSize: '10px'
    },
    modal:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60%',
        backgroundColor: '#fff',
        
        boxShadow: 24,
        p: 4,

    }
});

export default useStyles;
