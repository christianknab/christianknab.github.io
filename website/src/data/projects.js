// eslint-disable-next-line import/no-webpack-loader-syntax
import ucsc_menu from '!!raw-loader!../content/projects/ucsc_menu.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import snail_mail from '!!raw-loader!../content/projects/snail_mail.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import eko from '!!raw-loader!../content/projects/eko.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import peergrader from '!!raw-loader!../content/projects/peergrader.md';
// eslint-disable-next-line import/no-webpack-loader-syntax
import grocery_inventory from '!!raw-loader!../content/projects/grocery_inventory.md';

import ucsc_menu_appicon from '../images/ucsc-menu-app/app_icon.png';
import anylist_appicon from '../images/anylist_appicon.png';
import peergrader_image from '../images/peergrader.png';
import eko_appicon from '../images/eko_appicon.png';
import snail_icon from '../images/snail_icon.png';

export const projects = [
  {
    id: 5,
    slug: "ucsc-menu-app",
    title: "UCSC Menu App",
    description: "Dining Hall app for UC Santa Cruz Students",
    content: ucsc_menu,
    tags: ["Flutter", "Firebase", "Google Cloud", "Go", "Google ADs"],
    link: "https://apps.apple.com/us/app/ucsc-menu/id1670523487?platform=iphone",
    linkText: "App Store",
    github: "https://github.com/nunibye/Menu-App",
    featured: true,
    image: ucsc_menu_appicon
  },
  {
    id: 2,
    slug: "grocery-inventory",
    title: "Grocery Inventory",
    description: "Integrating barcode scanner to track home pantry items with AnyList",
    content: grocery_inventory,
    tags: ["JavaScript", "Python", "Raspberry Pi"],
    github: "https://github.com/christianknab/grocery-inventory",
    featured: true,
    image: anylist_appicon
  },
  {
    id: 1,
    slug: "snail-mail",
    title: "Snail Mail",
    description: "Family messaging app",
    content: snail_mail,
    tags: ["Flutter", "Supabase", "FCM", "Google Analytics"],
    link: "https://testflight.apple.com/join/r9rpwEcG",
    linkText: "Test Flight",
    github: "",
    featured: true,
    image: snail_icon
  },
  {
    id: 4,
    slug: "eko",
    title: "Eko",
    description: "X/Threads-like social media app",
    content: eko,
    tags: ["Flutter", "Firebase", "Google Cloud", "Go", "Node.js", "FCM"],
    link: "https://apps.apple.com/us/app/eko/id6470772031?platform=iphone",
    linkText: "App Store",
    github: "https://github.com/nunibye/eko",
    featured: true,
    image: eko_appicon
  },
  {
    id: 3,
    slug: "peergrader",
    title: "PeerGrader",
    description: "Peer grading website for instructors and students",
    content: peergrader,
    tags: ["Agile", "React", "TailwindCSS", "Supabase", "PostgreSQL"],
    link: "https://youtu.be/VBcMq8lCN_w",
    linkText: "YouTube Demo",
    github: "https://github.com/christianknab/peergrader",
    featured: true,
    image: peergrader_image
  }
];