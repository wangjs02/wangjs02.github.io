import { useState } from 'react';

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="mb-16">
      <h2 className="mb-6">Research Interests</h2>
      <div className="text-gray-700 mb-4 space-y-4">
      <p>
        My research interests lie in responsible and interpretable AI, with a focus on how AI
        systems can be deployed safely and transparently in the real world, especially in the context of wireless sensing and physical AI.
      </p>

      </div>
      {isExpanded && (
        <div className="text-gray-700 mb-4 space-y-4">
          <p> 
            <span className="font-semibold">Responsible AI & content provenance.</span>{' '}
            I work on <em>trustworthy generative AI via robust content provenance</em>—studying
            how mechanisms such as watermarking and cryptographic signatures can help detect
            AI-generated misuse content, improve data provenance, and strengthen user and
            platform trust.
          </p>
          <p>
            <span className="font-semibold">Interpretable / knowledge-centric AI.</span>{' '}
            I am interested in interpretable, knowledge-centric and neuro-symbolic approaches
            that make model behaviour easier to understand, verify and control.
          </p>
          <p>
            <span className="font-semibold">Physical AI and wireless sensing.</span>{' '}
            I also explore how to bridge the gap between the physical and digital worlds, using
            wireless and sensor-based signals to obtain rich contextual intelligence.
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