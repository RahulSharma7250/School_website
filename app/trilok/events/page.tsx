"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, Users, ArrowRight, Filter } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Badge } from "../../components/ui/badge"

export default function TrilokEvents() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "May 15, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "School Sports Ground",
      category: "Sports",
      description:
        "A day of athletic competitions, team sports, and physical activities for students of all ages. Parents are invited to attend and cheer for their children.",
      image: "/shanti5.jpg?height=400&width=600&text=Sports+Day",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "June 5, 2023",
      time: "10:00 AM - 3:00 PM",
      location: "School Auditorium",
      category: "Academic",
      description:
        "Students will showcase their innovative science projects and experiments. The exhibition aims to foster scientific curiosity and creativity.",
      image: "/tri4.jpg?height=400&width=600&text=Science+Exhibition",
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      date: "June 15, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Respective Classrooms",
      category: "Meeting",
      description:
        "An opportunity for parents to meet with teachers and discuss their child's academic progress, strengths, and areas for improvement.",
      image: "/placeholder.svg?height=400&width=600&text=Parent+Teacher+Meeting",
    },
    {
      id: 4,
      title: "Cultural Festival",
      date: "July 10, 2023",
      time: "5:00 PM - 8:00 PM",
      location: "School Auditorium",
      category: "Cultural",
      description:
        "A celebration of art, music, dance, and drama. Students will perform various cultural programs showcasing their talents and creativity.",
      image: "/trilokfes.jpg?height=400&width=600&text=Cultural+Festival",
    },
  ]

  const pastEvents = [
    {
      id: 5,
      title: "Annual Day Celebration",
      date: "March 20, 2023",
      location: "School Auditorium",
      category: "Cultural",
      description:
        "A grand celebration marking the end of the academic year, featuring student performances, award ceremonies, and special addresses.",
      image: "/placeholder.svg?height=400&width=600&text=Annual+Day",
    },
    {
      id: 6,
      title: "Mathematics Olympiad",
      date: "February 15, 2023",
      location: "School Classrooms",
      category: "Academic",
      description:
        "A competitive examination to identify and encourage students with mathematical aptitude and problem-solving skills.",
      image: "/placeholder.svg?height=400&width=600&text=Math+Olympiad",
    },
    {
      id: 7,
      title: "Republic Day Celebration",
      date: "January 26, 2023",
      location: "School Ground",
      category: "National",
      description:
        "A patriotic celebration of India's Republic Day, featuring flag hoisting, cultural programs, and speeches highlighting the importance of the constitution.",
      image: "/placeholder.svg?height=400&width=600&text=Republic+Day",
    },
    {
      id: 8,
      title: "Career Counseling Workshop",
      date: "December 10, 2022",
      location: "School Auditorium",
      category: "Workshop",
      description:
        "A workshop for senior students to provide guidance on career options, college admissions, and future educational pathways.",
      image: "/placeholder.svg?height=400&width=600&text=Career+Workshop",
    },
  ]

  return (
    <div>
      {/* Hero Section - Enhanced */}
      <section className="relative">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-800  h-[60vh] min-h-[400px]">
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
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Upcoming Events</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Events & Activities</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Stay updated with all the events, celebrations, and activities happening at Trilok Vidhya Vihar.
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

      {/* Events Calendar - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-lg">
                  <TabsTrigger value="upcoming" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">Past Events</TabsTrigger>
                  <TabsTrigger value="calendar" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">Calendar View</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="upcoming">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
                  <div className="flex items-center">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                              {event.category}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          <div className="space-y-2 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-emerald-600" />
                              {event.time}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                              {event.location}
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Event Details</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="past">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Past Events</h2>
                  <div className="flex items-center">
                    <Button variant="outline" size="sm" className="flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {pastEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-3">
                            <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200">{event.category}</Badge>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                          <p className="text-gray-700 mb-4">{event.description}</p>
                          <div className="flex items-center text-sm text-gray-600 mb-4">
                            <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                            {event.location}
                          </div>
                          <div className="mt-4">
                            <Button
                              variant="outline"
                              className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                            >
                              View Event Highlights
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="calendar">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">May 2023</h2>
                    <div className="flex justify-center space-x-2">
                      <Button variant="outline" size="sm">
                        Previous
                      </Button>
                      <Button variant="outline" size="sm">
                        Today
                      </Button>
                      <Button variant="outline" size="sm">
                        Next
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 gap-2 mb-2 text-center">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                      <div key={day} className="font-medium text-gray-600 py-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2 text-center">
                    {Array.from({ length: 31 }, (_, i) => {
                      const day = i + 1
                      const hasEvent = [5, 10, 15, 20].includes(day)
                      return (
                        <div
                          key={day}
                          className={`py-4 rounded-lg ${
                            hasEvent
                              ? "bg-emerald-100 text-emerald-800 font-medium cursor-pointer hover:bg-emerald-200"
                              : "hover:bg-gray-100 cursor-pointer"
                          }`}
                        >
                          {day}
                          {hasEvent && <div className="mt-1 w-1.5 h-1.5 bg-emerald-600 rounded-full mx-auto"></div>}
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Events on May 15, 2023</h3>
                    <div className="space-y-4">
                      <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-medium text-gray-900">Annual Sports Day</h4>
                            <p className="text-sm text-gray-600">9:00 AM - 4:00 PM</p>
                            <p className="text-sm text-gray-600">School Sports Ground</p>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-800">Sports</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Annual Events - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Signature Events</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Annual Events</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Signature events that are organized every year at Trilok Vidhya Vihar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Annual Day",
                month: "March",
                description: "A grand celebration showcasing student performances, achievements, and talents.",
                image: "/shanti5.jpg?height=400&width=600&text=Annual+Day",
              },
              {
                title: "Sports Meet",
                month: "December",
                description: "A week-long sports event featuring various athletic competitions and team sports.",
                image: "/placeholder.svg?height=400&width=600&text=Sports+Meet",
              },
              {
                title: "Science & Technology Fair",
                month: "August",
                description: "An exhibition of innovative projects and experiments by students across all grades.",
                image: "/placeholder.svg?height=400&width=600&text=Science+Fair",
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {event.month}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-700 mb-4">{event.description}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-emerald-600 hover:text-emerald-700 hover:bg-transparent group"
                    >
                      <span>View Past Celebrations</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Registration - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Event Registration</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Many of our events are open to parents, alumni, and sometimes the wider community. Register in advance
                  to secure your participation.
                </p>
                <p>
                  For school competitions, workshops, and special programs, students can register through their class
                  teachers or the school office.
                </p>
                <div className="pt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Register for Events</Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Event Highlights</h3>
                  <div className="space-y-4">
                    {upcomingEvents.slice(0, 3).map((event, index) => (
                      <div
                        key={index}
                        className="flex items-start pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                      >
                        <div className="bg-emerald-100 text-emerald-800 p-2 rounded-lg mr-4 flex-shrink-0">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{event.title}</h4>
                          <p className="text-sm text-gray-600">
                            {event.date} • {event.time}
                          </p>
                          <div className="flex items-center mt-1 text-sm text-emerald-600">
                            <Users className="h-4 w-4 mr-1" />
                            <span>Registration open</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold mb-4">Stay Updated with School Events</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter to receive regular updates about upcoming events, activities, and important
              dates.
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
              Subscribe to Newsletter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}