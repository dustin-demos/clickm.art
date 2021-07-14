
const Header = () => {
  return (
    <div class='component-hero-info'>
      <h1>Shop wholesale online.</h1>
      <h2>Buy online from dozens of high quality brands.</h2>
    </div>
  )
}

const Buttons = () => {
  return (
    <div class='component-hero-buttons'>
      <button>Shop now</button>
      <button>Apply as a Brand</button>
    </div>
  )
}

export default () => {
  return (
    <div key='hero' class='component-hero'>
      <div>
        <Header/>
        <Buttons/>
      </div>
    </div>
  )
}
