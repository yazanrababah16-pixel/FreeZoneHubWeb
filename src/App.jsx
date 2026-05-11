import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Sparkles, Search, PenTool, Code2, ShieldAlert, Car, ShieldCheck, 
  Users, Star, ChevronRight, MessageCircle, Menu, X
} from 'lucide-react'

const team = [
  { name: 'Yazan Ali Ahmad Banikhair', role: 'Lead Developer & Testing', wa: 'https://wa.me/962777356430', image: '/team-yazan.jpg' },
  { name: 'Adel Abu Hajar', role: 'Backend Developer', wa: 'https://wa.me/96279601436', image: '/team-adel.jpg' },
  { name: 'Ahmad Sadiq', role: 'Backend Developer', wa: 'https://wa.me/962798062360', image: '/team-ahmad-sadiq.jpg' },
  { name: 'Ahmad Natour', role: 'UI/UX Designer', wa: 'https://wa.me/962793830307', image: '/team-ahmad-natour.jpg' },
  { name: 'Tareq Jarrar', role: 'UI/UX Designer', wa: 'https://wa.me/962788602694', image: '/team-tareq.jpg' },
]

const techSpecs = [
  { icon: Code2, title: 'Flutter', desc: 'Cross-platform mobile framework for iOS & Android', color: 'from-cyan-500 to-blue-500' },
  { icon: Search, title: 'Firebase', desc: 'Real-time database, authentication & cloud functions', color: 'from-amber-500 to-orange-500' },
  { icon: PenTool, title: 'Dart', desc: 'Type-safe programming language optimized for UI', color: 'from-blue-500 to-indigo-500' },
  { icon: ShieldAlert, title: 'Cloud Integration', desc: 'Scalable GCP infrastructure with auto-scaling', color: 'from-purple-500 to-pink-500' },
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
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
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
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'glass shadow-2xl shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-xl shadow-cyan-500/25">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">FreeZone Hub</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium text-slate-400 hover:text-white transition-colors relative"
              whileHover={{ y: -3 }}
            >
              {item}
              <motion.span 
                className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-semibold shadow-xl shadow-cyan-500/25"
          >
            Get Started
          </motion.button>
        </div>

        <button className="md:hidden text-white p-3" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
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
              className="block px-8 py-5 text-slate-400 hover:text-white text-lg"
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
  const y = useTransform(scrollY, [0, 600], [0, 150])

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center pt-24 pb-0">
      {/* Glow Effects - shadcn style */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] overflow-hidden pointer-events-none flex items-center">
        <div className="absolute left-1/2 -translate-x-1/2 w-[60%] h-[256px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.5)_10%,transparent_60%)] sm:h-[512px] blur-[100px]" />
        <div className="absolute left-1/2 -translate-x-1/2 w-[40%] h-[128px] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.3)_10%,transparent_60%)] sm:h-[256px] blur-[80px] mt-20" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.06)_0%,_transparent_50%)]" />
      <div className="absolute top-32 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-500/5 rounded-full blur-[180px]" />

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-24 items-center w-full">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col items-center text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-cyan-500/20 mb-12">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-base text-slate-300 font-medium">Jordan Free Zone's Premier Platform</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-12 relative">
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

            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl leading-relaxed">
              A smart digital platform for car trading and inspection, bringing complete 
              transparency and modern technology to the Jordan automotive market.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(34,211,238,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-cyan-500/20 flex items-center gap-3 text-lg"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl font-semibold glass border border-white/10 text-white flex items-center gap-3 text-lg hover:bg-white/5"
              >
                View Demo
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div style={{ y }} className="hidden lg:block relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-3xl" />
              <div className="relative glass rounded-[3rem] p-8 border border-white/10">
                <div className="bg-slate-900/50 rounded-2xl p-6 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Car className="w-20 h-20 mx-auto mb-4 text-cyan-400" />
                    <p className="text-slate-400 text-lg">App Preview</p>
                    <p className="text-slate-600 text-sm mt-2">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  )
}

function SectionTitle({ subtitle, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-24 w-full"
    >
      <p className="text-cyan-400 font-medium mb-6 tracking-[0.25em] uppercase text-sm">{subtitle}</p>
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  )
}

function Journey() {
  return (
    <section id="journey" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.05)_0%,_transparent_70%)]" />
      
      <div className="w-full flex flex-col items-center max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Project Journey" title="Development Phases" />

        <div className="relative w-full max-w-4xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 -translate-x-1/2 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />

          {phases.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative flex items-center mb-24 last:mb-0 w-full"
              >
                <div className={`w-1/2 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  {isLeft && (
                    <div className="glass rounded-3xl p-10 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 max-w-md text-center">
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                      <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.4, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)]"
                  >
                    <item.icon className="w-9 h-9 text-white" />
                  </motion.div>
                </div>

                <div className={`w-1/2 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  {!isLeft && (
                    <div className="glass rounded-3xl p-10 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 max-w-md text-center">
                      <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-sm font-semibold border border-cyan-500/20">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                      <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                </div>
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
    <section id="team" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.05)_0%,_transparent_50%)]" />
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="The Elite Team" title="Meet Our Innovators" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 w-full justify-items-center">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -15 }}
              className="glass rounded-3xl p-10 border border-white/10 text-center hover:border-cyan-500/30 transition-all duration-500 flex flex-col items-center max-w-xs"
            >
              <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">{member.name}</h3>
              <p className="text-base text-slate-500 mb-8 flex-grow">{member.role}</p>
              
              <motion.a
                href={member.wa}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-xl shadow-green-500/20 hover:shadow-green-500/40 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
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
    <section id="tech" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(59,130,246,0.05)_0%,_transparent_50%)]" />
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Technical Specs" title="Our Technology Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 w-full justify-items-center">
          {techSpecs.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="glass rounded-3xl p-12 border border-white/10 text-center group hover:border-purple-500/30 transition-all duration-500 max-w-xs"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className={`w-24 h-24 mx-auto mb-10 rounded-3xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-2xl p-6`}
              >
                <tech.icon className="w-12 h-12 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold mb-6">{tech.title}</h3>
              <p className="text-lg text-slate-500 leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 px-16 py-10 glass rounded-3xl border border-white/10">
            <span className="text-xl text-slate-500">Built with</span>
            <div className="flex flex-wrap items-center gap-5 justify-center">
              {['Flutter', 'Firebase', 'Dart', 'GCP'].map((tech) => (
                <span
                  key={tech}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-400 text-base font-semibold border border-cyan-500/20"
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
    <footer className="py-28 glass border-t border-white/5 w-full flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center shadow-xl shadow-cyan-500/25">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold tracking-tight">FreeZone Hub</span>
        </motion.div>
        <p className="text-xl text-slate-500 mb-12">Transforming automotive trading in Jordan</p>
        <div className="flex justify-center gap-12 mb-12">
          {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -5, color: '#22d3ee' }}
              className="text-lg text-slate-500 transition-colors hover:text-cyan-400"
            >
              {social}
            </motion.a>
          ))}
        </div>
        <div className="text-slate-600 text-base">
          © 2026 FreeZone Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#030712] w-full flex flex-col items-center">
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