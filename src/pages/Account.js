
import Default from 'layouts/Default'

const Account = (state, dispatch) => {
  return (
    <div class='page-account'></div>
  )
}

export default {
  view: Default({ title: 'Account' }, Account),
  onRoute: () => {
    console.log('Account >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Account >> onBeforeLeave')
  }
}
