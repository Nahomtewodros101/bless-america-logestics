"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Users,
  Award,
  Target,
  Heart,
  Shield,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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

export default function AboutPage() {
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
              About <span className="text-amber-400">Bless America LLC</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              15+ years of trusted logistics excellence, built on family values
              and professional service
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/bles.jpg"
                  alt="Bless America LLC founders and fleet"
                  width={600}
                  height={400}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded over 15 years ago with a simple mission: to provide
                reliable, efficient logistics solutions while treating every
                driver, customer, and partner like family. What started as a
                small operation has grown into a trusted nationwide logistics
                provider.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our success is built on the foundation of strong relationships,
                transparent communication, and an unwavering commitment to
                getting your freight where it needs to be, when it needs to be
                there.
              </p>
              <div className="flex items-center space-x-6 text-blue-900">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">10K+</div>
                  <div className="text-sm">Deliveries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">99%</div>
                  <div className="text-sm">On-Time Rate</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
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
              Our Foundation
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-blue-300">
                <CardContent className="p-8">
                  <motion.div
                    className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Target className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide reliable, efficient logistics solutions that
                    exceed expectations while building lasting relationships
                    based on trust, transparency, and exceptional service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-amber-300">
                <CardContent className="p-8">
                  <motion.div
                    className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be America's most trusted logistics partner, known for
                    our family values, professional excellence, and commitment
                    to making every mile matter.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-green-300">
                <CardContent className="p-8">
                  <motion.div
                    className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Our Values
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Family-first culture, unwavering integrity, continuous
                    improvement, and treating every stakeholder with respect and
                    professionalism.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experienced professionals dedicated to your success
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
                name: "John Smith",
                title: "Founder & CEO",
                image:
                  "/placeholder.svg?height=300&width=300&text=CEO+Portrait",
                bio: "With over 20 years in logistics, John founded Bless America LLC with a vision of family-centered transportation excellence.",
              },
              {
                name: "Sarah Johnson",
                title: "Operations Director",
                image:
                  "/placeholder.svg?height=300&width=300&text=Operations+Director",
                bio: "Sarah ensures seamless operations and maintains our high standards of service delivery across all routes.",
              },
              {
                name: "Mike Rodriguez",
                title: "Fleet Manager",
                image:
                  "/placeholder.svg?height=300&width=300&text=Fleet+Manager",
                bio: "Mike oversees our driver relations and fleet maintenance, ensuring safety and reliability on every mile.",
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.title}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Bless America LLC?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              The advantages that set us apart in the logistics industry
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Shield,
                title: "Proven Reliability",
                description:
                  "15+ years of consistent, on-time delivery performance you can count on.",
              },
              {
                icon: Users,
                title: "Family Culture",
                description:
                  "We treat drivers, customers, and partners like family members, not just business contacts.",
              },
              {
                icon: Truck,
                title: "Modern Fleet",
                description:
                  "Well-maintained, up-to-date equipment ensures safe and efficient transportation.",
              },
              {
                icon: Award,
                title: "Industry Excellence",
                description:
                  "Award-winning service and recognition for outstanding logistics performance.",
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <motion.div
                  className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <advantage.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-blue-100">{advantage.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
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
              By the Numbers
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our track record speaks for itself
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                number: "15+",
                label: "Years in Business",
                color: "text-blue-900",
              },
              {
                number: "10,000+",
                label: "Successful Deliveries",
                color: "text-amber-600",
              },
              {
                number: "99.2%",
                label: "On-Time Delivery Rate",
                color: "text-green-600",
              },
              {
                number: "50+",
                label: "Professional Drivers",
                color: "text-blue-900",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl font-bold text-blue-900 mb-6"
              variants={fadeInUp}
            >
              Ready to Experience the Bless America Difference?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-8"
              variants={fadeInUp}
            >
              Join thousands of satisfied customers who trust us with their
              logistics needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white group"
                >
                  <Link href="/quote">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                >
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
