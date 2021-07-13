
import Default from 'layouts/Default'

const Wholesale = () => {
  return (
    <div>Hello i am wholesale.</div>
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
