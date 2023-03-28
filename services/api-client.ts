import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'dfb641b1cdd5401889eb993908928713'
  }
})
