
export const state = {}

export const toggle = ({ inspector }, key) => {
  inspector[key] = !inspector[key]
  return { inspector }
}
