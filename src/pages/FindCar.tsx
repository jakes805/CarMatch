import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Compass, CheckCircle2, Send, Wallet, MapPin } from 'lucide-react'

interface FindCarProps {
  onNavigate: (page: string) => void
}

export default function FindCar({ onNavigate }: FindCarProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    // Budget & Condition
    condition: 'Either',
    minBudget: '',
    maxBudget: '',
    // Preferences
    bodyType: 'Any',
    vehicleAge: 'Any year',
    mileage: 'Any mileage',
    fuel: 'Any',
    transmission: 'Either',
    // Location & Financing
    city: '',
    financing: 'Either',
    hasTradeIn: 'No',
    tradeInDetails: '',
    // Contact
    name: '',
    contact: '',
  })

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6 relative overflow-hidden flex flex-col justify-center items-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[140px] rounded-full pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        <button
          onClick={() => onNavigate('Home')}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white mb-6 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card bg-slate-900 border border-slate-800 p-10 rounded-3xl text-center shadow-2xl"
          >
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Matching Request Received!</h2>
            <p className="text-slate-300 mb-8">
              Thanks {formData.name}! We will analyze our inventory and reach out to you via{' '}
              <span className="text-indigo-400 font-bold">{formData.contact}</span> with recommendations.
            </p>
            <button
              onClick={() => onNavigate('Home')}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold transition-colors cursor-pointer"
            >
              Return Home
            </button>
          </motion.div>
        ) : (
          <div className="glass-card bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Compass className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-bold text-white">Help Me Find a Car</h1>
            </div>
            <p className="text-slate-300 text-sm font-medium mb-8">Tell us your budget and style, and we'll handle the searching.</p>

            <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="bg-indigo-500 h-full rounded-full"
                animate={{ width: `${(step / 3) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Budget & Condition */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <Wallet className="w-4 h-4 text-indigo-400" />
                        1. Target Budget Range *
                      </label>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          placeholder="Min Budget (e.g. R150,000)"
                          value={formData.minBudget}
                          onChange={(e) => handleSelect('minBudget', e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-indigo-500"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Max Budget (e.g. R300,000)"
                          value={formData.maxBudget}
                          onChange={(e) => handleSelect('maxBudget', e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-indigo-500"
                        />
                      </div>

                      <label className="block text-xs font-bold text-slate-300 mb-2">Condition Preference</label>
                      <div className="grid grid-cols-3 gap-3">
                        {['New', 'Used', 'Either'].map((cond) => (
                          <button
                            key={cond}
                            type="button"
                            onClick={() => handleSelect('condition', cond)}
                            className={`p-3 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                              formData.condition === cond
                                ? 'bg-indigo-600 border-indigo-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200'
                            }`}
                          >
                            {cond}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2">2. Preferred Body Type</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['Hatchback', 'Sedan', 'SUV', 'Bakkie', 'Double Cab', 'MPV', 'Coupe', 'Any'].map((bt) => (
                          <button
                            key={bt}
                            type="button"
                            onClick={() => handleSelect('bodyType', bt)}
                            className={`p-2 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                              formData.bodyType === bt
                                ? 'bg-indigo-600 border-indigo-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200'
                            }`}
                          >
                            {bt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!formData.maxBudget}
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
                    >
                      Next: Vehicle Preferences
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Specs, Location & Financing */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white mb-2">Transmission</label>
                        <div className="grid grid-cols-3 gap-1">
                          {['Automatic', 'Manual', 'Either'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleSelect('transmission', t)}
                              className={`p-2 text-center text-[10px] font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.transmission === t
                                  ? 'bg-indigo-600 border-indigo-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white mb-2">Fuel Type</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Petrol', 'Diesel', 'Hybrid', 'Any'].map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => handleSelect('fuel', f)}
                              className={`p-2 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.fuel === f
                                  ? 'bg-indigo-600 border-indigo-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-400" />
                        Location & Financing
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Town / City"
                          value={formData.city}
                          onChange={(e) => handleSelect('city', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-indigo-500"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          {['Cash', 'Finance'].map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => handleSelect('financing', f)}
                              className={`p-2.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.financing === f
                                  ? 'bg-indigo-600 border-indigo-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-white mb-2">Trade-in Vehicle?</label>
                      <div className="grid grid-cols-2 gap-3">
                        {['Yes', 'No'].map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => handleSelect('hasTradeIn', t)}
                            className={`p-2.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                              formData.hasTradeIn === t
                                ? 'bg-indigo-600 border-indigo-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="w-2/3 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-indigo-600/20"
                      >
                        Next: Contact Info
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Details */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jaco Basson"
                        value={formData.name}
                        onChange={(e) => handleSelect('name', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2">Phone Number / WhatsApp *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 082 123 4567"
                        value={formData.contact}
                        onChange={(e) => handleSelect('contact', e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-1/3 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.name || !formData.contact}
                        className="w-2/3 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-bold rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                      >
                        Submit Request <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}