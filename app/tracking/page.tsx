"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Package, Truck, Clock, CheckCircle, AlertCircle, Search, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingResult, setTrackingResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setTrackingResult({
        trackingNumber: trackingNumber,
        status: "In Transit",
        estimatedDelivery: "March 15, 2024",
        currentLocation: "Chicago, IL",
        origin: "Los Angeles, CA",
        destination: "New York, NY",
        driver: "Mike Rodriguez",
        driverPhone: "(555) 987-6543",
        timeline: [
          {
            status: "Picked Up",
            location: "Los Angeles, CA",
            date: "March 12, 2024",
            time: "10:30 AM",
            completed: true,
          },
          {
            status: "In Transit",
            location: "Phoenix, AZ",
            date: "March 12, 2024",
            time: "8:45 PM",
            completed: true,
          },
          {
            status: "In Transit",
            location: "Denver, CO",
            date: "March 13, 2024",
            time: "2:15 PM",
            completed: true,
          },
          {
            status: "In Transit",
            location: "Chicago, IL",
            date: "March 14, 2024",
            time: "11:20 AM",
            completed: true,
            current: true,
          },
          {
            status: "Out for Delivery",
            location: "New York, NY",
            date: "March 15, 2024",
            time: "Expected 9:00 AM",
            completed: false,
          },
          {
            status: "Delivered",
            location: "New York, NY",
            date: "March 15, 2024",
            time: "Expected 2:00 PM",
            completed: false,
          },
        ],
      })
      setIsLoading(false)
    }, 1500)
  }

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
            <motion.h1 className="text-5xl lg:text-6xl font-bold mb-6" variants={fadeInUp}>
              Track Your <span className="text-amber-400">Shipment</span>
            </motion.h1>
            <motion.p className="text-xl lg:text-2xl mb-8 leading-relaxed" variants={fadeInUp}>
              Real-time tracking and updates for complete peace of mind
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tracking Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Enter Tracking Number</h2>
                    <p className="text-gray-700">
                      Enter your tracking number below to get real-time updates on your shipment
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tracking Number</label>
                      <Input
                        placeholder="e.g., BA123456789"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        className="text-lg py-3"
                        onKeyPress={(e) => e.key === "Enter" && handleTrack()}
                      />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleTrack}
                        disabled={isLoading || !trackingNumber.trim()}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg"
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Tracking...
                          </div>
                        ) : (
                          <>
                            <Search className="mr-2 h-5 w-5" />
                            Track Shipment
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>

                  <div className="mt-6 text-center text-sm text-gray-600">
                    <p>
                      Don't have your tracking number?{" "}
                      <a href="/contact" className="text-blue-900 hover:underline">
                        Contact us
                      </a>{" "}
                      for assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tracking Results */}
      {trackingResult && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div className="max-w-6xl mx-auto" initial="initial" animate="animate" variants={staggerContainer}>
              {/* Shipment Overview */}
              <motion.div variants={fadeInUp}>
                <Card className="mb-8 border-2 border-gray-200 shadow-lg">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Package className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2">Tracking #</h3>
                        <p className="text-gray-700">{trackingResult.trackingNumber}</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Truck className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2">Status</h3>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {trackingResult.status}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2">Est. Delivery</h3>
                        <p className="text-gray-700">{trackingResult.estimatedDelivery}</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <MapPin className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="font-bold text-blue-900 mb-2">Current Location</h3>
                        <p className="text-gray-700">{trackingResult.currentLocation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Route Information */}
              <motion.div variants={fadeInUp}>
                <Card className="mb-8 border-2 border-gray-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Route Information</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="bg-blue-100 p-4 rounded-lg mb-4">
                          <MapPin className="h-8 w-8 text-blue-900 mx-auto" />
                        </div>
                        <h4 className="font-bold text-blue-900 mb-2">Origin</h4>
                        <p className="text-gray-700">{trackingResult.origin}</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-amber-100 p-4 rounded-lg mb-4">
                          <Truck className="h-8 w-8 text-amber-600 mx-auto" />
                        </div>
                        <h4 className="font-bold text-blue-900 mb-2">Driver</h4>
                        <p className="text-gray-700">{trackingResult.driver}</p>
                        <p className="text-sm text-gray-600">{trackingResult.driverPhone}</p>
                      </div>
                      <div className="text-center">
                        <div className="bg-green-100 p-4 rounded-lg mb-4">
                          <Package className="h-8 w-8 text-green-600 mx-auto" />
                        </div>
                        <h4 className="font-bold text-blue-900 mb-2">Destination</h4>
                        <p className="text-gray-700">{trackingResult.destination}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Timeline */}
              <motion.div variants={fadeInUp}>
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Shipment Timeline</h3>
                    <div className="space-y-6">
                      {trackingResult.timeline.map((event: any, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                              event.completed ? (event.current ? "bg-amber-600" : "bg-green-600") : "bg-gray-300"
                            }`}
                          >
                            {event.completed ? (
                              <CheckCircle className="h-5 w-5 text-white" />
                            ) : (
                              <Clock className="h-5 w-5 text-gray-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h4
                                className={`font-bold ${
                                  event.current
                                    ? "text-amber-600"
                                    : event.completed
                                      ? "text-green-600"
                                      : "text-gray-600"
                                }`}
                              >
                                {event.status}
                                {event.current && (
                                  <Badge variant="secondary" className="ml-2 bg-amber-100 text-amber-800">
                                    Current
                                  </Badge>
                                )}
                              </h4>
                              <div className="text-right text-sm text-gray-600">
                                <p>{event.date}</p>
                                <p>{event.time}</p>
                              </div>
                            </div>
                            <p className="text-gray-700 mt-1">{event.location}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Driver */}
              <motion.div variants={fadeInUp}>
                <Card className="mt-8 bg-blue-50 border-2 border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-2">Need to contact your driver?</h4>
                        <p className="text-gray-700">{trackingResult.driver} is handling your shipment</p>
                      </div>
                      <div className="flex space-x-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outline"
                            className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent"
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Call Driver
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Support
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Tracking Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Advanced Tracking Features</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Stay informed every step of the way with our comprehensive tracking system
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
                title: "Real-Time GPS",
                description: "Live location updates with precise GPS coordinates and estimated arrival times.",
              },
              {
                icon: AlertCircle,
                title: "Proactive Alerts",
                description: "Automatic notifications for pickup, transit updates, delays, and delivery confirmation.",
              },
              {
                icon: Phone,
                title: "Direct Communication",
                description: "Direct contact with your assigned driver for real-time updates and coordination.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-blue-300">
                  <CardContent className="p-8">
                    <motion.div
                      className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
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
              Need Help with Tracking?
            </motion.h2>
            <motion.p className="text-xl text-blue-100 mb-8" variants={fadeInUp}>
              Our customer service team is available 24/7 to assist with any tracking questions or concerns.
            </motion.p>
            <motion.div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto" variants={staggerContainer}>
              <motion.div
                className="flex items-center justify-center space-x-4"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="h-8 w-8 text-amber-400" />
                <div className="text-left">
                  <p className="font-bold">24/7 Support</p>
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
                  <p className="font-bold">Email Support</p>
                  <p className="text-blue-100">tracking@blessamericallc.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
