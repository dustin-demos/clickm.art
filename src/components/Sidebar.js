
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

// const Nav = props => {
//   const links = props.links.map(item => (
//     <Link to={item.to} icon={item.icon}>{item.value}</Link>
//   ))
//
//   return <nav class='component-sidebar-nav'>{links}</nav>
// }

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
        <Link to='/'>logo</Link>
        <h2>Clickmart</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/orders' icon='ic-dashboard'>Orders</Link>
          <Link to='/lists' icon='ic-tag'>Lists</Link>
        </nav>
        <h2>Departments</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/' icon='ic-insights'>Insights</Link>
          <Link to='/' icon='ic-lightbulb'>Suggested</Link>
          <Link to='/' icon='ic-explore'>Discover</Link>
          <Link to='/' icon='ic-settings'>Settings</Link>
        </nav>
        <h2>Account</h2>
        <nav class='component-sidebar-nav'>
          <Link to='/settings' icon='ic-insights'>Settings</Link>
          <Link to='/customer-service' icon='ic-lightbulb'>Customer Service</Link>
          <Link to='/sign-out' icon='ic-explore'>Sign Out</Link>
        </nav>
      </div>
    </div>
  )
}
