export type MenuCategory = "Kopi" | "Non-Kopi" | "Makanan";

export interface MenuItem {
  title: string;
  price: string;
  desc: string;
  tag: string;
  category: MenuCategory;
  image: string;
  featured?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    title: "Es Kopi Susu Nusantara",
    price: "Rp 20rb",
    desc: "Espresso double shot, gula aren asli, dan susu segar pilihan.",
    tag: "Best Seller",
    category: "Kopi",
    image: "/images/menu/es-kopi-susu.jpg",
    featured: true,
  },
  {
    title: "Manual Brew Gayo V60",
    price: "Rp 25rb",
    desc: "Single origin Arabika Aceh Gayo dengan aroma fruity notes yang segar.",
    tag: "Single Origin",
    category: "Kopi",
    image: "/images/menu/manual-brew-gayo.jpg",
    featured: true,
  },
  {
    title: "Americano Dingin",
    price: "Rp 18rb",
    desc: "Espresso murni dengan air dingin, pahit bersih dan menyegarkan.",
    tag: "Klasik",
    category: "Kopi",
    image: "/images/menu/americano.jpg",
    featured: true,
  },
  {
    title: "Kopi Susu Aren",
    price: "Rp 22rb",
    desc: "Espresso dengan gula aren cair dan susu segar, manis alami.",
    tag: "Favorit",
    category: "Kopi",
    image: "/images/menu/kopi-susu-aren.jpg",
  },
  {
    title: "Cappuccino",
    price: "Rp 23rb",
    desc: "Espresso, susu steamed, dan foam lembut dengan taburan cokelat.",
    tag: "Klasik",
    category: "Kopi",
    image: "/images/menu/cappuccino.jpg",
  },
  {
    title: "Kopi Tubruk",
    price: "Rp 15rb",
    desc: "Seduhan kopi tradisional dengan biji kopi murni, kental dan aromatik.",
    tag: "Tradisional",
    category: "Kopi",
    image: "/images/menu/kopi-tubruk.jpg",
  },
  {
    title: "Matcha Cream Latte",
    price: "Rp 22rb",
    desc: "Matcha Jepang premium dengan foam susu yang lembut dan manis pas.",
    tag: "Non-Kopi",
    category: "Non-Kopi",
    image: "/images/menu/matcha-latte.jpg",
    featured: true,
  },
  {
    title: "Cokelat Panas Artisan",
    price: "Rp 21rb",
    desc: "Cokelat couverture lokal yang creamy, cocok untuk sore hari.",
    tag: "Hangat",
    category: "Non-Kopi",
    image: "/images/menu/cokelat-panas.jpg",
    featured: true,
  },
  {
    title: "Artisan Earl Grey Tea",
    price: "Rp 18rb",
    desc: "Seduhan teh hitam aromatik dengan sentuhan rasa citrus yang menenangkan.",
    tag: "Teh",
    category: "Non-Kopi",
    image: "/images/menu/earl-grey.jpg",
  },
  {
    title: "Chocolate Mint",
    price: "Rp 24rb",
    desc: "Cokelat Belgian dengan sentuhan mint segar dan whipped cream.",
    tag: "Spesial",
    category: "Non-Kopi",
    image: "/images/menu/chocolate-mint.jpg",
  },
  {
    title: "Lemon Squash",
    price: "Rp 19rb",
    desc: "Perasan lemon segar, soda, dan madu lokal, cocok untuk siang hari.",
    tag: "Segar",
    category: "Non-Kopi",
    image: "/images/menu/lemon-squash.jpg",
  },
  {
    title: "Roti Bakar Kaya Butter",
    price: "Rp 18rb",
    desc: "Roti panggang renyah dengan selai srikaya dan butter melimpah.",
    tag: "Camilan",
    category: "Makanan",
    image: "/images/menu/roti-bakar.jpg",
    featured: true,
  },
  {
    title: "Pisang Goreng Keju",
    price: "Rp 17rb",
    desc: "Pisang raja goreng renyah dengan parutan keju dan susu kental.",
    tag: "Favorit",
    category: "Makanan",
    image: "/images/menu/pisang-goreng.jpg",
    featured: true,
  },
  {
    title: "Cireng Bumbu Rujak",
    price: "Rp 15rb",
    desc: "Camilan khas renyah di luar, lembut di dalam dengan bumbu pedas manis.",
    tag: "Camilan",
    category: "Makanan",
    image: "/images/menu/cireng.jpg",
  },
  {
    title: "Kentang Goreng Truffle",
    price: "Rp 20rb",
    desc: "Kentang goreng crisp dengan bumbu truffle oil dan parmesan.",
    tag: "Spesial",
    category: "Makanan",
    image: "/images/menu/kentang-truffle.jpg",
  },
];

export const menuCategories = ["Semua", "Kopi", "Non-Kopi", "Makanan"] as const;
export type MenuFilter = (typeof menuCategories)[number];
