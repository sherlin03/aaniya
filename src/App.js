import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './Pages/admin/Dashboard/Layout';
import Layout2 from './Pages/admin/Dashboard/Layout2';
import Addjean from './Pages/admin/Dashboard/adminpages/Addjean';
import Addshoes from './Pages/admin/Dashboard/adminpages/Addshoes';
import Addtshirt from './Pages/admin/Dashboard/adminpages/Addtshirt';
import Jean from './Pages/admin/Dashboard/adminpages/Jean';
import Shoes from './Pages/admin/Dashboard/adminpages/Shoes';
import Suits from './Pages/admin/Dashboard/adminpages/Suits';
import Tshirt from './Pages/admin/Dashboard/adminpages/Tshirt';
import AdminRegistration from './Pages/admin/login/AdminRegistration';
import Login from './Pages/admin/login/Login';
import Addsuit from './Pages/admin/Dashboard/adminpages/Addsuit';
import Card from './Pages/admin/Dashboard/Card';
import Adminlogin from './Pages/admin/login/Adminlogin';
import UserLayout1 from './Pages/user/UserLayout1';
import UserLayout2 from './Pages/user/UserLayout2';
import Userjeans from './Pages/user/Userjeans';
import Usertshirt from './Pages/user/Usertshirt';
import Usershoes from './Pages/user/Usershoes';
import Adultsuits from './Pages/user/Adultsuits';
import Notfound from './Pages/Notfound';
import About from './Pages/user/About';
import Contact from './Pages/user/Contact';


function App() {
  return (
    <div className="App">
        <ToastContainer theme='colored' ></ToastContainer>
        <Router>
          <Routes>
            {/* login  */}
             <Route exact path='/' element={<Login/>}></Route>
             <Route exact path='/register' element={<AdminRegistration/>}></Route>
             <Route exact path='/admin' element={<Adminlogin/>}></Route>
             {/* <Route exact path='/layout' element={<Layout/>}></Route> */}

             
              {/* user  */}
             {/* <Route exact path='/userhome' element={<UserHome/>}></Route> */}
             <Route exact path='/userhome' element={<UserLayout1/>}></Route>
             <Route exact path='*' element={<Notfound/>}></Route>
             
             <Route element={<UserLayout2/>}>
             <Route  path='/userjean' element={<Userjeans/>}></Route>
             <Route  path='/usertshirt' element={<Usertshirt/>}></Route>
             <Route  path='/usershoe' element={<Usershoes/>}></Route>
             <Route  path='/usersuit' element={<Adultsuits/>}></Route>
             <Route  path='/about' element={<About/>}></Route>
             <Route  path='/contact' element={<Contact/>}></Route>
             </Route>

             {/* admin  */}
             <Route exact path='/layout' element={<Layout/>}></Route>
             
             <Route element={<Layout2/>}>

             {/* <Route exact path='/' element={<Login/>}></Route> */}
             {/* Jean  */}
                <Route exact path='/jean' element={<Jean/>}></Route>
                <Route exact path='/addjean' element={<Addjean/>}></Route>
              {/* Shoes  */}
                <Route exact path='/shoes' element={<Shoes/>}></Route>
                <Route exact path='/addshoe' element={<Addshoes/>}></Route>
              {/* Suits  */}
                <Route exact path='/suits' element={<Suits/>}></Route>
                <Route exact path='/addsuit' element={<Addsuit/>}></Route>
              {/* Tshirts  */}
                <Route exact path='/tshirts' element={<Tshirt/>}></Route>
                <Route exact path='/addtshirt' element={<Addtshirt/>}></Route>
                
                <Route exact path='/card' element={<Card/>}></Route>
                
                
             </Route>

          </Routes>
        </Router>

    </div>
  );
}

export default App;
