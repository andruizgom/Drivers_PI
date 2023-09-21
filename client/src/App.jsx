
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import Error404 from './views/Error404/Error404';
import NavBar from './components/NavBar/NavBar';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const location = useLocation();


  return (
    <div className='App'>
      {
        location.pathname !== '/' ? <NavBar /> : null
      }
      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/*' element={<Error404 />} />

      </Routes>

    </div>
  )
}

export default App
