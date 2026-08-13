import kitchen1 from "../assets/images/interior/kitchen-1.jpg";
import interiorVideo1 from "../assets/videos/interior/Interior-1.mp4";
import interiorVideo2 from "../assets/videos/interior/Interior-2.mp4";
import interiorimages3 from "../assets/images/interior/Intproject1.jpg"
import interiorimages4 from "../assets/images/interior/Intproject1b.jpg"
import interiorimages5 from "../assets/images/interior/Intproject1c.jpg"
import interiorvideo6 from "../assets/videos/interior/Intproject1d.MP4"


const interiorProjects = [
  {
    id: 1,
    slug: "modern-kitchen-interior",

    title: "Modern Kitchen Interior",

    description:
      "A contemporary kitchen interior designed to create a balance between functionality, comfort and refined aesthetics.",

    category: "Interior Design",

    location: "Lagos, Nigeria",

    year: "2026",

    status: "Completed",

    coverImage: kitchen1,

    images: [
      kitchen1,
    ],

    videos: [
      interiorVideo1,
      interiorVideo2
    ],
  },


  {
    id: 2,
    slug: "modern-toilet interior renovation",
    title: "Modern Toilet Interior Renovation",
    description:
      "A contemporary toilet interior renovation featuring clean architectural lines, modern lighting and carefully considered exterior detailing.",
    category: "Residential Design",
    location: "Lagos, Nigeria",
    year: "2026",
    status: "Completed",
    coverImage: interiorimages3,
    images: [
      interiorimages4,
      interiorimages5,
    ],
    videos: [
      interiorvideo6
    ],
  },

];



export default interiorProjects;