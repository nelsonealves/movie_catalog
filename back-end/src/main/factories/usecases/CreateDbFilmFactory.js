import { FilmRepository } from '../../../infra/prisma/filmRepository.js'
import { CreateFilmsDb } from '../../../data/CreateFilmsDb.js'
import { CreateFilms } from '../../../domain/usecase/CreateFilms.js'

export const makeDbCreateFilmsFactory = () => {
    const filmRepository = new FilmRepository()
    const createFilmsDb = new CreateFilmsDb(filmRepository)
    return new CreateFilms(createFilmsDb)
    // return createFilmsDb
}