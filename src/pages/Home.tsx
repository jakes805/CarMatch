import { motion } from 'framer-motion'
import { Search, Compass, ArrowRight } from 'lucide-react'

interface HomeProps {
  onNavigate: (page: string) => void
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 bg-slate-950 text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-sm font-semibold text-blue-400 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Your next car starts here
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent"
          >
            Find the car <br />
            that's right for you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-12"
          >
            Tell us what you're looking for, or let us guide your search based on your budget, preferences, and lifestyle.
          </motion.p>
        </div>
      </section>

      {/* Choice Cards Section */}
      <section className="-mt-20 max-w-5xl mx-auto px-6 relative z-20">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('SpecificCar')}
            className="glass-card p-8 rounded-3xl shadow-2xl border border-slate-800 cursor-pointer group relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">I Know What I'm Looking For</h3>
            <p className="text-slate-300 font-medium mb-6">
              I have a specific vehicle, make, or model in mind and want direct assistance finding it.
            </p>
            <div className="inline-flex items-center gap-2 text-blue-400 font-bold group-hover:translate-x-2 transition-transform">
              Get started <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            onClick={() => onNavigate('FindCar')}
            className="glass-card p-8 rounded-3xl shadow-2xl border border-slate-800 cursor-pointer group relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Help Me Find a Car</h3>
            <p className="text-slate-300 font-medium mb-6">
              I'm not sure exactly what I want. Tell us your needs and we'll match you with suitable options.
            </p>
            <div className="inline-flex items-center gap-2 text-indigo-400 font-bold group-hover:translate-x-2 transition-transform">
              Get started <ArrowRight className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Steps */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How can we help?</h2>
          <p className="text-slate-300 font-medium">Choose the option that best describes what you're looking for.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { num: '01', title: 'Tell us what you need', desc: 'Share your requirements, preferences, and budget.' },
            { num: '02', title: 'We find suitable options', desc: "We'll search for vehicles that match your exact criteria." },
            { num: '03', title: 'We contact you', desc: "We'll reach out with curated options ready for review." }
          ].map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-slate-900 rounded-2xl border border-slate-800 shadow-lg"
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold text-sm mb-4">
                {step.num}
              </span>
              <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
              <p className="text-slate-300 text-sm font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}