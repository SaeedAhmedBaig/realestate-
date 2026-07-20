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
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/* Services — derived from the scope of work across projects          */
/* ------------------------------------------------------------------ */

export const SERVICES: { title: string; icon: LucideIcon; desc: string }[] = [
  {
    title: "Civil & Structural",
    icon: Building2,
    desc: "Excavation, foundations, RCC columns, beams and masonry executed to specification.",
  },
  {
    title: "Architectural Finishing",
    icon: Hammer,
    desc: "Plaster, tiling, marble, imported doors, kitchens, wardrobes and premium paintwork.",
  },
  {
    title: "MEP & Electrical",
    icon: Zap,
    desc: "Plumbing, wiring, HVAC, CCTV, fire detection, lifts and complete building services.",
  },
  {
    title: "Infrastructure",
    icon: TrafficCone,
    desc: "Roads, land leveling, sector development, earthworks and grid substation works.",
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
    id: "AD-P1011",
    title: "Bahria Precinct 10 & 11",
    client: "Bahria Town",
    location: "Karachi",
    type: "200 Sq.Yd",
    scope: "200+ Villas",
    value: "PKR 414.9M",
    image: U("photo-1600585154340-be6161a56a0c"),
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
