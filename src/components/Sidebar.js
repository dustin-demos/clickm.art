
import cc from 'classcat'

import { getState, dispatch } from 'app'
import * as $common from 'stores/common'

import Link from 'ui/Link'

/**
 *
 * Event Handlers
 *
 */

const toggleSidebar = () => {
  dispatch($common.toggle, 'sidebar')
}

/**
 *
 * Components
 *
 */

const Overlay = props => {
  const classList = cc([
    'component-sidebar-overlay',
    props.active && '-active'
  ])

  return <div class={classList} onclick={toggleSidebar}></div>
}

/**
 *
 * Main Export
 *
 */

export default () => {
  const { common } = getState()

  const classList = cc([
    'component-sidebar-menu',
    common.sidebar && '-active'
  ])

  return (
    <div class='component-sidebar'>
      <Overlay active={common.sidebar}/>
      <div class={classList}>
        <Link to='/' class='-logo'></Link>
        <h2>Departments</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/' icon='-icon-pizza'>Snacks</Link>
          <Link to='/' icon='-icon-ripple'>Pool and Beach</Link>
          <Link to='/' icon='-icon-leaf'>Patio and Garden</Link>
          <Link to='/' icon='-icon-devices'>Electronics</Link>
        </nav>
        <h2>Account</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/lists' icon='-icon-gift'>Wish Lists</Link>
          <Link to='/orders' icon='-icon-receipt'>Orders</Link>
          <Link to='/settings' icon='-icon-settings'>Settings</Link>
          <Link to='/sign-out' icon='-icon-power'>Sign Out</Link>
        </nav>
      </div>
    </div>
  )
}
