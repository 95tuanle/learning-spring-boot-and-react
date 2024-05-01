import {Link, Outlet} from 'react-router-dom'

const Layout = () => <>
  <header>
    <h1>
      <Link to={'/'} className={'header-link'}>Wisdom Pet</Link>
    </h1>
  </header>
  <div id={'main'}>
    <Outlet/>
  </div>
</>

export default Layout;