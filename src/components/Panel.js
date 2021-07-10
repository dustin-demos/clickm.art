
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

  const settingsClass = cc([
    'component-panel-settings',
    panel.active && '-active'
  ])

  onMounted(() => {
    const height = ref.vnode.node.offsetHeight
    dispatch($panel.setHeight, height + 'px')
  })

  return (
    ref.vnode = <div draggable='true' class={panelClass} style={style} ondragstart={dragStart} ondragend={dragEnd}>
      <h1>Developer Panel</h1>
      <div class={settingsClass}>
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
      </div>
      <button alt='Toggle Developer Panel' onclick={togglePanel}></button>
    </div>
  )
}
