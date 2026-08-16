import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Found from './pages/Found'
import Home from './pages/Home'
import ItemDetails from './pages/ItemDetails'
import Lost from './pages/Lost'
import ReportFound from './pages/ReportFound'
import ReportLost from './pages/ReportLost'
import './App.css'

// The app shell keeps navigation and the footer visible on every route.
function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lost" element={<Lost />} />
            <Route path="/found" element={<Found />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/report/lost" element={<ReportLost />} />
            <Route path="/report/found" element={<ReportFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
