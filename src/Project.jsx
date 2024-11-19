
const Project = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img src="https://picsum.photos/600/700" alt="Project 1" className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">E-Commerce Platform</h3>
              <p className="text-gray-400 mb-4">A full-stack e-commerce solution with React and Node.js</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-indigo-600 text-sm text-white rounded-full">React</span>
                <span className="px-3 py-1 bg-indigo-600 text-sm text-white rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-indigo-600 text-sm text-white rounded-full">MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
