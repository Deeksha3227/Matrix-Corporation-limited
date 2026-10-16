export interface Product {
  id: string;
  category: string;
  type: string;
  name: string;
  price?: number;
  mrp?: number;
  reviewsCount: string;
  rating: number;
  image: string;
  fallbackImage: string;
  tag: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
  outOfStock?: boolean;
  sku?: string;
  flatCashback?: string;
  emiOptionCustom?: string;
  offPercentCustom?: string;
  subtitle?: string;
}

interface TriplyVariant {
  sku: string;
  size: string;
  dimension?: string;
  caseLot?: string;
}

const createTriplyProducts = (
  name: string,
  type: string,
  image: string,
  variants: TriplyVariant[],
  includesLid = false
): Product[] => variants.map(({ sku, size, dimension, caseLot }) => ({
  id: `solara-${sku.toLowerCase()}-${size.toLowerCase().replace(/\s+/g, "-")}`,
  category: "solara",
  type,
  name: `${name} (${size})`,
  reviewsCount: "",
  rating: 0,
  image: `solara/${image}`,
  fallbackImage: `solara/${image}`,
  tag: "SOLARA",
  description: `${name}, made with triply stainless steel for everyday cooking.${includesLid ? " Includes a stainless steel lid." : ""}`,
  features: [
    "Triply stainless steel construction",
    ...(includesLid ? ["Includes stainless steel lid"] : [])
  ],
  specs: {
    Size: size,
    ...(dimension ? { "Dimension (mm)": dimension } : {}),
    ...(caseLot ? { "Case lot": caseLot } : {})
  },
  sku
}));

interface DrinkwareVariant {
  sku: string;
  color: string;
  image: string;
}

const createDrinkwareProducts = (
  capacity: "650ml" | "1000ml",
  variants: DrinkwareVariant[],
  price: number,
  mrp?: number
): Product[] => variants.map(({ sku, color, image }) => ({
  id: `solara-${sku.toLowerCase()}-${capacity.toLowerCase()}`,
  category: "solara",
  type: "Drinkware",
  name: `SOLARA Hydration Bottle - ${color} (${capacity})`,
  price,
  ...(mrp === undefined ? {} : { mrp }),
  reviewsCount: "",
  rating: 0,
  image: `solara/${image}`,
  fallbackImage: `solara/${image}`,
  tag: "SOLARA",
  description: "SOLARA Drinkware - Hydration Meets Premium Design.",
  features: [
    "Keeps drinks cold for 12 hours",
    "Keeps drinks hot for 8 hours",
    "18/8 food-grade stainless steel",
    "Leak-proof and sweat-free design",
    "Double-wall vacuum insulation"
  ],
  specs: { Capacity: capacity, Color: color },
  sku
}));

interface SolaraVariant {
  sku?: string;
  label?: string;
  image: string;
  specs?: Record<string, string>;
}

const createSolaraVariants = (
  productName: string,
  type: string,
  description: string,
  features: string[],
  variants: SolaraVariant[]
): Product[] => variants.map(({ sku, label, image, specs }) => ({
  id: `solara-${(sku ?? `${productName}-${label ?? "standard"}`).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  category: "solara",
  type,
  name: label ? `${productName} - ${label}` : productName,
  reviewsCount: "",
  rating: 0,
  image: `solara/${image}`,
  fallbackImage: `solara/${image}`,
  tag: "SOLARA",
  description,
  features,
  specs: specs ?? {},
  ...(sku ? { sku } : {})
}));

const INSULATED_BOTTLE_FEATURES = [
  "Keeps drinks cold for 12 hours",
  "Keeps drinks hot for 8 hours",
  "18/8 food-grade stainless steel",
  "Leak-proof and sweat-free design",
  "Double-wall vacuum insulation"
];

export const PRODUCTS: Product[] = [
  {
    id: "solara-large-digital-air-fryer-oven-12l",
    category: "solara",
    type: "Air Fryers",
    name: "SOLARA Large Digital Air Fryer Oven (12L Capacity)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA Large Digital Air Fryer Oven.png",
    fallbackImage: "solara/SOLARA Large Digital Air Fryer Oven.png",
    tag: "SOLARA",
    description: "SOLARA Large Digital Air Fryer Oven with 12L capacity.",
    features: [
      "12 preset cooking menus with LED touch screen",
      "360-degree hot air circulation for 100% oil-free cooking",
      "Multiple accessories: Crisper Wire Basket, Enamelled Tray, Rotisserie Basket, Wire Grill Rack, Tongs & Rotisserie Rod",
      "Energy-efficient operation with auto shut-off"
    ],
    specs: { Capacity: "12L" },
    sku: "SOL-AF-501",
    subtitle: "12L Capacity"
  },
  {
    id: "solara-digital-air-fryer-4-5l",
    category: "solara",
    type: "Air Fryers",
    name: "SOLARA Digital Air Fryer (4.5L)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA Digital Air Fryer.png",
    fallbackImage: "solara/SOLARA Digital Air Fryer.png",
    tag: "SOLARA",
    description: "SOLARA Digital Air Fryer with a 4.5L capacity and see-through window.",
    features: [
      "See-through window to monitor cooking progress",
      "10+1 preset cooking menus for Indian favorites",
      "1500W power with 360-degree high-speed air circulation",
      "Uses up to 90% less fat than traditional frying",
      "100% PFAS-free certified by independent laboratory"
    ],
    specs: { Capacity: "4.5L", Power: "1500W" },
    sku: "SOL-AF-124",
    subtitle: "4.5L with See-Through Window"
  },
  {
    id: "solara-cold-press-juicer-150w",
    category: "solara",
    type: "Cold Press Juicers",
    name: "SOLARA Cold Press Juicer (150W)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA Cold Press Juicer.jpg",
    fallbackImage: "solara/SOLARA Cold Press Juicer.jpg",
    tag: "SOLARA",
    description: "Extract every drop of goodness with the SOLARA Cold Press Juicer.",
    features: [
      "7-segment spiral masticating system for maximum juice extraction",
      "Slow 52 RPM operation preserves nutrients and enzymes",
      "2-speed settings for different fruits and vegetables",
      "Reverse function to reduce clogging and food residues",
      "One-touch assembly design for easy disassembly and cleaning",
      "Dishwasher-safe parts for simplified maintenance"
    ],
    specs: { Power: "150W" },
    sku: "SOL-JUC-121",
    subtitle: "150W Masticating Juicer"
  },
  {
    id: "solara-blendkwik-pro-portable-blender-450ml",
    category: "solara",
    type: "Portable Blenders",
    name: "SOLARA BlendKwik Pro Portable Blender (450ml)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA BlendKwik Pro.jpg",
    fallbackImage: "solara/SOLARA BlendKwik Pro.jpg",
    tag: "SOLARA",
    description: "Blend and sip on the go with the rechargeable SOLARA BlendKwik Pro Portable Blender.",
    features: [
      "180W motor with BlendKwik technology - blends in 20 seconds",
      "450ml capacity - perfect single-serve portions",
      "15+ blends per charge with water-resistant USB-C port",
      "Crushes ice, frozen fruits, and greens effortlessly",
      "Blend & Sip seamlessly - drink straight from the jar",
      "Self-cleaning: add water, soap, blend, rinse - done"
    ],
    specs: { Power: "180W", Capacity: "450ml", Charging: "USB-C" },
    sku: "SOL-BLN-400",
    subtitle: "Portable Blender - Rechargeable, 450ml"
  },
  {
    id: "solara-cast-iron-double-handle-tawa-12-inch-super-smooth",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Cast Iron Double Handle Tawa (12 inch, Super Smooth)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA CAST IRON DOUBLE HANDLE TAWA.webp",
    fallbackImage: "solara/SOLARA CAST IRON DOUBLE HANDLE TAWA.webp",
    tag: "SOLARA",
    description: "Flat cast iron tawa for perfect dosas, rotis, parathas, and uttapams. The heavy base ensures even heat spread for golden, crispy results every time.",
    features: ["Super smooth cooking surface", "Double handle design", "Flat cast iron base for even heat spread"],
    specs: { Size: "12 inch" },
    sku: "SOL-CI-DT-301"
  },
  {
    id: "solara-cast-iron-double-handle-tawa-12-inch",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Cast Iron Double Handle Tawa (12 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA CAST IRON DOUBLE HANDLE TAWA.webp",
    fallbackImage: "solara/SOLARA CAST IRON DOUBLE HANDLE TAWA.webp",
    tag: "SOLARA",
    description: "Flat cast iron tawa for perfect dosas, rotis, parathas, and uttapams. The heavy base ensures even heat spread for golden, crispy results every time.",
    features: ["Double handle design", "Flat cast iron base for even heat spread"],
    specs: { Size: "12 inch" },
    sku: "SOL-CI-DT-302"
  },
  {
    id: "solara-cast-iron-tawa-pre-seasoned-11-inch",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Cast Iron Tawa with Handle (Pre Seasoned, 11 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON TAWA WITH HANDLE (PRE SEASONED)'.webp",
    fallbackImage: "solara/CAST IRON TAWA WITH HANDLE (PRE SEASONED)'.webp",
    tag: "SOLARA",
    description: "Flat cast iron tawa for perfect dosas, rotis, parathas, and uttapams. The heavy base ensures even heat spread for golden, crispy results every time.",
    features: ["Pre-seasoned cooking surface", "Handle design", "Flat cast iron base for even heat spread"],
    specs: { Size: "11 inch" },
    sku: "SOL-CI-DT-307"
  },
  {
    id: "solara-cast-iron-dosa-tawa-round-grinding-11-inch-super-smooth",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Cast Iron Dosa Tawa Round with Grinding (11 inch, Super Smooth)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON DOSA TAWA ROUND (WITH GRINDING).webp",
    fallbackImage: "solara/CAST IRON DOSA TAWA ROUND (WITH GRINDING).webp",
    tag: "SOLARA",
    description: "Flat cast iron tawa for perfect dosas, rotis, parathas, and uttapams. The heavy base ensures even heat spread for golden, crispy results every time.",
    features: ["Round dosa tawa with grinding", "Super smooth cooking surface", "Flat cast iron base for even heat spread"],
    specs: { Size: "11 inch" },
    sku: "SOL-CI-DT-304"
  },
  {
    id: "solara-cast-iron-long-handle-tawa-10-inch",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Cast Iron Handle Tawa - Long Handle (Shallow Pan, 10 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON HANDLE TAWA — LONG HANDLE (SHALLOW PAN).jpg",
    fallbackImage: "solara/CAST IRON HANDLE TAWA — LONG HANDLE (SHALLOW PAN).jpg",
    tag: "SOLARA",
    description: "Flat cast iron tawa for perfect dosas, rotis, parathas, and uttapams. The heavy base ensures even heat spread for golden, crispy results every time.",
    features: ["Long handle design", "Shallow pan profile", "Flat cast iron base for even heat spread"],
    specs: { Size: "10 inch" },
    sku: "SOL-CI-DT-305"
  },
  {
    id: "solara-cast-iron-fish-fry-pan-10-inch",
    category: "solara",
    type: "Fish Fry Pans",
    name: "SOLARA Cast Iron Fish Fry Pan (10 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON FISH FRY PAN.jpg",
    fallbackImage: "solara/CAST IRON FISH FRY PAN.jpg",
    tag: "SOLARA",
    description: "A sturdy cast iron fish fry pan designed for even heating and reliable frying.",
    features: ["Heavy-duty cast iron construction", "Even heat distribution"],
    specs: { Size: "10 inch" },
    sku: "SOL-CI-FP-301"
  },
  {
    id: "solara-kadai-smooth-finish-8-inch",
    category: "solara",
    type: "Kadhai",
    name: "SOLARA Kadai - Smooth Finish (8 inch, Super Smooth)",
    reviewsCount: "",
    rating: 0,
    image: "solara/KADAI — SMOOTH FINISH.avif",
    fallbackImage: "solara/KADAI — SMOOTH FINISH.avif",
    tag: "SOLARA",
    description: "A smooth-finish cast iron kadai with a durable body for everyday cooking.",
    features: ["Super smooth finish", "Heavy-duty cast iron construction"],
    specs: { Size: "8 inch" },
    sku: "SOL-CI-KD-303"
  },
  {
    id: "solara-kadai-smooth-finish-10-inch",
    category: "solara",
    type: "Kadhai",
    name: "SOLARA Kadai - Smooth Finish (10 inch, Super Smooth)",
    reviewsCount: "",
    rating: 0,
    image: "solara/KADAI — SMOOTH FINISH.avif",
    fallbackImage: "solara/KADAI — SMOOTH FINISH.avif",
    tag: "SOLARA",
    description: "A smooth-finish cast iron kadai with a durable body for everyday cooking.",
    features: ["Super smooth finish", "Heavy-duty cast iron construction"],
    specs: { Size: "10 inch" },
    sku: "SOL-CI-KD-304"
  },
  {
    id: "solara-cast-iron-appam-pan-22-cm",
    category: "solara",
    type: "Appam Pans",
    name: "SOLARA Cast Iron Appam Pan (22 cm, Super Smooth)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON APPAM PAN SUPER SMOOTH.webp",
    fallbackImage: "solara/CAST IRON APPAM PAN SUPER SMOOTH.webp",
    tag: "SOLARA",
    description: "A super smooth cast iron appam pan for even cooking and consistent results.",
    features: ["Super smooth cooking surface", "Heavy-duty cast iron construction"],
    specs: { Size: "22 cm" },
    sku: "SOL-CI-AP-301"
  },
  {
    id: "solara-cast-iron-paniyaram-pan-9-pit",
    category: "solara",
    type: "Paniyaram Pans",
    name: "SOLARA Cast Iron Paniyaram Pan (9 Pit)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON PANIYARAM PAN.webp",
    fallbackImage: "solara/CAST IRON PANIYARAM PAN.webp",
    tag: "SOLARA",
    description: "A cast iron paniyaram pan for preparing evenly cooked paniyaram at home.",
    features: ["Cast iron construction", "9-pit cooking surface"],
    specs: { Size: "9 Pit" },
    sku: "SOL-CI-PNY-303"
  },
  {
    id: "solara-cast-iron-paniyaram-pan-12-pit",
    category: "solara",
    type: "Paniyaram Pans",
    name: "SOLARA Cast Iron Paniyaram Pan (12 Pit)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON PANIYARAM PAN.webp",
    fallbackImage: "solara/CAST IRON PANIYARAM PAN.webp",
    tag: "SOLARA",
    description: "A cast iron paniyaram pan for preparing evenly cooked paniyaram at home.",
    features: ["Cast iron construction", "12-pit cooking surface"],
    specs: { Size: "12 Pit" },
    sku: "SOL-CI-PNY-301"
  },
  {
    id: "solara-crownstone-double-handle-tawa-12-inch",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Crownstone Cast Iron Double Handle Tawa (12 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOLARA CAST IRON DOUBLE HANDLE TAWA.webp",
    fallbackImage: "solara/SOLARA CAST IRON DOUBLE HANDLE TAWA.webp",
    tag: "SOLARA",
    description: "A Crownstone cast iron tawa with a sturdy double-handle design, made for dependable everyday cooking.",
    features: ["Pre-seasoned and ready to cook", "Heavy-duty construction", "Gas compatible"],
    specs: { Size: "12 inch" },
    sku: "SOL-CI-DT-306"
  },
  {
    id: "solara-crownstone-single-handle-tawa-12-inch",
    category: "solara",
    type: "Cast Iron Cookware",
    name: "SOLARA Crownstone Cast Iron Tawa with Single Handle (12 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON TAWA WITH HANDLE (PRE SEASONED)'.webp",
    fallbackImage: "solara/CAST IRON TAWA WITH HANDLE (PRE SEASONED)'.webp",
    tag: "SOLARA",
    description: "A Crownstone cast iron tawa with a single handle for dependable everyday cooking.",
    features: ["Pre-seasoned and ready to cook", "Heavy-duty construction", "Gas compatible"],
    specs: { Size: "12 inch" },
    sku: "SOL-CI-DT-303"
  },
  {
    id: "solara-crownstone-fry-pan-8-inch",
    category: "solara",
    type: "Cast Iron Fry Pans",
    name: "SOLARA Crownstone Cast Iron Fry Pan (8 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOL-CI-FP-302.webp",
    fallbackImage: "solara/SOL-CI-FP-302.webp",
    tag: "SOLARA",
    description: "A durable Crownstone cast iron fry pan for even heating and everyday frying.",
    features: ["Heavy-duty cast iron construction", "Even heat distribution"],
    specs: { Size: "8 inch" },
    sku: "SOL-CI-FP-302"
  },
  {
    id: "solara-crownstone-fry-pan-10-inch",
    category: "solara",
    type: "Cast Iron Fry Pans",
    name: "SOLARA Crownstone Cast Iron Fry Pan (10 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOL-CI-FP-302.webp",
    fallbackImage: "solara/SOL-CI-FP-302.webp",
    tag: "SOLARA",
    description: "A durable Crownstone cast iron fry pan for even heating and everyday frying.",
    features: ["Heavy-duty cast iron construction", "Even heat distribution"],
    specs: { Size: "10 inch" },
    sku: "SOL-CI-FP-303"
  },
  {
    id: "solara-crownstone-fry-pan-12-inch",
    category: "solara",
    type: "Cast Iron Fry Pans",
    name: "SOLARA Crownstone Cast Iron Fry Pan (12 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/SOL-CI-FP-302.webp",
    fallbackImage: "solara/SOL-CI-FP-302.webp",
    tag: "SOLARA",
    description: "A durable Crownstone cast iron fry pan for even heating and everyday frying.",
    features: ["Heavy-duty cast iron construction", "Even heat distribution"],
    specs: { Size: "12 inch" },
    sku: "SOL-CI-FP-304"
  },
  {
    id: "solara-cast-iron-deep-kadai-12-inch",
    category: "solara",
    type: "Kadhai",
    name: "SOLARA Cast Iron Deep Kadai (12 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/KADAI — SMOOTH FINISH.avif",
    fallbackImage: "solara/KADAI — SMOOTH FINISH.avif",
    tag: "SOLARA",
    description: "A deep cast iron kadai with a sturdy body for versatile everyday cooking.",
    features: ["Deep cast iron cooking vessel", "Heavy-duty construction"],
    specs: { Size: "12 inch" },
    sku: "SOL-CI-KD-301"
  },
  {
    id: "solara-cast-iron-deep-kadai-10-inch",
    category: "solara",
    type: "Kadhai",
    name: "SOLARA Cast Iron Deep Kadai (10 inch)",
    reviewsCount: "",
    rating: 0,
    image: "solara/KADAI — SMOOTH FINISH.avif",
    fallbackImage: "solara/KADAI — SMOOTH FINISH.avif",
    tag: "SOLARA",
    description: "A deep cast iron kadai with a sturdy body for versatile everyday cooking.",
    features: ["Deep cast iron cooking vessel", "Heavy-duty construction"],
    specs: { Size: "10 inch" },
    sku: "SOL-CI-KD-302"
  },
  {
    id: "solara-cast-iron-4-pit-pan-4-pit",
    category: "solara",
    type: "Paniyaram Pans",
    name: "SOLARA Cast Iron 4 Pit Pan (4 Pit)",
    reviewsCount: "",
    rating: 0,
    image: "solara/CAST IRON 4 PIT PAN.webp",
    fallbackImage: "solara/CAST IRON 4 PIT PAN.webp",
    tag: "SOLARA",
    description: "A cast iron four-pit pan for cooking multiple portions at once.",
    features: ["Cast iron construction", "4-pit cooking surface"],
    specs: { Size: "4 Pit" },
    sku: "SOL-CI-PNY-305"
  },
  ...createTriplyProducts("SOLARA Triply SS Kadai with SS Lid", "Triply Kadhai", "TRIPLY SS KADAI WITH SS LID.jpg", [
    { sku: "SOL-TSKD-306", size: "18 cm", dimension: "180", caseLot: "4" },
    { sku: "SOL-TSKD-301", size: "20 cm", dimension: "200", caseLot: "4" },
    { sku: "SOL-TSKD-302", size: "22 cm", dimension: "220", caseLot: "4" },
    { sku: "SOL-TSKD-303", size: "24 cm", dimension: "240", caseLot: "4" },
    { sku: "SOL-TSKD-304", size: "26 cm", dimension: "260", caseLot: "4" },
    { sku: "SOL-TSKD-305", size: "28 cm", dimension: "280", caseLot: "4" },
    { sku: "SOL-TSKD-307", size: "30 cm", dimension: "300", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply SS Deep Kadai with SS Lid", "Triply Kadhai", "TRIPLY SS DEEP KADAI WITH SS LID.webp", [
    { sku: "SOL-TSDKD-301", size: "20 cm", dimension: "200", caseLot: "4" },
    { sku: "SOL-TSDKD-302", size: "22 cm", dimension: "220", caseLot: "4" },
    { sku: "SOL-TSDKD-303", size: "24 cm", dimension: "240", caseLot: "4" },
    { sku: "SOL-TSDKD-304", size: "26 cm", dimension: "260", caseLot: "4" },
    { sku: "SOL-TSDKD-305", size: "28 cm", dimension: "280", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply SS Frypan", "Triply Frypans", "TRIPLY SS FRYPAN.webp", [
    { sku: "SOL-TSFP-304", size: "18 cm", dimension: "180", caseLot: "4" },
    { sku: "SOL-TSFP-301", size: "20 cm", dimension: "200", caseLot: "4" },
    { sku: "SOL-TSFP-302", size: "22 cm", dimension: "220", caseLot: "4" },
    { sku: "SOL-TSFP-303", size: "24 cm", dimension: "240", caseLot: "4" }
  ]),
  ...createTriplyProducts("SOLARA Triply Tall Casserole with SS Lid", "Triply Casseroles", "TRIPLY TALL CASSEROLE WITH SS LID.jpg", [
    { sku: "SOL-TSTC-305", size: "20 cm", dimension: "200", caseLot: "4" },
    { sku: "SOL-TSTC-302", size: "24 cm", dimension: "240", caseLot: "4" },
    { sku: "SOL-TSTC-303", size: "28 cm", dimension: "280", caseLot: "4" },
    { sku: "SOL-TSTC-304", size: "32 cm", dimension: "320", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply Short Casserole with SS Lid (Cast Handle)", "Triply Casseroles", "TRIPLY SHORT CASSEROLE WITH SS LID (CAST HANDLE).jpg", [
    { sku: "SOL-TSSC-301", size: "24 cm", dimension: "240", caseLot: "4" },
    { sku: "SOL-TSSC-302", size: "28 cm", dimension: "280", caseLot: "4" },
    { sku: "SOL-TSSC-303", size: "32 cm", dimension: "320", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply Handi Casserole with SS Lid", "Triply Casseroles", "TRIPLY HANDI CASSEROLE WITH SS LID.jpg", [
    { sku: "SOL-TSHD-301", size: "20 cm", dimension: "200", caseLot: "4" },
    { sku: "SOL-TSHD-302", size: "22 cm", dimension: "220", caseLot: "4" },
    { sku: "SOL-TSHD-303", size: "24 cm", dimension: "240", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply Uruli with SS Lid (SS Handle)", "Triply Cookware", "TRIPLY URULI WITH SS LID (SS HANDLE).webp", [
    { sku: "SOL-TSUR-301", size: "24 cm", dimension: "240", caseLot: "4" },
    { sku: "SOL-TSUR-302", size: "28 cm", dimension: "280", caseLot: "4" },
    { sku: "SOL-TSUR-303", size: "32 cm", dimension: "320", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply Pressure Cooker with Lid", "Pressure Cookers", "TRIPLY PRESSURE COOKER WITH LID.webp", [
    { sku: "SOL-TSPC-301", size: "2 L", caseLot: "4" },
    { sku: "SOL-TSPC-302", size: "3 L", caseLot: "4" },
    { sku: "SOL-TSPC-303", size: "5 L", caseLot: "4" }
  ], true),
  ...createTriplyProducts("SOLARA Triply Pressure Pan with Lid", "Pressure Cookers", "TRIPLY PRESSURE PAN WITH LID.jpg", [
    { sku: "SOL-TSPP-303", size: "2 L", caseLot: "4" },
    { sku: "SOL-TSPP-304", size: "3 L", caseLot: "4" }
  ], true),
  ...createDrinkwareProducts("650ml", [
    { sku: "SOL-INS-WB-601", color: "Black Knight", image: "SOL-INS-WB-601Black Knight.png" },
    { sku: "SOL-INS-WB-602", color: "Angle Pink", image: "SOL-INS-WB-602 Angle pink.png" },
    { sku: "SOL-INS-WB-603", color: "Aqua", image: "SOL-INS-WB-603 Aqua.png" },
    { sku: "SOL-INS-WB-604", color: "Pink Teal", image: "SOL-INS-WB-604 Pink Teal.png" },
    { sku: "SOL-INS-WB-607", color: "Black Marble", image: "SOL-INS-WB-607 Black Marble.png" },
    { sku: "SOL-INS-WB-605", color: "Blue Wave", image: "SOL-INS-WB-605 Blue Wave.png" },
    { sku: "SOL-INS-WB-606", color: "Dark Intension", image: "SOL-INS-WB-606 Dark intension.png" }
  ], 1500),
  ...createDrinkwareProducts("1000ml", [
    { sku: "SOL-INS-WB-621", color: "Black Knight", image: "SOL-INS-WB-621 Black Knight.png" },
    { sku: "SOL-INS-WB-622", color: "Lime Green", image: "SOL-INS-WB-622 Lime Green.png" },
    { sku: "SOL-INS-WB-623", color: "Pink Teal", image: "SOL-INS-WB-623 Pink Teal.png" },
    { sku: "SOL-INS-WB-624", color: "Dark Intension", image: "SOL-INS-WB-624 Dark intension.png" },
    { sku: "SOL-INS-WB-627", color: "Black Marble", image: "SOL-INS-WB-627 Black Marble.png" },
    { sku: "SOL-INS-WB-625", color: "Angle Pink", image: "SOL-INS-WB-625 Angle pink.png" },
    { sku: "SOL-INS-WB-626", color: "Blue Wave", image: "SOL-INS-WB-626 Blue Wave.png" }
  ], 1999, 2199),
  ...createSolaraVariants(
    "SOLARA Hydration Bottle (2000ml)",
    "Drinkware",
    "SOLARA premium insulated hydration bottle with double-wall vacuum insulation.",
    INSULATED_BOTTLE_FEATURES,
    [
      { sku: "SOL-INS-WB-641", label: "Pink Teal", image: "SOL-INS-WB-641 Pink Teal.png", specs: { Capacity: "2000ml", Color: "Pink Teal" } },
      { sku: "SOL-INS-WB-642", label: "Black Knight", image: "SOL-INS-WB-642 Black Knight.png", specs: { Capacity: "2000ml", Color: "Black Knight" } },
      { sku: "SOL-INS-WB-644", label: "Dark Intension", image: "SOL-INS-WB-644 Dark intension.png", specs: { Capacity: "2000ml", Color: "Dark Intension" } },
      { sku: "SOL-INS-WB-643", label: "Blue Wave", image: "SOL-INS-WB-643 Blue Wave.png", specs: { Capacity: "2000ml", Color: "Blue Wave" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Kids Insulated Bottle (450ml)",
    "Kids Bottles",
    "A kid-friendly insulated stainless-steel bottle for school and everyday adventures.",
    INSULATED_BOTTLE_FEATURES,
    [
      { sku: "SOL-INS-WB-681", label: "Unicorn", image: "SOL-INS-WB-681Unicorn.png", specs: { Capacity: "450ml", Design: "Unicorn" } },
      { sku: "SOL-INS-WB-682", label: "Mermaid", image: "SOL-INS-WB-682 Mermaid.png", specs: { Capacity: "450ml", Design: "Mermaid" } },
      { sku: "SOL-INS-WB-683", label: "Rainbow", image: "SOL-INS-WB-683 Rainbow.png", specs: { Capacity: "450ml", Design: "Rainbow" } },
      { sku: "SOL-INS-WB-684", label: "Dino", image: "SOL-INS-WB-684 Dino.png", specs: { Capacity: "450ml", Design: "Dino" } },
      { sku: "SOL-INS-WB-687", label: "Galaxy", image: "SOL-INS-WB-687 Galaxy.png", specs: { Capacity: "450ml", Design: "Galaxy" } },
      { sku: "SOL-INS-WB-685", label: "Fruit", image: "SOL-INS-WB-685 Fruit.png", specs: { Capacity: "450ml", Design: "Fruit" } },
      { sku: "SOL-INS-WB-688", label: "Animal Heroes", image: "SOL-INS-WB-688 Animal heros.png", specs: { Capacity: "450ml", Design: "Animal Heroes" } },
      { sku: "SOL-INS-WB-686", label: "Fish", image: "SOL-INS-WB-686 Fish.png", specs: { Capacity: "450ml", Design: "Fish" } },
      { sku: "SOL-INS-WB-689", label: "Construction", image: "SOL-INS-WB-689 Construction.png", specs: { Capacity: "450ml", Design: "Construction" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Amazi Kids Lunch Box",
    "Kids Lunch Boxes",
    "A lightweight, kid-friendly meal organizer designed for easy everyday packing.",
    [
      "3-section stainless-steel meal organizer",
      "Four clasps for leak-resistant packing",
      "Lightweight and kid-friendly design",
      "Dishwasher safe"
    ],
    [
      { sku: "SOL-SLB-201", label: "Unicorn", image: "SOL-SLB-201 Unicorn.png", specs: { Sections: "3", Design: "Unicorn" } },
      { sku: "SOL-SLB-202", label: "Dino", image: "SOL-SLB-202 Dino.png", specs: { Sections: "3", Design: "Dino" } },
      { sku: "SOL-SLB-203", label: "Galaxy", image: "SOL-SLB-203 Galaxy.png", specs: { Sections: "3", Design: "Galaxy" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Echo Insulated Tumbler (1.2L)",
    "Tumblers",
    "A large-capacity insulated tumbler designed for convenient carrying and daily hydration.",
    ["1.2L large capacity", "Ergonomic easy-carry handle", "Base fits car cup holders", "Leak-proof BPA-free lid"],
    [
      { sku: "SOL-INS-TUM-253", label: "Blue Hawaii", image: "SOL-INS-TUM-253 Blue Hawai.png", specs: { Capacity: "1.2L", Color: "Blue Hawaii" } },
      { sku: "SOL-INS-TUM-252t", label: "Moroccan Blue", image: "SOL-INS-TUM-252t Moroccan Blue.png", specs: { Capacity: "1.2L", Color: "Moroccan Blue" } },
      { sku: "SOL-INS-TUM-251", label: "Black Knight", image: "SOL-INS-TUM-251 Black Knight.png", specs: { Capacity: "1.2L", Color: "Black Knight" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Glass Tumbler with Bamboo Lid (500ml)",
    "Tumblers",
    "A reusable 500ml glass tumbler with a bamboo lid and reusable straws.",
    ["Spill-resistant bamboo lid", "Dishwasher safe", "Reusable straws included", "BPA-free"],
    [
      { label: "Blue Hawaii", image: "SOL-GLSTUM-601 Blue Hawaii.png", specs: { Capacity: "500ml", Color: "Blue Hawaii" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Stainless Steel Water Bottle",
    "Drinkware",
    "A reusable stainless-steel water bottle designed for safe everyday hydration.",
    ["Wide mouth for easy filling and cleaning", "18/8 food-grade stainless steel", "Leak-proof lock system", "BPA-free for everyday use"],
    [
      { sku: "SOL-SS-WB-602", label: "Black Knight", image: "SOL-SS-WB-602 Black Knight.png", specs: { Color: "Black Knight" } },
      { sku: "SOL-SS-WB-603", label: "Dark Intentions", image: "SOL-SS-WB-603 Dark Intentions.png", specs: { Color: "Dark Intentions" } },
      { sku: "SOL-SS-WB-601", label: "Dark Blue", image: "SOL-SS-WB-601 Dark Blue.png", specs: { Color: "Dark Blue" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Cola Stainless Steel Bottle (500ml)",
    "Drinkware",
    "A SOLARA Cola stainless-steel bottle for everyday hydration.",
    ["Stainless-steel bottle"],
    [
      { sku: "SOL-INS-WB-651", label: "Steel", image: "SOLARA COLA 500 ml Stainless Steel Bottle.jpg", specs: { Capacity: "500ml", Color: "Steel" } },
      { sku: "SOL-INS-WB-652", label: "Green", image: "SOLARA COLA 500 ml Stainless Steel Bottle.jpg", specs: { Capacity: "500ml", Color: "Green" } },
      { sku: "SOL-INS-WB-653", label: "Black", image: "SOLARA COLA 500 ml Stainless Steel Bottle.jpg", specs: { Capacity: "500ml", Color: "Black" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Cola Stainless Steel Bottle (1000ml)",
    "Drinkware",
    "A SOLARA Cola stainless-steel bottle for everyday hydration.",
    ["Stainless-steel bottle"],
    [
      { sku: "SOL-INS-WB-661", label: "Steel", image: "SOLARA COLA 1000 ml Stainless Steel Bottle.webp", specs: { Capacity: "1000ml", Color: "Steel" } },
      { sku: "SOL-INS-WB-664", label: "Black", image: "SOLARA COLA 1000 ml Stainless Steel Bottle.webp", specs: { Capacity: "1000ml", Color: "Black" } },
      { sku: "SOL-INS-WB-665", label: "Green", image: "SOLARA COLA 1000 ml Stainless Steel Bottle.webp", specs: { Capacity: "1000ml", Color: "Green" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Cola Stainless Steel Bottle (1500ml)",
    "Drinkware",
    "A SOLARA Cola stainless-steel bottle for everyday hydration.",
    ["Stainless-steel bottle"],
    [
      { sku: "SOL-INS-WB-662", label: "Steel", image: "SOLARA COLA 1000 ml Stainless Steel Bottle.webp", specs: { Capacity: "1500ml", Color: "Steel" } }
    ]
  ),
  ...createSolaraVariants(
    "SOLARA Insulated Flask",
    "Flasks",
    "A double-wall insulated flask for keeping beverages at the desired temperature.",
    ["Double-wall insulated design"],
    [
      { sku: "SOL-INS-FLK-651", label: "500ml", image: "Insulated Flask Double Wall.webp", specs: { Capacity: "500ml" } },
      { sku: "SOL-INS-FLK-652", label: "1000ml", image: "Insulated Flask Double Wall.webp", specs: { Capacity: "1000ml" } }
    ]
  )
];
