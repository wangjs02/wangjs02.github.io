import { useState } from 'react';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="mb-16">
      <h2 className="mb-6">Research Interests</h2>
      
      <p className="text-gray-700 mb-4">
        During the PhD journey, the focus is on signal-informed sensing and learning. 
        This means incorporating the intrinsic properties of physical signals when building 
        deep learning solutions for sensing tasks. In the WIML-era of deep learning, data, 
        operator design, and cross-modality transfer are central; however, directly migrating 
        practices from image, speech, and text to wireless or wearable data often degrades 
        performance and explainability due to temporal dynamics, complex-valued representations, 
        and partially understood sensing artifacts. Based on this, the work follows the 
        trajectory below, with emphasis on mmWave radar, acoustic sensing, and human-computer 
        interaction.
      </p>

      {isExpanded && (
        <div className="text-gray-700 mb-4 space-y-4">
          <p>
            Additional research details can be added here. This section provides more in-depth
            information about specific research areas, methodologies, and ongoing projects.
          </p>
          <p>
            You can include information about specific techniques, tools, frameworks, or 
            theoretical foundations that guide your research approach.
          </p>
        </div>
      )}

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 hover:text-blue-800 mt-2"
      >
        {isExpanded ? '- hide details' : '+ show details'}
      </button>
    </section>
  );
}