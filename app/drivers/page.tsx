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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Truck,
  DollarSign,
  Clock,
  Users,
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

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

export default function DriversPage() {
  const [formStep, setFormStep] = useState(1);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Drive with <span className="text-amber-400">Pride</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed">
                Join the Bless America family and experience what it means to be
                valued, respected, and rewarded for your dedication.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white group"
                  >
                    <Link href="/contact">Apply Now</Link>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                  >
                    <Link href="/contact">Contact Recruiting</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/trucker.jpg"
                  alt="Professional truck driver"
                  width={600}
                  height={500}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Drive with Bless America LLC?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We offer more than just a job – we provide a career path with a
              company that truly cares about its drivers.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: DollarSign,
                title: "Competitive Pay",
                description:
                  "Top industry rates with performance bonuses and regular pay increases.",
                details: [
                  "$0.65-$0.75 per mile",
                  "Performance bonuses",
                  "Annual raises",
                  "Fuel bonuses",
                ],
              },
              {
                icon: Clock,
                title: "Work-Life Balance",
                description:
                  "Flexible schedules and home time that respects your personal life.",
                details: [
                  "Home weekends",
                  "Flexible routes",
                  "Predictable schedules",
                  "Time off when needed",
                ],
              },
              {
                icon: Shield,
                title: "Comprehensive Benefits",
                description:
                  "Full benefits package including health, dental, vision, and retirement.",
                details: [
                  "Health insurance",
                  "Dental & vision",
                  "401(k) matching",
                  "Life insurance",
                ],
              },
              {
                icon: Truck,
                title: "Modern Equipment",
                description:
                  "Well-maintained, late-model trucks with all the amenities you need.",
                details: [
                  "2020+ model trucks",
                  "GPS navigation",
                  "Comfortable cabs",
                  "Regular maintenance",
                ],
              },
              {
                icon: Users,
                title: "Family Culture",
                description:
                  "Join a team that treats you like family, not just an employee number.",
                details: [
                  "Open door policy",
                  "Driver appreciation",
                  "Team events",
                  "Supportive management",
                ],
              },
              {
                icon: Heart,
                title: "Respect & Recognition",
                description:
                  "Your hard work is noticed and rewarded with respect and recognition.",
                details: [
                  "Driver of the month",
                  "Safety awards",
                  "Service recognition",
                  "Career advancement",
                ],
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-amber-400">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-900 p-3 rounded-lg mr-4 group-hover:bg-amber-600 transition-colors">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">{benefit.description}</p>
                    <ul className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Driver Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              What Our Drivers Say
            </h2>
            <p className="text-xl text-gray-700">
              Hear from the drivers who make Bless America LLC their home
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Mike Rodriguez",
                experience: "3 years with Bless America",
                image: "/placeholder.svg?height=200&width=200&text=Driver+Mike",
                quote:
                  "This company truly treats drivers like family. Great pay, respect, and they always have my back on the road. Best decision I ever made.",
                rating: 5,
              },
              {
                name: "Jennifer Thompson",
                experience: "2 years with Bless America",
                image:
                  "/placeholder.svg?height=200&width=200&text=Driver+Jennifer",
                quote:
                  "The work-life balance here is amazing. I'm home every weekend and the equipment is always in great condition. Highly recommend!",
                rating: 5,
              },
              {
                name: "Carlos Martinez",
                experience: "4 years with Bless America",
                image:
                  "/placeholder.svg?height=200&width=200&text=Driver+Carlos",
                quote:
                  "From day one, management has been supportive and fair. The pay is competitive and the routes are well-planned. This is my trucking home.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="overflow-hidden rounded-full w-20 h-20 mx-auto mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-amber-500 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-blue-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.experience}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Driver Requirements</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're looking for professional drivers who share our commitment to
              safety and excellence
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Minimum Requirements
              </h3>
              <ul className="space-y-3">
                {[
                  "Valid Class A CDL",
                  "Minimum 2 years OTR experience",
                  "Clean driving record (last 3 years)",
                  "DOT physical and drug screen",
                  "Professional attitude and appearance",
                  "Reliable and punctual",
                ].map((requirement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                Preferred Qualifications
              </h3>
              <ul className="space-y-3">
                {[
                  "3+ years of experience",
                  "Hazmat endorsement",
                  "TWIC card",
                  "Clean CSA scores",
                  "Customer service experience",
                  "Flexibility with routes",
                ].map((qualification, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Star className="h-5 w-5 text-amber-400 mr-3 flex-shrink-0" />
                    <span>{qualification}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Apply to Join Our Team
              </h2>
              <p className="text-xl text-gray-700">
                Ready to start your career with Bless America LLC? Fill out our
                application below.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-gray-200">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">
                        Driver Application
                      </h3>
                      <div className="text-sm text-gray-600">
                        Step {formStep} of 3
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(formStep / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <form className="space-y-6">
                    {formStep === 1 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                          Personal Information
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name *
                            </label>
                            <Input placeholder="Your first name" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name *
                            </label>
                            <Input placeholder="Your last name" required />
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Email *
                            </label>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              required
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
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Address *
                          </label>
                          <Input placeholder="Street address" required />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <Input placeholder="City" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              State *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="al">Alabama</SelectItem>
                                <SelectItem value="ca">California</SelectItem>
                                <SelectItem value="fl">Florida</SelectItem>
                                <SelectItem value="tx">Texas</SelectItem>
                                {/* Add more states as needed */}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              ZIP Code *
                            </label>
                            <Input placeholder="12345" required />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {formStep === 2 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                          Driving Experience
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CDL License Number *
                            </label>
                            <Input placeholder="CDL number" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              CDL Issue State *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="al">Alabama</SelectItem>
                                <SelectItem value="ca">California</SelectItem>
                                <SelectItem value="fl">Florida</SelectItem>
                                <SelectItem value="tx">Texas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Years of OTR Experience *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2-3">2-3 years</SelectItem>
                                <SelectItem value="3-5">3-5 years</SelectItem>
                                <SelectItem value="5-10">5-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Current/Last Employer
                            </label>
                            <Input placeholder="Company name" />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Endorsements
                          </label>
                          <div className="grid md:grid-cols-3 gap-4">
                            {[
                              "Hazmat",
                              "TWIC",
                              "Tanker",
                              "Double/Triple",
                              "Passenger",
                              "School Bus",
                            ].map((endorsement) => (
                              <div
                                key={endorsement}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox id={endorsement} />
                                <label
                                  htmlFor={endorsement}
                                  className="text-sm text-gray-700"
                                >
                                  {endorsement}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Any accidents or violations in the last 3 years?
                          </label>
                          <Textarea
                            placeholder="Please describe any accidents or violations..."
                            rows={3}
                          />
                        </div>
                      </motion.div>
                    )}

                    {formStep === 3 && (
                      <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h4 className="text-xl font-bold text-blue-900 mb-4">
                          Additional Information
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Preferred Start Date
                            </label>
                            <Input type="date" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Desired Pay Rate
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0.60-0.65">
                                  $0.60-$0.65 per mile
                                </SelectItem>
                                <SelectItem value="0.65-0.70">
                                  $0.65-$0.70 per mile
                                </SelectItem>
                                <SelectItem value="0.70+">
                                  $0.70+ per mile
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Why do you want to work for Bless America LLC?
                          </label>
                          <Textarea
                            placeholder="Tell us why you're interested in joining our team..."
                            rows={4}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Comments
                          </label>
                          <Textarea
                            placeholder="Any additional information you'd like to share..."
                            rows={3}
                          />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="terms" required />
                          <label
                            htmlFor="terms"
                            className="text-sm text-gray-700"
                          >
                            I agree to the terms and conditions and authorize
                            Bless America LLC to conduct background checks *
                          </label>
                        </div>
                      </motion.div>
                    )}

                    <div className="flex justify-between pt-6">
                      {formStep > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setFormStep(formStep - 1)}
                          className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                        >
                          Previous
                        </Button>
                      )}
                      {formStep < 3 ? (
                        <Button
                          type="button"
                          onClick={() => setFormStep(formStep + 1)}
                          className="bg-amber-600 hover:bg-amber-700 text-white ml-auto"
                        >
                          Next Step
                        </Button>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ml-auto"
                        >
                          <Button
                            type="submit"
                            className="bg-amber-600 hover:bg-amber-700 text-white"
                          >
                            Submit Application
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Recruiter */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 className="text-4xl font-bold mb-6" variants={fadeInUp}>
              Questions About Driving with Us?
            </motion.h2>
            <motion.p
              className="text-xl text-blue-100 mb-8"
              variants={fadeInUp}
            >
              Our recruiting team is here to help. Get in touch today to learn
              more about opportunities with Bless America LLC.
            </motion.p>
            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto"
              variants={staggerContainer}
            >
              <motion.div
                className="flex items-center justify-center space-x-4"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-8 w-8 text-amber-400" />
                <div className="text-left">
                  <p className="font-bold">Call Our Recruiters</p>
                  <p className="text-blue-100">(555) 123-4567</p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center space-x-4"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-8 w-8 text-amber-400" />
                <div className="text-left">
                  <p className="font-bold">Email Recruiting</p>
                  <p className="text-blue-100">drivers@blessamericallc.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
