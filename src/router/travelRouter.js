import express from 'express'
import { data } from "../data/travel_category.js";
import { itemData } from '../data/travel_tabList.js';

export const TravelRouter = express.Router()

TravelRouter.get('/category', (req, res) => {
  res.send({
    code: data.code,
    data: data.data,
    message: data.msg
  })
})

TravelRouter.get('/', (req, res) => {
  const { pageIndex, pageSize, groupChannelCode } = req.query
  console.log(pageIndex, 'pageIndex');
  console.log(pageSize, 'pageSize');
  console.log(groupChannelCode, 'groupChannelCode');

  const list = shuffleArray([...itemData.data.list]).slice((pageIndex - 1) * pageSize, pageSize * pageIndex)

  setTimeout(() => {
    res.send({
      code: itemData.code,
      data: {
        total: 14,
        list
      },
      message: itemData.msg
    })
  }, 500)
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}