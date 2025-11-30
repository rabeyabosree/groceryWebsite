import atta from '../assets/atta.webp'
import basmoti from '../assets/basmoti.jpg'
import bread from '../assets/bread.jpg'
import browonsuger from '../assets/brownsuger.jpg'
import chulabot from '../assets/chulabot.jpg'
import cornslakes from '../assets/cornclakes.jpg'
import dal from '../assets/dal.jpeg'
import desipiyaj from '../assets/desipiyaj.jpg'
import freshapple from '../assets/freshapple.jpg'
import garlic from '../assets/garlic.jpg'
import greentrea from '../assets/greentea.jpg'
import ketchup from '../assets/ketchup.jpg'
import loosetea from '../assets/losetea.jpg'
import mayo from '../assets/mayo.jpg'
import milkpowder from '../assets/milkpowder.jpg'
import pularchal from '../assets/pulorchal.jpeg'
import musturdoil from '../assets/sorisartel.webp'
import spicymasala from '../assets/spicymasala.jpg'
import sugorkola from '../assets/sugorkola.jpg'
import oil from '../assets/tel.jpg'

export const groceryProducts = [
  {
    id: "PRD001",
    title: "Premium Basmati Rice",
    name: "Aromatic Basmati Rice",
    category: "Rice & Grains",
    desc: "Long grain aromatic rice perfect for cooking biryani.",
    rating: 4.8,
    sold: 1250,
    stock: 180,
    variants: [
      { weight: "500g", price: 45 },
      { weight: "1kg", price: 85 },
      { weight: "2kg", price: 160 }
    ],
    image: basmoti
  },
  {
    id: "PRD002",
    title: "Brown Atta Flour",
    name: "Whole Wheat Atta",
    category: "Flour & Atta",
    desc: "Stone-ground whole wheat flour with fiber & nutrition.",
    rating: 4.6,
    sold: 980,
    stock: 250,
    variants: [
      { weight: "1kg", price: 55 },
      { weight: "2kg", price: 108 }
    ],
    image: atta
  },
  {
    id: "PRD003",
    title: "Deshi Chinigura Rice",
    name: "Premium Chinigura Polau Rice",
    category: "Rice & Grains",
    desc: "Highly fragrant rice popular for pulao and party dishes.",
    rating: 4.7,
    sold: 1420,
    stock: 200,
    variants: [
      { weight: "500g", price: 60 },
      { weight: "1kg", price: 115 },
      { weight: "2kg", price: 220 }
    ],
    image: pularchal
  },
  {
    id: "PRD004",
    title: "Fresh Soybean Oil",
    name: "Refined Soybean Cooking Oil",
    category: "Oil & Ghee",
    desc: "Refined soybean oil for daily cooking needs.",
    rating: 4.5,
    sold: 2100,
    stock: 300,
    variants: [
      { weight: "1L", price: 145 },
      { weight: "2L", price: 280 },
      { weight: "5L", price: 680 }
    ],
    image: oil
  },
  {
    id: "PRD005",
    title: "Moshur Dal",
    name: "Red Lentil Dal",
    category: "Lentils & Beans",
    desc: "Cleaned and polished red lentils.",
    rating: 4.6,
    sold: 1780,
    stock: 320,
    variants: [
      { weight: "500g", price: 48 },
      { weight: "1kg", price: 90 }
    ],
    image: dal
  },
  {
    id: "PRD006",
    title: "Premium Mustard Oil",
    name: "Cold Pressed Mustard Oil",
    category: "Oil & Ghee",
    desc: "Traditional cold-pressed mustard oil with strong aroma.",
    rating: 4.9,
    sold: 1120,
    stock: 120,
    variants: [
      { weight: "250ml", price: 55 },
      { weight: "500ml", price: 95 },
      { weight: "1L", price: 180 }
    ],
    image: musturdoil
  },
  {
    id: "PRD007",
    title: "Chickpeas (Boot Dal)",
    name: "Premium Chickpeas",
    category: "Lentils & Beans",
    desc: "High fiber protein-rich chickpeas.",
    rating: 4.4,
    sold: 860,
    stock: 260,
    variants: [
      { weight: "500g", price: 42 },
      { weight: "1kg", price: 78 }
    ],
    image: chulabot
  },
  {
    id: "PRD008",
    title: "Brown Sugar (Gur)",
    name: "Organic Brown Sugar",
    category: "Sugar & Sweeteners",
    desc: "Organic unrefined brown sugar for healthier sweetening.",
    rating: 4.3,
    sold: 720,
    stock: 200,
    variants: [
      { weight: "500g", price: 52 },
      { weight: "1kg", price: 100 }
    ],
    image: browonsuger
  },
  {
    id: "PRD009",
    title: "Fresh Red Onion",
    name: "Deshi Piyaj",
    category: "Vegetables",
    desc: "Farm fresh onions for daily cooking.",
    rating: 4.2,
    sold: 2040,
    stock: 350,
    variants: [
      { weight: "500g", price: 30 },
      { weight: "1kg", price: 55 }
    ],
    image: desipiyaj
  },
  {
    id: "PRD010",
    title: "Premium Garlic",
    name: "Imported Garlic",
    category: "Vegetables",
    desc: "Big cloves, strong aroma, perfect for curries.",
    rating: 4.4,
    sold: 1690,
    stock: 210,
    variants: [
      { weight: "500g", price: 85 },
      { weight: "1kg", price: 160 }
    ],
    image: garlic
  },
  {
    id: "PRD011",
    title: "Milk Powder",
    name: "Full Cream Milk Powder",
    category: "Dairy",
    desc: "Nutritious milk powder perfect for tea & kids.",
    rating: 4.7,
    sold: 1400,
    stock: 190,
    variants: [
      { weight: "500g", price: 330 },
      { weight: "1kg", price: 620 }
    ],
    image: milkpowder
  },
  {
    id: "PRD012",
    title: "Cornflakes",
    name: "Breakfast Cornflakes",
    category: "Breakfast",
    desc: "Crispy flakes, high fiber energy breakfast.",
    rating: 4.3,
    sold: 780,
    stock: 240,
    variants: [
      { weight: "250g", price: 95 },
      { weight: "500g", price: 175 }
    ],
    image: cornslakes
  },
  {
    id: "PRD013",
    title: "Green Tea Bags",
    name: "Pure Green Tea",
    category: "Tea & Coffee",
    desc: "Antioxidant-rich wellness tea.",
    rating: 4.8,
    sold: 920,
    stock: 150,
    variants: [
      { weight: "25 bags", price: 95 },
      { weight: "50 bags", price: 170 }
    ],
    image: greentrea
  },
  {
    id: "PRD014",
    title: "Fresh Bananas",
    name: "Sagor Kola",
    category: "Fruits",
    desc: "Fresh sweet bananas for breakfast & snacks.",
    rating: 4.6,
    sold: 3100,
    stock: 400,
    variants: [
      { weight: "6 pcs", price: 55 },
      { weight: "12 pcs", price: 105 }
    ],
    image: sugorkola
  },
  {
    id: "PRD015",
    title: "Apples (China)",
    name: "Fresh Imported Apple",
    category: "Fruits",
    desc: "Juicy crunchy apples rich in vitamins.",
    rating: 4.7,
    sold: 2300,
    stock: 350,
    variants: [
      { weight: "1kg", price: 230 },
      { weight: "2kg", price: 450 }
    ],
    image: freshapple
  },
  {
    id: "PRD016",
    title: "Tomato Ketchup",
    name: "Sweet & Tangy Ketchup",
    category: "Sauces & Pickles",
    desc: "Perfect dip for fries, snacks & burgers.",
    rating: 4.4,
    sold: 890,
    stock: 130,
    variants: [
      { weight: "500g", price: 120 }
    ],
    image: ketchup
  },
  {
    id: "PRD017",
    title: "Mayonnaise",
    name: "Classic Mayo",
    category: "Sauces & Pickles",
    desc: "Smooth creamy texture for sandwiches & pasta.",
    rating: 4.5,
    sold: 720,
    stock: 150,
    variants: [
      { weight: "250g", price: 130 },
      { weight: "500g", price: 240 }
    ],
    image: mayo
  },
  {
    id: "PRD018",
    title: "Brown Bread",
    name: "Whole Wheat Bread",
    category: "Bakery",
    desc: "Fresh soft bread made from wheat flour.",
    rating: 4.3,
    sold: 950,
    stock: 180,
    variants: [
      { weight: "400g", price: 65 }
    ],
    image: bread
  },
  {
    id: "PRD019",
    title: "Chicken Masala",
    name: "Spice Mix for Chicken",
    category: "Spices",
    desc: "Authentic spicy blend for great flavor.",
    rating: 4.8,
    sold: 650,
    stock: 210,
    variants: [
      { weight: "100g", price: 55 },
      { weight: "200g", price: 100 }
    ],
    image: spicymasala
  },
  {
    id: "PRD020",
    title: "Black Tea",
    name: "Premium Loose Tea",
    category: "Tea & Coffee",
    desc: "Strong flavor rich tea leaves.",
    rating: 4.6,
    sold: 1400,
    stock: 300,
    variants: [
      { weight: "250g", price: 120 },
      { weight: "500g", price: 230 }
    ],
    image: loosetea
  }
]
