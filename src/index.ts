import express from "express"
import mongoose from "mongoose"
import { router } from "./router"

const app = express()


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.use(express.json())
    app.use(router)

    const port = 3001

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`)
    })

  })
  .catch(() => console.log('erro ao conectar no mongodb '))