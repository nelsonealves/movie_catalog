import { makeDbGetFilmsFactory } from '../usecases/index.js'
import { GetFilmsController } from '../../../controller/GetFilmsController.js'
export const makeGetFilmController = () => {

    return new GetFilmsController(makeDbGetFilmsFactory())
}