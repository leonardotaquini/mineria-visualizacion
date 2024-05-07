import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Data } from './pages/Data'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

function App() {



  return (
    <BrowserRouter>
      <main className="vh-100 d-flex flex-column">
        <Navbar />
        <div className="h-100 d-flex">
          <Sidebar />
          <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/data' element={<Data />} />
          </Routes>
          </div>

        </div>
      </main>
    </BrowserRouter>

  )
}

export default App
