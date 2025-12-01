import { useState } from 'react';

export function News() {
  const [showOlder, setShowOlder] = useState(false);

  const recentNews = [
    { date: 'Nov. 2025', content: 'Finished my capstone project on AI-generated image detection.' },
    { date: 'Jul. 2025', content: 'Initiated TriSure, an InsurTech startup focused on AI-powered fraud detection.' },
    { date: 'May 2025', content: 'Returning to Squarepoint Capital for my second internship.' },
    { date: 'Oct. 2024', content: 'Started a research assistant position at AIDF.' },
    { date: 'Aug. 2024', content: 'Joined NUS as an MSc student in Data Science and Machine Learning.' },
    { date: 'Mar. 2024', content: 'Joined Squarepoint Capital as a Quantitative Researcher Intern.' },
  ];

  const olderNews = [
    { date: 'Aug. 2023', content: 'Attended a 7-day training camp at OBHK, sponsored by Providence Scholarship.' },
    { date: 'Jul. 2023', content: 'Graduated from HKU with First Class Honours and received Saw Prize in Statistics.' },
    { date: 'Feb. 2023', content: 'Returned to Hong Kong for my last semester before graduation.' },
    { date: 'Aug. 2022', content: 'Exchange student at UC Berkeley — Go Bears!' },
    { date: 'May 2022', content: 'Visited Cambridge as a summer research student with Prof. Qingyuan Zhao.' },
    { date: 'Feb. 2022', content: 'Best Poster Presenter at the HKU Research Colloquium.' },
    { date: 'Aug. 2021', content: 'Started capstone project on semi-supervised learning with Prof. Stephen Lee.' },
    { date: 'May 2021', content: "Awarded Dean's Honor List, The University of Hong Kong." },
    { date: 'May 2020', content: "Awarded Dean's Honor List, The University of Hong Kong." },
    { date: 'Oct. 2019', content: 'Voluntary teaching in Sichuan.' },
  ];

  return (
    <section id="news" className="mb-16">
      <h2 className="mb-6">News</h2>
      
      <div className="space-y-3">
        {recentNews.map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-gray-600 w-24 flex-shrink-0">{item.date}</span>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
        
        {showOlder && olderNews.map((item, index) => (
          <div key={`older-${index}`} className="flex gap-4">
            <span className="text-gray-600 w-24 flex-shrink-0">{item.date}</span>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={() => setShowOlder(!showOlder)}
        className="text-blue-600 hover:text-blue-800 mt-4"
      >
        {showOlder ? '- hide older news' : '+ older news'}
      </button>
    </section>
  );
}