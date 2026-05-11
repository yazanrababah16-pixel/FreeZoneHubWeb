import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Sparkles, Rocket, Shield, Code2, Database, Cloud, Cpu, Layers, 
  ArrowRight, Menu, X, Car, ShieldCheck, Users, Star, Search, 
  PenTool, ShieldAlert, ChevronRight, MessageCircle
} from 'lucide-react'

const team = [
  { name: 'Yazan Ali Ahmad Banikhair', role: 'Lead Developer & Testing', wa: 'https://wa.me/962777356430' },
  { name: 'Adel Abu Hajar', role: 'Backend Developer', wa: 'https://wa.me/96279601436' },
  { name: 'Ahmad Sadiq', role: 'Backend Developer', wa: 'https://wa.me/962798062360' },
  { name: 'Ahmad Natour', role: 'UI/UX Designer', wa: 'https://wa.me/962793830307' },
  { name: 'Tareq Jarrar', role: 'UI/UX Designer', wa: 'https://wa.me/962788602694' },
]

const techSpecs = [
  { icon: Code2, title: 'Flutter', desc: 'Cross-platform mobile framework', color: 'from-cyan-500 to-blue-500' },
  { icon: Database, title: 'Firebase', desc: 'Real-time database & auth', color: 'from-amber-500 to-orange-500' },
  { icon: Cpu, title: 'Dart', desc: 'Type-safe programming language', color: 'from-blue-500 to-indigo-500' },
  { icon: Cloud, title: 'Cloud Integration', desc: 'Scalable cloud infrastructure', color: 'from-purple-500 to-pink-500' },
]

const stats = [
  { num: '500+', label: 'Vehicles', icon: Car },
  { num: '100%', label: 'Verified', icon: ShieldCheck },
  { num: '2K+', label: 'Users', icon: Users },
  { num: '4.9', label: 'Rating', icon: Star },
]

const phases = [
  { phase: 'Phase 1', title: 'Discovery & Engineering', desc: 'In-depth market analysis of the Jordan Free Zone to solve transparency issues in automotive trading.', icon: Search },
  { phase: 'Phase 2', title: 'UI/UX Prototyping', desc: 'Designing an intuitive user journey for seamless digital car inspection and trading experience.', icon: PenTool },
  { phase: 'Phase 3', title: 'Development', desc: 'Building a robust cross-platform app with Flutter & Firebase for real-time data synchronization.', icon: Code2 },
  { phase: 'Phase 4', title: 'QA & Optimization', desc: 'Rigorous testing and security hardening to deliver a production-ready experience.', icon: ShieldAlert },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

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
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-2xl shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight">FreeZone Hub</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative"
              whileHover={{ y: -2 }}
            >
              {item}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold shadow-lg shadow-cyan-500/25"
          >
            Get Started
          </motion.button>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/5"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block px-8 py-4 text-slate-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.08)_0%,_transparent_50%)]" />
      <div className="absolute top-40 left-[5%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-[5%] w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-40 grid lg:grid-cols-2 gap-20 items-center w-full">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-cyan-500/20 mb-10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-slate-300 font-medium">Jordan Free Zone's Premier Platform</span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-10">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              FreeZone Hub:
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Redefining
            </span>
            <br />
            <span className="text-white">Car Trading in Jordan</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-400 mb-14 max-w-xl leading-relaxed">
            A smart digital platform for car trading and inspection, bringing complete 
            transparency and modern technology to the Jordan automotive market.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 0 50px rgba(34,211,238,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-white shadow-xl shadow-cyan-500/20 flex items-center gap-3"
            >
              Explore Platform
              <ChevronRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 rounded-xl font-semibold glass text-white flex items-center gap-3"
            >
              Watch Demo
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div style={{ y }} className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-10 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300 group"
                  >
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.num}</div>
                    <div className="text-sm text-slate-500">{stat.label}</div>
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
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <p className="text-cyan-400 font-medium mb-4 tracking-[0.2em] uppercase text-sm">{subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  )
}

function Journey() {
  return (
    <section id="journey" className="py-48 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.06)_0%,_transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto px-8">
        <SectionTitle subtitle="Project Journey" title="Development Phases" />

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 lg:-translate-x-1/2 shadow-lg shadow-cyan-500/50" />

          {phases.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="relative flex items-center gap-8 mb-16 last:mb-0"
              >
                <div className={`flex-1 lg:flex-none lg:w-[45%] ${isLeft ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12 order-last'}`}>
                  <div className="glass rounded-3xl p-10 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 group">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                        {item.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-xl shadow-cyan-500/30"
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                <div className={`hidden lg:block lg:w-[45%] ${isLeft ? 'order-last' : ''}`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="team" className="py-48 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.06)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle subtitle="The Elite Team" title="Meet Our Innovators" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl p-8 border border-white/10 text-center hover:border-cyan-500/30 transition-all duration-500"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-4xl font-light text-slate-400 border border-white/10">
                <span className="opacity-60">{member.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              
              <h3 className="text-base font-bold mb-2 text-white">{member.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{member.role}</p>
              
              <motion.a
                href={member.wa}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Chat with us
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechSpecs() {
  return (
    <section id="tech" className="py-48 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.06)_0%,_transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-8">
        <SectionTitle subtitle="Technical Specs" title="Our Technology Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techSpecs.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-10 border border-white/10 text-center group hover:border-purple-500/30 transition-all duration-500"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-18 h-18 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg p-4`}
              >
                <tech.icon className="w-9 h-9 text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
              <p className="text-slate-500 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-12 py-8 glass rounded-3xl border border-white/10">
            <span className="text-slate-500 text-lg">Built with</span>
            <div className="flex items-center gap-4">
              {['Flutter', 'Firebase', 'Dart', 'GCP'].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20"
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
    <footer className="py-24 glass border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">FreeZone Hub</span>
        </motion.div>
        <p className="text-slate-500 mb-10 text-lg">Transforming automotive trading in Jordan</p>
        <div className="flex justify-center gap-10 mb-10">
          {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -3, color: '#22d3ee' }}
              className="text-slate-500 transition-colors hover:text-cyan-400"
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