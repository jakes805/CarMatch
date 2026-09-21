import type { Page } from '../App'

interface FooterProps {
  onNavigate: (page: Page) => void
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="text-xl font-black tracking-tight text-slate-950"
            >
              Car<span className="text-blue-600">Match</span>
            </button>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              Helping you find the right vehicle for your needs, budget and
              lifestyle.
            </p>
          </div>

          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <button
              onClick={() => onNavigate('specific')}
              className="transition hover:text-slate-950"
            >
              Find a specific car
            </button>

            <button
              onClick={() => onNavigate('find')}
              className="transition hover:text-slate-950"
            >
              Help me find a car
            </button>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} CarMatch. All rights reserved.
        </div>
      </div>
    </footer>
  )
}