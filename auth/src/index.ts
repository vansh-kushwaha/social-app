import app from "./app"
import { PORT } from "./config"


app.listen(PORT, () => {
    console.log(`Auth Service is running on http://localhost:${PORT}`)
})
