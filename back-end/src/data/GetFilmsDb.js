import {FilmRepository} from '../infra/prisma/filmRepository.js'

export class GetFilmsDb {
    filmRepository
    constructor(filmRepository){
        this.filmRepository = filmRepository
    }
    async get(params) {
        try {
            
            const response = await this.filmRepository.get(params)
        
            return response

        } catch (error) {
            console.log(error)
        }
    }

}