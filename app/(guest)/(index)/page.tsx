 
"use client"; 

import { motion } from "framer-motion"; 
import Image from "next/image";
import Header from "@/components/common/Header";
import { Github, Linkedin, Facebook, ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Casil2 from "@/public/images/casil.jpg";
import Projects from "@/components/features/home/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />
        
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-600 dark:text-blue-400 font-medium"
              >
                Hi, I&apos;m
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Erico Casil
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400"
              >
                IT Student
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              Enthusiastic about developing modern web applications and solving challenging problems through code. Currently a Bachelor of Science in Information Technology student with a strong focus on web development and programming.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 items-center flex-wrap"
            >
              <Link href="/projects">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  View My Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="px-8 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              
               <a href="https://github.com/MrBrightside33?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              
              <a href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              
              <a  href="https://www.facebook.com/erico.casil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right content - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src={Casil2}
                alt="Developer workspace"
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Projects */}
      <Projects />

      {/* Quick Skills Overview */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Knowledge</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Knowledgeable in modern web technologies and frameworks
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Javascript', 'React.js', 'Node.js', 'Java', 'Tailwind CSS',
              'Neon', 'PostgreSQL', 'Git', 'PHP', 
              'MySQL', 'Next.js', 'C', 'C#'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <span className="text-gray-800 dark:text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12"
          >
            <Link href="/about">
              <Button variant="outline" className="px-8 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Learn More About Me
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}