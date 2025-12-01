export function Awards() {
  const awards = [
    { date: 'Sep. 2025', award: 'IEEE 2025 Signal Processing Society Scholarship (Renewal)' },
    { date: 'Oct. 2024', award: 'IEEE 2024 Signal Processing Society Scholarship' },
    { date: 'Sep. 2022', award: 'HKU Postgraduate Scholarship' },
    { date: 'Dec. 2021', award: 'National Scholarship (Rank: 7/902, 0.7%)' },
  ];

  return (
    <section id="awards" className="mb-16">
      <h2 className="mb-6">Awards</h2>
      
      <div className="space-y-3">
        {awards.map((item, index) => (
          <div key={index} className="flex gap-4">
            <span className="text-gray-600 w-24 flex-shrink-0">{item.date}</span>
            <p className="text-gray-700">{item.award}</p>
          </div>
        ))}
      </div>
    </section>
  );
}