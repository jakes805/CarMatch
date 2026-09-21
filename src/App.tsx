import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FindCar from './pages/FindCar'
import SpecificCar from './pages/SpecificCar'

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('Home')

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <Navbar onNavigate={setCurrentPage} />
      <main className="flex-1">
        {currentPage === 'Home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'FindCar' && <FindCar onNavigate={setCurrentPage} />}
        {currentPage === 'SpecificCar' && <SpecificCar onNavigate={setCurrentPage} />}
      </main>
    </div>
  )
}