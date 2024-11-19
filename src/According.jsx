import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "What services do you offer?",
      content: "We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing solutions tailored to meet your specific needs."
    },
    {
      title: "How do I get started?",
      content: "Getting started is easy! Simply reach out through our contact form or schedule a free consultation. We'll discuss your project requirements and create a customized plan."
    },
    {
      title: "What are your pricing plans?",
      content: "Our pricing varies based on project scope and requirements. We offer flexible packages to accommodate different budgets while maintaining high-quality deliverables."
    },
    {
      title: "What is your typical timeline?", 
      content: "Project timelines depend on complexity and scope. We provide detailed project schedules during initial consultation and keep you updated throughout the development process."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className=" bg-gray-800 ">
    <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-800 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-300 dark:text-gray-200">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 flex justify-between items-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {item.title}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`transition-all duration-200 ease-in-out ${
                activeIndex === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-900">
                <p className="text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

export default Accordion;
