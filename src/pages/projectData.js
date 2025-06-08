// home interior images
import p1m1 from '../assets/project1/m1.jpeg'
import p1m2 from '../assets/project1/m2.jpeg'
import p1m3 from '../assets/project1/m3.jpeg'
import p1m4 from '../assets/project1/m4.jpeg'
import p1m5 from '../assets/project1/m5.jpeg'
import p1m6 from '../assets/project1/m6.jpeg'
import p1m7 from '../assets/project1/m7.jpeg'
import p1m8 from '../assets/project1/m8.jpeg'
import p1m9 from '../assets/project1/m9.jpeg'
import p1m10 from '../assets/project1/m10.jpeg'
// office interior images
import p2m1 from '../assets/project2/m1.jpeg'
import p2m2 from '../assets/project2/m2.jpeg'
import p2m3 from '../assets/project2/m3.jpeg'
import p2m4 from '../assets/project2/m4.jpeg'
import p2m5 from '../assets/project2/m5.jpeg'
import p2m6 from '../assets/project2/m6.jpeg'
import p2m7 from '../assets/project2/m7.jpeg'
// your dream home images
import p3m1 from '../assets/project3/m1.jpeg'
import p3m2 from '../assets/project3/m2.jpeg'
import p3m3 from '../assets/project3/m3.jpeg'
import p3m4 from '../assets/project3/m4.jpeg'
import p3m5 from '../assets/project3/m5.jpeg'
import p3m6 from '../assets/project3/m6.jpeg'
import p3m7 from '../assets/project3/m7.jpeg'
import p3m8 from '../assets/project3/m8.jpeg'
import p3m9 from '../assets/project3/m9.jpeg'
import p3m10 from '../assets/project3/m10.jpeg'

// school interior images
import p4m1 from '../assets/project4/m1.jpeg'
import p4m2 from '../assets/project4/m2.jpeg'
import p4m3 from '../assets/project4/m3.jpeg'
import p4m5 from '../assets/project4/m5.jpeg'
import p4m6 from '../assets/project4/m6.jpeg'
import p4m7 from '../assets/project4/m7.jpeg'
import p4m9 from '../assets/project4/m9.jpeg'


// Sample project data (would normally come from an API)
export const projectsData = [
  {
    id: 1,
    title: "Azure Horizon Tower",
    description:
      "A 42-story mixed-use skyscraper featuring sustainable design elements and a distinctive silhouette on the city skyline.",
    fullDescription: `The Azure Horizon Tower stands as a beacon of sustainable architecture in the heart of Mumbai's financial district. This 42-story mixed-use development integrates commercial office spaces, luxury residential apartments, and retail facilities in a harmonious vertical community.

    The design responds to India's tropical climate with passive cooling strategies, including a double-skin façade that reduces solar heat gain while maximizing natural light. The tower's distinctive stepped form creates a series of sky gardens and terraces that serve as communal spaces and contribute to the building's biophilic design approach.

    Sustainable features include:
    • Rainwater harvesting and greywater recycling systems
    • Rooftop solar panels providing 15% of the building's energy needs
    • Smart building management systems optimizing energy usage
    • Vertical gardens that improve air quality and reduce heat island effect

    The Azure Horizon Tower has received LEED Platinum certification and the Indian Green Building Council's 5-star rating.`,
    client: "Horizon Developments",
    location: "Mumbai, India",
    year: "2022",
    area: "75,000 sqm",
    category: "Commercial",
    image:p1m1,
    gallery: [
      p1m2,
      p1m3,
      p1m4,
      p1m5,
      p1m6,
      p1m7,
      p1m8,
      p1m9,
      p1m10,
    ],
  },
  {
    id: 2,
    title: "Hazel Overseas Office",
    description:
      "This modern office space showcases a creative world map mural featuring iconic global landmarks, symbolizing international reach and cultural diversity. ",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Goa, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Residential",
    image:
      p2m1,
    gallery: [
      p2m2,
      p2m3,
      p2m4,
      p2m5,
      p2m6,
      p2m7
      
    ],
  },
  {
    id: 3,
    title: "Sustainable Homes",
    description:
      "This elegant interior design features a harmonious blend of warm tones and modern-classic elements, creating a luxurious yet inviting living space.",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Delhi, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Cultural",
    image:p3m1,
    gallery: [
      p3m2,
      p3m3,
      p3m4,
      p3m5,
      p3m6,
      p3m7,
      p3m8,
      p3m9,
      p3m10,
    ],
  },
  {
    id: 4,
    title: "Tagore Public School",
    description:
      "This modern school building design combines clean lines and warm textures, reflecting a balance of innovation and tradition. ",
    fullDescription: `The Serenity Eco Villas project comprises a collection of 24 luxury residences nestled along the coastline of Goa. Each villa is uniquely designed to harmonize with its specific site conditions while maintaining a cohesive architectural language throughout the development.

    Our design approach prioritized environmental sensitivity and local context. The villas feature traditional Goan architectural elements reinterpreted through a contemporary lens, with sloping roofs, verandas, and courtyards that respond to the tropical climate while creating comfortable living spaces.

    Key design features include:
    • Open floor plans that maximize cross-ventilation and reduce the need for mechanical cooling
    • Strategic orientation to capture prevailing sea breezes and protect from harsh afternoon sun
    • Locally sourced materials including laterite stone, reclaimed teak, and handcrafted tiles
    • Infinity pools that visually blend with the Arabian Sea horizon
    • Drought-resistant landscaping using native species that require minimal irrigation

    The project has won multiple awards for its sustainable approach to luxury residential design, including the prestigious Indian Institute of Architects' Excellence in Architecture Award.`,
    client: "GreenHaven Properties",
    location: "Bangalore, India",
    year: "2021",
    area: "42,000 sqm",
    category: "Commercial",
    image:
      p4m1,
      gallery: [
        p4m2,
        p4m3,
        p4m9,
        p4m5,
        p4m6,
        p4m7
       
      ],
  },
  
  

  // More projects would follow the same pattern
];
