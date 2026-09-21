import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Search, CheckCircle2, Send, CarFront, DollarSign, MapPin } from 'lucide-react'

interface SpecificCarProps {
  onNavigate: (page: string) => void
}

export default function SpecificCar({ onNavigate }: SpecificCarProps) {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    // 1. Vehicle
    make: '',
    model: '',
    condition: 'Either', // New / Used / Either
    // 2. Budget
    minBudget: '',
    maxBudget: '',
    // 3. Vehicle Age
    vehicleAge: 'Any year',
    // 4. Mileage
    mileage: 'Any mileage',
    // 5. Fuel
    fuel: 'Any',
    // 6. Transmission
    transmission: 'Either',
    // 7. Body Type
    bodyType: 'Any',
    // 8. Location
    city: '',
    maxDistance: '',
    // 9. Financing
    financing: 'Either',
    // 10. Trade-in
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none" />

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
            <h2 className="text-3xl font-bold text-white mb-3">Vehicle Search Initiated!</h2>
            <p className="text-slate-300 mb-8">
              We're searching dealer networks for your requested <span className="text-blue-400 font-bold">{formData.make} {formData.model}</span>. We will reach out to{' '}
              <span className="text-blue-400 font-bold">{formData.contact}</span> as soon as we locate matching inventory.
            </p>
            <button
              onClick={() => onNavigate('Home')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-colors cursor-pointer"
            >
              Return Home
            </button>
          </motion.div>
        ) : (
          <div className="glass-card bg-slate-900 border border-slate-800 p-8 md:p-10 rounded-3xl shadow-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Search className="w-5 h-5" />
              </div>
              <h1 className="text-2xl font-bold text-white">I Know What I'm Looking For</h1>
            </div>
            <p className="text-slate-300 text-sm font-medium mb-8">Fill in your specifications so we can source your exact vehicle.</p>

            <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
              <motion.div
                className="bg-blue-500 h-full rounded-full"
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* Step 1: Make, Model & Condition */}
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
                        <CarFront className="w-4 h-4 text-blue-400" />
                        1. What vehicle are you looking for? *
                      </label>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <input
                          type="text"
                          required
                          placeholder="Make (e.g. Toyota)"
                          value={formData.make}
                          onChange={(e) => handleSelect('make', e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Model (e.g. Hilux / Swift)"
                          value={formData.model}
                          onChange={(e) => handleSelect('model', e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
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
                                ? 'bg-blue-600 border-blue-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-500'
                            }`}
                          >
                            {cond}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-blue-400" />
                        2. Your Budget
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Min Budget (e.g. R150,000)"
                          value={formData.minBudget}
                          onChange={(e) => handleSelect('minBudget', e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Max Budget (e.g. R350,000)"
                          value={formData.maxBudget}
                          onChange={(e) => handleSelect('maxBudget', e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={!formData.make || !formData.model}
                      onClick={() => setStep(2)}
                      className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-600/20"
                    >
                      Next: Vehicle Age & Mileage
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Age, Mileage, Fuel & Transmission */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">3. Minimum Vehicle Age</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['Any year', '2026+', '2025+', '2024+'].map((year) => (
                          <button
                            key={year}
                            type="button"
                            onClick={() => handleSelect('vehicleAge', year)}
                            className={`p-2.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                              formData.vehicleAge === year
                                ? 'bg-blue-600 border-blue-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-500'
                            }`}
                          >
                            {year}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2">4. Mileage Limit</label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Any mileage', 'Under 20,000 km', 'Under 50,000 km', 'Under 100,000 km'].map((m) => (
                          <button
                            key={m}
                            type="button"
                            onClick={() => handleSelect('mileage', m)}
                            className={`p-2.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                              formData.mileage === m
                                ? 'bg-blue-600 border-blue-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200 hover:border-slate-500'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white mb-2">5. Fuel</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Petrol', 'Diesel', 'Hybrid', 'Any'].map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => handleSelect('fuel', f)}
                              className={`p-2.5 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.fuel === f
                                  ? 'bg-blue-600 border-blue-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white mb-2">6. Transmission</label>
                        <div className="grid grid-cols-3 gap-1.5">
                          {['Automatic', 'Manual', 'Either'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleSelect('transmission', t)}
                              className={`p-2 text-center text-[10px] font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.transmission === t
                                  ? 'bg-blue-600 border-blue-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
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
                        className="w-2/3 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-600/20"
                      >
                        Next: Body, Location & Finance
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Body Type, Location, Financing & Trade-in */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">7. Body Type Preference</label>
                      <div className="grid grid-cols-4 gap-2">
                        {['Hatchback', 'Sedan', 'SUV', 'Bakkie', 'Double Cab', 'Single Cab', 'MPV', 'Coupe'].map((bt) => (
                          <button
                            key={bt}
                            type="button"
                            onClick={() => handleSelect('bodyType', bt)}
                            className={`p-2 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                              formData.bodyType === bt
                                ? 'bg-blue-600 border-blue-400 text-white'
                                : 'bg-slate-950 border-slate-700 text-slate-200'
                            }`}
                          >
                            {bt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        8. Location & Max Distance
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Town / City"
                          value={formData.city}
                          onChange={(e) => handleSelect('city', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Max Distance (e.g. 100 km)"
                          value={formData.maxDistance}
                          onChange={(e) => handleSelect('maxDistance', e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-white mb-2">9. Financing</label>
                        <div className="grid grid-cols-3 gap-1">
                          {['Cash', 'Finance', 'Either'].map((f) => (
                            <button
                              key={f}
                              type="button"
                              onClick={() => handleSelect('financing', f)}
                              className={`p-2 text-center text-[10px] font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.financing === f
                                  ? 'bg-blue-600 border-blue-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {f}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-white mb-2">10. Trade-in?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Yes', 'No'].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleSelect('hasTradeIn', t)}
                              className={`p-2 text-center text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                                formData.hasTradeIn === t
                                  ? 'bg-blue-600 border-blue-400 text-white'
                                  : 'bg-slate-950 border-slate-700 text-slate-200'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {formData.hasTradeIn === 'Yes' && (
                      <div>
                        <label className="block text-xs font-bold text-white mb-1">Trade-in Vehicle Details</label>
                        <input
                          type="text"
                          placeholder="Make, Model, Year & Mileage of trade-in"
                          value={formData.tradeInDetails}
                          onChange={(e) => handleSelect('tradeInDetails', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 text-xs"
                        />
                      </div>
                    )}

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="w-1/3 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(4)}
                        className="w-2/3 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all cursor-pointer shadow-lg shadow-blue-600/20"
                      >
                        Next: Contact Info
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <motion.div
                    key="step4"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
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
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-white placeholder-slate-400 font-medium focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="w-1/3 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!formData.name || !formData.contact}
                        className="w-2/3 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold rounded-xl transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
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