
import Header from '../components/Header'
import ListMovies from '../components/ListMovies'
import useStyles from './styles'
import Pagination from '../components/Pagination'
import Footer from '../components/Footer'
const App = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div>
                <header>
                    <Header />
                </header>
            </div>
            <div>
                <main className={classes.main}>
                    <ListMovies />
                </main>
            </div>
            <div>
                <nav>
                    <Pagination/>
                </nav>
            </div>
            <div>
                <footer>
                    <Footer/>
                </footer>
            </div>


        </div>
    );
}

export default App;
