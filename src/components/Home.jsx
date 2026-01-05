import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import home1 from "../assets/image24.jpeg";
import home2 from "../assets/image21.jpeg";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="pt-24 sm:pt-28 pb-20 bg-gradient-to-b from-indigo-50 to-indigo-100 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(79,70,229,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.05),transparent_50%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-indigo-600 font-semibold mb-4">
              Delta Academy
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              Shape Your Future <br />
              <span className="text-indigo-600">with Delta Academy</span>
            </h1>

            <p className="mt-4 text-lg font-medium text-gray-700">
              Premier Coaching Institute for Science & Competitive Exams
            </p>

            <p className="mt-3 text-base text-gray-600 max-w-lg leading-relaxed">
              Integrated coaching for Classes 8–12 | Board Exams + JEE / NEET / MHT-CET preparation under one roof.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="admission"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-2 sm:py-3 rounded-full
                           bg-indigo-600 text-white font-semibold
                           shadow-lg shadow-indigo-200
                           hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
              </a>

              <a
                href="contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-2 sm:py-3 rounded-full
                           border border-indigo-600 text-indigo-600 font-semibold
                           hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
              >
                Free Demo Class
              </a>
            </div>

            {/* Feature Highlights */}
            <div className="mt-10 grid sm:grid-cols-2 gap-3 text-gray-700 text-sm font-medium">
              <div>• Small Batch Size (15–20)</div>
              <div>• Expert IIT / NIT Faculty</div>
              <div>• Scholarship Available</div>
              <div>• Personalized Mentorship</div>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">5000+</h3>
                <p className="text-xs text-gray-500 mt-1">Students Trained</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                <p className="text-xs text-gray-500 mt-1">Success Rate</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">9+</h3>
                <p className="text-xs text-gray-500 mt-1">Years Experience</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-xs text-gray-500 mt-1">Top Rankers</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            className="relative mt-10 lg:mt-0"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={home2}
              alt="Students in classroom"
              className="rounded-2xl shadow-2xl w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]
                         border-2 border-indigo-300 object-contain bg-indigo-50"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />

            <motion.img
              src={home1}
              alt="Teacher guiding students"
              className="absolute -bottom-6 -left-6 w-36 sm:w-44 md:w-52 h-24 sm:h-28 md:h-36
                         rounded-xl shadow-lg border-2 border-indigo-300 object-contain bg-indigo-50 hidden lg:block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            <motion.div
              className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/90 backdrop-blur rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg hidden lg:block"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Integrated Coaching
              </p>
              <h4 className="text-sm font-semibold text-gray-900 mt-1">
                Boards + Competitive Exams
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Top Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-50">
              🎓
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-16">
            Why Choose Delta Academy?
          </h2>

          {/* Content Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-16">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 sm:mb-6 text-5xl text-indigo-600">📘</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Advance Your Career
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                Build a strong academic foundation with expert guidance for Boards, JEE, NEET & MHT-CET to secure a successful future.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 sm:mb-6 text-5xl text-indigo-600">🏆</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Prove Your Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                Regular tests, performance tracking, and result-oriented teaching help students achieve top ranks with confidence.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 sm:mb-6 text-5xl text-indigo-600">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Personalized Mentorship
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                Small batch sizes, doubt-solving sessions, and one-to-one mentoring ensure individual attention for every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BANNER / CTA */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-fixed bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            "url('https://t3.ftcdn.net/jpg/04/28/60/52/360_F_428605228_9dfQZoDAtMMOdA2YN3aJviPUC62khPYh.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl text-center px-4 sm:px-6 text-white"
        >
          <p className="text-sm sm:text-base uppercase tracking-widest text-indigo-300 mb-4">
            Welcome to Delta Academy
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Shaping Young Minds for <br />
            <span className="text-indigo-400">Academic Excellence</span>
          </h2>

          <p className="text-gray-200 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            Delta Academy provides expert coaching for Classes 8–12 and competitive exams like JEE, NEET, and MHT-CET with personalized mentoring and proven results.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full
                       bg-indigo-600 text-white font-semibold text-base sm:text-lg
                       shadow-lg shadow-indigo-400/40
                       hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative py-20 sm:py-28 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-indigo-600 mb-4">
              About Delta Academy
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-gray-900">
              Building Futures with <br />
              <span className="text-indigo-600">Knowledge & Discipline</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-xl">
              Delta Academy is a premier coaching institute dedicated to shaping young minds for academic excellence. We provide integrated coaching for Classes 8–12 along with focused preparation for competitive exams like JEE, NEET, and MHT-CET.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed max-w-xl text-base sm:text-lg">
              With expert faculty, small batch sizes, and a student-centric approach, Delta Academy ensures personalized attention and consistent performance improvement.
            </p>
          </motion.div>

          {/* RIGHT STATS / CARDS */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6 mt-8 lg:mt-0"
          >
            <div className="bg-indigo-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">9+</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Years of Excellence</p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">5000+</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Students Trained</p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">98%</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Success Rate</p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-indigo-600">50+</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Top Rankers</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
