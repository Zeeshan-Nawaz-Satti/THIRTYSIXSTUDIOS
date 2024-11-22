import { Link } from "react-router-dom"

const Blogs = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Blog Card 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <Link to='/THIRTYSIXSTUDIOS/blogdetail'>
            <img src="https://picsum.photos/600/700" alt="Blog 1" className="w-full h-48 object-cover cursor-pointer"/>
            </Link>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <span className="text-sm text-gray-400">March 15, 2024</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-sm text-indigo-400">Web Development</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Getting Started with React and Tailwind CSS</h3>
              <p className="text-gray-400 mb-4">Learn how to set up and create beautiful responsive websites using React and Tailwind CSS...</p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">Read More →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
