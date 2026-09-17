export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year?: string;
  location: string;
  scope: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  image: string;
  tag: string;
}

export const siteConfig = {
  // Brand & Contact Information
  // Update phone, whatsapp, email, etc. here when numbers become available
  companyName: "Capital Construction & Interior",
  brandNameShort: "Capital",
  tagline: "Spaces That Define You",
  description:
    "Premium interior design, construction and space transformation in Lucknow.",
  subheadline: "Interior design, construction & transformation — crafted for the way you live.",
  editorialStatement: "WE DON'T JUST BUILD SPACES. WE SHAPE HOW THEY FEEL.",
  editorialParagraph:
    "Every environment we craft balances architectural discipline with sensory warmth. From spatial planning and civil execution to bespoke joinery and material curation, Capital Construction & Interior orchestrates spaces that endure with quiet authority.",

  phone: "", // Keep empty until available. UI safely falls back to direct toast / studio notice.
  whatsapp: "", // Keep empty until available. Floating and in-page CTA fallback to informative toast.
  email: "", // Keep empty until available.

  instagram: "https://www.instagram.com/capitalconstruction.in",
  instagramHandle: "@capitalconstruction.in",

  // Location Coordinates & Address
  address: "Paradise Apartment, Sector 11 Main Rd, Narayan Nagar, Sector 11, Indira Nagar, Lucknow, Uttar Pradesh 226016",
  addressLines: [
    "Paradise Apartment, Sector 11 Main Rd",
    "Narayan Nagar, Sector 11, Indira Nagar",
    "Lucknow, Uttar Pradesh 226016, India",
  ],
  city: "Lucknow",
  state: "Uttar Pradesh",
  country: "India",
  postalCode: "226016",
  geo: {
    latitude: 26.8833,
    longitude: 80.9939,
  },
  googleMapsUrl:
    "https://maps.google.com/?q=Capital+Construction+%26+Interior+Paradise+Apartment+Sector+11+Main+Rd+Narayan+Nagar+Indira+Nagar+Lucknow+Uttar+Pradesh+226016",

  defaultWhatsAppMessage:
    "Hello Capital Construction & Interior, I would like to discuss an interior/construction project.",

  // Navigation Links
  navLinks: [
    { label: "WORK", href: "#work" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT", href: "#about" },
    { label: "PROCESS", href: "#process" },
    { label: "TRANSFORMATION", href: "#transformation" },
    { label: "CONTACT", href: "#contact" },
  ],

  // Services Catalog
  services: [
    {
      number: "01",
      title: "INTERIOR DESIGN",
      slug: "interior-design",
      subtitle: "Comprehensive spatial concepts & aesthetic harmony",
      description:
        "Full-spectrum architectural interior design translating personal lifestyle and brand ethos into refined, cohesive living and working environments.",
      features: ["Concept Schemes & Moodboards", "Custom Furniture & Millwork", "Architectural Lighting Layouts", "Material & Finish Specification"],
      image: "/images/services/service-1.jpg",
    },
    {
      number: "02",
      title: "RESIDENTIAL SPACES",
      slug: "residential-spaces",
      subtitle: "Private residences, luxury apartments & penthouses",
      description:
        "Tailored residential interiors engineered for warmth, comfort, and seamless daily flow. We treat every home as an enduring sanctuary.",
      features: ["Living & Entertaining Suites", "Master Bedrooms & Walk-ins", "Modular Kitchens & Pantries", "Luxury Bathrooms"],
      image: "/images/services/service-2.jpg",
    },
    {
      number: "03",
      title: "COMMERCIAL SPACES",
      slug: "commercial-spaces",
      subtitle: "Offices, retail, executive suites & studios",
      description:
        "Distinctive commercial environments designed to foster productivity, inspire teams, and leave an indelible impression on clients.",
      features: ["Corporate Head Offices", "Executive Boardrooms", "Boutique Retail Interiors", "Acoustic & Lighting Optimization"],
      image: "/images/services/service-3.jpg",
    },
    {
      number: "04",
      title: "CONSTRUCTION",
      slug: "construction",
      subtitle: "Civil engineering, structural development & site supervision",
      description:
        "Rigorous structural construction executed with precision engineering, quality materials, and unwavering adherence to timelines and safety.",
      features: ["Structural RCC Framing", "Civil Works & Masonry", "Site Supervision & Quality Control", "Foundation to Slab Execution"],
      image: "/images/services/service-4.jpg",
    },
    {
      number: "05",
      title: "RENOVATION",
      slug: "renovation",
      subtitle: "Structural modernization & spatial reconfiguration",
      description:
        "Reinvigorating existing layouts through strategic demolition, structural reinforcement, and contemporary interior overhauls.",
      features: ["Layout Reconfiguration", "Flooring & Ceiling Upgrades", "MEP & Electrical Overhauls", "Facade & Exterior Facelifts"],
      image: "/images/services/service-5.jpg",
    },
    {
      number: "06",
      title: "TURNKEY EXECUTION",
      slug: "turnkey-execution",
      subtitle: "From blueprint concept to handover ready",
      description:
        "Complete single-point accountability covering procurement, craftsperson management, MEP installations, and final white-glove styling.",
      features: ["End-to-End Project Management", "Vendor & Material Sourcing", "On-site Quality Assurance", "Timeline & Budget Control"],
      image: "/images/services/service-6.jpg",
    },
  ] as ServiceItem[],

  // Featured Projects (Curated architectural project representations)
  projects: [
    {
      id: "project-01",
      number: "01",
      title: "Residential Interior — Project 01",
      category: "Residential Interior",
      location: "Indira Nagar, Lucknow",
      scope: "Full-Home Interior & Custom Millwork",
      description:
        "A harmonious synthesis of natural oak, travertine textures, and recessed architectural lighting creating serene residential volumes.",
      image: "/images/projects/project-1.jpg",
    },
    {
      id: "project-02",
      number: "02",
      title: "Contemporary Residence — Project 02",
      category: "Interior Design",
      location: "Gomti Nagar, Lucknow",
      scope: "Living Suite & Spatial Planning",
      description:
        "Open-plan living space anchored by monolithic stone features, curated furnishings, and expansive glazed openings.",
      image: "/images/projects/project-2.jpg",
    },
    {
      id: "project-03",
      number: "03",
      title: "Architectural Kitchen — Project 03",
      category: "Residential Joinery",
      location: "Mahanagar, Lucknow",
      scope: "Bespoke Kitchen & Dining Architecture",
      description:
        "Minimalist culinary architecture pairing fluted walnut panels, quartz stone islands, and integrated smart appliances.",
      image: "/images/projects/project-3.jpg",
    },
    {
      id: "project-04",
      number: "04",
      title: "Master Living Suite — Project 04",
      category: "Interior Architecture",
      location: "Hazratganj, Lucknow",
      scope: "Suite Architecture & Ambient Lighting",
      description:
        "A private retreat designed with tactile linen wall finishes, bronze hardware accents, and acoustic wall panels.",
      image: "/images/projects/project-4.jpg",
    },
    {
      id: "project-05",
      number: "05",
      title: "Modern Minimalist Space — Project 05",
      category: "Turnkey Execution",
      location: "Aliganj, Lucknow",
      scope: "Structural Execution & Interior Fit-out",
      description:
        "A study in restraint, architectural symmetry, and shadow play through bespoke linear lighting and microcement surfaces.",
      image: "/images/projects/project-5.jpg",
    },
  ] as ProjectItem[],

  // Why Capital / Core Principles
  principles: [
    {
      number: "01",
      title: "THOUGHTFUL DESIGN",
      subtitle: "Context & Atmosphere",
      description:
        "We reject arbitrary ornamentation. Every line, shadow, and proportion is drawn with deliberate spatial intention and human proportion in mind.",
    },
    {
      number: "02",
      title: "FUNCTION FIRST",
      subtitle: "Utility & Ergonomics",
      description:
        "A beautiful room that fails daily living is a failed design. We engineer circulatory flow, ergonomic utility, and enduring functionality into every corner.",
    },
    {
      number: "03",
      title: "ATTENTION TO DETAIL",
      subtitle: "Finishes & Tolerances",
      description:
        "From shadow gaps and flush baseboards to bespoke grain matching across custom millwork, millimeter-level precision defines our standard.",
    },
    {
      number: "04",
      title: "CRAFTED EXECUTION",
      subtitle: "Engineering & Longevity",
      description:
        "Design integrity depends on construction rigor. Our hands-on site management ensures what is drafted on paper is built cleanly in physical reality.",
    },
  ] as PrincipleItem[],

  // Process Timeline
  processSteps: [
    {
      number: "01",
      phase: "DISCOVERY & BRIEF",
      title: "DISCOVER",
      description:
        "We begin with a deep exploration of your lifestyle, spatial aspirations, functional requirements, and site parameters in Lucknow.",
      deliverables: ["Site Measurement & Analysis", "Client Lifestyle Brief", "Spatial Budgeting & Scope"],
    },
    {
      number: "02",
      phase: "CONCEPT & SCHEMATICS",
      title: "DESIGN",
      description:
        "Translating ideas into architectural space planning, 3D visual language, moodboards, material palettes, and lighting strategies.",
      deliverables: ["2D Layout Optimizations", "Photorealistic 3D Visualizations", "Curated Material Boards"],
    },
    {
      number: "03",
      phase: "TECHNICAL DETAILING",
      title: "PLAN",
      description:
        "Developing exhaustive working drawings, MEP specifications, vendor procurement schedules, and strict construction timelines.",
      deliverables: ["Shop Drawings & Joinery Plans", "Electrical & Plumbing Schematics", "Bill of Quantities (BOQ)"],
    },
    {
      number: "04",
      phase: "CIVIL & ON-SITE EXECUTION",
      title: "BUILD",
      description:
        "Our skilled civil teams, carpenters, and finishing technicians execute every phase with strict on-site supervisor oversight.",
      deliverables: ["Civil & Structural Works", "Custom Millwork & Installation", "Quality Milestone Reviews"],
    },
    {
      number: "05",
      phase: "SNAGGING & HANDOVER",
      title: "DELIVER",
      description:
        "Rigorous snag audits, deep cleaning, architectural styling, and a seamless handover ready for immediate living.",
      deliverables: ["Zero-Snag Quality Signoff", "Care & Maintenance Manual", "Handover of Keys"],
    },
  ] as ProcessStep[],

  // Curated Instagram Showcase Items
  instagramPosts: [
    {
      id: "post-1",
      caption: "Natural sunlight traversing raw architectural stone. Precision in every joint.",
      image: "/images/instagram/insta-1.jpg",
      tag: "Living Architecture",
    },
    {
      id: "post-2",
      caption: "Minimalist dining atmosphere bathed in warm ambient lighting.",
      image: "/images/instagram/insta-2.jpg",
      tag: "Spatial Harmony",
    },
    {
      id: "post-3",
      caption: "Crafting bespoke joinery and seamless architectural storage.",
      image: "/images/instagram/insta-3.jpg",
      tag: "Bespoke Millwork",
    },
    {
      id: "post-4",
      caption: "Subtle textural interplay of fluted wood, travertine, and dark accents.",
      image: "/images/instagram/insta-4.jpg",
      tag: "Material Selection",
    },
    {
      id: "post-5",
      caption: "Clean proportions, generous heights, and quiet architectural luxury.",
      image: "/images/instagram/insta-5.jpg",
      tag: "Interior Refinement",
    },
    {
      id: "post-6",
      caption: "Transforming raw Lucknow sites into spaces of enduring character.",
      image: "/images/instagram/insta-6.jpg",
      tag: "Turnkey Execution",
    },
  ] as InstagramPost[],
};
