import { useState } from 'react'
import Home from './pages/Home'
import FindCar from './pages/FindCar'
import SpecificCar from './pages/SpecificCar'

function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <nav className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
      <button type="button" className="text-xl font-bold" onClick={() => onNavigate('Home')}>
        CarMatch
      </button>
      <div className="flex gap-4">
        <button type="button" onClick={() => onNavigate('Home')}>Home</button>
        <button type="button" onClick={() => onNavigate('FindCar')}>Find a car</button>
      </div>
    </nav>
  )
}

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