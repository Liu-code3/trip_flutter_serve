import express from 'express'
import { generateToken } from '../utils/generateToken.js'

export const autuRouter = express.Router()

autuRouter.post('/login', (req, res) => {
  console.log(req.body, 'body');
  console.log(req.headers, 'headers');
  const secret = 'PhvvXr9Ro7mJfUetNLKIbUXUh+rvb8c9Q0DmKayBaGvNWDq/rvVAzgjXMuW7zSKKDgs+5iiUUOUCG4nd/bQB6edtotrOUBw+UBeXxu45rIspnUFuDal0tQ=='
  const data = generateToken(req.body, secret)
  setTimeout(() => {
    res.send({
      code: 200,
      data,
      message: '登录成功'
    })
  }, 2000)
})

