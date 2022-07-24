import { AppBar, Toolbar, styled, Tabs } from "@mui/material";
import { Link } from "react-router-dom";


// const Header = styled(AppBar)`
//   background: #111111;
// `;

const Nav = () => {
  return (
    <AppBar>
    <div className="header">
      <Toolbar>
        {/* <div className="tabs"> */}
          <Link to={'#'}><p id='tab'>Admin Panel</p></Link>
          <Link to={'/user-list'}><p id='tab'>User List</p></Link>
          <Link to={'/add'}><p id='tab'>Add User</p></Link>
        {/* </div> */}
      </Toolbar>
    </div>
  </AppBar>

  );
};

export default Nav;
