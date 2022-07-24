import logo from './logo.svg';
import './App.css';


import Nav from './components/Nav';
import Adminpanel from './components/Adminpanel';
import Add from './components/AddUser';
import Userlist from './components/Userlist';


import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import AddUser from './components/AddUser';

function App() {
  return (
    <Router>
      <div id='apps'>
        <Nav />
        <Routes>
          <Route exact-path='/' element={<Adminpanel />}/>
          <Route path='/add' element={<AddUser />}/>
          <Route path='/user-list' element={<Userlist />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
