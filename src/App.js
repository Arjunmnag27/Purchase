// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Profilepage from './Components/Profilepage';
import Homepage from './Components/Homepage';
import NewRegister from './Components/NewRegister';
import AdminHomepage from './Components/AdminHomepage';

function App() {
  return (
    <div>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Profilepage' element={<Profilepage/>}/>
        <Route path='/NewRegister' element={<NewRegister/>}/>
        <Route path='/AdminHomepage/*' element={<AdminHomepage/>}/>
       </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
