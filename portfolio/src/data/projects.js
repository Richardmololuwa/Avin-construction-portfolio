import hero from "../assets/images/hero.jpg";
import ProjectHead from "../assets/images/ProjectHead.jpg";
import project2 from "../assets/images/project2.jpg";
import project1A from "../assets/images/project1A.jpg"
import Project1B from "../assets/images/Project1B.jpg"
import Project1C from "../assets/images/Project1C.jpg"
import Project1D from "../assets/images/Project1D.jpg"
import Pimage13 from "../assets/images/Pimage13.jpg"
import Pimage12 from "../assets/images/Pimage12.jpg"
import Pimage6 from "../assets/images/Pimage6.jpg"
import Pimage5 from "../assets/images/Pimage5.jpg"
import Pimage7 from "../assets/images/Pimage7.jpg"
import Pimage8 from "../assets/images/Pimage8.jpg"

import Project3D from "../assets/images/Project3D.jpeg"
import Project3A from "../assets/images/Project3A.jpeg"
import Project3C from "../assets/images/Project3C.jpeg"
import Project3E from "../assets/images/Project3E.jpeg"
import Project3F from "../assets/images/Project3F.jpeg"
import Project4A from "../assets/images/Project4A.jpeg"
import Project4B from "../assets/images/Project4B.jpeg"
import Project4C from "../assets/images/Project4C.jpeg"
import Project4D from "../assets/images/Project4D.jpeg"
import Project4E from "../assets/images/Project4E.jpeg"
import Project5A from "../assets/images/Project5A.jpg"
import Project5B from "../assets/images/Project5B.jpg"
import Project5C from "../assets/images/Project5C.jpg"
import Project5D from "../assets/images/Project5D.jpg"
import Project5E from "../assets/images/Project5E.jpg"
import Project5F from "../assets/images/Project5F.jpg"
import Project6V from "../assets/videos/Project6V.mp4"

const projects = [
  {
    id: 1,
    slug: "modern-luxury-duplex",

    title: "Creche- Royal Garden Ajah Lagos",

    description:
      "A thoughtfully designed creche that creates a safe, nurturing, and stimulating environment for early childhood development. The design prioritizes comfort, natural light, accessibility, and playful spaces that encourage learning, creativity, and social interaction.",

    tech: "institutional (civic)",

    location: "Lagos, Nigeria",

    year: "2019 ",

    status: "Under Construction ",

    coverImage: ProjectHead,

    concept:
      "“Learning Through Play” The design blends functionality with playful architectural elements, using vibrant spaces, soft forms, natural ventilation, and child-friendly proportions to create an environment where children can learn, explore, and grow comfortably.",

    images: [
      project1A,
      Project1B,
      Project1C,
      Project1D,
    ],
  },

  {
    id: 2,
    slug: "elegant-contemporary-villa",

    title: "The Obasa gate house ",

    description:
      "A modern estate gate house designed to provide security, controlled access, and a welcoming entrance experience. The design combines functionality with a clean and contemporary architectural character.",

    tech: "Residential",

    location: "Lagos, Nigeria",

    year: "July 2023 - August 2023",

    status: "Completed",

    coverImage: Pimage13,

    concept:
      "The design is inspired by modern simplicity and strong visual identity, using clean lines, balanced forms, and carefully selected materials to create a secure yet welcoming entrance. The gate house serves as both a functional security point and a defining feature of the estate.",

    images: [
      Pimage12,
      Pimage6,
      Pimage5,
      Pimage7,
      Pimage8,

    ],
  },

  {
    id: 3,
    slug: "4-bedroom-duplex-with-a-bq(2units)",

    title: "4 bedroom Duplex with a Bq(2units)",

    description:
      "A contemporary 4-bedroom duplex with a Boys’ Quarters (BQ), thoughtfully designed to combine comfort, privacy, and modern family living. The design prioritizes functional spaces, natural light, ventilation, and a strong connection between the interior and outdoor environment.",

    tech: "Residential",

    location: "Lagos, Nigeria",

    year: "2026",

    status: "Completed",

    coverImage: Project3D,

    concept:
      "The concept is centered on “Modern Simplicity: A clean architectural form, balanced proportions, and carefully framed openings that create a bold yet welcoming identity. The BQ is positioned to provide convenience and privacy while maintaining harmony with the main residence.",

    images: [
      Project3D,
      Project3A,
      Project3C,
      Project3E,
      Project3F,
    ],
  },

  {
    id: 4,
    slug: "Ministry of Agriculture Abeokuta(interior hall)",

    title: "Ministry of Agriculture Abeokuta(interior hall)",

    description:
      "The Ministry of Agriculture Conference Room in Abeokuta is designed as a contemporary space for collaboration, dialogue, and strategic decision-making. The project creates an environment where agricultural stakeholders, policymakers, researchers, and industry partners can come together to shape ideas that support sustainable agriculture and food security.",

    tech: "Public/Institutional",

    location: "Lagos, Nigeria",

    year: "Aug 2024 - Nov 2024 ",

    status: "Completed",

    coverImage: Project4B,

    concept:
      "The Agriculture conference hall is conceived as a dynamic platform for communication, collaboration, and decision making. The design focuses on clear visibility, comfortable interaction, acoustic control, and flexible seating, creating an environment where ideas can be shared and transformed into meaningful action.",

    images: [
      Project4A,
      Project4B,
      Project4C,
      Project4D,
      Project4E,
      
    ],
  },

  {
    id: 5,
    slug: "Ogudu police station Lagos Nigeria",

    title: "Ogudu police station Lagos Nigeria",

    description:
      "The police station renovation project focuses on transforming an existing facility into a more functional, secure, and welcoming environment. The design seeks to improve operational efficiency, public accessibility, staff welfare, and overall safety while giving the station a modern and dignified identity.",

    tech: "Institutional (Civic)",

    location: "Lagos, Nigeria",

    year: "2025 ",

    status: "Completed",

    coverImage: Project5A,

    concept:
      "“Security Through Simplicity.”The concept combines clear spatial organization, controlled circulation, natural lighting, and durable materials to create a facility that feels secure without appearing intimidating. Public and restricted areas are clearly separated, while improved entrances, waiting areas, offices, and staff spaces create a more efficient and human-centred police environment.",

    images: [
      Project5A,
      Project5B,
      Project5C,
      Project5D,
      Project5E,
      Project5F,
      
    ],
  },

      {
      id: 6,
      slug: "Sergeant Quarters block 43&44",
      title: "Sergeant Quarters block 43&44",
      description:
        "The project involves the renovation and modernization of an existing military quarters block, aimed at improving functionality, comfort, safety, and overall living conditions while preserving the building’s structural integrity and institutional character.",
      tech: "Institutional (military)",

      coverImage: Project5A,

      video: Project6V,

      location: "Ojor Barack Div 2 Cantoment Ibadan Oyo state ",
      year: "March 2025 - June 2025",
      status: "Completed",

      concept:
        "The design focuses on order, durability, and simplicity, reflecting the disciplined character of a military environment. The renovation introduces a clean contemporary façade, improved spatial organization, natural ventilation, enhanced lighting, durable finishes, and upgraded services. The result is a more comfortable, efficient, and dignified residential environment while maintaining a strong sense of identity and permanence.",

      images: []
    }


];

export default projects;