"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Users,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              variants={fadeInUp}
            >
              Contact <span className="text-amber-400">Us</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Ready to ship? Have questions? We're here to help 24/7
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose the best way to reach us - we're available around the clock
              for your logistics needs
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                subtitle: "24/7 Support",
                contact: "(555) 123-4567",
                description:
                  "Speak directly with our logistics experts for immediate assistance and quotes.",
                color: "bg-blue-900",
              },
              {
                icon: Mail,
                title: "Email Us",
                subtitle: "Quick Response",
                contact: "info@blessamericallc.com",
                description:
                  "Send us your questions and we'll respond within 2 hours during business hours.",
                color: "bg-amber-600",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                subtitle: "Main Office",
                contact: "123 Logistics Way, Transport City, TX 75001",
                description:
                  "Stop by our headquarters for in-person consultations and fleet tours.",
                color: "bg-green-600",
              },
            ].map((option, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-blue-300">
                  <CardContent className="p-8">
                    <motion.div
                      className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <option.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">
                      {option.title}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {option.subtitle}
                    </p>
                    <p className="text-lg font-bold text-gray-900 mb-4">
                      {option.contact}
                    </p>
                    <p className="text-gray-700 text-sm">
                      {option.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Business Hours */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="bg-blue-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Clock className="h-8 w-8 text-blue-900 mr-4" />
                  <h3 className="text-2xl font-bold text-blue-900">
                    Business Hours
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 text-center">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4">
                      Customer Service
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Monday - Friday:</strong> 6:00 AM - 10:00 PM
                      </p>
                      <p>
                        <strong>Saturday:</strong> 8:00 AM - 6:00 PM
                      </p>
                      <p>
                        <strong>Sunday:</strong> 10:00 AM - 4:00 PM
                      </p>
                      <p className="text-amber-600 font-medium">
                        Emergency support available 24/7
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-4">
                      Office Hours
                    </h4>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                      </p>
                      <p>
                        <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                      </p>
                      <p>
                        <strong>Sunday:</strong> Closed
                      </p>
                      <p className="text-gray-600 text-sm">
                        Appointments recommended for visits
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <Card className="border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <Input
                            placeholder="Your first name"
                            required
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <Input
                            placeholder="Your last name"
                            required
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            type="email"
                            placeholder="your.email@company.com"
                            required
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone *
                          </label>
                          <Input
                            type="tel"
                            placeholder="(555) 123-4567"
                            required
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <Input
                            placeholder="Your company name"
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Inquiry Type *
                          </label>
                          <Select>
                            <SelectTrigger className="transition-all focus:ring-2 focus:ring-amber-500">
                              <SelectValue placeholder="Select inquiry type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="quote">
                                Request Quote
                              </SelectItem>
                              <SelectItem value="tracking">
                                Shipment Tracking
                              </SelectItem>
                              <SelectItem value="driver">
                                Driver Opportunities
                              </SelectItem>
                              <SelectItem value="partnership">
                                Partnership Inquiry
                              </SelectItem>
                              <SelectItem value="support">
                                Customer Support
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          placeholder="Brief subject line"
                          required
                          className="transition-all focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          placeholder="Please provide details about your inquiry..."
                          rows={6}
                          required
                          className="transition-all focus:ring-2 focus:ring-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          How did you hear about us?
                        </label>
                        <Select>
                          <SelectTrigger className="transition-all focus:ring-2 focus:ring-amber-500">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">
                              Google Search
                            </SelectItem>
                            <SelectItem value="referral">Referral</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="trade-show">
                              Trade Show
                            </SelectItem>
                            <SelectItem value="advertising">
                              Advertising
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 group">
                          Send Message
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Additional Information */}
              <motion.div className="space-y-8" variants={fadeInUp}>
                {/* Quick Contact */}
                <Card className="bg-blue-900 text-white border-2 border-blue-800">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      <MessageSquare className="mr-3 h-6 w-6" />
                      Need Immediate Help?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-amber-400 mr-3" />
                        <div>
                          <p className="font-medium">Emergency Dispatch</p>
                          <p className="text-blue-100">(555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-amber-400 mr-3" />
                        <div>
                          <p className="font-medium">Urgent Support</p>
                          <p className="text-blue-100">
                            urgent@blessamericallc.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-800 rounded-lg">
                      <p className="text-sm text-blue-100">
                        For time-sensitive shipments or urgent issues, call our
                        emergency dispatch line available 24/7.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Department Contacts */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                      <Users className="mr-3 h-6 w-6" />
                      Department Contacts
                    </h3>
                    <div className="space-y-4">
                      {[
                        {
                          department: "Sales & Quotes",
                          email: "sales@blessamericallc.com",
                          phone: "(555) 123-4567 ext. 1",
                        },
                        {
                          department: "Customer Service",
                          email: "service@blessamericallc.com",
                          phone: "(555) 123-4567 ext. 2",
                        },
                        {
                          department: "Driver Recruiting",
                          email: "drivers@blessamericallc.com",
                          phone: "(555) 123-4567 ext. 3",
                        },
                        {
                          department: "Accounting",
                          email: "billing@blessamericallc.com",
                          phone: "(555) 123-4567 ext. 4",
                        },
                      ].map((dept, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-amber-600 pl-4"
                        >
                          <h4 className="font-bold text-blue-900">
                            {dept.department}
                          </h4>
                          <p className="text-sm text-gray-600">{dept.email}</p>
                          <p className="text-sm text-gray-600">{dept.phone}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Response Time */}
                <Card className="bg-amber-50 border-2 border-amber-200">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-amber-800 mb-4">
                      Response Times
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>
                          Phone calls: Immediate during business hours
                        </span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Email inquiries: Within 2 hours</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Quote requests: Within 1 hour</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                        <span>Emergency support: 24/7 availability</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Visit Our Headquarters
              </h2>
              <p className="text-xl text-gray-700">
                Located in the heart of Transport City, Texas - easily
                accessible from major highways
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-gray-200 overflow-hidden">
                <div className="h-96 bg-gray-300 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">
                      123 Logistics Way, Transport City, TX 75001
                    </p>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Address</h4>
                      <p className="text-gray-700">
                        123 Logistics Way
                        <br />
                        Transport City, TX 75001
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Parking</h4>
                      <p className="text-gray-700">
                        Free parking available
                        <br />
                        Truck parking for drivers
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">Nearby</h4>
                      <p className="text-gray-700">
                        5 minutes from I-35
                        <br />
                        Adjacent to truck stops
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
