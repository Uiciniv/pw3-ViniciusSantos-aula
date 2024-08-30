import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/layout/Navbar'

import Container from './components/layout/Container'

import Home from './components/pages/Home'
import ListBooks from './components/pages/ListBooks'
import CreateBooks from './components/pages/CreateBooks'






function App() {

  return (
    <>

      <BrowserRouter>
      
        <Container>

          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route path='/' element={<Home />}/>
              <Route path='/listBooks' element={<ListBooks />}/>
              <Route path='/createBooks' element={<CreateBooks />}/>
            </Route>
          </Routes>

        </Container>
      
      </BrowserRouter>  

    </>
  )
}

export default App
