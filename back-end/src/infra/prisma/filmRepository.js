
import { PrismaClient } from '@prisma/client'
import { buildQueryPrisma } from './utils/buildQueryPrisma.js'
export class FilmRepository {
    prisma = new PrismaClient()
    constructor() {

    }

    async get(params) {
        try {

            console.log(buildQueryPrisma(params))
            const count = await this.prisma.movie.count()
            const movies = await this.prisma.movie.findMany(buildQueryPrisma(params))

            if (movies.length < 1) throw {data: [], count: 0}

            await this.prisma.$disconnect()
            
            return { data: movies, count }
        } catch (err) {
            console.log(err)
            return err
        }

    }

    async create(array) {
        try {
            console.log({array})
            const movies = await array.map(async movie => {
                console.log({movie})
                const movieFind = await this.prisma.movie.findFirst({
                    where: {
                        id: movie.id
                    }
                })

                if (movieFind?.id) return movieFind
                const result = await this.prisma.movie.create({
                    data: movie
                })

                return result
            })

            await this.prisma.$disconnect()
            return {data: Promise.all(movies)}
        } catch (err) {
            console.log(err)
            return err
        }
    }
}