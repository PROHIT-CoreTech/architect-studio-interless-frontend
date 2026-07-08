"use client";

import { useState, useRef } from "react";
import { Upload, File, CheckCircle, AlertTriangle, Trash2, Users } from "lucide-react";

export default function AboutPage() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState({ text: "", type: "" });
  const fileInputRef = useRef(null);

  // Studio Team Members list with high-end black-and-white portraits
  const teamMembers = [
    {
      name: "Evelyn Sterling",
      role: "Principal Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Marcus Vance",
      role: "Lead Structural Architect",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Lina Kaelin",
      role: "Director of Interiors",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Kaito Tanaka",
      role: "Associate Designer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80"
    }
  ];

  // Drag and Drop Logic
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  const validateAndProcessFile = (file) => {
    // Check if PDF
    if (file.type !== "application/pdf" && !file.name.endsWith(".pdf")) {
      setUploadMessage({
        text: "Please upload a PDF document. We cannot process other file types.",
        type: "error"
      });
      setSelectedFile(null);
      return;
    }

    // Size check: 20MB limit (20 * 1024 * 1024 bytes)
    const limit = 20 * 1024 * 1024;
    if (file.size > limit) {
      setUploadMessage({
        text: `The file exceeds our 20MB size limit. Please compress your PDF before sending.`,
        type: "error"
      });
      setSelectedFile(null);
      return;
    }

    // Success state
    setSelectedFile(file);
    setUploadMessage({
      text: `Your file "${file.name}" has been received and verified. Thank you for applying!`,
      type: "success"
    });
  };

  const removeFile = () => {
    setSelectedFile(null);
    setUploadMessage({ text: "", type: "" });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-24">
      
      {/* 1. Philosophy Callout Quote - Premium Minimalist */}
      <section className="text-center max-w-4xl mx-auto py-12 border-b border-studio-border">
        <span className="text-xxs uppercase tracking-blueprint text-studio-muted font-sans font-bold block mb-6">
          Our Philosophy
        </span>
        <blockquote className="font-serif text-3xl md:text-5xl font-light text-studio-dark leading-snug italic">
          &ldquo;Architecture is the art of making the complex appear simple. We do not design wrappers; we structure spatial experiences using honest raw materials and clean geometric alignment.&rdquo;
        </blockquote>
        <cite className="block text-xs uppercase tracking-architect font-sans font-semibold text-studio-accent mt-6 not-italic">
          — Evelyn Sterling, Founder
        </cite>
      </section>

      {/* 2. Team Matrix Grid */}
      <section className="space-y-12">
        <div className="border-b border-studio-border pb-6 flex items-center space-x-2">
          <Users size={16} className="text-studio-accent" />
          <h2 className="text-2xl md:text-3xl font-serif font-light text-studio-dark uppercase tracking-wide">
            Our Studio Team
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="space-y-4 group">
              <div className="aspect-[4/5] bg-studio-light border border-studio-border overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-studio-dark">{member.name}</h3>
                <p className="text-xs font-sans font-light text-studio-muted uppercase tracking-architect">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Careers & Drag-and-Drop File Upload Zone */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 border-t border-studio-border">
        
        {/* Text Area */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-studio-dark uppercase tracking-wide">
            Join the Practice
          </h2>
          <p className="text-xs md:text-sm font-sans font-light text-studio-muted leading-relaxed">
            We are always looking for talented designers, structural draftsmen, and detailers who value spatial discipline and geometric order. 
          </p>
          <p className="text-xs md:text-sm font-sans font-light text-studio-muted leading-relaxed">
            Please submit your CV and portfolio summary. We review submissions regularly. We only accept documents in PDF format, up to a maximum size of 20MB.
          </p>
        </div>

        {/* Drag & Drop Zone */}
        <div className="lg:col-span-7">
          <div
            className={`relative border-2 border-dashed p-8 md:p-12 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[300px] ${
              dragActive
                ? "border-studio-dark bg-studio-light"
                : "border-studio-border bg-white hover:border-studio-muted"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              onChange={handleFileSelect}
              className="hidden"
              id="portfolio-upload-input"
            />

            {!selectedFile ? (
              <div className="space-y-4 flex flex-col items-center">
                <div className="p-4 bg-studio-bg border border-studio-border">
                  <Upload className="text-studio-muted" size={24} />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-sans font-medium text-studio-dark">
                    Drag and drop your PDF here, or{" "}
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-studio-accent underline hover:text-studio-dark transition-colors"
                    >
                      browse files
                    </button>
                  </p>
                  <p className="text-xxs font-sans text-studio-muted">
                    Supports PDF files up to 20MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 flex flex-col items-center w-full max-w-md">
                <div className="flex items-center space-x-3 p-4 bg-studio-light border border-studio-border w-full">
                  <File className="text-studio-accent shrink-0" size={24} />
                  <div className="text-left truncate flex-grow">
                    <p className="text-xs font-sans font-medium text-studio-dark truncate">
                      {selectedFile.name}
                    </p>
                    <p className="text-xxs font-sans text-studio-muted">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    onClick={removeFile}
                    className="p-1.5 hover:bg-studio-border/50 text-studio-muted hover:text-studio-dark transition-colors"
                    title="Remove File"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Validation Feedback Message */}
            {uploadMessage.text && (
              <div
                className={`mt-6 px-4 py-3 flex items-start space-x-2 text-left text-xs font-sans font-light border ${
                  uploadMessage.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-amber-50 border-amber-200 text-amber-800"
                }`}
              >
                {uploadMessage.type === "success" ? (
                  <CheckCircle size={16} className="shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                )}
                <span>{uploadMessage.text}</span>
              </div>
            )}
            
          </div>
        </div>

      </section>
      
    </div>
  );
}
