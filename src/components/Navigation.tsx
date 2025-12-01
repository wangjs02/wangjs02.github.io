export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('publications')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Publications
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('news')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            News
          </button>
          <button
            onClick={() => scrollToSection('awards')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Awards
          </button>
          <button
            onClick={() => scrollToSection('service')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Service
          </button>
          <button
            onClick={() => scrollToSection('affiliations')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Affiliations
          </button>
        </div>
      </div>
    </nav>
  );
}