"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"

export default function ShantipeethAbout() {
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
              <div className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-sm font-medium text-white mb-4">Our Story</div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">About Our School</h1>
              <div className="w-20 h-1.5 bg-white rounded-full mb-6"></div>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-light">
                Learn about our history, mission, vision, and the values that guide Shantipeeth Public Secondary School.
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Shantipeeth Public Secondary School was established in 1998 with a vision to provide quality education
                  to the children of Tokar and surrounding areas. What started as a small institution with just a few
                  classrooms has now grown into a prestigious educational institution.
                </p>
                <p>
                  Over the years, our school has expanded its infrastructure, enhanced its academic programs, and built
                  a reputation for excellence in education. We have consistently produced outstanding results in board
                  examinations and have seen our students excel in various fields.
                </p>
                <p>
                  Today, Shantipeeth Public School stands as a symbol of educational excellence in the region,
                  continuing its mission to nurture young minds and prepare them for the challenges of the future.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-100 rounded-lg"></div>
              <img
                src="/placeholder.svg?height=600&width=800&text=School+History"
                alt="School History"
                className="rounded-lg shadow-xl w-full h-auto relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that shape our approach to education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-amber-100">
                    <span className="text-amber-600 text-2xl font-bold">M</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      To provide a nurturing and stimulating environment where students can develop their intellectual,
                      physical, emotional, and social potential to the fullest.
                    </p>
                    <p>
                      To instill in students a love for learning, a respect for diversity, and a commitment to
                      excellence in all endeavors.
                    </p>
                    <p>
                      To prepare students to be responsible citizens who contribute positively to society and are
                      equipped to face the challenges of a rapidly changing world.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex items-center justify-center h-12 w-12 rounded-full bg-orange-100">
                    <span className="text-orange-600 text-2xl font-bold">V</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      To be recognized as a center of excellence in education that nurtures future leaders with strong
                      values, critical thinking skills, and a global perspective.
                    </p>
                    <p>
                      To create an educational ecosystem that balances academic rigor with holistic development,
                      preparing students not just for examinations but for life.
                    </p>
                    <p>
                      To foster innovation in teaching and learning, embracing new technologies and methodologies while
                      preserving traditional values and cultural heritage.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our educational philosophy and daily practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of education, encouraging students to aim high and achieve their full potential.",
              },
              {
                title: "Integrity",
                description:
                  "We promote honesty, ethical behavior, and moral courage, teaching students to stand by their principles even in challenging situations.",
              },
              {
                title: "Respect",
                description:
                  "We foster respect for self, others, and the environment, creating a community where diversity is celebrated and every individual is valued.",
              },
              {
                title: "Responsibility",
                description:
                  "We instill a sense of responsibility towards oneself, the community, and the world, preparing students to be conscientious citizens.",
              },
              {
                title: "Innovation",
                description:
                  "We encourage creative thinking and problem-solving, preparing students to adapt to and thrive in a rapidly changing world.",
              },
              {
                title: "Compassion",
                description:
                  "We nurture empathy and kindness, teaching students to care for others and contribute positively to society.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start mb-4">
                      <CheckCircle2 className="h-6 w-6 text-amber-600 mr-3 mt-1" />
                      <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    </div>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">School Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Meet the dedicated team guiding our institution</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Anand Sharma",
                position: "Principal",
                image: "/placeholder.svg?height=400&width=400&text=Principal",
                bio: "Dr. Sharma brings over 25 years of experience in education. He holds a Ph.D. in Education and is committed to fostering academic excellence and holistic development.",
              },
              {
                name: "Mrs. Priya Verma",
                position: "Vice Principal",
                image: "/placeholder.svg?height=400&width=400&text=Vice+Principal",
                bio: "Mrs. Verma oversees the academic programs and student welfare. With her 20 years of teaching experience, she ensures that our educational standards remain high.",
              },
              {
                name: "Mr. Rajesh Gupta",
                position: "Administrative Head",
                image: "/placeholder.svg?height=400&width=400&text=Admin+Head",
                bio: "Mr. Gupta manages the administrative functions of the school, ensuring smooth operations and efficient resource management for optimal learning experiences.",
              },
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 overflow-hidden rounded-full w-32 h-32 mx-auto">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-amber-600 font-medium mb-4">{leader.position}</p>
                    <p className="text-gray-700">{leader.bio}</p>
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
            <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Experience firsthand the learning environment and facilities that make Shantipeeth Public School a special
              place for education.
            </p>
            <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

