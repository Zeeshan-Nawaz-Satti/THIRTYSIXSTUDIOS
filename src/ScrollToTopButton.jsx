import { useEffect, useState } from "react";


const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisible);
      return () => {
        window.removeEventListener('scroll', toggleVisible);
      };
    }, []);

      return (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg transition-opacity duration-300 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
  );
};

export default ScrollToTopButton;
