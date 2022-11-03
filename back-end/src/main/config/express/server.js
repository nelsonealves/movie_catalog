import { setupApp } from './app.js'

export const runServer = (port) => {
    setupApp().then(app => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}!`)
        })

    
    })
}