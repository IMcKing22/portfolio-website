import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* About Section */}
          <section className="mb-20">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                I'm a passionate full-stack developer with a keen eye for design and a love for creating
                seamless user experiences. With several years of experience in web development, I
                specialize in building modern, responsive applications using cutting-edge technologies.
              </p>
              <p className="text-lg mb-6">
                My journey in software development began [Your Story Here]. I'm constantly learning and
                exploring new technologies to stay at the forefront of web development.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    React.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Express.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    RESTful APIs
                  </li>
                </ul>
              </div>

              {/* Tools & Others */}
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Git & GitHub
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Docker
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    CI/CD
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Agile/Scrum
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 