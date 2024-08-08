import express from 'express'
import { data } from "../data/home.js";

export const HomeRouter = express.Router()

HomeRouter.get('/banner', (req, res) => {
    // setTimeout(() => {
    //     res.send(data)
    // }, 500)
    res.send(data)

})

