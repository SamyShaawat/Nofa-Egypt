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
    { src: "../images/woodColors/Afromosia.png", title: "Afromosia", aosDelay: "0", delayTitle: "100", },
    { src: "../images/woodColors/Cherry.png", title: "Cherry", aosDelay: "100", delayTitle: "200", },
  ],
  [
    { src: "../images/woodColors/Doussie.png", title: "Doussie", aosDelay: "200", delayTitle: "300", },
    { src: "../images/woodColors/Iroko.png", title: "Iroko", aosDelay: "300", delayTitle: "400", },
    { src: "../images/woodColors/Mahogany.png", title: "Mahogany", aosDelay: "400", delayTitle: "500", },
  ],
  [
    { src: "../images/woodColors/Padouk.png", title: "Padouk", aosDelay: "500", delayTitle: "600", },
    { src: "../images/woodColors/Panga.png", title: "Panga", aosDelay: "600", delayTitle: "700", },
  ],
  [
    { src: "../images/woodColors/Pine.png", title: "Pine", aosDelay: "700", delayTitle: "800", },
    { text: "Our Products", isCenter: true, aosDelay: "800", delayTitle: "900", },
    { src: "../images/woodColors/RedOak.png", title: "Red Oak", aosDelay: "900", delayTitle: "1000", },
  ],
  [
    { src: "../images/woodColors/Tali.png", title: "Tali", aosDelay: "1000", delayTitle: "1100", },
    { src: "../images/woodColors/Sapelli.png", title: "Sapelli", aosDelay: "1100", delayTitle: "1200", },
  ],
  [
    { src: "../images/woodColors/Teak.png", title: "Teak", aosDelay: "1200", delayTitle: "1300", },
    { src: "../images/woodColors/Walnut.png", title: "Walnut", aosDelay: "1300", delayTitle: "1400", },
    { src: "../images/woodColors/Wenge.png", title: "Wenge", aosDelay: "1400", delayTitle: "1500", },
  ],
  [
    { src: "../images/woodColors/YellowPine.png", title: "Yellow Pine", aosDelay: "1500", delayTitle: "1600", },
    { src: "../images/woodColors/Pine.png", title: "Pine", aosDelay: "1600", delayTitle: "1700", },
  ],
];

export const productsgroups = [
  { name: "Solid Parquets", link: "our-products/solid-parquets", aosDelay: "0", },
  { name: "Mosaic Parquets", link: "our-products/mosaic-parquets", aosDelay: "200", },
  { name: "Laser Inlays", link: "our-products/laser-inlays", aosDelay: "400", },
  { name: "Outdoor Decking", link: "our-products/outdoor-decking", aosDelay: "600", },
  { name: "Garden Furniture", link: "our-products/garden-furniture", aosDelay: "800", }
];

export const partners = [
  {
    id: 1,
    name: "Bona",
    logo: "../images/Business Partners/Bona.png", linkWebsite: "https://www.bona.com/en/"
  },
  { id: 2, name: "Ciranova", logo: "../images/Business Partners/Ciranova.png", linkWebsite: "https://ciranovastore.com/" },
  { id: 3, name: "HyperGrinder", logo: "../images/Business Partners/HyperGrinder.png", linkWebsite: "https://www.hypergrinder.com/en/" },
  { id: 4, name: "LobaOnTop", logo: "../images/Business Partners/LobaOnTop.png", linkWebsite: "https://www.loba.de/" },
  { id: 5, name: "LumberAmerica", logo: "../images/Business Partners/LumberAmerica.png", linkWebsite: "http://lumber-america.com/" },
  {
    id: 6,
    name: "MilesiWoodCoatings",
    logo: "../images/Business Partners/MilesiWoodCoatings.png", linkWebsite: "https://www.milesi.com/en/"
  },
  { id: 7, name: "Wakol", logo: "../images/Business Partners/Wakol.png", linkWebsite: "https://www.wakol.com/en" },

];