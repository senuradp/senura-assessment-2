import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Nav from './components/Nav';
import Adminpanel from './components/Adminpanel';
import Add from './components/admin/AddUser';
import Userlist from './components/admin/Userlist';
import EditUser from './components/admin/EditUser';
import Login from './components/Login';
import Logout from './components/Logout';
import AddNote from './components/student/AddNote'
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  const USER_TYPE = localStorage.getItem('USER_TYPE');

  return (
    <Router>
      <div id='apps'>
        <Nav />
        <Routes>
          <Route exact-path='/' element={<Adminpanel />} />

          {USER_TYPE ? (
            USER_TYPE=='admin' ? (
              <Route path='/login' element={<Navigate to="/user-list" />} />
            ) : (
              <Route path='/login' element={<Navigate to="/add-note" />} />
            )
          ) : (
            <Route path='/login' element={<Login />} />
          )}
          <Route path='/add' element={<Add />} />
          <Route path='/add-note' element={<AddNote />} />
          <Route path='/user-list' element={<Userlist />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/log-out' element={<Logout />} />
        </Routes>

      </div>
    </Router >

    // <Router>
    //   <Nav />
    //   {isLoggedIn ? (
    //     <button onClick={logOut}>Logout</button>
    //   ) : (
    //     <button onClick={logIn}>Login</button>
    //   )}

    // </Router>
  );
}

export default App;
