const express = require ('express')
const cors = require ('cors')

const app = express()
app.use(cors())
const port =3000
app.get("/", (req, res) =>{
    res.status(200).json({message:"node server is responding" })
})
app.listen(port,() => {
    console.log(`server running on port${port}`)
})