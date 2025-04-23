"use client"

import { motion } from "framer-motion"
import { CheckCircle2, FileText, Calendar, Clock, HelpCircle } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion"

export default function ShantipeethAdmissions() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Admissions</h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Join our community of learners and embark on a journey of academic excellence and holistic development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to joining Shantipeeth Public Secondary School
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "Step 1",
                title: "Application Submission",
                icon: <FileText className="h-10 w-10 text-amber-600" />,
                description:
                  "Complete and submit the application form along with the required documents and application fee.",
              },
              {
                step: "Step 2",
                title: "Entrance Assessment",
                icon: <Calendar className="h-10 w-10 text-amber-600" />,
                description:
                  "Applicants undergo an entrance assessment to evaluate their academic readiness and potential.",
              },
              {
                step: "Step 3",
                title: "Interview & Admission",
                icon: <CheckCircle2 className="h-10 w-10 text-amber-600" />,
                description:
                  "Shortlisted candidates and their parents are invited for an interview, followed by the admission offer.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="inline-block rounded-full bg-amber-100 p-3 mb-4">{step.icon}</div>
                    <div className="text-sm font-medium text-amber-600 mb-2">{step.step}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Download Application Form
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Admission Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admission Schedule</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates for the admission process for the academic year 2023-24
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Class</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Form Availability</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Last Date for Submission</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Entrance Test</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Results</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          class: "Nursery to Class I",
                          formAvailability: "October 1, 2023",
                          lastDate: "November 30, 2023",
                          entranceTest: "December 10, 2023",
                          results: "December 20, 2023",
                        },
                        {
                          class: "Class II to Class VIII",
                          formAvailability: "November 1, 2023",
                          lastDate: "December 15, 2023",
                          entranceTest: "January 5, 2024",
                          results: "January 15, 2024",
                        },
                        {
                          class: "Class IX & X",
                          formAvailability: "December 1, 2023",
                          lastDate: "January 31, 2024",
                          entranceTest: "February 10, 2024",
                          results: "February 20, 2024",
                        },
                        {
                          class: "Class XI",
                          formAvailability: "March 1, 2024",
                          lastDate: "April 15, 2024",
                          entranceTest: "April 25, 2024",
                          results: "May 5, 2024",
                        },
                      ].map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 text-gray-900 font-medium">{row.class}</td>
                          <td className="py-3 px-4 text-gray-700">{row.formAvailability}</td>
                          <td className="py-3 px-4 text-gray-700">{row.lastDate}</td>
                          <td className="py-3 px-4 text-gray-700">{row.entranceTest}</td>
                          <td className="py-3 px-4 text-gray-700">{row.results}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-sm text-gray-600">
                  <p>* Dates are subject to change. Please check the school notice board or website for any updates.</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Eligibility Criteria</h2>
              <Card className="border-none shadow-md h-full">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Age Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Nursery: 3+ years as on March 31, 2024</li>
                        <li>LKG: 4+ years as on March 31, 2024</li>
                        <li>UKG: 5+ years as on March 31, 2024</li>
                        <li>Class I: 6+ years as on March 31, 2024</li>
                        <li>For other classes, the corresponding age criteria apply</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Academic Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>For Classes II to IX: Minimum 60% marks in the previous class</li>
                        <li>For Class XI (Science): Minimum 75% in Science & Mathematics</li>
                        <li>For Class XI (Commerce): Minimum 70% in Mathematics/Business Studies</li>
                        <li>For Class XI (Humanities): Minimum 65% aggregate in Class X</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Other Requirements</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Satisfactory performance in the entrance assessment</li>
                        <li>Good conduct and character</li>
                        <li>Medical fitness</li>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <Card className="border-none shadow-md h-full">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">For All Classes</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Completed application form</li>
                        <li>Four recent passport-sized photographs</li>
                        <li>Birth certificate (original and photocopy)</li>
                        <li>Aadhar card of the student (photocopy)</li>
                        <li>Residential proof (photocopy)</li>
                        <li>Vaccination record</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        Additional Documents for Classes II and Above
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Report card of the previous class (original and photocopy)</li>
                        <li>Transfer certificate from the previous school</li>
                        <li>Character certificate from the previous school</li>
                        <li>Migration certificate (for Class XI admissions)</li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Button className="bg-amber-600 hover:bg-amber-700">Download Document Checklist</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent fee details for the academic year 2023-24
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Fee Component</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Nursery to Class V</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Class VI to VIII</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Class IX & X</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-900">Class XI & XII</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          component: "Admission Fee (One-time)",
                          nurseryToV: "₹10,000",
                          viToViii: "₹12,000",
                          ixAndX: "₹15,000",
                          xiAndXii: "₹18,000",
                        },
                        {
                          component: "Tuition Fee (Quarterly)",
                          nurseryToV: "₹8,000",
                          viToViii: "₹10,000",
                          ixAndX: "₹12,000",
                          xiAndXii: "₹15,000",
                        },
                        {
                          component: "Development Fee (Annual)",
                          nurseryToV: "₹5,000",
                          viToViii: "₹6,000",
                          ixAndX: "₹7,000",
                          xiAndXii: "₹8,000",
                        },
                        {
                          component: "Computer Lab Fee (Annual)",
                          nurseryToV: "₹2,000",
                          viToViii: "₹3,000",
                          ixAndX: "₹4,000",
                          xiAndXii: "₹5,000",
                        },
                        {
                          component: "Library Fee (Annual)",
                          nurseryToV: "₹1,000",
                          viToViii: "₹1,500",
                          ixAndX: "₹2,000",
                          xiAndXii: "₹2,500",
                        },
                        {
                          component: "Examination Fee (Annual)",
                          nurseryToV: "₹1,500",
                          viToViii: "₹2,000",
                          ixAndX: "₹2,500",
                          xiAndXii: "₹3,000",
                        },
                      ].map((row, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 text-gray-900 font-medium">{row.component}</td>
                          <td className="py-3 px-4 text-gray-700">{row.nurseryToV}</td>
                          <td className="py-3 px-4 text-gray-700">{row.viToViii}</td>
                          <td className="py-3 px-4 text-gray-700">{row.ixAndX}</td>
                          <td className="py-3 px-4 text-gray-700">{row.xiAndXii}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 text-sm text-gray-600 space-y-2">
                  <p>* Transport fee is additional and depends on the distance.</p>
                  <p>* Fee structure is subject to revision for the next academic year.</p>
                  <p>* Sibling discount of 10% on tuition fee is available for the second child.</p>
                </div>
                <div className="mt-6">
                  <Button className="bg-amber-600 hover:bg-amber-700">Download Complete Fee Structure</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our admission process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "What is the admission process for new students?",
                      answer:
                        "The admission process involves submitting an application form, followed by an entrance assessment and an interview. Based on the performance and availability of seats, admission is offered to selected candidates.",
                    },
                    {
                      question: "Is there an entrance test for all classes?",
                      answer:
                        "Yes, there is an entrance assessment for all classes from Class I onwards. For Nursery to UKG, there is an informal interaction to assess the child's readiness for school.",
                    },
                    {
                      question: "What is the student-teacher ratio in the school?",
                      answer:
                        "We maintain a student-teacher ratio of 25:1 to ensure personalized attention and effective learning.",
                    },
                    {
                      question: "Are there any scholarships available?",
                      answer:
                        "Yes, we offer merit scholarships to students who excel in academics, sports, or performing arts. We also have scholarships for economically disadvantaged students.",
                    },
                    {
                      question: "What is the school's policy on mid-term admissions?",
                      answer:
                        "Mid-term admissions are considered subject to the availability of seats and the student's performance in the entrance assessment. Transfer certificates and other relevant documents are required.",
                    },
                    {
                      question: "How can I schedule a school visit?",
                      answer:
                        "You can schedule a school visit by contacting our admission office at admissions@shantipeethschool.edu or by calling +91-XXXXX-XXXXX during office hours (Monday to Friday, 9:00 AM to 3:00 PM).",
                    },
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-gray-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Our Admissions Office</h2>
              <div className="space-y-6 text-gray-700">
                <p>
                  Our admissions team is here to guide you through the entire process and answer any questions you may
                  have about joining Shantipeeth Public Secondary School.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Office Hours</h3>
                      <p>Monday to Friday: 9:00 AM - 3:00 PM</p>
                      <p>Saturday: 9:00 AM - 12:00 PM (By appointment only)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-amber-600 mr-3 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Admissions Helpline</h3>
                      <p>Phone: +91-XXXXX-XXXXX</p>
                      <p>Email: admissions@shantipeethschool.edu</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-amber-600 hover:bg-amber-700">Schedule a Campus Visit</Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-none shadow-md overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Admissions+Office"
                  alt="Admissions Office"
                  className="w-full h-auto"
                />
              </Card>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Begin Your Journey With Us</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Take the first step towards providing your child with a quality education that focuses on holistic
              development and academic excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-amber-700 hover:bg-white/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Download Prospectus
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

