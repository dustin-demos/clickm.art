
import Default from 'layouts/Default'

import Card from 'ui/Card'
import Toggle from 'ui/Toggle'

import Carousel from 'components/Carousel'
import Collection from 'components/Collection'

const Advertisement = () => {
  return (
    <div class='page-home-advertisement'></div>
  )
}

const Home = (state, dispatch) => {
  return (
    <div class='page-home'>
      <div class='page-home-content'>
        {/* <Carousel/> */}
        <Advertisement/>
        {/* <Collection category='Pools and Water Toys'/> */}
        {/* <Card icon='' title='Electronics'>
          <Product/>
        </Card> */}
        {/* <Card icon='' title='Sports and Outdoors'>hello</Card>
        <Card icon='' title='Interiors'>hello</Card>
        <Card icon='' title='Toys'>hello</Card>
        <Card icon='' title='Fashion'>hello</Card>
        <Card icon='' title='School and Office'>hello</Card>
        <Card icon='' title='Patio and Garden'>hello</Card>
        <Card icon='' title='Workout and Athletics'>hello</Card> */}
      </div>
    </div>
  )
}

export default {
  middleare: ['carousel'],
  view: Default({ title: 'Home' }, Home),
  onRoute: () => {
    console.log('Home >> onRoute')
  },
  onBeforeLeave: () => {
    console.log('Home >> onBeforeLeave')
  }
}
