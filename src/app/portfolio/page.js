"use client";

import { useState, useEffect } from "react";
import { getProjects } from "../../utils/api";
import ProjectCard from "../../components/ProjectCard";
import { LayoutGrid, Loader } from "lucide-react";

export default function PortfolioPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Residential", "Commercial", "Interiors"];

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (e) {
        console.error("Error loading portfolio items", e);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-16">
      
      {/* 1. Header with exact geometric blueprint feel */}
      <div className="border-b border-studio-border pb-10 space-y-4">
        <span className="text-xxs uppercase tracking-blueprint text-studio-muted font-sans font-bold flex items-center gap-1.5">
          <LayoutGrid size={12} /> Index
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-studio-dark uppercase tracking-wide">
          Selected Works
        </h1>
        <p className="text-xs md:text-sm font-sans font-light text-studio-muted leading-relaxed max-w-xl">
          An overview of our completed buildings, interior spaces, and active concepts. Organized by scale, function, and materials.
        </p>
      </div>

      {/* 2. Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 border-b border-studio-border/50 pb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-xs uppercase tracking-architect font-sans font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-studio-dark text-studio-bg border border-studio-dark"
                : "text-studio-dark/70 hover:text-studio-dark hover:border-studio-dark/30 border border-transparent"
            }`}
          >
            {category}
          </button>
        ))}
        {/* Project count indicator */}
        <span className="ml-auto text-xxs font-sans text-studio-muted pr-2">
          Showing {filteredProjects.length} of {projects.length} works
        </span>
      </div>

      {/* 3. Portfolio Grid View */}
      {loading ? (
        <div className="min-h-[40vh] flex flex-col items-center justify-center space-y-2 text-studio-muted">
          <Loader className="animate-spin text-studio-accent" size={24} />
          <span className="text-xs font-sans font-light">Loading archive...</span>
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="min-h-[30vh] border border-dashed border-studio-border flex flex-col items-center justify-center text-studio-muted p-12 text-center">
          <p className="text-xs font-sans font-light">No projects catalogued under &apos;{selectedCategory}&apos; yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              priority={idx < 3}
            />
          ))}
        </div>
      )}
      
    </div>
  );
}
