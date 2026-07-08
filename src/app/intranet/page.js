"use client";

import { useState, useEffect } from "react";
import { searchIntranetResources } from "../../utils/api";
import { Search, FileText, User, Calendar, Database, HardDrive, ArrowUpRight } from "lucide-react";

export default function IntranetPortalPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = ["All", "Catalogues", "Contractors", "Manufacturers"];

  useEffect(() => {
    setLoading(true);
    const delayDebounce = setTimeout(async () => {
      const data = await searchIntranetResources(query, category);
      setResults(data);
      setLoading(false);
    }, 200); // Debounce search input

    return () => clearTimeout(delayDebounce);
  }, [query, category]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-12">
      
      {/* Intranet Title & Description */}
      <div className="border-b border-studio-border pb-10 space-y-4">
        <span className="text-xxs uppercase tracking-blueprint text-studio-muted font-sans font-bold flex items-center gap-1.5">
          <Database size={12} className="text-studio-accent" /> Internal Network
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-light text-studio-dark uppercase tracking-wide">
          Studio Resources
        </h1>
        <p className="text-xs md:text-sm font-sans font-light text-studio-muted leading-relaxed max-w-xl">
          Search the office database for material specifications, registered contractors, supplier catalogues, and internal drafting guidelines.
        </p>
      </div>

      {/* Control Panel: Search & Filter bar */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Search Input Bar */}
          <div className="md:col-span-8 relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by filename, material type, contractor, keyword..."
              className="w-full bg-white border border-studio-border pl-12 pr-4 py-3 text-xs font-sans font-light focus:border-studio-dark focus:outline-none transition-colors"
            />
            <Search className="absolute left-4 top-3.5 text-studio-muted" size={16} />
          </div>

          {/* Category Dropdown/Selector */}
          <div className="md:col-span-4">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-white border border-studio-border px-4 py-3 text-xs font-sans font-light focus:border-studio-dark focus:outline-none transition-colors appearance-none cursor-pointer"
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23707070' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                backgroundPosition: "right 1rem center",
                backgroundSize: "1em",
                backgroundRepeat: "no-repeat"
              }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>

        </div>

        {/* Quick Filter Info */}
        <div className="flex flex-wrap gap-2 text-xxs text-studio-muted font-sans font-light uppercase tracking-architect">
          <span>Active Filter: {category === "All" ? "Everything" : category}</span>
          {query && <span>• Searching for: &quot;{query}&quot;</span>}
          <span className="ml-auto">Located {results.length} files</span>
        </div>
      </div>

      {/* Search Results Grid */}
      {loading ? (
        <div className="py-20 text-center text-xs font-sans font-light text-studio-muted">
          Querying internal database...
        </div>
      ) : results.length === 0 ? (
        <div className="border border-dashed border-studio-border p-12 text-center text-studio-muted space-y-4">
          <p className="text-xs font-sans font-light">No records found matching your terms.</p>
          <button
            onClick={() => { setQuery(""); setCategory("All"); }}
            className="text-xxs uppercase tracking-architect underline hover:text-studio-dark"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((res) => (
            <div
              key={res.id}
              className="bg-white border border-studio-border p-6 flex flex-col justify-between hover:border-studio-dark transition-all duration-300 group"
            >
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-studio-border/30 pb-3">
                  <span className="text-xxs font-sans uppercase tracking-architect text-studio-accent font-semibold">
                    {res.category}
                  </span>
                  <span className="text-xxs font-sans text-studio-muted flex items-center gap-1">
                    <HardDrive size={10} /> {res.size}
                  </span>
                </div>

                {/* File Title */}
                <h3 className="font-serif text-lg text-studio-dark group-hover:text-studio-accent transition-colors duration-300">
                  {res.title}
                </h3>
              </div>

              {/* Footer Metadata */}
              <div className="space-y-4 mt-8 pt-4 border-t border-studio-border/30">
                <div className="grid grid-cols-2 gap-2 text-xxs font-sans font-light text-studio-muted">
                  <div className="flex items-center gap-1">
                    <FileText size={10} className="shrink-0" />
                    <span className="truncate">{res.type}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-end">
                    <User size={10} className="shrink-0" />
                    <span className="truncate">{res.author}</span>
                  </div>
                  <div className="flex items-center gap-1 col-span-2 mt-1">
                    <Calendar size={10} className="shrink-0" />
                    <span>Updated {res.date}</span>
                  </div>
                </div>

                {/* Action Link */}
                <a
                  href="#download"
                  onClick={(e) => { e.preventDefault(); alert(`Downloading resource document: ${res.title}`); }}
                  className="flex items-center justify-between bg-studio-bg group-hover:bg-studio-light border border-studio-border px-3 py-2 text-xxs uppercase tracking-architect text-studio-dark transition-colors duration-300"
                >
                  <span>Access Resource</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
}
