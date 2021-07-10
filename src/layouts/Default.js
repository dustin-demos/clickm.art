
// import cc from 'classcat'

import Panel from 'components/Panel'
// import Sidebar from 'components/Sidebar'
import Header from 'components/Header'

import { dispatch } from 'app'
import * as common from 'stores/common'

// const toggle = () => {
//   dispatch(common.toggle, 'sidebar')
// }

export default (props, children) => state => {
  // const classList = cc({
  //   'layout-dashboard': true,
  //   '-sidebar': state.sidebar
  // })

  return (
    <div class='layout-default'>
      <Header/>
      {children(state, dispatch)}
      {/* <Panel panel={state.panel}/> */}
      {/* <div class='layout-main-content'>
        <div class='layout-main-head'>
          <h1>{props.title}</h1>
          <div class='component-layout-corner'>
            <div>
              <button alt='Menu' onclick={toggle}>|||</button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <Sidebar active={state.sidebar}/> */}
    </div>
  )
}
