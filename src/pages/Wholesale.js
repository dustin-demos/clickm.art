
import Default from 'layouts/Default'
import Hero from 'components/Hero'
import Link from 'ui/Link'

const Card = props => {
  return (
    <div>
      <div class={props.class}>{/* emnpty */}</div>
      <Link to='/'>{props.label}</Link>
    </div>
  )
}

const About = props => {
  return (
    <div class='page-wholesale-about'>
      <h1>Our Mission</h1>
      <div>
        <p>We do not compromise quality, we strive for perfection. Not only to provide the best quality products but to have the lowest prices in the industry.</p>
        <p>We don't leave anything to chance and we review each item individually to make sure that we've done our absolute best to make sure that our products will exceed your expectations.</p>
        <p>We are very proud of our commitment to only provide the absolute best products for pets. Whether you're looking for dog food or a cat toy, we invite you to shop with us. You won't be disappointed!</p>
      </div>
    </div>
  )
}

const Wholesale = () => {
  return (
    <div class='page-wholesale'>
      <Hero/>
      <div class='page-wholesale-row'>
        <div>
          <h1 class='-truck-delivery'>Free Returns</h1>
          <p>We provide free returns within 60 days. Customer satisfaction is our first priority.</p>
        </div>
        <div>
          <h1 class='-gift'>Unique Products</h1>
          <p>Here you will find a large selection of exclusive products that you won't find anywhere else!</p>
        </div>
        <div>
          <h1 class='-discount-2'>Low Prices</h1>
          <p>Our partnerships with manufacturers allows us to sell products at prices that can't be beat.</p>
        </div>
      </div>
      <About/>
      <div class='page-wholesale-row'>
        <div>
          <h1 class='-calendar-plus'>Net 60 Terms</h1>
          <p>Retailers can pay 60 days after ordering. With us, it's easy to try new products.</p>
        </div>
        <div>
          <h1 class='-certificate'>Quality Brands</h1>
          <p>Our experts source the best brands for retailers of all sizes.</p>
        </div>
        <div>
          <h1 class='-discount-2'>Low Prices</h1>
          <p>Our partnerships with manufacturers allows us to sell products at prices that can't be beat.</p>
        </div>
      </div>
      <div class='page-wholesale-row'>
        {/* <Card class='-pool' label='Shop Pool and Beach'/> */}
        <Card class='-headphones' label='Shop Headphones'/>
        <Card class='-keyboard' label='Shop Custom Keyboards'/>
        <Card class='-audio' label='Shop Audio Equipment'/>
      </div>
    </div>
  )
}

export default {
  view: Default({ title: 'Wholesale' }, Wholesale),
  onRoute: () => {
    console.log('Wholesale >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Wholesale >> onBeforeLeave')
  }
}
