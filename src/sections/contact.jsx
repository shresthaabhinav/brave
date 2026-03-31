"use client";
import { motion } from "framer-motion";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="px-4 bg-white text-black">
      <div className="max-w-[1440px] mx-auto pb-10">

        {/* Heading */}
        <div className="mt-20 flex flex-col items-center gap-3 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-black"
        >
          Contact <span style={{ color: "#999999" }}>Us</span>
        </motion.h1>
        <p className="text-gray-500 text-sm sm:text-base">
            Let’s build something great together
        </p>
      </div>
          

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT - FORM */}
          <div className="flex-1 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>

            <form className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />

              <button
                type="submit"
                className="bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition font-medium"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT - INFO */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Contact Info */}
            <div className="rounded-2xl p-8 space-y-6 border border-gray-200">

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center">
                  <MdLocationOn className="text-xl text-black" />
                </div>
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-gray-600 text-sm">Sitapaila, Kathmandu</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center">
                  <MdEmail className="text-xl text-black" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 text-sm">
                    hi@conceptualframe.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center">
                  <MdPhone className="text-xl text-black" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 text-sm">9800000000</p>
                </div>
              </div>

            </div>

            {/* Map */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1084840599263!2d85.32396057539756!3d27.71724598279503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1904cf9e2f15%3A0x8e2d8f1b7efb28f0!2sKathmandu!5e0!3m2!1sen!2snp!4v1696573848492"                
                width="100%"
                height="338"
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}