
import Card from 'ui/Card'

const products = {
  'Pool and Beach': [
    {
      title: 'Inflatable Avocado Pool Floatie with Ball',
      amazon: 'https://www.amazon.com/dp/B07LG9RJT7/',
      price: '$29.99',
      images: [
        '/products/61RKbylA+9L._AC_SL1500_.jpg',
        '/products/61NH8p0QisL._AC_SL1500_.jpg',
        '/products/61DXBWnDI+L._AC_SL1500_.jpg',
        '/products/71uPv9tJJyL._AC_SL1500_.jpg',
        '/products/619ghvc8ELL._AC_SL1500_.jpg',
        '/products/713Ts8pJHCL._AC_SL1500_.jpg',
        '/products/717tdmdQv4L._AC_SL1500_.jpg'
      ]
    },
    {
      title: 'Inflatable Avocado Pool Floatie with Ball',
      amazon: 'https://www.amazon.com/dp/B07LG9RJT7/',
      price: '$29.99',
      images: [
        '/products/61RKbylA+9L._AC_SL1500_.jpg',
        '/products/61NH8p0QisL._AC_SL1500_.jpg',
        '/products/61DXBWnDI+L._AC_SL1500_.jpg',
        '/products/71uPv9tJJyL._AC_SL1500_.jpg',
        '/products/619ghvc8ELL._AC_SL1500_.jpg',
        '/products/713Ts8pJHCL._AC_SL1500_.jpg',
        '/products/717tdmdQv4L._AC_SL1500_.jpg'
      ]
    },
    {
      title: 'Inflatable Avocado Pool Floatie with Ball',
      amazon: 'https://www.amazon.com/dp/B07LG9RJT7/',
      price: '$29.99',
      images: [
        '/products/61RKbylA+9L._AC_SL1500_.jpg',
        '/products/61NH8p0QisL._AC_SL1500_.jpg',
        '/products/61DXBWnDI+L._AC_SL1500_.jpg',
        '/products/71uPv9tJJyL._AC_SL1500_.jpg',
        '/products/619ghvc8ELL._AC_SL1500_.jpg',
        '/products/713Ts8pJHCL._AC_SL1500_.jpg',
        '/products/717tdmdQv4L._AC_SL1500_.jpg'
      ]
    }
  ]
}

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
      <div class='-title'>{props.title}</div>
    </div>
  )
}

/**
 *
 * Main Export
 *
 */

export default (props, children) => {
  const target = products[props.category].map(item => (
    <Product title={item.title} price={item.price} images={item.images}/>
  ))

  return (
    <Card icon='-icon-ripple' title={props.category}>
      <div class='component-collection'>
        {target}
      </div>
    </Card>
  )
}
