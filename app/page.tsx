"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Book, Users, Award } from "lucide-react"

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const schools = [
    {
      id: "trilok",
      name: "Trilok Vidhya Vihar Senior Secondary School",
      location: "Tokar, Tah. Semari, Dist. Salumbar (Raj.) 313806",
      color: "from-emerald-500/90 to-teal-700/90",
      hoverColor: "from-emerald-600/95 to-teal-800/95",
      textColor: "text-emerald-50",
      path: "/trilok",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "shantipeeth",
      name: "Shantipeeth Public Secondary School",
      location: "Tokar, Tah. Semari, Dist. Salumbar (Raj.) 313806",
      color: "from-amber-500/90 to-orange-700/90",
      hoverColor: "from-amber-600/95 to-orange-800/95",
      textColor: "text-amber-50",
      path: "/shantipeeth",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const heroTextVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" 
      } 
    }
  }

  const features = [
    { 
      icon: Book, 
      title: "Academic Excellence",
      description: "Comprehensive curriculum focusing on holistic development"
    },
    { 
      icon: Users, 
      title: "Community Learning", 
      description: "Collaborative environment that fosters teamwork and leadership"
    },
    { 
      icon: Award, 
      title: "Distinguished Faculty", 
      description: "Experienced educators dedicated to student success"
    }
  ]

  if (!mounted) {
    return null // Prevents hydration issues
  }

  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      {/* Hero Section with professional school design */}
      <div className="bg-gradient-to-b from-emerald-800 via-emerald-700 to-teal-600 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[40rem] w-[40rem] rounded-full bg-emerald-500 opacity-20 blur-[10rem]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            variants={heroTextVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-emerald-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.03 54.03 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.71 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.489 48.489 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                </svg>
              </div>
            </motion.div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-tight text-shadow-lg drop-shadow-md">
              Welcome to <span className="relative inline-block">
                <span className="relative z-10">TS Academy</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400/70 to-emerald-400/70 -z-0 rounded-lg"></span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-semibold leading-relaxed text-shadow-lg drop-shadow-md">
              Home to two prestigious educational institutions dedicated to excellence in education
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-4"
            >
              <a href="#schools" className="inline-block bg-white text-emerald-800 font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-amber-50 hover:translate-y-[-2px]">
                Explore Our Schools
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Schools Cards Section - Enhanced with professional design */}
      <motion.div
        id="schools"
        className="flex-1 flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl w-full mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our <span className="text-emerald-700">Schools</span></h2>
            <p className="text-gray-700 mt-3 max-w-2xl mx-auto font-medium">Discover our prestigious educational institutions dedicated to academic excellence and holistic development</p>
            <div className="w-24 h-2 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {schools.map((school) => (
              <motion.div
                key={school.id}
                className="relative overflow-hidden rounded-xl shadow-lg group backdrop-blur-sm"
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredCard(school.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={school.path} className="block h-full">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      hoveredCard === school.id ? school.hoverColor : school.color
                    } transition-all duration-500 ease-in-out`}
                  ></div>
                  
                  {/* Glass effect and pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0,_transparent_2px)] bg-[length:12px_12px]"></div>
                  
                  <div className="relative h-full flex flex-col p-6">
                    <div className="flex-1">
                      <motion.div
                        className="w-full h-[11.75rem] sm:h-[13.75rem] rounded-xl mb-4 bg-cover bg-center overflow-hidden shadow-inner"
                        style={{ backgroundImage: `url(${school.image})` }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                          <div className="bg-white/30 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-white inline-flex items-center font-bold">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            <span>Admissions open</span>
                          </div>
                        </div>
                      </motion.div>
                      
                      <h2 className={`text-lg sm:text-xl font-bold mb-2 ${school.textColor} tracking-tight drop-shadow-sm`}>
                        {school.name}
                      </h2>
                      <p className={`text-xs sm:text-sm opacity-90 mb-4 ${school.textColor} font-medium drop-shadow-sm`}>
                        {school.location}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className={`inline-flex items-center text-xs sm:text-sm font-bold ${school.textColor} transition-all duration-300 ease-in-out px-3 py-1.5 bg-white/30 backdrop-blur-sm rounded-full`}>
                        <span className="border-b border-transparent pb-0.5">Visit School</span>
                        <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className={`absolute top-0 right-0 transform translate-y-[-50%] translate-x-[50%] rotate-45 w-6 h-16 ${
                    hoveredCard === school.id ? 'bg-white/40' : 'bg-white/30'
                  } transition-all duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    

      {/* Modern Footer */}
      <footer className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-4 relative z-10">
          <div className="flex items-center justify-center mb-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-emerald-500 rounded-lg"></div>
            </div>
          </div>
          <p className="text-base font-medium">© {new Date().getFullYear()} TS Academy. All rights reserved.</p>
          <p className="text-xs text-white">Nurturing minds, shaping futures</p>
          
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}