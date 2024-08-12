export const navItems = [
  { path: "/", title: "Home" },
  { path: "/about-us", title: "About Us" },
  {
    path: "/our-products",
    title: "Products",
    dropdown: true,
    subItems: [
      { path: "/our-products/solid-parquets", title: "Solid Parquets" },
      { path: "/our-products/mosaic-parquets", title: "Mosaic Parquets" },
      { path: "/our-products/laser-inlays", title: "Laser Inlays" },
      { path: "/our-products/outdoor-decking", title: "Outdoor Decking" },
      { path: "/our-products/garden-furniture", title: "Garden Furniture" },
    ],
  },
  { path: "/events-news", title: "Events & News" },
];
export const contact = [{ path: "/contact-us", title: "Contact Us" }];

export const carouselImages = [
  "../images/carouselImages/img1.jpg", // replace with your image paths
  "../images/carouselImages/img2.jpg",
  "../images/carouselImages/img3.jpg",
  "../images/carouselImages/img4.jpg",
  "../images/carouselImages/img5.jpg",
  "../images/carouselImages/img6.jpg",
];

export const woodSpeciesImages = [
  [
    { src: "../images/woodColors/Afromosia.png", alt: "Afromosia" },
    { src: "../images/woodColors/Cherry.png", alt: "Cherry" },
  ],
  [
    { src: "../images/woodColors/Doussie.png", alt: "Doussie" },
    { src: "../images/woodColors/Iroko.png", alt: "Iroko" },
    { src: "../images/woodColors/Mahogany.png", alt: "Mahogany" },
  ],
  [
    { src: "../images/woodColors/Padouk.png", alt: "Padouk" },
    { src: "../images/woodColors/Panga.png", alt: "Panga" },
  ],
  [
    { src: "../images/woodColors/Pine.png", alt: "Pine" },
    { text: "Our Products", isCenter: true },
    { src: "../images/woodColors/RedOak.png", alt: "Red Oak" },
  ],
  [
    { src: "../images/woodColors/Tali.png", alt: "Tali" },
    { src: "../images/woodColors/Sapelli.png", alt: "Sapelli" },
  ],
  [
    { src: "../images/woodColors/Teak.png", alt: "Teak" },
    { src: "../images/woodColors/Walnut.png", alt: "Walnut" },
    { src: "../images/woodColors/Wenge.png", alt: "Wenge" },
  ],
  [
    { src: "../images/woodColors/YellowPine.png", alt: "Yellow Pine" },
    { src: "../images/woodColors/Pine.png", alt: "Pine" },
  ],
];


// data/constants.js
export const productsgroups = [
  { name: "Solid Parquets", link: "our-products/solid-parquets" },
  { name: "Mosaic Parquets", link: "our-products/mosaic-parquets" },
  { name: "Laser Inlays", link: "our-products/laser-inlays" },
  { name: "Outdoor Decking", link: "our-products/outdoor-decking" },
  { name: "Garden Furniture", link: "our-products/garden-furniture" }
];

export const partners = [
  {
    id: 1,
    name: "Bona",
    logo: "../images/Business Partners/Bona.png",linkWebsite:"https://www.bona.com/en/"
  },
  { id: 2, name: "Ciranova", logo: "../images/Business Partners/Ciranova.png",linkWebsite:"https://ciranovastore.com/" },
  { id: 3, name: "HyperGrinder", logo: "../images/Business Partners/HyperGrinder.png",linkWebsite:"https://www.hypergrinder.com/en/" },
  { id: 4, name: "LobaOnTop", logo: "../images/Business Partners/LobaOnTop.png",linkWebsite:"https://www.loba.de/" },
  { id: 5, name: "LumberAmerica", logo: "../images/Business Partners/LumberAmerica.png",linkWebsite:"http://lumber-america.com/" },
  {
    id: 6,
    name: "MilesiWoodCoatings",
    logo: "../images/Business Partners/MilesiWoodCoatings.png",linkWebsite:"https://www.milesi.com/en/"
  },
  { id: 7, name: "Wakol", logo: "../images/Business Partners/Wakol.png",linkWebsite:"https://www.wakol.com/en" },
  
];