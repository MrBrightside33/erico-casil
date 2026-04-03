  "use client";


  import { useState, useEffect } from "react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";
  import { Menu, X } from "lucide-react";
  import { motion, AnimatePresence } from "framer-motion";
  import Image from "next/image";
  import Casil from "@/public/images/casil2.jpg";
  import { ThemeToggle } from "@/components/common/DarkMode";

  export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
      { label: "Home", path: "/" },
      { label: "About", path: "/about" },
      { label: "Projects", path: "/projects" },
      { label: "Contact", path: "/contact" },
    ];

    return (
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900 backdrop-blur-sm shadow-md"
            : "bg-white/90 dark:bg-gray-900 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className=" bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors">
                {/* <Code2 className="w-6 h-6 text-white" /> */}
                <Image
                  src={Casil}
                  alt="Logo"
                  className="w-10 h-10 object-cover rounded-full"
                  />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Erico Casil
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`text-gray-700  dark:text-white hover:text-blue-600 transition-colors font-medium ${
                      isActive ? "text-blue-600" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.path;

                    return (
                      <motion.div
                        key={item.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block w-full text-left px-4 py-2 rounded-lg transition-colors font-medium ${
                            isActive
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <ThemeToggle />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    );
  }
