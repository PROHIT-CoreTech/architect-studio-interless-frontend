# Studio Interlace — Architecture Portfolio & CMS Console

**Studio Interlace** is a clean, highly geometric, dynamic architecture portfolio and internal administrative tool built with the modern Next.js App Router, React, and Tailwind CSS.

The application is styled like an architectural blueprint—featuring precise grid structures, crisp borders, generous whitespace, and a high-end split layout hierarchy.

---

## 🎨 Design Specifications

*   **Typography**: 
    *   **Serif (`Cormorant Garamond`)**: Used for all editorial, classical headings, and blockquotes.
    *   **Sans-Serif (`Inter`)**: Used for navigation, technical specifications, database metadata, and input forms.
*   **Colors**:
    *   `Studio Linen (#FAF9F6)`: Warm gallery off-white background.
    *   `Studio Charcoal (#121212)`: Clean, deep text and dark backgrounds.
    *   `Studio Slate (#707070)`: Stonework grey for helper text.
    *   `Studio Bronze (#8C7A6B)`: Accent lines and selection highlights.
*   **Blueprint Aesthetics**: A repeating background grid overlay (`.blueprint-grid`) represents technical drawing grids.

---

## 📂 Project Directory Structure

```
frontend/
├── public/
│   └── fonts/                 # Typography README details
├── src/
│   ├── app/
│   │   ├── layout.js          # Root layout with Google Fonts setup & Global styles
│   │   ├── page.js            # Home: Minimal hero, asymmetric featured project grid
│   │   ├── portfolio/         
│   │   │   ├── page.js        # Portfolio: Dynamic category filters & 3-column archive mapping
│   │   │   └── [id]/          
│   │   │       └── page.js    # Details: 60/40 structural split with specs & video panels
│   │   ├── about/             
│   │   │   └── page.js        # About & Careers: Matrix team layout & 20MB CV dropzone
│   │   ├── intranet/          
│   │   │   └── page.js        # Intranet: Live material/contractor spec index & filter bar
│   │   └── admin/             
│   │       ├── page.js        # Admin CMS Login: Elegant credentials gate
│   │       └── dashboard/     
│   │           └── page.js    # Admin CMS Console: Sidebar dashboard & 200MB media dropzone
│   ├── components/            
│   │   ├── Header.js          # Main navigation bar with precise geometric spacing
│   │   ├── Footer.js          # Structured informational footer
│   │   ├── ProjectCard.js     # Grayscale-to-color hover card with aspect constraints
│   │   └── RichTextEditor.js  # Interactive markdown tag formatter mockup
│   ├── styles/                
│   │   └── globals.css        # Core design system tokens and blueprint styling
│   └── utils/                 
│       └── api.js             # Standalone API handler with 25 mock projects & intranet index
│   └── tailwind.config.js     # Custom theme, font variable links, and grid configs
└── next.config.js             # Image remote patterns configuration (Unsplash & Pexels)
```

---

## 🚀 Getting Started

### 1. Install Dependencies
Initialize node packages using your terminal:
```bash
npm install
```

### 2. Run the Development Server
Launch the local server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 3. Build for Production
Create an optimized production build:
```bash
npm run build
```

---

## 📄 Key Pages Explained

### 🏡 Home Landing Page
Features a full-bleed architectural hero banner with blueprint grid lines, followed by a classical core principles quote and an asymmetric 4-project display grid where cards span different columns to create an editorial feel.

### 📁 Selected Works (Portfolio)
A responsive 3-column layout mapping 25–30 projects. Clicking the category filter tabs (`All`, `Residential`, `Commercial`, `Interiors`) updates the visible projects immediately.

### 📐 Project Detail View (`/portfolio/[id]`)
An elegant 60/40 structural split layout:
*   **Left Column (60%)**: High-resolution renders, layouts, and embedded looping video streams of the site.
*   **Right Column (40%)**: Sticky panel detailing location, year, area, construction status, and the design narrative.

### 🌿 About & Careers
Houses the founding philosophy quote, headshots of directors in grayscale, and an interactive drag-and-drop file upload zone. It validates that the dropped file is a PDF and checks that it does not exceed the **20MB** size limit.

### 💻 Intranet Resource Search
An internal directory search portal with a live input filter to query materials, catalogues, manufacturers, and contractors. Documents can be sorted, showing metadata specs, date updated, and file sizes.

### 🔒 CMS Console Workspace & Console (`/admin`)
An administrative login portal that redirects to the dashboard. The dashboard contains:
*   A clean left sidebar menu.
*   Form fields for Title, Location, Area, Category, and Status.
*   A custom description editor formatting markdown triggers.
*   A media dropzone accepting PNG, JPEG, and MP4 files up to **200MB** with active progress bar simulations.
