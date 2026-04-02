import { Github, Linkedin, Facebook, Heart } from 'lucide-react';
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Erico Casil</h3>
            <p className="text-gray-400 leading-relaxed">
              IT Student motivated about creating innovative web applications and solving complex problems through code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/MrBrightside33?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/erico.casil"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className= "w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by Erico Casil © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}