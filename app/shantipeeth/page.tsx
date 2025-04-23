"use client"

import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Users, GraduationCap, Star, Quote, Award, UserCog } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"

export default function ShantipeethHome() {
  return (
    <div>
      {/* Hero Section - Increased height */}
      <section className="relative">
        <div className="h-[80vh] min-h-[600px]">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('/tri.jpg')", // Replace with your image path
              backgroundColor: "rgba(0,0,0,0.5)", // Fallback if image doesn't load
              backgroundBlendMode: "multiply"
            }}
          ></div>
          
          {/* Content */}
          <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Inspiring Minds, Shaping Futures
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8">
                Shantipeeth Public Secondary School is committed to providing a stimulating environment where students
                can discover their potential and excel.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                >
                  Discover Our School
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-black border-white hover:bg-white/10"
                >
                  Admission Enquiry
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="School Campus"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Shantipeeth Public School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to provide quality education, Shantipeeth Public Secondary School has established
                itself as a center of academic excellence and holistic development.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our school is built on the foundation of traditional values combined with modern educational practices.
                We believe in nurturing not just academic skills but also character, creativity, and critical thinking.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Experienced faculty</p>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Modern infrastructure</p>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Comprehensive curriculum</p>
                </div>
                <div className="flex items-start">
                  <Star className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Focus on extracurricular</p>
                </div>
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">Learn More About Us</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a range of programs designed to meet the diverse needs and interests of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Primary Education",
                description:
                  "A strong foundation in core subjects with emphasis on developing fundamental skills and curiosity.",
              },
              {
                icon: <Users className="h-10 w-10 text-amber-600" />,
                title: "Secondary Education",
                description:
                  "Comprehensive curriculum preparing students for board examinations and future academic pursuits.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-amber-600" />,
                title: "Extracurricular Activities",
                description:
                  "A wide range of activities including sports, arts, music, and cultural programs for holistic development.",
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center">{program.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <Button variant="ghost" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the success and accomplishments of our students and institution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "95%",
                title: "Board Exam Success Rate",
                description: "Our students consistently achieve excellent results in board examinations.",
              },
              {
                number: "50+",
                title: "State Level Awards",
                description: "Recognition in various academic and extracurricular competitions.",
              },
              {
                number: "100%",
                title: "Teacher Qualification",
                description: "All our teachers are highly qualified and experienced in their fields.",
              },
              {
                number: "25+",
                title: "Years of Excellence",
                description: "A legacy of providing quality education to generations of students.",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-amber-600 mb-2">{achievement.number}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Parents & Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our school community about their experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Shantipeeth has provided my child with an excellent learning environment that balances academics and personal growth.",
                author: "Mrs. Sharma, Parent",
                role: "Parent of Class 8 student"
              },
              {
                quote: "The teachers here go above and beyond to ensure every student understands the concepts thoroughly.",
                author: "Rahul Verma",
                role: "Class 12 Student"
              },
              {
                quote: "I'm impressed with the school's focus on holistic development and the range of extracurricular activities offered.",
                author: "Mr. Patel, Alumni Parent",
                role: "Parent of Alumni"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-amber-500 mb-4 opacity-30" />
                    <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="mt-4">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Faculty Highlights */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Distinguished Faculty</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Meet some of our dedicated and experienced educators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Anita Desai",
                role: "Principal",
                qualification: "PhD in Education, 25+ years experience",
                achievement: "Recipient of National Teacher Award 2020"
              },
              {
                name: "Mr. Rajesh Kumar",
                role: "Head of Science Department",
                qualification: "M.Sc, B.Ed, 15 years experience",
                achievement: "Published 5 research papers in education"
              },
              {
                name: "Ms. Priya Sharma",
                role: "English Faculty",
                qualification: "MA English, B.Ed, 10 years experience",
                achievement: "State level best teacher award 2022"
              }
            ].map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 p-3 rounded-full mr-4">
                        <UserCog className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{faculty.name}</h3>
                        <p className="text-amber-100">{faculty.role}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <GraduationCap className="h-5 w-5 text-amber-200 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-white/90">{faculty.qualification}</p>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-amber-200 mr-2 mt-1 flex-shrink-0" />
                        <p className="text-white/90">{faculty.achievement}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="text-amber-600 bg-white hover:bg-white/90">
              Meet All Our Faculty
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Shantipeeth Public School</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Give your child the gift of quality education in a nurturing environment. Admissions are now open for the
              upcoming academic year.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}