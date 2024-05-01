import {Link, Outlet} from "react-router-dom";

const Layout = () => {
  console.log("Layout")
  return (<>
      <header>
        <h1>
          <Link to="/">Wisdom Pet</Link>
        </h1>
      </header>
      <div id={"main"}>
        <Outlet/>
      </div>
    </>)
}

export default Layout