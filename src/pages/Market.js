
import Main from 'layouts/Default'
import Toggle from 'ui/Toggle'

const Home = (state, dispatch) => {
  return (
    <div>
      <div>Hello I am content for the page "Home".</div>
      <Toggle/>
    </div>
  )
}

export default {
  view: Main({ title: 'Home' }, Home),
  onRoute: () => {
    console.log('Foobar >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Foobar >> onBeforeLeave')
  }
}
