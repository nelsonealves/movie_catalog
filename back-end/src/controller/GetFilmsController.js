


export class GetFilmsController {
    getFilms
    constructor(
        getFilms
    ) {
        this.getFilms = getFilms
    }

    async handle(params) {
        try {

            const films = await this.getFilms.get(params)
            return films
        } catch (error) {
            console.log(error)
        }

    }
}