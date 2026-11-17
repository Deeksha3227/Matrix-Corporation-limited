import { WIPRO_CATALOG_PRODUCTS } from "./wiproCatalog";

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

interface WiproLightingVariant {
  code: string;
  name: string;
  type: string;
  image: string;
  mrp: number;
  features: string[];
  specs: Record<string, string>;
}

const WIPRO_LIGHTING_PRODUCTS: Product[] = [
  {
    code: "NS9400",
    name: "Wipro Smart Wi-Fi LED Bulb - 9W RGB + CCT (B22)",
    type: "Smart Wi-Fi LED Bulbs",
    image: "Smart Wi-Fi LED Bulb.avif",
    mrp: 2099,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "9W", "Light type": "RGB + CCT", "Base cap": "B22", "Case lot": "30" }
  },
  {
    code: "NS9500",
    name: "Wipro Smart Wi-Fi LED Bulb - 9W RGB + CCT (E27)",
    type: "Smart Wi-Fi LED Bulbs",
    image: "Smart Wi-Fi LED Bulb.avif",
    mrp: 2099,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "9W", "Light type": "RGB + CCT", "Base cap": "E27", "Case lot": "30" }
  },
  {
    code: "NS1220",
    name: "Wipro Smart Wi-Fi LED Bulb - 12.5W RGB + CCT (B22)",
    type: "Smart Wi-Fi LED Bulbs",
    image: "Smart Wi-Fi LED Bulb.avif",
    mrp: 2590,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "12.5W", "Light type": "RGB + CCT", "Base cap": "B22", "Case lot": "30" }
  },
  {
    code: "NS1230",
    name: "Wipro Smart Wi-Fi LED Bulb - 12.5W RGB + CCT (E27)",
    type: "Smart Wi-Fi LED Bulbs",
    image: "Smart Wi-Fi LED Bulb.avif",
    mrp: 2590,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "12.5W", "Light type": "RGB + CCT", "Base cap": "E27", "Case lot": "30" }
  },
  {
    code: "NS9600",
    name: "Wipro Smart Beacon LED Bulb - 9W RGB + CCT (B22)",
    type: "Smart Beacon LED Bulbs",
    image: "Smart Beacon LED Bulb.webp",
    mrp: 1299,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with Bluetooth"],
    specs: { Wattage: "9W", "Light type": "RGB + CCT", "Base cap": "B22", "Case lot": "10" }
  },
  {
    code: "NS9700",
    name: "Wipro Smart Beacon LED Bulb - 9W RGB + CCT (E27)",
    type: "Smart Beacon LED Bulbs",
    image: "Smart Beacon LED Bulb.webp",
    mrp: 1299,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with Bluetooth"],
    specs: { Wattage: "9W", "Light type": "RGB + CCT", "Base cap": "E27", "Case lot": "10" }
  },
  {
    code: "DS12000",
    name: "Wipro Smart Wi-Fi LED Batten - 20W CCT",
    type: "Smart Wi-Fi LED Battens",
    image: "Smart Wi-Fi LED Batten.jpg",
    mrp: 2480,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "20W", "Light type": "CCT", "Length (mm)": "1136", "Case lot": "20" }
  },
  {
    code: "DS22000",
    name: "Wipro Smart Wi-Fi LED Batten - 20W CCT + RGB",
    type: "Smart Wi-Fi LED Battens",
    image: "Smart Wi-Fi LED Batten.jpg",
    mrp: 2690,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "20W", "Light type": "CCT + RGB", "Length (mm)": "900", "Case lot": "20" }
  },
  {
    code: "SB2124",
    name: "Wipro Smart Wi-Fi LED Batten - 24W CCT",
    type: "Smart Wi-Fi LED Battens",
    image: "Smart Wi-Fi LED Batten.jpg",
    mrp: 2590,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "24W", "Light type": "CCT", "Length (mm)": "1136", "Case lot": "20" }
  },
  {
    code: "SB2224",
    name: "Wipro Smart Wi-Fi LED Batten - 24W CCT + RGB",
    type: "Smart Wi-Fi LED Battens",
    image: "Smart Wi-Fi LED Batten.jpg",
    mrp: 2999,
    features: ["Dimmable", "White tunable", "16 million color options", "Control from anywhere", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "24W", "Light type": "CCT + RGB", "Length (mm)": "900", "Case lot": "20" }
  },
  {
    code: "SS01000",
    name: "Wipro Smart RGB + CCT LED Strip",
    type: "Smart LED Strips & Controllers",
    image: "Smart Wi-Fi LED Batten.jpg",
    mrp: 4390,
    features: ["Smart RGB + CCT lighting"],
    specs: { "LED per metre": "320", "Case lot": "10" }
  },
  {
    code: "SSC100-5",
    name: "Wipro Smart Controller",
    type: "Smart LED Strips & Controllers",
    image: "Smart Wi-Fi LED Batten.jpg",
    mrp: 2990,
    features: ["Controller for smart lighting"],
    specs: {}
  },
  {
    code: "DS506",
    name: "Wipro Smart Trimless COB Spotlight - Sigmesh (6W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Trimless COB Spotlight -Sigmesn.png",
    mrp: 2790,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "6W", "Light type": "CCT", "Dimensions (mm)": "Ø 64 x 61", "Cutout (mm)": "Ø 56", "Luminous flux (lm)": "480", "Beam angle": "24°", "Case lot": "10" }
  },
  {
    code: "DS510",
    name: "Wipro Smart Trimless COB Spotlight - Sigmesh (10W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Trimless COB Spotlight -Sigmesn.png",
    mrp: 3290,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "10W", "Light type": "CCT", "Dimensions (mm)": "Ø 85 x 77", "Cutout (mm)": "Ø 75", "Luminous flux (lm)": "800", "Beam angle": "24°", "Case lot": "10" }
  },
  {
    code: "DS515",
    name: "Wipro Smart Trimless COB Spotlight - Sigmesh (15W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Trimless COB Spotlight -Sigmesn.png",
    mrp: 4090,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "15W", "Light type": "CCT", "Dimensions (mm)": "Ø 85 x 77", "Cutout (mm)": "Ø 75", "Luminous flux (lm)": "1100", "Beam angle": "24°", "Case lot": "10" }
  },
  {
    code: "DS809",
    name: "Wipro Smart Trimless COB Spotlight - Sigmesh + Remote (9W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Trimless COB Spotlight -Sigmesn.png",
    mrp: 3290,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "9W", "Light type": "CCT", "Dimensions (mm)": "Ø 71 x 65", "Cutout (mm)": "Ø 65", "Beam angle": "36°", "Luminous flux (lm)": "780", "Case lot": "10", Accessory: "Remote" }
  },
  {
    code: "DS815",
    name: "Wipro Smart Trimless COB Spotlight - Sigmesh + Remote (15W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Trimless COB Spotlight -Sigmesn.png",
    mrp: 4090,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "15W", "Light type": "CCT", "Dimensions (mm)": "Ø 78 x 82", "Cutout (mm)": "Ø 70", "Beam angle": "36°", "Luminous flux (lm)": "1200", "Case lot": "10", Accessory: "Remote" }
  },
  {
    code: "DS51000",
    name: "Wipro Smart Module COB Spotlight (10W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Module COB Spotlight.png",
    mrp: 2890,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "10W", "Light type": "CCT", "Luminous flux (lm)": "800", "Beam angle": "25°", "Case lot": "10" }
  },
  {
    code: "DS51500",
    name: "Wipro Smart Module COB Spotlight (15W CCT)",
    type: "Smart COB Spotlights",
    image: "Smart Module COB Spotlight.png",
    mrp: 3590,
    features: ["Dimmable", "White tunable", "Control from anywhere*", "Set schedules and timers*", "Works with 2.4 GHz Wi-Fi*"],
    specs: { Wattage: "15W", "Light type": "CCT", "Luminous flux (lm)": "1200", "Beam angle": "25°", "Case lot": "10" }
  }
].map(({ code, name, type, image, mrp, features, specs }) => ({
  id: `wipro-${code.toLowerCase()}`,
  category: "wipro",
  type,
  name,
  mrp,
  reviewsCount: "",
  rating: 0,
  image: `wipro/${image}`,
  fallbackImage: `wipro/${image}`,
  tag: "WIPRO",
  description: name,
  features: features.map((feature) =>
    feature.includes("*") ? `${feature.replace("*", "")} once connected to Sigmesh Gateway` : feature
  ),
  specs: { "Product code": code, ...specs },
  sku: code
}));

interface WiproSmartProduct {
  code: string;
  name: string;
  type: string;
  image: string;
  features?: string[];
  specs?: Record<string, string>;
}

const SIGMESH_PANEL_FEATURES = [
  "Dimmable",
  "White tunable",
  "Control from anywhere once connected to a Sigmesh Gateway",
  "Set schedules and timers once connected to a Sigmesh Gateway",
  "Works with 2.4 GHz Wi-Fi once connected to a Sigmesh Gateway"
];

const WIPRO_SMART_HOME_PRODUCTS: Product[] = [
  {
    code: "DS70600",
    name: "Wipro Smart Panel Light - Sigmesh (6W CCT)",
    type: "Smart Panel Lights",
    image: "Smart Panel Light Sigmesn.png",
    features: SIGMESH_PANEL_FEATURES,
    specs: { Wattage: "6W", "Light type": "CCT", "Dimensions (mm)": "Ø 120 x 22", "Cutout (mm)": "Ø 100", "Luminous flux (lm)": "450", "Case lot": "10" }
  },
  {
    code: "DS71000",
    name: "Wipro Smart Panel Light - Sigmesh (10W CCT)",
    type: "Smart Panel Lights",
    image: "Smart Panel Light Sigmesn.png",
    features: SIGMESH_PANEL_FEATURES,
    specs: { Wattage: "10W", "Light type": "CCT", "Dimensions (mm)": "Ø 145 x 22", "Cutout (mm)": "Ø 125", "Luminous flux (lm)": "750", "Case lot": "10" }
  },
  {
    code: "DS71500",
    name: "Wipro Smart Panel Light - Sigmesh (15W CCT)",
    type: "Smart Panel Lights",
    image: "Smart Panel Light Sigmesn.png",
    features: SIGMESH_PANEL_FEATURES,
    specs: { Wattage: "15W", "Light type": "CCT", "Dimensions (mm)": "Ø 168 x 22", "Cutout (mm)": "Ø 150", "Luminous flux (lm)": "1200", "Case lot": "10" }
  },
  {
    code: "DS81000",
    name: "Wipro Smart Panel Light - Sigmesh + Remote (10W CCT)",
    type: "Smart Panel Lights",
    image: "Smart Panel Light -Sigmesh +Remote.png",
    features: SIGMESH_PANEL_FEATURES,
    specs: { Wattage: "10W", "Light type": "CCT", "Dimensions (mm)": "Ø 146 x 23", "Cutout (mm)": "Ø 130", "Luminous flux (lm)": "780", "Case lot": "10", Accessory: "Remote" }
  },
  {
    code: "DS81500",
    name: "Wipro Smart Panel Light - Sigmesh + Remote (15W CCT)",
    type: "Smart Panel Lights",
    image: "Smart Panel Light -Sigmesh +Remote.png",
    features: SIGMESH_PANEL_FEATURES,
    specs: { Wattage: "15W", "Light type": "CCT", "Dimensions (mm)": "Ø 172 x 23", "Cutout (mm)": "Ø 155", "Luminous flux (lm)": "1200", "Case lot": "10", Accessory: "Remote" }
  },
  {
    code: "DS71520",
    name: "Wipro Smart Surface Panel (15W)",
    type: "Smart Surface Panels",
    image: "Smart Surface Panel.png",
    features: ["Dimmable", "White tunable", "Control from anywhere", "Set schedules and timers", "Works with 2.4 GHz Wi-Fi"],
    specs: { Wattage: "15W", "Dimensions (mm)": "Ø 145 x 54", "Luminous flux (lm)": "1500", "Case lot": "10" }
  },
  {
    code: "SG2000",
    name: "Wipro Sigmesh Smart Gateway",
    type: "Smart Gateways",
    image: "Smart Gateway.png",
    features: ["Connects Bluetooth lights with Wi-Fi", "Works with 2.4 GHz Wi-Fi"],
    specs: { Protocol: "2.4 GHz Wi-Fi", "Case lot": "50" }
  },
  {
    code: "SR1000",
    name: "Wipro Smart Remote",
    type: "Smart Remotes & Scene Switches",
    image: "Smart Remote & Scene Switch.png",
    features: ["Works with RF protocol"],
    specs: { Protocol: "RF", "Case lot": "10" }
  },
  {
    code: "SR2010",
    name: "Wipro Smart Scene Switch",
    type: "Smart Remotes & Scene Switches",
    image: "Smart Remote & Scene Switch.png",
    features: ["Connects with Smart Panels, Smart COBs (DS8 Series), and Smart Strip", "Works with RF"],
    specs: { Protocol: "RF", "Case lot": "10" }
  },
  {
    code: "SL02000",
    name: "Wipro Smart Door Lock Aura (4 Bolts)",
    type: "Smart Door Locks",
    image: "Smart Door Lock.png",
    specs: { Bolts: "4", "Case lot": "4" }
  },
  {
    code: "SL03000",
    name: "Wipro Smart Door Lock Aura Pro (5 Bolts)",
    type: "Smart Door Locks",
    image: "Smart Door Lock.png",
    specs: { Bolts: "5", "Case lot": "4" }
  },
  {
    code: "SD04000",
    name: "Wipro Smart AC Wi-Fi Doorbell (3MP)",
    type: "Smart Doorbells",
    image: "Smart Doorbell.png",
    specs: { Camera: "3MP", "Case lot": "20" }
  },
  {
    code: "DSP1100",
    name: "Wipro Smart Wi-Fi Plug (10A)",
    type: "Smart Wi-Fi Plugs",
    image: "Smart Wi-Fi Plug.png",
    features: ["Control electrical appliances via phone", "Set on/off schedules", "Control through voice", "Works with 2.4 GHz Wi-Fi"],
    specs: { Current: "10A", "Case lot": "50" }
  },
  {
    code: "DSP1160",
    name: "Wipro Smart Wi-Fi Plug (16A)",
    type: "Smart Wi-Fi Plugs",
    image: "Smart Wi-Fi Plug.png",
    features: ["Control electrical appliances via phone", "Set on/off schedules", "Control through voice", "Works with 2.4 GHz Wi-Fi"],
    specs: { Current: "16A", "Case lot": "50" }
  },
  {
    code: "DSE3150",
    name: "Wipro Smart Extension (DSE3150)",
    type: "Smart Extensions",
    image: "Smart Extension.png",
    specs: { "Case lot": "20" }
  },
  {
    code: "DSE2150",
    name: "Wipro Smart Extension (DSE2150)",
    type: "Smart Extensions",
    image: "Smart Extension.png",
    specs: { "Case lot": "20" }
  },
  {
    code: "DSIR100",
    name: "Wipro Smart IR Blaster",
    type: "Smart IR Blasters",
    image: "Smart IR Blaster.png",
    specs: { "Case lot": "20" }
  },
  {
    code: "DSP2100",
    name: "Wipro Smart Retrofit Module (1 Node)",
    type: "Smart Retrofit Modules",
    image: "Smart Retrofit Module.png",
    specs: { Nodes: "1", "Case lot": "50" }
  },
  {
    code: "DSP2400",
    name: "Wipro Smart Retrofit Module (4 Node)",
    type: "Smart Retrofit Modules",
    image: "Smart Retrofit Module.png",
    specs: { Nodes: "4", "Case lot": "20" }
  },
  {
    code: "DSP2200",
    name: "Wipro Smart Retrofit Module (2 Node)",
    type: "Smart Retrofit Modules",
    image: "Smart Retrofit Module.png",
    specs: { Nodes: "2", "Case lot": "30" }
  },
  {
    code: "DSP410",
    name: "Wipro Smart Retrofit Module (3 + 1 Fan Node)",
    type: "Smart Retrofit Modules",
    image: "Smart Retrofit Module.png",
    specs: { Nodes: "3 + 1 fan node", "Case lot": "20" }
  },
  {
    code: "NW-S1110",
    name: "Wipro Artisa Neo Smart Touch Switch (1 Switch - 2M)",
    type: "Artisa Neo Smart Touch Switches",
    image: "I Switch - 2M.png",
    specs: { "Max load": "1000W per switch", "Dimensions (mm)": "45 x 51 x 43", "Case lot": "1" }
  },
  {
    code: "NW-S1120",
    name: "Wipro Artisa Neo Smart Touch Switch (2 Switch - 2M)",
    type: "Artisa Neo Smart Touch Switches",
    image: "2Switch - 2M.png",
    specs: { "Max load": "500W per switch", "Dimensions (mm)": "45 x 51 x 43", "Case lot": "1" }
  },
  {
    code: "NW-S1140",
    name: "Wipro Artisa Neo Smart Touch Switch (4 Switch - 2M)",
    type: "Artisa Neo Smart Touch Switches",
    image: "4Switch - 2M.png",
    specs: { "Max load": "100W per switch", "Dimensions (mm)": "45 x 51 x 43", "Case lot": "1" }
  },
  {
    code: "NW-S1150",
    name: "Wipro Artisa Neo Smart Touch Switch (5 Step Fan Regulator - 2M)",
    type: "Artisa Neo Smart Touch Switches",
    image: "5 Step Fan Regulator - 2M.png",
    specs: { "Max load": "120W", "Dimensions (mm)": "45 x 51 x 43", "Case lot": "1" }
  },
  {
    code: "NW-S11C0",
    name: "Wipro Artisa Neo Smart Touch Switch (Curtain Controller - 2M)",
    type: "Artisa Neo Smart Touch Switches",
    image: "Curtain Controller - 2M.png",
    specs: { "Max load": "150W", "Dimensions (mm)": "45 x 51 x 43", "Case lot": "1" }
  },
  {
    code: "DSG0111",
    name: "Wipro Outdoor Solar Bollard Light SG01",
    type: "Outdoor Solar Lights",
    image: "Outdoor Solar Bollard Light.png",
    specs: { "Dimensions (mm)": "162 x 90 x 413", "Case lot": "20" }
  },
  {
    code: "DSG0211",
    name: "Wipro Outdoor Solar Spike Light SG02",
    type: "Outdoor Solar Lights",
    image: "Outdoor Solar Spike Light.png",
    specs: { "Dimensions (mm)": "164 x 113 x 303", "Case lot": "20" }
  },
  {
    code: "DSW0110",
    name: "Wipro Outdoor Solar Sensor Wall Light SW01",
    type: "Outdoor Solar Lights",
    image: "Outdoor Solar Sensor Wa I Light.png",
    specs: { "Dimensions (mm)": "260 x 74 x 93", "Case lot": "20" }
  },
  {
    code: "DSW0210",
    name: "Wipro Outdoor Solar Sensor Wall Light SW02",
    type: "Outdoor Solar Lights",
    image: "Outdoor Solar Sensor Wa I Light.png",
    specs: { "Dimensions (mm)": "127 x 105 x 179", "Case lot": "20" }
  },
  {
    code: "DSW0310",
    name: "Wipro Outdoor Solar Sensor Wall Light SW03",
    type: "Outdoor Solar Lights",
    image: "Outdoor Solar Sensor Wa I Light.png",
    specs: { "Dimensions (mm)": "222 x 147 x 91", "Case lot": "20" }
  }
].map(({ code, name, type, image, features = [], specs = {} }) => ({
  id: `wipro-${code.toLowerCase()}`,
  category: "wipro",
  type,
  name,
  reviewsCount: "",
  rating: 0,
  image: `wipro/${image}`,
  fallbackImage: `wipro/${image}`,
  tag: "WIPRO",
  description: name,
  features,
  specs: { "Product code": code, ...specs },
  sku: code
}));

type KenstarCatalogEntry = Omit<
  Product,
  "category" | "reviewsCount" | "rating" | "image" | "fallbackImage" | "tag"
> & { image: string };

const createKenstarProducts = (entries: KenstarCatalogEntry[]): Product[] =>
  entries.map((entry) => ({
    ...entry,
    category: "kenstar",
    reviewsCount: "",
    rating: 0,
    image: entry.image,
    fallbackImage: entry.image,
    tag: "KENSTAR"
  }));

const AQUA_GLASS_FEATURES = [
  "More stars, more savings",
  "BEE rating",
  "SwirlHeat Technology for 20% more hot water output",
  "Nickel-coated heating element for durability and corrosion resistance",
  "Magnesium anode rod",
  "7-level safety shield for advanced protection",
  "Stem-type thermostat for precise temperature control and enhanced safety",
  "Enhanced safety with multifunctional valve",
  "High-density PUF insulation retains heat 10% longer",
  "8-bar pressure compatibility for high-rise buildings",
  "IPX4 protection for added safety and longer life",
  "IS:302-2-21 certified ISI safety mechanism",
  "LED temperature indicator",
  "ISI-certified assurance of safety, quality, and reliability"
];

const AQUA_GLASS_SPECS = {
  "BEE rating": "Rating not specified",
  "Heating technology": "SwirlHeat",
  "Hot water output": "20% more",
  "Heating element": "Nickel-coated",
  "Anode rod": "Magnesium",
  "Safety shield": "7-level",
  Thermostat: "Stem-type",
  Insulation: "High-density PUF; retains heat 10% longer",
  Pressure: "8 bar",
  Protection: "IPX4",
  Certification: "IS:302-2-21; ISI safety mechanism",
  "Tank warranty": "7 years"
};

const KENSTAR_PAGE_ADDITIONS: KenstarCatalogEntry[] = [
  {
    id: "kenstar-infra-eco",
    type: "Infrared Cooktops",
    name: "Kenstar Infra Eco Infrared Cooktop",
    image: "kenstar/INFRA ECO 2200W.png",
    description: "2200W Kenstar Infra Eco infrared cooktop with toughened anti-glare glass.",
    features: [
      "Personalized cooking",
      "Overheat protection",
      "Anti-glare, high-temperature-resistant toughened glass",
      "Suitable for all types of cooking utensils",
      "Keep-warm and turbo modes",
      "Timer, sensor-controlled temperature, and voltage protection"
    ],
    specs: { Power: "2200W", "Product warranty": "1 year" },
    sku: "KST-INFRA-ECO"
  },
  {
    id: "kenstar-stova-14",
    type: "Induction Cooktops",
    name: "Kenstar Stova 14 Induction Cooktop",
    image: "kenstar/stova 14.png",
    description: "1400W Kenstar Stova 14 induction cooktop with touch controls and preset Indian menus.",
    features: [
      "Automatic voltage regulator",
      "Child lock and touch control",
      "Energy-saving operation and aerodynamic cooling system",
      "Off-timer function and 7-segment digital display",
      "Customized preset Indian menu with 7 preset menus"
    ],
    specs: { Power: "1400W", "Product warranty": "1 year" },
    sku: "KST-STOVA-14"
  },
  {
    id: "kenstar-durachef-convection-25l",
    type: "Microwave Ovens",
    name: "Kenstar Durachef Convection Microwave Oven (25L)",
    image: "kenstar/DURACHEF DURACHEF CONVECTION CONVECTION 25L CAPACITY.png",
    description: "25L Kenstar Durachef convection microwave with digital menu controls and combination cooking.",
    features: [
      "250 auto-cook menus with digital display and jog wheel",
      "Chrome knob and mirror-finish door",
      "Combination cooking and up to 30-minute timer",
      "10 power levels and auto-defrost"
    ],
    specs: {
      Capacity: "25L",
      "Convection power": "1350W",
      "Magnetron warranty": "3 years",
      "Product warranty": "1 year"
    },
    sku: "KST-DURACHEF-CONVECTION-25L"
  },
  {
    id: "kenstar-durachef-convection-20l",
    type: "Microwave Ovens",
    name: "Kenstar Durachef Convection Microwave Oven (20L)",
    image: "kenstar/DURACHEF CONVECTION CONVECTION 20L CAPACITY.png",
    description: "20L Kenstar Durachef convection microwave with stainless-steel cavity and combination cooking.",
    features: [
      "101 auto-cook menus with digital display and jog wheel",
      "Chrome knob and mirror-finish door",
      "Stainless-steel cavity and combination cooking",
      "10 power levels and auto-defrost"
    ],
    specs: {
      Capacity: "20L",
      "Convection power": "1400W",
      "Magnetron warranty": "3 years",
      "Product warranty": "1 year"
    },
    sku: "KST-DURACHEF-CONVECTION-20L"
  },
  {
    id: "kenstar-durachef-grill-20l",
    type: "Microwave Ovens",
    name: "Kenstar Durachef Grill Microwave Oven (20L)",
    image: "kenstar/DURACHEF GRILL 20L CAPACITY.png",
    description: "20L Kenstar Durachef grill microwave with electro-mechanical controls.",
    features: [
      "Grill and combination cooking",
      "Electro-mechanical dual knobs",
      "5 power levels and auto-defrost",
      "Powder-coated cavity"
    ],
    specs: {
      Capacity: "20L",
      "Grill input power": "900W",
      "Magnetron warranty": "3 years",
      "Product warranty": "1 year"
    },
    sku: "KST-DURACHEF-GRILL-20L"
  },
  {
    id: "kenstar-durachef-solo-20l",
    type: "Microwave Ovens",
    name: "Kenstar Durachef Solo Microwave Oven (20L)",
    image: "kenstar/DURACHEF SOLO 20L CAPACITY.png",
    description: "20L Kenstar Durachef solo microwave with electro-mechanical controls.",
    features: [
      "Electro-mechanical dual knobs",
      "5 power levels and auto-defrost",
      "Powder-coated cavity"
    ],
    specs: {
      Capacity: "20L",
      "Input power": "1200W",
      "Magnetron warranty": "3 years",
      "Product warranty": "1 year"
    },
    sku: "KST-DURACHEF-SOLO-20L"
  },
  {
    id: "kenstar-durachef-otg-30l",
    type: "OTG",
    name: "Kenstar Durachef OTG (30L)",
    image: "kenstar/DURACHEF OTG 30L CAPACITY.png",
    description: "30L Kenstar Durachef OTG with stainless-steel cavity and motorized rotisserie.",
    features: [
      "Chrome knob and mirror-finish door",
      "Motorized rotisserie and up-to-60-minute timer",
      "Includes food tray, crumb tray, tray handle, barbecue grill, rotisserie fork and handle, and barbecue skewers"
    ],
    specs: { Capacity: "30L", Power: "1400W", "Product warranty": "2 years" },
    sku: "KST-DURACHEF-OTG-30L"
  },
  {
    id: "kenstar-durachef-otg-23l",
    type: "OTG",
    name: "Kenstar Durachef OTG (23L)",
    image: "kenstar/DURACHEF OTG 23 23L CAPACITY.png",
    description: "23L Kenstar Durachef OTG with stainless-steel cavity and motorized rotisserie.",
    features: [
      "Chrome knob and mirror-finish door",
      "Motorized rotisserie and up-to-60-minute timer",
      "Includes food tray, crumb tray, tray handle, barbecue grill, rotisserie fork and handle, and barbecue skewers"
    ],
    specs: { Capacity: "23L", Power: "1400W", "Product warranty": "2 years" },
    sku: "KST-DURACHEF-OTG-23L"
  },
  {
    id: "kenstar-durachef-otg-17l",
    type: "OTG",
    name: "Kenstar Durachef OTG (17L)",
    image: "kenstar/DURACHEF OTG 17 17L CAPACITY.png",
    description: "17L Kenstar Durachef OTG with cooking completion alarm and temperature control.",
    features: [
      "100°C-250°C temperature range",
      "Cooking completion alarm and up-to-60-minute timer",
      "Includes food tray, crumb tray, grilling rack, and tray handle"
    ],
    specs: { Capacity: "17L", Power: "1200W", "Product warranty": "2 years" },
    sku: "KST-DURACHEF-OTG-17L"
  },
  {
    id: "kenstar-durachef-otg-10l",
    type: "OTG",
    name: "Kenstar Durachef OTG (10L)",
    image: "kenstar/DURACHEF OTG 10 10L CAPACITY.png",
    description: "10L Kenstar Durachef OTG with combined top and bottom heating.",
    features: [
      "Combined top and bottom heating for fast cooking",
      "Up-to-60-minute timer",
      "Includes food tray, inbuilt crumb tray, grilling rack, and tray handle"
    ],
    specs: { Capacity: "10L", Power: "800W", "Product warranty": "2 years" },
    sku: "KST-DURACHEF-OTG-10L"
  },
  {
    id: "kenstar-crisper-toaster",
    type: "Toasters",
    name: "Kenstar Crisper Toaster",
    image: "kenstar/CRISPER 700W.png",
    description: "700W Kenstar Crisper toaster with seven browning levels.",
    features: [
      "Seven browning levels",
      "Cool-touch plastic body and removable crumb tray",
      "Two large bread slots",
      "Anti-skid feet, cord winder, and cancel button"
    ],
    specs: { Power: "700W", "Available colours": "3", "Product warranty": "1 year" },
    sku: "KST-CRISPER-TOASTER"
  },
  {
    id: "kenstar-crisper-titanium-toaster",
    type: "Toasters",
    name: "Kenstar Crisper Titanium Toaster",
    image: "kenstar/CRISPER TITANIUM 700W.png",
    description: "700W Kenstar Crisper Titanium toaster with reheating function.",
    features: [
      "Seven browning levels and reheating function",
      "Cool-touch plastic body and removable crumb tray",
      "Two large bread slots",
      "Anti-skid feet, cord winder, and cancel button"
    ],
    specs: { Power: "700W", "Product warranty": "1 year" },
    sku: "KST-CRISPER-TITANIUM-TOASTER"
  },
  {
    id: "kenstar-maestro-kettle",
    type: "Electric Kettles",
    name: "Kenstar Maestro Electric Kettle (1.5L)",
    image: "kenstar/MAESTRO 1.5L CAPACITY.png",
    description: "Kenstar Maestro 1.5L electric kettle with dry-boil protection.",
    features: ["Stainless-steel grill rack and egg tray", "Dry-boil protection", "360° swivel movement"],
    specs: { Capacity: "1.5L", Power: "1350W", Warranty: "1-year replacement" },
    sku: "KST-MAESTRO-KETTLE"
  },
  {
    id: "kenstar-estella-prism-kettle",
    type: "Electric Kettles",
    name: "Kenstar Estella Prism Electric Kettle (1.8L)",
    image: "kenstar/ESTELLA PRISM N 1.8L CAPACITY.png",
    description: "Kenstar Estella Prism 1.8L electric kettle with transparent illuminated body.",
    features: [
      "Transparent body with blue LED illumination",
      "Concealed heating element",
      "Dry-boil protection and auto cut-off",
      "360° swivel movement"
    ],
    specs: { Capacity: "1.8L", Power: "1350W", Warranty: "1-year replacement" },
    sku: "KST-ESTELLA-PRISM-KETTLE"
  },
  {
    id: "kenstar-stylee-kettle",
    type: "Electric Kettles",
    name: "Kenstar Stylee Electric Kettle",
    image: "kenstar/STYLEE 1.8L1.5 CAPACITY.png",
    description: "Kenstar Stylee electric kettle with one-key lid opening.",
    features: [
      "1.8L / 1.5L capacity options",
      "Easy cleaning and food-grade material",
      "Dry-boil protection and auto cut-off",
      "One-key lid opening and 360° swivel movement"
    ],
    specs: { Capacity: "1.8L / 1.5L", Power: "1350W", "Product warranty": "1 year" },
    sku: "KST-STYLEE-KETTLE"
  },
  {
    id: "kenstar-matrix-steam-iron",
    type: "Steam Irons",
    name: "Kenstar Matrix Steam Iron",
    image: "kenstar/MATRIX 2000W.png",
    description: "2000W Kenstar Matrix steam iron with a heavy aluminium soleplate.",
    features: [
      "100ml tank, continuous steam control, and auto cut-off",
      "Easy-grip fabric selector and temperature control knob",
      "Greblon non-stick German-technology coating",
      "1.7kg heavy aluminium soleplate"
    ],
    specs: { Power: "2000W", "Warranty": "2 years" },
    sku: "KST-MATRIX-STEAM-IRON"
  },
  {
    id: "kenstar-comfort-steam-iron",
    type: "Steam Irons",
    name: "Kenstar Comfort Steam Iron",
    image: "kenstar/MATRIX 2000W.png",
    description: "1200W Kenstar Comfort steam iron with spray, burst, and vertical steam functions.",
    features: ["Auto cut-off", "Spray and steam burst functions", "Vertical steam ironing", "360° cord swivel movement"],
    specs: { Power: "1200W", "Warranty": "2-year replacement" },
    sku: "KST-COMFORT-STEAM-IRON"
  },
  {
    id: "kenstar-zenith-steam-iron",
    type: "Steam Irons",
    name: "Kenstar Zenith Steam Iron",
    image: "kenstar/ZENITH 1000W.png",
    description: "1000W Kenstar Zenith steam iron with non-stick soleplate.",
    features: [
      "Spray and steam burst functions",
      "Auto cut-off and bi-metallic thermostat with thermal fuse",
      "Non-stick PTFE soleplate",
      "360° cord swivel movement"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-ZENITH-STEAM-IRON"
  },
  {
    id: "kenstar-fira-steam-iron",
    type: "Steam Irons",
    name: "Kenstar Fira Steam Iron",
    image: "kenstar/MATRIX 2000W.png",
    description: "1000W Kenstar Fira steam iron with a heavy-weight soleplate.",
    features: [
      "Auto cut-off and bi-metallic thermostat with thermal fuse",
      "Golden non-stick German-technology coating",
      "Heavy-weight soleplate for effective ironing"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-FIRA-STEAM-IRON"
  },
  {
    id: "kenstar-ferro-neo-steam-iron",
    type: "Steam Irons",
    name: "Kenstar Ferro Neo Steam Iron",
    image: "kenstar/MATRIX 2000W.png",
    description: "1000W Kenstar Ferro Neo steam iron with fabric selector and self-clean function.",
    features: [
      "Easy-grip fabric selector and self-clean function",
      "Auto cut-off and continuous steam control",
      "360° cord swivel movement"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-FERRO-NEO-STEAM-IRON"
  },
  {
    id: "kenstar-bigsole-dry-iron",
    type: "Dry Irons",
    name: "Kenstar Bigsole Dry Iron",
    image: "kenstar/ZENITH 1000W.png",
    description: "1000W Kenstar Bigsole dry iron with a large soleplate.",
    features: [
      "Large soleplate for faster wrinkle removal",
      "Non-stick PTFE soleplate",
      "Auto cut-off and easy-grip fabric selector",
      "360° cord swivel movement"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-BIGSOLE-DRY-IRON"
  },
  {
    id: "kenstar-swifto-dry-iron",
    type: "Dry Irons",
    name: "Kenstar SwiftO Dry Iron",
    image: "kenstar/ZENITH 1000W.png",
    description: "1000W Kenstar SwiftO dry iron with an ergonomic design.",
    features: [
      "Ergonomic design and non-stick PTFE soleplate",
      "Auto cut-off and easy-grip fabric selector",
      "360° cord swivel movement"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-SWIFTO-DRY-IRON"
  },
  {
    id: "kenstar-reno-dry-iron",
    type: "Dry Irons",
    name: "Kenstar Reno Dry Iron",
    image: "kenstar/ZENITH 1000W.png",
    description: "1000W Kenstar Reno dry iron with thermal-fuse protection.",
    features: [
      "Bi-metallic thermostat with thermal-fuse technology",
      "Auto cut-off",
      "360° cord swivel movement"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-RENO-DRY-IRON"
  },
  {
    id: "kenstar-zeva-dry-iron",
    type: "Dry Irons",
    name: "Kenstar Zeva Dry Iron",
    image: "kenstar/ZENITH 1000W.png",
    description: "1000W Kenstar Zeva dry iron with an ergonomic design.",
    features: [
      "Ergonomic design and non-stick PTFE soleplate",
      "Auto cut-off and easy-grip fabric selector",
      "180° cord swivel movement"
    ],
    specs: { Power: "1000W", "Warranty": "2-year replacement" },
    sku: "KST-ZEVA-DRY-IRON"
  }
];

const KENSTAR_PRODUCTS = createKenstarProducts([
  ...(["10L", "15L", "25L"] as const).map((capacity) => ({
    id: `kenstar-aqua-glass-${capacity.toLowerCase()}`,
    type: "Storage Water Heaters",
    name: `Kenstar Aqua Glass Storage Water Heater (${capacity})`,
    image: "kenstar/AQUA GLASS.png",
    description:
      "Kenstar Aqua Glass storage water heater with SwirlHeat Technology, advanced safety features, and efficient heat retention.",
    features: AQUA_GLASS_FEATURES,
    specs: { Capacity: capacity, ...AQUA_GLASS_SPECS },
    sku: `KST-AQUA-GLASS-${capacity}`
  })),
  ...(["10L", "15L", "25L"] as const).map((capacity) => ({
    id: `kenstar-spanza-pro-centre-${capacity.toLowerCase()}`,
    type: "Storage Water Heaters",
    name: `Kenstar Spanza Pro Centre Storage Water Heater (${capacity})`,
    image: "kenstar/SPANZA ECO (RHS, LHS).png",
    description: `Kenstar Spanza Pro Centre storage water heater (${capacity}).`,
    features: ["BEE rating"],
    specs: { Capacity: capacity, "BEE rating": "Rating not specified" },
    sku: `KST-SPANZA-PRO-CENTRE-${capacity}`
  })),
  ...[
    { model: "Maximus", capacity: "3L", power: "3kW" },
    { model: "Maximus", capacity: "5.9L", power: "4.5kW" },
    { model: "Axis", capacity: "5.9L" },
    { model: "Nexo", capacity: "3L" },
    { model: "Nexo", capacity: "5.9L" },
    { model: "Hydrix", capacity: "3L" }
  ].map(({ model, capacity, ...variant }) => ({
    id: `kenstar-${model.toLowerCase()}-instant-${capacity.toLowerCase()}`,
    type: "Instant Water Heaters",
    name: `Kenstar ${model} Instant Water Heater (${capacity})`,
    image: `kenstar/${model.toUpperCase()}.png`,
    description: `Kenstar ${model} instant water heater with ${capacity} capacity.`,
    features: ["Instant water heating"],
    specs: { Capacity: capacity, ...("power" in variant ? { Power: variant.power } : {}) },
    sku: `KST-${model.toUpperCase()}-${capacity.toUpperCase()}`
  })),
  ...[
    { model: "Jett Max", image: "kenstar/JETT MAX.png" },
    { model: "Star Jet", image: "kenstar/STAR JET.png" }
  ].map(({ model, image }) => ({
    id: `kenstar-${model.toLowerCase().replace(/\s+/g, "-")}-immersion-rod`,
    type: "Immersion Rod Water Heaters",
    name: `Kenstar ${model} Immersion Rod Water Heater`,
    image,
    description: `Kenstar ${model} immersion rod water heater for convenient domestic water heating.`,
    features: ["Portable immersion water heating"],
    specs: {
      "Heating type": "Immersion rod",
      "Available power": "1000W (6A plug), 1350W (6A plug), 1500W (16A plug)"
    },
    sku: `KST-${model.toUpperCase().replace(/\s+/g, "-")}-ROD`
  })),
  {
    id: "kenstar-tatvam-pro-4j",
    type: "Mixer Grinder",
    name: "Kenstar Tatvam Pro 4J Mixer Grinder",
    image: "kenstar/TATVAM PRO 4J TATVAM PRO 4J 1000W.png",
    description: "1000W Tatvam Pro mixer grinder with Endura Plus motor and four jars for multiple functions.",
    features: [
      "100% copper motor",
      "Hands-free operation with clip-locking lids",
      "Four-fin liquidising blade and easy-grip handles",
      "SS Ultima blades for high-performance grinding and blending",
      "1.5L liquidiser jar with handle",
      "1L dry/wet jar with handle",
      "0.4L chutney jar and 1.5L blender jar",
      "Overload protection and shockproof ABS body"
    ],
    specs: {
      Power: "1000W",
      Jars: "4",
      "Product warranty": "2 years",
      "Motor warranty": "Not specified"
    },
    sku: "KST-TATVAM-PRO-4J"
  },
  {
    id: "kenstar-tatvam-pro-3j",
    type: "Mixer Grinder",
    name: "Kenstar Tatvam Pro 3J Mixer Grinder",
    image: "kenstar/TATVAM PRO 3J TATVAM PRO 3J 1000W.png",
    description: "1000W Tatvam Pro mixer grinder with Endura Plus motor and three jars for everyday food preparation.",
    features: [
      "100% copper motor",
      "Hands-free operation with clip-locking lids",
      "Four-fin liquidising blade and easy-grip handles",
      "SS Ultima blades for high-performance grinding and blending",
      "1.5L liquidiser jar with handle",
      "1L dry/wet jar with handle",
      "0.4L chutney jar",
      "Overload protection and shockproof ABS body"
    ],
    specs: {
      Power: "1000W",
      Jars: "3",
      "Motor warranty": "5 years",
      "Product warranty": "2 years"
    },
    sku: "KST-TATVAM-PRO-3J"
  },
  {
    id: "kenstar-stallion-pro",
    type: "Mixer Grinder",
    name: "Kenstar Stallion Pro Mixer Grinder",
    image: "kenstar/STALLION PRO STALLION PRO 750W.png",
    description: "750W Stallion Pro mixer grinder with Endura Plus motor, designed for high-performance grinding and blending.",
    features: [
      "100% copper motor",
      "Hands-free operation with clip-locking lids",
      "Four-fin liquidising blade and flow breakers",
      "SS Ultima blades for high-performance grinding and blending",
      "1.5L liquid stainless-steel jar with handle",
      "1L dry stainless-steel jar with handle",
      "0.4L chutney jar",
      "See-through lid with easy-pour cap",
      "Overload protection and shockproof ABS body"
    ],
    specs: {
      Power: "750W",
      Jars: "3",
      "Motor warranty": "5 years",
      "Product warranty": "2 years"
    },
    sku: "KST-STALLION-PRO"
  },
  ...[
    {
      id: "kenstar-mixova-5y-black",
      name: "Kenstar Mixova 5Y Mixer Grinder - Black",
      image: "kenstar/MIXOVA 5Y MIXOVA 5Y 750W.png",
      color: "Black",
      jars: "1.5L liquid jar with handle, 1L dry/wet stainless-steel jar, 0.4L stainless-steel chutney jar",
      features: ["Three jars for multiple functions", "Overload protection", "Shockproof ABS body"]
    },
    {
      id: "kenstar-mixova-5y-green",
      name: "Kenstar Mixova 5Y Mixer Grinder - Green",
      image: "kenstar/IXOVA 5Y MIXOVA 5Y 750W green.png",
      color: "Green",
      jars: "1.5L liquid stainless-steel jar with handle, 1L dry stainless-steel jar, 0.4L chutney jar",
      features: ["Three jars for multiple functions", "See-through lid with easy-pour cap", "Overload protection", "Shockproof ABS body"]
    },
    {
      id: "kenstar-mixova-2y-indigo-blue",
      name: "Kenstar Mixova 2Y Mixer Grinder - Indigo Blue",
      image: "kenstar/MIXOVA 2Y MIXOVA 2Y 750W blue.png",
      color: "Indigo Blue",
      jars: "Not specified",
      features: []
    }
  ].map(({ id, name, image, color, jars, features }) => ({
    id,
    type: "Mixer Grinder",
    name,
    image,
    description: `750W Kenstar Mixova mixer grinder in ${color}.`,
    features,
    specs: {
      Power: "750W",
      Colour: color,
      Jars: jars,
      "Warranty designation": name.includes("5Y") ? "5Y" : "2Y",
      ...(name.includes("5Y")
        ? { "Motor warranty": "5 years", "Product warranty": "2 years" }
        : {})
    },
    sku: id.replace("kenstar-", "KST-").toUpperCase()
  })),
  ...[
    {
      id: "kenstar-karishmatic-5y-black-peach",
      name: "Kenstar Karishmatic 5Y Mixer Grinder - Black & Peach",
      image: "kenstar/KARISHMATIC 5Y KARISHMATIC 5Y 500W pink.png",
      color: "Black & Peach",
      motor: "Standard",
      warranty: "5 years"
    },
    {
      id: "kenstar-karishmatic-starry-black",
      name: "Kenstar Karishmatic Mixer Grinder - Starry Black",
      image: "kenstar/KARISHMATIC KARISHMATIC 500W black red.png",
      color: "Starry Black",
      motor: "Standard",
      warranty: "Not specified"
    },
    {
      id: "kenstar-karishmatic-power-plus-wine-red",
      name: "Kenstar Karishmatic Power Plus Mixer Grinder - Wine Red",
      image: "kenstar/KARISHMATIC KARISHMATIC 500W wine red.png",
      color: "Wine Red",
      motor: "Power Plus Turbo",
      warranty: "2 years"
    }
  ].map(({ id, name, image, color, motor, warranty }) => ({
    id,
    type: "Mixer Grinder",
    name,
    image,
    description: `500W Kenstar Karishmatic mixer grinder in ${color}.`,
    features: [
      "Three jars for multiple functions",
      "Easy-to-use knob",
      "1.25L stainless-steel liquidiser jar with handle",
      "0.8L dry/wet stainless-steel jar",
      "0.4L chutney jar",
      "Firm-grip vacuum feet for skid-proof operation",
      "Overload protection and shockproof ABS body",
      ...(motor === "Power Plus Turbo"
        ? ["Power Plus Turbo motor", "Tough-grade stainless-steel jars", "Ultra-precision heavy-duty SS Ultima blades"]
        : [])
    ],
    specs: {
      Power: "500W",
      Colour: color,
      Motor: motor,
      Jars: "3",
      "Motor warranty": warranty,
      ...(motor === "Power Plus Turbo" ? { "Product warranty": "2 years" } : {})
    },
    sku: id.replace("kenstar-", "KST-").toUpperCase()
  })),
  {
    id: "kenstar-choppe-pro",
    type: "Manual Chopper",
    name: "Kenstar Choppe Pro Manual Chopper",
    image: "kenstar/CHOPPE PRO.png",
    description: "Kenstar Choppe Pro manual chopper with a 1000ml bowl and precision stainless-steel blades.",
    features: [
      "1000ml capacity bowl",
      "Anti-skid base",
      "Six high-precision stainless-steel blades",
      "Instant whipping accessory"
    ],
    specs: { Capacity: "1000ml" },
    sku: "KST-CHOPPE-PRO"
  },
  {
    id: "kenstar-pulsar-wet-grinder",
    type: "Wet Mixer Grinder",
    name: "Kenstar Pulsar Wet Grinder",
    image: "kenstar/PULSAR O 150W.png",
    description: "150W Kenstar Pulsar wet grinder with a 2L drum and precision stone grinding.",
    features: [
      "Uniform precision stone grinding",
      "Coconut scraper and atta kneader attachments",
      "Unbreakable PC lid",
      "Ventilated body to increase motor life",
      "Shockproof ABS body"
    ],
    specs: { Power: "150W", "Drum capacity": "2L" },
    sku: "KST-PULSAR-WET-GRINDER"
  },
  ...[
    {
      id: "kenstar-turbocook-28l",
      name: "Kenstar Turbocook Air Fryer Oven",
      image: "kenstar/TURBOCOOK TURBOCOOK 28L CAPACITY.png",
      capacity: "28L",
      power: "2400W",
      features: [
        "480-minute extended timer",
        "Digital LED control panel",
        "Turbo Air Technology and smart preset menu options",
        "Adjustable fan speed and 60°C-230°C temperature range",
        "Three-level cooking system and interior viewing light",
        "Double-layer glass doors and premium coated SPCC body",
        "Includes baking tray, wire rack, and air fry basket"
      ]
    },
    {
      id: "kenstar-maxicook-24l",
      name: "Kenstar Maxicook Air Fryer Oven",
      image: "kenstar/MAXICOOK MAXICOOK 24L CAPACITY.png",
      capacity: "24L",
      power: "",
      features: []
    },
    {
      id: "kenstar-aerocook-8l",
      name: "Kenstar Aerocook Air Fryer",
      image: "kenstar/AEROCOOK 8L CAPACITY.png",
      capacity: "8L",
      power: "800W",
      features: [
        "60-minute timer and manual control panel",
        "Healthy low-oil cooking with Turbo Air Technology",
        "Auto shut-off and thermal fuse protection",
        "Temperature range up to 250°C",
        "Non-stick interior cavity and chamber light",
        "Multi-function cooking and even heat distribution"
      ]
    },
    {
      id: "kenstar-duocrunch-iq-12l",
      name: "Kenstar DuoCrunch IQ Dual Basket Air Fryer",
      image: "kenstar/DUOCRUNCH IQ 12L CAPACITY.png",
      capacity: "12L",
      power: "2800W",
      features: [
        "Dual basket capacity and dual drawer design",
        "80°C-200°C temperature range",
        "Premium metal cooking chamber",
        "Viewing windows on both drawers",
        "Non-stick coated trays and pans",
        "Ready bell notification and enhanced safety features"
      ]
    },
    {
      id: "kenstar-twincrunch-12l",
      name: "Kenstar TwinCrunch Dual Basket Air Fryer",
      image: "kenstar/TWINCRUNCH 12L CAPACITY.png",
      capacity: "12L",
      power: "1700W",
      features: [
        "Extra-large dual basket with independent cooking zones",
        "80°C-200°C temperature range",
        "Viewing window design",
        "Auto pause and resume function",
        "Premium metal interior cavity and non-stick coated baskets"
      ]
    },
    {
      id: "kenstar-flipcook-5l",
      name: "Kenstar Flipcook Air Fryer & Grill",
      image: "kenstar/FLIPCOOK 5L CAPACITY.png",
      capacity: "5L",
      power: "1200W",
      features: [
        "2-in-1 air fryer and grill with 180° flip design",
        "40°C-200°C temperature range",
        "Instant grill conversion and removable non-stick grill pan",
        "360° viewing experience",
        "Safety switch and overheat protection"
      ]
    },
    {
      id: "kenstar-neo-iq",
      name: "Kenstar Neo IQ Air Fryer",
      image: "kenstar/NEO IQ 5L3.5L CAPACITY.png",
      capacity: "5L / 3.5L",
      power: "1350W",
      features: [
        "Transparent glass basket and borosilicate glass bowl",
        "Digital touch controls and smart preset menu options",
        "Turbo Air Technology and healthy low-oil cooking",
        "Cool-touch handle and overheat protection",
        "Compact design with easy-to-clean glass basket"
      ]
    },
    {
      id: "kenstar-airvision-5l",
      name: "Kenstar Airvision Air Fryer",
      image: "kenstar/AIRVISION 5L CAPACITY.png",
      capacity: "5L",
      power: "1500W",
      features: [
        "Dual-capacity glass cooking system with borosilicate glass bowl",
        "Extended digital timer from 1 minute to 15 hours",
        "Digital touch controls and smart preset menu options",
        "Turbo Air Technology and dehydration function",
        "LFGB-certified non-stick food rack",
        "Overheat protection and cool-touch housing and handle"
      ]
    },
    {
      id: "kenstar-crysta-digi-6l",
      name: "Kenstar Crysta Digi Air Fryer",
      image: "kenstar/CRYSTA DIGI 6L CAPACITY.png",
      capacity: "6L",
      power: "1400W",
      features: [
        "Auto off and thermal fuse for safety",
        "Cool-touch handle",
        "Non-stick interior and cooking pan",
        "Temperature range up to 200°C"
      ]
    },
    {
      id: "kenstar-opal-digiview-4-5l",
      name: "Kenstar Opal Digiview Air Fryer",
      image: "kenstar/OPAL DIGIVIEW 4.5L CAPACITY.png",
      capacity: "4.5L",
      power: "1300W",
      features: [
        "Auto off and 80°C-200°C temperature range",
        "60-minute timer and digital touch control panel",
        "Turbo Air Technology and smart preset menu options",
        "Non-stick cooking basket and compact modern design",
        "Cool-touch handle"
      ]
    }
  ].map(({ id, name, image, capacity, power, features }) => ({
    id,
    type: "Air Fryers",
    name,
    image,
    description: `Kenstar ${name.replace("Kenstar ", "")} with ${capacity} capacity.`,
    features,
    specs: { Capacity: capacity, ...(power ? { Power: power } : {}) },
    sku: id.replace("kenstar-", "KST-").toUpperCase()
  })),
  ...[
    {
      id: "kenstar-snacky-pro-4l-starry-black",
      name: "Kenstar Snacky Pro Air Fryer (4L, Starry Black)",
      image: "kenstar/SNACKY PRO Air Fryer 4L CAPACITY.png",
      color: "Starry Black",
      capacity: "4L",
      power: "1300W",
      features: ["80°C-200°C temperature range", "Dual knob operation", "Non-stick fry basket", "Auto shut-off", "Stable anti-slip base"]
    },
    {
      id: "kenstar-snacky-pro-4l-rose-gold",
      name: "Kenstar Snacky Pro Air Fryer (4L, Rose Gold)",
      image: "kenstar/SNACKY PRO Air Fryer 4L CAPACITY rose pink.png",
      color: "Rose Gold",
      capacity: "4L",
      power: "1300W",
      features: ["80°C-200°C temperature range", "Dual knob operation", "Non-stick fry basket", "Auto shut-off", "Stable anti-slip base"]
    },
    {
      id: "kenstar-snacky-pro-4l-navy-blue",
      name: "Kenstar Snacky Pro Air Fryer (4L, Navy Blue)",
      image: "kenstar/SNACKY PRO Air Fryer 4L CAPACITY blue.png",
      color: "Navy Blue",
      capacity: "4L",
      power: "1300W",
      features: ["80°C-200°C temperature range", "Dual knob operation", "Non-stick fry basket", "Auto shut-off", "Stable anti-slip base"]
    },
    {
      id: "kenstar-snacky-3l-starry-black",
      name: "Kenstar Snacky Air Fryer (3L, Starry Black)",
      image: "kenstar/Screenshot 2026-11-01 233818.png",
      color: "Starry Black",
      capacity: "3L",
      power: "900W",
      features: ["Space-saving design", "Easy-to-use knob controls", "Non-stick fry basket", "Auto shut-off", "Lightweight and portable"]
    },
    {
      id: "kenstar-snacky-3l-ocean-blue",
      name: "Kenstar Snacky Air Fryer (3L, Ocean Blue)",
      image: "kenstar/Screenshot 2026-11-01 233825.png",
      color: "Ocean Blue",
      capacity: "3L",
      power: "900W",
      features: ["Space-saving design", "Easy-to-use knob controls", "Non-stick fry basket", "Auto shut-off", "Lightweight and portable"]
    },
    {
      id: "kenstar-snacky-3l-wine-red",
      name: "Kenstar Snacky Air Fryer (3L, Wine Red)",
      image: "kenstar/Screenshot 2026-11-01 233831.png",
      color: "Wine Red",
      capacity: "3L",
      power: "900W",
      features: ["Space-saving design", "Easy-to-use knob controls", "Non-stick fry basket", "Auto shut-off", "Lightweight and portable"]
    }
  ].map(({ id, name, image, color, capacity, power, features }) => ({
    id,
    type: "Air Fryers",
    name,
    image,
    description: `Kenstar Snacky ${capacity} air fryer in ${color}.`,
    features,
    specs: { Capacity: capacity, Power: power, Colour: color, "Timer": "60 minutes" },
    sku: id.replace("kenstar-", "KST-").toUpperCase()
  })),
  ...KENSTAR_PAGE_ADDITIONS
]);

const PHILIPS_MODELS: [name: string, type: string, model: string, mrp: number, page: string, image: string][] = [
  ["Party Speaker", "Party Speakers", "TAX4900", 20999, "3", "party-speaker.jpg"],
  ["Tower Speaker", "Tower Speakers", "TAX2208", 5490, "4", "tower-speaker.jpg"],
  ["Multimedia Speaker 5.1", "Multimedia Speakers", "MMS5634", 9999, "6", "multimedia-speaker.jpg"],
  ["Multimedia Speaker 2.1", "Multimedia Speakers", "MMS2634", 7999, "7", "multimedia-speaker.jpg"],
  ["Soundbar", "Soundbars", "TAB4330", 20990, "9", "soundbar.jpg"],
  ["Soundbar", "Soundbars", "TAB4120", 3999, "10", "soundbar.jpg"],
  ["Bluetooth Speaker (New)", "Bluetooth Speakers", "TAS3400", 5999, "13", "bluetooth-speaker.jpg"],
  ["Bluetooth Speaker (New)", "Bluetooth Speakers", "TAS1400", 2599, "14", "bluetooth-speaker.jpg"],
  ["Radio", "Radios", "RL384", 2199, "15", "radio.jpg"],
  ["Radio", "Radios", "RL118", 2099, "16", "radio.jpg"],
  ["Radio", "Radios", "DL167", 1499, "17", "radio.jpg"],
  ["Radio", "Radios", "RL191", 1399, "18", "radio.jpg"]
];

const PHILIPS_PRODUCTS: Product[] = PHILIPS_MODELS.map(([name, type, model, mrp, page, image]) => ({
  id: `philips-${model.toLowerCase()}`,
  category: "philips",
  type,
  name: `Philips ${name} ${model}`,
  mrp,
  reviewsCount: "",
  rating: 0,
  image: `philips/${image}`,
  fallbackImage: `philips/${image}`,
  tag: "PHILIPS",
  description: `Philips ${name}.`,
  features: [],
  specs: { "Model number": model, "Catalogue page": page },
  sku: model
}));

export const PRODUCTS: Product[] = [
  {
    id: "solara-electric-kettle-1-8l",
    category: "solara",
    type: "Electric Kettles",
    name: "SOLARA Electric Kettle (1.8L)",
    reviewsCount: "",
    rating: 0,
    image: "solara/solara_kettle.jpg",
    fallbackImage: "solara/solara_kettle.jpg",
    tag: "SOLARA",
    description: "SOLARA electric kettle with a 1.8L capacity.",
    features: [],
    specs: { Capacity: "1.8L" },
    subtitle: "1.8L Capacity"
  },
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
    id: "solara-air-fryer-6-3l",
    category: "solara",
    type: "Air Fryers",
    name: "SOLARA Air Fryer (6.3L)",
    reviewsCount: "",
    rating: 0,
    image: "solara/air-fryer6.3.jpg",
    fallbackImage: "solara/air-fryer6.3.jpg",
    tag: "SOLARA",
    description: "SOLARA 6.3L air fryer with a viewing window and digital touch controls, sized for family meals.",
    features: ["6.3L capacity", "Front viewing window", "Digital touch controls"],
    specs: { Capacity: "6.3L" },
    subtitle: "6.3L Capacity"
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
  ),
  ...PHILIPS_PRODUCTS,
  ...WIPRO_CATALOG_PRODUCTS,
  {
    id: "wipro-jade-table-lamp-e10022",
    category: "wipro",
    type: "Table Lamps",
    name: "WIPRO JADE TABLE LAMP",
    reviewsCount: "",
    rating: 0,
    image: "wipro/E10022 WIPRO JADE TABLE LAMP.png",
    fallbackImage: "wipro/E10022 WIPRO JADE TABLE LAMP.png",
    tag: "WIPRO",
    description: "Wipro Jade rechargeable table lamp with three lighting modes.",
    features: [
      "Three lighting modes: cool white, neutral white, and warm white",
      "1200 mAh battery",
      "1.5-hour charging time",
      "5W wattage",
      "USB Type-C charging",
      "Up to 2 hours operating time"
    ],
    specs: {
      "Catalogue number": "E10022",
      "Rated voltage": "DC 5V",
      Charging: "USB Type-C",
      Dimensions: "Ø 100 x 380 mm",
      "Case lot": "30"
    },
    sku: "E10022"
  },
  ...WIPRO_LIGHTING_PRODUCTS,
  ...WIPRO_SMART_HOME_PRODUCTS,
  ...KENSTAR_PRODUCTS
];
