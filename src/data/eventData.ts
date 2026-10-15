import { ServiceItem, PortfolioItem, TimelineStep, DetailedProcessPhase, RunOfShowItem, NCRLocation, TestimonialItem } from '../types';

export const BRAND_CONFIG = {
  name: 'MIDNIGHT LUXE',
  tagline: 'Events • Experiences • Excellence',
  region: 'Delhi NCR',
  phoneDisplay: '+91 98100 00000',
  phoneClean: '+919810000000',
  whatsappNumber: '919810000000',
  email: 'concierge@midnightluxe.events',
  address: 'DLF CyberCity, Phase II, Gurugram & Barakhamba Road, Connaught Place, New Delhi',
  hours: 'Mon – Sat: 10:00 AM – 7:30 PM (Consultation by Appointment)',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'weddings',
    category: 'weddings',
    title: 'Weddings',
    shortDescription: 'Couture Indian weddings crafted with architectural splendor, bespoke decor, and seamless ritual execution.',
    fullDescription: 'From magnificent varmala settings under cascading crystal chandeliers to bespoke mandap architecture, we curate luxury weddings that honor heritage while delivering effortless modern sophistication. We manage end-to-end guest hospitality, catering curation, artist management, and turnkey venue production.',
    highlights: ['Bespoke Mandap & Floral Architecture', 'Luxury Hospitality & RSVP Management', 'High-Profile Celebrity & Artist Lineup', 'Custom Lighting & Stage Scenography'],
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    typicalScale: '300 to 2,500+ Guests',
    recommendedVenues: ['The Leela Palace Chanakyapuri', 'Taj Palace New Delhi', 'ITC Grand Bharat Gurugram', 'Chattarpur Royal Farmhouses']
  },
  {
    id: 'pre-weddings',
    category: 'pre-weddings',
    title: 'Pre-Wedding Celebrations',
    shortDescription: 'Electrifying Sangeet productions, sunlit Mehendi carnivals, and intimate Sufi cocktail soirees.',
    fullDescription: 'Pre-wedding celebrations set the emotional rhythm of the entire wedding narrative. We engineer high-energy concert-grade Sangeet stages with kinetic lighting, immersive LED dancefloors, vibrant bohemian Mehendi installations, and curated artisan cocktail lounges.',
    highlights: ['Concert-Scale Sangeet Stage & Trussing', 'Choreographer & Audio Engineering', 'Thematic Bohemian & Royal Mehendi Decor', 'Interactive Mixology & Gourmet Grazing Tables'],
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
    typicalScale: '150 to 800 Guests',
    recommendedVenues: ['Oberoi Sukhvilas / Gurgaon Farmsteads', 'Aravalli Pavilions Gurugram', 'The Roseate New Delhi', 'Jaypee Greens Golf Resort']
  },
  {
    id: 'corporate',
    category: 'corporate',
    title: 'Corporate Events',
    shortDescription: 'High-impact annual galas, CXO leadership summits, and global partner conferences with flawless technical rigor.',
    fullDescription: 'We translate your enterprise vision into unforgettable brand moments. Our corporate production unit specializes in seamless audiovisual integration, keynote stagecraft, executive protocol management, and VIP hospitality that impresses stakeholders and media alike.',
    highlights: ['Broadcast-Grade AV & Curved LED Walls', 'VIP Protocol & Speaker Liaison', 'Simultaneous Interpretation & Live Streaming', 'Bespoke Executive Dinner Experiences'],
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    typicalScale: '100 to 3,000+ Delegates',
    recommendedVenues: ['Bharat Mandapam (IECC)', 'Yashobhoomi (IICC Dwarka)', 'Hyatt Regency Delhi', 'Pullman New Delhi Aerocity']
  },
  {
    id: 'conferences',
    category: 'conferences',
    title: 'Conferences & Exhibitions',
    shortDescription: 'Large-scale trade expos, multi-track summits, and turnkey exhibition pavilion engineering.',
    fullDescription: 'Precision logistics meet cutting-edge spatial design. We engineer modular exhibition booths, interactive digital touchpoints, digital badge registration, and multi-hall acoustic zoning across premier exhibition venues in Delhi NCR.',
    highlights: ['Multi-Hall Spatial Masterplanning', 'Modular Booth Fabrication & Signage', 'Touchless RFID & QR Registration Desks', 'Hybrid Conference Streaming Infrastructure'],
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    typicalScale: '500 to 10,000+ Footfall',
    recommendedVenues: ['Pragati Maidan (Bharat Mandapam)', 'India Expo Centre & Mart Greater Noida', 'Yashobhoomi IICC', 'Aerocity Convention Center']
  },
  {
    id: 'launches',
    category: 'launches',
    title: 'Product Launches & Brand Events',
    shortDescription: 'Cinematic brand reveal experiences, experiential press previews, and experiential consumer activations.',
    fullDescription: 'Make your product launch the defining conversation of the season. We build bespoke reveal staging with kinetic mechanics, projection mapping, immersive spatial soundscapes, and curated influencer-ready visual aesthetics.',
    highlights: ['Kinetic Reveal Mechanisms & Projection Mapping', 'Automotive & Tech Unveiling Hydraulics', 'Experiential Tasting & Product Hands-On Zones', 'National Media & Influencer Management'],
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    typicalScale: '100 to 1,500 Attendees',
    recommendedVenues: ['DLF CyberHub Amphi-Spaces', 'The Grand New Delhi', 'Andaz Delhi Aerocity', 'Taj City Centre Gurugram']
  },
  {
    id: 'celebrations',
    category: 'celebrations',
    title: 'Birthdays & Private Celebrations',
    shortDescription: 'Milestone jubilee galas, themed private estates, and luxury anniversary dinners with refined intimacy.',
    fullDescription: 'Every personal milestone deserves a celebration that mirrors your signature taste. Whether an intimate 50th birthday dinner beneath fairy lights or a lavish themed villa takeover, we weave personalized storytelling into every floral detail, culinary course, and musical interlude.',
    highlights: ['Personalized Scenography & Custom Furniture', 'Michelin-Caliber Private Chef Coordination', 'Curated Acoustic & Jazz Ensembles', 'Discreet Concierge & Security Teams'],
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
    typicalScale: '50 to 300 Guests',
    recommendedVenues: ['Heritage Havelis & Private Estate Farmhouses', 'The Lodhi New Delhi', 'ITC Maurya Rooftop Pavilion', 'Bespoke Private Residences']
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'port-1',
    title: 'The Royal Nizam Mandapam',
    category: 'weddings',
    filterTag: 'weddings',
    location: 'Chanakyapuri, New Delhi',
    venueName: 'The Leela Palace',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
    caption: 'A 24-foot mirrored mandap wrapped in 15,000 tuberoses and cascading champagne crystal droplets.',
    attendees: '850 Guests',
    highlights: ['Custom Gold Filigree Mandap', 'Sufi Symphony Orchestra', 'Couture Dining Pavilion']
  },
  {
    id: 'port-2',
    title: 'Illuminated Celestial Sangeet',
    category: 'pre-weddings',
    filterTag: 'weddings',
    location: 'NH-8, Gurugram',
    venueName: 'ITC Grand Bharat',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    caption: 'Kinetic light arrays and stadium-grade acoustics for an unforgettable Bollywood musical night.',
    attendees: '600 Guests',
    highlights: ['Interactive LED Stage', 'Pyrotechnic Cold Sparks', 'Artist Lineup Logistics']
  },
  {
    id: 'port-3',
    title: 'Global Tech Leadership Conclave',
    category: 'corporate',
    filterTag: 'corporate',
    location: 'Aerocity, New Delhi',
    venueName: 'Pullman Aerocity Grand Ballroom',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
    caption: 'Ultra-wide 40-meter curved LED canvas featuring live multi-city telecast and dynamic keynote lighting.',
    attendees: '1,400 CXO Delegates',
    highlights: ['4K Seamless Matrix Switching', 'Acoustic Sound Isolation', 'Executive VIP Lounge']
  },
  {
    id: 'port-4',
    title: 'Haute Horlogerie Timepiece Reveal',
    category: 'launches',
    filterTag: 'brand',
    location: 'Golf Course Road, Gurugram',
    venueName: 'The Camellias Club',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    caption: 'A darkened midnight-themed showcase with floating levitation displays and private sommelier pairing.',
    attendees: '120 HNW Guests',
    highlights: ['Atmospheric Mist & Spotlighting', 'Precision Glass Showcases', 'White-Glove Hospitality']
  },
  {
    id: 'port-5',
    title: 'International Fintech Expo & Summit',
    category: 'conferences',
    filterTag: 'corporate',
    location: 'Dwarka, New Delhi',
    venueName: 'Yashobhoomi (IICC)',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'wide',
    caption: 'Three concurrent presentation stages with synchronized wireless silent audio transmitters and touchless registration.',
    attendees: '3,800 Attendees',
    highlights: ['3 Parallel Theaters', 'Automated Badge Scanners', 'Exhibition Truss Systems']
  },
  {
    id: 'port-6',
    title: 'The Golden Jubilee Gala',
    category: 'celebrations',
    filterTag: 'celebrations',
    location: 'Chattarpur, New Delhi',
    venueName: 'Private Royal Farmstead',
    imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'portrait',
    caption: 'A golden starlight canopy draped over century-old banyan trees with acoustic Spanish guitars and vintage champagne service.',
    attendees: '180 Close Family & Friends',
    highlights: ['Bespoke Velvet Lounges', 'Tuscan Floral Installations', 'Live Hand-Rolled Cigars & Jazz']
  },
  {
    id: 'port-7',
    title: 'Luxury EV Global Launch Experience',
    category: 'launches',
    filterTag: 'brand',
    location: 'Greater Noida Expressway',
    venueName: 'Buddh International Circuit VIP Club',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    aspectRatio: 'landscape',
    caption: 'Synchronized laser choreography and high-speed robotic turntable reveal on the racetrack paddock.',
    attendees: '450 Media & Dealers',
    highlights: ['Rotary 360 Turntable', 'Spatial 7.1 Surround Arena', 'Digital Media Kit Kiosks']
  },
  {
    id: 'port-8',
    title: 'Sunset Marigold Mehendi Soiree',
    category: 'pre-weddings',
    filterTag: 'weddings',
    location: 'Sohna Road, Gurugram',
    venueName: 'Aravalli Heritage Retreat',
    imageUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80',
    aspectRatio: 'square',
    caption: 'Vibrant marigold arches, Rajasthani folk fusion ensembles, and shaded cabanas designed for afternoon comfort.',
    attendees: '320 Guests',
    highlights: ['Fresh Flower Mandalas', 'Live Clay Pottery Counters', 'Artisan Chaat Street']
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    number: '01',
    phase: 'DISCOVER',
    title: 'Vision & Requirements',
    description: 'We listen deeply to your expectations, guest demographic, aesthetic aspirations, preferred Delhi NCR locations, and operational parameters.',
    deliverables: ['Event Scope Analysis', 'Date & Venue Feasibility Study', 'Initial Creative & Budget Framework']
  },
  {
    number: '02',
    phase: 'DESIGN',
    title: 'Concept & Scenography',
    description: 'Our spatial designers translate your vision into 3D walkthroughs, moodboards, color stories, floral palettes, and acoustic designs.',
    deliverables: ['3D Spatial Venue Renders', 'Custom Floral & Lighting Blueprint', 'Artist & Entertainment Curation']
  },
  {
    number: '03',
    phase: 'PLAN',
    title: 'Logistics & Coordination',
    description: 'Every vendor contract, security clearance, hospitality roster, and minute-by-minute run-of-show schedule is mapped down to the second.',
    deliverables: ['Master Production Timeline', 'Vendor Contracting & Permitting', 'Hospitality & VIP Protocol Schedules']
  },
  {
    number: '04',
    phase: 'EXECUTE',
    title: 'Flawless On-Site Production',
    description: 'Our senior directors take command on the ground. Rigging, sound checks, artist hospitality, and cue execution proceed with seamless discretion.',
    deliverables: ['On-Site Technical Production', 'White-Glove Guest Management', 'Instant Live Problem-Solving']
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    title: 'Creative Excellence',
    description: 'Distinctive event concepts, bespoke scenography, and carefully considered visual experiences that leave an indelible signature.',
    iconName: 'Sparkles',
    badge: 'Couture Vision'
  },
  {
    title: 'Professional Coordination',
    description: 'Meticulously structured planning, vendor contracts, technical run-of-show schedules, and uncompromising logistic oversight.',
    iconName: 'ShieldCheck',
    badge: 'Precision Planning'
  },
  {
    title: 'Seamless Execution',
    description: 'Deep familiarity with premier Delhi NCR venues, municipal protocols, high-profile security clearances, and on-site contingency management.',
    iconName: 'Sliders',
    badge: 'Flawless Timing'
  },
  {
    title: 'Memorable Experiences',
    description: 'A relentless emphasis on warmth, sophistication, and emotional resonance — crafting celebrations that guests remember for decades.',
    iconName: 'Award',
    badge: 'Enduring Impact'
  }
];

export const NCR_LOCATIONS: NCRLocation[] = [
  {
    city: 'Delhi',
    headline: 'Capital Heritage & Imperial Luxury',
    tagline: 'Palatial Hotels & Historic Diplomatic Enclaves',
    description: 'Specializing in grand gala productions across Lutyens Delhi, Chanakyapuri, South Delhi luxury farmhouses, and historic heritage estates.',
    popularVenues: ['The Leela Palace Chanakyapuri', 'Taj Palace New Delhi', 'ITC Maurya', 'Chattarpur Heritage Farmsteads'],
    serviceFocus: ['Royal Destination Weddings', 'Diplomatic & State Galas', 'Aerocity Leadership Summits']
  },
  {
    city: 'Gurugram',
    headline: 'Corporate Powerhouses & Contemporary Luxury',
    tagline: 'Aravalli Retreats & Ultra-Modern Venues',
    description: 'Pioneering cutting-edge technology productions for Fortune 500 summits in CyberHub and intimate luxury weddings in scenic Aravalli retreats.',
    popularVenues: ['ITC Grand Bharat', 'The Oberoi Gurgaon', 'The Camellias Club', 'Grand Hyatt Gurgaon'],
    serviceFocus: ['Global CXO Conferences', 'Ultra-Luxury Sangeet Galas', 'Automotive & Tech Launches']
  },
  {
    city: 'Noida & Greater Noida',
    headline: 'Expansive Trade Hubs & Golf Estates',
    tagline: 'Megascale Exhibitions & Resort Celebrations',
    description: 'Direct access to national exhibition facilities and sprawling golf resorts suited for high-capacity multi-day conventions.',
    popularVenues: ['India Expo Centre & Mart', 'Jaypee Greens Golf & Spa Resort', 'Radisson Blu MBD Noida'],
    serviceFocus: ['Industrial & Trade Pavilions', 'Multitrack Expos', 'Resort Lawn Weddings']
  },
  {
    city: 'Faridabad & NCR Farm Belts',
    headline: 'Private Country Estates & Farmhouses',
    tagline: 'Secluded Splendor & Expansive Lawns',
    description: 'Tailored for private estate transformations where open skies, tranquil water bodies, and custom temporary pavilion structures reign supreme.',
    popularVenues: ['Surajkund Heritage Properties', 'Grand Private Estates', 'Aravalli Foothill Country Homes'],
    serviceFocus: ['Bespoke Farmhouse Takeovers', 'Daytime Sunlit Celebrations', 'Open-Air Acoustic Concerts']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    clientName: 'Sunil & Renu Mehra',
    companyOrRole: 'Bride & Groom’s Parents',
    eventType: '3-Day Royal Wedding & Sangeet',
    location: 'Taj Palace, New Delhi',
    quote: 'From our daughter’s varmala setup under 20-foot floral canopies to managing over 900 guests from across three continents, Midnight Luxe delivered pure poetry. Their calm on-site composure made us feel like guests at our own wedding.',
    isVerified: true,
    date: 'February 2025'
  },
  {
    id: 'test-2',
    clientName: 'Vikramaditya Singhania',
    companyOrRole: 'Managing Director, Apex FinTech Global',
    eventType: 'Annual Leadership Summit & Gala',
    location: 'Pullman Aerocity, New Delhi',
    quote: 'The audiovisual stagecraft and curved LED integration were flawless. In corporate events, zero margin for error is expected, and their technical production team delivered with military precision.',
    isVerified: true,
    date: 'November 2024'
  },
  {
    id: 'test-3',
    clientName: 'Aarushi & Kabir Tandon',
    companyOrRole: 'Couple',
    eventType: 'Aravalli Sangeet & Reception',
    location: 'ITC Grand Bharat, Gurugram',
    quote: 'They transformed the amphitheater into a celestial wonderland. Our guests are still raving about the kinetic lighting and how seamlessly each transition between rituals and entertainment took place.',
    isVerified: true,
    date: 'January 2025'
  }
];

export const STATS_DATA = [
  { label: 'Events Delivered', value: 340, suffix: '+', note: 'Demonstration metric' },
  { label: 'Years of Experience', value: 14, suffix: '+', note: 'Production heritage' },
  { label: 'NCR Cities Covered', value: 5, suffix: ' Regions', note: 'Delhi, Gurugram, Noida, etc.' },
  { label: 'Curated Vendor Network', value: 120, suffix: '+', note: 'Acoustics, florals, staging' },
];

export const DETAILED_PROCESS_PHASES: DetailedProcessPhase[] = [
  {
    id: 'phase-1',
    number: '01',
    phase: 'INTAKE & SCOPE',
    title: 'Creative Intake & Feasibility',
    subtitle: 'Decoding your expectations, guest flow, and architectural parameters.',
    duration: 'Weeks 1 – 2',
    description: 'Every extraordinary production begins with active listening. We dive deep into your creative vision, guest demographics, VIP protocols, spatial needs across Delhi NCR venues, and investment frameworks to establish an airtight production foundation.',
    keyDeliverables: [
      'Architectural Feasibility & Venue Sightline Audit',
      'Delhi NCR Regulatory & Sound Permitting Roadmap',
      'Line-Item Financial Allocation Model & Contingency Plan',
      'Preliminary Production Charter & Milestone Calendar'
    ],
    workflowItems: [
      {
        title: 'Creative Discovery Session',
        desc: 'One-on-one consultation with our Senior Creative Director to translate aesthetic aspirations into tangible design briefs.'
      },
      {
        title: 'Technical Site Inspection',
        desc: 'Laser measurements, electrical load verification, acoustic baseline checks, and vehicular loading dock access analysis.'
      },
      {
        title: 'Risk & Permitting Matrix',
        desc: 'Direct liaison with local Delhi NCR authorities for decibel compliance, fire safety, and VIP security logistics.'
      }
    ],
    milestoneQuote: 'True luxury is born when creative ambition is anchored in structural certainty.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    statBadge: { value: '100%', label: 'Feasibility Certainty' }
  },
  {
    id: 'phase-2',
    number: '02',
    phase: 'SCENOGRAPHY & 3D',
    title: 'Spatial Scenography & 3D Modeling',
    subtitle: 'Step inside your event before a single truss is raised.',
    duration: 'Weeks 3 – 5',
    description: 'Our in-house 3D design team constructs millimetrically accurate digital twins of your event spaces. You will preview dynamic kinetic lighting cues, custom floral canopies, bespoke stage geometry, and patron sightlines in photorealistic detail.',
    keyDeliverables: [
      'Photorealistic 4K 3D Walkthrough Renders',
      'Custom Stage, Mandap & Scenic Truss Blueprint',
      'DMX Architectural Lighting Plot & Color Grading Palette',
      'Tactile Material Boards: Fabrics, Glassware, Florals & Finishes'
    ],
    workflowItems: [
      {
        title: '3D Spatial Modeling',
        desc: 'Simulating seating clusters, camera angles, sightline clearances, and stage reveals down to the centimeter.'
      },
      {
        title: 'Physical Sensory Sampling',
        desc: 'Hands-on presentation of luxury velvet textures, charger plate weights, crystal stems, and live botanical arrangements.'
      },
      {
        title: 'Acoustic Sound Mapping',
        desc: 'Directional speaker plotting to ensure crisp keynote clarity and immersive dance floors with zero sound spillage.'
      }
    ],
    milestoneQuote: 'What you experience in our 3D visualization is identical to the reality on event evening.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    statBadge: { value: '1:1', label: 'Render-to-Reality Match' }
  },
  {
    id: 'phase-3',
    number: '03',
    phase: 'CURATION & ENGINEERING',
    title: 'Vendor Curation & Technical Orchestration',
    subtitle: 'Assembling master artisans, Michelin-level catering, and specialized crews.',
    duration: 'Weeks 6 – 9',
    description: 'We orchestrate over 120 vetted elite partners across culinary masters, headline entertainment, audiovisual engineers, and white-glove hospitality specialists. We bind every contributor into a unified, synchronized production ecosystem.',
    keyDeliverables: [
      'Master Technical Production & Rigging Rider',
      'Bespoke Culinary Menus & Sommelier Wine Pairings',
      'Headline Artist Hospitality & Technical Rider Fulfillment',
      'Minute-by-Minute Run-of-Show Master Timetable'
    ],
    workflowItems: [
      {
        title: 'Curated Tasting Sessions',
        desc: 'Private multi-course tastings with executive master chefs to tailor flavors, dietary accommodations, and theatrical service.'
      },
      {
        title: 'Talent & Artist Logistics',
        desc: 'Direct rider negotiations, green-room specifications, transit coordination, and backstage security protocols.'
      },
      {
        title: 'Technical Integration Briefing',
        desc: 'Synchronizing lighting directors, audio engineers, video switchers, and pyrotechnic teams under unified show control.'
      }
    ],
    milestoneQuote: 'A master ensemble is only as magnificent as the invisible conductor keeping every beat in flawless time.',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
    statBadge: { value: '120+', label: 'Vetted Partners' }
  },
  {
    id: 'phase-4',
    number: '04',
    phase: 'LIVE SHOW COMMAND',
    title: 'On-Site Production & Show Command',
    subtitle: 'Military logistical rigor executed with effortless white-glove grace.',
    duration: 'Production Week & Event Day',
    description: 'From the initial 48-hour structural load-in through the final encore, our senior Command Team takes charge on site. We manage load-in safety, cue-to-cue rehearsals, VIP reception, and stage transitions with calm, discreet authority.',
    keyDeliverables: [
      'Centralized Production Control Room (PCR)',
      'Dedicated Stage Manager & Show Cue Director',
      'Discreet Headset-Linked Backstage Crew',
      'Real-Time Contingency & Rapid Protocol Management'
    ],
    workflowItems: [
      {
        title: 'Structural Load-In & Verification',
        desc: 'Rigging certification, twin generator parallel load testing, and LED tile color calibration before rehearsals.'
      },
      {
        title: 'Full Cue-to-Cue Rehearsals',
        desc: 'Complete dry runs of walk-ins, awards reveals, musical transitions, speech teleprompters, and special effects.'
      },
      {
        title: 'White-Glove Guest Management',
        desc: 'Chauffeured arrivals, seamless touchless registration, personal escort for VIPs, and concierge cloakroom care.'
      }
    ],
    milestoneQuote: 'When production is truly flawless, your guests perceive only the magic — never the machinery.',
    imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
    statBadge: { value: '0.5s', label: 'Cue Execution Precision' }
  },
  {
    id: 'phase-5',
    number: '05',
    phase: 'LEGACY & WRAP',
    title: 'Wrap, Reconciliation & Media Mastering',
    subtitle: 'Protecting your investment and preserving your memories for a lifetime.',
    duration: 'Post-Event Weeks 1 – 2',
    description: 'Our commitment endures well after the last guest departs. We supervise rapid, damage-free venue teardown, conduct line-item financial reconciliations with zero surprises, and deliver mastered cinematic 4K film and heirloom photo books.',
    keyDeliverables: [
      'Comprehensive Financial Audit & Vendor Settlement Report',
      'Mastered 4K Color-Graded Cinematic Film & Soundscape',
      'Curated High-Resolution Editorial Photo Library',
      'Executive Post-Event Debrief & Retrospective'
    ],
    workflowItems: [
      {
        title: 'Immaculate Venue Handover',
        desc: 'Immediate teardown with property management sign-off to ensure 100% security deposit recovery without dispute.'
      },
      {
        title: 'Cinematic Post-Production',
        desc: 'Colorists and sound designers edit your milestone film to high-fidelity broadcast standards.'
      },
      {
        title: 'Permanent Vault Access',
        desc: 'High-speed cloud gallery with password-protected distribution links for family, board members, or delegates.'
      }
    ],
    milestoneQuote: 'We do not simply produce events; we engineer legacy moments that outlive the evening.',
    imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    statBadge: { value: '48h', label: 'First Media Preview' }
  }
];

export const RUN_OF_SHOW_TIMELINE: RunOfShowItem[] = [
  {
    time: '08:00',
    period: 'AM',
    title: 'Site Ingress & Heavy Rigging',
    description: 'Ground rigging teams secure high-capacity aluminum box trusses, secondary power generators, and acoustic insulation buffers.',
    department: 'Technical & Engineering'
  },
  {
    time: '12:30',
    period: 'PM',
    title: 'Floral Installations & Scenography',
    description: 'Climate-controlled floral delivery, table dressing, bespoke centerpiece placement, and custom carpet laydowns.',
    department: 'Decor & Styling'
  },
  {
    time: '04:00',
    period: 'PM',
    title: 'Full Audiovisual Dress Rehearsal',
    description: 'Stage lighting cues, wireless microphone frequency sweeps, LED wall media synchronization, and artist soundchecks.',
    department: 'Show Direction'
  },
  {
    time: '06:30',
    period: 'PM',
    title: 'Red Carpet Arrivals & Welcome Soiree',
    description: 'White-glove valet concierge, chilled champagne service, acoustic background ensembles, and personalized guest greeting.',
    department: 'Hospitality & Protocol'
  },
  {
    time: '08:30',
    period: 'PM',
    title: 'Main Show / Milestone Ceremony',
    description: 'Dramatically choreographed lighting transition, key speeches, award reveal or sacred pheras, and multi-camera live telecast.',
    department: 'Live Production'
  },
  {
    time: '11:00',
    period: 'PM',
    title: 'Celebration Soiree & Gastronomy',
    description: 'Live headline musical performance, after-hours speakeasy lounge activation, and artisanal late-night dining.',
    department: 'Entertainment & Catering'
  },
  {
    time: '02:30',
    period: 'AM',
    title: 'Guest Egress & Controlled Strike',
    description: 'Private chauffeur dispatch, discreet floral repurposing, and silent stage load-out with complete venue protection.',
    department: 'Operations & Security'
  }
];
