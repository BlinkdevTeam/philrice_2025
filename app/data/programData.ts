export interface ProgramItem {
  time?: string;
  title: string;
  details?: string[];
  chair?: string;
  speaker?: string;
  position?: string;
  panel?: string[];
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
        time: "09:00 AM",
        title: "Opening Program",
        details: [
          "Invocation and National Anthem",
          "Be RICEponsible Pledge",
          "Welcome Remarks and Introduction of the Guest of Honor and Keynote Speakers",
          "Messages of the Guests of Honor and Keynote Speakers",
          "Presentation of New Knowledge Products",
          "Launching of the RiceBIS Magsasaka Network",
          "Opening and viewing of e-posters ",
        ],
      },
      {
        time: "10:00 AM",
        title: "Networking break",
        // chair: "Dr. Eduardo Jimmy P. Quilang",
      },
      {
        time: "10:15 AM",
        title: "PANEL DISCUSSION 1. PhilRice@40: Milestones, Insights, and Future Commitments",
        chair: "Ms. Rhemilyn Z. Relado-Sevilla",
        panel: [
          "Dr. Santiago R. Obien, DA-PhilRice",
          "Dr. Leocadio S. Sebastian, DAP",
          "Dr. Sailila E. Abdula, DA-PhilRice",
          "Dr. John C. de Leon, DA-PhilRice",
        ],
      },
      {
        time: "12:00 NN",
        title: "LUNCH BREAK",
      },
      {
        time: "01:00 PM",
        title: "PANEL DISCUSSION 2. Partners in Progress: The External View of PhilRice’s Journey",
        chair: "Mr. Joy Bartolome A. Duldulao",
        panel: [
          "Mr. Ralph Alan C. Ceniza, DA-NRP",
          "Dr. Jose E. Hernandez, UPLB",
          "Dr. Mercedita A. Sombilla, SEARCA",
          "Mr. Joel V. Dator, PHilMech",
          "Ms. Jovie Ann Quirante, East-West Seed Company Inc.",
          "Dr. Madonna C. Casimero, IRRI",
        ],
      },
      {
        time: "03:00 PM",
        title: "Networking break",
      },
      {
        time: "03:15 PM",
        title: "Concurrent Session 1A: Climate-Smart and Resilient Rice Farming",
        speaker: "DA-CBC Plenary Hall",
      },
      {
        time: "06:00 PM",
        title: "Rice R4DE Appreciation Night",
        speaker: "DA-CBC Multi-Purpose Hall",
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
      title: "Morning Coffee and Networking ",
    },
    {
      time: "08:00 AM",
      title: "Recap of Day 1 / Preliminaries",
    },
    {
      time: "08:30 AM",
      title: "PLENARY SESSION 1. Co-Innovating for Impact",
      chair: "Dr. Jaime A. Manalo IV",
    },
    {
      // time: "09:30 AM",
      title: "Quacking Up Innovation: Youth-Led Agripreneurship and Integrated Farming",
      speaker: "Ms. Geneva S. Gañalon",
      position: "G’s Duckery and Integrated Farm Outstanding Young Farmer Awardee 50th National Gawad Saka Awards",
    },
    {
      // time: "09:30 AM",
      title: "Pangsapaw sa Bahaw: Innovating Against Rice Waste with Banahaw Creations",
      speaker: "Ms. Queen Anne Xyza Salayo",
      position: "Banahaw Creations Young Farmers Challenge (YFC) Program Start-up Awardee",
    },
    {
      // time: "09:30 AM",
      title: "Connected by Purpose: How GOEden Philippines Bridges Technology, Teamwork, and Farmers’ Dreams",
      speaker: "Ms. Julieane Camile Lacsina",
      position: "GoEden Philippines",
    },
    {
      time: "10:00 AM",
      title: "Networking break",
    },
    {
      time: "10:15 AM",
      title: "Concurrent Session 2A: Rice-Based Enterprises and Value-Chain Innovations",
      speaker: "DA-CBC Plenary Hall",
    },
    {
      // time: "11:30 AM",
      title: "Concurrent Session 2B: Participatory Extension and Inclusive Innovations",
      speaker: "Social Hall",
    },
    {
      time: "12:00 NN",
      title: "LUNCH BREAK",
    },
    {
      time: "01:00 PM",
      title: "PLENARY SESSION 2. Visioning the Future of Rice R4DE",
      chair: "Dr. Roel R. Suralta",
    },
    {
      // time: "03:30 PM",
      title: "Reforming the Agri-Fishery Extension System in PH",
      speaker: "Dr. Rex L. Navarro",
      position: "DA-PhilRice Technical Consultant",
    },
    {
      // time: "03:30 PM",
      title: "Inside the World of Seed Distribution: Harnessing R&D Solutions to Elevate RCEF Seed Operations",
      speaker: "Dr. Flordeliza H. Bordey",
      position: "RCEF-PMO Director and Deputy Executive Director for Special Concerns, DA-PhilRice",
    },
    {
      // time: "03:30 PM",
      title: "Open Forum / Q&A",
    },
    {
      time: "03:00 PM",
      title: "Networking break",
    },
    {
      time: "03:15 PM",
      title: "PANEL DISCUSSION 3. Juan Meets the Career Scientists",
      chair: "Dr. John C. de Leon",
      panel: [
        "Dr. Roel R. Suralta, DA-PhilRice",
        "Dr. Norvie L. Manigbas, DA-PhilRice",
        "Mr. Dindo King M. Donayre, DA-PhilRice",
        "Dr. Jaime A. Manalo IV, DA-PhilRice",
        "Mr. Edwin C. Martin, DA-PhilRice",
        "Dr. Riza G. Abilgos-Ramos, DA-PhilRice",
        "Dr. Elmer G. Bautista, DA-PhilRice",
        "Dr. Jesusa C. Beltran, DA-PhilRice",
        "Dr. Jayvee A. Cruz-Kitma, DA-PhilRice",
        "Ms. Rosaly V. Manaois, DA-PhilRice",
        "Dr. Jonathan M. Niones, DA-PhilRice",
        "Dr. Reynante L. Ordonio, DA-PhilRice",
      ],
    },
    {
      time: "05:00 PM",
      title: "CLOSING PROGRAM",
      speaker: "Ms. Jacqueline Canilao and Mr. Dindo King M. Donayre",
      position: "Masters of Ceremonies",
      details: [
          "Synthesis",
          "Recognition and Awarding of Best Posters",
          "Closing Message and Vote of Thanks",
          "DA-PhilRice Jingle",
      ],
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
      time: "07:00 AM - 12:00 NN",
      title: "Field / Facility Tour",
      details: [
          "FutureRice Farm",
          "RICEsParK",
          "PhilRice Facilities",
      ],
    },
    {
      // time: "08:30 AM",
      title: "Kapihan with DA-PhilRice",
      speaker: "DA-CBC Multi-Purpose Hall",
    },
  ],
},
];
