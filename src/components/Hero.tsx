import profileImg from 'figma:asset/646e53dbb437c246f6ea539fa37b534a604a9036.png';

export function Hero() {
  return (
    <section className="pt-8 pb-12">
      <h1 className="mb-12 tracking-wide">Your Name</h1>
      
      <div className="flex gap-8 items-start">
        <div className="flex-1 space-y-4">
          <p>
            Hey! I am [Your Name], a PhD candidate at{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">AIoT Lab</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">CDS</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">The University of Hong Kong</a>{' '}
            in Hong Kong, advised by{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Prof. Chenshu Wu</a>.
            Previously, I was a research assistant at{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">MARS Lab</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">IIIS</a>,{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Tsinghua University</a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Shanghai Qi Zhi Institute</a>{' '}
            in Shanghai and Beijing, China, advised by{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Prof. Hang Zhao</a>.
            Before that, I was a research intern at Beijing University of Posts and Telecommunications 
            in Beijing, China, advised by{' '}
            <a href="#" className="text-blue-600 hover:text-blue-800">Prof. Anfu Zhou</a>.
          </p>

          <p className="text-gray-600">
            I am open to collaboration and happy to discuss. If you're interested in my research, 
            feel free to contact me. I am currently seeking a global industrial internship in 2026 
            summer as well.
          </p>

          <div className="flex gap-4 pt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">CV</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
            <span className="text-gray-400">|</span>
            <a href="mailto:your.email@university.edu" className="text-blue-600 hover:text-blue-800">E-Mail</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">Google Scholar</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="#" className="text-blue-600 hover:text-blue-800">X</a>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src={profileImg} 
            alt="Profile" 
            className="w-32 h-32 object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}