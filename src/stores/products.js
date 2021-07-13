
import database from '../database'

const filterBy = key => {
  return database.filter(item => {
    if (item.active === false) {
      return false
    }

    return item.tags.includes(key)
  })
}

export const state = {
  database,
  cart: [],
  collections: {
    'Pool and Beach': filterBy('pool'),
    'Gaming': filterBy('gaming'),
    'PC Accessories': filterBy('computer')
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
