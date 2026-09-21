interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({
  current,
  total,
}: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
        <span>
          Step {current} of {total}
        </span>

        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}