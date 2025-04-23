"use client"

import { motion } from "framer-motion"
import { Trophy, Medal, Star, Award, Users, BookOpen, Dumbbell, Music } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Badge } from "../../../components/ui/badge"

export default function ShantipeethAchievements() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-amber-500 to-orange-700 h-[40vh] min-h-[300px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
          ></div>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Achievements</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Celebrating excellence and recognizing the outstanding accomplishments of our students, faculty, and
                institution.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Achievement Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-4">
              Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achievement Highlights</h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key accomplishments that showcase our commitment to excellence in education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="h-10 w-10 text-amber-600" />,
                title: "Board Results",
                value: "95%+",
                description: "Students scoring above 80% in board examinations",
              },
              {
                icon: <Medal className="h-10 w-10 text-amber-600" />,
                title: "Olympiad Medals",
                value: "50+",
                description: "Medals won in national and international olympiads",
              },
              {
                icon: <Star className="h-10 w-10 text-amber-600" />,
                title: "Sports Championships",
                value: "25+",
                description: "District and state level sports championships",
              },
              {
                icon: <Award className="h-10 w-10 text-amber-600" />,
                title: "Cultural Awards",
                value: "40+",
                description: "Awards in various cultural competitions and events",
              },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-amber-50 rounded-full mb-4 shadow-md">
                      {achievement.icon}
                    </div>
                    <div className="text-4xl font-bold text-amber-600 mb-2">{achievement.value}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Achievements */}
      <section className="py-16 bg-amber-50/50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Tabs defaultValue="academic" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto">
                <TabsList className="bg-white/80 backdrop-blur-sm">
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="sports">Sports</TabsTrigger>
                  <TabsTrigger value="cultural">Cultural</TabsTrigger>
                  <TabsTrigger value="institutional">Institutional</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="academic">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                          <BookOpen className="h-8 w-8 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Academic Achievements</h3>
                          <p className="text-gray-600">Excellence in scholastic pursuits and competitions</p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Trophy className="h-5 w-5 text-amber-600 mr-2" />
                            Board Examination Results
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Class X Results (2023)</h5>
                                  <Badge className="bg-amber-100 text-amber-800">CBSE</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 100% pass percentage</li>
                                  <li>• 85% students scored above 80%</li>
                                  <li>• School topper: Riya Patel (98.6%)</li>
                                  <li>• 15 students scored perfect 100 in Mathematics</li>
                                  <li>• 12 students scored perfect 100 in Science</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Class XII Results (2023)</h5>
                                  <Badge className="bg-amber-100 text-amber-800">CBSE</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 100% pass percentage</li>
                                  <li>• 80% students scored above 80%</li>
                                  <li>• Science stream topper: Arjun Singh (97.8%)</li>
                                  <li>• Commerce stream topper: Neha Gupta (98.2%)</li>
                                  <li>• Humanities stream topper: Vikram Sharma (96.4%)</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Medal className="h-5 w-5 text-amber-600 mr-2" />
                            Olympiads & Competitions
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Science Olympiad</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 5 International Gold Medals</li>
                                  <li>• 8 National Silver Medals</li>
                                  <li>• 15 State Level Recognitions</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Mathematics Olympiad</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 7 International Gold Medals</li>
                                  <li>• 12 National Silver Medals</li>
                                  <li>• 20 State Level Recognitions</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Other Competitions</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• NTSE: 8 Scholars</li>
                                  <li>• KVPY: 5 Fellows</li>
                                  <li>• Coding Competitions: 12 Awards</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Users className="h-5 w-5 text-amber-600 mr-2" />
                            College Admissions
                          </h4>
                          <Card className="border border-amber-100">
                            <CardContent className="p-6">
                              <h5 className="font-semibold text-gray-900 mb-2">
                                Higher Education Placements (2023 Batch)
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <div className="bg-amber-50 p-4 rounded-lg text-center">
                                  <div className="text-3xl font-bold text-amber-600 mb-2">15</div>
                                  <div className="text-gray-700">IIT/NIT Admissions</div>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg text-center">
                                  <div className="text-3xl font-bold text-amber-600 mb-2">12</div>
                                  <div className="text-gray-700">Medical College Admissions</div>
                                </div>
                                <div className="bg-amber-50 p-4 rounded-lg text-center">
                                  <div className="text-3xl font-bold text-amber-600 mb-2">8</div>
                                  <div className="text-gray-700">Foreign University Admissions</div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="sports">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                          <Dumbbell className="h-8 w-8 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Sports Achievements</h3>
                          <p className="text-gray-600">Excellence in athletics and team sports</p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Trophy className="h-5 w-5 text-amber-600 mr-2" />
                            Team Sports
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Cricket</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Team</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• District Champions (2023)</li>
                                  <li>• State Runners-up (2022)</li>
                                  <li>• Zonal Champions (2021, 2022)</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Basketball</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Team</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• State Champions (2023)</li>
                                  <li>• District Champions (2021, 2022, 2023)</li>
                                  <li>• CBSE Cluster Winners (2022)</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Football</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Team</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• District Champions (2023)</li>
                                  <li>• Interschool Tournament Winners (2022)</li>
                                  <li>• State Level Participation (2021, 2022)</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Medal className="h-5 w-5 text-amber-600 mr-2" />
                            Individual Sports
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Athletics</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Individual</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 5 Gold Medals (State Level)</li>
                                  <li>• 8 Silver Medals (State Level)</li>
                                  <li>• 12 Bronze Medals (State Level)</li>
                                  <li>• 2 National Level Participants</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Swimming</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Individual</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 3 Gold Medals (State Level)</li>
                                  <li>• 5 Silver Medals (State Level)</li>
                                  <li>• 7 Bronze Medals (State Level)</li>
                                  <li>• 1 National Level Participant</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Chess</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Individual</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 2 State Champions</li>
                                  <li>• 5 District Champions</li>
                                  <li>• 1 National Level Participant</li>
                                  <li>• 3 FIDE Rated Players</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Star className="h-5 w-5 text-amber-600 mr-2" />
                            Special Recognition
                          </h4>
                          <Card className="border border-amber-100">
                            <CardContent className="p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">Outstanding Athletes</h5>
                                  <ul className="space-y-2 text-gray-700">
                                    <li>• Arjun Singh - State Level Best Athlete (2023)</li>
                                    <li>• Meera Patel - National Swimming Championship Finalist</li>
                                    <li>• Rahul Sharma - District Chess Champion</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">Sports Scholarships</h5>
                                  <ul className="space-y-2 text-gray-700">
                                    <li>• 5 students received sports scholarships for higher education</li>
                                    <li>• 3 students selected for specialized sports training programs</li>
                                    <li>• 2 students representing at national youth camps</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="cultural">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                          <Music className="h-8 w-8 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Cultural Achievements</h3>
                          <p className="text-gray-600">Excellence in arts, music, dance, and literary activities</p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Trophy className="h-5 w-5 text-amber-600 mr-2" />
                            Performing Arts
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Music</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Vocal & Instrumental</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• State Level Vocal Competition Winners (2023)</li>
                                  <li>• Interschool Music Festival Champions (2022)</li>
                                  <li>• 5 Individual Awards in Classical Music</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Dance</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Classical & Contemporary</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• State Level Folk Dance Champions (2023)</li>
                                  <li>• District Level Classical Dance Winners</li>
                                  <li>• 8 Individual Awards in Various Dance Forms</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Drama</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Theater</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• State Level One-Act Play Competition Winners</li>
                                  <li>• Interschool Drama Festival Best Production</li>
                                  <li>• 6 Individual Acting Awards</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Medal className="h-5 w-5 text-amber-600 mr-2" />
                            Literary & Visual Arts
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Debate & Elocution</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Literary</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• State Level Debate Competition Winners</li>
                                  <li>• Interschool Elocution Champions</li>
                                  <li>• 10 Individual Awards in Public Speaking</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Creative Writing</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Literary</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• 5 Published Student Authors</li>
                                  <li>• National Level Essay Competition Winners</li>
                                  <li>• 12 Awards in Poetry and Short Story Writing</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h5 className="font-semibold text-gray-900">Visual Arts</h5>
                                  <Badge className="bg-amber-100 text-amber-800">Art & Craft</Badge>
                                </div>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• State Level Painting Competition Winners</li>
                                  <li>• National Level Art Exhibition Participants</li>
                                  <li>• 15 Individual Awards in Various Art Forms</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Star className="h-5 w-5 text-amber-600 mr-2" />
                            Cultural Festivals & Events
                          </h4>
                          <Card className="border border-amber-100">
                            <CardContent className="p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">Major Events Organized</h5>
                                  <ul className="space-y-2 text-gray-700">
                                    <li>• Annual Cultural Festival "Tarang" - Participation from 25+ schools</li>
                                    <li>• Interschool Literary Festival - Hosting 15+ events</li>
                                    <li>• Classical Music & Dance Festival - Featuring renowned artists</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">External Participation</h5>
                                  <ul className="space-y-2 text-gray-700">
                                    <li>• Represented district in State Youth Festival</li>
                                    <li>• Participated in National Level Cultural Exchange Programs</li>
                                    <li>• International Cultural Festival Participation (2 students)</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="institutional">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="bg-amber-100 p-3 rounded-full mr-4">
                          <Award className="h-8 w-8 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">Institutional Achievements</h3>
                          <p className="text-gray-600">Recognition and accolades for our school and faculty</p>
                        </div>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Trophy className="h-5 w-5 text-amber-600 mr-2" />
                            School Recognition
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Awards & Certifications</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• Best School Award by State Education Department (2023)</li>
                                  <li>• Excellence in Education Award by CBSE (2022)</li>
                                  <li>• Green School Certification for Environmental Initiatives</li>
                                  <li>• Smart School Award for Technology Integration</li>
                                  <li>• Best Infrastructure Award at District Level</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Rankings & Ratings</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• Ranked among Top 10 Schools in the State</li>
                                  <li>• 5-Star Rating by Education Quality Assessment Board</li>
                                  <li>• Recognized as Model School by State Government</li>
                                  <li>• Featured in "Schools of Excellence" National Publication</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Medal className="h-5 w-5 text-amber-600 mr-2" />
                            Faculty Achievements
                          </h4>
                          <Card className="border border-amber-100">
                            <CardContent className="p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">Teacher Recognition</h5>
                                  <ul className="space-y-2 text-gray-700">
                                    <li>• 3 State Teacher Awards Recipients</li>
                                    <li>• 5 Teachers recognized for Innovation in Teaching</li>
                                    <li>• 8 Teachers published in Educational Journals</li>
                                    <li>• 2 Teachers selected for National Teacher Exchange Program</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">Professional Development</h5>
                                  <ul className="space-y-2 text-gray-700">
                                    <li>• 100% Faculty with Advanced Certifications</li>
                                    <li>• 12 Teachers completed International Training Programs</li>
                                    <li>• 5 Teachers pursuing Doctoral Research</li>
                                    <li>• 15 Teachers as Resource Persons at Various Forums</li>
                                  </ul>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <Star className="h-5 w-5 text-amber-600 mr-2" />
                            Special Initiatives & Projects
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Environmental Initiatives</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• Solar Power Project - 80% Energy Self-Sufficiency</li>
                                  <li>• Rainwater Harvesting System - State Award Winner</li>
                                  <li>• School Garden Project - 100+ Plant Species</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Community Outreach</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• Village Education Program - Reaching 10+ Villages</li>
                                  <li>• Scholarship Program for Underprivileged Students</li>
                                  <li>• Community Health Awareness Campaigns</li>
                                </ul>
                              </CardContent>
                            </Card>
                            <Card className="border border-amber-100">
                              <CardContent className="p-6">
                                <h5 className="font-semibold text-gray-900 mb-2">Innovation Projects</h5>
                                <ul className="space-y-2 text-gray-700">
                                  <li>• STEM Innovation Lab - State Level Recognition</li>
                                  <li>• Digital Learning Initiative - Featured in National Media</li>
                                  <li>• Student Entrepreneurship Program - 5 Startups Launched</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-16 bg-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-4">
              Alumni
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notable Alumni</h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates who have made significant contributions in various fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Rajiv Sharma",
                batch: "Class of 2005",
                achievement: "Renowned Cardiologist at AIIMS",
                image: "/placeholder.svg?height=300&width=300&text=RS",
              },
              {
                name: "Ms. Priya Patel",
                batch: "Class of 2008",
                achievement: "Software Engineer at Google",
                image: "/placeholder.svg?height=300&width=300&text=PP",
              },
              {
                name: "Mr. Vikram Singh",
                batch: "Class of 2010",
                achievement: "National Level Cricketer",
                image: "/placeholder.svg?height=300&width=300&text=VS",
              },
              {
                name: "Dr. Meera Gupta",
                batch: "Class of 2007",
                achievement: "Research Scientist at ISRO",
                image: "/placeholder.svg?height=300&width=300&text=MG",
              },
              {
                name: "Mr. Arjun Kapoor",
                batch: "Class of 2012",
                achievement: "Entrepreneur & Startup Founder",
                image: "/placeholder.svg?height=300&width=300&text=AK",
              },
              {
                name: "Ms. Neha Verma",
                batch: "Class of 2009",
                achievement: "Civil Services Officer (IAS)",
                image: "/placeholder.svg?height=300&width=300&text=NV",
              },
            ].map((alumni, index) => (
              <motion.div
                key={alumni.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all overflow-hidden group">
                  <div className="aspect-square overflow-hidden bg-amber-50">
                    <img
                      src={alumni.image || "/placeholder.svg"}
                      alt={alumni.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{alumni.name}</h3>
                    <p className="text-amber-600 font-medium mb-2">{alumni.batch}</p>
                    <p className="text-gray-700">{alumni.achievement}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Wall */}
      <section className="py-16 bg-amber-50/50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 mb-4">
              Recognition
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Recognition Wall</h2>
            <div className="w-20 h-1.5 bg-amber-500 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Certificates, trophies, and awards that showcase our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all group"
              >
                <div className="relative aspect-square">
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=Award+${index + 1}`}
                    alt={`Award ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Achievement Certificate #{index + 1}</p>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold mb-4">Join Our Legacy of Excellence</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Become part of a school with a proven track record of academic, sports, and cultural achievements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Apply for Admission
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
