"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

export default function TrilokContact() {
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
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-4">Get in Touch</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                We're here to help. Reach out to us with any questions, feedback, or inquiries.
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

      {/* Contact Information - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700">
                  We welcome your questions, feedback, and inquiries. Our dedicated team is here to assist you with any
                  information you may need about our school, admissions, programs, or events.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-700">
                        Trilok Vidhya Vihar
                        <br />
                        Tokar, Tah. Semari
                        <br />
                        Dist. Salumbar (Raj.) 313806
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-700">Main Office: +91 XXXXX XXXXX</p>
                      <p className="text-gray-700">Admissions: +91 XXXXX XXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-700">General Inquiries: info@trilokvidhyavihar.edu</p>
                      <p className="text-gray-700">Admissions: admissions@trilokvidhyavihar.edu</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-emerald-100 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Office Hours</h3>
                      <p className="text-gray-700">Monday to Friday: 8:00 AM - 4:00 PM</p>
                      <p className="text-gray-700">Saturday: 8:00 AM - 12:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
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
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <Input id="name" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input id="subject" placeholder="Enter message subject" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Enter your message" rows={5} />
                    </div>
                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section - Enhanced */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Find Us</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Our Location</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us easily with the map below or get directions to our campus
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <p className="text-xl font-medium text-gray-700">Map Placeholder</p>
                  <p className="text-gray-600 mt-2">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Get Directions</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Enhanced */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Help & Support</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about contacting and visiting our school
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What are the school's visiting hours for parents?",
                answer:
                  "Parents can visit the school during office hours (8:00 AM - 4:00 PM on weekdays and 8:00 AM - 12:00 PM on Saturdays). For meetings with teachers, we recommend scheduling an appointment in advance.",
              },
              {
                question: "How can I schedule a campus tour?",
                answer:
                  "You can schedule a campus tour by contacting our admissions office via phone or email. Tours are typically conducted on weekdays between 9:00 AM and 2:00 PM.",
              },
              {
                question: "Who should I contact for admission inquiries?",
                answer:
                  "For admission inquiries, please contact our admissions office at admissions@trilokvidhyavihar.edu or call +91 XXXXX XXXXX.",
              },
              {
                question: "How can I reach the school by public transport?",
                answer:
                  "The school is accessible by public bus routes 45 and 67. The nearest bus stop is 'Tokar Junction,' which is a 5-minute walk from the school entrance.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect with Us - Enhanced */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-3 text-center mb-8"
            >
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">Stay Connected</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">Connect With Us</h2>
              <div className="w-24 h-1.5 bg-emerald-600 mx-auto mb-6 rounded-full"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow us on social media to stay updated with the latest news and events
              </p>
            </motion.div>

            {[
              {
                platform: "Facebook",
                icon: "facebook",
                username: "@TrilokVidhyaVihar",
                description: "Follow us for regular updates, event photos, and announcements.",
              },
              {
                platform: "Instagram",
                icon: "instagram",
                username: "@trilok_official",
                description: "See glimpses of school life, student activities, and achievements.",
              },
              {
                platform: "Twitter",
                icon: "twitter",
                username: "@TrilokEdu",
                description: "Get the latest news, educational insights, and quick updates.",
              },
            ].map((social, index) => (
              <motion.div
                key={social.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-emerald-600 text-2xl">{social.icon.charAt(0).toUpperCase()}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{social.platform}</h3>
                    <p className="text-emerald-600 font-medium mb-3">{social.username}</p>
                    <p className="text-gray-700 mb-4">{social.description}</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Follow Us</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">We'd Love to Hear From You</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Whether you have a question, feedback, or want to learn more about our school, our team is ready to assist
              you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-white/90">
                Contact Us Now
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