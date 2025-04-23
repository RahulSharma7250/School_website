"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Award, BookOpen, Users, Heart } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"

export default function TrilokAbout() {
  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section className="relative">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-800 h-[60vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
          ></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0,_transparent_2px)] bg-[length:12px_12px]"></div>
          
          <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Our Story</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Our School</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Learn about our history, mission, vision, and the values that guide Trilok Vidhya Vihar Senior Secondary
                School.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Curved section divider */}
        <div className="relative h-16 bg-white">
          <svg className="absolute -top-px left-0 w-full overflow-hidden" style={{ transform: "translateY(-100%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="white" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* History Section - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Legacy</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our History</h2>
              <div className="w-24 h-1.5 bg-emerald-600 mb-6 rounded-full"></div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  Trilok Vidhya Vihar Senior Secondary School was established in 1995 with a vision to provide quality
                  education to the children of Tokar and surrounding areas. What started as a small institution with
                  just a few classrooms has now grown into a prestigious educational institution.
                </p>
                <p className="text-lg">
                  Over the years, our school has expanded its infrastructure, enhanced its academic programs, and built
                  a reputation for excellence in education. We have consistently produced outstanding results in board
                  examinations and have seen our students excel in various fields.
                </p>
                <p className="text-lg">
                  Today, Trilok Vidhya Vihar stands as a symbol of educational excellence in the region, continuing its
                  mission to nurture young minds and prepare them for the challenges of the future.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-lg z-0"></div>
              <img
                src="/trilokschool.jpg?height=600&width=800&text=School+History"
                alt="School History"
                className="rounded-lg shadow-xl w-full h-auto relative z-10 border-8 border-white"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg z-20">
                <p className="text-emerald-800 font-bold text-xl text-center">Est. 1995</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(5,150,105,0.2)_0,_transparent_2px)] bg-[length:16px_16px]"></div>
        
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our Mission & Vision</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape our approach to education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                <div className="h-3 bg-emerald-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 group-hover:bg-emerald-200 transition-colors duration-300">
                    <span className="text-emerald-600 text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Our Mission</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      To provide a nurturing and stimulating environment where students can develop their intellectual,
                      physical, emotional, and social potential to the fullest.
                    </p>
                    <p>
                      To instill in students a love for learning, a respect for diversity, and a commitment to
                      excellence in all endeavors.
                    </p>
                    <p>
                      To prepare students to be responsible citizens who contribute positively to society and are
                      equipped to face the challenges of a rapidly changing world.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                <div className="h-3 bg-teal-600"></div>
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center h-16 w-16 rounded-full bg-teal-100 group-hover:bg-teal-200 transition-colors duration-300">
                    <span className="text-teal-600 text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors">Our Vision</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      To be recognized as a center of excellence in education that nurtures future leaders with strong
                      values, critical thinking skills, and a global perspective.
                    </p>
                    <p>
                      To create an educational ecosystem that balances academic rigor with holistic development,
                      preparing students not just for examinations but for life.
                    </p>
                    <p>
                      To foster innovation in teaching and learning, embracing new technologies and methodologies while
                      preserving traditional values and cultural heritage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Enhanced */}
      <section className="py-20">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">What We Stand For</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our Core Values</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our educational philosophy and daily practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of education, encouraging students to aim high and achieve their full potential.",
              },
              {
                icon: <Users className="h-8 w-8 text-white" />,
                title: "Integrity",
                description:
                  "We promote honesty, ethical behavior, and moral courage, teaching students to stand by their principles even in challenging situations.",
              },
              {
                icon: <Heart className="h-8 w-8 text-white" />,
                title: "Respect",
                description:
                  "We foster respect for self, others, and the environment, creating a community where diversity is celebrated and every individual is valued.",
              },
              {
                icon: <CheckCircle2 className="h-8 w-8 text-white" />,
                title: "Responsibility",
                description:
                  "We instill a sense of responsibility towards oneself, the community, and the world, preparing students to be conscientious citizens.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-white" />,
                title: "Innovation",
                description:
                  "We encourage creative thinking and problem-solving, preparing students to adapt to and thrive in a rapidly changing world.",
              },
              {
                icon: <Heart className="h-8 w-8 text-white" />,
                title: "Compassion",
                description:
                  "We nurture empathy and kindness, teaching students to care for others and contribute positively to society.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Enhanced */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(5,150,105,0.2)_0,_transparent_2px)] bg-[length:16px_16px]"></div>
        
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">School Leadership</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the dedicated team guiding our institution</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajesh Kumar",
                position: "Principal",
                image: "/placeholder.svg?height=400&width=400&text=Principal",
                bio: "Dr. Kumar brings over 25 years of experience in education. He holds a Ph.D. in Education and is committed to fostering academic excellence and holistic development.",
              },
              {
                name: "Mrs. Sunita Sharma",
                position: "Vice Principal",
                image: "/placeholder.svg?height=400&width=400&text=Vice+Principal",
                bio: "Mrs. Sharma oversees the academic programs and student welfare. With her 20 years of teaching experience, she ensures that our educational standards remain high.",
              },
              {
                name: "Mr. Vikram Singh",
                position: "Administrative Head",
                image: "/placeholder.svg?height=400&width=400&text=Admin+Head",
                bio: "Mr. Singh manages the administrative functions of the school, ensuring smooth operations and efficient resource management for optimal learning experiences.",
              },
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden group">
                  <div className="bg-gradient-to-r from-emerald-600/90 to-teal-700/90 h-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0,_transparent_2px)] bg-[length:12px_12px]"></div>
                  </div>
                  <CardContent className="p-6 text-center relative">
                    <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto border-4 border-white shadow-lg absolute -top-16 left-1/2 transform -translate-x-1/2">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-16">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">{leader.name}</h3>
                      <p className="text-emerald-600 font-medium mb-4">{leader.position}</p>
                      <p className="text-gray-700">{leader.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-800 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0,_transparent_2px)] bg-[length:12px_12px]"></div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"></div>
        
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Visit Our Campus</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Experience firsthand the learning environment and facilities that make Trilok Vidhya Vihar a special place
              for education.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 font-semibold">
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}