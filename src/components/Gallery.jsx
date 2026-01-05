import React from "react";
import { motion } from "framer-motion";
import classroomImg from "../assets/image4.jpeg";
import libraryImg from "../assets/image5.jpeg";
import labImg from "../assets/image7.jpeg";
import groupImg from "../assets/image8.jpeg";
import workshopImg from "../assets/image32.jpeg";
import g1 from "../assets/image13.jpeg";
import g2 from "../assets/image14.jpeg";
import g3 from "../assets/image20.jpeg";
import g4 from "../assets/image22.jpeg";
import g5 from "../assets/image10.jpeg";
import g6 from "../assets/image11.jpeg";
import g7 from "../assets/image17.jpeg";
import g8 from "../assets/image18.jpeg";
import g9 from "../assets/image2.jpeg";

const reasons = [
  {
    img: classroomImg,
    text: "Interactive classroom sessions for deeper understanding.",
  },
  { img: libraryImg, text: "Access to a rich library and research resources." },
  { img: labImg, text: "Hands-on experiments in well-equipped labs." },
  { img: groupImg, text: "Collaborative group projects to enhance learning." },
  { img: workshopImg, text: "Workshops and seminars with industry experts." },
];

const galleryPhotos = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function EducationGallery() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Education Experience
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
          Explore the enriching learning journey at our institute through real
          student experiences.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>

        <div className="space-y-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-white shadow-lg" />
              </div>

              {/* Connecting line from dot to card */}
              <div
                className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 ${
                  index % 2 === 0
                    ? "left-1/2 -translate-x-0"
                    : "right-1/2 translate-x-0"
                } w-6 h-1 bg-indigo-300`}
              />

              {/* Image */}
              <motion.div
                className="md:w-5/12 w-full relative group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-white">
                  {/* subtle inner border */}
                  <div className="absolute inset-0 border border-gray-200 rounded-xl z-10 pointer-events-none" />

                  {/* Floating gradient shapes behind the image */}
                  <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-tr from-indigo-300 to-purple-300 rounded-full opacity-30 blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>

                  {/* Full image */}
                  <img
                    src={reason.img}
                    alt={`Reason ${index + 1}`}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105 rounded-xl relative z-20"
                  />

                  {/* gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl" />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                className="md:w-5/12 w-full bg-white p-6 sm:p-8 rounded-xl shadow-lg relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Subtle background shape for text */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>

                <p className="text-gray-700 text-base sm:text-lg relative z-10">
                  {reason.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10">
    Student Experiences in Photos
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {galleryPhotos.map((photo, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* IMAGE */}
        <div className="relative">
          <img
            src={photo}
            loading="lazy"
            decoding="async"
            alt={`Student ${index + 1}`}
            className="w-full h-56 md:h-64 object-cover"
          />

          {/* GRADIENT CAPTION INSIDE IMAGE */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <p className="text-white text-sm sm:text-base font-semibold">
              Learning at Delta Academy
            </p>
            <p className="text-xs text-gray-200">
              Excellence • Discipline • Growth
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    </section>
  );
}
