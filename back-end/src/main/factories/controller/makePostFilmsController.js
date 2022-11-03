import { makeGetRemoteFilmsFactory, makeDbCreateFilmsFactory} from '../usecases/index.js'
 import {CreateFilmsController} from '../../../controller/index.js'
export const makeCreateFilmController = ()  => {
 
    return new CreateFilmsController(makeGetRemoteFilmsFactory(), makeDbCreateFilmsFactory())
}