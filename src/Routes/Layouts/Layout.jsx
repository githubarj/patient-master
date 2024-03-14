import { Outlet } from "react-router";
import "../../App.css"

function Layout() {

  

  return (
    <div className="layout-container">
      <Outlet />
    </div>
  );
}

export default Layout;
