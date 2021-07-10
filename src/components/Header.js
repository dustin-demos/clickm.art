
import cc from 'classcat'
import Link from 'ui/Link'

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
      <input type='search'/>
      <button>Search</button>
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
      <div class='header-banner'>
        <Link to='/learn-more'>Learn more</Link> about our partners that power this store!
      </div>
    </div>
  )
}
