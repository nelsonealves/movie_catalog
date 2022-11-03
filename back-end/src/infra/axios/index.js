import axios from 'axios'


export class AxiosClient {
    

    async request ({url, method, body, headers}) {
        let axiosResponse;
        try {
            axiosResponse = await axios.request({
                baseURL: process.env.API_URL,
                url,
                method,
                data: body,
                headers:{
                    "Content-type": "application/json",
                    ...headers
                }
            })

            
        } catch (error) {
            return {
                Error: {
                    ErrorCode: 500,
                    ErrorMessage: error.code
                }
            }
        }

        return {
            status: axiosResponse.status,
            body: axiosResponse.data
        }
        
    }
}
