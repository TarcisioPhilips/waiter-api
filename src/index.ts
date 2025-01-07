import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World - novo")
})

const port = 3001

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`)
})
