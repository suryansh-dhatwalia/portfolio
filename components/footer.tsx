'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-r from-purple-950 to-blue-950 dark:from-slate-950 dark:to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-purple-800/50">
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Suryansh Dhatwalia
            </h3>
            <p className="text-gray-400">
              Full-Stack Developer & Problem Solver
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-gray-400">
              <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
              <br />
              <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
              <br />
              <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <div className="space-y-2 text-gray-400">
              <a href="mailto:suryansh78140@gmail.com" className="hover:text-purple-400 transition-colors">Email</a>
              <br />
              <a href="https://www.linkedin.com/in/suryansh-dhatwalia-8b137428b/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} Suryansh Dhatwalia. Built with React & Next.js</p>
        </div>
      </div>
    </footer>
  )
}
