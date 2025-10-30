// app/data/speakers.ts
export type Speaker = {
  id: number;
  name: string;
  title: string;
    image: string;
  description?: string;
};

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Engr. Remelyn R. Recoter",
    title: "RCEF-Seed (DA-PhilRice)",
    image: "/assets/speakers/Speaker1.png",
    description:
      "Engr. Recoter leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
  },
  {
    id: 2,
    name: "Dr. John A. Doe",
    title: "Senior Researcher (DA-PhilRice)",
      image: "/assets/speakers/Speaker1.png",
    description:
      "Dr. John A. Doe leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
  },
  {
    id: 3,
    name: "Engr. Maria L. Santos",
    title: "Project Leader (PhilRice Central)",
    image: "/assets/speakers/Speaker1.png",
  },
  {
    id: 4,
    name: "Dr. Juan Dela Cruz",
    title: "Panelist, Agri-Tech Expert",
    image: "/assets/speakers/Speaker1.png",
  },
  {
    id: 5,
    name: "marilyn reyes",
    title: "(DA-PhilRice)",
    image: "/assets/speakers/Speaker1.png",
  },
];
