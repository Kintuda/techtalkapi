import 'dotenv/config'
import app from './app'

(async () => {
    try {
        await app.listen(3000)
        app.swagger()
    } catch (error) {
        console.error(error)
    }
})()