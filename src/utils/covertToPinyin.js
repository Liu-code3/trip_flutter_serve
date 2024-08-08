
import { pinyin } from 'pinyin-pro';
export function covertToPinyin(str) {
  const pinyinArray = pinyin(str, { toneType: 'none', type: 'array' })
  const pinyinStr = pinyinArray.join('')
  return pinyinStr
}