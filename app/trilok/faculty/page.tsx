"use client"

import { motion } from "framer-motion"
import { Mail, Phone, GraduationCap } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function TrilokFaculty() {
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
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Meet Our Team</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Faculty</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Meet our dedicated team of educators who are committed to nurturing young minds and shaping the future.
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

      {/* Faculty Overview - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Excellence in Teaching</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At Trilok Vidhya Vihar Senior Secondary School, we take pride in our exceptional faculty who bring a
                  wealth of knowledge, experience, and passion to the classroom.
                </p>
                <p>
                  Our teachers are not just educators but mentors who inspire, guide, and nurture students to achieve
                  their full potential. They create a supportive learning environment that encourages curiosity,
                  critical thinking, and creativity.
                </p>
                <p>
                  With advanced degrees in their respective fields and continuous professional development, our faculty
                  stays updated with the latest teaching methodologies and educational trends to provide the best
                  learning experience for our students.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">45+</div>
                    <div className="text-gray-700">Experienced Teachers</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">85%</div>
                    <div className="text-gray-700">With Advanced Degrees</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">12+</div>
                    <div className="text-gray-700">Years Avg. Experience</div>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                    <div className="text-gray-700">Dedicated to Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal-100 rounded-lg"></div>
              <img
                src="/placeholder.svg?height=600&width=800&text=Our+Faculty"
                alt="Our Faculty"
                className="rounded-lg shadow-xl w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Departments - Enhanced */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Departments</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our Academic Departments</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated educators who make up our academic departments
            </p>
          </motion.div>

          <Tabs defaultValue="primary" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-lg">
                <TabsTrigger value="primary" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                  Primary Department
                </TabsTrigger>
                <TabsTrigger value="science" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                  Science Department
                </TabsTrigger>
                <TabsTrigger value="mathematics" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                  Mathematics Department
                </TabsTrigger>
                <TabsTrigger value="languages" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                  Languages Department
                </TabsTrigger>
                <TabsTrigger value="humanities" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                  Humanities Department
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="primary">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Mrs. Sunita Sharma",
                      position: "Head of Primary Department",
                      qualification: "M.Ed., B.Ed.",
                      experience: "18 years",
                      image: "/placeholder.svg?height=400&width=400&text=Sunita+Sharma",
                    },
                    {
                      name: "Mr. Rajesh Patel",
                      position: "Primary Mathematics Teacher",
                      qualification: "B.Ed., M.Sc. Mathematics",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rajesh+Patel",
                    },
                    {
                      name: "Ms. Priya Gupta",
                      position: "Primary English Teacher",
                      qualification: "B.Ed., M.A. English",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Priya+Gupta",
                    },
                    {
                      name: "Mrs. Anita Singh",
                      position: "Primary Hindi Teacher",
                      qualification: "B.Ed., M.A. Hindi",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anita+Singh",
                    },
                    {
                      name: "Mr. Vikram Malhotra",
                      position: "Primary Science Teacher",
                      qualification: "B.Ed., M.Sc. Biology",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Vikram+Malhotra",
                    },
                    {
                      name: "Ms. Deepa Verma",
                      position: "Primary Art Teacher",
                      qualification: "B.F.A., B.Ed.",
                      experience: "7 years",
                      image: "/placeholder.svg?height=400&width=400&text=Deepa+Verma",
                    },
                  ].map((teacher, index) => (
                    <FacultyCard key={index} teacher={teacher} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="science">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Dr. Amit Kumar",
                      position: "Head of Science Department",
                      qualification: "Ph.D. Physics, M.Sc., B.Ed.",
                      experience: "20 years",
                      image: "/placeholder.svg?height=400&width=400&text=Amit+Kumar",
                    },
                    {
                      name: "Mrs. Meena Agarwal",
                      position: "Senior Physics Teacher",
                      qualification: "M.Sc. Physics, B.Ed.",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Meena+Agarwal",
                    },
                    {
                      name: "Mr. Suresh Chand",
                      position: "Chemistry Teacher",
                      qualification: "M.Sc. Chemistry, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Suresh+Chand",
                    },
                    {
                      name: "Dr. Neha Sharma",
                      position: "Biology Teacher",
                      qualification: "Ph.D. Botany, M.Sc., B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Neha+Sharma",
                    },
                    {
                      name: "Mr. Rahul Verma",
                      position: "Physics Teacher",
                      qualification: "M.Sc. Physics, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rahul+Verma",
                    },
                    {
                      name: "Ms. Anjali Gupta",
                      position: "Chemistry Teacher",
                      qualification: "M.Sc. Chemistry, B.Ed.",
                      experience: "7 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anjali+Gupta",
                    },
                  ].map((teacher, index) => (
                    <FacultyCard key={index} teacher={teacher} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="mathematics">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Mr. Sanjay Mishra",
                      position: "Head of Mathematics Department",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "22 years",
                      image: "/placeholder.svg?height=400&width=400&text=Sanjay+Mishra",
                    },
                    {
                      name: "Mrs. Rekha Jain",
                      position: "Senior Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "18 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rekha+Jain",
                    },
                    {
                      name: "Mr. Deepak Sharma",
                      position: "Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Deepak+Sharma",
                    },
                    {
                      name: "Ms. Pooja Agarwal",
                      position: "Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Pooja+Agarwal",
                    },
                    {
                      name: "Mr. Vivek Singh",
                      position: "Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Vivek+Singh",
                    },
                  ].map((teacher, index) => (
                    <FacultyCard key={index} teacher={teacher} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="languages">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Mrs. Shikha Gupta",
                      position: "Head of Languages Department",
                      qualification: "M.A. English, B.Ed.",
                      experience: "20 years",
                      image: "/placeholder.svg?height=400&width=400&text=Shikha+Gupta",
                    },
                    {
                      name: "Mr. Ramesh Sharma",
                      position: "Senior Hindi Teacher",
                      qualification: "M.A. Hindi, B.Ed.",
                      experience: "17 years",
                      image: "/placeholder.svg?height=400&width=400&text=Ramesh+Sharma",
                    },
                    {
                      name: "Ms. Anjali Saxena",
                      position: "English Teacher",
                      qualification: "M.A. English, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anjali+Saxena",
                    },
                    {
                      name: "Mr. Sunil Kumar",
                      position: "Sanskrit Teacher",
                      qualification: "M.A. Sanskrit, B.Ed.",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Sunil+Kumar",
                    },
                    {
                      name: "Ms. Ritu Verma",
                      position: "English Teacher",
                      qualification: "M.A. English, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Ritu+Verma",
                    },
                    {
                      name: "Mr. Anil Sharma",
                      position: "Hindi Teacher",
                      qualification: "M.A. Hindi, B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anil+Sharma",
                    },
                  ].map((teacher, index) => (
                    <FacultyCard key={index} teacher={teacher} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="humanities">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Dr. Rajiv Mehta",
                      position: "Head of Humanities Department",
                      qualification: "Ph.D. History, M.A., B.Ed.",
                      experience: "22 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rajiv+Mehta",
                    },
                    {
                      name: "Mrs. Seema Kapoor",
                      position: "Senior History Teacher",
                      qualification: "M.A. History, B.Ed.",
                      experience: "18 years",
                      image: "/placeholder.svg?height=400&width=400&text=Seema+Kapoor",
                    },
                    {
                      name: "Mr. Prakash Joshi",
                      position: "Geography Teacher",
                      qualification: "M.A. Geography, B.Ed.",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Prakash+Joshi",
                    },
                    {
                      name: "Ms. Nidhi Singh",
                      position: "Political Science Teacher",
                      qualification: "M.A. Political Science, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Nidhi+Singh",
                    },
                    {
                      name: "Mr. Alok Sharma",
                      position: "Economics Teacher",
                      qualification: "M.A. Economics, B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Alok+Sharma",
                    },
                    {
                      name: "Ms. Kavita Rani",
                      position: "Sociology Teacher",
                      qualification: "M.A. Sociology, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Kavita+Rani",
                    },
                  ].map((teacher, index) => (
                    <FacultyCard key={index} teacher={teacher} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Faculty Development - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Faculty Development Programs</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We believe that continuous learning and professional development are essential for our faculty to stay
                  updated with the latest educational trends and teaching methodologies.
                </p>
                <p>
                  Our teachers regularly participate in workshops, seminars, and training programs to enhance their
                  skills and knowledge. This commitment to professional growth ensures that our students receive the
                  best education possible.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  Recent Faculty Development Initiatives
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Workshop on Innovative Teaching Methodologies</li>
                  <li>Training on Integration of Technology in Classroom</li>
                  <li>Seminar on Child Psychology and Learning Patterns</li>
                  <li>Collaborative Teaching and Team Building Workshop</li>
                  <li>Subject-specific Advanced Training Programs</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img
                src="/placeholder.svg?height=400&width=600&text=Faculty+Development"
                alt="Faculty Development"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Team - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Career Opportunities</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Join Our Team</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are always looking for passionate educators to join our team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Current Openings</h3>
                    <div className="space-y-6">
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                          Mathematics Teacher (Senior Secondary)
                        </h4>
                        <p className="text-gray-700 mb-4">
                          We are looking for an experienced Mathematics teacher for Classes XI and XII with a strong
                          academic background and excellent teaching skills.
                        </p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">English Teacher (Middle School)</h4>
                        <p className="text-gray-700 mb-4">
                          We are seeking a dynamic English teacher for Classes VI to VIII who can inspire students and
                          foster a love for language and literature.
                        </p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Computer Science Teacher</h4>
                        <p className="text-gray-700 mb-4">
                          We are looking for a Computer Science teacher with knowledge of programming languages and
                          modern technology to teach Classes IX to XII.
                        </p>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Join Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Professional Growth</h4>
                          <p className="text-gray-700">
                            Regular training and development opportunities to enhance your teaching skills.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Collaborative Environment</h4>
                          <p className="text-gray-700">
                            Work with a team of dedicated educators who are passionate about teaching.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Modern Infrastructure</h4>
                          <p className="text-gray-700">Access to state-of-the-art facilities and teaching resources.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-emerald-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-emerald-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Competitive Compensation</h4>
                          <p className="text-gray-700">
                            Attractive salary package and benefits commensurate with qualifications and experience.
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View All Openings</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Connect With Our Faculty</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Have questions for our teachers? Schedule a meeting or reach out to learn more about our academic
              programs.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
              Contact Faculty
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function FacultyCard({ teacher, index }: { teacher: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={teacher.image || "/placeholder.svg"}
                alt={teacher.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center">{teacher.name}</h3>
            <p className="text-emerald-600 font-medium text-center">{teacher.position}</p>
          </div>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-start">
              <GraduationCap className="h-5 w-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>{teacher.qualification}</p>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>email@trilokvidhyavihar.edu</p>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-emerald-600 mr-2 mt-1 flex-shrink-0" />
              <p>Experience: {teacher.experience}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}