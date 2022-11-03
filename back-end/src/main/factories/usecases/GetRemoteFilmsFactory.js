import { AxiosClient } from '../../../infra/axios/index.js'
import { GetFilms as GetFilmsRepository } from '../../../data/GetFilmsRemote.js'
import { GetFilms } from '../../../domain/usecase/GetFilms.js'

export const makeGetRemoteFilmsFactory = () => {
    const axios = new AxiosClient()
    const makeGetFilmsRepository = new GetFilmsRepository("films", axios)
    return new GetFilms(makeGetFilmsRepository)
}