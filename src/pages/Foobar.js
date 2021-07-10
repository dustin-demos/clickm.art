
const Foobar = (state, dispatch) => {
  return (
    <div class='page-foobar'></div>
  )
}

export default {
  view: Foobar,
  onRoute: () => {
    console.log('Foobar >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Foobar >> onBeforeLeave')
  }
}
