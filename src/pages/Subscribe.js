
import cc from 'classcat'

import Link from 'ui/Link'
import Button from 'ui/Button'

import Default from 'layouts/Default'

const Form = (props, children) => {
  return (
    <form class='page-subscribe-form'>
      <input type='email' placeholder='andy@example.com'/>
      <Button>Heck Yeah!</Button>
    </form>
  )
}

const Card = (props, children) => {
  return (
    <div class='page-subscribe-card'>
      <h1>Get Alerts When Prices Drop!</h1>
      <Form/>
    </div>
  )
}

const Subscribe = (state, dispatch) => {
  return (
    <div class='page-subscribe'>
      <div>
        {/* <img src='/cache/logo-temp-1.png'/> */}
        <Card/>
      </div>
    </div>
  )
}

export default {
  view: Default({ title: 'Subscribe' }, Subscribe),
  onRoute: () => {
    console.log('Subscribe >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Subscribe >> onBeforeLeave')
  }
}
