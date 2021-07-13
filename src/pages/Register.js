
import Default from 'layouts/Default'

const Account = (state, dispatch) => {
  return (
    <div class='page-account'></div>
  )
}

export default {
  view: Default({ title: 'Register' }, Account),
  onRoute: () => {
    console.log('Register >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Register >> onBeforeLeave')
  }
}
