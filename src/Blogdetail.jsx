import { useState } from 'react';

const BlogDetail = () => {
  const [blog] = useState({
    title: "Building Modern Web Applications with React and Tailwind CSS",
    author: "John Doe",
    date: "August 15, 2023",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    `,
    tags: ["React", "Tailwind CSS", "Web Development", "Frontend"]
  });

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-96 w-full">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-sm md:text-base">
              <span>{blog.author}</span>
              <span>•</span>
              <span>{blog.date}</span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </article>

        {/* Tags Section */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm hover:bg-indigo-200 transition duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img
              src="https://api.dicebear.com/6.x/avataaars/svg?seed=John"
              alt="Author avatar"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-semibold">{blog.author}</h3>
              <p className="text-gray-600">Senior Web Developer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700">
            A passionate web developer with over 10 years of experience in building modern web applications.
          </p>
        </div>

        {/* Related Articles Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                <img
                  src={'https://picsum.photos/600/700'}
                  alt="Related article"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">Another Interesting Article</h3>
                  <p className="text-gray-600 text-sm">
                    A brief preview of another interesting article that readers might enjoy...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
