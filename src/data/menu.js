import koroglu from "../assets/menu/koroglu-kabob.jpg";
import tursu from "../assets/menu/tursu-qovurma-pilav.jpg";
import sabzi from "../assets/menu/sabzi-pilav.jpg";
import orderMenuFlyer from "../assets/flyers/order-menu.jpg";
import cateringProgramFlyer from "../assets/flyers/catering-program.jpg";

export { orderMenuFlyer, cateringProgramFlyer };

export const signatureDishes = [
  {
    id: "koroglu-kabob",
    name: "Koroğlu Kabob",
    tag: "Heroic Taste. True Tradition.",
    image: koroglu,
    description:
      "A masterpiece of tender lamb and beef, marinated in our signature blend of Azerbaijani spices and grilled over open flame to perfection.",
    highlights: [
      { icon: "fire", title: "Charcoal Grilled", detail: "For rich, smoky taste" },
      { icon: "drumstick-bite", title: "Premium Meat", detail: "Lamb & beef blend" },
      { icon: "leaf", title: "Authentic Spices", detail: "Azerbaijani herbs & spices" },
      { icon: "heart", title: "Made With Love", detail: "Fresh ingredients every day" },
    ],
    servedWith: ["Saffron Rice or Bulgur", "Grilled Tomato", "Fresh Salad or Onions", "Pita Bread"],
  },
  {
    id: "tursu-qovurma-pilav",
    name: "Turşu Qovurma Pilav",
    tag: "Rich in Taste. Rooted in Tradition.",
    image: tursu,
    description:
      "A beloved Azerbaijani classic where tender lamb or beef is slow-fried with onions, chestnuts and dried fruits, then combined with saffron rice for a harmonious balance of sweet, savory and tangy flavors.",
    highlights: [
      { icon: "drumstick-bite", title: "Tender Meat", detail: "Slow-fried for rich, deep flavor" },
      { icon: "lemon", title: "Sweet & Sour", detail: "Dried fruits and sour plums (alça kürüsü)" },
      { icon: "seedling", title: "Chestnuts", detail: "Adds a unique aroma & buttery texture" },
      { icon: "bowl-rice", title: "Saffron Rice", detail: "Fragrant basmati rice with authentic saffron" },
    ],
    servedWith: ["Saffron Rice", "Dried Fruits", "Chestnuts", "Fresh Herbs"],
  },
  {
    id: "sabzi-pilav",
    name: "Sabzi Pilav",
    tag: "Fresh Herbs. Fragrant Rice. True Tradition.",
    image: sabzi,
    description:
      "A traditional Azerbaijani dish made with aromatic saffron rice, tender meat, and a flavorful blend of fresh herbs and greens. Light, aromatic and unforgettable.",
    highlights: [
      { icon: "leaf", title: "Fresh Herbs", detail: "Dill, cilantro, parsley, fenugreek & more" },
      { icon: "drumstick-bite", title: "Tender Meat", detail: "Slow-cooked to perfection" },
      { icon: "bowl-rice", title: "Fragrant Rice", detail: "Infused with saffron for rich aroma" },
      { icon: "heart", title: "Made With Love", detail: "Traditional recipe, made fresh daily" },
    ],
    servedWith: ["Grilled Tomato", "Fresh Salad or Herbs", "Pita Bread", "Yogurt Sauce"],
  },
];

export const fullMenu = [
  {
    category: "Skewers & Kabobs",
    items: [
      { name: "Koroğlu Kabob", description: "Lamb & beef blend, charcoal grilled", price: "Market Price" },
      { name: "Lulya Kabob", description: "Hand-formed minced lamb skewers with onion & sumac", price: "Market Price" },
      { name: "Chicken Tikka Skewers", description: "Marinated chicken thigh, grilled over open flame", price: "Market Price" },
      { name: "Vegetable Skewers", description: "Bell pepper, tomato, onion & mushroom", price: "Market Price" },
    ],
  },
  {
    category: "Pilav & Rice",
    items: [
      { name: "Turşu Qovurma Pilav", description: "Slow-fried lamb, chestnuts, dried fruits & saffron rice", price: "Market Price" },
      { name: "Sabzi Pilav", description: "Saffron rice, tender meat & fresh herbs", price: "Market Price" },
      { name: "Plain Saffron Rice", description: "Fragrant basmati rice with authentic saffron", price: "Market Price" },
    ],
  },
  {
    category: "Sides & Salads",
    items: [
      { name: "Grilled Tomato & Pepper", description: "Charcoal roasted seasonal vegetables", price: "Market Price" },
      { name: "Fresh Herb Salad", description: "Dill, parsley, mint, cilantro & radish", price: "Market Price" },
      { name: "Onion & Sumac Salad", description: "Thinly sliced onion, sumac and fresh herbs", price: "Market Price" },
      { name: "Pita Bread Basket", description: "Warm, fresh baked flatbread", price: "Market Price" },
    ],
  },
  {
    category: "Sauces & Extras",
    items: [
      { name: "Garlic Yogurt Sauce", description: "House-made yogurt sauce with garlic & dill", price: "Market Price" },
      { name: "Narsharab", description: "Traditional pomegranate sauce", price: "Market Price" },
    ],
  },
];

export const whyChooseUs = [
  { icon: "fire", title: "Charcoal Grilled", detail: "For rich, smoky taste in every skewer" },
  { icon: "drumstick-bite", title: "Premium Meat", detail: "Hand-selected lamb & beef blends" },
  { icon: "leaf", title: "Authentic Spices", detail: "Traditional Azerbaijani herbs & spices" },
  { icon: "heart", title: "Made With Love", detail: "Fresh ingredients, prepared fresh daily" },
];

// À la carte order menu (grill plates)
export const orderMenu = [
  {
    id: "chicken-kabob",
    name: "Chicken Kabob",
    servings: "2 Skewers",
    price: "$14.99",
    description: "Tender marinated chicken char-grilled to perfection.",
    comesWith: ["Saffron Pilaf", "Half Grilled Tomato", "Pita Bread", "Drink (Can)"],
    accent: "orange",
  },
  {
    id: "lamb-kabob",
    name: "Lamb Kabob",
    servings: "2 Skewers",
    price: "$15.99",
    description: "Juicy lamb grilled with authentic spices.",
    comesWith: ["Saffron Pilaf", "Half Grilled Tomato", "Pita Bread", "Drink (Can)"],
    accent: "red",
  },
  {
    id: "lula-kebab",
    name: "Azerbaijani Lula Kebab",
    servings: "2 Skewers",
    price: "$15.99",
    description: "Traditional Azerbaijani lula kebab seasoned with herbs and spices.",
    comesWith: ["Saffron Pilaf", "Half Grilled Tomato", "Pita Bread", "Drink (Can)"],
    accent: "green",
  },
  {
    id: "lentil-soup",
    name: "Lentil Soup",
    servings: null,
    price: "$7.99",
    description: "A comforting bowl made fresh daily.",
    comesWith: ["Pita Bread (1 Slice)"],
    accent: "gold",
  },
];

export const orderInfo = [
  { icon: "leaf", label: "Fresh Ingredients" },
  { icon: "fire", label: "Authentic Recipes" },
  { icon: "heart", label: "Made Daily With Care" },
  { icon: "people-group", label: "Support Local" },
];

export const orderLogistics = [
  { label: "Free Delivery", detail: "Within 5 miles" },
  { label: "Orders Taken", detail: "12 hours prior" },
  { label: "Payment", detail: "Cash only" },
  { label: "Halal", detail: "Fresh · Halal · Made Daily" },
];

// Community meal program — adult day care, senior centers & assisted living communities
export const communityProgram = {
  title: "Healthy Mediterranean & Azerbaijani Catering Program",
  audiences: ["Adult Day Care", "Senior Centers", "Assisted Living Communities"],
  schedule: "Monday–Friday Lunch Service",
  pricePerDay: "$170",
  priceNote: "Per day, serves 8–10 participants",
  deliveryIncluded: true,
  prepayNote: "1 week prepay is needed to reserve your meals and ensure consistent service.",
  about: [
    "Happy Skewer is a locally owned family catering company specializing in fresh Mediterranean and Azerbaijani cuisine.",
    "We prepare nutritious, home-style meals using lean proteins, whole grains, fresh vegetables, and heart-healthy cooking methods with reduced sodium and minimal added fats.",
    "Our mission is to provide delicious, well-balanced meals with reliable service, making us a trusted catering partner for adult day care centers and senior communities.",
  ],
  values: [
    { icon: "leaf", title: "Fresh Ingredients", detail: "Prepared daily with quality and care." },
    { icon: "heart", title: "Heart Healthy", detail: "Low-fat cooking with reduced sodium." },
    { icon: "bowl-rice", title: "Home-Style Cooking", detail: "Comforting meals made just like home." },
    { icon: "people-group", title: "Senior Friendly", detail: "Balanced portions for health and well-being." },
  ],
  lunchIncludes: [
    "Main entrée",
    "Healthy side dish",
    "Cup of soup (Mon–Thu)",
    "Choice of fresh salad",
    "Fresh pita bread",
    "Friday Chef's Special Vegetable Omelet",
    "House specialties available upon request",
  ],
  nutritionStandards: ["Low Fat Cooking", "Reduced Sodium", "No Deep Frying", "Lean Proteins", "Balanced Nutrition", "Senior Friendly Portions"],
  whyChooseUs: [
    "Fresh meals prepared daily",
    "Healthy Mediterranean & Azerbaijani cuisine",
    "Halal protein options available",
    "Reliable scheduled delivery",
    "Rotating weekly menu",
    "Customized meals for dietary requirements",
    "Locally owned and operated",
  ],
  houseSpecialties: [
    { name: "Pomegranate-Marinated Red Onions" },
    { name: "Pickled Mini Tomatoes" },
  ],
};

export const weeklyMenu = [
  {
    day: "Mon",
    title: "Grilled Chicken Kabob",
    kcal: 700,
    items: [
      "Grilled skinless, defatted chicken thigh kabob",
      "Buckwheat",
      "Cup of Red Lentil Soup with Chicken",
      "Choice of Garden Lettuce Salad or Traditional Russian-Style Shredded Carrot Salad",
      "Fresh pita bread",
    ],
  },
  {
    day: "Tue",
    title: "Stuffed Tomatoes & Bell Peppers",
    kcal: 700,
    items: [
      "Stuffed tomatoes and bell peppers with lean ground beef",
      "Mashed potatoes",
      "Cup of Brown Lentil Soup with Homemade Beef & Lamb Meatballs",
      "Choice of Garden Lettuce Salad or Traditional Russian-Style Shredded Carrot Salad",
      "Fresh pita bread",
    ],
  },
  {
    day: "Wed",
    title: "Grilled Salmon",
    kcal: 720,
    items: [
      "Herb-seasoned grilled salmon",
      "Bulgur",
      "Cup of Red Lentil Soup with Chicken",
      "Choice of Garden Lettuce Salad or Traditional Russian-Style Shredded Carrot Salad",
      "Fresh pita bread",
    ],
  },
  {
    day: "Thu",
    title: "Authentic Azerbaijani Lula Kebab",
    kcal: 730,
    items: [
      "Lean ground beef lula kebab",
      "Traditional saffron rice",
      "Cup of Brown Lentil Soup with Homemade Beef & Lamb Meatballs",
      "Choice of Garden Lettuce Salad or Traditional Russian-Style Shredded Carrot Salad",
      "Fresh pita bread",
    ],
  },
  {
    day: "Fri",
    title: "Okra & Lamb Stew",
    kcal: 700,
    items: [
      "Slow-cooked lean lamb with okra",
      "Traditional vermicelli",
      "Choice of Garden Lettuce Salad or Traditional Russian-Style Shredded Carrot Salad",
      "Fresh pita bread",
    ],
    optional: {
      title: "Friday Chef's Special — Fresh Vegetable Omelet",
      kcal: 300,
      detail: "Prepared with eggs, spinach, parsley, dill, green onions, and portabella mushrooms.",
    },
  },
];

export const cateringServices = [
  {
    icon: "rings-wedding",
    title: "Weddings",
    detail: "Full-service kabob & pilav stations for your big day, from intimate ceremonies to large receptions.",
  },
  {
    icon: "building",
    title: "Corporate Events",
    detail: "Office lunches, conferences and company celebrations with reliable, on-time service.",
  },
  {
    icon: "people-group",
    title: "Private Parties",
    detail: "Birthdays, anniversaries and family gatherings made memorable with authentic flavor.",
  },
  {
    icon: "gifts",
    title: "Holiday Celebrations",
    detail: "Seasonal menus and traditional dishes for Novruz, holidays and special occasions.",
  },
];
