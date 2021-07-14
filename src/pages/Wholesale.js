
import Default from 'layouts/Default'
import Hero from 'components/Hero'

const Wholesale = () => {
  return (
    <div class='page-wholesale'>
      <Hero/>
      <div class='page-wholesale-row'>
        <div>one</div>
        <div>one</div>
        <div>one</div>
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
