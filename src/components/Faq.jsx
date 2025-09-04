import React, { useState } from 'react'
import Title from './sharedComponent/Title'

const faqs = [
    {
      question: "What is the Labib educational platform?",
      answer:
        "Labib is an innovative learning platform that aims to enhance students' skills through interactive stories, educational games, engaging videos, exercises, and interactive worksheets.",
    },
    {
      question: "How can I subscribe to the platform?",
      answer:
        "Flowbite is designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
    },
    {
      question: "Is the platform free?",
      answer:
        "The main difference is that Flowbite is open-source under the MIT license, whereas Tailwind UI is a paid product.",
    },
  ];

const Faq = () => {
   const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
        <div className="pb-40">
      <div className="container">
        <h2 className="text-2xl font-bold text-center pt-10">Frequently Asked Questions</h2>
        <div className="w-[80%] mx-auto pt-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-xl mb-3">
              <button
                className="flex justify-between items-center w-full p-5 text-gray-700 font-medium hover:bg-blue-100 rounded-xl"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq