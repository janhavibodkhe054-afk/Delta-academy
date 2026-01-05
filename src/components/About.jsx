import React from "react";
import {
  BookOpen,
  Award,
  ClipboardCheck,
  Target,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import about1 from "../assets/logo.png";

/* ================= DATA ================= */
const steps = [
  {
    year: "2015",
    title: "Foundation",
    desc: "Started with 50 students and a vision to revolutionize science education.",
    icon: "https://cdn-icons-png.flaticon.com/512/1033/1033013.png",
    color: "from-blue-500/20 to-transparent",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    desc: "Launched comprehensive e-learning platform and hybrid teaching model.",
    icon: "https://cdn-icons-png.flaticon.com/512/2010/2010664.png",
    color: "from-emerald-500/20 to-transparent",
  },
  {
    year: "2024",
    title: "Excellence Achieved",
    desc: "5000+ successful students, 98%+ success rate in competitive exams.",
    icon: "https://cdn-icons-png.flaticon.com/512/3112/3112946.png",
    color: "from-purple-500/20 to-transparent",
  },
];

const leaders = [
  {
    name: "Dr. Suresh Sharma",
    role: "Founder & Director",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    edu: "IIT Delhi",
    exp: "15+ Years",
    pub: "200+ Pubs",
    desc: "IIT Delhi alumnus with 15+ years of experience in education.",
  },
  {
    name: "Prof. Anita Patel",
    role: "Academic Head",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    edu: "NIT Bombay",
    exp: "12+ Years",
    pub: "NEET Expert",
    desc: "Expert mentor in Chemistry & Biology with outstanding results.",
  },
];

const facultyMembers = [
  {
    name: "Rajesh Kumar",
    role: "Physics Faculty",
    image:
      "https://media.istockphoto.com/id/1588288383/photo/back-view-of-student-raising-his-hand-to-answer-teachers-question-during-education-training.jpg?s=612x612&w=0&k=20&c=ZSyPrLqe6WdE81WXiESD5AqIVw1a7hKv85UI5I-Vwco=",
    edu: "IIT Kanpur",
    exp: "10+ Years",
    desc: "Expert in JEE Physics with innovative teaching methods.",
  },
  {
    name: "Dr. Meera Gupta",
    role: "Chemistry Faculty",
    image:
      "https://plus.unsplash.com/premium_photo-1683887033886-6c45d4b659f3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNhZGVteXxlbnwwfHwwfHx8MA%3D%3D",
    edu: "NIT Delhi | PhD",
    exp: "8+ Years",
    desc: "Specialist in Organic Chemistry for NEET.",
  },
  {
    name: "Vikram Singh",
    role: "Mathematics Faculty",
    image:
      "https://media.istockphoto.com/id/1576357568/photo/group-of-high-school-students-attending-computer-class-in-the-classroom.jpg?s=612x612&w=0&k=20&c=bY_jKCb0zQLBnb2psD0F3fjjp6-YuIwRXUlWoxyxyi8=",
    edu: "IIT Bombay",
    exp: "12+ Years",
    desc: "Advanced mathematics & calculus expert.",
  },
];

const highlights = [
  {
    icon: "🎓",
    title: "Expert Faculty",
    desc: "Experienced teachers from IIT, NIT, and premier coaching institutes",
  },
  {
    icon: "📚",
    title: "Integrated Curriculum",
    desc: "Board exams + competitive exams preparation in one comprehensive program",
  },
  {
    icon: "👥",
    title: "Small Batches",
    desc: "Personalized attention with limited students per batch",
  },
  {
    icon: "📊",
    title: "Regular Assessment",
    desc: "Continuous evaluation and detailed feedback for improvement",
  },
  {
    icon: "💻",
    title: "Modern Infrastructure",
    desc: "State-of-the-art facilities with comprehensive e-learning support",
  },
  {
    icon: "🏆",
    title: "Scholarships Available",
    desc: "Merit-based scholarships and fee concessions for deserving students",
  },
];

const regularTuition = [
  "Separate coaching for board & competitive exams",
  "Large batch sizes (50+ students)",
  "Limited doubt-clearing opportunities",
  "Generic study material",
  "Irregular assessments",
  "No personalized attention",
  "Traditional teaching methods",
  "No performance tracking",
];

const deltaAcademy = [
  "Integrated board + competitive exam preparation",
  "Small batches (15-20 students only)",
  "Daily doubt sessions & personal mentoring",
  "Customized study material & resources",
  "Weekly tests & continuous evaluation",
  "Individual performance tracking",
  "Smart classes & technology integration",
  "Data-driven progress monitoring",
];

const facilitie = [
  {
    icon: "🏫",
    title: "Smart Classrooms",
    desc: "Air-conditioned rooms with interactive smartboards, projectors, and digital teaching aids for enhanced learning experience.",
    bg: "bg-blue-50",
  },
  {
    icon: "📚",
    title: "Digital Library",
    desc: "Extensive collection of reference books, journals, and digital resources accessible 24/7 for comprehensive study.",
    bg: "bg-green-50",
  },
  {
    icon: "🔬",
    title: "Science Labs",
    desc: "Fully equipped Physics, Chemistry, and Biology labs for hands-on practical learning and experiments.",
    bg: "bg-yellow-50",
  },
  {
    icon: "💻",
    title: "E-Learning Portal",
    desc: "Comprehensive online platform with recorded lectures, assignments, tests, and progress tracking.",
    bg: "bg-purple-50",
  },
  {
    icon: "📹",
    title: "Recorded Lectures",
    desc: "High-quality video lectures available for revision and missed classes, accessible anytime, anywhere.",
    bg: "bg-pink-50",
  },
  {
    icon: "🌐",
    title: "Hybrid Support",
    desc: "Seamless integration of offline and online learning with live streaming and interactive sessions.",
    bg: "bg-indigo-50",
  },
];

/* ================= COMPONENT ================= */
export default function About() {
  return (
    <section className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 relative">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative mt-6 sm:mt-8 lg:mt-0 px-2 sm:px-0"
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-200 rounded-xl" />
              <img
                src={about1}
                alt="Students"
                className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded-xl object-contain shadow-xl bg-white"
              />
            </motion.div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-100 text-indigo-600 rounded-full text-xs font-semibold tracking-wide">
                <Sparkles size={13} /> Empowering Students Since 2015
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-slate-900">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Delta Education Academy
                </span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                Empowering students with strong academic foundations and
                innovative teaching methodologies to succeed in board and
                competitive exams.
              </p>

              {/* INFO CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  {
                    title: "Our Story",
                    icon: <BookOpen size={16} />,
                    color: "text-indigo-600",
                    text: "Founded in 2015, Delta Education Academy began with a vision to strengthen conceptual learning.",
                  },
                  {
                    title: "Our Philosophy",
                    icon: <Target size={16} />,
                    color: "text-purple-600",
                    text: "Strong foundations from 8th to 12th grade ensure clarity, confidence, and long-term success.",
                  },
                  {
                    title: "Our Approach",
                    icon: <ClipboardCheck size={16} />,
                    color: "text-emerald-600",
                    text: "Continuous assessments, mentoring, smart technology, and focus on concept clarity.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-md transition"
                  >
                    <h4
                      className={`text-sm font-bold text-slate-900 flex items-center gap-2 ${item.color}`}
                    >
                      {item.icon} {item.title}
                    </h4>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}

                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-5 rounded-xl text-white shadow-md hover:scale-[1.02] transition">
                  <h4 className="text-sm font-bold flex items-center gap-2">
                    <Award size={16} /> Our Promise
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-indigo-100">
                    Preparing every student for board excellence and competitive
                    success with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-gray-500 mb-10 sm:mb-16 text-sm sm:text-base md:text-lg">
            Milestones that shaped our commitment to educational excellence
          </p>
          <div className="flex flex-col md:flex-row items-stretch md:justify-center gap-6 md:gap-8">
            {steps.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg p-6 md:p-8 flex-1 text-center relative"
              >
                <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 bg-blue-100">
                  <img src={s.icon} alt="" className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold mb-1">{s.year}</h4>
                <p className="font-semibold mb-1 sm:mb-2">{s.title}</p>
                <p className="text-gray-500 text-sm sm:text-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERS */}
      <section className="py-10 sm:py-16 bg-[#fcfdff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-black mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-500 mb-12 sm:mb-16 text-sm sm:text-base md:text-lg">
            Experienced educators leading the way to academic excellence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
            {leaders.map((l, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col gap-4"
              >
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                    {l.name}
                  </h4>
                  <span
                    className={`inline-block mt-1 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      [
                        "bg-indigo-100 text-indigo-600",
                        "bg-green-100 text-green-600",
                        "bg-pink-100 text-pink-600",
                      ][i % 3]
                    }`}
                  >
                    {l.role}
                  </span>
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                  {l.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACULTY */}
      <section className="py-10 sm:py-16 bg-[#fcfdff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4">
            Expert Faculty Team
          </h2>
          <p className="text-gray-500 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Dedicated educators from premier institutions committed to your
            success
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            {facultyMembers.map((f, i) => (
              <div
                key={i}
                className="relative bg-white pt-12 px-6 sm:px-8 pb-8 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col gap-4 overflow-visible"
              >
                <div
                  className={`absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${
                    [
                      "from-indigo-400 to-purple-500",
                      "from-green-400 to-emerald-500",
                      "from-pink-400 to-rose-500",
                    ][i % 3]
                  } flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg`}
                >
                  {["🎓", "📚", "🏆", "🧠", "💡"][i % 5]}
                </div>
                <div className="mt-6">
                  <span className="inline-block mb-2 px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    {f.role}
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {f.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    {f.desc}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm text-gray-500">
                    {f.edu && (
                      <div className="flex items-center gap-1">🎓 {f.edu}</div>
                    )}
                    {f.exp && (
                      <div className="flex items-center gap-1">📚 {f.exp}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELTA vs REGULAR */}
      <section className="py-10 sm:py-16 bg-[#faf8fc]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-2">
            How Delta Academy Differs from Regular Tuition
          </h2>
          <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg">
            Experience the Delta difference - where excellence meets innovation
          </p>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 bg-white p-6 sm:p-8 rounded-xl shadow-lg">
            <div className="flex-1 bg-red-50 border border-red-300 rounded-xl p-4 sm:p-6 text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-red-700 flex items-center mb-2 sm:mb-4">
                ❌ Regular Tuition Centers
              </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
                {regularTuition.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex-1 bg-green-50 border border-green-300 rounded-xl p-4 sm:p-6 text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-green-700 flex items-center mb-2 sm:mb-4">
                ✅ Delta Academy Advantage
              </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-gray-700 text-xs sm:text-sm md:text-base">
                {deltaAcademy.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-10 sm:py-16 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-black mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-3xl shadow hover:shadow-md transition"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 text-xl sm:text-2xl">
                  {h.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base md:text-lg">
                  {h.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12">
            Facilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {facilitie.map((f, i) => (
              <div key={i} className={`p-6 sm:p-8 rounded-3xl shadow ${f.bg}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center mb-4 text-xl sm:text-2xl">
                  {f.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base md:text-lg">
                  {f.title}
                </h4>
                <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-2">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
