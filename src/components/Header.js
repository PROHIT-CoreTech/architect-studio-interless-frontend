"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Intranet", href: "/intranet" },
    { name: "Admin", href: "/admin" },
  ];

  const isActive = (path) => pathname === path || pathname.startsWith(`${path}/`);

  return (
    <header className="sticky top-0 z-50 bg-studio-bg/85 backdrop-blur-md border-b border-studio-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Geometric & Serif */}
        <Link href="/" className="flex items-center space-x-3 group">
          <span className="font-serif text-xl tracking-architect text-studio-dark uppercase group-hover:text-studio-accent transition-colors duration-300">
            Studio Interlace
          </span>
          <span className="w-1.5 h-1.5 bg-studio-accent block"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-blueprint font-sans transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-studio-accent font-semibold"
                  : "text-studio-dark/70 hover:text-studio-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-studio-dark focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-studio-bg border-b border-studio-border px-6 py-8 flex flex-col space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xs uppercase tracking-blueprint font-sans transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-studio-accent font-semibold"
                  : "text-studio-dark/70 hover:text-studio-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
