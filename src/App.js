import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/1landingPage';
 import AdminLogin from './components/2adminLogin';
 import UserLogin from './components/3userLogin';
 import AdminHome from './components/4adminHome';
 import UserHome from './components/12userHome';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
       <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/user-login" element={<UserLogin/>}/>
        <Route path="/admin/*" element={<AdminHome/>}/>
        <Route path="/user/*" element={<UserHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
