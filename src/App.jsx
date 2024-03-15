import Home from './pages/home/Home';
import "./index.scss";
import { BrowserRouter,  Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { useContext } from 'react';
import {AuthContext} from "./authContext/AuthContext"
import { User } from './pages/user/User';
import MyList from './pages/mylist/MyList';

function App() {
  const { user } = useContext(AuthContext);
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={user ? <Home/> : <Navigate to='/login'/>}></Route>
          <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>}></Route>
          <Route path='/register' element={!user ? <Register/> : <Navigate to='/'/>}></Route>
          { user && (
            <>
            <Route path='/movies' element={<Home type="movies"/>}></Route>
            <Route path='/series' element={<Home type="series"/>}></Route>
            <Route path='/watch' element={<Watch/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/myList' element={<MyList/>}></Route>
            </>
          )
          }
        </Routes>
      </BrowserRouter>
    );
}

export default App;
