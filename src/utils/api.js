// Studio Interlace Mock Projects Database (25-30 high-fidelity items)
// These use curated architectural images from Unsplash to look beautiful out of the box.
const MOCK_PROJECTS = [
  {
    id: "tectonic-pavilion",
    title: "Tectonic Pavilion",
    location: "Kyoto, Japan",
    category: "Residential",
    year: "2024",
    area: "340 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-interior-with-minimalist-design-41793-large.mp4",
    description: "Designed as a series of floating timber planes nested within a bamboo grove. The structure balances heavy volcanic stone bases with ultra-light cedar lattices. Broad overhangs protect internal spaces from direct summer sun while inviting soft, diffused reflections off the water feature."
  },
  {
    id: "megalith-library",
    title: "Megalith Library",
    location: "Zurich, Switzerland",
    category: "Commercial",
    year: "2025",
    area: "4,200 sqm",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "A civic project carved from raw dark basalt. The facade features narrow, deeply inset glass ribbons that illuminate three floors of open reading stacks. An internal concrete courtyard provides a sanctuary for quiet contemplation amidst the bustling city center."
  },
  {
    id: "glass-rib-house",
    title: "Glass Rib House",
    location: "Portland, USA",
    category: "Residential",
    year: "2023",
    area: "280 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    ],
    video: "https://assets.mixkit.co/videos/preview/mixkit-luxury-home-interior-with-swimming-pool-42205-large.mp4",
    description: "Nestled on a wooded ridge overlooking the valley, the structure uses structural steel frames exposed internally as columns. Floor-to-ceiling double-glazed panels dissolve the barrier between the indoor living space and the surrounding old-growth pine forest."
  },
  {
    id: "linen-concrete-loft",
    title: "Linen & Concrete",
    location: "Milan, Italy",
    category: "Interiors",
    year: "2024",
    area: "180 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "An interior intervention in a historical industrial district. Raw, formboard-pressed concrete walls are left exposed to contrast against soft custom linen drapery, warm oak joinery, and sandblasted limestone countertops."
  },
  {
    id: "the-monolith",
    title: "The Monolith",
    location: "Bergen, Norway",
    category: "Commercial",
    year: "2025",
    area: "1,500 sqm",
    status: "Concept",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "An office structure designed to withstand harsh northern climates. Clad in dark zinc panels that weather over time, the building stands as a solid, monolithic block on the shoreline, punctured only by deep geometric lightwells."
  },
  {
    id: "brutalist-retreat",
    title: "Brutalist Retreat",
    location: "Valle de Bravo, Mexico",
    category: "Residential",
    year: "2023",
    area: "420 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "Constructed using pigmented local clay concrete. This vacation home is organized around three courtyards, offering privacy and natural ventilation while keeping the structure low to blend with the native mountain shrubbery."
  },
  {
    id: "travertine-gallery",
    title: "Travertine Gallery",
    location: "Rome, Italy",
    category: "Commercial",
    year: "2024",
    area: "850 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "A private contemporary art space lined in unpolished Roman travertine. Its layout is structured on a strict 1.2-meter grid, creating a rhythm of columns and beams that frames views of the exhibition walls."
  },
  {
    id: "acre-pavilion",
    title: "Acre Pavilion",
    location: "São Paulo, Brazil",
    category: "Residential",
    year: "2024",
    area: "510 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "An expansive single-story residence resting on a sloped site. A post-tensioned concrete roof slab spans 18 meters without intermediate supports, sheltering a completely open-plan living zone flanked by lush tropical vegetation."
  },
  {
    id: "oak-stone-residence",
    title: "Oak & Stone Residence",
    location: "Munich, Germany",
    category: "Residential",
    year: "2025",
    area: "390 sqm",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "A robust residential building designed for longevity. The perimeter walls are laid in local granite blocks, while the inner volume is structured with oiled white oak frames, creating a light, inviting interior space."
  },
  {
    id: "minimalist-atrium",
    title: "Minimalist Atrium",
    location: "Tokyo, Japan",
    category: "Interiors",
    year: "2023",
    area: "120 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"
    ],
    video: null,
    description: "This design introduces a central open-air light shaft into a narrow urban residence. Light filters down three stories through perforated steel stairs, reflecting off sand-textured plaster walls."
  },
  // Adding more mock projects to reach a complete, beautiful list of 25 projects
  {
    id: "silt-house",
    title: "Silt House",
    location: "Vancouver, Canada",
    category: "Residential",
    year: "2024",
    area: "310 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "Raised on columns above a tidal estuary. Features charred cedar panels (Shou Sugi Ban) that protect the home from wind and spray, with open views of the Canadian shoreline."
  },
  {
    id: "linear-workspace",
    title: "Linear Workspace",
    location: "Copenhagen, Denmark",
    category: "Commercial",
    year: "2024",
    area: "1,100 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A light-flooded workspace arranged around a central glazed spine. Features acoustic wool panels, raw steel desks, and exposed building services painted in bone-white."
  },
  {
    id: "vaulted-sanctuary",
    title: "Vaulted Sanctuary",
    location: "Paris, France",
    category: "Interiors",
    year: "2023",
    area: "140 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A conversion of a basement vault into a wellness spa. Features lime plaster vaults, limestone bathing pools, and low-level concealed lighting to create an atmosphere of quiet rest."
  },
  {
    id: "earthy-monopitch",
    title: "Earthy Monopitch",
    location: "Melbourne, Australia",
    category: "Residential",
    year: "2025",
    area: "290 sqm",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A house under a single sloping steel roof. Built with rammed earth walls that absorb day heat and release it during cold desert nights."
  },
  {
    id: "steel-shadow-studio",
    title: "Steel & Shadow Studio",
    location: "Austin, USA",
    category: "Commercial",
    year: "2024",
    area: "720 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A warehouse conversion featuring black corrugated steel panels and dramatic light shafts designed to produce sharp geometric shadow patterns in the creative studios below."
  },
  {
    id: "ochre-residence",
    title: "Ochre Residence",
    location: "Marrakech, Morocco",
    category: "Residential",
    year: "2024",
    area: "480 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A modern desert home utilizing traditional tadelakt plaster in warm ochre tones. Punctured openings are meticulously placed to frame distant views of the Atlas Mountains."
  },
  {
    id: "cantilever-house",
    title: "The Cantilever House",
    location: "Cape Town, South Africa",
    category: "Residential",
    year: "2023",
    area: "560 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "Extending over a granite cliff, this home's living room floats in mid-air. Supported by deep structural steel girders anchored directly into the solid rock face."
  },
  {
    id: "terrazzo-apartment",
    title: "Terrazzo Apartment",
    location: "Barcelona, Spain",
    category: "Interiors",
    year: "2024",
    area: "110 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "Renovation of an Eixample apartment. Custom terrazzo floors with marble aggregates flow seamlessly across all rooms, defining areas through delicate brass trim details."
  },
  {
    id: "basalt-gallery",
    title: "Basalt Gallery",
    location: "Reykjavik, Iceland",
    category: "Commercial",
    year: "2025",
    area: "620 sqm",
    status: "Concept",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "An exhibition pavilion featuring raw basalt rock walls and a continuous skylight that harvests the shifting northern light throughout the seasons."
  },
  {
    id: "curvilinear-pavilion",
    title: "Curvilinear Pavilion",
    location: "Seoul, South Korea",
    category: "Commercial",
    year: "2024",
    area: "980 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A cultural info center constructed using curved fair-face concrete panels, forming a soft sculptural shape within a dense urban landscape."
  },
  {
    id: "timber-lattice",
    title: "Timber Lattice Canopy",
    location: "Singapore",
    category: "Commercial",
    year: "2025",
    area: "1,800 sqm",
    status: "Under Construction",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A public park pavilion sheltered by an intricate glulam timber lattice. Designed to encourage natural airflow while providing shade and sheltering native climbing plants."
  },
  {
    id: "raw-earth-dwelling",
    title: "Raw Earth Dwelling",
    location: "Santa Fe, USA",
    category: "Residential",
    year: "2023",
    area: "260 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "An interpretation of traditional pueblo architecture. Adobe walls are combined with modern triple-glazed steel windows, optimizing solar gains throughout the high-desert seasons."
  },
  {
    id: "dune-house",
    title: "Dune House",
    location: "Skagen, Denmark",
    category: "Residential",
    year: "2024",
    area: "210 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "Half-buried in the beach dunes, the concrete structure is designed to sit low in the wind. The exterior is finished with sand-textured render that mimics the color of the dunes."
  },
  {
    id: "zenith-workspace",
    title: "Zenith Workspace",
    location: "London, UK",
    category: "Commercial",
    year: "2025",
    area: "2,300 sqm",
    status: "Concept",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "A carbon-neutral mass timber office building in East London. Incorporates vertical solar facades and rainwater harvesting channels integrated directly into its structure."
  },
  {
    id: "pied-a-terre",
    title: "Pied-à-Terre",
    location: "New York, USA",
    category: "Interiors",
    year: "2024",
    area: "90 sqm",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
    images: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80"],
    video: null,
    description: "An apartment renovation focusing on modular geometric storage. White-oiled maple partition walls slide to configure private and public rooms dynamically."
  }
];

// In-memory list to simulate runtime CMS updates
let runtimeProjects = [...MOCK_PROJECTS];

export async function getProjects() {
  try {
    // Attempt real API fetch
    const res = await fetch("/api/projects");
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    // Fallback silently to mock database
  }
  return runtimeProjects;
}

export async function getProjectById(id) {
  try {
    const res = await fetch(`/api/projects/${id}`);
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    // Fallback
  }
  return runtimeProjects.find(p => p.id === id) || null;
}

export async function createProject(projectData) {
  try {
    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {
    // Fallback
  }
  // Simulate backend write locally
  const newProj = {
    id: projectData.title.toLowerCase().replace(/\s+/g, "-"),
    ...projectData,
    year: projectData.year || new Date().getFullYear().toString(),
    images: projectData.images || [projectData.image || "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"],
  };
  runtimeProjects = [newProj, ...runtimeProjects];
  return newProj;
}

// In-memory search data for Intranet resource search
export const INTRANET_RESOURCES = [
  { id: "res-1", title: "Limestone & Travertine Supplier Directory", category: "Manufacturers", type: "PDF Document", size: "4.2 MB", author: "L. Kaelin", date: "2025-11-12", keywords: "limestone, stone, travertine, supplier, italy, tiles" },
  { id: "res-2", title: "Structural Glazing Specifications (V2)", category: "Contractors", type: "PDF Specification", size: "12.8 MB", author: "M. Vance", date: "2026-02-04", keywords: "glazing, glass, structural, window, curtain wall" },
  { id: "res-3", title: "Carbon-Neutral Concrete Mix Guidelines", category: "Manufacturers", type: "PDF Catalogues", size: "8.5 MB", author: "J. Mercer", date: "2026-04-18", keywords: "concrete, mix, carbon, eco, sustainable, foundation" },
  { id: "res-4", title: "Shou Sugi Ban Charred Wood Specialists", category: "Contractors", type: "Contact Card", size: "0.2 MB", author: "S. Tanaka", date: "2025-08-20", keywords: "wood, timber, cladding, shou sugi ban, charred, supplier" },
  { id: "res-5", title: "Custom Brass & Bronze Joinery Standards", category: "Manufacturers", type: "PDF Catalogues", size: "16.1 MB", author: "R. Barge", date: "2026-05-30", keywords: "brass, metal, bronze, joinery, handle, finish" },
  { id: "res-6", title: "Acoustic Timber Slats Testing Reports", category: "PDF Catalogues", type: "PDF Document", size: "5.4 MB", author: "T. Hoffmann", date: "2025-12-05", keywords: "acoustic, wood, panel, ceiling, noise, timber" },
  { id: "res-7", title: "Post-Tensioned Concrete Engineering Contacts", category: "Contractors", type: "Directory Sheet", size: "1.1 MB", author: "F. Rossi", date: "2026-01-15", keywords: "structural, engineer, post-tensioned, slab, concrete, contractor" }
];

export async function searchIntranetResources(query, category = "All") {
  const q = query.toLowerCase().trim();
  return INTRANET_RESOURCES.filter(res => {
    const matchesCategory = category === "All" || res.category === category || (category === "Catalogues" && res.type.includes("Catalogues"));
    const matchesSearch = !q || res.title.toLowerCase().includes(q) || res.keywords.toLowerCase().includes(q) || res.author.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });
}
