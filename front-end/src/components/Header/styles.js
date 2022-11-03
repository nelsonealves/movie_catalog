import { makeStyles } from '@mui/styles';
import moviesWallpaper from '../../assets/movies-wallpaper.png'
const useStyles = makeStyles({
    container: {
        width: '100vw',
        zIndex: 3,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundImage: `url(${moviesWallpaper})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'top',
        // backgroundPositionY: '100%',
        backgroundSize: 'cover',
        borderBottom: '2px solid red',
        color: 'white'
    },
    header: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '3em',
        marginBottom: '3em'
    },
    img: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    finder: {
        // marginTop: '3em',
        marginBottom: '3em',
        width: '60%',
        minWidth: '250px',
        // border: '1px solid red'
    },
    stack: {
        
        width: '100%'
    }
});

export default useStyles;
