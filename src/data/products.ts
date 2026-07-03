export interface Product {
  id: string;
  category: string;
  type: string; // "Ceiling Fans" | "Table Fans" | "Exhaust Fans" | "BLDC Fans"
  name: string;
  price: number;
  mrp: number;
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
}

export const PRODUCTS: Product[] = [
  // --- CEILING FANS ---
  {
    id: "fan-ceiling-1",
    category: "Fans",
    type: "Ceiling Fans",
    name: "Premium Ceiling Fan",
    price: 1990,
    mrp: 2690,
    reviewsCount: "24 REVIEWS",
    rating: 4.6,
    image: "prod_fan_ceiling_1.webp",
    fallbackImage: "prod_fan_ceiling_1.webp",
    tag: " ",
    description: "Enjoy high-speed air delivery with Ceiling Fan. Designed with wider blades and a powerful copper motor for maximum air circulation across large rooms.",
    features: [
      "High air delivery of 220 CMM",
      "Wider blade design for superior breeze spread",
      "100% copper-wound motor for durable performance",
      "Double ball bearings ensuring low noise operation"
    ],
    specs: {

    }
  },
  {
    id: "fan-ceiling-2",
    category: "Fans",
    type: "Ceiling Fans",
    name: "Decorative Ceiling Fan",
    price: 2490,
    mrp: 3490,
    reviewsCount: "16 REVIEWS",
    rating: 4.7,
    image: "prod_fan_ceiling_2.webp",
    fallbackImage: "prod_fan_ceiling_2.webp",
    tag: " ",
    description: "Add elegance to your living spaces with the Decorative Ceiling Fan. Features a premium metallic finish with elegant gold trims and high-performance blades.",
    features: [
      "Premium metallic powder-coated finish for long-lasting shine",
      "Elegant decorative ring and trim designs",
      "Optimal performance even at low voltages",
      "Dust-resistant blade coating for easy maintenance"
    ],
    specs: {

    }
  },

  // --- TABLE FANS ---
  {
    id: "fan-table-1",
    category: "Fans",
    type: "Table Fans",
    name: "High Speed Table Fan",
    price: 1890,
    mrp: 2590,
    reviewsCount: "32 REVIEWS",
    rating: 4.5,
    image: "prod_fan_table_1.webp",
    fallbackImage: "prod_fan_table_1.webp",
    tag: " ",
    description: "Stay cool anywhere with the portable Windy Table Fan. Features uniform oscillation, jerk-free speed control, and strong protective mesh grill.",
    features: [
      "High-speed motor for instant and powerful personal cooling",
      "Smooth 90-degree wide oscillation sweep",
      "Built-in thermal overload protector for motor safety",
      "Indexable tilt mechanism for custom airflow direction"
    ],
    specs: {

    }
  },
  {
    id: "fan-table-2",
    category: "Fans",
    type: "Table Fans",
    name: "Portable Table Fan",
    price: 2190,
    mrp: 2990,
    reviewsCount: "14 REVIEWS",
    rating: 4.8,
    image: "prod_fan_table_2.webp",
    fallbackImage: "prod_fan_table_2.webp",
    tag: " ",
    description: "Designed for whisper-quiet yet strong breeze, the Maxx Cool Table Fan features aerodynamically balanced blades and a highly durable copper motor.",
    features: [
      "Aerodynamically balanced blades for high speed and silent delivery",
      "Elegant ergonomic body with soft-touch buttons",
      "Strong and heavy base for complete stability",
      "Full-copper high-thrust motor with low power draw"
    ],
    specs: {

    }
  },

  // --- EXHAUST FANS ---
  {
    id: "fan-exhaust-1",
    category: "Fans",
    type: "Exhaust Fans",
    name: "Ventilation Exhaust Fan",
    price: 1190,
    mrp: 1690,
    reviewsCount: "42 REVIEWS",
    rating: 4.6,
    image: "prod_fan_exhaust_1.webp",
    fallbackImage: "prod_fan_exhaust_1.webp",
    tag: " ",
    description: "Effectively remove odors, moisture, and stale air with the Fresh Air Exhaust Fan. Ideal for kitchens, bathrooms, and closed cabins.",
    features: [
      "Rust-proof plastic body and fan blades for humid environments",
      "Lightweight compact structure for quick wall installation",
      "Silent operations with gravity shutters to prevent dust ingress",
      "Highly efficient motor with low power overhead"
    ],
    specs: {

    }
  },
  {
    id: "fan-exhaust-2",
    category: "Fans",
    type: "Exhaust Fans",
    name: "High-Performance Exhaust Fan",
    price: 1490,
    mrp: 1990,
    reviewsCount: "28 REVIEWS",
    rating: 4.7,
    image: "prod_fan_exhaust_2.jpg",
    fallbackImage: "prod_fan_exhaust_2.jpg",
    tag: " ",
    description: "Keep your spaces clean and smoke-free with the heavy-duty Turbovent Exhaust Fan. Built with robust metal blades and a thermal overload protector.",
    features: [
      "All-metal construction with epoxy powder coating for rust resistance",
      "High suction capacity for immediate smoke/odor extraction",
      "Dynamically balanced metal blades for vibrations-free runs",
      "Thermal Overload Protector (TOP) safeguards against voltage surges"
    ],
    specs: {

    }
  },

  // --- BLDC FANS ---
  {
    id: "fan-bldc-1",
    category: "Fans",
    type: "BLDC Fans",
    name: "BLDC Ceiling Fan",
    price: 2990,
    mrp: 3990,
    reviewsCount: "18 REVIEWS",
    rating: 5.0,
    image: "prod_fan_bldc_1.webp",
    fallbackImage: "prod_fan_bldc_1.webp",
    tag: " ",
    description: "Experience smart, energy-saving cooling with the BLDC Ceiling Fan. Equipped with a brushless DC motor, it consumes up to 60% less electricity than standard induction fans while delivering high air thrust.",
    features: [
      "Brushless DC (BLDC) energy-efficient motor (28W)",
      "Smart remote control with speed control, sleep mode, and timer",
      "Aerodynamically balanced blades for noise-free high-speed performance",
      "Elegant metallic finish with double ball bearings"
    ],
    specs: {

    }
  },
  {
    id: "fan-bldc-2",
    category: "Fans",
    type: "BLDC Fans",
    name: "BLDC Ceiling Fan",
    price: 3290,
    mrp: 4490,
    reviewsCount: "35 REVIEWS",
    rating: 4.9,
    image: "prod_fan_bldc_2.avif",
    fallbackImage: "prod_fan_bldc_2.avif",
    tag: " ",
    description: "Maximize energy savings and convenience with the BLDC Fan. Includes intelligent sleep modes, speed boosters, and multi-functional smart remote.",
    features: [
      "High energy efficiency with 5-Star rated performance (only 26W)",
      "Advanced intelligent remote control with 1-8 hour timers",
      "Boost speed mode for rapid room cooling",
      "Operates seamlessly across a wide voltage range without speed drops"
    ],
    specs: {

    }
  },
  // COOLERS
  {
    id: "cooler-1",
    category: "Coolers",
    type:"Desert Coolers",
    name: "Honey Comb Cooler",
    price: 11990,
    mrp: 19490,
    reviewsCount: "24 reviews",
    rating: 5,
    image: "arc_3d_50.webp",
    fallbackImage: "arc_3d_50.web",
    tag: " ",
    description: "Compact Yet Efficient – The Honey Comb Air Cooler, ensuring continuous cooling in small to medium-sized spaces.It features a collapsible louver for added convenience, making it perfect for bedrooms, offices, and other compact spaces.",
    features: [
      "Compact Yet Efficient – The Honey Comb Air Cooler, ensuring continuous cooling in small to medium-sized spaces.",
      "Enhanced Cooling Technology – Designed with three-side hydro dense mesh honeycomb cooling pads, it improves water retention for prolonged cooling performance.",
      "Energy-Efficient Motor – Powered by advanced technology, it delivers superior cooling, ensuring cost-effective operation.",
      "Customizable Air Throw – Equipped, it allows you to adjust airflow based on your cooling needs.",
      "Smart & Space-Saving Design – Standing at 1360 mm, it features a collapsible louver for added convenience, making it perfect for bedrooms, offices, and other compact spaces."
    ],
    specs: {

    },
  },
  {
  id: "cooler-4",
  category: "Coolers",
  type: "Desert Cooler",
  name: "Desert Cooler",
  price: 9990,
  mrp: 16990,
  reviewsCount: "8 REVIEWS",
  rating: 4.7,
  image: "turbocool_xl_50.png",
  fallbackImage: "turbocool_xl_50.png",
  tag: " ",
  description: "Stay cool and comfortable with this Desert Cooler. Designed to deliver efficient cooling with reliable performance, making it an ideal choice for homes and workspaces.",
  features: [
    "Powerful cooling performance for everyday comfort",
    "Efficient cooling technology for enhanced airflow",
    "Energy-efficient operation for regular use",
    "High-performance fan for better air circulation",
    "Adjustable airflow for personalized cooling",
    "Convenient design for improved cooling experience",
    "Durable construction for long-lasting performance"
  ],
  specs: {

  }
},
  {
  id: "cooler-3",
  category: "Coolers",
  type: "Personal Cooler",
  name: "Personal Cooler",
  price: 6690,
  mrp: 11690,
  reviewsCount: "9 REVIEWS",
  rating: 4.6,
  image: "tallde_45.webp",
  fallbackImage: "tallde_45.webp",
  tag: " ",
  description: "Stay cool and comfortable with this Personal Cooler. Designed to provide efficient cooling with reliable performance, making it ideal for homes, offices, and personal spaces.",
  features: [
    "Efficient cooling performance for everyday comfort",
    "Energy-efficient operation for regular use",
    "Powerful airflow for consistent cooling",
    "Smooth and adjustable airflow for personalized comfort",
    "Convenient design for an enhanced cooling experience",
    "Reliable performance for uninterrupted operation",
    "Durable construction for long-lasting use"
  ],
  specs: {

  }
},
// KITCHEN APPLIANCES
  {
  id: "kitchen-1",
  category: "Kitchen Appliances",
  type: "Mixer",
  name: "3 Jar Mixer Grinder",
  price: 2350,
  mrp: 4490,
  reviewsCount: "12 REVIEWS",
  rating: 4.6,
  image: "karishmatic_wine_red_500w.webp",
  fallbackImage: "karishmatic_wine_red_500w.webp",
  tag: " ",
  description: "Prepare your favorite recipes with ease using this Mixer Grinder. Designed for everyday kitchen tasks, it offers reliable performance for grinding, blending, and mixing ingredients.",
  features: [
    "Powerful performance for everyday food preparation",
    "Suitable for grinding, blending, and mixing a variety of ingredients",
    "Multiple jars for versatile kitchen needs",
    "Efficient blades for smooth and consistent results",
    "Durable construction for long-lasting use",
    "Enhanced safety features for reliable operation",
    "Designed for convenient and hassle-free everyday use"
  ],
  specs: {

  }
},
{
  id: "kitchen-2",
  category: "Kitchen Appliances",
  type: "Hand Blender",
  name: "Hand Blender",
  price: 2035,
  mrp: 3690,
  reviewsCount: "12 REVIEWS",
  rating: 4.6,
  image: "spinza_400w_hand_blender.webp",
  fallbackImage: "spinza_400w_hand_blender.webp",
  tag: " ",
  description: "Make everyday food preparation simple with this Hand Blender. Designed for quick and convenient blending, it delivers reliable performance for a variety of kitchen tasks.",
  features: [
    "Powerful performance for everyday blending needs",
    "Efficient blending for smooth and consistent results",
    "Comfortable and easy-to-hold ergonomic design",
    "Easy to clean and maintain",
    "Durable construction for long-lasting use",
    "Reliable performance for daily kitchen tasks",
    "Designed for convenient and hassle-free operation"
  ],
  specs: {

  }

},
{
  id: "kitchen-13",
  category: "Kitchen Appliances",
  type: "Juicer",
  name: "Juicer",
  price: 2700,
  mrp: 4790,
  reviewsCount: "14 REVIEWS",
  rating: 4.7,
  image: "nutriv_juicer_500w.jpg",
  fallbackImage: "nutriv_juicer_500w.jpg",
  tag: " ",
  description: "Enjoy fresh and healthy juices with this Juicer. Designed for efficient juice extraction, it offers reliable performance and everyday convenience for your kitchen.",
  features: [
    "Powerful performance for efficient juicing",
    "Designed for smooth and consistent juice extraction",
    "Durable construction for long-lasting use",
    "Convenient design for easy and mess-free operation",
    "Enhanced safety features for reliable performance",
    "Stable and user-friendly operation",
    "Ideal for everyday kitchen use"
  ],
  specs: {

  }
},
{
  id: "kitchen-14",
  category: "Kitchen Appliances",
  type: "Mixer Grinder",
  name: "Mixer Grinder",
  price: 6800,
  mrp: 10990,
  reviewsCount: "15 REVIEWS",
  rating: 4.9,
  image: "jetmix_1000w.webp",
  fallbackImage: "jetmix_1000w.webp",
  tag: " ",
  description: "Simplify your everyday cooking with this Mixer Grinder. Designed for efficient grinding, blending, and mixing, it delivers reliable performance for a variety of kitchen tasks.",
  features: [
    "Powerful performance for everyday food preparation",
    "Suitable for grinding, blending, and mixing a variety of ingredients",
    "Multiple jars for versatile kitchen needs",
    "Efficient blades for smooth and consistent results",
    "Durable construction for long-lasting use",
    "Convenient and user-friendly design for daily use",
    "Reliable performance for hassle-free cooking"
  ],
  specs: {

  }
},
{
  id: "kitchen-15",
  category: "Kitchen Appliances",
  type: "Wet Mixer Grinder",
  name: "Wet Mixer Grinder",
  price: 4895,
  mrp: 9290,
  reviewsCount: "50 REVIEWS",
  rating: 4.9,
  image: "pulsar_pro_150w.webp",
  fallbackImage: "pulsar_pro_150w.webp",
  tag: " ",
  description: "Prepare your favorite recipes with ease using this Wet Mixer Grinder. Designed for efficient wet grinding and everyday food preparation, it offers reliable performance for a variety of kitchen needs.",
  features: [
    "Powerful performance for efficient wet grinding",
    "Spacious design for convenient food preparation",
    "Durable construction for long-lasting use",
    "Efficient operation for smooth and consistent results",
    "Versatile functionality for a variety of kitchen tasks",
    "User-friendly design for everyday convenience",
    "Reliable performance for daily use"
  ],
  specs: {

  }
},
{
  id: "kitchen-17",
  category: "Kitchen Appliances",
  type: "Air Fryer",
  name: "Air Fryer",
  price: 4150,
  mrp: 7990,
  reviewsCount: "15 REVIEWS",
  rating: 4.7,
  image: "opal_neo_4_5l.webp",
  fallbackImage: "opal_neo_4_5l.webp",
  tag: " ",
  description: "Enjoy delicious meals with this Air Fryer. Designed for convenient and healthier cooking, it delivers reliable performance for preparing a variety of everyday dishes.",
  features: [
    "Efficient cooking performance for everyday meals",
    "Spacious design suitable for a variety of recipes",
    "Easy-to-use controls for convenient operation",
    "Non-stick cooking surface for hassle-free cleaning",
    "Multiple cooking options for versatile meal preparation",
    "Enhanced safety features for reliable use",
    "Designed for quick and convenient everyday cooking"
  ],
  specs: {

  }
},
{
  id: "kitchen-19",
  category: "Kitchen Appliances",
  type: "Electric Kettle",
  name: "Electric Kettle",
  price: 650,
  mrp: 1390,
  reviewsCount: "12 REVIEWS",
  rating: 4.7,
  image: "stylee_1_8l_kettle.webp",
  fallbackImage: "stylee_1_8l_kettle.webp",
  tag: " ",
  description: "Boil water quickly and conveniently with this Electric Kettle. Designed for everyday use, it is perfect for preparing hot beverages and a variety of kitchen needs.",
  features: [
    "Fast and efficient boiling performance",
    "Spacious design for everyday convenience",
    "Durable construction for long-lasting use",
    "Easy-to-use design for hassle-free operation",
    "Convenient cordless handling for comfortable use",
    "Enhanced safety features for reliable operation",
    "Ideal for preparing hot beverages and everyday kitchen tasks"
  ],
  specs: {

  }
},
{
  id: "kitchen-27",
  category: "Kitchen Appliances",
  type: "Microwave",
  name: "Microwave",
  price: 8225,
  mrp: 14990,
  reviewsCount: "25 REVIEWS",
  rating: 4.8,
  image: "solo_20l_microwave.webp",
  fallbackImage: "solo_20l_microwave.webp",
  tag: " ",
  description: "Make everyday cooking simple with this Microwave. Designed for convenient cooking, reheating, and defrosting, it delivers reliable performance for a variety of kitchen tasks.",
  features: [
    "Efficient heating for everyday cooking needs",
    "Suitable for cooking, reheating, and defrosting food",
    "Easy-to-use controls for convenient operation",
    "Multiple cooking settings for versatile use",
    "Reliable and consistent performance",
    "Durable construction for everyday use",
    "Designed for quick and hassle-free meal preparation"
  ],
  specs: {

  }
},
{
  id: "kitchen-34",
  category: "Kitchen Appliances",
  type: "OTG",
  name: "OTG",
  price: 3350,
  mrp: 5990,
  reviewsCount: "12 REVIEWS",
  rating: 4.7,
  image: "durachef_otg_10l.jpg",
  fallbackImage: "durachef_otg_10l.jpg",
  tag: " ",
  description: "Bake, grill, and toast your favorite dishes with this OTG. Designed for everyday cooking, it offers reliable performance and convenient operation for a variety of recipes.",
  features: [
    "Efficient performance for baking, grilling, and toasting",
    "Compact design suitable for everyday kitchen use",
    "Adjustable cooking settings for versatile meal preparation",
    "Even heat distribution for consistent cooking results",
    "Easy-to-use controls for convenient operation",
    "Reliable performance for daily cooking needs",
    "Durable construction for long-lasting use"
  ],
  specs: {

  }
},
{
  id: "kitchen-22",
  category: "Kitchen Appliances",
  type: "Rice Cooker",
  name: "Rice Cooker",
  price: 2400,
  mrp: 4290,
  reviewsCount: "23 REVIEWS",
  rating: 4.7,
  image: "my_cook_1_8l_rice_cooker.webp",
  fallbackImage: "my_cook_1_8l_rice_cooker.webp",
  tag: " ",
  description: "Cook delicious rice effortlessly with this Rice Cooker. Designed for convenient everyday cooking, it delivers reliable performance and makes meal preparation simple.",
  features: [
    "Efficient cooking performance for everyday meals",
    "Spacious design suitable for family cooking",
    "Automatic cooking and warming for added convenience",
    "Versatile functionality for a variety of cooking needs",
    "Easy-to-use controls for hassle-free operation",
    "Reliable performance for daily use",
    "Durable construction for long-lasting use"
  ],
  specs: {

  }
},
{
  id: "kitchen-26",
  category: "Kitchen Appliances",
  type: "Sandwich Maker",
  name: "Sandwich Maker",
  price: 1300,
  mrp: 2390,
  reviewsCount: "15 REVIEWS",
  rating: 4.7,
  image: "ezy_grill_sandwich_maker.webp",
  fallbackImage: "ezy_grill_sandwich_maker.webp",
  tag: " ",
  description: "Prepare delicious grilled sandwiches with this Sandwich Maker. Designed for quick and convenient cooking, it offers reliable performance for everyday snacks and meals.",
  features: [
    "Fast and efficient grilling performance",
    "Non-stick cooking plates for easy food release and cleaning",
    "Safe and convenient operation for everyday use",
    "Compact design for easy storage",
    "Simple controls with easy-to-read indicators",
    "Reliable performance for daily meal preparation",
    "Durable construction for long-lasting use"
  ],
  specs: {

  }
},
{
  id: "kitchen-36",
  category: "Kitchen Appliances",
  type: "Toaster",
  name: "Toaster",
  price: 5450,
  mrp: 9490,
  reviewsCount: "15 REVIEWS",
  rating: 4.8,
  image: "durachef_otg_23l.webp",
  fallbackImage: "durachef_otg_23l.webp",
  tag: " ",
  description: "Prepare a variety of delicious meals with this Toaster. Designed for convenient everyday cooking, it offers reliable performance for baking, grilling, roasting, and toasting.",
  features: [
    "Efficient performance for everyday cooking tasks",
    "Suitable for baking, grilling, roasting, and toasting",
    "Adjustable cooking settings for versatile meal preparation",
    "Even heating for consistent cooking results",
    "Easy-to-use controls for convenient operation",
    "Includes useful accessories for added convenience",
    "Durable construction for long-lasting performance"
  ],
  specs: {

  }
},
//home appliances
{
  id: "washing-plastic-7kg-sawm-maroon-white",
  category: "Home Appliances",
  type: "Washing Machine",
  name: "Washing Machine",
  price: 8490,
  mrp: 16990,
  reviewsCount: "14 REVIEWS",
  rating: 4.7,
  image: "plastic_7kg_sawm_maroon_white.webp",
  fallbackImage: "plastic_7kg_sawm_maroon_white.webp",
  tag: " ",
  description: "Make laundry simple and convenient with this Washing Machine. Designed for efficient cleaning and reliable performance, it is ideal for everyday household laundry needs.",
  features: [
    "Efficient washing performance for everyday laundry",
    "Multiple wash options for different fabric types",
    "Powerful cleaning for effective stain removal",
    "Convenient controls for easy operation",
    "Durable construction for long-lasting use",
    "Easy to move and position as needed",
    "Reliable performance for daily household use"
  ],
  specs: {

  }
},
{
  id: "refrigerator-mist-175l-direct-cool",
  category: "Home Appliances",
  type: "Refrigerator",
  name: "Refrigerator",
  price: 13990,
  mrp: 19990,
  reviewsCount: "13 REVIEWS",
  rating: 4.7,
  image: "mist_175l_direct_cool.webp",
  fallbackImage: "mist_175l_direct_cool.webp",
  tag: " ",
  description: "Keep your food fresh and organized with this Refrigerator. Designed for efficient cooling and everyday convenience, it offers reliable performance for modern households.",
  features: [
    "Efficient cooling performance for everyday food storage",
    "Spacious interior for organized storage of groceries",
    "Durable shelves for everyday use",
    "Designed to help maintain freshness and hygiene",
    "Reliable performance for daily household needs",
    "Convenient storage solutions for fruits and vegetables",
    "Built for long-lasting durability"
  ],
  specs: {

  }
},
{
  id: "ac-2ton-inverter-3star",
  category: "Home Appliances",
  type: "Air Conditioners",
  name: "AIR CONDITIONER",
  price: 54833,
  mrp: 64990,
  reviewsCount: "NO REVIEWS",
  rating: 0,
  image: "crop_ac.webp",
  fallbackImage: "crop_ac.webp",
  tag: " ",
  description: "Stay cool and comfortable with this Air Conditioner. Designed for efficient cooling and reliable performance, it provides a comfortable indoor environment for homes and offices.",
  features: [
    "Powerful cooling performance for everyday comfort",
    "Energy-efficient operation for regular use",
    "Uniform airflow for enhanced cooling experience",
    "Durable construction for long-lasting performance",
    "Designed to deliver clean and fresh airflow",
    "Easy-to-use controls for convenient operation",
    "Reliable performance for homes and workspaces"
  ],
  specs: {

  }
},
//steamers
{
  id: "iron-fabrica-1200w-garment-steamer",
  category: "Steamers",
  type: "Garment Steamer",
  name: "Garment Steamer",
  price: 2750,
  mrp: 5390,
  reviewsCount: "25 REVIEWS",
  rating: 4.8,
  image: "fabrica_1200w_garment_steamer.webp",
  fallbackImage: "fabrica_1200w_garment_steamer.webp",
  tag: " ",
  description: "Keep your clothes fresh and wrinkle-free with this Garment Steamer. Designed for quick and convenient garment care, it delivers reliable performance for everyday use at home or while traveling.",
  features: [
    "Efficient steaming for smooth and wrinkle-free garments",
    "Quick heat-up for convenient everyday use",
    "Easy-to-refill water tank for uninterrupted steaming",
    "Even steam distribution for effective garment care",
    "Suitable for both vertical and horizontal steaming",
    "Compact and portable design for easy storage and travel",
    "Reliable performance for everyday garment care"
  ],
  specs: {

  }
},
{
  id: "iron-bigsole-plastic-dry-1000w",
  category: "Steamers",
  type: "Iron",
  name: "Iron",
  price: 700,
  mrp: 1290,
  reviewsCount: "15 REVIEWS",
  rating: 4.8,
  image: "bigsole_plastic_dry_iron_1000w.webp",
  fallbackImage: "bigsole_plastic_dry_iron_1000w.webp",
  tag: " ",
  description: "Keep your clothes neat and wrinkle-free with this Iron. Designed for smooth and efficient ironing, it delivers reliable performance for everyday garment care.",
  features: [
    "Fast and efficient ironing performance",
    "Smooth soleplate for effortless gliding across fabrics",
    "Adjustable temperature settings for different fabric types",
    "Enhanced safety features for reliable operation",
    "Comfortable and easy-to-use ergonomic design",
    "Flexible cord for convenient movement during use",
    "Durable construction for long-lasting performance"
  ],
  specs: {

  }
},
//Heaters
{
  id: "water-heater-star-lux-1500w",
  category: "Water Heaters",
  type: "Immersion Rod",
  name: "Immersion Rod",
  price: 545,
  mrp: 1090,
  reviewsCount: "13 REVIEWS",
  rating: 4.6,
  image: "star_lux_immersion_rod.webp",
  fallbackImage: "star_lux_immersion_rod.webp",
  tag: " ",
  description: "Heat water quickly and conveniently with this Immersion Rod. Designed for safe and reliable everyday use, it provides efficient water heating for various household needs.",
  features: [
    "Fast and efficient water heating performance",
    "Durable construction for long-lasting use",
    "Safe and reliable operation for everyday use",
    "Easy-to-use design for added convenience",
    "Compact and lightweight for easy handling and storage",
    "Enhanced safety features for dependable performance",
    "Ideal for a variety of household water heating needs"
  ],
  specs: {

  }
},
{
  id: "heater-ferno-9-oil-filled-radiator",
  category: "Water Heaters",
  type: "Room Heaters",
  name: "Room Heater",
  price: 8490,
  mrp: 14990,
  reviewsCount: "11 REVIEWS",
  rating: 4.8,
  image: "ferno_9_oil_filled_radiator.webp",
  fallbackImage: "ferno_9_oil_filled_radiator.webp",
  tag: " ",
  description: "Stay warm and comfortable with this Room Heater. Designed to provide efficient and reliable heating, it is ideal for creating a cozy indoor environment during colder days.",
  features: [
    "Efficient heating performance for everyday comfort",
    "Adjustable heating settings for personalized warmth",
    "Uniform heat distribution across the room",
    "Easy to move and position as needed",
    "Enhanced safety features for reliable operation",
    "Convenient design for everyday use",
    "Durable construction for long-lasting performance"
  ],
  specs: {

  }
},
];
