"use client"

import { motion } from "framer-motion"
import { BookOpen, GraduationCap, Award, Lightbulb } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function ShantipeethAcademics() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Academic Excellence</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Discover our comprehensive curriculum, teaching methodology, and academic programs designed to nurture
                intellectual growth and critical thinking.
              </p>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Curriculum</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A balanced approach to education that fosters academic excellence, critical thinking, and character
              development
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
                          <Button className="bg-amber-600 hover:bg-amber-700">Download Primary Curriculum</Button>
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
                          <Button className="bg-amber-600 hover:bg-amber-700">Download Middle School Curriculum</Button>
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
                          <Button className="bg-amber-600 hover:bg-amber-700">Download Secondary Curriculum</Button>
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
                          <Button className="bg-amber-600 hover:bg-amber-700">Download Sr. Secondary Curriculum</Button>
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

      {/* Teaching Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative approaches that make learning engaging, effective, and enjoyable
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BookOpen className="h-10 w-10 text-amber-600" />,
                title: "Experiential Learning",
                description:
                  "We believe in learning by doing. Our hands-on approach helps students understand concepts through practical application and real-world experiences.",
              },
              {
                icon: <GraduationCap className="h-10 w-10 text-amber-600" />,
                title: "Personalized Attention",
                description:
                  "With optimal student-teacher ratios, we ensure that each student receives individual attention and guidance tailored to their learning style and needs.",
              },
              {
                icon: <Lightbulb className="h-10 w-10 text-amber-600" />,
                title: "Inquiry-Based Learning",
                description:
                  "We encourage students to ask questions, explore concepts, and discover answers through guided inquiry, fostering critical thinking and problem-solving skills.",
              },
              {
                icon: <Award className="h-10 w-10 text-amber-600" />,
                title: "Technology Integration",
                description:
                  "Our classrooms are equipped with modern technology to enhance learning experiences and prepare students for the digital age.",
              },
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center">{method.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-700">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Academic Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating the success of our students in academics and beyond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Board Examination Results</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Class 10 Results (2023)</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>100% pass percentage</li>
                        <li>85% students scored above 80%</li>
                        <li>School topper: Riya Patel (98.6%)</li>
                        <li>15 students scored perfect 100 in Mathematics</li>
                        <li>12 students scored perfect 100 in Science</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Class 12 Results (2023)</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>100% pass percentage</li>
                        <li>80% students scored above 80%</li>
                        <li>Science stream topper: Arjun Singh (97.8%)</li>
                        <li>Commerce stream topper: Neha Gupta (98.2%)</li>
                        <li>Humanities stream topper: Vikram Sharma (96.4%)</li>
                        <li>10 students scored perfect 100 in various subjects</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Competitive Examinations</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">National & International Olympiads</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>5 Gold medals in International Mathematics Olympiad</li>
                        <li>3 Silver medals in International Science Olympiad</li>
                        <li>7 students qualified for the second level of National Science Olympiad</li>
                        <li>10 students received distinction in National English Olympiad</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Entrance Examinations</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>15 students qualified JEE Mains</li>
                        <li>8 students qualified NEET</li>
                        <li>5 students secured admission in top NLUs through CLAT</li>
                        <li>12 students qualified for various state-level engineering entrance exams</li>
                        <li>3 students received scholarships for undergraduate studies abroad</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-amber-600 hover:bg-amber-700">View All Academic Achievements</Button>
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
            <h2 className="text-3xl font-bold mb-4">Join Our Academic Excellence Journey</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover how our comprehensive curriculum and innovative teaching methods can help your child excel
              academically and develop holistically.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

