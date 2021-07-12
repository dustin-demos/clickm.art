
import database from '../database'

export const state = {
  database,
  cart: [],
  collections: {
    'Pool and Beach': database.map(item => {
      return item.tags.includes('pool') && item
    })
  }
}

// export const toggle = ({ common }, key) => {
//   common[key] = !common[key]
//   return { common }
// }

// export const set = ({ common }, key, value) => {
//   common[key] = value
//   return { common }
// }
