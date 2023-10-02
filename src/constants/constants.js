import welcome1 from "../assets/welcome/welcome1.webp";
import welcome2 from "../assets/welcome/welcome2.webp";
import welcome3 from "../assets/welcome/welcome3.webp";
import welcome4 from "../assets/welcome/welcome4.png";

import shop1 from "../assets/shopour/shop1.webp";
import shop2 from "../assets/shopour/shop2.webp";
import shop3 from "../assets/shopour/shop3.webp";
import shop4 from "../assets/shopour/shop4.webp";
import shop5 from "../assets/shopour/shop5.webp";
import shop6 from "../assets/shopour/shop6.webp";

import blog1 from "../assets/blog/hutomo-abrianto-nPdsMgvL9QM-unsplash_2.webp";
import blog2 from "../assets/blog/le-buzz-zQLYPVt89d4-unsplash.webp";
import blog3 from "../assets/blog/sule-makaroglu-ERYdlJuRnHI-unsplash.webp";

export const welcomePage = [
  { id: 1, href: "#bestsellers", imgURL: `${welcome1}` },
  { id: 2, href: "#forhome", imgURL: `${welcome2}` },
  { id: 3, href: "#templates", imgURL: `${welcome3}` },
  { id: 4, href: "#ourpicks", imgURL: `${welcome4}` },
];

export const shopOurConst = [
  { id: 1, name: "Ceramic mug", price: "500$", imgURL: `${shop1}` },
  {
    id: 2,
    name: "White & Blue Linen Pillows",
    price: "450$",
    imgURL: `${shop2}`,
  },
  { id: 3, name: "LINEN THROW PILLOWS", price: "500$", imgURL: `${shop3}` },
  { id: 4, name: "EBOOK TEMPLATE", price: "500$", imgURL: `${shop4}` },
  { id: 5, name: "THANK YOU CARD", price: "500$", imgURL: `${shop5}` },
  { id: 6, name: "BUSINESS CARD", price: "5$", imgURL: `${shop6}` },
];

export const blogConst = [
  { id: 1, name: "OUR FAVE WEBSITE TO DIY YOUR DECOR", imgURL: `${blog1}` },
  { id: 2, name: "COME BRUNCH WITH ME", imgURL: `${blog2}` },
  { id: 3, name: "CREATE A COZY CORNER", imgURL: `${blog3}` },
];
