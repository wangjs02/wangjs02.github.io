export function Projects() {
  const projects = [
    {
      title: 'Project Title 1',
      description: 'Brief description of the project and its objectives. This could include the technologies used, methodologies applied, and key outcomes.',
      year: '2024 - Present',
      links: [
        { label: 'Website', url: '#' },
        { label: 'Code', url: '#' },
      ],
    },
    {
      title: 'Project Title 2',
      description: 'Another project description with relevant details about the research or development work conducted.',
      year: '2023 - 2024',
      links: [
        { label: 'Paper', url: '#' },
        { label: 'Demo', url: '#' },
      ],
    },
  ];

  return (
    <section id="projects" className="mb-16">
      <h2 className="mb-6">Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-300 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3>{project.title}</h3>
              <span className="text-gray-500">{project.year}</span>
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
    </section>
  );
}
