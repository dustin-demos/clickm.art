
/**
 *
 * Components
 *
 */

const Column = (props, children) => {
  return (
    <div class='component-footer-column'>
      <h1>{props.title}</h1>
      {children}
    </div>
  )
}

/**
 *
 * Main Export
 *
 */

export default (props, children) => {
  return (
    <footer class='component-footer'>
      <div>
        <div>{/* empty */}</div>
        <Column title='Company'>
          <div>Indianola IA, 50125</div>
          <div>clickmart2021@gmail.com</div>
          <div>Monday-Friday 7am-8pm</div>
        </Column>
        <Column title='Departments'>
          <div>address</div>
          <div>email</div>
          <div>phone</div>
          <div>hours</div>
        </Column>
        <Column title='Legal'>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
        </Column>
      </div>
    </footer>
  )
}
