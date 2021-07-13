
import cc from 'classcat'
import { link } from 'pocket'

import { getState, dispatch } from 'app'
import * as $common from 'stores/common'

import css from 'modules/css-concat'
import once from 'modules/run-once'

import Link from 'ui/Link'

const onMounted = once()

/**
 *
 * Event Handlers
 *
 */

const toggleBanner = () => {
  dispatch($common.toggle, 'banner')
}

const toggleSidebar = () => {
  dispatch($common.toggle, 'sidebar')
}

const search = event => {
  console.log('searching...')

  link({
    to: '/s',
    query: { k: event.target.value }
  })
}

/**
 *
 * Components
 *
 */

const Primary = () => {
  return (
    <div class='component-header-primary'>
      <button onclick={toggleSidebar}></button>
      <Link to='/'>CLICKMART</Link>
    </div>
  )
}

const Navigation = () => {
  return (
    <nav class='component-header-navigation'>
      <Link to='/account' icon='-user' alt='Account'>Account</Link>
      <Link to='/cart' icon='-shopping-cart' alt='Cart'>Cart</Link>
    </nav>
  )
}

const Search = () => {
  return (
    <div class='component-header-search'>
      <input type='search' placeholder='Search products' onsearch={search}/>
      <button alt='Search' onclick={search}></button>
    </div>
  )
}

const Banner = () => {
  const { common } = getState()
  const ref = { vnode: null }

  const style = css({
    '--height': common.bannerHeight
  })

  const classList = cc([
    'component-header-banner',
    common.banner && '-active'
  ])

  onMounted(() => {
    const height = ref.vnode.node.offsetHeight
    dispatch($common.set, 'bannerHeight', height + 'px')
  })

  return (
    ref.vnode = <div class={classList} style={style}>
      <Link to='/subscribe'>Click Here to Subscribe to Our Price Drop Alerts!</Link>
      <button onclick={toggleBanner}></button>
    </div>
  )
}

export default () => {
  return (
    <div class='component-header'>
      <div class='component-header-bar'>
        <Primary/>
        <div>{/* empty */}</div>
        <Search/>
        <Navigation/>
      </div>
      <Banner/>
    </div>
  )
}
