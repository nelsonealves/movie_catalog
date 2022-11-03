import { FilmModel } from '../model/film.js'

export class GetFilms {

    getFilmsRepository
    constructor(getFilmsRepository) {
        this.getFilmsRepository = getFilmsRepository
    }

    async get(params) {
     
        const arrayFilm = await this.getFilmsRepository.get(params)
        
        return {
            data: arrayFilm.data.map(film => {
                return FilmModel(film)
            }) || [],
            count: arrayFilm.count
        }
    }
}
