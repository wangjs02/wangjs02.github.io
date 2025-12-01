export function Hero() {
  return (
    <section className="pt-8 pb-12">
      <h1 className="mb-12 tracking-wide">Wang Junshi</h1>
      
      <div className="flex gap-8 items-start">
        <div className="flex-1 space-y-4">
          <p>
            I am an MSc student in Data Science and Machine Learning at the National
            University of Singapore, where my current project is supervised by{' '}
            <a
              href="https://blog.nus.edu.sg/qianxiaoli/"
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Li Qianxiao
            </a>
            . I previously completed my undergraduate studies at The University of Hong Kong
            under the supervision of{' '}
            <a
              href="https://www.scifac.hku.hk/people/lee-stephen-man-sing"
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Stephen Lee
            </a>
            , and spent a summer as a research student with{' '}
            <a
              href="https://www.statslab.cam.ac.uk/~qz280/"
              className="text-blue-600 hover:text-blue-800 font-medium"
              target="_blank"
              rel="noreferrer"
            >
              Prof. Qingyuan Zhao
            </a>
            .
          </p>

          <p className="text-gray-600">
            I am open to collaboration and happy to discuss. If you are interested in my work
            or potential collaborations, feel free to reach out. I am currently looking for
            PhD opportunities starting in August 2026.
          </p>

          <div className="flex gap-4 pt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">CV</a>
            <span className="text-gray-400">|</span>
            <a
              href="https://www.linkedin.com/in/junshi-wang/"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">|</span>
            <a
              href="mailto:junshi.wang at u.nus.edu"
              className="text-blue-600 hover:text-blue-800"
            >
              E-Mail
            </a>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">Google Scholar</span>
            <span className="text-gray-400">|</span>
            <a
              href="https://github.com/wangjs02"
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}