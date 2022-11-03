

export class GetFilms {
    
    url
    httpInstance

    constructor (url, httpInstance) {
        this.url = url
        this.httpInstance = httpInstance

    }

    async get() {
        try {
            
            const response = await this.httpInstance.request({
                url: this.url,
                method: 'get',

            })

            return {data: response.body}
            
        } catch (error) {
            console.log(error)
        }
    }

}