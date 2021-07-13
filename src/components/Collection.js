
import { getState, dispatch } from 'app'
import Card from 'ui/Card'

/**
 *
 * Event Handlers
 *
 */

const add = () => {
  console.log('add')
}

/**
 *
 * Components
 *
 */

const Product = (props, children) => {
  const style = `background: url('${props.images[0]}') center / contain no-repeat;`

  return (
    <div class='component-collection-product'>
      <div class='-image' style={style}>
        <div>Added!</div>
      </div>
      <button onclick={add}></button>
      <div class='-price'>{props.price}</div>
      <div class='-title _multiline-ellipsis'>{props.title}</div>
    </div>
  )
}

/**
 *
 * Main Export
 *
 */

export default (props, children) => {
  const { products } = getState()

  const collections = products.collections
  const group = collections[props.category]

  const target = group.map(item => (
    <Product title={item.title} price={item.price} images={item.images}/>
  ))

  return (
    <Card icon={props.icon} title={props.category}>
      <div class='component-collection'>
        {target}
      </div>
    </Card>
  )
}
