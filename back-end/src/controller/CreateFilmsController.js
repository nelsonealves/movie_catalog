


export class CreateFilmsController {
    getFilms
    createFilms
    constructor (
        getFilms,
        createFilms
    ){
        this.getFilms = getFilms
        this.createFilms = createFilms
    }

    async handle(params) {
        try {
            const movies = await this.getFilms.get()
           
            if (movies.length < 1) return []
            
            const createFilms = await this.createFilms.create(movies.data)
            
            return createFilms
        } catch (error) {
            console.log(error)
        }
        
    }
}