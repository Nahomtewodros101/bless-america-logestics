"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  MapPin,
  Clock,
  Users,
  Shield,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/logo.jpg"
                alt="Bless America LLC Logo"
                width={40}
                height={40}
                className="h-20 w-20 rounded-full"
              />
            </motion.div>
            <motion.div className="text-2xl font-bold text-blue-900 group-hover:text-amber-600 transition-colors duration-300">
              Bless America LLC
            </motion.div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/drivers", label: "Join Our Fleet" },
              { href: "/tracking", label: "Track Shipment" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-900 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              <Link href="/quote">Get Quote</Link>
            </Button>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-24 lg:py-32 min-h-[500px] lg:min-h-[800px] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <Image
          src="/truck.jpg"
          alt="Bless America LLC truck on the road"
          layout="fill"
          objectFit="cover"
          objectPosition="center " // Focus on the top/center to ensure trucks are visible
          className="mix-blend-overlay"
          priority // Preload the hero image for faster loading
        />
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trust Delivered,
            <br />
            <motion.span
              className="text-amber-400"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Mile by Mile
            </motion.span>
          </motion.h1>
          <motion.p
            className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From dry van to last-mile delivery, Bless America LLC moves your
            goods with reliability, efficiency, and care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg group"
            >
              <Link href="/quote">
                Get a Quote Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Promise */}
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
              className="text-4xl lg:text-5xl font-bold text-blue-900 mb-8"
              variants={fadeInUp}
            >
              Logistics You Can Count On
            </motion.h2>
            <motion.p
              className="text-xl text-gray-700 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              With over 15 years of experience, Bless America LLC shrinks
              distances and simplifies supply chains. We deliver your cargo on
              time, every time, with transparent tracking and unbeatable
              reliability.
            </motion.p>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.05 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white bg-transparent group"
              >
                <Link href="/services">
                  Discover Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              Seamless Dry Van & Last-Mile Delivery
            </h2>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/dry.jpg"
                      alt="Dry van truck"
                      width={400}
                      height={250}
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Dry Van Transport
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Secure, efficient transport for your goods, coast to coast.
                    Our reliable fleet ensures your cargo arrives safely and on
                    schedule.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Coast-to-coast coverage",
                      "Secure cargo handling",
                      "Real-time tracking",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-2 border-gray-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group">
                <CardContent className="p-8">
                  <div className="overflow-hidden rounded-lg mb-6">
                    <Image
                      src="/vaan.jpg"
                      alt="Last-mile delivery van"
                      width={400}
                      height={250}
                      className="w-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    Last-Mile Delivery
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Fast, reliable final delivery to your customers' doors. Our
                    streamlined systems and real-time updates ensure your
                    freight moves smoothly, at a price that works.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      "Door-to-door service",
                      "Flexible scheduling",
                      "Competitive pricing",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white group"
              >
                <Link href="/quote">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">
              Trusted by businesses and drivers across America
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
                name: "Sarah Johnson",
                company: "Midwest Manufacturing",
                text: "Bless America LLC has been our go-to logistics partner for 3 years. Their reliability and communication are unmatched.",
                rating: 5,
              },
              {
                name: "Mike Rodriguez",
                company: "Driver, 2 years",
                text: "This company truly treats drivers like family. Great pay, respect, and they always have my back on the road.",
                rating: 5,
              },
              {
                name: "Jennifer Chen",
                company: "E-commerce Solutions",
                text: "Their last-mile delivery service helped us improve customer satisfaction by 40%. Highly recommended!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-amber-500 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-bold text-blue-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Image
              src="/shake.jpg"
              alt="Communication network"
              width={600}
              height={200}
              className="mx-auto mb-8 rounded-lg opacity-80"
            />
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Partner in Logistics
            </h2>
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
                icon: MapPin,
                title: "Reliable Tracking",
                description:
                  "Stay informed with real-time alerts and proactive updates throughout your shipment's journey.",
              },
              {
                icon: Shield,
                title: "Reasonable Pricing",
                description:
                  "Cost-effective solutions without compromising quality or reliability.",
              },
              {
                icon: Clock,
                title: "Streamlined Systems",
                description:
                  "Our technology simplifies logistics for brokers and shippers with seamless integration.",
              },
              {
                icon: Users,
                title: "Driver-Centric",
                description:
                  "We treat our drivers like family, ensuring a dedicated fleet you can trust.",
              },
            ].map((item, index) => (
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
                  <item.icon className="h-8 w-8" />
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent group"
              >
                <Link href="/contact">
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Join Our Fleet */}
      <section id="drivers" className="py-20 bg-gray-50">
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
                  src="/trucker.jpg"
                  alt="Professional truck driver"
                  width={500}
                  height={400}
                  className="rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Join the Bless America Family
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Drivers are the heart of our fleet. With competitive pay,
                reliable schedules, and a supportive team, we're more than a
                job—we're a family. Join us and drive with pride.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Competitive pay and benefits",
                  "Reliable schedules and routes",
                  "Family-like supportive culture",
                  "Modern, well-maintained fleet",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white group"
                >
                  <Link href="/drivers">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="text-center mb-16" variants={fadeInUp}>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6">
                Got Questions? Just Ask.
              </h2>
              <p className="text-xl text-gray-700">
                Logistics can be complex, but we make it simple. Reach out to
                our team for tailored solutions.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div variants={fadeInUp}>
                <Card className="border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">
                      Send us a message
                    </h3>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                          </label>
                          <Input
                            placeholder="Your first name"
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                          </label>
                          <Input
                            placeholder="Your last name"
                            className="transition-all focus:ring-2 focus:ring-amber-500"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="transition-all focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
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
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your logistics needs..."
                          rows={4}
                          className="transition-all focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Contact Us
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div className="space-y-8" variants={fadeInUp}>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">
                    Get in touch
                  </h3>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center group cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      <Phone className="h-6 w-6 text-amber-600 mr-4 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-gray-900">Call us</p>
                        <p className="text-gray-700">(555) 123-4567</p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center group cursor-pointer"
                      whileHover={{ x: 10 }}
                    >
                      <Mail className="h-6 w-6 text-amber-600 mr-4 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-medium text-gray-900">Email us</p>
                        <p className="text-gray-700">
                          info@blessamericallc.com
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="bg-blue-900 text-white p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-bold mb-4">Ready to ship?</h4>
                  <p className="mb-4">
                    Get an instant quote for your shipment and experience the
                    Bless America difference.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent group"
                    >
                      <Link href="/quote">
                        Get Instant Quote
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center space-x-2 mb-4">
                <Truck className="h-8 w-8 text-amber-600" />
                <span className="text-2xl font-bold">Bless America LLC</span>
              </div>
              <p className="text-gray-400 mb-4">
                Trust delivered, mile by mile. Over 15 years of reliable
                logistics solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  { href: "/services", label: "Dry Van Transport" },
                  { href: "/services", label: "Last-Mile Delivery" },
                  { href: "/tracking", label: "Freight Tracking" },
                  { href: "/services", label: "Logistics Solutions" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/drivers", label: "Join Our Fleet" },
                  { href: "/drivers", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>(555) 123-4567</p>
                <p>info@blessamericallc.com</p>
                <p className="text-sm">15+ years of trusted service</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p>
              &copy; {new Date().getFullYear()} Bless America LLC. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
