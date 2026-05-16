import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FlowArt, { FlowSection } from '../components/ui/story-scroll'
import { 
  Sparkles, Search, PenTool, Code2, ShieldAlert, Car, ShieldCheck, 
  Users, Star, ChevronRight, MessageCircle, Menu, X,
  Shield, DollarSign, ClipboardCheck, Smartphone, Lock,
  TrendingUp, Globe, ArrowUpRight, Link
} from 'lucide-react'

const teamMembers = [
  { 
    id: '1', 
    name: 'Ahmad Mansour', 
    title: 'Team Leader, Event Operations Coordinator & Sales Associate', 
    responsibilities: 'Project coordination, operations management, sales strategy alignment, backend integration support, and dashboard prototyping.',
    expertise: 'Flutter, Dart, Firebase, UI/UX Design',
    image: '/FreeZoneHubWeb/team/Ahmad sadeq.jpg',
    wa: 'https://wa.me/962798062360',
    linkedin: 'https://www.linkedin.com/in/ahmad-mansour-781217337/'
  },
  { 
    id: '2', 
    name: 'Yazan BaniKhair', 
    title: 'Lead Mobile Application Developer & DevOps Engineer', 
    responsibilities: 'Architecture design, full mobile application development, cross-platform UI engineering, cloud services integration, and automated deployment pipelines.',
    expertise: 'Flutter, Dart, Firebase, CI/CD (GitHub Actions)',
    image: '/FreeZoneHubWeb/team/Yazan.jpeg?v=2',
    wa: 'https://wa.me/962777356430',
    linkedin: 'https://www.linkedin.com/in/yazan-rababah-106351245/'
  },
  { 
    id: '3', 
    name: 'Ahmad Natour', 
    title: 'Lead UI/UX Designer & Frontend Developer', 
    responsibilities: 'User research, wireframing, high-fidelity UI visual prototyping, and implementing the web showcase frontend architecture.',
    expertise: 'Figma, React, Tailwind CSS, Responsive Design',
    image: '/FreeZoneHubWeb/team/Ahmad nator.jpg',
    wa: 'https://wa.me/962793830307',
    linkedin: 'https://www.linkedin.com/in/ahmad-alnatour-553183362/'
  },
  { 
    id: '4', 
    name: 'Adel Abu Hajar', 
    title: 'Senior Backend Engineer & Database Administrator', 
    responsibilities: 'Database schema modeling, cloud architecture design, query optimization, security rules enforcement, and data transaction security.',
    expertise: 'Firebase Firestore, Cloud Functions, Node.js, GCP',
    image: '/FreeZoneHubWeb/team/Adel.jpg',
    wa: 'https://wa.me/96279601436',
    linkedin: 'https://www.linkedin.com/in/adel-abu-hajar-03a4a81a9/'
  },
  { 
    id: '5', 
    name: 'Tareq Jarrar', 
    title: 'Quality Assurance & Software Testing Engineer', 
    responsibilities: 'Crafting test suits, cross-device performance testing, data structure validation, and documenting the final system verification report for graduation defense.',
    expertise: 'Unit Testing, Integration Testing, Security Hardening, Performance Tuning',
    image: '/FreeZoneHubWeb/team/Tareq.jpg',
    wa: 'https://wa.me/962788602694',
    linkedin: null
  },
]

function Hero() {
  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 400], [1, 2.5])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <motion.div 
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="text-center relative z-10"
      >
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-[clamp(3rem,12vw,10rem)] font-bold leading-none tracking-tight"
          style={{ color: '#FF6B00' }}
        >
          FreeZone Hub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-400 mt-6 max-w-xl mx-auto"
        >
          Transforming Car Trading in Jordan
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-orange-500 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-orange-500 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

function TeamShowcase() {
  return (
    <div className="flex flex-col">
      {teamMembers.map((member, index) => (
        <motion.section
          key={member.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="min-h-screen flex items-center justify-center py-20 px-6"
          style={{ backgroundColor: index % 2 === 0 ? '#111111' : '#1E1E1E' }}
        >
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/10 rounded-3xl" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-3xl border border-white/10"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className={`text-center ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}
              initial={{ x: index % 2 === 0 ? 50 : -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-500 text-sm font-medium mb-4">
                0{index + 1}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {member.name}
              </h2>
              <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-6">
                {member.title}
              </p>
              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Responsibilities</p>
                  <p className="text-gray-300">{member.responsibilities}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Expertise</p>
                  <p className="text-gray-300">{member.expertise}</p>
                </div>
              </div>
              <div className="flex gap-4 justify-center md:justify-start">
                <motion.a
                  href={member.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </motion.a>
                {member.linkedin && (
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold"
                  >
                    <Link className="w-5 h-5" />
                    LinkedIn
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </div>
  )
}

function BehindTheScenes() {
  return (
    <section className="py-32 px-6" style={{ backgroundColor: '#111111' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Behind The <span style={{ color: '#FF6B00' }}>Scenes</span>
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A glimpse into our team's journey, training, and workspace
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 relative group"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <Globe className="w-12 h-12 text-orange-500 mx-auto mb-2" />
              <p className="text-gray-400">Team Collaboration</p>
            </div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
            alt="Team collaboration"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" 
            alt="Team meeting"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold">Planning Sessions</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
            alt="Development work"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold">Development</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
            alt="Team workspace"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold">Workspace</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80" 
            alt="Training session"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold">Training</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 relative group"
        >
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" 
            alt="Team celebration"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
          />
          <div className="absolute bottom-4 left-4">
            <p className="text-white font-semibold">Celebrations</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#111111', borderTop: '1px solid #333' }}>
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold tracking-tight text-white">FreeZone Hub</span>
        </motion.div>
        <p className="text-gray-500 mb-8">Transforming automotive trading in Jordan</p>
        <div className="text-gray-600 text-sm">
          © 2026 FreeZone Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#111111' }}>
      <Hero />
      <TeamShowcase />
      <BehindTheScenes />
      <Footer />
    </div>
  )
}

export default App