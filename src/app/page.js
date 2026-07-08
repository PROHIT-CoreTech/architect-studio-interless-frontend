import Link from "next/link";
import { getProjects } from "../utils/api";
import ProjectCard from "../components/ProjectCard";
import { ArrowRight } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function HomePage() {
  const allProjects = await getProjects();
  // Highlight 4 projects on the landing page for our asymmetric grid
  const featuredProjects = allProjects.slice(0, 4);

  return (
    <div className="relative pb-24">
      {/* 1. Full-width Static Hero Banner with fine structural border */}
      <section className="relative w-full h-[85vh] bg-studio-light border-b border-studio-border overflow-hidden">
        {/* Background Image: Monolithic concrete structure */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Studio Interlace Archway Hero"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Subtle geometric line overlay to represent blueprint grids */}
        <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-studio-dark/50 via-studio-dark/10 to-transparent"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl text-white space-y-6">
            <span className="text-xs uppercase tracking-blueprint font-sans font-medium text-studio-bg/85 block">
              Architectural Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-light font-serif leading-tight text-white uppercase tracking-wide">
              Spaces shaped by order, light, and geometry.
            </h1>
            <p className="text-sm md:text-base font-sans font-light text-studio-bg/75 leading-relaxed max-w-lg">
              We design buildings using raw materials and precise proportions. We believe that architecture should be simple, honest, and stand the test of time.
            </p>
            <div className="pt-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-architect border-b border-white pb-2 hover:text-studio-bg/80 hover:border-white/80 transition-all duration-300"
              >
                <span>View Selected Work</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Philosophy callout and introduction */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-studio-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-baseline">
          <div className="lg:col-span-1">
            <span className="text-xxs uppercase tracking-blueprint font-sans text-studio-muted font-bold block">
              Core Principles
            </span>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-studio-dark leading-snug">
              We don&apos;t follow fleeting fashions. We design spaces that feel solid, capture daylight, and respect their surroundings.
            </h2>
            <p className="text-xs md:text-sm font-sans font-light text-studio-muted leading-relaxed max-w-2xl">
              Every detail is considered—from the raw concrete joints to the ways stone slabs meet white oak floors. Our studio handles commissions from residential homes built into coastal cliffs to community hubs in the middle of historic European cities.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Asymmetric Layout Grid for "Featured Projects" */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-studio-border pb-6">
          <h2 className="text-3xl font-serif font-light text-studio-dark uppercase tracking-wide">
            Featured Projects
          </h2>
          <Link
            href="/portfolio"
            className="text-xs uppercase tracking-architect text-studio-muted hover:text-studio-dark transition-colors duration-300 mt-2 md:mt-0"
          >
            Explore all projects ({allProjects.length})
          </Link>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {featuredProjects.map((project, idx) => {
            // Assign different column spans to establish an asymmetric structural look
            // Index 0: 7 cols (Left side, larger)
            // Index 1: 5 cols (Right side, smaller, offset)
            // Index 2: 5 cols (Left side, smaller)
            // Index 3: 7 cols (Right side, larger)
            let colSpanClass = "md:col-span-7";
            if (idx === 1) colSpanClass = "md:col-span-5 md:mt-16";
            if (idx === 2) colSpanClass = "md:col-span-5";
            if (idx === 3) colSpanClass = "md:col-span-7 md:-mt-16";

            return (
              <div key={project.id} className={`${colSpanClass} space-y-2`}>
                <ProjectCard project={project} priority={idx === 0} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
