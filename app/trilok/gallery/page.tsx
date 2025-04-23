"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function TrilokGallery() {
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null)

  // Gallery categories without captions
  const galleryCategories = [
    {
      id: "campus",
      name: "Campus",
      images: [
        {
          id: "campus-main",
          src: "/triach.jpg",
          alt: "Trilok School Main Building"
        },
        {
          id: "campus-entrance",
          src: "/tricerti.jpg",
          alt: "School entrance"
        },
        {
          id: "campus-classroom",
          src: "/trievent.jpg",
          alt: "Smart classroom"
        },
        {
          id: "campus-library",
          src: "/triagri.jpg",
          alt: "School library"
        },
        {
          id: "campus-lab",
          src: "/tri2082.jpg",
          alt: "Science laboratory"
        },
        {
          id: "campus-playground",
          src: "/tricul.jpg",
          alt: "School playground"
        },
        {
          id: "campus-garden",
          src: "/tri6.jpg",
          alt: "School garden"
        },
        {
          id: "campus-auditorium",
          src: "/tri12.jpg",
          alt: "School auditorium"
        }
      ]
    },
    {
      id: "events",
      name: "Events",
      images: [
        {
          id: "event-annual-day",
          src: "/gallery/events/annual-day.jpg",
          alt: "Annual day celebration"
        },
        {
          id: "event-sports-day",
          src: "/gallery/events/sports-day.jpg",
          alt: "Sports day event"
        },
        {
          id: "event-independence-day",
          src: "/gallery/events/independence-day.jpg",
          alt: "Independence day celebration"
        },
        {
          id: "event-science-fair",
          src: "/gallery/events/science-fair.jpg",
          alt: "Science fair exhibition"
        },
        {
          id: "event-graduation",
          src: "/gallery/events/graduation.jpg",
          alt: "Graduation ceremony"
        },
        {
          id: "event-art-exhibition",
          src: "/gallery/events/art-exhibition.jpg",
          alt: "Art exhibition"
        },
        {
          id: "event-debate",
          src: "/gallery/events/debate-competition.jpg",
          alt: "Debate competition"
        },
        {
          id: "event-teachers-day",
          src: "/gallery/events/teachers-day.jpg",
          alt: "Teachers' day celebration"
        }
      ]
    },
    {
      id: "sports",
      name: "Sports",
      images: [
        {
          id: "sports-cricket",
          src: "/gallery/sports/cricket-team.jpg",
          alt: "School cricket team"
        },
        {
          id: "sports-basketball",
          src: "/gallery/sports/basketball.jpg",
          alt: "Basketball match"
        },
        {
          id: "sports-swimming",
          src: "/gallery/sports/swimming.jpg",
          alt: "Swimming competition"
        },
        {
          id: "sports-athletics",
          src: "/gallery/sports/athletics.jpg",
          alt: "Athletics event"
        },
        {
          id: "sports-badminton",
          src: "/gallery/sports/badminton.jpg",
          alt: "Badminton tournament"
        },
        {
          id: "sports-chess",
          src: "/gallery/sports/chess.jpg",
          alt: "Chess competition"
        },
        {
          id: "sports-yoga",
          src: "/gallery/sports/yoga.jpg",
          alt: "Yoga session"
        },
        {
          id: "sports-football",
          src: "/gallery/sports/football.jpg",
          alt: "Football match"
        }
      ]
    },
    {
      id: "academics",
      name: "Academics",
      images: [
        {
          id: "academics-class",
          src: "/gallery/academics/classroom.jpg",
          alt: "Classroom session"
        },
        {
          id: "academics-lab",
          src: "/gallery/academics/computer-lab.jpg",
          alt: "Computer lab"
        },
        {
          id: "academics-project",
          src: "/gallery/academics/science-project.jpg",
          alt: "Science project"
        },
        {
          id: "academics-library",
          src: "/gallery/academics/library-study.jpg",
          alt: "Library study"
        },
        {
          id: "academics-award",
          src: "/gallery/academics/award-ceremony.jpg",
          alt: "Academic awards"
        },
        {
          id: "academics-field-trip",
          src: "/gallery/academics/field-trip.jpg",
          alt: "Field trip"
        },
        {
          id: "academics-guest-lecture",
          src: "/gallery/academics/guest-lecture.jpg",
          alt: "Guest lecture"
        },
        {
          id: "academics-group-study",
          src: "/gallery/academics/group-study.jpg",
          alt: "Group study"
        }
      ]
    },
    {
      id: "cultural",
      name: "Cultural",
      images: [
        {
          id: "cultural-dance",
          src: "/gallery/cultural/dance-performance.jpg",
          alt: "Dance performance"
        },
        {
          id: "cultural-music",
          src: "/gallery/cultural/music-concert.jpg",
          alt: "Music concert"
        },
        {
          id: "cultural-drama",
          src: "/gallery/cultural/drama.jpg",
          alt: "Drama performance"
        },
        {
          id: "cultural-art",
          src: "/gallery/cultural/art-exhibition.jpg",
          alt: "Art exhibition"
        },
        {
          id: "cultural-festival",
          src: "/gallery/cultural/festival.jpg",
          alt: "Cultural festival"
        },
        {
          id: "cultural-fashion-show",
          src: "/gallery/cultural/fashion-show.jpg",
          alt: "Fashion show"
        },
        {
          id: "cultural-poetry",
          src: "/gallery/cultural/poetry-recitation.jpg",
          alt: "Poetry recitation"
        },
        {
          id: "cultural-heritage",
          src: "/gallery/cultural/heritage-day.jpg",
          alt: "Heritage day"
        }
      ]
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-800 h-[60vh] min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: "url('/gallery/hero-background.jpg')" }}
          ></div>
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.8)_0,_transparent_2px)] bg-[length:12px_12px]"></div>
          
          <div className="relative h-full max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Explore Our Campus</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Photo Gallery</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Explore visual highlights from our campus, events, and student activities.
              </p>
            </motion.div>
          </div>
        </div>
        
        <div className="relative h-16 bg-white">
          <svg className="absolute -top-px left-0 w-full overflow-hidden" style={{ transform: "translateY(-100%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="white" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Gallery Section - Caption-free version */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Tabs defaultValue="campus" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto">
                <TabsList className="bg-white/50 backdrop-blur-sm p-1 rounded-lg">
                  {galleryCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-800 rounded-md">
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {galleryCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {category.images.map((image, index) => (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="group cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative aspect-square">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                              <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-10 w-10" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Our Videos</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Video Gallery</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch videos showcasing our school events, student performances, and more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: "video-1",
                title: "Annual Day 2023",
                duration: "3:45",
                date: "May 2023",
                thumbnail: "/gallery/videos/annual-day-thumb.jpg"
              },
              {
                id: "video-2",
                title: "Sports Day Highlights",
                duration: "2:30",
                date: "March 2023",
                thumbnail: "/gallery/videos/sports-day-thumb.jpg"
              },
              {
                id: "video-3",
                title: "Science Fair Exhibition",
                duration: "4:15",
                date: "February 2023",
                thumbnail: "/gallery/videos/science-fair-thumb.jpg"
              },
              {
                id: "video-4",
                title: "Graduation Ceremony",
                duration: "5:20",
                date: "April 2023",
                thumbnail: "/gallery/videos/graduation-thumb.jpg"
              },
              {
                id: "video-5",
                title: "Cultural Festival",
                duration: "6:10",
                date: "December 2022",
                thumbnail: "/gallery/videos/cultural-fest-thumb.jpg"
              },
              {
                id: "video-6",
                title: "Campus Tour",
                duration: "7:45",
                date: "January 2023",
                thumbnail: "/gallery/videos/campus-tour-thumb.jpg"
              }
            ].map((video, i) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 relative">
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{video.title}</h3>
                    <p className="text-gray-600 text-sm">Duration: {video.duration} • Uploaded: {video.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-emerald-600 hover:bg-emerald-700">View More Videos</Button>
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Virtual Campus Tour</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Can't visit our campus in person? Take a virtual tour to explore our facilities, classrooms,
                  laboratories, sports areas, and more.
                </p>
                <p>
                  Our interactive virtual tour provides a 360-degree view of the entire campus, giving you a
                  comprehensive understanding of our infrastructure and learning environment.
                </p>
                <div className="pt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Start Virtual Tour</Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gray-200 rounded-lg shadow-xl overflow-hidden">
                <img
                  src="/gallery/virtual-tour-preview.jpg"
                  alt="Virtual tour preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Submit Photos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Contribute</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Share Your Memories</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are you a student, parent, or alumnus with photos from school events? Share them with our community!
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Submit Your Photos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox - Simplified without caption */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
              <span className="sr-only">Close</span>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}