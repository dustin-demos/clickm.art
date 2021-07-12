
const key = 'pocket-panel-position'
const json = sessionStorage.getItem(key)
const position = JSON.parse(json)

const init = () => ({
  active: true,
  height: 'auto',
  offset: [0, 0],
  position: position ?? [100, 100],
  store: 'common'
})

export const state = init()

export const reset = () => {
  return init()
}

export const toggle = ({ panel }) => {
  panel.active = !panel.active
  return { panel }
}

export const setHeight = ({ panel }, value) => {
  panel.height = value
  return { panel }
}

export const setOffset = ({ panel }, value) => {
  panel.offset = value
  return { panel }
}

export const setPosition = ({ panel }, value) => {
  const [positionX, positionY] = value
  const [offsetX, offsetY] = panel.offset

  panel.position = [
    positionX - offsetX,
    positionY - offsetY
  ]

  const json = JSON.stringify(panel.position)
  sessionStorage.setItem(key, json)

  return { panel }
}

export const setStore = ({ panel }, value) => {
  panel.store = value
  return { panel }
}
