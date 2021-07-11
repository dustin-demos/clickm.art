
import Card from 'ui/Card'

const products = {
  'Pool and Beach': [
    {
      title: 'Inflatable Avocado Pool Floatie with Ball',
      amazon: 'https://www.amazon.com/dp/B07LG9RJT7/',
      price: '$22.99',
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
      price: '$22.99',
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
      price: '$22.99',
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

const Product = (props, children) => {
  const style = `background: url('${props.images[0]}') center / contain no-repeat;`

  return (
    <div class='component-collection-product'>
      <div class='component-collection-product-image' style={style}></div>
      <div>{props.price}</div>
      <div>{props.title}</div>
    </div>
  )
}

export default (props, children) => {
  const target = products[props.category].map(item => (
    <Product title={item.title} price={item.price} images={item.images}/>
  ))

  return (
    <Card title={props.category}>
      <div class='component-collection'>
        {target}
      </div>
    </Card>
  )
}
