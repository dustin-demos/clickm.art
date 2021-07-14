
import Link from 'ui/Link'

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

const Company = () => {
  return (
    <Column title='Company'>
      <div>About Us</div>
      <div>Careers</div>
      <div>Partners</div>
    </Column>
  )
}

const Department = () => {
  return (
    <Column title='Departments'>
      <div>address</div>
      <div>email</div>
      <div>phone</div>
      <div>hours</div>
    </Column>
  )
}

const Row = () => {
  return (
    <div class='component-footer-row'>
      <div class='component-footer-content'>
        <h1>CLICKMART</h1>
        <p>Shope wholesale online. Buy online from doezens of high quality brands.</p>
      </div>
      <div>{/* empty */}</div>
      <Company/>
      <Department/>
    </div>
  )
}

const Bottom = () => {
  return (
    <div class='component-footer-bottom'>
      <div>©2021 Clickmart LLC</div>
      <Link to='/terms-of-use'>Terms of Use</Link>
      <Link to='/privacy-policy'>Privacy Policy</Link>
      <Link to='/cookie-policy'>Cookie Policy</Link>
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
        <Row/>
        <Bottom/>
      </div>
    </footer>
  )
}
