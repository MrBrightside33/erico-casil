import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { PROJECTS } from "@/constants/PROJECTS";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">My Projects</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work, from full-stack applications to frontend designs and backend APIs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Filter:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedFilter === filter
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
