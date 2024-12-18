// eslint-disable-next-line import/no-webpack-loader-syntax
import ucsc_menu from '!!raw-loader!../content/projects/ucsc_menu.md';

import ucsc_menu_appicon from '../images/ucsc-menu-app/app_icon.png';
import anylist_appicon from '../images/anylist_appicon.png';
import peergrader from '../images/peergrader.png';
import eko_appicon from '../images/eko_appicon.png';
import snail_icon from '../images/snail_icon.png';

export const projects = [
  {
    id: 5,
    slug: "ucsc-menu-app",
    title: "UCSC Menu App",
    description: "Dining Hall app for UC Santa Cruz Students",
    content: ucsc_menu,
    tags: ["Flutter", "Firebase", "Google Cloud", "Go"],
    link: "https://apps.apple.com/us/app/ucsc-menu/id1670523487?platform=iphone",
    linkText: "App Store",
    github: "https://github.com/nunibye/Menu-App",
    featured: true,
    image: ucsc_menu_appicon
  },
  {
    id: 1,
    slug: "snail-mail",
    title: "Snail Mail",
    description: "Family messaging app",
    content: ucsc_menu,
    tags: ["Flutter", "Supabase", "FCM", "Google Analytics"],
    github: "",
    featured: true,
    image: snail_icon
  },
  {
    id: 2,
    slug: "grocery-inventory",
    title: "Grocery Inventory",
    description: "Integrating barcode scanner to track home pantry items with AnyList",
    content: ucsc_menu,
    tags: ["JavaScript", "Python", "Raspberry Pi"],
    github: "https://github.com/christianknab/grocery-inventory",
    featured: true,
    image: anylist_appicon
  },
  {
    id: 3,
    slug: "peergrader",
    title: "PeerGrader",
    description: "Dining Hall app for UC Santa Cruz Students",
    content: ucsc_menu,
    tags: ["Agile", "React", "TailwindCSS", "Supabase", "PostgreSQL"],
    link: "https://peergrader.vercel.app/",
    linkText: "Website",
    github: "https://github.com/christianknab/peergrader",
    featured: true,
    image: peergrader
  },
  {
    id: 4,
    slug: "eko",
    title: "Eko",
    description: "X/Threads-like social media app",
    content: ucsc_menu,
    tags: ["Flutter", "Firebase", "Google Cloud", "Node.js"],
    link: "https://apps.apple.com/us/app/eko/id6470772031?platform=iphone",
    linkText: "App Store",
    github: "https://github.com/nunibye/Menu-App",
    featured: true,
    image: eko_appicon
  },
  
];