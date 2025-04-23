"use client"

import { motion } from "framer-motion"
import { BookOpen, Download } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"

export default function ShantipeethCurriculum() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-amber-500 to-orange-700 h-[50vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
            style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
          ></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium text-white mb-4">Our Curriculum</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Our Curriculum</h1>
              <div className="w-20 h-1.5 bg-white rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-light">
              A balanced approach to education that fosters academic excellence, critical thinking, and character development
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curriculum is designed to provide a holistic education that prepares students for academic success and
              life beyond school
            </p>
          </motion.div>

          <Tabs defaultValue="primary" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="primary">Primary (Classes 1-5)</TabsTrigger>
                <TabsTrigger value="middle">Middle (Classes 6-8)</TabsTrigger>
                <TabsTrigger value="secondary">Secondary (Classes 9-10)</TabsTrigger>
                <TabsTrigger value="senior">Senior Secondary (Classes 11-12)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="primary">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Primary Education</h3>
                        <p className="text-gray-700 mb-4">
                          Our primary education program focuses on building a strong foundation in core subjects while
                          nurturing curiosity and creativity. We employ activity-based learning methods to make
                          education engaging and effective.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The curriculum is designed to develop fundamental skills in language, mathematics, science,
                          and social studies, complemented by art, music, physical education, and value education.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Core Subjects</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>English Language & Literature</li>
                          <li>Hindi Language & Literature</li>
                          <li>Mathematics</li>
                          <li>Environmental Studies</li>
                          <li>General Knowledge</li>
                          <li>Computer Science</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Primary+Education"
                          alt="Primary Education"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <h4 className="text-xl font-medium text-gray-900 mb-3">Co-Curricular Activities</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Art & Craft</li>
                          <li>Music & Dance</li>
                          <li>Physical Education & Sports</li>
                          <li>Yoga & Meditation</li>
                          <li>Value Education</li>
                          <li>Library Sessions</li>
                        </ul>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Primary Curriculum
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="middle">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Middle School Education</h3>
                        <p className="text-gray-700 mb-4">
                          Our middle school program builds on the foundation laid in primary classes, introducing more
                          complex concepts and encouraging analytical thinking. Students are guided to develop
                          independent study habits and research skills.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The curriculum expands to include specialized subjects and provides opportunities for students
                          to explore their interests and aptitudes through various academic and co-curricular
                          activities.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Core Subjects</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>English Language & Literature</li>
                          <li>Hindi Language & Literature</li>
                          <li>Mathematics</li>
                          <li>Science</li>
                          <li>Social Science</li>
                          <li>Computer Science</li>
                          <li>Third Language (Sanskrit/French)</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Middle+School+Education"
                          alt="Middle School Education"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <h4 className="text-xl font-medium text-gray-900 mb-3">Co-Curricular Activities</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Literary Activities (Debates, Elocution)</li>
                          <li>Visual & Performing Arts</li>
                          <li>Sports & Athletics</li>
                          <li>Science & Math Clubs</li>
                          <li>Community Service</li>
                          <li>Environmental Awareness Programs</li>
                        </ul>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Middle School Curriculum
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="secondary">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Secondary Education</h3>
                        <p className="text-gray-700 mb-4">
                          Our secondary education program prepares students for the board examinations while fostering a
                          deeper understanding of subjects and their real-world applications. The curriculum is aligned
                          with the CBSE guidelines.
                        </p>
                        <p className="text-gray-700 mb-4">
                          We emphasize conceptual clarity, problem-solving skills, and exam preparation through regular
                          assessments, practice tests, and personalized guidance.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Core Subjects</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>English Language & Literature</li>
                          <li>Hindi Course A/B</li>
                          <li>Mathematics</li>
                          <li>Science (Physics, Chemistry, Biology)</li>
                          <li>Social Science (History, Geography, Civics, Economics)</li>
                          <li>Information Technology</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Secondary+Education"
                          alt="Secondary Education"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <h4 className="text-xl font-medium text-gray-900 mb-3">Additional Features</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Career Counseling</li>
                          <li>Specialized Subject Workshops</li>
                          <li>Educational Excursions</li>
                          <li>Olympiad & Competitive Exam Preparation</li>
                          <li>Leadership Development Programs</li>
                          <li>Life Skills Education</li>
                        </ul>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Secondary Curriculum
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="senior">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Senior Secondary Education</h3>
                        <p className="text-gray-700 mb-4">
                          Our senior secondary program offers specialized streams to help students prepare for higher
                          education and future careers. The curriculum is rigorous and comprehensive, designed to meet
                          the requirements of various competitive examinations.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Students can choose from Science, Commerce, and Humanities streams, each offering a range of
                          elective subjects to align with their interests and career aspirations.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Streams Offered</h4>
                        <ul className="list-disc pl-5 space-y-4 text-gray-700">
                          <li>
                            <strong>Science Stream:</strong> Physics, Chemistry, Mathematics, Biology, Computer Science
                          </li>
                          <li>
                            <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics,
                            Informatics Practices
                          </li>
                          <li>
                            <strong>Humanities Stream:</strong> History, Geography, Political Science, Economics,
                            Psychology, Sociology
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Senior+Secondary+Education"
                          alt="Senior Secondary Education"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <h4 className="text-xl font-medium text-gray-900 mb-3">Additional Features</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Specialized Career Counseling</li>
                          <li>Entrance Exam Preparation</li>
                          <li>Industry Exposure & Internships</li>
                          <li>College Application Guidance</li>
                          <li>Personality Development Programs</li>
                          <li>Leadership & Entrepreneurship Workshops</li>
                        </ul>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Sr. Secondary Curriculum
                          </Button>
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

      {/* Curriculum Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Curriculum Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in a balanced approach that nurtures intellectual, physical, emotional, and social development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Holistic Development",
                description:
                  "Our curriculum goes beyond academics to foster physical, emotional, social, and ethical development, creating well-rounded individuals ready for life's challenges.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Global Perspective",
                description:
                  "We integrate international educational practices while maintaining cultural roots, preparing students to thrive in an increasingly interconnected world.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Skill-Based Learning",
                description:
                  "Beyond theoretical knowledge, we emphasize practical skills, critical thinking, problem-solving, and creativity essential for future success.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Personalized Approach",
                description:
                  "We recognize each student's unique learning style and pace, providing differentiated instruction to help every child reach their full potential.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Technology Integration",
                description:
                  "Our curriculum incorporates digital literacy and technology tools, preparing students for the demands of the 21st-century workforce.",
              },
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Value-Based Education",
                description:
                  "We weave ethical values and character development throughout our curriculum, nurturing responsible, compassionate, and principled individuals.",
              },
            ].map((philosophy, index) => (
              <motion.div
                key={philosophy.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center">{philosophy.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{philosophy.title}</h3>
                    <p className="text-gray-700">{philosophy.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">Experience Our Curriculum</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover how our comprehensive curriculum can help your child excel academically and develop holistically.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Download Curriculum Guide
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
