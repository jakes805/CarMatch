import { useState } from 'react'

interface ContactDetailsProps {
  initialValues?: {
    firstName: string
    surname: string
    phone: string
    email: string
  }

  onSubmit: (details: {
    firstName: string
    surname: string
    phone: string
    email: string
  }) => void

  onBack: () => void
}

export default function ContactDetails({
  initialValues,
  onSubmit,
  onBack,
}: ContactDetailsProps) {
  const [firstName, setFirstName] = useState(initialValues?.firstName ?? '')
  const [surname, setSurname] = useState(initialValues?.surname ?? '')
  const [phone, setPhone] = useState(initialValues?.phone ?? '')
  const [email, setEmail] = useState(initialValues?.email ?? '')

  const [error, setError] = useState('')

  const submit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!firstName.trim() || !surname.trim() || !phone.trim()) {
      setError('Please complete your first name, surname and phone number.')
      return
    }

    setError('')

    onSubmit({
      firstName: firstName.trim(),
      surname: surname.trim(),
      phone: phone.trim(),
      email: email.trim(),
    })
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          First name *
        </label>

        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="e.g. Jaco"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Surname *
        </label>

        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="e.g. Basson"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Phone / WhatsApp number *
        </label>

        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="e.g. 082 123 4567"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email address <span className="font-normal text-slate-400">(optional)</span>
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
          {error}
        </div>
      )}

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={onBack}
          className="rounded-xl border border-slate-200 px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          ← Back
        </button>

        <button
          type="submit"
          className="rounded-xl bg-slate-950 px-7 py-3.5 font-bold text-white transition hover:bg-blue-600"
        >
          Continue →
        </button>
      </div>
    </form>
  )
}