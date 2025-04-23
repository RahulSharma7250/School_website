"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users, Calendar, Award, GraduationCap, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../components/ui/card"

export default function TrilokHome() {
  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section className="relative">
  <div className="bg-gradient-to-r from-emerald-600 to-teal-800 h-[90vh] in-h-[550px]">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/trilokschool.jpg?height=800&width=1200')" }}
    ></div>
    {/* Pattern overlay */}
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0,_transparent_2px)] bg-[length:12px_12px]"></div>
    
    <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
  Nurturing Excellence, <br /> Building Character
</h1>
<p className="text-xl text-white mb-8 leading-relaxed">
  Trilok Vidhya Vihar Senior Secondary School provides quality education with a focus on holistic
  development and academic excellence.
</p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 font-semibold px-8">
            Explore Programs
          </Button>
          <Button size="lg" variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-100 font-semibold px-8">
            Admission Process
          </Button>
        </div>
        
        {/* Quick info badges */}
        <div className="mt-12 flex flex-wrap gap-5">
          <div className="bg-emerald-100 backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-emerald-600">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">+91 XXXXX XXXXX</span>
          </div>
          <div className="bg-emerald-100 backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-emerald-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Tokar, Dist. Salumbar</span>
          </div>
          <div className="bg-emerald-100 backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-emerald-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Mon-Sat: 8:00 AM - 2:30 PM</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
  
  {/* Curved section divider */}
  <div>
  <div className="relative h-16 bg-white">
  <svg className="absolute -top-px left-0 w-full overflow-hidden" style={{ transform: "translateY(-100%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path fill="white" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
  </svg>
</div>
</div>
</section>

      {/* Key Stats Section - New */}
      <section className="py-8 -mt-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "1000+", label: "Students", icon: <Users className="h-6 w-6 text-emerald-500" /> },
              { number: "50+", label: "Teachers", icon: <GraduationCap className="h-6 w-6 text-emerald-500" /> },
              { number: "98%", label: "Board Pass Rate", icon: <Award className="h-6 w-6 text-emerald-500" /> },
              { number: "30+", label: "Years of Excellence", icon: <BookOpen className="h-6 w-6 text-emerald-500" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg bg-white h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="mb-3 p-3 rounded-full bg-emerald-50">{stat.icon}</div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Strengths</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Why Choose Trilok Vidhya Vihar?</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a nurturing environment where students can excel academically and develop into well-rounded
              individuals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-white" />,
                title: "Comprehensive Curriculum",
                description:
                  "Our curriculum is designed to foster critical thinking and creativity while meeting academic standards.",
              },
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Experienced Faculty",
                description:
                  "Our teachers are highly qualified professionals dedicated to bringing out the best in every student.",
              },
              {
                icon: <Award className="h-10 w-10 text-white" />,
                title: "Excellence in Academics",
                description: "We consistently achieve outstanding results in board examinations and competitive tests.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-white" />,
                title: "Holistic Development",
                description:
                  "We focus on developing not just academic skills but also character, values, and life skills.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                  </div>
                  <CardContent className="p-6 text-center mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Events - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Stay Updated</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Latest News & Events</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest happenings at Trilok Vidhya Vihar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/shanti5.jpg?height=400&width=600",
                date: "May 15, 2023",
                title: "Annual Sports Day Celebration",
                excerpt:
                  "Students showcased their athletic talents in various sports competitions during our Annual Sports Day.",
              },
              {
                image: "/tri4.jpg?height=400&width=600",
                date: "April 22, 2023",
                title: "Science Exhibition",
                excerpt:
                  "Our students presented innovative science projects at the annual science exhibition, demonstrating their creativity and scientific knowledge.",
              },
              {
                image: "/tri7.jpg?height=400&width=600",
                date: "March 8, 2023",
                title: "Cultural Festival",
                excerpt:
                  "The school celebrated its cultural diversity through performances, art displays, and traditional food during the annual cultural festival.",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-emerald-600 mb-2 font-medium">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{event.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-emerald-600 hover:text-emerald-700 hover:bg-transparent group"
                    >
                      <span className="font-medium">Read More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">View All News & Events</Button>
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-20 bg-emerald-50 relative overflow-hidden">
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">What Parents & Students Say</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our community about their experiences at Trilok Vidhya Vihar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The teachers at Trilok Vidhya Vihar are exceptional. They not only focus on academics but also on character building and values.",
                name: "Rajesh Sharma",
                role: "Parent",
                avatar: "/placeholder.svg?height=100&width=100"
              },
              {
                quote:
                  "I've grown so much as a student and as a person during my time at this school. The opportunities for extracurricular activities are amazing.",
                name: "Priya Patel",
                role: "Student, Class 12",
                avatar: "/placeholder.svg?height=100&width=100"
              },
              {
                quote:
                  "The school's emphasis on both academic excellence and holistic development has helped my child become more confident and responsible.",
                name: "Meena Agarwal",
                role: "Parent",
                avatar: "/placeholder.svg?height=100&width=100"
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8 relative">
                    <div className="mb-6 text-emerald-600">
                      <svg className="h-12 w-12 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">{testimonial.quote}</p>
                    <div className="flex items-center mt-auto">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-emerald-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery - New Section */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Campus Highlights</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">School Gallery</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into our campus life and facilities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Gallery+Image+${index + 1}`}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-auto object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">View Full Gallery</Button>
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
            <h2 className="text-4xl font-bold mb-4">Ready to Join Trilok Vidhya Vihar?</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
              Take the first step towards providing your child with a quality education that focuses on holistic
              development.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90 font-semibold">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 font-semibold">
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}