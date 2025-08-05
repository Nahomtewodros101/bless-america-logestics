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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Truck,
  Package,
  MapPin,
  CalendarIcon,
  Clock,
  DollarSign,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { format } from "date-fns";

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

export default function QuotePage() {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [deliveryDate, setDeliveryDate] = useState<Date>();
  const [formStep, setFormStep] = useState(1);

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
              Get Your <span className="text-amber-400">Quote</span>
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              Fast, reliable shipping quotes tailored to your specific needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quote Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Clock,
                title: "Fast Response",
                description: "Get your quote within 2 hours",
              },
              {
                icon: DollarSign,
                title: "Competitive Rates",
                description: "Best prices in the industry",
              },
              {
                icon: MapPin,
                title: "Nationwide Coverage",
                description: "Coast-to-coast service",
              },
              {
                icon: CheckCircle,
                title: "No Hidden Fees",
                description: "Transparent pricing always",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <motion.div
                  className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
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
                Request Your Quote
              </h2>
              <p className="text-xl text-gray-700">
                Fill out the form below and we'll get back to you with a
                competitive quote
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-blue-900">
                        Shipping Quote Request
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
                          Pickup & Delivery Information
                        </h4>

                        <div className="grid md:grid-cols-2 gap-8">
                          {/* Pickup Information */}
                          <div className="space-y-4">
                            <h5 className="text-lg font-semibold text-gray-800 flex items-center">
                              <MapPin className="h-5 w-5 text-blue-900 mr-2" />
                              Pickup Location
                            </h5>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                City, State *
                              </label>
                              <Input
                                placeholder="e.g., Los Angeles, CA"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                ZIP Code *
                              </label>
                              <Input placeholder="90210" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Pickup Date *
                              </label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal bg-transparent"
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {pickupDate
                                      ? format(pickupDate, "PPP")
                                      : "Select pickup date"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={pickupDate}
                                    onSelect={setPickupDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>

                          {/* Delivery Information */}
                          <div className="space-y-4">
                            <h5 className="text-lg font-semibold text-gray-800 flex items-center">
                              <Package className="h-5 w-5 text-amber-600 mr-2" />
                              Delivery Location
                            </h5>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                City, State *
                              </label>
                              <Input
                                placeholder="e.g., New York, NY"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                ZIP Code *
                              </label>
                              <Input placeholder="10001" required />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Delivery Date
                              </label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal bg-transparent"
                                  >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {deliveryDate
                                      ? format(deliveryDate, "PPP")
                                      : "Select delivery date (optional)"}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={deliveryDate}
                                    onSelect={setDeliveryDate}
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Service Type *
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="dry-van">
                                Dry Van Transport
                              </SelectItem>
                              <SelectItem value="last-mile">
                                Last-Mile Delivery
                              </SelectItem>
                              <SelectItem value="expedited">
                                Expedited Shipping
                              </SelectItem>
                            </SelectContent>
                          </Select>
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
                          Shipment Details
                        </h4>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Weight (lbs) *
                            </label>
                            <Input
                              placeholder="e.g., 15000"
                              type="number"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Dimensions (L x W x H)
                            </label>
                            <Input placeholder="e.g., 48 x 8 x 8 ft" />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Number of Pieces
                            </label>
                            <Input
                              placeholder="e.g., 20 pallets"
                              type="number"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Commodity Type *
                            </label>
                            <Select>
                              <SelectTrigger>
                                <SelectValue placeholder="Select commodity" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="general">
                                  General Freight
                                </SelectItem>
                                <SelectItem value="food">
                                  Food & Beverage
                                </SelectItem>
                                <SelectItem value="automotive">
                                  Automotive Parts
                                </SelectItem>
                                <SelectItem value="electronics">
                                  Electronics
                                </SelectItem>
                                <SelectItem value="clothing">
                                  Clothing & Textiles
                                </SelectItem>
                                <SelectItem value="machinery">
                                  Machinery
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Special Requirements
                          </label>
                          <div className="grid md:grid-cols-2 gap-4">
                            {[
                              "Temperature Controlled",
                              "Hazmat",
                              "Fragile/High Value",
                              "Liftgate Required",
                              "Inside Delivery",
                              "Appointment Required",
                            ].map((requirement) => (
                              <div
                                key={requirement}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox id={requirement} />
                                <label
                                  htmlFor={requirement}
                                  className="text-sm text-gray-700"
                                >
                                  {requirement}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Details
                          </label>
                          <Textarea
                            placeholder="Please provide any additional information about your shipment..."
                            rows={4}
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
                          Contact Information
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
                              placeholder="your.email@company.com"
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

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Company Name *
                            </label>
                            <Input placeholder="Your company" required />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Title
                            </label>
                            <Input placeholder="Your job title" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            How did you hear about us?
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="google">
                                Google Search
                              </SelectItem>
                              <SelectItem value="referral">Referral</SelectItem>
                              <SelectItem value="social">
                                Social Media
                              </SelectItem>
                              <SelectItem value="trade-show">
                                Trade Show
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Additional Comments
                          </label>
                          <Textarea
                            placeholder="Any additional information or questions..."
                            rows={3}
                          />
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h5 className="font-bold text-blue-900 mb-2">
                            What happens next?
                          </h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>
                              • We'll review your quote request within 2 hours
                            </li>
                            <li>
                              • Our team will contact you with a competitive
                              quote
                            </li>
                            <li>
                              • We'll answer any questions and finalize the
                              details
                            </li>
                            <li>
                              • Your shipment will be scheduled and tracked
                            </li>
                          </ul>
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
                          className="bg-amber-600 hover:bg-amber-700 text-white ml-auto group"
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      ) : (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ml-auto"
                        >
                          <Button
                            type="submit"
                            className="bg-amber-600 hover:bg-amber-700 text-white group"
                          >
                            Submit Quote Request
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

      {/* Quick Quote Options */}
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
              Need a Quote Faster?
            </h2>
            <p className="text-xl text-gray-700">
              Get in touch with our team directly for immediate assistance
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-blue-300">
                <CardContent className="p-8">
                  <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-600 transition-colors">
                    <Truck className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Call for Instant Quote
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Speak directly with our logistics experts for immediate
                    pricing and scheduling.
                  </p>
                  <div className="text-2xl font-bold text-amber-600 mb-4">
                    (555) 123-4567
                  </div>
                  <p className="text-sm text-gray-600">
                    Available 24/7 for urgent shipments
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 group border-2 border-gray-200 hover:border-amber-300">
                <CardContent className="p-8">
                  <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900 transition-colors">
                    <Package className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Email Quote Request
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Send us your shipment details via email for a detailed
                    written quote.
                  </p>
                  <div className="text-lg font-bold text-blue-900 mb-4">
                    quotes@blessamericallc.com
                  </div>
                  <p className="text-sm text-gray-600">
                    Response within 2 hours during business hours
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
