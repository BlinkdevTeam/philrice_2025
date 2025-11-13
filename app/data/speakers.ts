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
    name: "Dr. John C. de Leon",
    title: "Executive Director, DA-PhilRice",
    image: "/assets/speakers/John-de-Leon.png",
    description:
      "Engr. Recoter leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
    presentationTitle: "Innovating Rice Seed Systems for Sustainability",
  },
  {
    id: 2,
    name: "Senator Francis ‘Kiko’ N. Pangilinan",
    title: "Chairperson, Committee on Agriculture",
    image: "/assets/speakers/sen-kiko-pangilinan.png",
    description:
      "Dr. John A. Doe leads research and development programs for rice innovations.",
    presentationTitle: "Next-Generation Rice R&D Approaches",
  },
  {
    id: 3,
    name: "Secretary Francisco P. Tiu Laurel Jr.",
    title: "Department of Agriculture",
    image: "/assets/speakers/Sec-Fracisco_Tiu-Laurel-Jr.png",
    description: "Leads projects and research initiatives at PhilRice Central.",
    presentationTitle: "Project Management in Agricultural Research",
  },
];

// ✅ Panel Discussion 1 Speakers
export const panelSpeakers1: Speaker[] = [
  {
    id: 13,
    name: "Ms. Rhemilyn Z. Relado-Sevilla",
    title: "Chair/Moderator",
    image: "/assets/speakers/Ms-Rhemilyn-Relado.png",
    description: "Discusses agricultural technology trends and applications.",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    id: 14,
    name: "Dr. Santiago R. Obien",
    title: "DA-PhilRice",
    image: "/assets/speakers/Dr-Santiago-Obien.png",
    description: "Expert in seed innovation and genetic improvements.",
    presentationTitle: "Panel Discussion: Seed Innovation for Modern Farming",
  },
  {
    id: 15,
    name: "Dr. Leocadio S. Sebastian,",
    title: "DAP",
    image: "/assets/speakers/Dr-Leocadio-Sebastian.png",
    description: "Specializes in research planning and project management.",
    presentationTitle: "Panel Discussion: Effective Research Management",
  },
  {
    id: 16,
    name: "Dr. John C. de Leon",
    title: "Executive Director, DA-PhilRice",
    image: "/assets/speakers/John-de-Leon.png",
    description:
      "Engr. Recoter leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
    presentationTitle: "Innovating Rice Seed Systems for Sustainability",
  },
  {
    id: 17,
    name: "Dr. Sailila E. Abdula",
    title: "DA-PhilRice",
    image: "/assets/speakers/Dr.-Sailila-Abdula.png",
    description:
      "Engr. Recoter leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
    presentationTitle: "Innovating Rice Seed Systems for Sustainability",
  },
];

// ✅ Concurrent Session 1A Speakers
export const concurrentSession1A: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
];

// ✅ Concurrent Session 1B Speakers
export const concurrentSession1B: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
];

// ✅ Panel Discussion 1 Speakers
export const panelSpeakers2: Speaker[] = [
  {
    id: 13,
    name: "Ms. Rhemilyn Z. Relado-Sevilla",
    title: "Chair/Moderator",
    image: "/assets/speakers/Ms-Rhemilyn-Relado.png",
    description: "Discusses agricultural technology trends and applications.",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
];

// ✅ Plenary Session Speakers
export const plenarySpeakers1: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
];

// ✅ Concurrent Session 2A Speakers
export const concurrentSession2A: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
];

// ✅ Concurrent Session 2B Speakers
export const concurrentSession2B: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
];

// ✅ Plenary Session Speakers 2
export const plenarySpeakers2: Speaker[] = [
  {
    id: 7,
    name: "Dr. Alice B. Smith",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/Speaker1.png",
    description: "Discusses advances in rice genomics research and applications.",
    presentationTitle: "Rice Genomics: Unlocking Genetic Potential",
  },
];

// ✅ Panel Discussion 3 Speakers
export const panelSpeakers3: Speaker[] = [
  {
    id: 13,
    name: "Ms. Rhemilyn Z. Relado-Sevilla",
    title: "Chair/Moderator",
    image: "/assets/speakers/Ms-Rhemilyn-Relado.png",
    description: "Discusses agricultural technology trends and applications.",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
];

// ✅ Combined Export for Easy Looping
export const speakerSections: SpeakerSection[] = [
  {
    sectionTitle: "Keynote Speakers",
    speakers: keynoteSpeakers,
  },
  {
    sectionTitle: "Panel Discussion 1 Speakers",
    speakers: panelSpeakers1,
  },
  {
    sectionTitle: "Concurrent Session 1A Speakers",
    speakers: concurrentSession1A,
  },
  {
    sectionTitle: "Concurrent Session 1B Speakers",
    speakers: concurrentSession1B,
  },
  {
    sectionTitle: "Panel Discussion 2 Speakers",
    speakers: panelSpeakers2,
  },
  {
    sectionTitle: "Plenary Session 1 Speakers",
    speakers: plenarySpeakers1,
  },
  {
    sectionTitle: "Concurrent Session 2A",
    speakers: concurrentSession2A,
  },
  {
    sectionTitle: "Concurrent Session 2B",
    speakers: concurrentSession2B,
  },
  {
    sectionTitle: "Plenary Session 2 Speakers",
    speakers: plenarySpeakers2,
  },
  {
    sectionTitle: "Panel Discussion 3 Speakers",
    speakers: panelSpeakers3,
  },
];
