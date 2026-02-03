export default function Stats() {
  const stats = [
    { label: 'Years Experience', value: '8+', color: 'text-cyan-400' },
    { label: 'Projects Completed', value: '150+', color: 'text-orange-400' },
    { label: 'Happy Clients', value: '50+', color: 'text-green-400' },
    { label: 'Awards Won', value: '15+', color: 'text-purple-400' },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
