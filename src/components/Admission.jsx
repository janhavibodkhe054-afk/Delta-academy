import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Admission = () => {
  const steps = [
    {
      title: "Step 1: Application",
      description:
        "Fill online form or visit our center for detailed information",
      color: "bg-blue-500",
      icon: "📝",
    },
    {
      title: "Step 2: Demo/Test",
      description: "Attend free demo class or take scholarship test",
      color: "bg-green-500",
      icon: "🎯",
    },
    {
      title: "Step 3: Counseling",
      description: "Course selection, fee discussion & career guidance",
      color: "bg-orange-500",
      icon: "💬",
    },
    {
      title: "Step 4: Enrollment",
      description: "Seat confirmation, batch allocation & welcome kit",
      color: "bg-purple-500",
      icon: "🎉",
    },
  ];

  return (
    <section className="py-28 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Admissions</h1>
        <p className="mb-12 text-gray-600">
          Join the Delta Academy family - Your journey to success starts here
        </p>

        {/* Steps Card */}
        <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center gap-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 flex items-center justify-center rounded-full text-white text-2xl mb-4 ${step.color}`}
                >
                  {step.icon}
                </div>
                <h3
                  className={`font-bold mb-2 ${step.color.replace(
                    "bg",
                    "text"
                  )}`}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <a href="contact">
  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold rounded-xl shadow-lg hover:from-blue-600 hover:to-violet-700 transition flex items-center gap-3 text-lg">
    Start Your Journey Today <FaArrowRight />
  </button>
</a>

        </div>

        {/* Eligibility & Criteria Card */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Eligibility & Criteria */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-4">Eligibility & Criteria</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Classes 11-12:</strong> 10th pass with minimum 75% marks
                in Science & Math
              </li>
              <li>
                <strong>Foundation (8-10):</strong> Previous class pass
                certificate required
              </li>
              <li>
                <strong>Crash Courses:</strong> Current 12th students or
                droppers
              </li>
            </ul>
          </div>

          {/* Important Dates Card */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg text-left">
            <h2 className="text-2xl font-bold mb-4">Important Dates 2024-25</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                <strong>Application Start:</strong> March 1, 2024
              </li>
              <li>
                <strong>Scholarship Test:</strong> April 15, 2024
              </li>
              <li>
                <strong>Classes Begin:</strong> June 1, 2024
              </li>
              <li>
                <strong>Last Date:</strong> May 31, 2024
              </li>
            </ul>
          </div>
        </div>
        {/* Fee Structure & Payment Options */}
        <div className="bg-white p-10 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-8 text-left">
            Fee Structure & Payment Options
          </h2>

          {/* Fees */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="flex-1 bg-blue-50 p-6 rounded-xl text-center">
              <h3 className="text-blue-600 font-semibold mb-2">
                Classes 11-12 (2 Years)
              </h3>
              <p className="text-2xl font-bold mb-2">₹1,20,000</p>
              <p className="text-gray-600 text-sm">
                Includes all study material & tests
              </p>
            </div>
            <div className="flex-1 bg-green-50 p-6 rounded-xl text-center">
              <h3 className="text-green-600 font-semibold mb-2">
                Foundation (Per Year)
              </h3>
              <p className="text-2xl font-bold mb-2">₹45,000</p>
              <p className="text-gray-600 text-sm">
                Complete foundation package
              </p>
            </div>
            <div className="flex-1 bg-orange-50 p-6 rounded-xl text-center">
              <h3 className="text-orange-600 font-semibold mb-2">
                Crash Course
              </h3>
              <p className="text-2xl font-bold mb-2">₹35,000</p>
              <p className="text-gray-600 text-sm">4-month intensive program</p>
            </div>
          </div>

          {/* Payment Options & Scholarships */}
          <div className="flex flex-col md:flex-row gap-8 text-left">
            <div className="flex-1">
              <h4 className="font-bold mb-3">Payment Options</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>One-time payment (5% discount)</li>
                <li>Quarterly installments</li>
                <li>Monthly EMI available</li>
                <li>Online payment accepted</li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-bold mb-3">Scholarships Available</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Merit scholarship up to 50%</li>
                <li>Need-based concessions</li>
                <li>Sibling discount 10%</li>
                <li>Early bird discount 15%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Batch Information */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-10 rounded-2xl shadow-lg text-center mb-10">
          <h2 className="text-2xl font-bold mb-8">Batch Information</h2>
          <div className="flex flex-col md:flex-row justify-around gap-8">
            <div className="flex-1">
              <p className="text-purple-600 text-3xl font-bold mb-2">15-20</p>
              <p className="text-gray-700">Students per batch</p>
            </div>
            <div className="flex-1">
              <p className="text-pink-600 text-3xl font-bold mb-2">Super 30</p>
              <p className="text-gray-700">Elite batch for toppers</p>
            </div>
            <div className="flex-1">
              <p className="text-indigo-600 text-3xl font-bold mb-2">Limited</p>
              <p className="text-gray-700">Seats available</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className="relative min-h-[80vh] py-16 text-gray-800 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://st4.depositphotos.com/1000423/22264/i/450/depositphotos_222643384-stock-photo-concept-of-business-education.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0  bg-opacity-20"></div>{" "}
          {/* reduced opacity */}
          <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
            <h2 className="text-4xl font-bold mb-2 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-200 mb-12">Get answers to common queries</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FAQ Items */}
              {[
                {
                  question: "Which boards do you cater to?",
                  answer:
                    "We cater to SSC, CBSE, and ICSE boards with specialized curriculum for each board's requirements.",
                },
                {
                  question: "How are classes conducted?",
                  answer:
                    "We offer hybrid learning - offline classroom teaching with online support, recorded lectures, and digital resources.",
                },
                {
                  question: "What is the batch size?",
                  answer:
                    "Our regular batches have 15-20 students, and our elite 'Super 30' batch is limited to 30 top performers.",
                },
                {
                  question: "Do you allow demo classes?",
                  answer:
                    "Yes! We offer free demo classes so you can experience our teaching methodology before enrollment.",
                },
                {
                  question: "How is the doubt resolving mechanism?",
                  answer:
                    "Daily doubt-clearing sessions, WhatsApp support, and one-on-one mentoring ensure all queries are resolved promptly.",
                },
                {
                  question: "Are study materials provided?",
                  answer:
                    "Yes, comprehensive study materials, practice sheets, and test series are included in the course fee.",
                },
                {
                  question: "What is your refund policy?",
                  answer:
                    "We offer a 15-day trial period with full refund if not satisfied. Terms and conditions apply.",
                },
                {
                  question: "How do you monitor student progress?",
                  answer:
                    "Regular assessments, performance analytics, parent-teacher meetings, and detailed progress reports ensure continuous monitoring.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 p-6 rounded-xl shadow text-left"
                >
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
