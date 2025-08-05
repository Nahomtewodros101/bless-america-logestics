"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Package,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Users,
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

export default function ServicesPage() {
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
              Our <span className="text-amber-400">Services</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Comprehensive logistics solutions tailored to your business needs
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white group"
              >
                <Link href="/quote">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Core Transportation Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From coast-to-coast dry van transport to precise last-mile
              delivery, we've got your logistics covered.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Dry Van Service */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-900 p-3 rounded-lg mr-4 group-hover:bg-amber-600 transition-colors">
                      <Truck className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900">
                      Dry Van Transport
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/dry.jpg"
                      alt="Dry van fleet"
                      width={500}
                      height={300}
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Our dry van service provides secure, weather-protected
                    transportation for your general freight. With a modern fleet
                    and experienced drivers, we ensure your cargo arrives safely
                    and on time.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      "53' Standard Trailers",
                      "Climate Protection",
                      "GPS Tracking",
                      "Secure Loading",
                      "Coast-to-Coast Coverage",
                      "Flexible Scheduling",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-blue-900 mb-2">Ideal For:</h4>
                    <p className="text-gray-700">
                      General freight, retail goods, manufactured products,
                      non-perishable items, and any cargo requiring weather
                      protection.
                    </p>
                  </div>

                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white group">
                    Learn More About Dry Van
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Last-Mile Delivery */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-600 p-3 rounded-lg mr-4 group-hover:bg-blue-900 transition-colors">
                      <Package className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-blue-900">
                      Last-Mile Delivery
                    </h3>
                  </div>

                  <div className="overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/vaan.jpg"
                      alt="Last-mile delivery"
                      width={500}
                      height={300}
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Complete the final leg of your supply chain with our
                    reliable last-mile delivery service. We ensure your products
                    reach customers' doors safely and on schedule.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Door-to-Door Service",
                      "Flexible Time Windows",
                      "Real-Time Updates",
                      "Proof of Delivery",
                      "Urban & Suburban",
                      "Same-Day Options",
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-amber-800 mb-2">
                      Perfect For:
                    </h4>
                    <p className="text-gray-700">
                      E-commerce deliveries, retail distribution, residential
                      deliveries, and time-sensitive final mile logistics.
                    </p>
                  </div>

                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white group">
                    Explore Last-Mile Solutions
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Services */}
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
              Additional Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive logistics support to streamline your entire supply
              chain
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
                icon: MapPin,
                title: "Real-Time Tracking",
                description:
                  "Monitor your shipments 24/7 with our advanced GPS tracking system and receive proactive updates.",
                features: [
                  "Live GPS Updates",
                  "Delivery Notifications",
                  "Route Optimization",
                  "ETA Predictions",
                ],
              },
              {
                icon: Shield,
                title: "Cargo Insurance",
                description:
                  "Comprehensive coverage options to protect your valuable freight during transit.",
                features: [
                  "Full Value Protection",
                  "Liability Coverage",
                  "Quick Claims Process",
                  "Risk Assessment",
                ],
              },
              {
                icon: Clock,
                title: "Expedited Shipping",
                description:
                  "Time-critical deliveries with guaranteed service levels for urgent freight.",
                features: [
                  "Same-Day Service",
                  "Next-Day Delivery",
                  "Priority Handling",
                  "Dedicated Routes",
                ],
              },
            ].map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-blue-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-900 transition-colors">
                        <service.icon className="h-6 w-6 text-blue-900 group-hover:text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-blue-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          {feature}
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

      {/* Service Areas */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold mb-6">Nationwide Coverage</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From coast to coast, we deliver your freight anywhere in the
              continental United States
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Globe,
                title: "Coast-to-Coast",
                description:
                  "Complete coverage across all 48 continental states with reliable service.",
              },
              {
                icon: Zap,
                title: "Major Corridors",
                description:
                  "Optimized routes along major freight corridors for faster delivery times.",
              },
              {
                icon: Users,
                title: "Local Expertise",
                description:
                  "Regional knowledge and partnerships for efficient last-mile delivery.",
              },
            ].map((area, index) => (
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
                  <area.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-blue-100">{area.description}</p>
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
              Ready to Ship with Bless America LLC?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-8"
              variants={fadeInUp}
            >
              Get a custom quote for your shipping needs and experience the
              difference of working with a trusted logistics partner.
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
                    Get Quote Now
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
