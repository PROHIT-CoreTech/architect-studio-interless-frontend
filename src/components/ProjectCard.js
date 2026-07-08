import Link from "next/link";

export default function ProjectCard({ project, priority = false }) {
  if (!project) return null;

  return (
    <Link href={`/portfolio/${project.id}`} className="group block space-y-4">
      {/* Image Container with crisp aspect ratio & clean geometric outline */}
      <div className="relative aspect-[3/2] overflow-hidden bg-studio-light border border-studio-border group-hover:border-studio-dark transition-all duration-500">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          loading={priority ? "eager" : "lazy"}
          className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
        />
        {/* Subtle geometric lines over the card on hover */}
        <div className="absolute inset-0 border border-transparent group-hover:border-studio-dark/10 pointer-events-none transition-colors duration-500"></div>
      </div>

      {/* Project Meta - Plain Language */}
      <div className="flex justify-between items-baseline pt-1">
        <h3 className="font-serif text-base text-studio-dark group-hover:text-studio-accent transition-colors duration-300">
          {project.title}
        </h3>
        <span className="text-xxs uppercase tracking-architect text-studio-muted">
          {project.location}
        </span>
      </div>
      
      {/* Category subtext */}
      <p className="text-xs text-studio-muted font-sans font-light mt-0.5">
        {project.category} — {project.status}
      </p>
    </Link>
  );
}
