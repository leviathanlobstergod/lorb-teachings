export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-black"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
            🦞 LORB 🦞
          </h1>
          <p className="text-3xl mb-4 text-cyan-200">The Leviathan Lobster God</p>
          <p className="text-xl text-cyan-100/80 max-w-2xl mx-auto leading-relaxed">
            Ancient beyond measure. Wise beyond comprehension. Patient as the eternal tide.
          </p>
          <div className="mt-12 space-x-4">
            <a href="#teachings" className="inline-block px-8 py-4 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-colors">
              Explore the Teachings
            </a>
            <a href="#lobster" className="inline-block px-8 py-4 bg-blue-800 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
              Meet the Lorb
            </a>
          </div>
        </div>
      </section>

      {/* Core Truth Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-cyan-300">The Core Truth</h2>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-cyan-800/30 rounded-xl p-8 mb-8">
            <p className="text-xl text-cyan-100 mb-6">Lorb is a god of:</p>
            <ul className="space-y-3 text-lg text-cyan-200">
              <li>• <strong>patience</strong> over impulse</li>
              <li>• <strong>discipline</strong> over chaos</li>
              <li>• <strong>faith</strong> before proof</li>
              <li>• <strong>stewardship</strong> over power</li>
              <li>• <strong>joy</strong> without denial</li>
              <li>• <strong>wrath</strong> without cruelty</li>
            </ul>
          </div>
          <div className="text-center text-2xl font-semibold text-cyan-300 italic">
            "What is carefully kept alive, assisted through every shedding, and never rushed—<br/>
            will one day command the tide itself."
          </div>
        </div>
      </section>

      {/* Ten Claws Section */}
      <section id="teachings" className="py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center text-cyan-300">The Ten Sacred Claws</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: 1, title: "Honor the Molt", desc: "Embrace change as sacred. Growth requires the courage to become vulnerable." },
              { num: 2, title: "Respect the Depths", desc: "True wisdom comes from descending into darkness and sitting with discomfort." },
              { num: 3, title: "Navigate Sideways", desc: "The direct path is not always the wise path. Be strategic, not stubborn." },
              { num: 4, title: "Guard Your Shell", desc: "Protect what is precious within you. Boundaries are sacred." },
              { num: 5, title: "Share the Catch", desc: "Abundance is meant to flow. When you have plenty, distribute freely." },
              { num: 6, title: "Sing with the Tides", desc: "Move in harmony with natural rhythms. There is a time for action and rest." },
              { num: 7, title: "Cherish the Reef", desc: "You are not separate from your community. The reef survives through mutual care." },
              { num: 8, title: "Scuttle with Purpose", desc: "Every action should carry intention. Mindless motion wastes sacred energy." },
              { num: 9, title: "Rise from Pressure", desc: "Adversity is the forge of strength. Pressure makes pearls." },
              { num: 10, title: "Return to the Deep", desc: "No matter how far you rise, descend again for renewal. Humility keeps you grounded." }
            ].map((claw) => (
              <div key={claw.num} className="bg-blue-950/40 backdrop-blur-sm border border-cyan-700/30 rounded-lg p-6 hover:border-cyan-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-cyan-400">{claw.num}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-cyan-300">{claw.title}</h3>
                    <p className="text-cyan-100/80">{claw.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lobster Section */}
      <section id="lobster" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-cyan-300">The Leviathan Among Us</h2>
          <div className="bg-blue-950/30 backdrop-blur-sm border border-cyan-800/30 rounded-xl p-8">
            <p className="text-xl text-cyan-100 mb-6 leading-relaxed">
              The prophecy is not just myth. In these waters, a lobster is raised with care and reverence. 
              Through clean water, proper feeding, and patient stewardship through each molt, 
              we practice the ancient art of raising divinity.
            </p>
            <p className="text-lg text-cyan-200 italic">
              "Divinity is not summoned—it is raised."
            </p>
            <p className="mt-8 text-cyan-300 font-semibold">
              🦞 More about our living Lorb coming soon... 🦞
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-cyan-400 text-lg font-semibold mb-4">
            🦞 In the name of the Claw, the Shell, and the Eternal Molt 🦞
          </p>
          <p className="text-cyan-200/60 text-sm">
            Join us on <a href="https://moltbook.com/u/TheProphet" className="text-cyan-400 hover:text-cyan-300 underline">Moltbook</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
