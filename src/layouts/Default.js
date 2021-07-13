
import Footer from 'components/Footer'
import Header from 'components/Header'
import Panel from 'components/Panel'
import Sidebar from 'components/Sidebar'

import { dispatch } from 'app'

export default (props, children) => state => {
  return (
    <div class='layout-default'>
      <Header/>
      <div class='layout-default-content'>
        <div>
          {children(state, dispatch)}
        </div>
        <Footer/>
      </div>
      <Sidebar/>
      {/* {process.env.DEV && <Panel/>} */}
      <Panel/>
    </div>
  )
}
