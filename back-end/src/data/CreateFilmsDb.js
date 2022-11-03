

export class CreateFilmsDb {
    filmRepository
    constructor(filmRepository){
        this.filmRepository = filmRepository
    }
    async create(params) {
        try {
            
            const response = await this.filmRepository.create(params)
            
            return response

        } catch (error) {
            console.log(error)
        }
    }

}