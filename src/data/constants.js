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
