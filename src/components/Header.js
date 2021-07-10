
import cc from 'classcat'

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

/**
 *
 * Components
 *
 */

const Navigation = (props, children) => {
  return (
    <nav class='header-navigation'>
      <Link to='/' icon='-menu-2' alt='Menu'>Menu</Link>
      <Link to='/' icon='-user' alt='Account'>Account</Link>
      <Link to='/' icon='-shopping-cart' alt='Cart'>Cart</Link>
    </nav>
  )
}

const Search = (props, children) => {
  return (
    <div class='header-search'>
      <input type='search' placeholder='Search Clickmart for the Lowest Prices!'/>
      <button alt='Search'></button>
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
    'header-banner',
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

export default (props, children) => {
  return (
    <div class='header'>
      <div class='header-bar'>
        <Navigation/>
        <Search/>
      </div>
      <Banner/>
    </div>
  )
}
