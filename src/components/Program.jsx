import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Program = () => {
  const foundationPrograms = [
    {
      icon: "📚",
      title: "Board Preparation",
      desc: "SSC/CBSE/ICSE board exam focused curriculum",
    },
    {
      icon: "🏆",
      title: "Olympiad Training",
      desc: "NTSE, MTSE, and Olympiad preparation",
    },
    {
      icon: "🧠",
      title: "Concept Building",
      desc: "Strong foundation for future competitive exams",
    },
  ];

  const batchInfo = [
    { value: "6 Hours", label: "Daily comprehensive classes" },
    { value: "15-20", label: "Students per batch" },
    { value: "2x / Week", label: "Doubt resolution sessions" },
  ];

  const phases = [
    {
      title: "Phase 1: Bridge Module",
      desc: "Orientation for 10th students new to serious preparation",
    },
    {
      title: "Phase 2: Core Teaching",
      desc: "Complete 11th syllabus with strong foundation building",
    },
    {
      title: "Phase 3: Advanced Level",
      desc: "12th board + competitive exam topics integration",
    },
    {
      title: "Phase 4: Final Preparation",
      desc: "Revision & comprehensive test series",
    },
  ];

  const otherPrograms = [
    {
      title: "Crash Courses",
      desc: [
        "Quick revision modules",
        "Exam strategies & time management",
        "Previous year analysis",
        "Mock test series",
      ],
    },
    {
      title: "Summer Programs",
      desc: [
        "Subject-specific strengthening",
        "Advanced problem solving",
        "Concept revision",
        "Practical sessions",
      ],
    },
    {
      title: "Remedial Classes",
      desc: [
        "Individual attention",
        "Customized pace",
        "Extra practice sessions",
        "Confidence building",
      ],
    },
  ];

  const containerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const gradientCardColors = [
    "bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600",
    "bg-gradient-to-br from-pink-300 via-purple-400 to-purple-600", // pink → violet
    "bg-gradient-to-br from-blue-300 via-blue-400 to-blue-600",
  ];

  return (
    <section className="bg-gray-50 py-28 px-6">
      {/* Main Page Title */}
      <div className="px-4 md:px-0">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-center mb-12 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Delta <span className="text-indigo-600">Education Academy</span> Programs
        </motion.h1>
      </div>

      {/* Classes 11 & 12 Section with Image on Right */}
      <motion.div
        className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-10 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-4"
          variants={cardVariant}
        >
          Classes 11 & 12 Integrated Coaching (PCM / PCB / PCMB)
        </motion.h2>
        <motion.p className="text-gray-700 mb-6" variants={cardVariant}>
          Covers both board syllabus (HSC / State / CBSE / ICSE) and competitive
          exams (JEE / NEET / MHT-CET). This ensures students excel in both
          board exams and entrance tests.
        </motion.p>

        {/* Key Features + Image */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-6"
          variants={containerVariant}
        >
          <motion.div className="flex-1" variants={cardVariant}>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Topic-by-topic alignment — no gap between board and competitive
                content
              </li>
              <li>
                Daily classes (6 hours) covering each subject systematically
              </li>
              <li>Regular chapter-wise tests and full mocks</li>
              <li>Doubt resolution sessions twice a week</li>
              <li>Periodic revision cycles</li>
              <li>Personalized performance tracking and intervention</li>
            </ul>
          </motion.div>

          <motion.div className="flex-1" variants={cardVariant}>
            <img
              src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp"
              alt="Online Course"
              className="w-full rounded-3xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        {/* Program Phases */}
        <motion.h3
          className="text-xl font-semibold text-gray-900 mb-4"
          variants={cardVariant}
        >
          Program Structure / Phases
        </motion.h3>
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-6"
          variants={containerVariant}
        >
          {phases.map((phase, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              whileHover={{ scale: 1.03 }}
              variants={cardVariant}
            >
              <h4 className="font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-700">{phase.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Batch Info */}
        <motion.div
          className="flex flex-wrap gap-6 mb-6"
          variants={containerVariant}
        >
          {batchInfo.map((info, i) => (
            <motion.div
              key={i}
              className="flex-1 min-w-[150px] bg-white p-5 rounded-2xl shadow text-center border border-gray-200"
              whileHover={{ scale: 1.05 }}
              variants={cardVariant}
            >
              <p className="font-bold text-lg">{info.value}</p>
              <p className="text-gray-700">{info.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div className="flex flex-wrap gap-4" variants={cardVariant}>
          <button className="px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
            View Schedule
          </button>
          <button className="px-6 py-3 rounded-full bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 transition">
            Detailed Curriculum
          </button>
          <button className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Request Demo
          </button>
        </motion.div>
      </motion.div>

      {/* Foundation Programs */}
      <motion.div
        className="max-w-6xl mx-auto mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariant}
      >
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
          variants={cardVariant}
        >
          Foundation Program (Classes 8-10)
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariant}
        >
          {foundationPrograms.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center"
              whileHover={{ scale: 1.05 }}
              variants={cardVariant}
            >
              <div className="text-5xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Other Programs with subtle background image */}
      {/* Other Programs with white aesthetic background */}
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16"
        variants={containerVariant}
      >
        {otherPrograms.map((section, idx) => (
          <motion.div
            key={idx}
            className={`p-8 rounded-3xl shadow-2xl relative overflow-hidden ${
              gradientCardColors[idx % gradientCardColors.length]
            }`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <div className="relative z-10 text-white">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {section.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link
  to="/admission" // <-- the path you want the button to go
  className="inline-block px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:opacity-90 transition"
>
  Learn More
</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Program;
