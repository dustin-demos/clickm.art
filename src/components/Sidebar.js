
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
        <Link to='/clickmart/'>CLICKMART</Link>
        <h2>Departments</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/clickmart/department/popular' icon='-icon-star'>Popular</Link>
          <Link to='/clickmart/department/snacks' icon='-icon-pizza'>Snacks</Link>
          <Link to='/clickmart/department/pool-beach' icon='-icon-ripple'>Pool and Beach</Link>
          <Link to='/clickmart/department/patio-garden' icon='-icon-leaf'>Patio and Garden</Link>
          <Link to='/clickmart/department/electronics' icon='-icon-devices'>Electronics</Link>
        </nav>
        <h2>Account</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/clickmart/lists' icon='-icon-gift'>Wish Lists</Link>
          <Link to='/clickmart/orders' icon='-icon-receipt'>Orders</Link>
          <Link to='/clickmart/settings' icon='-icon-settings'>Settings</Link>
          <Link to='/clickmart/logout' icon='-icon-power'>Logout</Link>
          <Link to='/clickmart/login' icon='-icon-key'>Login</Link>
        </nav>
      </div>
    </div>
  )
}
