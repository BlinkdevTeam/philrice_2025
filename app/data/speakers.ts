export type Speaker = {
  id: number;
  name: string;
  title: string; // Role / designation
  image: string;
  description?: string;
  presentationTitle?: string; // New field for the talk/presentation
};

export type SpeakerSection = {
  sectionTitle: string;
  speakers: Speaker[];
};

// ✅ Keynote Speakers
export const keynoteSpeakers: Speaker[] = [
  {
    id: 1,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/Speaker1.png",
    description:
      "Engr. Recoter leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
    presentationTitle: "Innovating Rice Seed Systems for Sustainability",
  },
  {
    id: 2,
    name: "Dr. John A. Doe",
    title: "Senior Researcher (DA-PhilRice)",
    image: "/assets/speakers/Speaker1.png",
    description:
      "Dr. John A. Doe leads research and development programs for rice innovations.",
    presentationTitle: "Next-Generation Rice R&D Approaches",
  },
  {
    id: 3,
    name: "Engr. Maria L. Santos",
    title: "Project Leader (PhilRice Central)",
    image: "/assets/speakers/Speaker1.png",
    description: "Leads projects and research initiatives at PhilRice Central.",
    presentationTitle: "Project Management in Agricultural Research",
  },
  {
    id: 4,
    name: "Dr. Juan Dela Cruz",
    title: "Agri-Tech Innovator",
    image: "/assets/speakers/Speaker1.png",
    description: "Specializes in agriculture technology and innovation.",
    presentationTitle: "Agri-Tech Solutions for Modern Farming",
  },
  {
    id: 5,
    name: "Monkey D. Luffy",
    title: "Agriculture Specialist",
    image: "/assets/speakers/Speaker1.png",
    description: "Expert in crop management and agricultural best practices.",
    presentationTitle: "Optimizing Crop Productivity in the Field",
  },
  {
    id: 6,
    name: "Marco Polo",
    title: "Research Consultant",
    image: "/assets/speakers/Speaker1.png",
    description: "Consultant in agricultural research and development projects.",
    presentationTitle: "Innovative Research Strategies for Agri-Consultancy",
  },
];

// ✅ Plenary Session Speakers
export const plenarySpeakers: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
  {
    id: 8,
    name: "Dr. Bob C. Lee",
    title: "Plenary Speaker - Agri-Tech",
    image: "/assets/speakers/Speaker1.png",
    description: "Focuses on agricultural technologies and smart farming solutions.",
    presentationTitle: "Smart Farming with Advanced Agri-Tech",
  },
  {
    id: 9,
    name: "Engr. Clara D. Tan",
    title: "Plenary Speaker - Sustainability",
    image: "/assets/speakers/Speaker1.png",
    description: "Expert on sustainable agriculture practices and innovations.",
    presentationTitle: "Sustainable Farming Practices for the Future",
  },
  {
    id: 10,
    name: "Dr. David E. Cruz",
    title: "Plenary Speaker - R&D",
    image: "/assets/speakers/Speaker1.png",
    description: "Researcher leading R&D initiatives in rice production systems.",
    presentationTitle: "Innovations in Rice Production Research",
  },
  {
    id: 11,
    name: "Dr. Eva F. Reyes",
    title: "Plenary Speaker - Crop Management",
    image: "/assets/speakers/Speaker1.png",
    description: "Specializes in effective crop management and productivity.",
    presentationTitle: "Maximizing Crop Yields through Smart Management",
  },
  {
    id: 12,
    name: "Engr. Frank G. Lim",
    title: "Plenary Speaker - Agri-Innovation",
    image: "/assets/speakers/Speaker1.png",
    description: "Focuses on innovative agricultural solutions and technologies.",
    presentationTitle: "Driving Agricultural Innovation in the 21st Century",
  },
];

// ✅ Panel Discussion Speakers
export const panelSpeakers: Speaker[] = [
  {
    id: 13,
    name: "Dr. George H. Tan",
    title: "Panelist - Agri-Tech",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses agricultural technology trends and applications.",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    id: 14,
    name: "Engr. Helen I. Santos",
    title: "Panelist - Seed Innovation",
    image: "/assets/speakers/Speaker1.png",
    description: "Expert in seed innovation and genetic improvements.",
    presentationTitle: "Panel Discussion: Seed Innovation for Modern Farming",
  },
  {
    id: 15,
    name: "Dr. Ian J. Cruz",
    title: "Panelist - Research Management",
    image: "/assets/speakers/Speaker1.png",
    description: "Specializes in research planning and project management.",
    presentationTitle: "Panel Discussion: Effective Research Management",
  },
  {
    id: 16,
    name: "Dr. Julia K. Lim",
    title: "Panelist - Sustainable Farming",
    image: "/assets/speakers/Speaker1.png",
    description: "Focuses on sustainable farming methods and strategies.",
    presentationTitle: "Panel Discussion: Sustainable Farming Solutions",
  },
  {
    id: 17,
    name: "Engr. Kevin L. Reyes",
    title: "Panelist - Crop Technology",
    image: "/assets/speakers/Speaker1.png",
    description: "Expert in crop technology and modern farming solutions.",
    presentationTitle: "Panel Discussion: Advances in Crop Technology",
  },
  {
    id: 18,
    name: "Dr. Laura M. Tan",
    title: "Panelist - Agri-Research",
    image: "/assets/speakers/Speaker1.png",
    description: "Leads research in agriculture and crop management techniques.",
    presentationTitle: "Panel Discussion: Agri-Research Innovations",
  },
];

// ✅ Combined Export for Easy Looping
export const speakerSections: SpeakerSection[] = [
  {
    sectionTitle: "Keynote Speakers",
    speakers: keynoteSpeakers,
  },
  {
    sectionTitle: "Plenary Session Speakers",
    speakers: plenarySpeakers,
  },
  {
    sectionTitle: "Panel Discussion Speakers",
    speakers: panelSpeakers,
  },
];
