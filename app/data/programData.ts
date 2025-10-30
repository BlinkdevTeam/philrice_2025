export interface ProgramItem {
  time: string;
  title: string;
  details?: string[];
  chair?: string;
  speaker?: string;
  position?: string;
}

export interface ProgramDay {
  date: string;
  label: string;
  programs: ProgramItem[];
}

export const programData: ProgramDay[] = [
  {
    date: "25",
    label: "Nov 2025",
    programs: [
      {
        time: "07:00 AM",
        title: "Registration of Participants and Welcome Coffee",
      },
      {
        time: "08:00 AM",
        title: "Opening Program",
        details: [
          "Invocation",
          "National Anthem",
          "Welcome Remarks",
          "Introduction of the Guest of Honor and Keynote Speaker",
          "Keynote Address: 'Empowering Farmers through Innovation'",
          "Turnover of BPI Foundation Grant",
          "Launch of New DA-PhilRice Knowledge Products",
          "Opening and Viewing of Posters and Exhibits",
        ],
      },
      {
        time: "09:30 AM",
        title: "Networking Break and Poster Viewing",
      },
      {
        time: "10:00 AM",
        title: "PLENARY SESSION 1 — Cutting-edge Rice R4D Innovations",
        chair: "Dr. Eduardo Jimmy P. Quilang",
      },
      {
        time: "10:15 AM",
        title: "National Innovation Agenda and Strategy Document 2023–2032",
        speaker: "Ms. Dianne Gail L. Maharjan",
        position: "Director, NEDA Innovation Staff",
      },
      {
        time: "11:00 AM",
        title: "Innovations in Rice Breeding and Biotechnology",
        speaker: "Dr. Marco P. Dizon",
        position: "Head, Rice Breeding Division, PhilRice",
      },
      {
        time: "12:00 NN",
        title: "Lunch Break and Poster Viewing",
      },
      {
        time: "01:30 PM",
        title: "PARALLEL SESSION 1 — Sustainable Rice Farming Systems",
        chair: "Dr. Maria Elisa R. Gonzales",
        details: [
          "Integrated Nutrient Management Approaches",
          "Precision Rice Farming using Smart Sensors",
          "Organic Rice Enterprise Development",
        ],
      },
      {
        time: "03:00 PM",
        title: "Networking and Coffee Break",
      },
      {
        time: "03:30 PM",
        title: "Panel Discussion: Women in Rice R&D",
        speaker: "Panel of Female Scientists and Extension Leaders",
      },
      {
        time: "05:00 PM",
        title: "Wrap-up of Day 1",
        details: ["Summary of Key Insights", "Reminders for Day 2"],
      },
      {
        time: "06:30 PM",
        title: "Welcome Dinner and Cultural Presentation",
      },
    ],
  },
 // ============================
// DAY 2 — NOVEMBER 26, 2025
// ============================
{
  date: "26",
  label: "Nov 2025",
  programs: [
    {
      time: "07:00 AM",
      title: "Day 2 Registration and Morning Coffee",
    },
    {
      time: "08:30 AM",
      title: "PLENARY SESSION 2 — Climate-smart Rice Farming Technologies",
      chair: "Dr. Ricardo A. Orge",
    },
    {
      time: "08:45 AM",
      title: "Smart Irrigation Management for Rice Fields",
      speaker: "Engr. Lea P. Santos",
      position: "Senior Research Engineer, PhilRice",
    },
    {
      time: "09:30 AM",
      title: "Poster Session and Networking Break",
    },
    {
      time: "10:00 AM",
      title: "Panel Discussion: Scaling Innovations Across Regions",
      speaker: "Panel of Experts",
    },
    {
      time: "11:30 AM",
      title: "Rice Mechanization and Postharvest Technologies",
      speaker: "Dr. Allan G. Cruz",
      position: "Chief Engineer, DA-AMTEC",
    },
    {
      time: "12:30 PM",
      title: "Lunch Break and Exhibit Viewing",
    },
    {
      time: "02:00 PM",
      title: "PARALLEL SESSION 2 — Rice Value Chain and Agribusiness",
      chair: "Dr. Joy B. Mendoza",
      details: [
        "Agri-Entrepreneurship for Rice Farmers",
        "Digital Platforms for Farm Productivity",
        "Market Linkages and Rice Price Dynamics",
      ],
    },
    {
      time: "03:30 PM",
      title: "Coffee and Networking Break",
    },
    {
      time: "04:00 PM",
      title: "Young Researchers Forum: Innovations by the Next Generation",
    },
    {
      time: "05:30 PM",
      title: "Day 2 Synthesis and Announcements",
    },
    {
      time: "06:30 PM",
      title: "Networking Dinner and Poster Night",
    },
  ],
},

// ============================
// DAY 3 — NOVEMBER 27, 2025
// ============================
{
  date: "27",
  label: "Nov 2025",
  programs: [
    {
      time: "07:00 AM",
      title: "Registration and Breakfast",
    },
    {
      time: "08:30 AM",
      title: "PLENARY SESSION 3 — Future of Rice Research and Development",
      chair: "Dr. Karen P. Aquino",
    },
    {
      time: "08:45 AM",
      title: "Integrating AI and Remote Sensing for Rice Monitoring",
      speaker: "Engr. Paolo C. Reyes",
      position: "AI Specialist, DOST-ASTI",
    },
    {
      time: "09:30 AM",
      title: "Poster Viewing and Coffee Break",
    },
    {
      time: "10:00 AM",
      title: "Presentation of Best Posters and Awards",
    },
    {
      time: "11:00 AM",
      title: "Closing Ceremony",
      details: [
        "Synthesis of the Conference",
        "Recognition of Partners and Awardees",
        "Closing Remarks by the PhilRice Executive Director",
      ],
    },
    {
      time: "12:00 NN",
      title: "Lunch Break",
    },
    {
      time: "01:30 PM",
      title: "PhilRice Field Tour and Demonstrations",
      details: [
        "Rice Machinery Demonstration Area",
        "Seed Production and Breeding Facilities Tour",
        "Knowledge Products Booth",
      ],
    },
    {
      time: "03:30 PM",
      title: "Coffee Break and Networking",
    },
    {
      time: "04:00 PM",
      title: "Farewell Program and Group Photo Session",
    },
    {
      time: "05:30 PM",
      title: "Departure of Participants",
    },
  ],
},
];
