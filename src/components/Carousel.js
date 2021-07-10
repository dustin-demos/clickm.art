
import cc from 'classcat'
import LinkButton from 'ui/LinkButton'

const slides = [
  {
    title: 'Pool Rafts',
    tagline: 'We have have everything to help you make your summer memorable.',
    category: '',
    image: '/carousel/pool.png',
    color: '--red'
  },
  {
    title: 'Patio and Grill',
    tagline: 'We have all the outdoor essentials for the perfect cookout.',
    category: '',
    image: '/carousel/grill.png',
    color: '--green'
  },
  {
    title: 'Electronics',
    tagline: 'Complete your office and get things done with our tech accessories.',
    category: '',
    image: '/carousel/electronics.png',
    color: '--blue'
  }
]

const Card = (props, children) => {
  const style = `background: url('${props.image}') center / cover;`

  return (
    <div>
      <div class='carousel-image' style={style}></div>
      <div class='carousel-content' style={`background: var(${props.color}, red);`}>
        <div class='carousel-info'>
          <h1>{props.title}</h1>
          <h2>{props.tagline}</h2>
          <LinkButton to='/shop' class='-ic-basket -carousel'>Shop Now</LinkButton>
        </div>
      </div>
    </div>
  )
}

export default (props, children) => {
  const target = slides.map(item => Card(item))

  return (
    <div class='carousel'>
      <div class='carousel-scroll'>
        {target}
      </div>
      {/* <div class='carousel-controls'>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div> */}
    </div>
  )
}
