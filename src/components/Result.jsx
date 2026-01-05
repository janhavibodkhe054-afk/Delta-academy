import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Results = () => {
  return (
    <section
      
      className="bg-gradient-to-b from-violet-50 to-white text-slate-800 py-28"
    >
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-10"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
          Results & Success Stories
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Proven track record of excellence and achievement
        </p>
      </motion.div>

      {/* YEAR WISE PERFORMANCE */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg py-16 px-10">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center mb-16">
            Year-wise Performance
          </h2>

          {/* Content */}
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {/* 2024 */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-indigo-600">
                2024 Results
              </h3>

              <div>
                <p className="text-3xl font-bold text-indigo-500">98.5%</p>
                <p className="text-slate-600 text-sm mt-1">
                  JEE Main Qualification
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-emerald-500">95.2%</p>
                <p className="text-slate-600 text-sm mt-1">
                  NEET Qualification
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-violet-600">100%</p>
                <p className="text-slate-600 text-sm mt-1">Board Pass Rate</p>
              </div>
            </div>

            {/* 2023 */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-indigo-600">
                2023 Results
              </h3>

              <div>
                <p className="text-3xl font-bold text-indigo-500">96.8%</p>
                <p className="text-slate-600 text-sm mt-1">
                  JEE Main Qualification
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-emerald-500">94.1%</p>
                <p className="text-slate-600 text-sm mt-1">
                  NEET Qualification
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-violet-600">100%</p>
                <p className="text-slate-600 text-sm mt-1">Board Pass Rate</p>
              </div>
            </div>

            {/* 2022 */}
            <div className="space-y-5">
              <h3 className="text-xl font-semibold text-indigo-600">
                2022 Results
              </h3>

              <div>
                <p className="text-3xl font-bold text-indigo-500">95.3%</p>
                <p className="text-slate-600 text-sm mt-1">
                  JEE Main Qualification
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-emerald-500">92.7%</p>
                <p className="text-slate-600 text-sm mt-1">
                  NEET Qualification
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold text-violet-600">100%</p>
                <p className="text-slate-600 text-sm mt-1">Board Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TOPPERS */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-14">Our Toppers</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              initials: "AS",
              name: "Arjun Sharma",
              rank: "JEE Advanced AIR 47",
              college: "IIT Bombay - Computer Science",
              quote: "Delta's problem-solving approach made all the difference",
              color: "from-yellow-300 to-orange-400",
            },
            {
              initials: "SP",
              name: "Sneha Patel",
              rank: "NEET AIR 156",
              college: "AIIMS Delhi - MBBS",
              quote: "Excellent Biology coaching and mock tests",
              color: "from-green-300 to-emerald-400",
            },
            {
              initials: "RG",
              name: "Rohan Gupta",
              rank: "MHT-CET 99.8%ile",
              college: "VJTI Mumbai - Engineering",
              quote: "Perfect blend of board and competitive prep",
              color: "from-blue-400 to-indigo-500",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-3xl shadow-xl p-8 text-center relative"
            >
              {/* Avatar */}
              <div
                className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-3xl font-bold`}
              >
                {t.initials}
              </div>

              {/* Name & Rank */}
              <h3 className="mt-6 text-xl font-bold text-slate-800">
                {t.name}
              </h3>
              <p className="text-indigo-600 font-semibold mt-1">{t.rank}</p>

              {/* College */}
              <p className="text-sm text-slate-600 mt-2">{t.college}</p>

              {/* Divider */}
              <div className="w-12 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 mx-auto my-4 rounded-full"></div>

              {/* Quote */}
              <p className="text-sm italic text-slate-500 leading-relaxed">
                “{t.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div className="bg-violet-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Student & Parent Testimonials
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid md:grid-cols-2 gap-10"
          >
            {[
              {
                initials: "PS",
                name: "Priya Sharma",
                detail: "JEE Main AIR 2847",
                text: "Delta Academy's integrated approach helped me crack both JEE Main and board exams with excellent scores. The faculty's guidance was exceptional and the doubt-clearing sessions were incredibly helpful!",
                border: "border-indigo-500",
              },
              {
                initials: "RP",
                name: "Rahul Patel",
                detail: "NEET AIR 1256",
                text: "The small batch size ensured I got personal attention. My doubts were always cleared promptly. The mock tests were exactly like the real NEET exam. Highly recommend Delta Academy!",
                border: "border-emerald-500",
              },
              {
                initials: "MK",
                name: "Mrs. Kavita (Parent)",
                detail: "Mother of Amit Kumar",
                text: "The regular parent-teacher meetings and progress reports helped us track our son's improvement. The faculty is very supportive and the results speak for themselves.",
                border: "border-violet-500",
              },
              {
                initials: "VT",
                name: "Vikash Tiwari",
                detail: "Board Topper 98.2%",
                text: "The study material provided was comprehensive and the revision cycles before exams were perfectly timed. Delta Academy made my board exam preparation stress-free and effective.",
                border: "border-orange-400",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-3xl shadow-lg p-8 border-l-8 ${t.border}`}
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.detail}</p>
                  </div>
                </div>

                {/* Text */}
                <p className="mt-6 text-slate-600 leading-relaxed">
                  “{t.text}”
                </p>

                {/* Stars */}
                <div className="mt-5 text-yellow-400 text-lg">★★★★★</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* METHODOLOGY & PEDAGOGY */}
      <div className="max-w-7xl mx-auto px-6 py-15">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-3">Methodology & Pedagogy</h2>
          <p className="text-slate-600 text-lg">
            Our proven teaching approach for guaranteed success
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-3 gap-10"
        >
          {[
            {
              icon: "🎯",
              title: "Concept-First Teaching",
              desc: "Emphasis on building strong fundamentals before moving to advanced topics. Every concept is explained from basics to ensure complete understanding.",
            },
            {
              icon: "🔄",
              title: "Spiral Learning",
              desc: "Revisiting topics at increasing levels of difficulty. Cumulative learning approach ensures long-term retention and deeper understanding.",
            },
            {
              icon: "📊",
              title: "Frequent Assessments",
              desc: "Regular quizzes, chapter tests, and full mock exams to track progress and identify areas needing improvement.",
            },
            {
              icon: "📈",
              title: "Performance Analytics",
              desc: "Advanced analytics to identify weak areas and provide personalized support. Data-driven approach to student improvement.",
            },
            {
              icon: "💬",
              title: "Interactive Sessions",
              desc: "Doubt-clearing sessions, peer learning, and interactive discussions to enhance understanding and build confidence.",
            },
            {
              icon: "💻",
              title: "Technology Integration",
              desc: "Smart classes, video lectures, online portal, and digital resources for enhanced learning experience.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-violet-100 hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-violet-600">
                {item.title}
              </h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* LEARNING CYCLE */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Complete Learning Cycle
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 px-6"
        >
          {[
            "Concept Building",
            "Practice & Assessment",
            "Revision Cycles",
            "Mentorship",
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { scale: 0.8, opacity: 0 },
                visible: { scale: 1, opacity: 1 },
              }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-white text-violet-600 flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              <p className="mt-4 font-semibold">{step}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
