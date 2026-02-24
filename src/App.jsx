import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <header>
        <Navbar />
        {isHome && <Banner />}
      </header>
      <main className="mt-5">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </>
  )
}
