import Navigation from '@/components/Navigation';
import Link from 'next/link';

// This would typically come from a database or CMS
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A full-stack web application built with Next.js and Node.js',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    category: 'web',
    link: 'https://project1.com',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Mobile-first responsive website with modern design',
    image: '/project2.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    category: 'web',
    link: 'https://project2.com',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'RESTful API service with Express and PostgreSQL',
    image: '/project3.jpg',
    technologies: ['Node.js', 'Express', 'PostgreSQL'],
    category: 'api',
    link: 'https://project3.com',
  },
  // Add more projects as needed
];

const categories = ['all', 'web', 'api', 'mobile'];

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl font-bold mb-12">My Projects</h1>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors capitalize"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative">
                  {/* Add actual project image here */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                    <Link
                      href={project.link}
                      className="w-full text-center py-2 bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white font-medium"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 