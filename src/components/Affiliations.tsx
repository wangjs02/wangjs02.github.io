export function Affiliations() {
  const affiliations = [
    {
      name: 'CDS, HKU',
      location: 'Hong Kong',
      period: '2019 - 2023',
      logo: null,
    },
    {
      name: 'NUS',
      location: 'Singapore',
      period: '2024 - 2025',
      logo: null,
    },
  ];

  return (
    <section id="affiliations" className="mb-16">
      <h2 className="mb-6">Affiliations</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {affiliations.map((affiliation, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              {affiliation.logo ? (
                <img 
                  src={affiliation.logo} 
                  alt={affiliation.name}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">Logo</span>
                </div>
              )}
            </div>
            <p className="mb-1">{affiliation.name}</p>
            <p className="text-gray-600">{affiliation.location}</p>
            <p className="text-gray-600">{affiliation.period}</p>
          </div>
        ))}
      </div>

      {/* <div className="mt-8 text-center text-gray-500">
        <p>Visitor from: SG 🇸🇬</p>
      </div> */}
    </section>
  );
}
