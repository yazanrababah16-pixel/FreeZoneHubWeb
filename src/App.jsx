import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  Sparkles, Search, PenTool, Code2, ShieldAlert, Car, ShieldCheck, 
  Users, Star, ChevronRight, MessageCircle, Menu, X,
  Shield, DollarSign, ClipboardCheck, Smartphone, Lock,
  TrendingUp, Globe, ArrowUpRight,
  ChevronLeft, ArrowRight
} from 'lucide-react'

const teamGalleryItems = [
  { id: '1', title: 'Yazan Ali Ahmad Banikhair', role: 'Lead Developer & Testing', image: '/FreeZoneHubWeb/team/Yazan.jpg', wa: 'https://wa.me/962777356430' },
  { id: '2', title: 'Ahmad Natour', role: 'UI/UX Designer', image: '/FreeZoneHubWeb/team/Ahmad nator.jpg', wa: 'https://wa.me/962793830307' },
  { id: '3', title: 'Ahmad Sadiq', role: 'Backend Developer', image: '/FreeZoneHubWeb/team/Ahmad sadeq.jpg', wa: 'https://wa.me/962798062360' },
  { id: '4', title: 'Tareq Jarrar', role: 'UI/UX Designer', image: '/FreeZoneHubWeb/team/Tareq.jpg', wa: 'https://wa.me/962788602694' },
  { id: '5', title: 'Adel Abu Hajar', role: 'Backend Developer', image: '/FreeZoneHubWeb/team/Adel.jpg', wa: 'https://wa.me/96279601436' },
]

const featureCategories = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Verification',
    items: [
      { text: 'AI-powered vehicle inspection' },
      { text: 'Verified vehicle history reports' },
      { text: 'Authenticity guarantees' },
    ],
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: 'Trading',
    items: [
      { text: 'Transparent pricing system' },
      { text: 'Secure payment escrow' },
      { text: 'Instant cash offers' },
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile App',
    items: [
      { text: 'Real-time inventory updates' },
      { text: 'Push notifications for deals' },
      { text: 'In-app messaging' },
    ],
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: 'Inspection',
    items: [
      { text: '200-point vehicle check' },
      { text: 'Digital report generation' },
      { text: 'Expert mechanic booking' },
    ],
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Security',
    items: [
      { text: 'Fraud detection system' },
      { text: 'Buyer & seller protection' },
      { text: 'Secure document storage' },
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Analytics',
    items: [
      { text: 'Market price insights' },
      { text: 'Sales performance tracking' },
      { text: 'Custom business reports' },
    ],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
}

const techSpecs = [
  { icon: Code2, title: 'Flutter', desc: 'Cross-platform mobile framework for iOS & Android', color: 'from-cyan-500 to-blue-500' },
  { icon: Search, title: 'Firebase', desc: 'Real-time database, authentication & cloud functions', color: 'from-amber-500 to-orange-500' },
  { icon: PenTool, title: 'Dart', desc: 'Type-safe programming language optimized for UI', color: 'from-blue-500 to-indigo-500' },
  { icon: ShieldAlert, title: 'Cloud Integration', desc: 'Scalable GCP infrastructure with auto-scaling', color: 'from-purple-500 to-pink-500' },
]

const phases = [
  { phase: 'Phase 1', title: 'Discovery & Engineering', desc: 'In-depth market analysis of the Jordan Free Zone to solve transparency issues in automotive trading.', icon: Search },
  { phase: 'Phase 2', title: 'UI/UX Prototyping', desc: 'Designing an intuitive user journey for seamless digital car inspection and trading experience.', icon: PenTool },
  { phase: 'Phase 3', title: 'Development', desc: 'Building a robust cross-platform app with Flutter & Firebase for real-time data synchronization.', icon: Code2 },
  { phase: 'Phase 4', title: 'QA & Optimization', desc: 'Rigorous testing and security hardening to deliver a production-ready experience.', icon: ShieldAlert },
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
              <motion.a
                href="#journey"
                whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(34,211,238,0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-cyan-500/20 flex items-center gap-3 text-lg cursor-pointer"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168,85,247,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-2xl font-semibold glass border border-white/10 text-white flex items-center gap-3 text-lg hover:bg-white/5 cursor-pointer"
              >
                View Demo
              </motion.a>
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

function AppPreview() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0])
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section className="py-40 relative w-full flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(124,85,247,0.08)_0%,_transparent_70%)]" />
      
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto px-4 md:px-20">
        <motion.div
          style={{ translateY: translate }}
          className="text-center mb-16 w-full"
        >
          <p className="text-cyan-400 font-medium mb-6 tracking-[0.25em] uppercase text-sm">App Preview</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Experience the <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span> of Trading
          </h1>
        </motion.div>

        <div
          className="h-[40rem] md:h-[60rem] flex items-center justify-center relative w-full"
          ref={containerRef}
        >
          <div className="py-10 md:py-40 w-full relative" style={{ perspective: '1000px' }}>
            <motion.div
              style={{
                rotateX: rotate,
                scale,
                boxShadow: '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
              }}
              className="max-w-5xl -mt-12 mx-auto h-[25rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#1a1a2e] rounded-[30px] shadow-2xl"
            >
              <div className="h-full w-full overflow-hidden rounded-2xl bg-[#030712] md:rounded-2xl p-4 md:p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 h-full">
                  <div className="col-span-2 md:col-span-4 glass rounded-2xl p-4 md:p-6 flex items-center justify-between border border-white/10">
                    <div>
                      <h3 className="text-white text-lg md:text-2xl font-bold">FreeZone Hub</h3>
                      <p className="text-slate-400 text-sm">Smart Car Trading</p>
                    </div>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                      <Sparkles className="w-5 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col items-center justify-center">
                    <Car className="w-8 h-8 md:w-12 md:h-12 text-cyan-400 mb-2" />
                    <span className="text-white font-bold text-lg md:text-2xl">500+</span>
                    <span className="text-slate-400 text-xs md:text-sm">Vehicles</span>
                  </div>
                  <div className="glass rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col items-center justify-center">
                    <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-green-400 mb-2" />
                    <span className="text-white font-bold text-lg md:text-2xl">100%</span>
                    <span className="text-slate-400 text-xs md:text-sm">Verified</span>
                  </div>
                  <div className="glass rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col items-center justify-center">
                    <Users className="w-8 h-8 md:w-12 md:h-12 text-purple-400 mb-2" />
                    <span className="text-white font-bold text-lg md:text-2xl">2K+</span>
                    <span className="text-slate-400 text-xs md:text-sm">Users</span>
                  </div>
                  <div className="glass rounded-2xl p-4 md:p-6 border border-white/10 flex flex-col items-center justify-center">
                    <Star className="w-8 h-8 md:w-12 md:h-12 text-amber-400 mb-2" />
                    <span className="text-white font-bold text-lg md:text-2xl">4.9</span>
                    <span className="text-slate-400 text-xs md:text-sm">Rating</span>
                  </div>
                  <div className="col-span-2 md:col-span-4 glass rounded-2xl p-4 md:p-6 border border-white/10">
                    <h4 className="text-white font-semibold mb-3 text-sm md:text-lg">Recent Listings</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800" />
                        <div className="flex-1">
                          <p className="text-white text-xs md:text-sm font-medium">Toyota Camry 2023</p>
                          <p className="text-cyan-400 text-xs">JD 32,000</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800" />
                        <div className="flex-1">
                          <p className="text-white text-xs md:text-sm font-medium">Honda Accord 2022</p>
                          <p className="text-cyan-400 text-xs">JD 28,500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Journey() {
  return (
    <section id="journey" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.05)_0%,_transparent_70%)]" />
      
      <div className="w-full flex flex-col items-center max-w-6xl mx-auto px-6">
        <SectionTitle subtitle="Project Journey" title="Development Phases" />

        <div className="relative w-full max-w-5xl">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-cyan-500 -translate-x-1/2 shadow-[0_0_30px_rgba(34,211,238,0.5)]" />

          {phases.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: isLeft ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="relative flex items-center mb-32 last:mb-0 w-full"
              >
                <div className={`w-1/2 flex ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  {isLeft && (
                    <div className="glass rounded-3xl p-10 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 max-w-lg text-center mr-16">
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
                    <div className="glass rounded-3xl p-10 border border-white/10 hover:border-cyan-500/30 transition-all duration-500 max-w-lg text-center ml-16">
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

function FeatureSection() {
  return (
    <section id="features" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)]" />
      
      <div className="w-full flex flex-col items-center max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 w-full"
        >
          <p className="text-cyan-400 font-medium mb-6 tracking-[0.25em] uppercase text-sm">Platform Features</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Designed <span className="text-pink-400">for You</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Everything you need for seamless car trading and inspection in Jordan's free zone market.
          </p>
        </motion.div>

        <motion.div
          className="w-full glass rounded-3xl border border-white/10 p-8 md:p-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {featureCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 text-pink-400">{category.icon}</div>
                <h3 className="font-semibold text-white text-lg mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-slate-400">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm">
                      {item.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <motion.a
              href="#team"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(34,211,238,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 text-white shadow-2xl shadow-cyan-500/20 flex items-center gap-3 text-lg cursor-pointer"
            >
              Explore All Features
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function Team() {
  const scrollRef = useRef(null)
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="team" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.05)_0%,_transparent_50%)]" />
      
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 w-full"
        >
          <p className="text-cyan-400 font-medium mb-6 tracking-[0.25em] uppercase text-sm">Meet the Team</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Our <span className="text-pink-400">Innovators</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Explore our collection of talented individuals dedicated to transforming car trading in Jordan.
          </p>
        </motion.div>

        <div className="relative w-full">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-4 px-12"
            style={{ overflowX: 'auto', whiteSpace: 'nowrap', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamGalleryItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex-shrink-0 w-[280px] md:w-[320px] h-[400px] md:h-[450px] cursor-pointer"
              >
                <div className="rounded-3xl overflow-hidden h-full w-full border border-white/10 bg-slate-900/50">
                  <div className="relative h-[65%] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col items-center text-center h-[35%] justify-center">
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-cyan-400 text-sm mb-4">{item.role}</p>
                    <motion.a
                      href={item.wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Contact
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-56 relative w-full flex flex-col items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(34,211,238,0.05)_0%,_transparent_70%)]" />
      
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center w-full"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">About Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            FreeZone Hub is a passionate team dedicated to creating innovative solutions that empower car traders and buyers in Jordan's free zone market.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3 w-full mb-20">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="FreeZone Hub Team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 glass rounded-3xl p-8 border border-white/10"
            >
              <Globe className="w-12 h-12 text-cyan-400 mb-4" />
              <p className="text-lg font-semibold mb-2">Innovating Car Trading</p>
              <p className="text-slate-400 mb-6">Building cutting-edge solutions that transform the automotive marketplace in Jordan with technology.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex-1 rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full relative overflow-hidden glass rounded-3xl border border-white/10 p-10 md:p-16"
        >
          <div className="flex flex-col gap-4 text-center md:text-left mb-12">
            <h2 className="text-4xl font-bold">Our Achievements in Numbers</h2>
            <p className="max-w-screen-sm text-slate-400">
              Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between gap-10 text-center">
            {[
              { label: "Companies Supported", value: "300+" },
              { label: "Vehicles Listed", value: "800+" },
              { label: "Happy Customers", value: "99%" },
              { label: "Awards Won", value: "10+" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <p className="text-slate-500 text-sm">{item.label}</p>
                <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />
        </motion.div>
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
        <p className="text-xl text-slate-500 mb-8">Transforming automotive trading in Jordan</p>
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
      <AppPreview />
      <Journey />
      <FeatureSection />
      <Team />
      <AboutSection />
      <TechSpecs />
      <Footer />
    </div>
  )
}

export default App