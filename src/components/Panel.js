
import cc from 'classcat'

import { getState, dispatch } from 'app'
import * as $common from 'stores/common'
import * as $panel from 'stores/panel'

import css from 'modules/css-concat'
import once from 'modules/run-once'

import Toggle from 'ui/Toggle'

const onMounted = once()

/**
 *
 * Event Handlers
 *
 */

const dragStart = event => {
  dispatch($panel.setOffset, [
    event.offsetX,
    event.offsetY
  ])
}

const dragEnd = event => {
  dispatch($panel.setPosition, [
    event.clientX,
    event.clientY
  ])
}

const togglePanel = () => {
  dispatch($panel.toggle)
}

const toggleBanner = () => {
  dispatch($common.toggle, 'banner')
}

const toggleSidebar = () => {
  dispatch($common.toggle, 'sidebar')
}

/**
 *
 * Components
 *
 */

const Setting = props => {
  return (
    <div>
      <span>{props.label}</span>
      <Toggle active={props.active} onClick={props.onClick}/>
    </div>
  )
}

/**
 *
 * Main Export
 *
 */

export default props => {
  const { common, panel } = getState()

  const ref = { vnode: null }
  const [x, y] = panel.position

  const style = css({
    '--height': panel.height,
    'top': y + 'px',
    'left': x + 'px'
  })

  const panelClass = cc([
    'component-panel',
    panel.active && '-active'
  ])

  const contentClass = cc([
    'component-panel-content',
    panel.active && '-active'
  ])

  onMounted(() => {
    const height = ref.vnode.node.offsetHeight
    dispatch($panel.setHeight, height + 'px')
  })

  return (
    ref.vnode = <div draggable='true' class={panelClass} style={style} ondragstart={dragStart} ondragend={dragEnd}>
      <h1>Developer Panel</h1>
      <div class={contentClass}>
        <div class='component-panel-settings'>
          <Setting
            label='Toggle Banner'
            active={common.banner}
            onClick={toggleBanner}
          />
          <hr/>
          <Setting
            label='Toggle Sidebar'
            active={common.sidebar}
            onClick={toggleSidebar}
          />
          <hr/>
        </div>
        <div class='component-panel-palette'>
          <div class='-red'></div>
          <div class='-orange'></div>
          <div class='-yellow'></div>
          <div class='-green'></div>
          <div class='-blue'></div>
          <div class='-purple'></div>
        </div>
        <div class='component-panel-palette'>
          <div class='-dark-600'></div>
          <div class='-dark-500'></div>
          <div class='-dark-400'></div>
          <div class='-dark-300'></div>
          <div class='-dark-200'></div>
          <div class='-dark-100'></div>
        </div>
        <div class='component-panel-palette'>
          <div class='-light-600'></div>
          <div class='-light-500'></div>
          <div class='-light-400'></div>
          <div class='-light-300'></div>
          <div class='-light-200'></div>
          <div class='-light-100'></div>
        </div>
      </div>
      <button alt='Toggle Developer Panel' onclick={togglePanel}></button>
    </div>
  )
}
