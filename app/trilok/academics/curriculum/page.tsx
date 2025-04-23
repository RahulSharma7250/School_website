"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Award, Clock, Calendar, Users, Lightbulb, Brain, Zap, Compass } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Separator } from "../../../components/ui/separator"
import { Button } from "../../../components/ui/button"

export default function TrilokCurriculum() {
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
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Academic Framework</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Our Curriculum</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Comprehensive, holistic education designed to nurture future leaders and innovators
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Educational Philosophy</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Curriculum Overview</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide a balanced education that develops academic excellence, critical
              thinking, creativity, and character
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-white" />,
                title: "Comprehensive Learning",
                description:
                  "Our curriculum covers all essential subjects while integrating practical skills and real-world applications.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-white" />,
                title: "Academic Excellence",
                description:
                  "We maintain high academic standards aligned with national and international educational frameworks.",
              },
              {
                icon: <Users className="h-10 w-10 text-white" />,
                title: "Holistic Development",
                description:
                  "Beyond academics, we focus on physical education, arts, values, and social-emotional learning.",
              },
            ].map((feature, index) => (
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

      {/* Curriculum by Level - Enhanced */}
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Stage-Appropriate Learning</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Curriculum by Level</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is tailored to meet the developmental needs of students at each educational stage
            </p>
          </motion.div>

          <Tabs defaultValue="primary" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger value="primary" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Primary School (Grades 1-5)
              </TabsTrigger>
              <TabsTrigger value="middle" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Middle School (Grades 6-8)
              </TabsTrigger>
              <TabsTrigger value="secondary" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                Secondary School (Grades 9-12)
              </TabsTrigger>
            </TabsList>
            <TabsContent value="primary">
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
                            <GraduationCap className="h-5 w-5 text-emerald-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Primary School Curriculum</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our primary school curriculum focuses on building strong foundations in core subjects while
                          nurturing curiosity and a love for learning. We emphasize hands-on activities, play-based
                          learning, and developing essential life skills.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Core Subjects</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Language Arts (English and Hindi)</li>
                              <li>Mathematics</li>
                              <li>Environmental Studies</li>
                              <li>General Knowledge</li>
                              <li>Computer Science</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Co-Curricular Activities</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Art and Craft</li>
                              <li>Music and Dance</li>
                              <li>Physical Education</li>
                              <li>Library Sessions</li>
                              <li>Outdoor Learning</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Brain className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Teaching Approach</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            Our primary school teaching methodology is centered around:
                          </p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Activity-based learning</li>
                            <li>Thematic instruction</li>
                            <li>Storytelling and role play</li>
                            <li>Collaborative projects</li>
                            <li>Regular field trips</li>
                            <li>Personalized attention</li>
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Assessment Approach</h4>
                          </div>
                          <p className="text-gray-700 mb-4">
                            We follow a continuous and comprehensive evaluation system that includes:
                          </p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Regular formative assessments</li>
                            <li>Project-based evaluations</li>
                            <li>Observation-based assessment</li>
                            <li>Portfolio development</li>
                            <li>Parent-teacher conferences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="middle">
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
                            <BookOpen className="h-5 w-5 text-teal-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Middle School Curriculum</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our middle school curriculum builds on the primary foundation while introducing more complex
                          concepts and specialized subjects. We focus on developing critical thinking, research skills,
                          and independent learning habits.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-teal-700 mb-2">Core Subjects</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>English Language and Literature</li>
                              <li>Hindi Language and Literature</li>
                              <li>Mathematics</li>
                              <li>Science (Physics, Chemistry, Biology)</li>
                              <li>Social Studies (History, Geography, Civics)</li>
                              <li>Computer Science</li>
                              <li>Third Language (Sanskrit/French)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-teal-700 mb-2">Co-Curricular Activities</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Visual and Performing Arts</li>
                              <li>Sports and Physical Education</li>
                              <li>Debate and Public Speaking</li>
                              <li>Environmental Studies</li>
                              <li>Community Service</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Lightbulb className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Teaching Approach</h4>
                          </div>
                          <p className="text-gray-700 mb-4">Our middle school teaching methodology emphasizes:</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Inquiry-based learning</li>
                            <li>Collaborative projects</li>
                            <li>Research assignments</li>
                            <li>Debates and discussions</li>
                            <li>Laboratory experiments</li>
                            <li>Field studies</li>
                            <li>Digital literacy</li>
                          </ul>
                        </div>
                        <div className="bg-teal-50 p-6 rounded-lg border border-teal-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-teal-600 mr-2" />
                            <h4 className="text-lg font-semibold text-teal-700">Assessment Approach</h4>
                          </div>
                          <p className="text-gray-700 mb-4">Our assessment system for middle school includes:</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Periodic tests and quizzes</li>
                            <li>Term examinations</li>
                            <li>Project evaluations</li>
                            <li>Laboratory assessments</li>
                            <li>Oral presentations</li>
                            <li>Peer and self-assessment</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
            <TabsContent value="secondary">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="border-none shadow-lg overflow-hidden">
                  <div className="h-2 bg-emerald-600"></div>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <div className="flex items-center mb-6">
                          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                            <Award className="h-5 w-5 text-emerald-600" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">Secondary School Curriculum</h3>
                        </div>
                        <p className="text-gray-700 mb-6 text-lg">
                          Our secondary school curriculum follows the CBSE framework, preparing students for board
                          examinations while developing higher-order thinking skills, specialized knowledge, and career
                          readiness.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Streams Offered</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Science (Physics, Chemistry, Biology/Mathematics)</li>
                              <li>Commerce (Accountancy, Business Studies, Economics)</li>
                              <li>Humanities (History, Geography, Political Science, Economics)</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Common Subjects</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>English Language and Literature</li>
                              <li>Hindi/Sanskrit</li>
                              <li>Physical Education</li>
                              <li>Environmental Studies</li>
                              <li>Computer Applications</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-700 mb-2">Co-Curricular Activities</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                              <li>Career Counseling</li>
                              <li>Competitive Exam Preparation</li>
                              <li>Leadership Programs</li>
                              <li>Sports and Athletics</li>
                              <li>Cultural Activities</li>
                              <li>Community Service</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Brain className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Teaching Approach</h4>
                          </div>
                          <p className="text-gray-700 mb-4">Our secondary school teaching methodology focuses on:</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Conceptual understanding</li>
                            <li>Application-based learning</li>
                            <li>Problem-solving skills</li>
                            <li>Critical analysis</li>
                            <li>Research projects</li>
                            <li>Practical experiments</li>
                            <li>Case studies</li>
                            <li>Interdisciplinary approaches</li>
                          </ul>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100 shadow-sm">
                          <div className="flex items-center mb-3">
                            <Award className="h-5 w-5 text-emerald-600 mr-2" />
                            <h4 className="text-lg font-semibold text-emerald-700">Assessment Approach</h4>
                          </div>
                          <p className="text-gray-700 mb-4">Our assessment system for secondary school includes:</p>
                          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                            <li>Unit tests and periodic assessments</li>
                            <li>Pre-board examinations</li>
                            <li>Board examination preparation</li>
                            <li>Practical examinations</li>
                            <li>Project evaluations</li>
                            <li>Mock tests for competitive exams</li>
                          </ul>
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

      {/* Special Programs - Enhanced */}
      <section className="py-20">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Beyond Basics</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Special Programs</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond the standard curriculum, we offer specialized programs to enrich the educational experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "STEM Education",
                description:
                  "Our integrated Science, Technology, Engineering, and Mathematics program encourages innovation and problem-solving through hands-on projects and experiments.",
                icon: <Zap className="h-8 w-8 text-white" />,
                color: "from-blue-500 to-indigo-600"
              },
              {
                title: "Language Enrichment",
                description:
                  "Advanced language programs including creative writing, public speaking, debating, and language competitions to develop strong communication skills.",
                icon: <BookOpen className="h-8 w-8 text-white" />,
                color: "from-emerald-500 to-teal-600"
              },
              {
                title: "Life Skills Program",
                description:
                  "Comprehensive program teaching essential life skills including financial literacy, digital citizenship, emotional intelligence, and leadership.",
                icon: <Users className="h-8 w-8 text-white" />,
                color: "from-amber-500 to-orange-600"
              },
              {
                title: "Environmental Education",
                description:
                  "Hands-on program focusing on sustainability, conservation, and environmental stewardship through projects, field trips, and community initiatives.",
                icon: <Compass className="h-8 w-8 text-white" />,
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Arts Integration",
                description:
                  "Program that integrates visual arts, music, dance, and drama into academic subjects to enhance creativity and provide multiple learning pathways.",
                icon: <Lightbulb className="h-8 w-8 text-white" />,
                color: "from-purple-500 to-indigo-600"
              },
              {
                title: "Global Citizenship",
                description:
                  "Program designed to develop cultural awareness, global perspectives, and social responsibility through international collaborations and projects.",
                icon: <Compass className="h-8 w-8 text-white" />,
                color: "from-teal-500 to-cyan-600"
              },
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className={`bg-gradient-to-r ${program.color} p-6 flex justify-center`}>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                      {program.icon}
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{program.title}</h3>
                    <p className="text-gray-700">{program.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology - Enhanced */}
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
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Innovative Approaches</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our Teaching Methodology</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ innovative teaching approaches that engage students and make learning meaningful and enjoyable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Key Pedagogical Approaches</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Experiential Learning</h4>
                    <p className="text-gray-700">
                      We believe in learning by doing. Our curriculum incorporates hands-on activities, experiments, and
                      real-world applications that allow students to experience concepts firsthand.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Inquiry-Based Learning</h4>
                    <p className="text-gray-700">
                      We encourage students to ask questions, investigate problems, and discover solutions. This
                      approach develops critical thinking, research skills, and a deeper understanding of concepts.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Differentiated Instruction</h4>
                    <p className="text-gray-700">
                      We recognize that each student has unique learning styles, strengths, and needs. Our teachers
                      adapt their teaching methods to accommodate diverse learners and ensure every student succeeds.
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Collaborative Learning</h4>
                    <p className="text-gray-700">
                      We create opportunities for students to work together on projects, solve problems, and learn from
                      each other. This develops teamwork, communication, and social skills.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                    <Lightbulb className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Technology Integration</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  We integrate technology throughout our curriculum to enhance learning, develop digital literacy, and
                  prepare students for the future. Our technology integration includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Smart Classrooms</h4>
                    <p className="text-gray-700">
                      Interactive whiteboards, projectors, and digital resources that make learning engaging and visual.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Digital Learning Platforms</h4>
                    <p className="text-gray-700">
                      Online resources, educational apps, and learning management systems that support personalized
                      learning.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Computer Labs</h4>
                    <p className="text-gray-700">
                      Well-equipped labs where students learn programming, digital design, and other computer skills.
                    </p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-emerald-700 mb-2">Digital Literacy</h4>
                    <p className="text-gray-700">
                      Curriculum that teaches responsible technology use, online safety, and critical evaluation of
                      digital information.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Experience Our Curriculum in Action</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Visit our campus to see how our innovative curriculum and teaching methods create an engaging learning
              environment for all students.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-6 py-3 bg-white text-emerald-700 font-medium rounded-md hover:bg-white/90 transition-colors">
                Schedule a Visit
              </Button>
              <Button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Download Curriculum Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}