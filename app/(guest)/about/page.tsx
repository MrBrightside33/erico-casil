"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
// import { motion } from 'motion/react';
import { motion } from "framer-motion"; 
import { Code2, Laptop, Lightbulb, Users, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices and industry standards',
    },
    {
      icon: Laptop,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices and screen sizes',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analytical thinking to tackle complex technical challenges efficiently',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach with my friends and other people to achieve leadership skills',
    },
  ];

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
      role: 'Hardware Tech Maintainance and Graphic Designer',
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
      items: ['Node.js', 'Java', 'Python', 'PostgreSQL', 'Neon', 'PHP', 'MongoDB', 'MySQL', 'C', 'C#'],
    },
    {
      category: 'Tools & Other',
      items: ['Git/GitHub', 'Thunder Client', 'Figma', 'VS Code', 'Visual Studio', 'Postman'],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 px-6 bg-gradient-to-br from-blue-100 via-white to-purple-50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An enthusiastic IT student dedicated to crafting elegant solutions to complex problems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzcwMjUzMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Code on screen"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                I am a third-year Information Technology student driven by a passion for building meaningful and impactful digital solutions. My interest in technology began with a simple curiosity about how websites work and has grown into a strong commitment to becoming a well-rounded full-stack developer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I focus on learning modern web technologies, programming languages and enjoy staying current with emerging industry trends. Whether I’m designing responsive user interfaces, developing backend systems or create a program, I approach every project with enthusiasm, precision, and a strong attention to detail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Outside of coding, I enjoy spending time outdoors to relax, clear my mind, and recharge. I also actively participate in online courses, as I strongly believe in continuous learning and sharing knowledge with the wider community.
              </p>
            </motion.div>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-20 px-6 bg-gray-50">
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
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-medium mb-2">{edu.school}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.period}</p>
                    <p className="text-gray-700">{edu.description}</p>
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
                <Briefcase className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                    <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experienced Technologies</h2>
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
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white rounded-full text-gray-800 font-medium shadow-sm"
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
