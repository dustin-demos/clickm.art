
import cc from 'classcat'

import Header from 'components/Header'
import Panel from 'components/Panel'
import Sidebar from 'components/Sidebar'

import { dispatch } from 'app'

export default (props, children) => state => {
  const classList = cc({
    'layout-default': true,
    '-banner': state.common.banner
  })

  return (
    <div class={classList}>
      <Header/>
      {children(state, dispatch)}
      <Panel/>
      <Sidebar/>
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
    </div>
  )
}
