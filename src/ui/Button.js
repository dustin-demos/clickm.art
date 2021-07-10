
import cc from 'classcat'

export default (props, children) => {
  const button = cc(['ui-button', props.class])

  return (
    <div class={button}>
      {children}
    </div>
  )
}
