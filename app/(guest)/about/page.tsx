"use client";

import Header from "@/components/common/Header";
import Image from "next/image";
import { motion } from "framer-motion"; 
import { GraduationCap, Briefcase } from 'lucide-react';

export default function About() {

  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Cordova Public College(Undergraduate)',
      period: '2023 - present',
      description: 'Focus on programming, Web Development, and Database Systems',
    },
  ];

  const experience = [
    {
      role: 'Sublimation Printer Operator and Maintainance',
      company: 'JL Macher Sublimation',
      period: '2021-2022',
      description: 'Operate and maintain machine and digital hardware',
    },
    {
      role: 'Graphic Designer',
      company: 'JL Macher Sublimation',
      period: '2021 - 2022',
      description: 'Editing and creating layout design using Adobe tools',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'Bootstrap CSS', 'JavaScript'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Java', 'PostgreSQL', 'Neon', 'PHP', 'MongoDB', 'MySQL', 'C', 'C#'],
    },
    {
      category: 'Tools & Other',
      items: ['Git/GitHub', 'Thunder Client', 'Figma', 'VS Code', 'Visual Studio Community', 'Postman'],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              An enthusiastic IT student dedicated to crafting elegant solutions to complex problems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-100">
                <Image
                  src="https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwMjUzMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Code on screen"
                  fill
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Journey</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a third-year Information Technology student driven by a passion for building meaningful and impactful digital solutions. My interest in technology began with a simple curiosity about how websites work and has grown into a strong commitment to becoming a well-rounded full-stack developer.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I focus on learning modern web technologies, programming languages and enjoy staying current with emerging industry trends. Whether I'm designing responsive user interfaces, developing backend systems or create a program, I approach every project with enthusiasm, precision, and a strong attention to detail.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Outside of coding, I enjoy spending time outdoors to relax, clear my mind, and recharge. I also actively participate in online courses, as I strongly believe in continuous learning and sharing knowledge with the wider community.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Experience</h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experienced Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white dark:bg-gray-600 rounded-full text-gray-800 dark:text-gray-200 font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}