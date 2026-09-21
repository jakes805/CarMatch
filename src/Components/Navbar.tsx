import { Car } from 'lucide-react'

interface NavbarProps {
  onNavigate: (page: string) => void
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <header className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div
          onClick={() => onNavigate('Home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
            <Car className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Car<span className="text-blue-500">Match</span>
          </span>
        </div>

        {/* Header Action Button */}
        <button
          onClick={() => onNavigate('FindCar')}
          className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white text-xs font-bold transition-all cursor-pointer"
        >
          Help Me Find a Car
        </button>
      </div>
    </header>
  )
}