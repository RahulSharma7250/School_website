"use client"

import { motion } from "framer-motion"
import { Mail, Phone, GraduationCap } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function ShantipeethFaculty() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-amber-500 to-orange-700 h-[40vh] min-h-[300px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
          ></div>
          <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Faculty</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Meet our dedicated team of educators who are committed to nurturing young minds and shaping the future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Overview */}
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
                  At Shantipeeth Public Secondary School, we take pride in our exceptional faculty who bring a wealth of
                  knowledge, experience, and passion to the classroom.
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
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">45+</div>
                    <div className="text-gray-700">Experienced Teachers</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">85%</div>
                    <div className="text-gray-700">With Advanced Degrees</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">12+</div>
                    <div className="text-gray-700">Years Avg. Experience</div>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
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
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-lg"></div>
              <img
                src="/placeholder.svg?height=600&width=800&text=Our+Faculty"
                alt="Our Faculty"
                className="rounded-lg shadow-xl w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Faculty Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Academic Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated educators who make up our academic departments
            </p>
          </motion.div>

          <Tabs defaultValue="primary" className="w-full">
            <div className="flex justify-center mb-8 overflow-x-auto">
              <TabsList>
                <TabsTrigger value="primary">Primary Department</TabsTrigger>
                <TabsTrigger value="science">Science Department</TabsTrigger>
                <TabsTrigger value="mathematics">Mathematics Department</TabsTrigger>
                <TabsTrigger value="languages">Languages Department</TabsTrigger>
                <TabsTrigger value="humanities">Humanities Department</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="primary">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      name: "Mrs. Meena Sharma",
                      position: "Head of Primary Department",
                      qualification: "M.Ed., B.Ed.",
                      experience: "18 years",
                      image: "/placeholder.svg?height=400&width=400&text=Meena+Sharma",
                    },
                    {
                      name: "Mr. Vikram Patel",
                      position: "Primary Mathematics Teacher",
                      qualification: "B.Ed., M.Sc. Mathematics",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Vikram+Patel",
                    },
                    {
                      name: "Ms. Anjali Gupta",
                      position: "Primary English Teacher",
                      qualification: "B.Ed., M.A. English",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anjali+Gupta",
                    },
                    {
                      name: "Mrs. Kavita Singh",
                      position: "Primary Hindi Teacher",
                      qualification: "B.Ed., M.A. Hindi",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Kavita+Singh",
                    },
                    {
                      name: "Mr. Rajesh Malhotra",
                      position: "Primary Science Teacher",
                      qualification: "B.Ed., M.Sc. Biology",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rajesh+Malhotra",
                    },
                    {
                      name: "Ms. Pooja Verma",
                      position: "Primary Art Teacher",
                      qualification: "B.F.A., B.Ed.",
                      experience: "7 years",
                      image: "/placeholder.svg?height=400&width=400&text=Pooja+Verma",
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
                      name: "Dr. Suresh Kumar",
                      position: "Head of Science Department",
                      qualification: "Ph.D. Physics, M.Sc., B.Ed.",
                      experience: "20 years",
                      image: "/placeholder.svg?height=400&width=400&text=Suresh+Kumar",
                    },
                    {
                      name: "Mrs. Anita Agarwal",
                      position: "Senior Physics Teacher",
                      qualification: "M.Sc. Physics, B.Ed.",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anita+Agarwal",
                    },
                    {
                      name: "Mr. Deepak Chand",
                      position: "Chemistry Teacher",
                      qualification: "M.Sc. Chemistry, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Deepak+Chand",
                    },
                    {
                      name: "Dr. Priya Sharma",
                      position: "Biology Teacher",
                      qualification: "Ph.D. Botany, M.Sc., B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Priya+Sharma",
                    },
                    {
                      name: "Mr. Anil Verma",
                      position: "Physics Teacher",
                      qualification: "M.Sc. Physics, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Anil+Verma",
                    },
                    {
                      name: "Ms. Ritu Gupta",
                      position: "Chemistry Teacher",
                      qualification: "M.Sc. Chemistry, B.Ed.",
                      experience: "7 years",
                      image: "/placeholder.svg?height=400&width=400&text=Ritu+Gupta",
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
                      name: "Mr. Ramesh Mishra",
                      position: "Head of Mathematics Department",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "22 years",
                      image: "/placeholder.svg?height=400&width=400&text=Ramesh+Mishra",
                    },
                    {
                      name: "Mrs. Sunita Jain",
                      position: "Senior Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "18 years",
                      image: "/placeholder.svg?height=400&width=400&text=Sunita+Jain",
                    },
                    {
                      name: "Mr. Amit Sharma",
                      position: "Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Amit+Sharma",
                    },
                    {
                      name: "Ms. Neha Agarwal",
                      position: "Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Neha+Agarwal",
                    },
                    {
                      name: "Mr. Sanjay Singh",
                      position: "Mathematics Teacher",
                      qualification: "M.Sc. Mathematics, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Sanjay+Singh",
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
                      name: "Mrs. Asha Gupta",
                      position: "Head of Languages Department",
                      qualification: "M.A. English, B.Ed.",
                      experience: "20 years",
                      image: "/placeholder.svg?height=400&width=400&text=Asha+Gupta",
                    },
                    {
                      name: "Mr. Sunil Sharma",
                      position: "Senior Hindi Teacher",
                      qualification: "M.A. Hindi, B.Ed.",
                      experience: "17 years",
                      image: "/placeholder.svg?height=400&width=400&text=Sunil+Sharma",
                    },
                    {
                      name: "Ms. Divya Saxena",
                      position: "English Teacher",
                      qualification: "M.A. English, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Divya+Saxena",
                    },
                    {
                      name: "Mr. Mohan Kumar",
                      position: "Sanskrit Teacher",
                      qualification: "M.A. Sanskrit, B.Ed.",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Mohan+Kumar",
                    },
                    {
                      name: "Ms. Seema Verma",
                      position: "English Teacher",
                      qualification: "M.A. English, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Seema+Verma",
                    },
                    {
                      name: "Mr. Rakesh Sharma",
                      position: "Hindi Teacher",
                      qualification: "M.A. Hindi, B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rakesh+Sharma",
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
                      name: "Dr. Alok Mehta",
                      position: "Head of Humanities Department",
                      qualification: "Ph.D. History, M.A., B.Ed.",
                      experience: "22 years",
                      image: "/placeholder.svg?height=400&width=400&text=Alok+Mehta",
                    },
                    {
                      name: "Mrs. Nisha Kapoor",
                      position: "Senior History Teacher",
                      qualification: "M.A. History, B.Ed.",
                      experience: "18 years",
                      image: "/placeholder.svg?height=400&width=400&text=Nisha+Kapoor",
                    },
                    {
                      name: "Mr. Vijay Joshi",
                      position: "Geography Teacher",
                      qualification: "M.A. Geography, B.Ed.",
                      experience: "15 years",
                      image: "/placeholder.svg?height=400&width=400&text=Vijay+Joshi",
                    },
                    {
                      name: "Ms. Meera Singh",
                      position: "Political Science Teacher",
                      qualification: "M.A. Political Science, B.Ed.",
                      experience: "12 years",
                      image: "/placeholder.svg?height=400&width=400&text=Meera+Singh",
                    },
                    {
                      name: "Mr. Rohit Sharma",
                      position: "Economics Teacher",
                      qualification: "M.A. Economics, B.Ed.",
                      experience: "10 years",
                      image: "/placeholder.svg?height=400&width=400&text=Rohit+Sharma",
                    },
                    {
                      name: "Ms. Suman Rani",
                      position: "Sociology Teacher",
                      qualification: "M.A. Sociology, B.Ed.",
                      experience: "8 years",
                      image: "/placeholder.svg?height=400&width=400&text=Suman+Rani",
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

      {/* Faculty Development */}
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

      {/* Join Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
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
            <Card className="border-none shadow-md">
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
                        <Button className="bg-amber-600 hover:bg-amber-700">Apply Now</Button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">English Teacher (Middle School)</h4>
                        <p className="text-gray-700 mb-4">
                          We are seeking a dynamic English teacher for Classes VI to VIII who can inspire students and
                          foster a love for language and literature.
                        </p>
                        <Button className="bg-amber-600 hover:bg-amber-700">Apply Now</Button>
                      </div>
                      <div className="p-4 border border-gray-200 rounded-lg">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Computer Science Teacher</h4>
                        <p className="text-gray-700 mb-4">
                          We are looking for a Computer Science teacher with knowledge of programming languages and
                          modern technology to teach Classes IX to XII.
                        </p>
                        <Button className="bg-amber-600 hover:bg-amber-700">Apply Now</Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why Join Us?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Professional Growth</h4>
                          <p className="text-gray-700">
                            Regular training and development opportunities to enhance your teaching skills.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Collaborative Environment</h4>
                          <p className="text-gray-700">
                            Work with a team of dedicated educators who are passionate about teaching.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-amber-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Modern Infrastructure</h4>
                          <p className="text-gray-700">Access to state-of-the-art facilities and teaching resources.</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-amber-100 p-2 rounded-full mr-3 mt-1">
                          <GraduationCap className="h-5 w-5 text-amber-600" />
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
                      <Button className="w-full bg-amber-600 hover:bg-amber-700">View All Openings</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Connect With Our Faculty</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Have questions for our teachers? Schedule a meeting or reach out to learn more about our academic
              programs.
            </p>
            <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
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
      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
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
            <p className="text-amber-600 font-medium text-center">{teacher.position}</p>
          </div>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-start">
              <GraduationCap className="h-5 w-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>{teacher.qualification}</p>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>email@shantipeethschool.edu</p>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-amber-600 mr-2 mt-1 flex-shrink-0" />
              <p>Experience: {teacher.experience}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

