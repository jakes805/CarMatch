import type { Page } from '../App'

interface HeaderProps {
  onNavigate: (page: Page) => void
}

export default function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg transition group-hover:scale-105">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 17h14" />
              <path d="M7 17v2" />
              <path d="M17 17v2" />
              <path d="M5 17l1.5-6h11L19 17" />
              <path d="M7.5 11 9 7h6l1.5 4" />
              <circle cx="8" cy="15" r="1" />
              <circle cx="16" cy="15" r="1" />
            </svg>
          </div>

          <span className="text-xl font-black tracking-tight text-slate-950">
            Car<span className="text-blue-600">Match</span>
          </span>
        </button>

        <button
          onClick={() => onNavigate('find')}
          className="hidden rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600 sm:block"
        >
          Find My Car
        </button>
      </div>
    </header>
  )
}