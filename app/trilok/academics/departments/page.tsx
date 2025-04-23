"use client"

import { motion } from "framer-motion"
import { BookOpen, Beaker, Calculator, Globe, Palette, Dumbbell, Laptop, Users, Award } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Separator } from "../../../components/ui/separator"
import { Button } from "../../../components/ui/button"

export default function TrilokDepartments() {
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
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Academic Excellence</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Academic Departments</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Specialized departments led by expert faculty dedicated to excellence in every discipline
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

      {/* Overview Section - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
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
              Each department at Trilok Vidhya Vihar is staffed with qualified educators who are experts in their fields
              and passionate about teaching
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-white" />,
                title: "Languages",
                description: "English, Hindi, Sanskrit, and Foreign Languages",
              },
              {
                icon: <Beaker className="h-10 w-10 text-white" />,
                title: "Sciences",
                description: "Physics, Chemistry, Biology, and Environmental Science",
              },
              {
                icon: <Calculator className="h-10 w-10 text-white" />,
                title: "Mathematics",
                description: "Algebra, Geometry, Calculus, and Statistics",
              },
              {
                icon: <Globe className="h-10 w-10 text-white" />,
                title: "Social Sciences",
                description: "History, Geography, Political Science, and Economics",
              },
              {
                icon: <Laptop className="h-10 w-10 text-white" />,
                title: "Computer Science",
                description: "Programming, Digital Literacy, and Information Technology",
              },
              {
                icon: <Palette className="h-10 w-10 text-white" />,
                title: "Arts & Music",
                description: "Visual Arts, Performing Arts, and Music Education",
              },
              {
                icon: <Dumbbell className="h-10 w-10 text-white" />,
                title: "Physical Education",
                description: "Sports, Fitness, Health, and Wellness",
              },
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Counseling & Guidance",
                description: "Academic Advising, Career Guidance, and Student Support",
              },
            ].map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {department.icon}
                    </div>
                  </div>
                  <CardContent className="p-6 text-center mt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">{department.title}</h3>
                    <p className="text-gray-600">{department.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Department Details - Enhanced */}
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Explore Departments</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Department Details</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our academic departments, their focus areas, and special initiatives
            </p>
          </motion.div>

          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger value="languages" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Languages
              </TabsTrigger>
              <TabsTrigger value="sciences" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Sciences
              </TabsTrigger>
              <TabsTrigger value="mathematics" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Mathematics
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Social Sciences
              </TabsTrigger>
            </TabsList>
            <TabsContent value="languages">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-emerald-500"></div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                            <BookOpen className="h-5 w-5 text-emerald-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Languages Department</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our Languages Department is dedicated to developing strong communication skills, cultural
                          awareness, and a love for literature. We offer comprehensive language education in English,
                          Hindi, Sanskrit, and foreign languages.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Focus Areas</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Reading comprehension and critical analysis</li>
                              <li>Creative and academic writing</li>
                              <li>Public speaking and debate</li>
                              <li>Grammar and language structure</li>
                              <li>Literature appreciation</li>
                              <li>Cultural context and history</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Languages Offered</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>English (Primary language of instruction)</li>
                              <li>Hindi (Second language)</li>
                              <li>Sanskrit (Classical language)</li>
                              <li>French (Foreign language option)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Special Programs</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Annual Literary Festival</li>
                            <li>Creative Writing Club</li>
                            <li>Debate and Public Speaking Society</li>
                            <li>Language Exchange Programs</li>
                            <li>Book Club and Reading Challenges</li>
                            <li>Poetry and Storytelling Competitions</li>
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Department Achievements</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>National-level debate competition winners (2023)</li>
                            <li>Published student anthology of creative writing</li>
                            <li>Host of Regional Language Olympiad</li>
                            <li>Partnership with international language institutes</li>
                            <li>Student exchange programs with schools abroad</li>
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Department Head</h4>
                          </div>
                          <p className="text-gray-700">
                            <strong>Dr. Meera Sharma</strong>
                            <br />
                            Ph.D. in English Literature
                            <br />
                            20+ years of teaching experience
                            <br />
                            Author of multiple textbooks on language education
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="sciences">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-teal-500"></div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                            <Beaker className="h-5 w-5 text-teal-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Sciences Department</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our Sciences Department fosters scientific inquiry, critical thinking, and a deep
                          understanding of the natural world. We provide hands-on learning experiences in
                          state-of-the-art laboratories.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-teal-700 mb-2">Subject Areas</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Physics: Mechanics, Electricity, Optics, Modern Physics</li>
                              <li>Chemistry: Organic, Inorganic, Physical Chemistry</li>
                              <li>Biology: Botany, Zoology, Human Physiology, Genetics</li>
                              <li>Environmental Science: Ecology, Conservation, Sustainability</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-teal-700 mb-2">Laboratory Facilities</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Physics Lab with advanced equipment</li>
                              <li>Chemistry Lab with modern analytical instruments</li>
                              <li>Biology Lab with microscopes and specimens</li>
                              <li>Environmental Science Field Station</li>
                              <li>STEM Innovation Lab</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Special Programs</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Annual Science Fair</li>
                            <li>Science Olympiad Training</li>
                            <li>Research Mentorship Program</li>
                            <li>Field Studies and Nature Expeditions</li>
                            <li>Science Club and Innovation Challenges</li>
                            <li>Guest Lectures by Scientists and Researchers</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Department Achievements</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>State Science Olympiad winners (2022, 2023)</li>
                            <li>National-level science project recognition</li>
                            <li>Student research published in youth science journals</li>
                            <li>Collaboration with regional science centers</li>
                            <li>Environmental conservation initiatives</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Department Head</h4>
                          </div>
                          <p className="text-gray-700">
                            <strong>Dr. Rajesh Verma</strong>
                            <br />
                            Ph.D. in Physics
                            <br />
                            Former research scientist
                            <br />
                            15+ years of teaching experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="mathematics">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-emerald-500"></div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                            <Calculator className="h-5 w-5 text-emerald-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Mathematics Department</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our Mathematics Department develops strong analytical thinking, problem-solving skills, and
                          mathematical reasoning. We make mathematics engaging and relevant through innovative teaching
                          methods.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Subject Areas</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Arithmetic and Number Theory</li>
                              <li>Algebra and Functions</li>
                              <li>Geometry and Trigonometry</li>
                              <li>Calculus and Analysis</li>
                              <li>Statistics and Probability</li>
                              <li>Discrete Mathematics</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Teaching Approach</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Conceptual understanding over rote memorization</li>
                              <li>Problem-based learning</li>
                              <li>Real-world applications</li>
                              <li>Visual and manipulative learning</li>
                              <li>Technology integration</li>
                              <li>Differentiated instruction</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Special Programs</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Mathematics Olympiad Training</li>
                            <li>Math Club and Problem-Solving Workshops</li>
                            <li>Annual Mathematics Competition</li>
                            <li>Math Lab with manipulatives and models</li>
                            <li>Vedic Mathematics Classes</li>
                            <li>Peer Tutoring Program</li>
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Department Achievements</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Regional Mathematics Olympiad qualifiers</li>
                            <li>State-level mathematics competition winners</li>
                            <li>Innovative mathematics teaching award</li>
                            <li>Development of mathematics learning resources</li>
                            <li>High success rate in competitive examinations</li>
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Department Head</h4>
                          </div>
                          <p className="text-gray-700">
                            <strong>Prof. Anand Joshi</strong>
                            <br />
                            M.Sc. in Mathematics
                            <br />
                            Certified mathematics education specialist
                            <br />
                            18+ years of teaching experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="social">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-teal-500"></div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                            <Globe className="h-5 w-5 text-teal-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Social Sciences Department</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our Social Sciences Department cultivates an understanding of human societies, cultures, and
                          systems. We encourage critical thinking about historical and contemporary issues.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-teal-700 mb-2">Subject Areas</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>History: Ancient, Medieval, Modern, World History</li>
                              <li>Geography: Physical, Human, Environmental Geography</li>
                              <li>Political Science: Governance, Civics, International Relations</li>
                              <li>Economics: Micro, Macro, Indian Economy</li>
                              <li>Sociology: Social Structures, Institutions, Change</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-teal-700 mb-2">Teaching Approach</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Source-based learning</li>
                              <li>Case studies and simulations</li>
                              <li>Debates and discussions</li>
                              <li>Project-based learning</li>
                              <li>Field trips and site visits</li>
                              <li>Current events analysis</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Special Programs</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Model United Nations</li>
                            <li>Heritage Club and Historical Research</li>
                            <li>Social Science Exhibition</li>
                            <li>Economic Forum and Business Studies</li>
                            <li>Geography Field Studies</li>
                            <li>Civic Engagement Projects</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Department Achievements</h4>
                          </div>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Best delegation award at regional MUN</li>
                            <li>Heritage conservation project recognition</li>
                            <li>Social science research competition winners</li>
                            <li>Community mapping initiative</li>
                            <li>Student-led social awareness campaigns</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Users className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Department Head</h4>
                          </div>
                          <p className="text-gray-700">
                            <strong>Dr. Priya Sharma</strong>
                            <br />
                            Ph.D. in History
                            <br />
                            Author of history textbooks
                            <br />
                            22+ years of teaching experience
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Faculty Spotlight - Enhanced */}
      <section className="py-20">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Meet Our Faculty</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Faculty Spotlight</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our distinguished faculty members who lead our academic departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Meera Sharma",
                position: "Head of Languages Department",
                education: "Ph.D. in English Literature",
                experience: "20+ years of teaching experience",
                achievements: "Author of multiple textbooks on language education",
                quote:
                  "Language is the foundation of all learning and the key to understanding our world and each other.",
              },
              {
                name: "Dr. Rajesh Verma",
                position: "Head of Sciences Department",
                education: "Ph.D. in Physics",
                experience: "Former research scientist with 15+ years of teaching",
                achievements: "Led student teams to national science competitions",
                quote:
                  "Science education should inspire curiosity and develop critical thinking skills for solving real-world problems.",
              },
              {
                name: "Prof. Anand Joshi",
                position: "Head of Mathematics Department",
                education: "M.Sc. in Mathematics",
                experience: "18+ years of teaching experience",
                achievements: "Certified mathematics education specialist",
                quote:
                  "Mathematics is not just about numbers, but about patterns, logic, and problem-solving that applies to all aspects of life.",
              },
              {
                name: "Dr. Priya Sharma",
                position: "Head of Social Sciences Department",
                education: "Ph.D. in History",
                experience: "22+ years of teaching experience",
                achievements: "Author of history textbooks",
                quote:
                  "Understanding our past and present social systems helps students become informed, engaged citizens of tomorrow.",
              },
              {
                name: "Mr. Vikram Singh",
                position: "Head of Computer Science Department",
                education: "M.Tech in Computer Science",
                experience: "Former software engineer with 12+ years teaching",
                achievements: "Developed innovative coding curriculum",
                quote:
                  "In today's digital world, computer literacy and computational thinking are essential skills for every student.",
              },
              {
                name: "Ms. Sunita Patel",
                position: "Head of Arts Department",
                education: "MFA in Fine Arts",
                experience: "15+ years of teaching experience",
                achievements: "Exhibited artist and arts integration specialist",
                quote:
                  "Arts education develops creativity, expression, and perspective-taking that enriches all areas of learning.",
              },
            ].map((faculty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 text-2xl font-bold">
                        {faculty.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 text-center">{faculty.name}</h3>
                    <p className="text-emerald-600 font-medium mb-3 text-center">{faculty.position}</p>
                    <Separator className="my-3" />
                    <div className="space-y-2 mb-4">
                      <p className="text-gray-700">
                        <span className="font-medium">Education:</span> {faculty.education}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Experience:</span> {faculty.experience}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-medium">Achievements:</span> {faculty.achievements}
                      </p>
                    </div>
                    <div className="bg-emerald-50 p-3 rounded-lg italic text-gray-700">"{faculty.quote}"</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interdisciplinary Initiatives - Enhanced */}
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Collaborative Projects</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Interdisciplinary Initiatives</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our departments collaborate on cross-disciplinary projects that integrate multiple subject areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Environmental Sustainability Project",
                departments: "Sciences, Social Sciences, Languages",
                description:
                  "A comprehensive project where students research environmental issues, develop solutions, create awareness campaigns, and implement conservation initiatives on campus and in the community.",
              },
              {
                title: "Digital Storytelling Initiative",
                departments: "Languages, Computer Science, Arts",
                description:
                  "Students create multimedia narratives combining creative writing, digital design, coding, and visual arts to tell compelling stories about cultural heritage, scientific discoveries, or social issues.",
              },
              {
                title: "Mathematical Art and Architecture",
                departments: "Mathematics, Arts, History",
                description:
                  "Exploring the intersection of mathematics and art through geometric patterns, golden ratio, fractals, and architectural design from different historical periods and cultures.",
              },
              {
                title: "Science Communication Challenge",
                departments: "Sciences, Languages, Computer Science",
                description:
                  "Students develop skills in communicating complex scientific concepts through various media including articles, presentations, videos, and interactive digital platforms.",
              },
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{initiative.title}</h3>
                    <p className="text-emerald-600 font-medium mb-4">Departments: {initiative.departments}</p>
                    <p className="text-gray-700">{initiative.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Enhanced */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Faculty</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Schedule a visit to meet our dedicated faculty members and learn more about our academic departments
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-md hover:bg-white/90 transition-colors">
                Schedule a Visit
              </Button>
              <Button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                View Faculty Directory
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}