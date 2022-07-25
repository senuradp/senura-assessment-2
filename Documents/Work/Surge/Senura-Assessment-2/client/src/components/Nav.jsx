import { AppBar, Toolbar, styled } from "@mui/material";
import { Link } from "react-router-dom";


const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(Link)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const Nav = () => {
  return (
    <Header>
    <div className="header">
      <Toolbar>
          <Tabs to={'#'}><p id='tab'>Admin Panel</p></Tabs>
          <Tabs to={'/login'}><p id='tab'>Login</p></Tabs>
          <Tabs to={'/user-list'}><p id='tab'>User List</p></Tabs>
          <Tabs to={'/add'}><p id='tab'>Add User</p></Tabs>
      </Toolbar>
    </div>
  </Header>

  );
};

export default Nav;
