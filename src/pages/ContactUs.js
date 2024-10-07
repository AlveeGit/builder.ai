/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/ContactUs.js

import React from "react";
import { motion } from "framer-motion";
import AnimatedShapes from "../components/AnimatedShapes";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <AnimatedShapes />

      {/* Contact Us Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white mb-8 text-center"
      >
        Contact Us
      </motion.h1>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Send Us a Message
        </h2>
        <form className="space-y-6 custom-form">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Contact Information Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-8 mb-8 w-full max-w-4xl text-center"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Our Contact Information
        </h2>
        <p className="text-gray-600 mb-2">
          Address: 123 Main Street, City, Country
        </p>
        <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
        <p className="text-gray-600">Email: info@example.com</p>
      </motion.div>

      {/* Location Map Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
          Find Us Here
        </h2>
        <div className="w-full h-64 bg-gray-300 rounded-md">
          {/* Replace with Google Maps iframe */}
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.847072187792!2d90.40714331543148!3d23.81033298456473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bdc4367a47%3A0x41a0bdfae3e12a0f!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1600813944594!5m2!1sen!2sus"
            title="Google Maps"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* Social Media Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex space-x-4 justify-center mt-8"
      >
        <a
          href="#"
          className="text-white text-2xl hover:text-purple-300 transition"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-purple-300 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-purple-300 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="text-white text-2xl hover:text-purple-300 transition"
        >
          <FaLinkedinIn />
        </a>
      </motion.div>
    </div>
  );
};

export default ContactUs;
