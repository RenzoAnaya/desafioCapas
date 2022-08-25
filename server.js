import express from 'express'
import logsRoutes from './routes/logs.js'


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/logs', logsRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})