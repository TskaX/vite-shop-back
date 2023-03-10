import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: {
    type: String,
    requried: [true, '缺少名稱']
  },
  price: {
    type: Number,
    min: [0, '價格必須大於0'],
    required: [true, '缺少價格']
  },
  description: {
    type: String,
    required: [true, '缺少說明']
  },
  image: {
    type: String,
    required: [true, '缺少圖片']
  },
  sell: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    required: [true, '缺少分類'],
    enum: {
      values: ['衣服', '皮件', '鞋子', '飾品', '3C', '其他'],
      message: '分類錯誤'
    }
  }
}, { versionKey: false })

export default model('products', schema)
