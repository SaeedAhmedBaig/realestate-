import {
  Building2,
  Hammer,
  Zap,
  TrafficCone,
  HardHat,
  Ruler,
  ShieldCheck,
  Award,
  Clock,
  Gem,
  Wrench,
  Layers,
  type LucideIcon,
} from "lucide-react";

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/* ------------------------------------------------------------------ */
/* Company identity — from the official company profile               */
/* ------------------------------------------------------------------ */

export const COMPANY = {
  name: "AASIF DEVELOPERS",
  legalName: "AD Aasif Developers (Private) Limited",
  tagline: "Vision, Creativity, Craftsmanship",
  since: "2016",
  ceo: "Aasif Malik",
  domain: "aasifdevelopers.com",
  email: "info@aasifdevelopers.com",
  phones: ["+92 42 37825960", "+92 300 8522242", "+92 321 9423433"],
  address:
    "149 Umer Commercial, Second Floor, Suite No. 2, Sector B, Bahria Town, Lahore.",
  social: {
    instagram: "https://instagram.com/aasif.developers",
    facebook: "https://facebook.com/aasif.developers",
    website: "https://aasifdevelopers.com",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

/* ------------------------------------------------------------------ */
/* Services — derived from the scope of work across projects          */
/* ------------------------------------------------------------------ */

export const SERVICES: {
  slug: string;
  title: string;
  icon: LucideIcon;
  image: string;
  desc: string;
  scope: string[];
}[] = [
  {
    slug: "civil-structural",
    title: "Civil & Structural",
    icon: Building2,
    image: U("photo-1621905251189-08b45d6a269e"),
    desc: "Excavation, foundations, RCC columns, beams and masonry executed to specification.",
    scope: [
      "Excavation, termite proofing & granular filling",
      "PCC, steel reinforcement & RCC — columns, beams, lintels, water tanks",
      "Block masonry, plaster works & PCC flooring",
      "Waterproofing, backfilling & roof insulation",
      "Boundary walls, staircases & structural earthworks",
    ],
  },
  {
    slug: "architectural-finishing",
    title: "Architectural Finishing",
    icon: Hammer,
    image: U("photo-1618221195710-dd6b41faaea6"),
    desc: "Plaster, tiling, marble, imported doors, kitchens, wardrobes and premium paintwork.",
    scope: [
      "Tiles, granite & marble supply and installation",
      "MDF imported doors, kitchens & wardrobes with hardware",
      "Suspended & gypsum ceilings at design height",
      "Aluminium windows & building façade",
      "Skimming and oil-emulsion paint finishing",
    ],
  },
  {
    slug: "mep-electrical",
    title: "MEP & Electrical",
    icon: Zap,
    image: U("photo-1473341304170-971dccb5ac1e"),
    desc: "Plumbing, wiring, HVAC, CCTV, fire detection, lifts and complete building services.",
    scope: [
      "UPVC & PPRC plumbing and sanitary works to layout",
      "Wiring, distribution boards, main & earthing cables",
      "HVAC for controlled space temperature",
      "CCTV, fire & smoke detection, emergency lighting",
      "Lifts, access control & video door-entry systems",
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure",
    icon: TrafficCone,
    image: U("photo-1541888946425-d81bb19240f5"),
    desc: "Roads, land leveling, sector development, earthworks and grid substation works.",
    scope: [
      "Road construction, land leveling & sector development",
      "Topographic survey, backfill spreading & compaction",
      "Grid substation civil works (500/220/132 Kv)",
      "Stone pitching & compaction testing above 95%",
      "Turnkey site camps, boundary walls & security towers",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* About / mission                                                    */
/* ------------------------------------------------------------------ */

export const ABOUT_POINTS: { title: string; icon: LucideIcon }[] = [
  { title: "Structural & Civil Works", icon: HardHat },
  { title: "Turnkey Construction", icon: Wrench },
  { title: "Finishing & Fit-out", icon: Layers },
];

/* ------------------------------------------------------------------ */
/* Projects — real projects from the profile                          */
/* ------------------------------------------------------------------ */

export const PROJECTS = [
  {
    id: "AD-TWR-D",
    title: "Bahria Heights",
    client: "Bahria Town",
    location: "Karachi",
    type: "G+9 Tower",
    scope: "Finishing Works",
    value: "PKR 572.6M",
    image: U("photo-1486406146926-c627a92ad1ab"),
    tag: "Tower",
  },
  {
    id: "AD-QIV",
    title: "Quaid & Iqbal Villas",
    client: "Bahria Town",
    location: "Precinct 2, Karachi",
    type: "150 Sq.Yd",
    scope: "58 Villas",
    value: "PKR 150.0M",
    image: U("photo-1512917774080-9991f1c4c750"),
    tag: "Villas",
  },
  {
    id: "AD-P10A",
    title: "Bahria Villas — Precinct 10A",
    client: "Bahria Town",
    location: "Karachi",
    type: "200 Sq.Yd",
    scope: "62 Villas",
    value: "PKR 193.4M",
    image: U("photo-1600585154340-be6161a56a0c"),
    tag: "Villas",
  },
  {
    id: "AD-P31",
    title: "Bahria Villas — Precinct 31",
    client: "Bahria Town",
    location: "Karachi",
    type: "200 Sq.Yd",
    scope: "133 Villas",
    value: "PKR 414.9M",
    image: U("photo-1600607687939-ce8a6c25118c"),
    tag: "Villas",
  },
  {
    id: "AD-MSV",
    title: "Metro Supreme Villas",
    client: "New Metro City",
    location: "Gujjar Khan",
    type: "5 & 8 Marla",
    scope: "Turnkey Villas",
    value: "PKR 215.6M",
    image: U("photo-1613490493576-7fde63acd811"),
    tag: "Villas",
  },
  {
    id: "AD-ESV",
    title: "Eiffel Supreme Villas",
    client: "New Metro City",
    location: "Sara-e-Alamgir",
    type: "6 Marla",
    scope: "Turnkey Villas",
    value: "PKR 112.9M",
    image: U("photo-1600596542815-ffad4c1539a9"),
    tag: "Villas",
  },
  {
    id: "AD-LNS",
    title: "Lahore North Substation",
    client: "China Electric Power",
    location: "Sheikhupura",
    type: "500/220/132 Kv",
    scope: "Earthworks & Camp",
    value: "PKR 261.3M",
    image: U("photo-1473341304170-971dccb5ac1e"),
    tag: "Infrastructure",
  },
  {
    id: "AD-TCO",
    title: "Turnkey Camp Office",
    client: "China Electric Power",
    location: "Sheikhupura",
    type: "Turnkey",
    scope: "Camp & Facilities",
    value: "PKR 61.2M",
    image: U("photo-1541888946425-d81bb19240f5"),
    tag: "Infrastructure",
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us + figures                                            */
/* ------------------------------------------------------------------ */

export const WHY_POINTS: { title: string; icon: LucideIcon }[] = [
  { title: "Trusted since 2016", icon: ShieldCheck },
  { title: "Licensed engineers & staff", icon: Award },
  { title: "On-time, on-budget delivery", icon: Clock },
  { title: "Superior craftsmanship", icon: Gem },
];

/* Hero trust figures (3) */
export const HERO_STATS = [
  { value: "8+", label: "Years building" },
  { value: "450+", label: "Villas delivered" },
  { value: "500+", label: "Skilled workforce" },
];

/* Benefits stat band (4) */
export const STATS = [
  { value: "8+", label: "Years experience" },
  { value: "PKR 2.5B+", label: "Projects delivered" },
  { value: "450+", label: "Villas built" },
  { value: "500+", label: "Workforce" },
];

/* ------------------------------------------------------------------ */
/* Capability gallery (repurposed "blog" masonry)                     */
/* ------------------------------------------------------------------ */

export const GALLERY = [
  {
    title: "RCC & structural works",
    category: "Civil",
    place: "Foundations to slab",
    image: U("photo-1621905251189-08b45d6a269e"),
    size: "tall",
  },
  {
    title: "Premium finishing & interiors",
    category: "Finishing",
    place: "Villas & towers",
    image: U("photo-1618221195710-dd6b41faaea6"),
    size: "wide",
  },
  {
    title: "Grid substation & earthworks",
    category: "Infrastructure",
    place: "Sheikhupura",
    image: U("photo-1466611653911-95081537e5b7"),
    size: "tall",
  },
  {
    title: "Turnkey villa construction",
    category: "Villas",
    place: "Bahria Town & New Metro City",
    image: U("photo-1600607687939-ce8a6c25118c"),
    size: "wide",
  },
];

/* ------------------------------------------------------------------ */
/* Our clients — factual, from the profile                            */
/* ------------------------------------------------------------------ */

export const CLIENTS = [
  {
    name: "Bahria Town",
    scope:
      "Hundreds of villas across Precincts 2, 10, 11 & 31 and the G+9 Bahria Heights tower in Karachi.",
    value: "PKR 2.3B+ delivered",
    tag: "Villas & Towers",
    image: U("photo-1512917774080-9991f1c4c750", 400),
  },
  {
    name: "New Metro City",
    scope:
      "Metro Supreme and Eiffel Supreme villa communities at Gujjar Khan and Sara-e-Alamgir.",
    value: "PKR 330M+ delivered",
    tag: "Villa Communities",
    image: U("photo-1613490493576-7fde63acd811", 400),
  },
  {
    name: "China Electric Power",
    scope:
      "Lahore North 500/220/132 Kv substation earthworks and turnkey site camp in Sheikhupura.",
    value: "PKR 322M+ delivered",
    tag: "Infrastructure",
    image: U("photo-1473341304170-971dccb5ac1e", 400),
  },
];

/* ------------------------------------------------------------------ */
/* About page — CEO message, mission, values                          */
/* ------------------------------------------------------------------ */

export const CEO_MESSAGE = [
  "Since 2016, Aasif Developers has become competitive in the field of construction. Our operation is organised and well delivered, with passion and commitment.",
  "Our initial work concentrated on civil works — structural and masonry — which shaped us into specialists. To widen our scope we ventured into architectural finishing of buildings and villas, roads, land leveling and sector development.",
  "A workforce of licensed engineers, professional officers and skilled workers, combined with technical expertise, produces distinction in the construction industry.",
];

export const MISSION =
  "Our mission is to exceed the expectations of our clients by delivering high-quality construction projects — built on time, on budget, and to the highest standards of safety and sustainability. Through excellence and a relentless pursuit of customer satisfaction, we aim to be the construction partner of choice.";

export const VALUES = [
  "Integrity as the basis of every relationship",
  "Focus on the consumer",
  "Respect for people",
  "Developing our people",
  "High performance, always",
  "Quality products, excellent process",
  "Constant innovative spirit",
  "Sustainable growth",
  "Global vision, local agility",
  "Commitment to diversity",
];

/* ------------------------------------------------------------------ */
/* Get-a-quote form options                                           */
/* ------------------------------------------------------------------ */

export const QUOTE_PROJECT_TYPES = [
  "Villa Construction",
  "High-rise / Tower",
  "Commercial Building",
  "Infrastructure / Civil Works",
  "Renovation / Fit-out",
  "Other",
];

export const QUOTE_BUDGETS = [
  "Under PKR 10M",
  "PKR 10M – 50M",
  "PKR 50M – 150M",
  "PKR 150M – 500M",
  "Above PKR 500M",
  "Not sure yet",
];
