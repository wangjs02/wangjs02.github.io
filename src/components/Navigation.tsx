import { useState } from 'react';

export function Navigation() {
  const [showMore, setShowMore] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const nav = document.querySelector('nav');
    const navHeight =
      (nav instanceof HTMLElement ? nav.offsetHeight : 0) || 0;

    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    // 让标题正好在导航底部下面一点
    let targetY = elementTop - navHeight - 8;

    // 避免滚到超出页面底部
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    if (targetY > maxY) targetY = maxY;
    if (targetY < 0) targetY = 0;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <nav className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
      <div className="max-w-3xl mx-auto px-6 py-4">
        <div className="flex flex-wrap items-center gap-4">
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
          {showMore && (
            <>
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
              <button
                onClick={() => scrollToSection('hobbies')}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Hobbies
              </button>
            </>
          )}
          <button
            onClick={() => setShowMore((v) => !v)}
            className="text-gray-500 hover:text-gray-800 text-sm inline-flex items-center gap-1 whitespace-nowrap"
          >
            {showMore ? (
              <>
                <span>◀</span>
              </>
            ) : (
              <>
                <span>▶</span>
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}