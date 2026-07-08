import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-studio-bg border-t border-studio-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Studio Info Column */}
        <div className="space-y-4">
          <h3 className="font-serif text-lg text-studio-dark uppercase tracking-architect">
            Studio Interlace
          </h3>
          <p className="text-xs text-studio-muted font-sans font-light leading-relaxed max-w-xs">
            We are an architectural design office. We believe in building spaces that are simple, structured, and carefully crafted to fit their environments.
          </p>
        </div>

        {/* Address Column */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-blueprint font-sans font-medium text-studio-dark">
            Our Studio
          </h4>
          <p className="text-xs text-studio-muted font-sans font-light leading-relaxed">
            404 Columnade Boulevard<br />
            Level 3, Grid Suite<br />
            Melbourne, VIC 3000
          </p>
        </div>

        {/* Contact Column */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-blueprint font-sans font-medium text-studio-dark">
            Get in touch
          </h4>
          <p className="text-xs text-studio-muted font-sans font-light leading-relaxed">
            hello@studiointerlace.com<br />
            +61 (3) 9000 8120
          </p>
        </div>

        {/* Links Column */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-blueprint font-sans font-medium text-studio-dark">
            Explore
          </h4>
          <div className="flex flex-col space-y-2 text-xs text-studio-muted font-sans font-light">
            <Link href="/portfolio" className="hover:text-studio-dark transition-colors duration-300">
              Selected Work
            </Link>
            <Link href="/about" className="hover:text-studio-dark transition-colors duration-300">
              About the Office
            </Link>
          </div>
        </div>

      </div>

      {/* Baseline */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-t border-studio-border/50 flex flex-col md:flex-row items-center justify-between text-xxs text-studio-muted font-sans font-light">
        <p>© {currentYear} Studio Interlace. All rights reserved.</p>
        <p className="mt-2 md:mt-0 tracking-wider">STRUCTURE • SPACE • ORDER</p>
      </div>
    </footer>
  );
}
