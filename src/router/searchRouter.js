import express from 'express'
import { data } from "../data/search.js";

export const SearchRouter = express.Router()

SearchRouter.get('/search', (req, res) => {
  const { text } = req.query;
  if(!(String(text).length)) {
    res.send({
      code: 515,
      data: [],
      message: '请输入搜索内容'
    })
    return;
  };

  const result = data.data.filter(item => item.word.includes(text))

  res.send({
    code: 200,
    data: result,
    message: '查询成功'
  })
})

