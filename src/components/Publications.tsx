export function Publications() {
  return (
    <section id="publications" className="mb-16">
      <h2 className="mb-6">Publications</h2>
      
      <div className="space-y-8">
        <div className="flex gap-6">
          <div className="w-48 h-32 bg-gray-100 flex-shrink-0 rounded"></div>
          <div>
            <h3 className="mb-2">Paper Title Placeholder</h3>
            <p className="text-gray-700 mb-1">Your Name, Co-author Name</p>
            <p className="text-gray-600 mb-2">Conference/Journal 2025</p>
            <p className="text-gray-600 mb-2">Coming soon...</p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="w-48 h-32 bg-gray-100 flex-shrink-0 rounded"></div>
          <div>
            <h3 className="mb-2">Another Paper Title Placeholder</h3>
            <p className="text-gray-700 mb-1">Co-author Name, Your Name</p>
            <p className="text-gray-600 mb-2">Conference/Journal 2024</p>
            <p className="text-gray-600 mb-2">Coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}