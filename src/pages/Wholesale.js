
import Default from 'layouts/Default'
import Hero from 'components/Hero'
import Link from 'ui/Link'

const Item = () => {
  return (
    <div>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Link to='/'>Link to something</Link>
    </div>
  )
}

const Wholesale = () => {
  return (
    <div class='page-wholesale'>
      <Hero/>
      <div class='page-wholesale-row'>
        <Item/>
        <Item/>
        <Item/>
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
