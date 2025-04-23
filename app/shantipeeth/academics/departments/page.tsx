"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, GraduationCap, Microscope, Calculator, Globe, Music, Dumbbell, Download } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Button } from "../../../components/ui/button"

export default function ShantipeethDepartments() {
  const departments = [
    {
      id: "languages",
      name: "Languages",
      icon: <BookOpen className="h-10 w-10 text-amber-600" />,
      description:
        "Our Languages department offers comprehensive instruction in Hindi, English, and Sanskrit, focusing on developing strong communication skills, literary appreciation, and cultural understanding.",
      faculty: [
        { name: "Dr. Ramesh Sharma", position: "Head of Department", specialization: "Hindi Literature" },
        { name: "Mrs. Priya Patel", position: "Senior Teacher", specialization: "English Language & Literature" },
        { name: "Mr. Sunil Joshi", position: "Teacher", specialization: "Sanskrit" },
        { name: "Ms. Deepika Singh", position: "Teacher", specialization: "English & Communication Skills" },
      ],
      courses: [
        "Hindi Language and Literature",
        "English Language and Literature",
        "Sanskrit",
        "Communication Skills",
        "Creative Writing",
      ],
      achievements: [
        "100% pass rate in board examinations for the past 5 years",
        "Students consistently scoring in the top percentile in language subjects",
        "Annual publication of student literary magazine 'Abhivyakti'",
        "Winners of the Regional Debate Competition 2023",
      ],
    },
    {
      id: "mathematics",
      name: "Mathematics",
      icon: <Calculator className="h-10 w-10 text-amber-600" />,
      description:
        "The Mathematics department provides a strong foundation in mathematical concepts, problem-solving skills, and logical reasoning, preparing students for advanced studies and competitive examinations.",
      faculty: [
        { name: "Mr. Vikram Agarwal", position: "Head of Department", specialization: "Pure Mathematics" },
        { name: "Mrs. Sunita Gupta", position: "Senior Teacher", specialization: "Applied Mathematics" },
        { name: "Mr. Rajesh Kumar", position: "Teacher", specialization: "Statistics & Probability" },
        { name: "Ms. Anita Sharma", position: "Teacher", specialization: "Geometry & Calculus" },
      ],
      courses: ["Algebra", "Geometry", "Calculus", "Statistics", "Vedic Mathematics", "Mathematical Olympiad Training"],
      achievements: [
        "National Mathematics Olympiad finalists for 3 consecutive years",
        "State-level Mathematics Quiz champions 2023",
        "Special recognition in CBSE for innovative teaching methodologies",
        "100% distinction rate in board examinations",
      ],
    },
    {
      id: "science",
      name: "Science",
      icon: <Microscope className="h-10 w-10 text-amber-600" />,
      description:
        "Our Science department offers comprehensive education in Physics, Chemistry, and Biology with a focus on practical learning, scientific inquiry, and technological applications.",
      faculty: [
        { name: "Dr. Sanjay Verma", position: "Head of Department", specialization: "Physics" },
        { name: "Mrs. Meena Desai", position: "Senior Teacher", specialization: "Chemistry" },
        { name: "Dr. Anjali Saxena", position: "Senior Teacher", specialization: "Biology" },
        { name: "Mr. Prakash Jain", position: "Lab Coordinator", specialization: "Experimental Sciences" },
      ],
      courses: [
        "Physics",
        "Chemistry",
        "Biology",
        "Environmental Science",
        "Practical Laboratory Skills",
        "Science Project Work",
      ],
      achievements: [
        "State Science Fair gold medal winners 2023",
        "Selected for National Science Congress presentations",
        "Collaboration with regional science centers for advanced projects",
        "Special recognition for eco-friendly school initiatives",
      ],
    },
    {
      id: "social-studies",
      name: "Social Studies",
      icon: <Globe className="h-10 w-10 text-amber-600" />,
      description:
        "The Social Studies department provides comprehensive education in History, Geography, Civics, and Economics, fostering an understanding of our society, culture, and global perspectives.",
      faculty: [
        { name: "Dr. Alok Mishra", position: "Head of Department", specialization: "History" },
        { name: "Mrs. Kavita Sharma", position: "Senior Teacher", specialization: "Geography" },
        { name: "Mr. Dinesh Gupta", position: "Teacher", specialization: "Civics & Political Science" },
        { name: "Ms. Ritu Agarwal", position: "Teacher", specialization: "Economics" },
      ],
      courses: [
        "History",
        "Geography",
        "Civics",
        "Economics",
        "Contemporary World Studies",
        "Indian Heritage & Culture",
      ],
      achievements: [
        "Best Social Science Project at the District Level Exhibition",
        "Heritage Club recognized by CBSE for cultural preservation efforts",
        "Published research on local history and cultural practices",
        "Organized successful educational tours to historical sites",
      ],
    },
    {
      id: "computer-science",
      name: "Computer Science",
      icon: <GraduationCap className="h-10 w-10 text-amber-600" />,
      description:
        "Our Computer Science department equips students with essential digital literacy, programming skills, and understanding of information technology, preparing them for the digital future.",
      faculty: [
        { name: "Mr. Rahul Mehta", position: "Head of Department", specialization: "Computer Science & Programming" },
        { name: "Mrs. Neha Singh", position: "Senior Teacher", specialization: "Information Technology" },
        { name: "Mr. Amit Kumar", position: "Lab Coordinator", specialization: "Hardware & Networking" },
        { name: "Ms. Pooja Sharma", position: "Teacher", specialization: "Web Development & Design" },
      ],
      courses: [
        "Computer Fundamentals",
        "Programming Basics",
        "Web Development",
        "Digital Literacy",
        "Information Technology",
        "Computational Thinking",
      ],
      achievements: [
        "Winners of the State-level Coding Competition 2023",
        "Successful implementation of digital classroom initiatives",
        "Student-developed school management software in use",
        "Special recognition for innovative teaching with technology",
      ],
    },
    {
      id: "arts-music",
      name: "Arts & Music",
      icon: <Music className="h-10 w-10 text-amber-600" />,
      description:
        "The Arts & Music department nurtures creativity and artistic expression through various visual arts, crafts, vocal and instrumental music, fostering aesthetic appreciation and cultural values.",
      faculty: [
        { name: "Mrs. Sangita Devi", position: "Head of Department", specialization: "Classical Music" },
        { name: "Mr. Rajendra Prasad", position: "Senior Teacher", specialization: "Visual Arts" },
        { name: "Ms. Meera Kumari", position: "Teacher", specialization: "Folk Arts & Crafts" },
        { name: "Mr. Sanjay Sharma", position: "Teacher", specialization: "Instrumental Music" },
      ],
      courses: ["Visual Arts", "Crafts", "Vocal Music", "Instrumental Music", "Folk Arts", "Art Appreciation"],
      achievements: [
        "State-level Youth Festival champions in multiple categories",
        "Annual art exhibition showcasing student talents",
        "School choir performances at prestigious regional events",
        "Traditional art preservation project recognized by cultural ministry",
      ],
    },
    {
      id: "physical-education",
      name: "Physical Education",
      icon: <Dumbbell className="h-10 w-10 text-amber-600" />,
      description:
        "Our Physical Education department promotes physical fitness, sports skills, teamwork, and healthy lifestyle choices, contributing to the holistic development of students.",
      faculty: [
        { name: "Mr. Suresh Kumar", position: "Head of Department", specialization: "Sports Training & Management" },
        { name: "Mrs. Anita Yadav", position: "Senior Teacher", specialization: "Athletics & Gymnastics" },
        { name: "Mr. Ravi Singh", position: "Coach", specialization: "Team Sports" },
        { name: "Ms. Sunita Kumari", position: "Teacher", specialization: "Yoga & Fitness" },
      ],
      courses: ["Physical Fitness", "Team Sports", "Individual Sports", "Athletics", "Yoga", "Health & Nutrition"],
      achievements: [
        "District champions in multiple sports categories",
        "Selected students representing at state-level competitions",
        "Successful implementation of comprehensive fitness program",
        "Special recognition for promoting traditional sports and games",
      ],
    },
  ]

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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Academic Departments</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Specialized departments dedicated to excellence in their respective fields of study
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each department is staffed by expert faculty and equipped with resources to provide the highest quality education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-amber-50 p-4 rounded-full mb-4">{dept.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-gray-600 mb-4">{dept.description.substring(0, 100)}...</p>
                    <Button
                      variant="outline"
                      className="mt-auto border-amber-500 text-amber-600 hover:bg-amber-50"
                      onClick={() => {
                        document.getElementById(dept.id)?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Department Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              id={dept.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16 pt-8"
            >
              <div className="flex items-center mb-6">
                <div className="bg-amber-50 p-3 rounded-full mr-4">{dept.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900">{dept.name} Department</h2>
              </div>

              <Tabs defaultValue="overview" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="faculty">Faculty</TabsTrigger>
                    <TabsTrigger value="courses">Courses</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="overview">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Department Overview</h3>
                            <p className="text-gray-700 mb-4">{dept.description}</p>
                            <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Key Features</h4>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                              {dept.achievements.slice(0, 3).map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <img
                              src={`/placeholder.svg?height=400&width=600&text=${dept.name}+Department`}
                              alt={`${dept.name} Department`}
                              className="rounded-lg shadow-md w-full h-auto mb-6"
                            />
                            <div className="mt-6">
                              <Button className="bg-amber-600 hover:bg-amber-700">
                                <Download className="mr-2 h-4 w-4" /> Download Department Brochure
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="faculty">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Faculty Members</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {dept.faculty.map((member, i) => (
                            <Card key={i} className="border-none shadow-sm">
                              <CardContent className="p-6">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                  <Users className="h-8 w-8 text-amber-600" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                                <p className="text-amber-600 font-medium mb-2">{member.position}</p>
                                <p className="text-gray-600 text-sm">Specialization: {member.specialization}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="courses">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Courses Offered</h3>
                            <div className="bg-amber-50 rounded-lg p-6">
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {dept.courses.map((course, i) => (
                                  <li key={i} className="flex items-center">
                                    <div className="h-2 w-2 bg-amber-600 rounded-full mr-3"></div>
                                    <span className="text-gray-700">{course}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <div>
                            <img
                              src={`/placeholder.svg?height=400&width=600&text=${dept.name}+Courses`}
                              alt={`${dept.name} Courses`}
                              className="rounded-lg shadow-md w-full h-auto mb-6"
                            />
                            <p className="text-gray-700">
                              Our curriculum is designed to meet and exceed the CBSE standards while incorporating innovative
                              teaching methodologies and practical applications.
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>

                <TabsContent value="achievements">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card>
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Department Achievements</h3>
                            <div className="space-y-4">
                              {dept.achievements.map((achievement, i) => (
                                <div key={i} className="border-l-4 border-amber-500 pl-4 py-2">
                                  <p className="text-gray-700">{achievement}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <img
                              src={`/placeholder.svg?height=400&width=600&text=${dept.name}+Achievements`}
                              alt={`${dept.name} Achievements`}
                              className="rounded-lg shadow-md w-full h-auto mb-6"
                            />
                            <div className="mt-6">
                              <Button className="bg-amber-600 hover:bg-amber-700">
                                <Download className="mr-2 h-4 w-4" /> Download Achievements Report
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
          ))}
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
            <h2 className="text-3xl font-bold mb-4">Join Our Academic Community</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Discover the excellence of our academic programs and the dedication of our faculty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Department Heads
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}