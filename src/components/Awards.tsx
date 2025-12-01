export function Awards() {
  const awards = [
    { date: '2023', award: 'Saw Prize in Statistics, The University of Hong Kong' },
    { date: '2022', award: 'Overseas Research Fellowship, The University of Hong Kong' },
    { date: '2022', award: 'Reaching Out Award, HKSAR Government' },
    { date: '2021–2022', award: 'Best Poster Presenter, HKU Research Colloquium' },
    { date: '2019–2022', award: 'Dean’s Honor List, The University of Hong Kong' },
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