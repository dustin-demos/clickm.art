
import Main from 'layouts/Default'

const Market = (state, dispatch) => {
  return (
    <div>
      <div>Hello I am content for the page "Market".</div>
    </div>
  )
}

export default {
  view: Main({ title: 'Market' }, Market),
  onRoute: () => {
    console.log('Market >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Market >> onBeforeLeave')
  }
}
