import { FilmModel } from '../model/film.js'

export class CreateFilms {

    getFilmsRepository
    constructor(getFilmsRepository) {
        this.getFilmsRepository = getFilmsRepository
    }

    async create (array) {
        const films = array.map(film => {
            return FilmModel(film)
        })
        const arrayFilm = await this.getFilmsRepository.create(films)

        return arrayFilm
    }
 }
