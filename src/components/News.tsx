import { useState } from 'react';

export function News() {
  const [showOlder, setShowOlder] = useState(false);

  const recentNews = [
    { date: 'Nov. 2025', content: 'Two papers were accepted by Conference 2026!' },
    { date: 'Oct. 2025', content: 'PhD candidature is comfirmed.' },
    { date: 'Sep. 2025', content: 'Honored to renew as a recipient of the IEEE 2025 Signal Processing Society Scholarship.' },
    { date: 'Aug. 2025', content: 'Honored to have been invited to serve as a PC member for ICPADS 2025.' },
  ];

  const olderNews = [
    { date: 'Jul. 2025', content: 'Attended Conference 2025 in City.' },
    { date: 'Jun. 2025', content: 'Paper accepted to Journal 2025.' },
    { date: 'May 2025', content: 'Gave a talk at Workshop 2025.' },
    { date: 'Apr. 2025', content: 'Started collaboration with Research Group.' },
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