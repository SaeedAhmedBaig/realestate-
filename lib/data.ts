import {
  Home,
  HandHeart,
  MapPin,
  Layers,
  Building2,
  Hammer,
  Globe2,
  ShieldCheck,
  Award,
  Gem,
  Search as SearchIcon,
  type LucideIcon,
} from "lucide-react";

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Property", href: "#properties" },
  { label: "Blogs", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

export const SERVICES: {
  title: string;
  icon: LucideIcon;
  desc: string;
}[] = [
  {
    title: "Home inspections",
    icon: Home,
    desc: "White-glove structural and design audits before you ever sign.",
  },
  {
    title: "Property insurance",
    icon: HandHeart,
    desc: "Tailored coverage that protects your investment for generations.",
  },
  {
    title: "Best location",
    icon: MapPin,
    desc: "Access to addresses in the world's most coveted neighbourhoods.",
  },
  {
    title: "Lots & land",
    icon: Layers,
    desc: "Prime parcels ready for your architect's boldest vision.",
  },
];

export const HELP_POINTS = [
  "Property management",
  "Construction Services",
  "Online Services",
];

export const PROPERTIES = [
  {
    id: "AD-4021",
    title: "Azure Cliff Residence",
    location: "New York, USA",
    price: "$5,200,000",
    beds: 8,
    size: "10 × 10",
    rooms: 6,
    image: U("photo-1512917774080-9991f1c4c750"),
    tag: "Featured",
  },
  {
    id: "AD-4022",
    title: "The Cedar Pavilion",
    location: "New York, USA",
    price: "$5,200,000",
    beds: 8,
    size: "10 × 10",
    rooms: 6,
    image: U("photo-1613490493576-7fde63acd811"),
    tag: "New",
  },
  {
    id: "AD-4023",
    title: "Onyx Garden Villa",
    location: "New York, USA",
    price: "$5,200,000",
    beds: 8,
    size: "10 × 10",
    rooms: 6,
    image: U("photo-1600585154340-be6161a56a0c"),
    tag: "Exclusive",
  },
  {
    id: "AD-4024",
    title: "Willow Lane Estate",
    location: "New York, USA",
    price: "$5,200,000",
    beds: 8,
    size: "10 × 10",
    rooms: 6,
    image: U("photo-1600596542815-ffad4c1539a9"),
    tag: "Featured",
  },
];

export const BENEFITS = [
  "Trusted Developer",
  "Outstanding properties",
  "A safe and trustworthy",
  "Buy with Confidence",
  "Market Leading research",
];

export const WHY_POINTS: { title: string; icon: LucideIcon }[] = [
  { title: "Trusted Developer", icon: ShieldCheck },
  { title: "Outstanding properties", icon: Building2 },
  { title: "A safe and trustworthy", icon: Award },
  { title: "Buy with Confidence", icon: Gem },
];

export const HELP_ICONS: { title: string; icon: LucideIcon }[] = [
  { title: "Property management", icon: Building2 },
  { title: "Construction Services", icon: Hammer },
  { title: "Online Services", icon: Globe2 },
];

export const BLOG_POSTS = [
  {
    title: "Designing kitchens that feel like heirlooms",
    category: "Interiors",
    date: "12 Apr 2026",
    image: U("photo-1556909212-d5b604d0c90d"),
    size: "tall",
  },
  {
    title: "The quiet luxury of a well-lit living room",
    category: "Living",
    date: "08 Apr 2026",
    image: U("photo-1618221195710-dd6b41faaea6"),
    size: "wide",
  },
  {
    title: "Why façade matters more than square footage",
    category: "Architecture",
    date: "02 Apr 2026",
    image: U("photo-1600607687939-ce8a6c25118c"),
    size: "tall",
  },
  {
    title: "Ceilings that turn a room into a statement",
    category: "Design",
    date: "28 Mar 2026",
    image: U("photo-1600566753086-00f18fb6b3ea"),
    size: "wide",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ariyana Aly",
    role: "Top Customer",
    date: "02-04-2022",
    quote:
      "Asif Developer found us a home we didn't think existed. The process felt less like a transaction and more like being introduced to a lifestyle.",
    avatar: U("photo-1544005313-94ddf0286df2", 200),
  },
  {
    name: "Marcus Reed",
    role: "Investor",
    date: "18-05-2022",
    quote:
      "Every detail was handled with a level of care I've never seen in real estate. Discreet, precise, and genuinely luxurious from first call to keys.",
    avatar: U("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    name: "Sofia Laurent",
    role: "Homeowner",
    date: "09-06-2022",
    quote:
      "From the private viewings to the final signature, the team made buying our dream house feel effortless and deeply personal.",
    avatar: U("photo-1534528741775-53994a69daeb", 200),
  },
];

export const STATS = [
  { value: "1.2K+", label: "Homes delivered" },
  { value: "100+", label: "Expert team" },
  { value: "39.9K", label: "Happy reviews" },
  { value: "24", label: "Cities served" },
];

export const PROPERTY_TYPES = [
  "Villa",
  "Penthouse",
  "Apartment",
  "Townhouse",
  "Estate",
  "Land",
];

export { SearchIcon };
