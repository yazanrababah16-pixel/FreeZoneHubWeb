import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { Sparkles, Rocket, Shield, Code2, Database, Cloud, Cpu, Layers, ArrowRight, Menu, X, ChevronRight } from 'lucide-react'

const team = [
  { name: 'Yazan Ali Ahmad Banikhair', role: 'Lead Developer & Testing', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'Adel Abu Hajar', role: 'Backend Developer', gradient: 'from-purple-400 to-pink-500' },
  { name: 'Ahmad Sadiq', role: 'Backend Developer', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Ahmad Natour', role: 'UI/UX Designer', gradient: 'from-emerald-400 to-teal-500' },
  { name: 'Tareq Jarrar', role: 'UI/UX Designer', gradient: 'from-rose-400 to-red-500' },
]

const techSpecs = [
  { icon: Code2, title: 'Flutter', desc: 'Cross-platform mobile framework', color: 'cyan' },
  { icon: Database, title: 'Firebase', desc: 'Real-time database & auth', color: 'amber' },
  { icon: Cpu, title: 'Dart', desc: 'Type-safe programming language', color: 'blue' },
  { icon: Cloud, title: 'Cloud Integration', desc: 'Scalable cloud infrastructure', color: 'purple' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Journey', 'Team', 'Tech']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-2xl shadow-cyan-500/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold gradient-text">FreeZone Hub</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold"
          >
            Get Started
          </motion.button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-6 py-3 text-slate-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.12)_0%,_transparent_50%)]" />

      <div className="absolute top-32 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <motion.div style={{ y: y1 }} className="absolute top-40 right-[15%] w-20 h-20 glass rounded-2xl flex items-center justify-center animate-float">
        <Layers className="w-8 h-8 text-cyan-400" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-60 left-[10%] w-16 h-16 glass rounded-2xl flex items-center justify-center animate-float-slow">
        <Rocket className="w-7 h-7 text-purple-400" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-cyan-500/20"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-slate-300">Jordan Free Zone's Premier Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
          >
            FreeZone Hub:{' '}
            <span className="gradient-text">Redefining</span>
            <br />Car Trading in Jordan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl"
          >
            A smart digital platform for car trading and inspection, bringing transparency 
            and modernization to the Jordan automotive market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-[length:200%_200%] animate-gradient-shift"
            >
              Explore Platform
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl font-semibold glass text-white hover:bg-white/10 flex items-center gap-2"
            >
              Watch Demo <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[450px]"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8 gradient-border">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: '500+', label: 'Vehicles', emoji: '🚗' },
                  { num: '100%', label: 'Verified', emoji: '✅' },
                  { num: '2K+', label: 'Users', emoji: '👥' },
                  { num: '4.9', label: 'Rating', emoji: '⭐' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="glass rounded-2xl p-5 text-center hover:scale-105 transition-transform"
                  >
                    <div className="text-3xl mb-1">{stat.emoji}</div>
                    <div className="text-2xl font-bold gradient-text">{stat.num}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <p className="text-cyan-400 font-medium mb-3 tracking-wider uppercase text-sm">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    </motion.div>
  )
}

function Journey() {
  const phases = [
    {
      phase: 'Phase 1',
      title: 'Discovery & Engineering',
      desc: 'In-depth market analysis of the Jordan Free Zone to solve transparency issues in automotive trading.',
      icon: Rocket,
    },
    {
      phase: 'Phase 2',
      title: 'UI/UX Prototyping',
      desc: 'Designing an intuitive user journey for seamless digital car inspection and trading experience.',
      icon: Layers,
    },
    {
      phase: 'Phase 3',
      title: 'Development',
      desc: 'Building a robust cross-platform app with Flutter & Firebase for real-time data synchronization.',
      icon: Code2,
    },
    {
      phase: 'Phase 4',
      title: 'QA & Optimization',
      desc: 'Rigorous testing and security hardening to deliver a production-ready experience.',
      icon: Shield,
    },
  ]

  return (
    <section id="journey" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08)_0%,_transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Project Journey" title="Our Development Phases" />

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 hidden lg:block transform -translate-x-1/2" />

          {phases.map((item, i) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`lg:flex lg:items-center lg:justify-between mb-12 lg:mb-0 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              <div className="hidden lg:block lg:w-[45%]" />
              <div className="lg:w-[10%] flex justify-center mb-6 lg:mb-0">
                <motion.div
                  whileHover={{ scale: 1.3, rotate: 360 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center relative"
                >
                  <item.icon className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 animate-pulse-ring opacity-50" />
                </motion.div>
              </div>
              <div className="lg:w-[45%]">
                <div className="glass rounded-2xl p-8 gradient-border hover:glow-cyan transition-all duration-500 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs font-semibold">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.08)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="The Elite Team" title="Meet Our Innovators" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -15, rotateX: 10, rotateY: 10 }}
              className="glass rounded-2xl p-6 text-center gradient-border hover:glow-cyan transition-all duration-500 perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className={`w-24 h-24 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl shadow-lg`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                💼
              </motion.div>
              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <p className="text-slate-400 text-sm">{member.role}</p>
              <div className="mt-4 flex justify-center gap-2">
                {[...Array(3)].map((_, j) => (
                  <span
                    key={j}
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.gradient}`}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechSpecs() {
  return (
    <section id="tech" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Technical Specs" title="Our Technology Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techSpecs.map((tech, i) => {
            const colors = {
              cyan: 'from-cyan-500 to-cyan-600',
              amber: 'from-amber-500 to-orange-500',
              blue: 'from-blue-500 to-indigo-500',
              purple: 'from-purple-500 to-pink-500',
            }
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-2xl p-8 text-center gradient-border hover:glow-purple transition-all duration-500 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${colors[tech.color]} flex items-center justify-center`}
                >
                  <tech.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">{tech.title}</h3>
                <p className="text-slate-400 text-sm">{tech.desc}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 glass rounded-2xl">
            <span className="text-slate-400">Built with</span>
            <div className="flex items-center gap-2">
              {['Flutter', 'Firebase', 'Dart', 'GCP'].map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 glass border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold gradient-text">FreeZone Hub</span>
        </motion.div>
        <p className="text-slate-400 mb-6">Transforming automotive trading in Jordan</p>
        <div className="flex justify-center gap-6 mb-8">
          {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -3, color: '#22d3ee' }}
              className="text-slate-500 transition-colors"
            >
              {social}
            </motion.a>
          ))}
        </div>
        <div className="text-slate-600 text-sm">
          © 2026 FreeZone Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <Journey />
      <Team />
      <TechSpecs />
      <Footer />
    </div>
  )
}

export default App