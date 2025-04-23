"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Medal, Star, BookOpen, Users, Download } from "lucide-react"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Button } from "../../../components/ui/button"
import { Badge } from "../../../components/ui/badge"

export default function ShantipeethAchievements() {
  const academicAchievements = [
    {
      year: "2023",
      title: "100% Pass Rate in Board Examinations",
      description:
        "All students successfully passed the CBSE board examinations, with 45% securing distinction and 35% securing first division.",
      highlight: true,
    },
    {
      year: "2023",
      title: "National Science Olympiad",
      description: "5 students qualified for the national level, with Rahul Sharma securing 3rd rank nationally.",
      highlight: false,
    },
    {
      year: "2022",
      title: "Mathematics Excellence Award",
      description:
        "School received special recognition from CBSE for innovative teaching methodologies in Mathematics.",
      highlight: true,
    },
    {
      year: "2022",
      title: "CBSE Merit Scholarships",
      description: "12 students received merit scholarships for their outstanding academic performance.",
      highlight: false,
    },
    {
      year: "2021",
      title: "Regional Science Project Competition",
      description: "First prize for the innovative project on 'Sustainable Water Management'.",
      highlight: true,
    },
    {
      year: "2021",
      title: "English Language Proficiency",
      description: "School ranked among top 5 in the state for English language proficiency assessment.",
      highlight: false,
    },
  ]

  const sportsAchievements = [
    {
      year: "2023",
      title: "State Level Cricket Championship",
      description: "School cricket team won the state level championship for the second consecutive year.",
      highlight: true,
    },
    {
      year: "2023",
      title: "District Athletics Meet",
      description: "Students won 8 gold, 12 silver, and 15 bronze medals across various athletic events.",
      highlight: false,
    },
    {
      year: "2022",
      title: "National Yoga Championship",
      description: "Meera Patel secured 2nd position at the National Level Yoga Championship.",
      highlight: true,
    },
    {
      year: "2022",
      title: "Inter-School Sports Festival",
      description: "Overall champions at the Inter-School Sports Festival with highest medal tally.",
      highlight: false,
    },
    {
      year: "2021",
      title: "State Basketball Tournament",
      description: "Girls' basketball team reached the finals of the State Basketball Tournament.",
      highlight: true,
    },
    {
      year: "2021",
      title: "Chess Championship",
      description: "Vikram Singh won the District Chess Championship and qualified for state level.",
      highlight: false,
    },
  ]

  const culturalAchievements = [
    {
      year: "2023",
      title: "State Youth Festival",
      description: "School secured overall 2nd position with first prizes in folk dance, classical singing, and drama.",
      highlight: true,
    },
    {
      year: "2023",
      title: "National Level Art Competition",
      description: "Priya Sharma's painting selected for the National Gallery of Young Artists.",
      highlight: false,
    },
    {
      year: "2022",
      title: "Classical Dance Competition",
      description: "Ananya Patel won gold medal in the State Level Classical Dance Competition.",
      highlight: true,
    },
    {
      year: "2022",
      title: "Inter-School Debate Competition",
      description: "School debate team won the prestigious Regional Debate Championship.",
      highlight: false,
    },
    {
      year: "2021",
      title: "Music Festival",
      description: "School choir received special appreciation at the National Music Festival.",
      highlight: true,
    },
    {
      year: "2021",
      title: "Drama Competition",
      description: "First prize for the social awareness play 'Jagriti' at the District Drama Festival.",
      highlight: false,
    },
  ]

  const institutionalAchievements = [
    {
      year: "2023",
      title: "CBSE Excellence Award",
      description: "School received CBSE Excellence Award for outstanding academic and co-curricular achievements.",
      highlight: true,
    },
    {
      year: "2023",
      title: "Green School Certification",
      description: "Received 5-star rating in the Green School Certification for environmental initiatives.",
      highlight: false,
    },
    {
      year: "2022",
      title: "Digital Learning Excellence",
      description: "Recognized for successful implementation of digital learning methodologies.",
      highlight: true,
    },
    {
      year: "2022",
      title: "Community Service Recognition",
      description: "Special recognition from local government for community service initiatives.",
      highlight: false,
    },
    {
      year: "2021",
      title: "Quality Education Award",
      description: "Received the State Level Quality Education Award for overall educational excellence.",
      highlight: true,
    },
    {
      year: "2021",
      title: "Infrastructure Development",
      description: "Completed major infrastructure upgrades including new science labs and digital classrooms.",
      highlight: false,
    },
  ]

  const notableAlumni = [
    {
      name: "Dr. Rajesh Kumar",
      batch: "2005",
      achievement: "Renowned Scientist at ISRO",
      description:
        "Dr. Kumar is leading research in satellite technology and has contributed to several successful space missions.",
    },
    {
      name: "Ms. Priya Sharma",
      batch: "2008",
      achievement: "International Chess Grandmaster",
      description:
        "Represented India in multiple international chess tournaments and secured the Grandmaster title in 2018.",
    },
    {
      name: "Mr. Vikram Singh",
      batch: "2010",
      achievement: "Award-winning Author",
      description:
        "Published several critically acclaimed novels and received the National Literary Award for his work 'Echoes of Tradition'.",
    },
    {
      name: "Dr. Meera Patel",
      batch: "2007",
      achievement: "Medical Researcher",
      description:
        "Leading medical researcher who has made significant contributions to the field of immunology and vaccine development.",
    },
    {
      name: "Mr. Sunil Verma",
      batch: "2012",
      achievement: "Social Entrepreneur",
      description:
        "Founded a successful social enterprise that provides educational resources to underprivileged children across rural India.",
    },
    {
      name: "Ms. Ananya Desai",
      batch: "2009",
      achievement: "Classical Dancer",
      description:
        "Internationally recognized classical dancer who has performed at prestigious cultural events worldwide.",
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Achievements</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Celebrating excellence across academics, sports, cultural activities, and institutional milestones
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Overview */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognized Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our achievements reflect our commitment to holistic education and the outstanding potential of our students
            </p>
          </motion.div>

          <Tabs defaultValue="academic" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="cultural">Cultural</TabsTrigger>
                <TabsTrigger value="institutional">Institutional</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="academic">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Academic Achievements</h3>
                        <p className="text-gray-700 mb-4">
                          Our students consistently achieve outstanding results in board examinations, competitions, and
                          olympiads, reflecting our commitment to academic excellence.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The curriculum is designed to develop fundamental skills in language, mathematics, science,
                          and social studies, complemented by art, music, physical education, and value education.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Recent Highlights</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>100% pass rate in CBSE board examinations</li>
                          <li>Multiple national level olympiad qualifiers</li>
                          <li>CBSE Merit Scholarship recipients</li>
                          <li>State ranking in English proficiency</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Academic+Achievements"
                          alt="Academic Achievements"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <div className="grid grid-cols-1 gap-4">
                          {academicAchievements.slice(0, 3).map((achievement, index) => (
                            <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                              <Badge variant="outline" className="mb-1 border-amber-500 text-amber-600">
                                {achievement.year}
                              </Badge>
                              <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                              <p className="text-gray-700 text-sm">{achievement.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Full Achievements
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="sports">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sports Achievements</h3>
                        <p className="text-gray-700 mb-4">
                          Our students excel in various sports at district, state, and national levels, demonstrating
                          physical prowess, teamwork, and sportsmanship.
                        </p>
                        <p className="text-gray-700 mb-4">
                          The sports program expands to include specialized training and provides opportunities for
                          students to compete at various levels through academic and co-curricular activities.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Recent Highlights</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>State level cricket champions</li>
                          <li>Multiple district athletics medals</li>
                          <li>National yoga championship winners</li>
                          <li>Inter-school sports festival champions</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Sports+Achievements"
                          alt="Sports Achievements"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <div className="grid grid-cols-1 gap-4">
                          {sportsAchievements.slice(0, 3).map((achievement, index) => (
                            <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                              <Badge variant="outline" className="mb-1 border-amber-500 text-amber-600">
                                {achievement.year}
                              </Badge>
                              <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                              <p className="text-gray-700 text-sm">{achievement.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Full Achievements
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="cultural">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cultural Achievements</h3>
                        <p className="text-gray-700 mb-4">
                          Our students showcase their talents in various cultural activities, winning accolades in
                          music, dance, drama, art, and literary competitions.
                        </p>
                        <p className="text-gray-700 mb-4">
                          We emphasize creative expression through various platforms that help students discover and
                          nurture their artistic talents alongside academic pursuits.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Recent Highlights</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>State youth festival winners</li>
                          <li>National level art competition selections</li>
                          <li>Classical dance competition gold medals</li>
                          <li>Inter-school debate champions</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Cultural+Achievements"
                          alt="Cultural Achievements"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <div className="grid grid-cols-1 gap-4">
                          {culturalAchievements.slice(0, 3).map((achievement, index) => (
                            <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                              <Badge variant="outline" className="mb-1 border-amber-500 text-amber-600">
                                {achievement.year}
                              </Badge>
                              <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                              <p className="text-gray-700 text-sm">{achievement.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Full Achievements
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="institutional">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Institutional Achievements</h3>
                        <p className="text-gray-700 mb-4">
                          Our school has received numerous recognitions and awards for educational excellence,
                          infrastructure development, and innovative teaching methodologies.
                        </p>
                        <p className="text-gray-700 mb-4">
                          These accomplishments reflect our continuous efforts to provide quality education and create an
                          environment conducive to learning and growth.
                        </p>
                        <h4 className="text-xl font-medium text-gray-900 mt-6 mb-3">Recent Highlights</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>CBSE Excellence Award</li>
                          <li>Green School Certification</li>
                          <li>Digital Learning Excellence recognition</li>
                          <li>Quality Education Award</li>
                        </ul>
                      </div>
                      <div>
                        <img
                          src="/placeholder.svg?height=400&width=600&text=Institutional+Achievements"
                          alt="Institutional Achievements"
                          className="rounded-lg shadow-md w-full h-auto mb-6"
                        />
                        <div className="grid grid-cols-1 gap-4">
                          {institutionalAchievements.slice(0, 3).map((achievement, index) => (
                            <div key={index} className="border-l-4 border-amber-500 pl-4 py-2">
                              <Badge variant="outline" className="mb-1 border-amber-500 text-amber-600">
                                {achievement.year}
                              </Badge>
                              <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                              <p className="text-gray-700 text-sm">{achievement.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6">
                          <Button className="bg-amber-600 hover:bg-amber-700">
                            <Download className="mr-2 h-4 w-4" /> Download Full Achievements
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

      {/* Alumni Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notable Alumni</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our alumni have excelled in various fields and continue to make us proud with their achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notableAlumni.map((alumni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-100 p-3 rounded-full mr-4">
                        <Users className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{alumni.name}</h3>
                        <p className="text-amber-600">Batch of {alumni.batch}</p>
                      </div>
                    </div>
                    <h4 className="text-lg font-medium text-gray-800 mb-2">{alumni.achievement}</h4>
                    <p className="text-gray-600">{alumni.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Wall */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recognition Wall</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of certificates, trophies, and awards received by our school and students
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="aspect-square bg-white rounded-lg shadow-md flex items-center justify-center p-4"
              >
                <div className="text-center">
                  {item % 2 === 0 ? (
                    <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  ) : item % 3 === 0 ? (
                    <Medal className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  ) : (
                    <Award className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                  )}
                  <p className="text-gray-700 font-medium">Achievement {item}</p>
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
              Become part of our distinguished institution and create your own success story
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Apply for Admission
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}