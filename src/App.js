import logo from './logo.svg';

import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ourwork from './Ourwork';
function App() {
  return (
  
      
<BrowserRouter>
<Routes>
<Route path='/' element={<Login/>}/>
<Route path='our-work' element={<Ourwork/>} />

   
</Routes>
</BrowserRouter>

  


   
  );
}

export default App;
