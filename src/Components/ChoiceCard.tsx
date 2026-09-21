import type React from 'react'

interface ChoiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

export default function ChoiceCard({
  icon,
  title,
  description,
  onClick,
}: ChoiceCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-9"
    >
      <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150" />

      <div className="relative">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-blue-600">
          {icon}
        </div>

        <h3 className="text-xl font-bold text-slate-950">{title}</h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
          {description}
        </p>

        <div className="mt-7 flex items-center gap-2 text-sm font-bold text-blue-600">
          Get started
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </div>
    </button>
  )
}