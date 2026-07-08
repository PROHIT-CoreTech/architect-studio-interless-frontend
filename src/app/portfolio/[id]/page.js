"use client";

import { useState, useEffect } from "react";
import { getProjectById } from "../../../utils/api";
import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Minimize, CheckCircle, Loader } from "lucide-react";

export default function ProjectDetailPage({ params }) {
  const { id } = params;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (e) {
        console.error("Failed to load project details", e);
      } finally {
        setLoading(false);
      }
    }
    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-2 text-studio-muted">
        <Loader className="animate-spin text-studio-accent" size={24} />
        <span className="text-xs font-sans font-light">Retrieving drawings & data...</span>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center space-y-6">
        <h1 className="text-3xl font-serif text-studio-dark">Project Not Found</h1>
        <p className="text-xs text-studio-muted font-sans">The requested project could not be located in our archive.</p>
        <Link href="/portfolio" className="btn-primary inline-block">
          Return to Selected Work
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 space-y-12">
      
      {/* Back Link */}
      <div>
        <Link
          href="/portfolio"
          className="inline-flex items-center space-x-2 text-xs uppercase tracking-architect text-studio-muted hover:text-studio-dark transition-colors duration-300"
        >
          <ArrowLeft size={12} />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* 60/40 Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* LEFT COLUMN: Vertical renders & video (60% space / 7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Main Hero Render */}
          <div className="border border-studio-border bg-studio-light aspect-[3/2] w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={`${project.title} - Render 1`}
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>

          {/* Embedded Video Block (if present) */}
          {project.video && (
            <div className="border border-studio-border bg-studio-dark aspect-[16/9] w-full overflow-hidden relative group">
              <video
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-studio-dark/75 px-3 py-1.5 border border-studio-border/30 text-xxs text-studio-bg uppercase tracking-architect">
                Live Study Stream
              </div>
            </div>
          )}

          {/* Auxiliary Slides/Drafts */}
          {project.images && project.images.slice(1).map((imgUrl, index) => (
            <div key={index} className="border border-studio-border bg-studio-light aspect-[3/2] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgUrl}
                alt={`${project.title} - Study Render ${index + 2}`}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          ))}
          
        </div>

        {/* RIGHT COLUMN: Sticky specs sheet & concept text (40% space / 5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
          
          {/* Title & Category */}
          <div className="space-y-2">
            <span className="text-xxs uppercase tracking-blueprint text-studio-accent font-sans font-semibold">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-light text-studio-dark tracking-wide uppercase">
              {project.title}
            </h1>
          </div>

          {/* Project Specifications Box */}
          <div className="border-t border-b border-studio-border py-8 space-y-4 font-sans text-xs">
            <div className="grid grid-cols-2 py-1.5 items-center">
              <span className="text-studio-muted uppercase tracking-architect flex items-center gap-1.5">
                <MapPin size={12} /> Location
              </span>
              <span className="text-studio-dark font-medium text-right">{project.location}</span>
            </div>
            <div className="grid grid-cols-2 py-1.5 items-center border-t border-studio-border/40">
              <span className="text-studio-muted uppercase tracking-architect flex items-center gap-1.5">
                <Clock size={12} /> Year
              </span>
              <span className="text-studio-dark font-medium text-right">{project.year}</span>
            </div>
            <div className="grid grid-cols-2 py-1.5 items-center border-t border-studio-border/40">
              <span className="text-studio-muted uppercase tracking-architect flex items-center gap-1.5">
                <Minimize size={12} /> Area
              </span>
              <span className="text-studio-dark font-medium text-right">{project.area}</span>
            </div>
            <div className="grid grid-cols-2 py-1.5 items-center border-t border-studio-border/40">
              <span className="text-studio-muted uppercase tracking-architect flex items-center gap-1.5">
                <CheckCircle size={12} /> Status
              </span>
              <span className="text-studio-dark font-medium text-right">{project.status}</span>
            </div>
          </div>

          {/* Architectural Narrative */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-architect text-studio-dark">
              Design Narrative
            </h3>
            <p className="text-xs font-sans font-light text-studio-muted leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>

          {/* Geometric footers on side block */}
          <div className="hidden lg:block pt-8 border-t border-studio-border/40">
            <p className="text-xxs uppercase tracking-blueprint text-studio-muted/75">
              Studio Interlace Archive • Ref: {project.id.toUpperCase()}
            </p>
          </div>
          
        </div>

      </div>
      
    </div>
  );
}
