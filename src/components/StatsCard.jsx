export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {[
          ["5000+", "Students Trained"],
          ["98%", "Success Rate"],
          ["9+", "Years Experience"],
          ["50+", "Top Rankers"],
        ].map(([num, label]) => (
          <div key={label} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-indigo-600">{num}</h3>
            <p className="mt-2">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
