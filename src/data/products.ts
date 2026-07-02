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
    name: "Aero Breeze 1200mm Premium Ceiling Fan",
    price: 1990,
    mrp: 2690,
    reviewsCount: "24 REVIEWS",
    rating: 4.6,
    image: "prod_fan_ceiling_1.webp",
    fallbackImage: "prod_fan_ceiling_1.webp",
    tag: " ",
    description: "Enjoy high-speed air delivery with the Aero Breeze Ceiling Fan. Designed with wider blades and a powerful copper motor for maximum air circulation across large rooms.",
    features: [
      "High air delivery of 220 CMM",
      "Wider blade design for superior breeze spread",
      "100% copper-wound motor for durable performance",
      "Double ball bearings ensuring low noise operation"
    ],
    specs: {
      "Sweep Size": "1200 mm (48 inches)",
      "Power Consumption": "75 Watts",
      "Air Delivery": "220 CMM",
      "Max Speed": "380 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },
  {
    id: "fan-ceiling-2",
    category: "Fans",
    type: "Ceiling Fans",
    name: "Deco Star 1200mm Decorative Ceiling Fan",
    price: 2490,
    mrp: 3490,
    reviewsCount: "16 REVIEWS",
    rating: 4.7,
    image: "prod_fan_ceiling_2.webp",
    fallbackImage: "prod_fan_ceiling_2.webp",
    tag: " ",
    description: "Add elegance to your living spaces with the Deco Star Decorative Ceiling Fan. Features a premium metallic finish with elegant gold trims and high-performance blades.",
    features: [
      "Premium metallic powder-coated finish for long-lasting shine",
      "Elegant decorative ring and trim designs",
      "Optimal performance even at low voltages",
      "Dust-resistant blade coating for easy maintenance"
    ],
    specs: {
      "Sweep Size": "1200 mm (48 inches)",
      "Power Consumption": "78 Watts",
      "Air Delivery": "225 CMM",
      "Max Speed": "375 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },

  // --- TABLE FANS ---
  {
    id: "fan-table-1",
    category: "Fans",
    type: "Table Fans",
    name: "Windy 400mm High Speed Table Fan",
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
      "Sweep Size": "400 mm (16 inches)",
      "Power Consumption": "55 Watts",
      "Air Delivery": "75 CMM",
      "Max Speed": "1350 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },
  {
    id: "fan-table-2",
    category: "Fans",
    type: "Table Fans",
    name: "Maxx Cool 400mm Portable Table Fan",
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
      "Sweep Size": "400 mm (16 inches)",
      "Power Consumption": "58 Watts",
      "Air Delivery": "80 CMM",
      "Max Speed": "1400 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },

  // --- EXHAUST FANS ---
  {
    id: "fan-exhaust-1",
    category: "Fans",
    type: "Exhaust Fans",
    name: "Fresh Air 200mm Ventilation Exhaust Fan",
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
      "Sweep Size": "200 mm (8 inches)",
      "Power Consumption": "35 Watts",
      "Air Delivery": "550 CMH (Cubic Metres per Hour)",
      "Max Speed": "1350 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },
  {
    id: "fan-exhaust-2",
    category: "Fans",
    type: "Exhaust Fans",
    name: "Turbovent 250mm High-Performance Exhaust Fan",
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
      "Sweep Size": "250 mm (10 inches)",
      "Power Consumption": "45 Watts",
      "Air Delivery": "800 CMH (Cubic Metres per Hour)",
      "Max Speed": "1400 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },

  // --- BLDC FANS ---
  {
    id: "fan-bldc-1",
    category: "Fans",
    type: "BLDC Fans",
    name: "Snow Breeze 1200mm 3 Blade BLDC Ceiling Fan",
    price: 2990,
    mrp: 3990,
    reviewsCount: "18 REVIEWS",
    rating: 5.0,
    image: "prod_fan_bldc_1.webp",
    fallbackImage: "prod_fan_bldc_1.webp",
    tag: " ",
    description: "Experience smart, energy-saving cooling with the Snow Breeze BLDC Ceiling Fan. Equipped with a brushless DC motor, it consumes up to 60% less electricity than standard induction fans while delivering high air thrust.",
    features: [
      "Brushless DC (BLDC) energy-efficient motor (28W)",
      "Smart remote control with speed control, sleep mode, and timer",
      "Aerodynamically balanced blades for noise-free high-speed performance",
      "Elegant metallic finish with double ball bearings"
    ],
    specs: {
      "Sweep Size": "1200 mm (48 inches)",
      "Power Consumption": "28 Watts",
      "Air Delivery": "230 CMM",
      "Max Speed": "370 RPM",
      "Warranty": "2 Years On-Site Warranty"
    }
  },
  {
    id: "fan-bldc-2",
    category: "Fans",
    type: "BLDC Fans",
    name: "EcoSmart 1200mm 5-Star BLDC Ceiling Fan",
    price: 3290,
    mrp: 4490,
    reviewsCount: "35 REVIEWS",
    rating: 4.9,
    image: "prod_fan_bldc_2.avif",
    fallbackImage: "prod_fan_bldc_2.avif",
    tag: " ",
    description: "Maximize energy savings and convenience with the EcoSmart BLDC Fan. Includes intelligent sleep modes, speed boosters, and multi-functional smart remote.",
    features: [
      "High energy efficiency with 5-Star rated performance (only 26W)",
      "Advanced intelligent remote control with 1-8 hour timers",
      "Boost speed mode for rapid room cooling",
      "Operates seamlessly across a wide voltage range without speed drops"
    ],
    specs: {
      "Sweep Size": "1200 mm (48 inches)",
      "Power Consumption": "26 Watts",
      "Air Delivery": "235 CMM",
      "Max Speed": "380 RPM",
      "Warranty": "3 Years On-Site Warranty"
    }
  },
  // COOLERS
  {
    id: "cooler-1",
    category: "Coolers",
    type:"Desert Coolers",
    name: "ARC 3D Honey Comb 50 Litre Cooler",
    price: 11990,
    mrp: 19490,
    reviewsCount: "24 reviews",
    rating: 5,
    image: "arc_3d_50.webp",
    fallbackImage: "arc_3d_50.web",
    tag: " ",
    description: "Compact Yet Efficient – The ARC 3D Honey Comb 50 Litre Air Cooler features a 50L water tank, ensuring continuous cooling in small to medium-sized spaces. Standing at 1360 mm, it features a collapsible louver for added convenience, making it perfect for bedrooms, offices, and other compact spaces.",
    features: [
      "Compact Yet Efficient – The ARC 3D Honey Comb 50 Litre Air Cooler features a 50L water tank, ensuring continuous cooling in small to medium-sized spaces.",
      "Optimized Airflow – With an air delivery of 1250 m³/h, it provides effective and widespread cooling for enhanced comfort.",
      "Enhanced Cooling Technology – Designed with three-side hydro dense mesh honeycomb cooling pads, it improves water retention for prolonged cooling performance.",
      "Energy-Efficient Motor – Powered by advanced technology, it delivers superior cooling while consuming just 150 watts, ensuring cost-effective operation.",
      "Customizable Air Throw – Equipped with a 17 cm plastic blower and 7-speed options, it allows you to adjust airflow based on your cooling needs.",
      "Smart & Space-Saving Design – Standing at 1360 mm, it features a collapsible louver for added convenience, making it perfect for bedrooms, offices, and other compact spaces."
    ],
    specs: {
      "Water Tank Capacity": "50 Litres",
      "Air Delivery": "1250 m³/h",
      "Power Consumption": "150 Watts",
      "Cooling Media": "3-Sided Hydro Dense Mesh Honeycomb Pad",
      "Blower Size": "17 cm Plastic Blower",
      "Speed Settings": "7-Speed Options",
      "Height": "1360 mm",
      "Louver Type": "Collapsible",
      "Warranty": "1 Year Warranty"
    },
  },
  {
  id: "cooler-4",
  category: "Coolers",
  type:"Desert Cooler",
  name: "Turbocool XL HC 50 Litre Desert Cooler",
  price: 9990,
  mrp: 16990,
  reviewsCount: "8 REVIEWS",
  rating: 4.7,
  image: "turbocool_xl_50.png",
  fallbackImage: "turbocool_xl_50.png",
  tag: " ",
  description: "The Turbocool XL HC 50 delivers powerful and dependable cooling for modern homes and workspaces. Featuring 3-side honeycomb cooling pads, a large 40.6 cm fan, and a built-in ice chamber, it ensures efficient and refreshing cooling even during peak summer heat.",
  features: [
    "Powerful Cooling Performance – Designed to provide dependable cooling for modern homes and workspaces with high air circulation.",
    "Efficient Honeycomb Cooling – Equipped with 3-side honeycomb cooling pads for faster cooling and uniform airflow throughout the room.",
    "Energy-Efficient Operation – Consumes approximately 180 watts, delivering an ideal balance of powerful cooling and low energy consumption.",
    "Large High-Performance Fan – Features a 40.6 cm powerful fan that delivers excellent air throw, making it suitable for medium to large spaces.",
    "Customizable Airflow – Comes with collapsible louvers that allow easy airflow adjustment for enhanced comfort and reduced dust entry.",
    "Enhanced Summer Cooling – Includes a built-in ice chamber for extra cooling during extreme summer temperatures.",
    "Long-Lasting Reliability – Backed by a 5-year warranty on the motor and pump, along with a 1-year comprehensive warranty upon product registration within 3 months of purchase."
  ],
  specs: {
    "Water Tank Capacity": "50 Litres",
    "Cooling Media": "3-Sided Honeycomb Cooling Pads",
    "Power Consumption": "Approx. 180 Watts",
    "Fan Size": "40.6 cm",
    "Louver Type": "Collapsible",
    "Ice Chamber": "Yes",
    "Motor Warranty": "5 Years",
    "Pump Warranty": "5 Years",
    "Comprehensive Warranty": "1 Year"
  },
},
  {
  id: "cooler-3",
  category: "Coolers",
  type:"Personal Cooler",
  name: "TALLDE HC 45 100 Watt Personal Cooler",
  price: 6690,
  mrp: 11690,
  reviewsCount: "9 REVIEWS",
  rating: 4.6,
  image: "tallde_45.webp",
  fallbackImage: "tallde_45.webp",
  tag: " ",
  description: "The TALLDE HC 45 Personal Cooler combines powerful cooling with energy-efficient performance. Featuring three-side superior blue honeycomb cooling pads, a large 30 cm fan, and inverter compatibility, it delivers reliable and uninterrupted cooling for bedrooms, offices, and other personal spaces.",
  features: [
    "Superior Cooling Performance – Features three-side superior blue honeycomb cooling pads for efficient water retention and uniform cooling.",
    "Energy-Efficient Operation – Delivers powerful cooling while consuming approximately 100 watts of power, making it economical for daily use.",
    "Powerful Air Circulation – Equipped with a large 30 cm fan that provides strong and consistent airflow for enhanced comfort.",
    "Smart Airflow Control – Comes with collapsible louvers that regulate airflow while minimizing dust entry when the cooler is not in use.",
    "Inverter Compatible – Operates seamlessly on inverter power, ensuring uninterrupted cooling during power cuts.",
    "Long-Lasting Reliability – Backed by a 5-year warranty on the motor and pump along with a 1-year comprehensive warranty."
  ],
  specs: {
    "Cooling Media": "3-Sided Superior Blue Honeycomb Pads",
    "Power Consumption": "Approx. 100 Watts",
    "Fan Size": "30 cm",
    "Louver Type": "Collapsible",
    "Inverter Compatibility": "Yes",
    "Motor Warranty": "5 Years",
    "Pump Warranty": "5 Years",
    "Comprehensive Warranty": "1 Year"
  },
},
// KITCHEN APPLIANCES
  {
  id: "kitchen-1",
  category: "Kitchen Appliances",
  type:"Mixer",
  name: "Karishmatic Wine Red 500W, 3 Jar Mixer Grinder",
  price: 2350,
  mrp: 4490,
  reviewsCount: "12 REVIEWS",
  rating: 4.6,
  image: "karishmatic_wine_red_500w.webp",
  fallbackImage: "karishmatic_wine_red_500w.webp",
  tag:" " ,
  description: "The Karishmatic Wine Red 500W Mixer Grinder is designed to make everyday food preparation quick and effortless. Powered by a robust 500W Power Plus Turbo motor, it comes with three durable stainless steel jars and high-performance blades for efficient grinding, blending, and liquidising.",
  features: [
    "Powerful Performance – Equipped with a Power Plus Turbo 500W motor that delivers reliable performance for everyday grinding and blending tasks.",
    "Enhanced Safety – Features a smart overload protector that safeguards the motor from overheating and extends appliance life.",
    "Versatile Jar Set – Includes three tough-grade stainless steel jars: a 1.25L liquidiser jar, 0.8L dry/wet grinding jar, and 0.4L chutney jar for multiple kitchen needs.",
    "Superior Grinding – Fitted with stainless steel Ultima blades and a 6-fin liquidising blade for fast, efficient, and consistent results.",
    "Durable Construction – Premium-quality stainless steel jars are built for long-lasting performance and everyday use.",
    "Reliable Warranty – Backed by a 2-year warranty on both the product and motor for complete peace of mind."
  ],
  specs: {
    "Motor Power": "500 Watts",
    "Motor Type": "Power Plus Turbo Motor",
    "Number of Jars": "3",
    "Liquidiser Jar Capacity": "1.25 Litres",
    "Dry/Wet Grinding Jar Capacity": "0.8 Litres",
    "Chutney Jar Capacity": "0.4 Litres",
    "Jar Material": "Tough Grade Stainless Steel",
    "Blade Type": "Stainless Steel Ultima Blades & 6-Fin Liquidising Blade",
    "Safety Feature": "Smart Overload Protector",
    "Warranty": "2 Years on Product & Motor"
  },
},
{
  id: "kitchen-2",
  category: "Kitchen Appliances",
  type:"Hand Blender",
  name: "Spinza 400W Hand Blender",
  price: 2035,
  mrp: 3690,
  reviewsCount: "12 REVIEWS",
  rating: 4.6,
  image: "spinza_400w_hand_blender.webp",
  fallbackImage: "spinza_400w_hand_blender.webp",
  tag: " ",
  description: "The Spinza 400W Hand Blender is designed for quick and effortless blending. Powered by a low-noise 400W copper motor, it features durable stainless steel Ultima blades, a cool-touch ergonomic body, and a detachable neck for easy cleaning and everyday convenience.",
  features: [
    "Powerful Low-Noise Motor – Equipped with a 400W copper motor that delivers efficient blending while operating with minimal noise.",
    "Superior Blending Performance – Features stainless steel Ultima blades for smooth, consistent blending and long-lasting sharpness.",
    "Ergonomic Design – Designed with a cool-touch body and slim profile for a comfortable, secure grip during extended use.",
    "Easy Maintenance – Comes with a detachable neck that allows quick and hassle-free cleaning after every use.",
    "Durable Construction – Built with high-quality materials for reliable performance and everyday durability.",
    "Reliable Warranty – Backed by a 2-year warranty for dependable performance and peace of mind."
  ],
  specs: {
    "Motor Power": "400 Watts",
    "Motor Type": "Low-Noise Copper Motor",
    "Blade Type": "Stainless Steel Ultima Blades",
    "Body Design": "Cool-Touch Slim Body",
    "Detachable Neck": "Yes",
    "Warranty": "2 Years"
  },

},
{
  id: "kitchen-13",
  category: "Kitchen Appliances",
  type:"Juicer",
  name: "Nutriv Juicer with 500W POWER PLUS Turbo Motor",
  price: 2700,
  mrp: 4790,
  reviewsCount: "14 REVIEWS",
  rating: 4.7,
  image: "nutriv_juicer_500w.jpg",
  fallbackImage: "nutriv_juicer_500w.jpg",
  tag: " ",
  description: "The Nutriv Juicer is powered by a POWER PLUS Turbo 500W motor for efficient and reliable juicing. Featuring a durable shockproof ABS body, high-grade stainless steel mesh, anti-drip spout, and a large pulp collector, it delivers fresh juice with maximum convenience and minimal effort.",
  features: [
    "Powerful Performance – Equipped with a POWER PLUS Turbo 500W motor with a 30-minute motor rating for efficient and continuous juicing.",
    "Durable & Compact Design – Built with a shockproof ABS body and a space-saving design that fits perfectly into modern kitchens.",
    "Efficient Juice Extraction – Features a high-grade stainless steel mesh and stainless steel Ultima blades for maximum juice yield and precise performance.",
    "Convenient Operation – Includes a large feeding chute, anti-drip spout, and a large pulp collector for uninterrupted and mess-free juicing.",
    "Enhanced Stability & Safety – Designed with anti-skid feet and built-in overload protection for safe, stable, and reliable operation.",
    "Reliable Warranty – Backed by a 5-year warranty on the motor and a 2-year warranty on the overall product for complete peace of mind."
  ],
  specs: {
    "Motor Power": "500 Watts",
    "Motor Type": "POWER PLUS Turbo Motor",
    "Motor Rating": "30 Minutes",
    "Body Material": "Shockproof ABS",
    "Blade Type": "Stainless Steel Ultima Blades",
    "Juicer Mesh": "High-Grade Stainless Steel",
    "Feeding Chute": "Large Feed Design",
    "Pulp Collector": "Large Capacity",
    "Anti-Drip Spout": "Yes",
    "Overload Protection": "Yes",
    "Anti-Skid Feet": "Yes",
    "Motor Warranty": "5 Years",
    "Product Warranty": "2 Years"
  },
},
{
  id: "kitchen-14",
  category: "Kitchen Appliances",
  type:"Mixer Grinder",
  name: "JETMIX 1000W Endura Plus 100% Copper Motor Mixer Grinder",
  price: 6800,
  mrp: 10990,
  reviewsCount: "15 REVIEWS",
  rating: 4.9,
  image: "jetmix_1000w.webp",
  fallbackImage: "jetmix_1000w.webp",
  tag: " ",
  description: "The JETMIX 1000W Mixer Grinder is built for superior grinding performance with its Endura Plus 100% Copper Motor. Equipped with premium stainless steel jars, stainless steel Ultima blades, a 6-fin liquidising blade, and integrated flow breakers, it delivers powerful, smooth, and consistent results for everyday cooking.",
  features: [
    "Powerful Performance – Equipped with an Endura Plus 1000W 100% Copper Motor for durable, efficient, and high-performance grinding and blending.",
    "Versatile Jar Set – Includes three stainless steel jars: a 1.25L liquidiser, 0.8L dry grinder, and 0.4L chutney jar with clip-locking lids and ergonomic handles for convenience and safety.",
    "Superior Grinding – Features stainless steel Ultima blades along with a 6-fin liquidising blade for fast, uniform, and high-efficiency grinding and blending.",
    "Enhanced Grinding Design – Integrated flow breakers inside the jars improve ingredient circulation and deliver smoother, more consistent grinding results.",
    "Built for Everyday Use – Premium stainless steel jars are durable, leak-resistant, and designed for long-lasting performance.",
    "Reliable Warranty – Backed by a 5-year warranty on the motor and a 2-year warranty on the overall product for complete peace of mind."
  ],
  specs: {
    "Motor Power": "1000 Watts",
    "Motor Type": "Endura Plus 100% Copper Motor",
    "Number of Jars": "3",
    "Liquidiser Jar Capacity": "1.25 Litres",
    "Dry Grinder Jar Capacity": "0.8 Litres",
    "Chutney Jar Capacity": "0.4 Litres",
    "Jar Material": "Stainless Steel",
    "Blade Type": "Stainless Steel Ultima Blades",
    "Liquidising Blade": "6-Fin Stainless Steel Blade",
    "Special Feature": "Integrated Flow Breakers",
    "Jar Lid Type": "Clip-Locking Lids",
    "Motor Warranty": "5 Years",
    "Product Warranty": "2 Years"
  },
},
{
  id: "kitchen-15",
  category: "Kitchen Appliances",
  type:"Wet Mixer Grinder",
  name: "PULSAR PRO 150 Watt Wet Mixer Grinder",
  price: 4895,
  mrp: 9290,
  reviewsCount: "50 REVIEWS",
  rating: 4.9,
  image: "pulsar_pro_150w.webp",
  fallbackImage: "pulsar_pro_150w.webp",
  tag: " ",
  description: "The PULSAR PRO Wet Mixer Grinder is designed for efficient wet grinding with its powerful 150W POWER PLUS Turbo Motor. Featuring a spacious 2-litre drum, durable shockproof ABS body, and versatile attachments, it is the perfect companion for preparing batters, dough, fresh juices, and more.",
  features: [
    "Powerful Performance – Equipped with a 150W POWER PLUS Turbo Motor for efficient and consistent wet grinding.",
    "Large Grinding Capacity – Features a spacious 2-litre grinding drum, ideal for preparing large batches of batter and other ingredients.",
    "Durable & Safe Design – Built with a shockproof ABS body for enhanced durability, safety, and long-lasting performance.",
    "Ventilated Cooling System – Designed with ventilation openings to improve airflow, helping prevent overheating and extending motor life.",
    "Versatile Attachments – Includes a coconut scraper, atta kneader, and citrus juicer attachment for a wide range of kitchen applications.",
    "Reliable Warranty – Backed by a 5-year warranty on the motor and a 2-year warranty on the overall product for complete peace of mind."
  ],
  specs: {
    "Motor Power": "150 Watts",
    "Motor Type": "POWER PLUS Turbo Motor",
    "Grinding Drum Capacity": "2 Litres",
    "Body Material": "Shockproof ABS",
    "Cooling System": "Ventilated Motor Design",
    "Attachments": "Coconut Scraper, Atta Kneader & Citrus Juicer",
    "Application": "Wet Grinding",
    "Motor Warranty": "5 Years",
    "Product Warranty": "2 Years"
  },
},
{
  id: "kitchen-17",
  category: "Kitchen Appliances",
  type:"Air Fryer",
  name: "Opal Neo 4.5L Air Fryer",
  price: 4150,
  mrp: 7990,
  reviewsCount: "15 REVIEWS",
  rating: 4.7,
  image: "opal_neo_4_5l.webp",
  fallbackImage: "opal_neo_4_5l.webp",
  tag: " ",
  description: "The Opal Neo 4.5L Air Fryer combines a powerful 1300W heating element with a spacious 4.5-litre cooking capacity for healthier, oil-free cooking. Featuring digital controls, multiple cooking presets, and a non-stick cooking pan, it delivers delicious meals with convenience and precision.",
  features: [
    "Powerful Heating – Equipped with a 1300W heating element for fast, efficient, and even cooking performance.",
    "Large Capacity – Features a spacious 4.5-litre cooking pan, making it ideal for preparing family-sized meals.",
    "Non-Stick Interior – Premium non-stick coating prevents food from sticking and ensures effortless cleaning after every use.",
    "Digital Temperature Control – Allows precise temperature adjustment up to 200°C for perfect cooking results.",
    "8 Preset Cooking Modes – Includes multiple preset programs for convenient preparation of a variety of dishes.",
    "Enhanced Safety – Equipped with an auto cut-off feature to prevent overheating and backed by a 1-year warranty for reliable performance."
  ],
  specs: {
    "Capacity": "4.5 Litres",
    "Power Consumption": "1300 Watts",
    "Temperature Range": "Up to 200°C",
    "Control Type": "Digital Touch Control",
    "Cooking Presets": "8 Preset Modes",
    "Cooking Pan": "Non-Stick",
    "Safety Feature": "Auto Cut-Off",
    "Warranty": "1 Year"
  },
},
{
  id: "kitchen-19",
  category: "Kitchen Appliances",
  type:"Electric Kettle",
  name: "Stylee 1.8L 1350W Electric Kettle",
  price: 650,
  mrp: 1390,
  reviewsCount: "12 REVIEWS",
  rating: 4.7,
  image: "stylee_1_8l_kettle.webp",
  fallbackImage: "stylee_1_8l_kettle.webp",
  tag: " ",
  description: "The Stylee 1.8L Electric Kettle combines a powerful 1350W heating element with a generous 1.8-litre capacity for fast and convenient boiling. Built with premium food-grade materials and advanced safety features, it is ideal for preparing tea, coffee, soups, and hot water for the entire family.",
  features: [
    "Fast Boiling Performance – Powered by a high-performance 1350W heating element for quick and efficient water boiling.",
    "Large Capacity – Features a spacious 1.8-litre capacity, making it ideal for families, guests, and multiple servings.",
    "Food-Grade Construction – Made from premium food-grade materials for safe, hygienic, and durable everyday use.",
    "Convenient Operation – Equipped with a one-touch lid opening for effortless filling, pouring, and easy cleaning.",
    "360° Cordless Design – Features a 360-degree cordless rotating base for convenient handling and placement from any angle.",
    "Enhanced Safety – Built-in dry boil protection automatically switches off the kettle when there is insufficient water and is backed by a 1-year warranty."
  ],
  specs: {
    "Capacity": "1.8 Litres",
    "Power Consumption": "1350 Watts",
    "Body Material": "Food-Grade Material",
    "Lid Type": "One-Touch Lid Opening",
    "Base Type": "360° Cordless Rotating Base",
    "Safety Feature": "Dry Boil Protection",
    "Operation": "Cordless",
    "Warranty": "1 Year"
  },
},
{
  id: "kitchen-27",
  category: "Kitchen Appliances",
  type:"Microwave",
  name: "SOLO 20 Litres 700W Microwave",
  price: 8225,
  mrp: 14990,
  reviewsCount: "25 REVIEWS",
  rating: 4.8,
  image: "solo_20l_microwave.webp",
  fallbackImage: "solo_20l_microwave.webp",
  tag: " ",
  description: "The SOLO 20L Microwave is designed for effortless everyday cooking, reheating, and defrosting. Equipped with a 700W heating system, 5 power levels, auto defrost, and easy-to-use dual mechanical knobs, it delivers reliable performance for modern kitchens.",
  features: [
    "Efficient Heating – Powered by a 700W heating system with a 20-litre capacity for quick reheating, cooking, and defrosting.",
    "30-Minute Timer – Features an adjustable timer of up to 30 minutes for convenient and precise cooking control.",
    "Simple Controls – Electro-mechanical dual knobs provide easy operation, while the powder-coated cavity ensures long-lasting durability.",
    "Multiple Power Levels – Offers 5 adjustable power levels to suit a variety of cooking, reheating, and defrosting requirements.",
    "Auto Defrost Function – Automatically defrosts frozen food efficiently, saving time and preserving food quality.",
    "Reliable Warranty – Backed by a 1-year product warranty and a 3-year warranty on the magnetron for dependable long-term performance."
  ],
  specs: {
    "Capacity": "20 Litres",
    "Power Output": "700 Watts",
    "Timer": "Up to 30 Minutes",
    "Control Type": "Electro-Mechanical Dual Knobs",
    "Power Levels": "5 Levels",
    "Defrost Function": "Auto Defrost",
    "Cavity Type": "Powder-Coated",
    "Product Warranty": "1 Year",
    "Magnetron Warranty": "3 Years"
  },
},
{
  id: "kitchen-34",
  category: "Kitchen Appliances",
  type:"OTG",
  name: "Durachef OTG 10L 800W",
  price: 3350,
  mrp: 5990,
  reviewsCount: "12 REVIEWS",
  rating: 4.7,
  image: "durachef_otg_10l.jpg",
  fallbackImage: "durachef_otg_10l.jpg",
  tag: " ",
  description: "The Durachef OTG 10L is a compact and efficient oven toaster grill designed for baking, grilling, and toasting with ease. Powered by an 800W heating system, it features adjustable temperature control up to 250°C, dual heating elements, and a 60-minute timer, making it ideal for small kitchens and everyday cooking.",
  features: [
    "Efficient Heating – Powered by an 800W heating system for reliable and consistent baking, grilling, and toasting.",
    "Compact Capacity – Features a 10-litre capacity, making it ideal for individuals, couples, and small kitchens.",
    "Adjustable Temperature – Temperature control up to 250°C allows precise cooking for a wide variety of recipes.",
    "Dual Heating Elements – Top and bottom heating elements ensure faster cooking and uniform heat distribution.",
    "60-Minute Timer – Built-in timer provides accurate cooking control while helping prevent overcooking.",
    "Reliable Warranty – Designed for dependable everyday performance and backed by a comprehensive 2-year manufacturer warranty."
  ],
  specs: {
    "Capacity": "10 Litres",
    "Power Consumption": "800 Watts",
    "Temperature Range": "Up to 250°C",
    "Heating Elements": "Top & Bottom Heating",
    "Timer": "60 Minutes",
    "Control Type": "Mechanical Knobs",
    "Warranty": "2 Years"
  },
},
{
  id: "kitchen-22",
  category: "Kitchen Appliances",
  type:"Rice Cooker",
  name: "MY COOK 1.8L 700W Rice Cooker",
  price: 2400,
  mrp: 4290,
  reviewsCount: "23 REVIEWS",
  rating: 4.7,
  image: "my_cook_1_8l_rice_cooker.webp",
  fallbackImage: "my_cook_1_8l_rice_cooker.webp",
  tag: " ",
  description: "The MY COOK 1.8L Rice Cooker combines a powerful 700W heating element with a spacious cooking capacity for perfectly cooked rice every time. Featuring mechanical controls, automatic cooking, and an additional cooking pan, it offers a simple and convenient solution for everyday meals.",
  features: [
    "Powerful Heating – Equipped with a 700W heating element for quick, efficient, and uniform rice cooking.",
    "Large Capacity – Features a 1.8-litre cooking capacity, making it ideal for families and everyday meal preparation.",
    "Automatic Cooking – Built-in auto cut-off function automatically switches to keep-warm mode after cooking, ensuring safety and energy efficiency.",
    "Additional Cooking Pan – Includes an extra cooking pan for steaming or preparing multiple dishes simultaneously.",
    "Easy Operation – Simple mechanical control knob provides convenient, hassle-free cooking with minimal effort.",
    "Reliable Warranty – Backed by a 5-year warranty on the heating element and a 1-year warranty on the overall product."
  ],
  specs: {
    "Capacity": "1.8 Litres",
    "Power Consumption": "700 Watts",
    "Control Type": "Mechanical Control Knob",
    "Heating Element": "High-Efficiency Heating Plate",
    "Auto Cut-Off": "Yes",
    "Additional Cooking Pan": "Included",
    "Heating Element Warranty": "5 Years",
    "Product Warranty": "1 Year"
  },
},
{
  id: "kitchen-26",
  category: "Kitchen Appliances",
  type:"Sandwich Maker",
  name: "Ezy Grill Sandwich Maker 750W",
  price: 1300,
  mrp: 2390,
  reviewsCount: "15 REVIEWS",
  rating: 4.7,
  image: "ezy_grill_sandwich_maker.webp",
  fallbackImage: "ezy_grill_sandwich_maker.webp",
  tag: " ",
  description: "The Ezy Grill Sandwich Maker delivers fast and convenient grilling with its powerful 750W heating element. Featuring non-stick 2-slice grilling plates, cool-touch housing, and automatic indicator lights, it makes preparing delicious grilled sandwiches effortless every day.",
  features: [
    "Fast Grilling Performance – Powered by a 750W heating element for quick, efficient, and even sandwich grilling.",
    "2-Slice Non-Stick Plates – Features spacious non-stick grilling plates that cook two sandwiches simultaneously while ensuring easy food release and effortless cleaning.",
    "Safe Operation – Cool-touch housing keeps the exterior safe to handle during operation, reducing the risk of accidental burns.",
    "Convenient Storage – Built-in cord winder keeps the power cord neatly stored for a clutter-free kitchen countertop.",
    "Status Indicator Lights – Equipped with power-on and automatic cut-off indicator lights for safe and convenient operation.",
    "Reliable Warranty – Backed by a 1-year manufacturer warranty for dependable performance and peace of mind."
  ],
  specs: {
    "Power Consumption": "750 Watts",
    "Plate Type": "Non-Stick Grilling Plates",
    "Capacity": "2 Sandwiches",
    "Body Type": "Cool-Touch Housing",
    "Indicator Lights": "Power On & Auto Cut-Off",
    "Cord Storage": "Cord Winder",
    "Warranty": "1 Year"
  },
},
{
  id: "kitchen-36",
  category: "Kitchen Appliances",
  type:"Toaster",
  name: "Durachef OTG 23L 1400W",
  price: 5450,
  mrp: 9490,
  reviewsCount: "15 REVIEWS",
  rating: 4.8,
  image: "durachef_otg_23l.webp",
  fallbackImage: "durachef_otg_23l.webp",
  tag: " ",
  description: "The Durachef OTG 23L is a versatile oven toaster grill powered by a 1400W heating system for efficient baking, grilling, roasting, and toasting. Featuring a motorized rotisserie, barbeque grill function, adjustable temperature control, and a complete accessory kit, it is perfect for preparing delicious family meals with ease.",
  features: [
    "Powerful Heating – Equipped with a 1400W heating system for fast, consistent, and efficient cooking performance.",
    "Versatile Cooking – Adjustable temperature range from 100°C to 250°C makes it ideal for baking, grilling, roasting, and toasting.",
    "Rotisserie & Barbeque – Motorized rotisserie ensures even roasting, while the dedicated barbeque grill function delivers delicious grilled flavors.",
    "Smart Timer – Built-in 60-minute timer with cooking completion alarm provides precise cooking control and prevents overcooking.",
    "Complete Accessory Kit – Includes a food tray, grilling rack, tray handle, and crumb tray for greater convenience and versatility.",
    "Reliable Warranty – Built for dependable everyday performance and backed by a comprehensive 2-year manufacturer warranty."
  ],
  specs: {
    "Capacity": "23 Litres",
    "Power Consumption": "1400 Watts",
    "Temperature Range": "100°C to 250°C",
    "Timer": "60 Minutes",
    "Rotisserie": "Motorized Rotisserie",
    "Barbeque Function": "Yes",
    "Accessories": "Food Tray, Grilling Rack, Tray Handle & Crumb Tray",
    "Cooking Alarm": "Yes",
    "Control Type": "Mechanical Knobs",
    "Warranty": "2 Years"
  },
},
//home appliances
{
  id: "washing-plastic-7kg-sawm-maroon-white",
  category: "Home Appliances",
  type:"Washing Machine",
  name: "PLASTIC 7KG SAWM Plast, Maroon White, PW",
  price: 8490,
  mrp: 16990,
  reviewsCount: "14 REVIEWS",
  rating: 4.7,
  image: "plastic_7kg_sawm_maroon_white.webp",
  fallbackImage: "plastic_7kg_sawm_maroon_white.webp",
  tag: " ",
  description: "The Plastic 7KG Semi-Automatic Washing Machine offers efficient and reliable laundry care with multiple wash programs, a durable anti-rust body, and a powerful wash motor. Its compact design and convenient mobility make it an ideal choice for modern households.",
  features: [
    "Three wash programs provide customized cleaning for different fabric types and laundry loads.",
    "Magic filter efficiently captures lint and debris, keeping clothes cleaner after every wash.",
    "35-minute wash timer, 10-minute spin timer, and auto soak function ensure thorough washing performance.",
    "Pulsator with mini pulsator delivers powerful water circulation for enhanced stain removal.",
    "Waterproof control panel and anti-rust body ensure long-lasting durability and reliable performance.",
    "Equipped with castor wheels for easy movement and backed by a 5-year wash motor warranty."
  ],
  specs: {
    "Capacity": "7 Kg",
    "Wash Programs": "3 Programs",
    "Wash Timer": "35 Minutes",
    "Spin Timer": "10 Minutes",
    "Filter Type": "Magic Filter",
    "Pulsator": "Pulsator with Mini Pulsator",
    "Body Material": "Anti-Rust Plastic Body",
    "Control Panel": "Waterproof",
    "Mobility": "2 Castor Wheels & 2 Pads",
    "Dimensions (W×D×H)": "832 × 485 × 948 mm",
    "Warranty": "2 Years Product, 5 Years on Wash Motor"
  },
},
{
  id: "refrigerator-mist-175l-direct-cool",
  category: "Home Appliances",
  type:"Refrigerator",
  name: "Mist 175L Direct Cool Refrigerator",
  price: 13990,
  mrp: 19990,
  reviewsCount: "13 REVIEWS",
  rating: 4.7,
  image: "mist_175l_direct_cool.webp",
  fallbackImage: "mist_175l_direct_cool.webp",
  tag: " ",
  description: "The Mist 175L Direct Cool Refrigerator is designed to keep your food fresh with efficient cooling, hygienic storage, and durable construction. Featuring toughened glass shelves, stabilizer-free operation, and a spacious vegetable crisper, it is ideal for small families and everyday use.",
  features: [
    "175-litre direct cool refrigerator offers efficient cooling for everyday food storage.",
    "Anti-bacterial door gasket helps maintain hygiene by preventing bacterial growth.",
    "Toughened glass shelves are designed to safely support heavy utensils and containers.",
    "Stabilizer-free operation protects the refrigerator from voltage fluctuations for reliable performance.",
    "Built-in odor eliminator keeps the refrigerator fresh and free from unwanted smells.",
    "Large vegetable crisper provides ample space to keep fruits and vegetables fresh for longer."
  ],
  specs: {
    "Capacity": "175 Litres",
    "Cooling Type": "Direct Cool",
    "Door Gasket": "Anti-Bacterial",
    "Shelves": "Toughened Glass",
    "Stabilizer Free Operation": "Yes",
    "Odor Eliminator": "Yes",
    "Vegetable Crisper": "Large Capacity",
    "Warranty": "10 Years"
  },
},
{
  id: "ac-2ton-inverter-3star",
  category: "Home Appliances",
  type:"Air Conditioners",
  name: "2 Ton Inverter Split AIR CONDITIONER 3 Star",
  price: 54833,
  mrp: 64990,
  reviewsCount: "NO REVIEWS",
  rating: 0,
  image: "crop_ac.webp",
  fallbackImage: "crop_ac.webp",
  tag: " ",
  description: "The 2 Ton Inverter Split Air Conditioner delivers powerful cooling performance with intelligent inverter technology, Blue Sapphire anti-corrosion protection, and Smart Clean technology. Designed to provide efficient cooling even in temperatures up to 52°C.",
  features: [
    "2 Ton inverter AC with 6100W cooling capacity and 1100 m³/h airflow",
    "Blue Sapphire anti-corrosion coating for enhanced durability",
    "Anti-microbial self-cleaning technology for fresh and hygienic air",
    "4-way airflow, hidden display, and Smart Clean with self-diagnosis"
  ],
  specs: {
    "Capacity": "2 Ton",
    "Energy Rating": "3 Star",
    "Cooling Capacity": "6100 Watts",
    "Air Throw": "10 Metres",
    "Technology": "Inverter",
    "Warranty": "5 Years Comprehensive, 10 Years on Compressor"
  }
},
//steamers
{
  id: "iron-fabrica-1200w-garment-steamer",
  category: "Steamers",
  type:"Garment Steamer",
  name: "FABRICA 1200W Garment Steamer",
  price: 2750,
  mrp: 5390,
  reviewsCount: "25 REVIEWS",
  rating: 4.8,
  image: "fabrica_1200w_garment_steamer.webp",
  fallbackImage: "fabrica_1200w_garment_steamer.webp",
  tag: " ",
  description: "The FABRICA 1200W Garment Steamer delivers fast, convenient, and efficient wrinkle removal with powerful steam output. Designed for home and travel, it features rapid heat-up, a detachable water tank, and both vertical and horizontal steaming for effortless garment care.",
  features: [
    "Powerful 1200W heating element delivers fast and effective wrinkle removal for all types of garments.",
    "Rapid 25-second heat-up time lets you start steaming almost instantly.",
    "170ml detachable water tank provides longer steaming sessions with convenient refilling.",
    "Stainless steel heated steam plate ensures consistent steam distribution and long-lasting durability.",
    "Supports both vertical and horizontal steaming for versatile garment care.",
    "Compact and travel-friendly design makes it easy to carry and store."
  ],
  specs: {
    "Power": "1200 Watts",
    "Heat-Up Time": "25 Seconds",
    "Water Tank Capacity": "170 ml (Detachable)",
    "Steam Plate": "Stainless Steel Heated Plate",
    "Steam Modes": "Vertical & Horizontal",
    "Design": "Compact & Portable",
    "Warranty": "2 Years"
  },
},
{
  id: "iron-bigsole-plastic-dry-1000w",
  category: "Steamers",
  type:"Iron",
  name: "Bigsole Plastic Dry Iron 1000W",
  price: 700,
  mrp: 1290,
  reviewsCount: "15 REVIEWS",
  rating: 4.8,
  image: "bigsole_plastic_dry_iron_1000w.webp",
  fallbackImage: "bigsole_plastic_dry_iron_1000w.webp",
  tag: " ",
  description: "The Bigsole Plastic Dry Iron 1000W is designed for fast and efficient ironing with a large non-stick soleplate, precise temperature control, and enhanced safety features. Its ergonomic design and flexible cord make everyday ironing smooth and effortless.",
  features: [
    "Powerful 1000W heating element delivers quick and consistent heat for efficient ironing.",
    "Large non-stick PTFE soleplate glides smoothly across fabrics while covering more surface area for faster wrinkle removal.",
    "Auto cut-off feature protects against overheating and enhances user safety.",
    "Easy-grip fabric selector allows accurate temperature adjustment for different fabric types.",
    "360-degree swivel cord provides flexible movement and minimizes tangling during use.",
    "Backed by a 2-year replacement warranty for dependable performance and peace of mind."
  ],
  specs: {
    "Iron Type": "Dry Iron",
    "Power Output": "1000W",
    "Soleplate": "Large PTFE Non-Stick Soleplate",
    "Temperature Control": "Easy Grip Fabric Selector",
    "Cord": "360° Swivel Cord",
    "Safety Features": "Auto Cut-Off",
    "Warranty": "2 Years Replacement Warranty"
  },
},
//Heaters
{
  id: "water-heater-star-lux-1500w",
  category: "Water Heaters",
  type:"Immersion Rod",
  name: "Star Lux 1500W Immersion Rod",
  price: 545,
  mrp: 1090,
  reviewsCount: "13 REVIEWS",
  rating: 4.6,
  image: "star_lux_immersion_rod.webp",
  fallbackImage: "star_lux_immersion_rod.webp",
  tag: " ",
  description: "The Star Lux 1500W Immersion Rod is designed for quick and safe water heating. Featuring a durable epoxy-coated body, nickel-plated heating element, and dual safety protection, it offers reliable performance for everyday household use.",
  features: [
    "1500W nickel-plated heating element provides rapid and efficient water heating.",
    "Shockproof and waterproof epoxy-coated body ensures safe operation in wet conditions.",
    "Sturdy buckle clip keeps the immersion rod securely positioned during use.",
    "Compact and lightweight design (approx. 0.48 kg) for easy handling and storage.",
    "ISI-certified power cord and moulded plug provide dependable electrical safety.",
    "Dual safety mechanism protects against overheating for worry-free operation."
  ],
  specs: {
    "Power": "1500 Watts",
    "Heating Element": "Nickel-Plated",
    "Body Type": "Shockproof & Waterproof Epoxy Coated",
    "Weight": "Approx. 0.48 Kg",
    "Power Cord": "ISI-Certified with Moulded Plug",
    "Safety Features": "Dual Safety Protection",
    "Warranty": "1 Year"
  },
},
{
  id: "heater-ferno-9-oil-filled-radiator",
  category: "Water Heaters",
  type:"Room Heaters",
  name: "Ferno 9 Oil Filled Radiator Room Heater",
  price: 8490,
  mrp: 14990,
  reviewsCount: "11 REVIEWS",
  rating: 4.8,
  image: "ferno_9_oil_filled_radiator.webp",
  fallbackImage: "ferno_9_oil_filled_radiator.webp",
  tag: " ",
  description: "The Ferno 9 Oil Filled Radiator Room Heater delivers powerful and uniform heating with 9 wave fins, a built-in PTC fan heater, and adjustable thermostat control. Designed for safe, energy-efficient operation, it is perfect for keeping your room warm and comfortable during winter.",
  features: [
    "Three adjustable heat settings (800W, 1200W & 2000W) with thermostat for customized room heating.",
    "9 wave fins combined with a powerful 400W PTC fan heater ensure fast and uniform heat distribution.",
    "2400W maximum heating power delivers reliable warmth for medium to large rooms.",
    "Castor wheels and integrated cord winder provide effortless mobility and convenient storage.",
    "Tip-over safety switch and oxygen-friendly operation ensure safe, worry-free everyday use.",
    "ISI certified construction guarantees dependable performance and enhanced electrical safety."
  ],
  specs: {
    "Heater Type": "Oil Filled Radiator",
    "Power Output": "2400W (2000W Heater + 400W PTC Fan)",
    "Heat Settings": "800W / 1200W / 2000W",
    "Wave Fins": "9",
    "PTC Fan Heater": "400W",
    "Thermostat": "Adjustable",
    "Safety Features": "Tip-Over Safety Switch, Oxygen-Friendly Operation",
    "Mobility": "Castor Wheels",
    "Cord Storage": "Built-in Cord Winder",
    "Certification": "ISI Certified",
    "Warranty": "1 Year"
  },
},






];
