import express from 'express'
import morgan from 'morgan'

import { PORT } from './config/index.js'
import { 
    autuRouter,
    HomeRouter,
    SearchRouter,
    TravelRouter
 } from './router/index.js'


const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))

app.use('/user', autuRouter)
app.use('/home', HomeRouter)
app.use('/xm', SearchRouter)
app.use('/travel', TravelRouter)



// 错误处理中间件
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`)
})