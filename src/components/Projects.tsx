import { useState } from 'react';

export function Projects() {
  const [showMore, setShowMore] = useState(false);

  const projects = [
    {
      title: 'Responsible and Explainable AI for Synthetic Image Detection',
      description:
        'Studied detectability, generalisability and interpretability of synthetic images from state-of-the-art generative models, gaining experience in LLM deployment and deep neural network training. Advised by Prof. Qianxiao Li.',
      year: 'Aug 2025 – Nov 2025',
      links: [
        { label: 'Code', url: 'https://github.com/wangjs02/ResponsibleAI' },
        { label: 'Paper', url: './assets/AI Image Detection.pdf' },
      ],
    },
    {
      title: 'Post-Earnings-Announcement Drift Trading Strategy',
      description:
        'Built a 20-year clean equity dataset with technical indicators, fundamentals and LLM-based sentiment, and designed a post-earnings-announcement drift strategy achieving an out-of-sample Sharpe ratio of 1.5. Conducted as a Research Assistant at AIDF, NUS.',
      year: 'Aug 2024 – Mar 2025',
      links: [],
    },
    {
      title: 'Cost-Efficient Alpha via Small-Sample Machine Learning',
      description:
        'Optimised machine learning models for small-sample regimes, producing an uncorrelated, comparable alpha signal with up to 30% cost reduction through structured Python experiments. Work conducted as a Quantitative Research Intern at Squarepoint Capital, Singapore.',
      year: 'Mar 2024 – Sep 2024',
      links: [],
    },
    {
      title: 'Fisher’s Exact Test in a Causal Inference Framework',
      description:
        "Placed Fisher’s exact test in a causal inference framework, studying its properties under the strong null via simulation and conjecturing validity under the weak null. Advised by Prof. Qingyuan Zhao.",
      year: 'Jun 2022 – Aug 2022',
      links: [],
    },
    {
      title: 'Semi-Supervised Learning Based on Nadaraya–Watson Estimator',
      description:
        'Developed a semi-supervised Nadaraya–Watson estimator that is asymptotically superior to the traditional version, with simulations showing 5–10% performance gains. Awarded Best Poster Presenter at the HKU Research Colloquium.',
      year: 'Aug 2021 – Jun 2022',
      links: [
        { label: 'Code', url: 'https://github.com/wangjs02/STAT3799' },
        { label: 'Paper', url: './assets/Semi-supervised Learning.pdf' },
      ],
    }
  ];

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6">Projects</h2>
      <div className="space-y-6">
        {visibleProjects.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-300 pl-4">
            <div className="mb-2">
              <h3>{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.year}</p>
            </div>
            <p className="text-gray-700 mb-2">{project.description}</p>
            <div className="flex gap-3">
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  className="text-blue-600 hover:text-blue-800 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [{link.label}]
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="text-blue-600 hover:text-blue-800 mt-4"
      >
        {showMore ? '- hide projects' : '+ more projects'}
      </button>
    </section>
  );
}
