import { useEffect, useState } from 'react';

const Trusted = () => {
  const [position, setPosition] = useState(0);

  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % (logos.length * 200));
    }, 30);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <section className="bg-gray-900 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-300 mb-8">
          Trusted By Industry Leaders
        </h2>
        
        <div className="relative">
          <div className="flex space-x-20" style={{ transform: `translateX(${position}px)` }}>
            {/* Duplicate logos for seamless loop */}
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className={`h-full w-full object-contain ${logo.includes('Microsoft') ? '' : 'brightness-0 invert'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
