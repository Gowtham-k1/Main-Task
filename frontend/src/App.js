import logo from './logo.svg';
import './App.css';
import Login from './loginpage';
import Lang from './landingpage';
import Dash from './dashboard';
import Dele from './delete';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Update from './updatepage';
function App() {
  return (
    <>

    <BrowserRouter>
     <Routes>
      <Route path='/'  element={<Login/>}/>
      <Route path='/dashboard' element={<Dash/>}/>
      <Route path='/delete'  element={<Dele/>}/>
      <Route path='/updatepage/:id'element={<Update/>}/>
     </Routes>
    </BrowserRouter>
   
    
    </>
  );
}

export default App;
