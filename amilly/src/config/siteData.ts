export const siteData = {
  global: {
    brandName: "AMMILY",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { 
      label: "Products", 
      href: "/products",
      dropdown: [
        { label: "Luxury Suits", href: "/products" },
        { label: "Casual Women", href: "/products/casual-wear" },
        { label: "Teens Female", href: "/products/teens-wear" }
      ]
    },
    { label: "Collaborate", href: "/collaborate" },
    { label: "About Us", href: "/#about" },
  ],
  hero: {
    headlineWords: ["STYLE", "ISN'T", "WORN.", "IT'S", "OWNED."],
    subtitle: "Dress bold. \n Live louder.",
    backgroundImage: "/images/PAGE 1 BACKGORUND.png"
  },
  newArrivals: {
    titleLine1: "FEATURING",
    titleLine2: "NEW ARRIVALS",
    backgroundImage: "/images/Page 2 BACKGROUND.png",
    cards: [
      { id: 1, image: "/images/Feature 1.jpg", link: "/products/casual-wear" },
      { id: 2, image: "/images/Featured.jpg", link: "/products" },
      { id: 3, image: "/images/Feature 2 (1).jpg", link: "/products/teens-wear" },
    ]
  },
  aboutStory: {
    backgroundImage: "/images/Page 3 Background Image.png",
    watermarkLeft: "Timeless",
    watermarkRight: "Attitude",
    sectionTitle: "Why Amilly",
    paragraph: "Built for those who wear confidence effortlessly. We blend timeless design with modern audacity, creating pieces that speak for you before you ever say a word.",
    buttonText: "Explore The Vision",
    buttonLink: "/products",
    images: {
      leftTall: "/images/Why Amilly - Image big Card.jpg",
      rightTop: "/images/Why Amilly - Image.jpg",
      rightBottom: "/images/Why Amilly -Image.jpg"
    }
  },
  auth: {
    editorialImage: "/images/Login_Create Accoutn background Image.jpg",
    floatingText: "ELEGANCE REDEFINED."
  },
  collaborate: {
    pageSubtitle: "Partnerships",
    pageTitle: "Become a Muse",
    pageDescription: "We are constantly seeking creative visionaries to join our narrative. Whether you photograph elegance, style it, or wear it effortlessly—we want to create with you.",
    formTitle: "Initiate Contact",
    formSubtitle: "Introduce yourself and submit your portfolio.",
    types: [
      {
        id: 1,
        title: "Brand Ambassadors",
        desc: "For those who embody the AMMILY lifestyle. We partner with digital creators to showcase our timeless pieces in modern, everyday contexts.",
        image: "/images/Feature 1.jpg",
        imgPos: "object-top",
      },
      {
        id: 2,
        title: "Editorial Stylists",
        desc: "We provide exclusive access to upcoming collections for fashion stylists pulling for high-end editorials, red carpets, and creative magazines.",
        image: "/images/BOY FEATURING.jpg",
        imgPos: "object-center",
      },
      {
        id: 3,
        title: "Creative Photographers",
        desc: "Visionaries who capture elegance. We collaborate on unique campaign shoots, lookbooks, and visual storytelling that align with our brand identity.",
        image: "/images/Feature 2 (1).jpg",
        imgPos: "object-top",
      },
    ]
  },
  products: {
    shared: {
      sizes: ["XS", "S", "M", "L", "XL"],
      sortOptions: ["Newest", "Price: Low → High", "Price: High → Low"],
    },
    luxury: {
      title: "Luxury Suits",
      subtitle: "Luxury Suiting",
      description: "Modern tailoring designed for confidence and elegance. Explore refined silhouettes crafted with precision.",
      categories: ["All", "Two-Piece", "Blazers", "Trousers", "Accessories"],
      items: [
        { id: 1,  name: "Classic Tailored Suit",      price: 120, category: "Two-Piece",       image: "/images/PRODUCT (1).jpg", pos: "object-top" },
        { id: 2,  name: "Structured Blazer Set",      price: 145, category: "Blazers",         image: "/images/PRODUCT (2).jpg", pos: "object-center" },
        { id: 3,  name: "Minimal Power Suit",         price: 160, category: "Two-Piece",       image: "/images/PRODUCT (3).jpg", pos: "object-top" },
        { id: 4,  name: "Slim Fit Two-Piece",         price: 135, category: "Two-Piece",       image: "/images/PRODUCT (1).jpg", pos: "object-center" },
        { id: 5,  name: "Pleated Wide Trousers",      price: 98,  category: "Trousers",        image: "/images/PRODUCT (2).jpg", pos: "object-bottom" },
        { id: 6,  name: "Pinstripe Double Breasted",  price: 188, category: "Blazers",         image: "/images/PRODUCT (3).jpg", pos: "object-center" },
        { id: 7,  name: "Tailored Cropped Jacket",    price: 110, category: "Blazers",         image: "/images/PRODUCT (1).jpg", pos: "object-bottom" },
        { id: 8,  name: "Straight Leg Trousers",      price: 130, category: "Trousers",        image: "/images/PRODUCT (2).jpg", pos: "object-top" },
        { id: 9,  name: "Silk Pocket Square Set",     price: 42,  category: "Accessories",     image: "/images/PRODUCT (3).jpg", pos: "object-bottom" },
        { id: 10, name: "Leather Belt Duo",           price: 55,  category: "Accessories",     image: "/images/PRODUCT (1).jpg", pos: "object-[center_30%]" },
        { id: 11, name: "Wool Blend Suit",            price: 175, category: "Two-Piece",       image: "/images/PRODUCT (2).jpg", pos: "object-[center_20%]" },
        { id: 12, name: "Silver Cufflinks",           price: 65,  category: "Accessories",     image: "/images/PRODUCT (3).jpg", pos: "object-[center_40%]" },
      ]
    },
    casual: {
      title: "Casual Womenswear",
      subtitle: "Casual Collection",
      description: "Effortless everyday styles built for comfort and understated attitude. Designed for the modern muse.",
      categories: ["All", "T-Shirts", "Denim", "Knitwear", "Outerwear"],
      items: [
        { id: 1,  name: "Heavyweight Box Tee",     price: 45, category: "T-Shirts",       image: "/images/PRODUCT (1).jpg", pos: "object-top" },
        { id: 2,  name: "Relaxed Straight Denim",  price: 95, category: "Denim",          image: "/images/PRODUCT (2).jpg", pos: "object-center" },
        { id: 3,  name: "Oversized Wool Blend Sweater", price: 110, category: "Knitwear", image: "/images/PRODUCT (3).jpg", pos: "object-top" },
        { id: 4,  name: "Vintage Wash Hoodie",     price: 75, category: "Outerwear",      image: "/images/PRODUCT (1).jpg", pos: "object-center" },
        { id: 5,  name: "Everyday Basic Tee",      price: 35, category: "T-Shirts",       image: "/images/PRODUCT (2).jpg", pos: "object-bottom" },
        { id: 6,  name: "Wide Leg Carpenter Jeans",price: 115, category: "Denim",         image: "/images/PRODUCT (3).jpg", pos: "object-center" },
        { id: 7,  name: "Utility Overshirt",       price: 85, category: "Outerwear",      image: "/images/PRODUCT (1).jpg", pos: "object-bottom" },
        { id: 8,  name: "Chunky Cable Knit",       price: 130, category: "Knitwear",      image: "/images/PRODUCT (2).jpg", pos: "object-top" },
        { id: 9,  name: "Graphic Print Tee",       price: 40, category: "T-Shirts",       image: "/images/PRODUCT (3).jpg", pos: "object-bottom" },
        { id: 10, name: "Slim Tapered Denim",      price: 90, category: "Denim",          image: "/images/PRODUCT (1).jpg", pos: "object-[center_30%]" },
        { id: 11, name: "Lightweight Bomber",      price: 145, category: "Outerwear",     image: "/images/PRODUCT (2).jpg", pos: "object-[center_20%]" },
        { id: 12, name: "Ribbed Turtleneck",       price: 65, category: "Knitwear",       image: "/images/PRODUCT (3).jpg", pos: "object-[center_40%]" },
      ]
    },
    teens: {
      title: "Female Teens Wear",
      subtitle: "Teens Collection",
      description: "Youthful, energetic, and unapologetic styles for the next generation of fashion icons.",
      categories: ["All", "Tops", "Skirts", "Dresses", "Activewear"],
      items: [
        { id: 1,  name: "Cropped Graphic Baby Tee",  price: 35, category: "Tops",        image: "/images/PRODUCT (1).jpg", pos: "object-top" },
        { id: 2,  name: "Pleated Tennis Skirt",      price: 45, category: "Skirts",      image: "/images/PRODUCT (2).jpg", pos: "object-center" },
        { id: 3,  name: "Ribbed Knit Mini Dress",    price: 65, category: "Dresses",     image: "/images/PRODUCT (3).jpg", pos: "object-top" },
        { id: 4,  name: "Oversized Zip Hoodie",      price: 75, category: "Activewear",  image: "/images/PRODUCT (1).jpg", pos: "object-center" },
        { id: 5,  name: "Y2K Cargo Midi Skirt",      price: 55, category: "Skirts",      image: "/images/PRODUCT (2).jpg", pos: "object-bottom" },
        { id: 6,  name: "Seamless Workout Set",      price: 85, category: "Activewear",  image: "/images/PRODUCT (3).jpg", pos: "object-center" },
        { id: 7,  name: "Cutout Halter Top",         price: 40, category: "Tops",        image: "/images/PRODUCT (1).jpg", pos: "object-bottom" },
        { id: 8,  name: "Denim Overall Dress",       price: 70, category: "Dresses",     image: "/images/PRODUCT (2).jpg", pos: "object-top" },
        { id: 9,  name: "Corset Style Tank",         price: 45, category: "Tops",        image: "/images/PRODUCT (3).jpg", pos: "object-bottom" },
        { id: 10, name: "Flared Yoga Pants",         price: 50, category: "Activewear",  image: "/images/PRODUCT (1).jpg", pos: "object-[center_30%]" },
        { id: 11, name: "Slip Maxi Dress",           price: 90, category: "Dresses",     image: "/images/PRODUCT (2).jpg", pos: "object-[center_20%]" },
        { id: 12, name: "Asymmetric Maxi Skirt",     price: 60, category: "Skirts",      image: "/images/PRODUCT (3).jpg", pos: "object-[center_40%]" },
      ]
    }
  }
};
