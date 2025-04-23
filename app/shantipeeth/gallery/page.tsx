"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, ZoomIn } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function ShantipeethGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryCategories = [
    {
      id: "campus",
      name: "Campus",
      images: Array.from({ length: 8 }, (_, i) => ({
        id: `campus-${i + 1}`,
        src: `/trilokschool.jpg?height=600&width=800&text=Campus+Image+${i + 1}`,
        alt: `Campus Image ${i + 1}`,
        caption: `Our beautiful campus facilities - Image ${i + 1}`,
      })),
    },
    {
      id: "events",
      name: "Events",
      images: Array.from({ length: 8 }, (_, i) => ({
        id: `event-${i + 1}`,
        src: `/trievent.jpg?height=600&width=800&text=Event+Image+${i + 1}`,
        alt: `School Event Image ${i + 1}`,
        caption: `Memorable moments from our school events - Image ${i + 1}`,
      })),
    },
    {
      id: "sports",
      name: "Sports",
      images: Array.from({ length: 8 }, (_, i) => ({
        id: `sports-${i + 1}`,
        src: `/placeholder.svg?height=600&width=800&text=Sports+Image+${i + 1}`,
        alt: `Sports Activity Image ${i + 1}`,
        caption: `Sports and physical education activities - Image ${i + 1}`,
      })),
    },
    {
      id: "academics",
      name: "Academics",
      images: Array.from({ length: 8 }, (_, i) => ({
        id: `academics-${i + 1}`,
        src: `/placeholder.svg?height=600&width=800&text=Academic+Image+${i + 1}`,
        alt: `Academic Activity Image ${i + 1}`,
        caption: `Academic and classroom activities - Image ${i + 1}`,
      })),
    },
    {
      id: "cultural",
      name: "Cultural",
      images: Array.from({ length: 8 }, (_, i) => ({
        id: `cultural-${i + 1}`,
        src: `/placeholder.svg?height=600&width=800&text=Cultural+Image+${i + 1}`,
        alt: `Cultural Program Image ${i + 1}`,
        caption: `Cultural programs and celebrations - Image ${i + 1}`,
      })),
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Explore visual highlights from our campus, events, and student activities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
                <TabsList>
                  {galleryCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
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
                        onClick={() => setSelectedImage(image.src)}
                      >
                        <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                          <div className="relative aspect-square">
                            <img
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Video Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch videos showcasing our school events, student performances, and more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div className="mb-2 text-amber-600">
                        <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-700">Video Thumbnail {i + 1}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">School Event Video {i + 1}</h3>
                    <p className="text-gray-600 text-sm">Duration: 3:45 • Uploaded: May 2023</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button className="bg-amber-600 hover:bg-amber-700">View More Videos</Button>
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
                  <Button className="bg-amber-600 hover:bg-amber-700">Start Virtual Tour</Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gray-200 rounded-lg shadow-xl flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="mb-4 text-amber-600">
                    <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-xl font-medium text-gray-700">Virtual Tour Preview</p>
                  <p className="text-gray-600 mt-2">Click to start exploring our campus</p>
                </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Memories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Are you a student, parent, or alumnus with photos from school events? Share them with our community!
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Submit Your Photos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Image Lightbox */}
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
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged view"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}

