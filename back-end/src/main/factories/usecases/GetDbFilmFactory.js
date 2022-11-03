import { FilmRepository } from '../../../infra/prisma/filmRepository.js'
import { GetFilmsDb } from '../../../data/GetFilmsDb.js'
import { GetFilms } from '../../../domain/usecase/GetFilms.js'

export const makeDbGetFilmsFactory = () => {
    const filmRepository = new FilmRepository()
    const getFilmsDb = new GetFilmsDb(filmRepository)
    return new GetFilms(getFilmsDb)
}