"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { createProject } from "../../../utils/api";
import RichTextEditor from "../../../components/RichTextEditor";
import { LayoutDashboard, FileImage, Film, ArrowUpRight, LogOut, CheckCircle, Trash2, FolderPlus, Grid, UserCheck } from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();

  // CMS States
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Residential");
  const [status, setStatus] = useState("Completed");
  const [area, setArea] = useState("");
  const [description, setDescription] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  
  // Dashboard Statuses
  const [uploadProgress, setUploadProgress] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dragActive, setDragActive] = useState(false);
  
  const mediaInputRef = useRef(null);

  // Sidebar Menu Navigation
  const [activeTab, setActiveTab] = useState("Projects");

  const menuItems = [
    { name: "Projects", icon: <FolderPlus size={16} /> },
    { name: "Portfolios Grid", icon: <Grid size={16} /> },
    { name: "Team Settings", icon: <UserCheck size={16} /> }
  ];

  // Drag and Drop handlers
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
      processMediaFile(e.dataTransfer.files[0]);
    }
  };

  const handleMediaSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      processMediaFile(e.target.files[0]);
    }
  };

  const processMediaFile = (file) => {
    setErrorMessage("");
    // Allowed types: PNG, JPEG, MP4
    const validTypes = ["image/png", "image/jpeg", "image/jpg", "video/mp4"];
    if (!validTypes.includes(file.type)) {
      setErrorMessage("Unsupported file type. Please upload a PNG, JPEG image, or MP4 video.");
      setMediaFile(null);
      return;
    }

    // Size limit: 200MB (200 * 1024 * 1024 bytes)
    const limit = 200 * 1024 * 1024;
    if (file.size > limit) {
      setErrorMessage("The file exceeds our 200MB upload limit. Please optimize or compress the file.");
      setMediaFile(null);
      return;
    }

    setMediaFile(file);
  };

  const removeMedia = () => {
    setMediaFile(null);
    if (mediaInputRef.current) mediaInputRef.current.value = "";
  };

  // Submit Handler
  const handleSave = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!title || !location || !area || !description) {
      setErrorMessage("Please fill out all standard fields before submitting.");
      return;
    }

    if (!mediaFile) {
      setErrorMessage("Please drop or choose a media rendering to represent the project.");
      return;
    }

    // Simulate file upload stream progress bar
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 30;
      });
    }, 150);

    setTimeout(async () => {
      // Setup payload matching api.js structure
      const projectPayload = {
        title,
        location,
        category,
        status,
        area,
        description,
        image: mediaFile.type.startsWith("image/") 
          ? URL.createObjectURL(mediaFile) 
          : "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
        video: mediaFile.type.startsWith("video/") ? URL.createObjectURL(mediaFile) : null,
      };

      try {
        await createProject(projectPayload);
        setSuccessMessage(`Success: "${title}" has been added to the public portfolio database.`);
        // Reset fields
        setTitle("");
        setLocation("");
        setArea("");
        setDescription("");
        setMediaFile(null);
        if (mediaInputRef.current) mediaInputRef.current.value = "";
      } catch (err) {
        setErrorMessage("An error occurred while saving the project to the archive.");
      } finally {
        setUploadProgress(0);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-studio-bg flex border-b border-studio-border">
      
      {/* 1. LEFT SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-studio-border bg-white flex flex-col justify-between shrink-0 hidden md:flex">
        
        {/* Top Section */}
        <div className="p-6 space-y-8">
          <div className="flex items-center space-x-2">
            <LayoutDashboard className="text-studio-accent" size={18} />
            <span className="text-xs uppercase tracking-blueprint font-sans font-bold text-studio-dark">
              CMS Console
            </span>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-xs uppercase tracking-architect font-sans font-medium transition-colors ${
                  activeTab === item.name
                    ? "bg-studio-light text-studio-dark font-semibold border-l-2 border-studio-dark"
                    : "text-studio-dark/60 hover:text-studio-dark hover:bg-studio-bg/50 border-l-2 border-transparent"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-6 border-t border-studio-border/50">
          <button
            onClick={() => router.push("/admin")}
            className="w-full flex items-center justify-between text-xs uppercase tracking-architect text-studio-muted hover:text-studio-dark transition-colors py-2"
          >
            <span>Log Out Console</span>
            <LogOut size={14} />
          </button>
        </div>

      </aside>

      {/* 2. MAIN WORKSPACE AREA */}
      <main className="flex-grow p-6 md:p-12 max-w-4xl mx-auto space-y-8">
        
        {/* Workspace Header */}
        <div className="border-b border-studio-border pb-6 flex flex-col md:flex-row justify-between items-baseline gap-4">
          <div className="space-y-1">
            <span className="text-xxs uppercase tracking-blueprint text-studio-muted font-sans font-semibold">
              Action Panel
            </span>
            <h1 className="text-3xl font-serif font-light text-studio-dark uppercase tracking-wide">
              Archive New Drawing
            </h1>
          </div>
          <button
            onClick={() => router.push("/portfolio")}
            className="text-xxs uppercase tracking-architect text-studio-accent hover:text-studio-dark transition-colors inline-flex items-center gap-1.5"
          >
            <span>Preview Portfolio View</span>
            <ArrowUpRight size={12} />
          </button>
        </div>

        {/* Feedback Alert Cards */}
        {successMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-3 flex items-start space-x-2 font-sans font-light">
            <CheckCircle size={16} className="shrink-0 mt-0.5" />
            <span>{successMessage}</span>
          </div>
        )}
        
        {errorMessage && (
          <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-3 font-sans font-light">
            {errorMessage}
          </div>
        )}

        {/* CMS Entry Form */}
        <form onSubmit={handleSave} className="space-y-8 bg-white border border-studio-border p-6 md:p-8">
          
          {/* Section 1: Standard text inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-1">
              <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
                Project Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Niemeyer Pavilion"
                className="input-field text-xs"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Brasília, Brazil"
                className="input-field text-xs"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
                Total Area
              </label>
              <input
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="e.g. 1,450 sqm"
                className="input-field text-xs"
                required
              />
            </div>

            {/* Selector fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent border-b border-studio-border py-2 text-xs font-sans font-light focus:border-studio-accent focus:outline-none cursor-pointer"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Interiors">Interiors</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-transparent border-b border-studio-border py-2 text-xs font-sans font-light focus:border-studio-accent focus:outline-none cursor-pointer"
                >
                  <option value="Completed">Completed</option>
                  <option value="Under Construction">In Construction</option>
                  <option value="Concept">Concept Draft</option>
                </select>
              </div>
            </div>

          </div>

          {/* Section 2: Narrative Editor block */}
          <div className="space-y-2">
            <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
              Design Narrative
            </label>
            <RichTextEditor value={description} onChange={setDescription} />
          </div>

          {/* Section 3: Media dropzone block (up to 200MB PNG/JPEG/MP4) */}
          <div className="space-y-2">
            <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
              Project Media Stream (PNG / JPEG / MP4 up to 200MB)
            </label>
            
            <div
              className={`border-2 border-dashed p-8 text-center transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] ${
                dragActive
                  ? "border-studio-dark bg-studio-light"
                  : "border-studio-border bg-studio-bg/20 hover:border-studio-muted"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                ref={mediaInputRef}
                type="file"
                accept="image/png, image/jpeg, video/mp4"
                onChange={handleMediaSelect}
                className="hidden"
                id="cms-media-file-input"
              />

              {!mediaFile ? (
                <div className="space-y-3 flex flex-col items-center">
                  <div className="flex gap-2 text-studio-muted">
                    <FileImage size={20} />
                    <Film size={20} />
                  </div>
                  <p className="text-xs font-sans font-light text-studio-dark">
                    Drag rendering or click to{" "}
                    <button
                      type="button"
                      onClick={() => mediaInputRef.current?.click()}
                      className="text-studio-accent underline hover:text-studio-dark transition-colors"
                    >
                      browse files
                    </button>
                  </p>
                  <p className="text-xxs text-studio-muted">
                    Supports high-resolution PNG, JPG, or MP4 streams under 200MB
                  </p>
                </div>
              ) : (
                <div className="flex items-center space-x-3 p-3 bg-studio-light border border-studio-border w-full max-w-md">
                  {mediaFile.type.startsWith("video/") ? (
                    <Film className="text-studio-accent shrink-0" size={20} />
                  ) : (
                    <FileImage className="text-studio-accent shrink-0" size={20} />
                  )}
                  <div className="text-left truncate flex-grow">
                    <p className="text-xs font-sans font-medium text-studio-dark truncate">
                      {mediaFile.name}
                    </p>
                    <p className="text-xxs font-sans text-studio-muted">
                      {(mediaFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeMedia}
                    className="p-1.5 hover:bg-studio-border/50 text-studio-muted hover:text-studio-dark transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Upload Progress Bar simulation */}
          {uploadProgress > 0 && (
            <div className="space-y-1.5">
              <div className="flex justify-between text-xxs font-sans font-medium text-studio-muted">
                <span>Uploading stream...</span>
                <span>{uploadProgress}%</span>
              </div>
              <div className="w-full bg-studio-border h-1">
                <div
                  className="bg-studio-accent h-1 transition-all duration-150"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4 border-t border-studio-border/30 flex justify-end">
            <button
              type="submit"
              disabled={uploadProgress > 0}
              className="btn-primary min-w-[200px]"
            >
              Add Project to Archive
            </button>
          </div>

        </form>

      </main>
      
    </div>
  );
}
