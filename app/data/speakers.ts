export type Speaker = {
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

// ✅ Guest of Honor
export const guestOfhonor: Speaker[] = [
  {
    name: "Ferdinand R. Marcos Jr.",
    title: "President of the Philippines",
    image: "/assets/speakers/GuySilhouette.png",
    description:
      "Dr. John A. Doe leads research and development programs for rice innovations.",
    presentationTitle: "",
  },
  {
    name: "Secretary Francisco P. Tiu Laurel Jr.",
    title: "Secretary of the Department of Agriculture",
    image: "/assets/speakers/Sec-Fracisco_Tiu-Laurel-Jr.png",
    description: "Agriculture Secretary Francisco “Kiko” P. Tiu Laurel Jr. shares the vision of President Ferdinand R. Marcos Jr. to modernize the agriculture sector, uplift the lives of farmers and fishers, and ensure food security for Filipinos. Secretary Tiu Laurel has decades of experience managing companies engaged in the field of fisheries, most prominently the family-owned Frabelle Fishing Corporation, as well as marine enterprises, food processing, cold chain and logistics, real estate, and power. His vast experience in these development industries starting from a young age has provided him with invaluable real-world expertise in navigating challenges and opportunities therein. Beyond his individual success through the years, he has led numerous organizations such as the World Tuna Purse Seine Organization, where he has actively championed sustainable fishing practices, and advocated for responsible resource management and environmental preservation. As Agriculture Secretary, he aims to revolutionize the sector by focusing on science-based approaches, promoting mechanized farming and leveraging on technological advancements. He envisions a future where Filipino farmers thrive through improved farming practices — equipped with advanced knowledge and tools to optimize yields and overcome challenges — contributing to a food-secure and self-sufficient Philippines.",
    presentationTitle: "",
  },
];

// ✅ Keynote Speakers
export const keynoteSpeakers: Speaker[] = [
  {
    name: "Senator Francis ‘Kiko’ N. Pangilinan",
    title: "Chairperson, Committee on Agriculture",
    image: "/assets/speakers/sen-kiko-pangilinan.png",
    description:
      "Senator Francis “Kiko” Pangilinan has spent over three decades in public service, championing justice, good governance, and food security for every Filipino. From his days as a student leader during the fight against dictatorship, to his historic independent Senate run, to his 2022 vice-presidential campaign with Leni Robredo, he has often found himself “behind the eight ball”—facing steep odds and awesome obstacles. Yet he has consistently chosen integrity over compromise, the difficult NO rather than the easy YES, proving that living honestly and simply, and standing with farmers, fisherfolk, and ordinary citizens is the surest path to good governance and meaningful change. ",
    presentationTitle: "",
  },
  {
    name: "Congresswoman Anna York P. Bondoc",
    title: "",
    image: "/assets/speakers/GirlSilhouette.png",
    description:
      "Engr. Recoter leads the RCEF-Seed Program under DA-PhilRice, overseeing innovation and sustainability in rice seed systems.",
    presentationTitle: "",
  },
];

// ✅ Panel Discussion 1 Speakers
export const panelSpeakers1: Speaker[] = [
  {
    name: "Dr. Santiago R. Obien",
    title: "DA-PhilRice",
    image: "/assets/speakers/Dr-Santiago-Obien.png",
    description: "Dr. Santiago R. Obien, now 90 years old, was the Founding Executive Director of PhilRice, leading the Institute from its establishment in 1987 until his retirement in 2000. Earlier, he served as President of Mariano Marcos State University (1985-1987) and Executive Director of the Philippine Tobacco Research and Training Center (1977-1987). Under his stewardship, PhilRice grew into the country’s premier rice R&D institution, advancing new varieties, technologies, and farmer training programs that strengthened national food security. He also secured abundant Japanese support, including JICA-assisted world-class infrastructure and laboratory upgrades, which boosted the Institute’s R&D capabilities. Regarded as an outstanding research administrator and scientist, he led PhilRice primarily with a dynamic leadership and unique brand of management. Dr. Obien received over 20 prestigious awards, including the Lifetime Achievement Award for meritorious services in the field of weed science (Asia-Pacific Weed Science Society, 2017), DA Legacy Award for outstanding contributions as institution builder (DA Rice Achievers Awards, 2020), PhilARM Research Leadership Excellence Award (2007), Outstanding UPLB Alumnus Award for Science and Institution Building (2004), Dioscoro L. Umali Medal for Outstanding S&T Administrator (2000); East-West Center Distinguished Alumnus Award (2000); Presidential Lingkod Bayan Award (1999); DA-Khush Award (1998); Pantas (Sage) Award (1993); Oblation Award (1985); and Marcos R. Vega Award in Weed Science (1978). Dr. Obien holds a PhD in Soil Science (1970) and an MS in Agronomy (1963) from the University of Hawaii; and a BS in Agriculture (Entomology) from UP Los Baños in 1958. A true institution builder, he continued to serve well into his 80s as consultant and senior adviser to the DA’s national rice program, and as Founder and Senior Adviser of the Philippine Rice Productivity Advocacy Board. ",
    presentationTitle: "PhilRice at 40: Milestones, Insights, and Future Commitments",
  },
  {
    name: "Dr. Leocadio S. Sebastian,",
    title: "DA-PhilRice",
    image: "/assets/speakers/Dr-Leocadio-Sebastian.png",
    description: "Dr. Leocadio S. Sebastian is the current Acting President and Chief Executive Officer of the Development Academy of the Philippines (DAP). He is also a member (Academician) of the National Academy of Science and Technology (NAST-Philippines). He also holds a career service rank of Career Executive Service Officer 1 (CESO 1). He was a former Undersecretary (USec) of the Philippine Department of Agriculture. At DA, he held various designations, including USec for Rice Industry Development, Chief of Staff to the Secretary, USec for Research, Innovations, Training, and Extension Service, and USec for Operations. He is also a former (2000-2008) Executive Director of the Philippine Rice Research Institute (PhilRice), Climate Change, Agriculture and Food Security (CCAFS), IRRI Representative to Vietnam, and Regional Director of Bioversity International. He holds a Ph.D. in Plant Breeding and Genetics from Cornell University, and obtained his BS in Biology and MS in Agricultural Genetics from the University of the Philippines Los Baños.",
    presentationTitle: "PhilRice at 40: Milestones, Insights, and Future Commitments",
  },
  {
    name: "Dr. John C. de Leon",
    title: "Executive Director, DA-PhilRice",
    image: "/assets/speakers/John-de-Leon.png",
    description:
      "Dr. John C. de Leon started at DA-PhilRice in 1990 as a 20-year-old junior researcher and stayed for 20 years until he left (as Chief SRS and program leader) to join the private sector. Seasoned with added experience and new perspectives, his journey steered him back to the Institute where his professional career and public service started. He was appointed as PhilRice Executive Director by two Philippine Presidents – Rodrigo R. Duterte in December 2019 and Ferdinand R. Marcos Jr. in July 2024. He was endorsed to the position by former DA Secretary William D. Dar and by Secretary Francisco P. Tiu Laurel Jr., respectively.",
    presentationTitle: "PhilRice at 40: Milestones, Insights, and Future Commitments",
  },
  {
    name: "Dr. Sailila E. Abdula",
    title: "DA-PhilRice",
    image: "/assets/speakers/Dr.-Sailila-Abdula.png",
    description:
      "Dr. Sailila E. Abdula is a distinguished Filipino researcher renowned for his pioneering contributions to rice breeding and biotechnology. He currently serves as the Director of the Philippine Rice Research Institute (PhilRice) – Midsayap branch, while concurrently holding key leadership positions as Vice-Chair of the Regional Research, Development and Innovation Committee (RRDIC) XII and member of the Governing Board of the SOCCSKSARGEN Industry, Energy, and Emerging Technology Research and Development Consortium (SOXIEERDC). Dr. Abdula obtained his Doctor of Philosophy in Agriculture, major in Plant Breeding and Molecular Biology/Biotechnology, from Chungbuk National University in South Korea. His extensive research in rice science has led to the development of tungro-resistant rice varieties and the publication of several scientific papers, contributing significantly to global knowledge in rice genetics and crop improvement. With over 25 years of dedicated service to PhilRice, Dr. Abdula has not only advanced scientific innovation but also demonstrated exceptional leadership and management. He previously served as Acting Executive Director of PhilRice (2016–2019), Officer-in-Charge of the Bureau of Agricultural Research (BAR), and Officer-in-Charge of the Department of Agriculture – Regional Field Office XII. For his remarkable achievements and unwavering commitment to agricultural development, Dr. Abdula has received numerous prestigious awards, including Presidential Lingkod Bayan Award (National Winner, 2018), ASEAN Rice Science and Technology Ambassador Award (National Awardee, 2017), and Gawad Saka Award (National Winner, Research Category, 2016).",
    presentationTitle: "PhilRice at 40: Milestones, Insights, and Future Commitments",
  },
];

// ✅ Concurrent Session 1A Speakers
export const concurrentSession1A: Speaker[] = [
  {
    name: "Rowena Castillo",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Climate+: Delivering Weather-Informed Advisories for Climate-Resilient Rice Farming",
  },
  {
    name: "David John F. Rodriguez",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Cultivating Resilience: What Shapes Climate-Smart Decisions among Rice Farmers",
  },
  {
    name: "Kristine S. Pascual",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "How Irrigation Flow Shapes Water-Saving Practice",
  },
  {
    name: "Gina B. De Mesa-Enot",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "From Trials to Transformation: Scaling SMART-FARM Technologies for Resilient and Profitable Rice Farming in Saline-Prone Areas in Northern Samar",
  },
  {
    name: "Jiela O. Mosquite",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Scaling Integrated Crop Management (ICM) for Salt-Affected Rice Areas in the Bicol Region",
  },
  {
    name: "Reymark D. Delena",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Data-Driven Pest Forecasting in Rice Farming with Outbreak Thresholds for Rice Black Bug and White Stemborer",
  },
  {
    name: "Gemma G. Bagunu",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Enhancing Water Accessibility for Small-Scale Farmers in the Philippines through Portable Backpack and Hand-Carried Solar-Powered Water Pump Kit on Open-Source Water Tributaries like Cagayan River",
  },
  {
    name: "Zhandon Paul M. Cario",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Integrating Radar and Optical Remote Sensing for the Detection of Upland Rice Areas: The Case of Apayao",
  },
];

// ✅ Concurrent Session 1B Speakers
export const concurrentSession1B: Speaker[] = [
  {
    name: "Tyrone C. Juganas",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Introduction of AutoCon@f for Drying High-Quality Seeds in a Fixed-Bed Batch Drying System",
  },
  {
    name: "Mary Ann U. Baradi",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Integrated Approach for the Adoption of the Low-Cost Bamboo-bin Dryer",
  },
  {
    name: "Malvin D. Duldulao",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Integrating Web-Based Germplasm Management and Analytics: The Oryza GEMS and Genelytics Portal of the PhilRice Genebank",
  },
  {
    name: "Johny Tumaliuan",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "4DFARM: An Integrated Digital Platform to Support Data-Driven Decision-Making for Monitoring of Technology Adoption on Rice Farming",
  },
  {
    name: "Dindo King M. Donayre",
    title: "",
    image: "/assets/speakers/Dindo-King-Donayre.png",
    description: "",
    presentationTitle: "Accuracy of Free Apps for Weed Identification",
  },
  {
    name: "Maurice Padiernos",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "From cost reduction to yield increase",
  },
  {
    name: "Jane Kristine G. Suarez",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Mapping AI and UAV research in rice health monitoring and crop insurance",
  },
];

// ✅ Panel Discussion 1 Speakers
export const panelSpeakers2: Speaker[] = [
  {
    name: "Mr. Ralph Alan Ceniza",
    title: "DA-NRP",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Partners in Progress: The External View of PhilRice’s Journey",
  },
  {
    name: "Dr. Jose E. Hernandez",
    title: "UPLB",
    image: "/assets/speakers/JoseHernandez.png",
    description: "Dr. Jose E. Hernandez is a retired Professor from the Institute of Crop Science, College of Agriculture and Food Science, UPLB. He was appointed Professor Emeritus after retirement in 2021. He taught undergraduate and graduate courses in plant breeding and crop production, and management. Since 1987, he has mentored more than 120 undergraduate and graduate students from the Philippines and other countries with specialization in plant breeding and genetics. As Program Leader of the UPLB Rice Varietal Improvement Program, he helped develop 22 varieties suitable for irrigated, rainfed lowland, and upland areas that were released by the National Seed Industry Council.In recognition of his outstanding achievements, he has been honored with several awards for his scientific contributions in teaching and research. Some of these awards are: the UP Scientific Productivity System as UP Scientist, the 2010 IRRI Outstanding Alumni in Rice Research, the Outstanding Young Scientist Award given by the NAST in 1996; the UPLB Outstanding Research Team Award to the Rice Varietal Improvement Team (as Program Leader) in 2017 and five Professorial Chair awards, among others. He obtained his BS and MS degrees from UPLB and his PhD in plant breeding and genetics from the University of Minnesota, USA.",
    presentationTitle: "Partners in Progress: The External View of PhilRice’s Journey",
  },
  {
    name: "Dr. Mercedita A. Sombilla",
    title: "SEARCA",
    image: "/assets/speakers/Mercedita-Sombilla.png",
    description: "Dr. Mercedita Castro Agcaoili-Sombilla is the 12th and first woman Center Director of SEAMEO SEARCA, assuming office on 1 April 2025. A distinguished economist, she brings decades of experience in agricultural and regional development from her extensive career in research and further enriched by hands-on experience gained from holding various positions in national, regional, and international institutions. Before joining SEARCA as the Center Director, Dr. Sombilla served as Undersecretary for Policy, Planning, and Regulations at the Philippine Department of Agriculture (DA) and as Undersecretary of the Regional Development Group at the National Economic and Development Authority (now the Department of Economy, Planning and Development or DEPDev). She held key research and managerial positions at the International Food Policy Research Institute (IFPRI), International Rice Research Institute (IRRI), and even at SEARCA as Manager of its Consulting Services Department (now Project Development and Technical Services Unit), and the Research and Development Department (now the Research and Thought Leadership Department). Her work engagement enabled her to work in various countries especially in Asia. Beyond government and academia, Dr. Sombilla has provided consultancy services to major development institutions, including the Asian Development Bank (ADB), World Bank, International Fund for Agricultural Development (IFAD), Australian Centre for International Agricultural Research (ACIAR), United States Agency for International Development (USAID), and International Development Research Centre of Canada (IDRC). She holds a BS in Mathematics and MA in Economics from UP Diliman, and a PhD in Agricultural Economics from the University of Minnesota. Currently, she is the Secretary General of the Association of Southeast Asian Agricultural Economists, an active member of the International Agricultural Economics Association, and a Board Director of the Oscar M. Lopez Center.",
    presentationTitle: "Partners in Progress: The External View of PhilRice’s Journey",
  },
  {
    name: "Mr. Joel V. Dator",
    title: "PHILMECH",
    image: "/assets/speakers/JoelDator.png",
    description: "Mr. Joel V. Dator is the Deputy Director of the Philippine Center for Postharvest Development and Mechanization (PHilMech), bringing nearly 40 years of experience in both public and private sectors. His extensive background encompasses a deep understanding of agricultural operations, as well as the technical intricacies involved in postharvest processes. Director Dator oversees the implementation of the Rice Competitiveness Enhancement Fund (RCEF) Mechanization Program, ensuring the seamless execution of field operations and the overall management of the program. His leadership has been instrumental in driving the program’s success. Throughout his career, Director Dator has engaged in various local and international training programs on agricultural productivity and postharvest technologies, including grains management, rice and corn production, livestock, and the establishment of postharvest facilities. He is highly active in fostering strategic partnerships with key stakeholders, strengthening PHilMech’s programs and initiatives through robust collaboration and networks.",
    presentationTitle: "Partners in Progress: The External View of PhilRice’s Journey",
  },
  {
    name: "Jovie Ann Quirante",
    title: "EASTWEST SEED COMPANY INC.",
    image: "/assets/speakers/JovieAnnQuirante.png",
    description: "Ms. Jovie Ann Quirante is a Licensed Agriculturist and Technical Specialist at East-West Seed Knowledge Transfer, specializing in sustainable agriculture, farmer capacity building, and integrated knowledge transfer systems. With over a decade of field and program implementation experience, she has played key roles in strengthening vegetable production systems and improving farmer livelihoods across diverse agro-ecological contexts.  Her portfolio includes leading and facilitating technical capacity building for EWS KT teams across multiple countries. She has served as a resource person for SALT capacity development in India and contributed to field staff upskilling on IPM in Cambodia. Through various engagements, she has helped reinforce the competencies of field technicians and farmer-trainers, enabling wider adoption of climate-resilient farming practices.  Her work is grounded in partnership, practicality, adn community-focused development, having supported a range of local and international projects co-implemented with government agencies, NGOs, and development partners to empower smallholder farmers and uplift rural communities.  Jovie holds a Bachelor of Science in Agriculture major in Plant Protection from Visayas State University and currently serves as a Technical Specialist and TSH Country Representative at East-West Seed Knowledge Transfer.",
    presentationTitle: "Partners in Progress: The External View of PhilRice’s Journey",
  },
  {
    name: "Dr. Madonna C. Casimero",
    title: "IRRI",
    image: "/assets/speakers/Madonna-Casimero.png",
    description: "Dr. Madonna C. Casimero (Donna) is a Senior Scientist (Agronomist) at IRRI, where she leads the Climate Adaptive Agronomy sub-unit under the Sustainable Impact in Rice-based Systems (SIRS) Department and co-leads Area of Work 8 – Program Agility and Delivery of the OneCGIAR Sustainable Farming Program.  With nearly 40 years of experience in farming systems, weed science, and agronomy, Dr. Casimero has led R&D and capacity development projects across the Philippines, Laos, Cambodia, Indonesia, and Myanmar. She served as IRRI’s Country Representative to Myanmar (2012 to 2015) and previously led an ACIAR-funded project in Eastern Indonesia (2008 to 2011). Before joining IRRI, she spent 15 years at DA-PhilRice, where she served as Deputy Executive Director for R&D (2006 to 2008) and led the Rice-based Farming Systems Program, pioneering the Palayamanan model, later adopted nationally to enhance farm productivity, food security, and climate resilience. Her extensive body of work includes 30 peer-reviewed journal articles, 5 books, 5 book chapters, over 90 technical papers. She received multiple honors, including the Lifetime Achievement Award (Asian Pacific Weed Science Society, 2023), TOWNS Award (2004), John Dillon Fellowship Award (2007), and the Marcos R. Vega Memorial Award in Weed Science (2006).  Dr. Casimero holds BS and MS degrees in Agronomy from UP Los Baños and a PhD in Agronomy from Virginia Polytechnic Institute and State University (USA). ",
    presentationTitle: "Partners in Progress: The External View of PhilRice’s Journey",
  },
];

// ✅ Plenary Session Speakers
export const plenarySpeakers1: Speaker[] = [
  {
    name: "Dr. Diadem G. Esmero",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Dr. Jaime A. Manalo IV",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Ms. Geneva S. Gañalon",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Ms. Queen Anne Xyza Salayo",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Ms. Julieane Camile Lacsina",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
];

// ✅ Concurrent Session 2A Speakers
export const concurrentSession2A: Speaker[] = [
  {
    name: "Ms. Alice B. Mataia",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Sharen T. Rivas",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Angelita P. Caña",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Arlen A. Dela Cruz",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Liafail Davalos",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Aerone Philippe G. Bautista",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
];

// ✅ Concurrent Session 2B Speakers
export const concurrentSession2B: Speaker[] = [
  {
    name: "Mr. Fidel M. Ramos",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GuySilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Dexter G. Balboa",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GuySilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Hanah Hazel Mavi B. Manalo",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Harvi Angelo Sagnip",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GuySilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Imeldalyn G. Pacada",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Christina A. Frediles",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Mary Grace Nidoy",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
];

// ✅ Plenary Session Speakers 2
export const plenarySpeakers2: Speaker[] = [
  {
    name: "Dr. Roel R. Suralta",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GuySilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Dr. Flordeliza H. Bordey",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
  {
    name: "Dr. Rex L. Navarro",
    title: "Plenary Speaker - Rice Genomics",
    image: "/assets/speakers/GuySilhouette.png",
    description: "ons.",
    presentationTitle: "",
  },
];

// ✅ Panel Discussion 3 Speakers
export const panelSpeakers3: Speaker[] = [
  {
    name: "Dr. John C. de Leon",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Dr. Roel R. Suralta",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Dr. Norvie L. Manigbas",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Mr. Dindo King M. Donayre",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Dr. Jaime A. Manalo IV",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Mr. Edwin C. Martin",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Dr. Riza G. Abilgos-Ramos",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Dr. Elmer G. Bautista",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
  {
    name: "Dr. Jesusa C. Beltran",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },{
    name: "Dr. Jayvee A. Cruz-Kitma",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },{
    name: "Ms. Rosaly V. Manaois",
    title: "Chair/Moderator",
    image: "/assets/speakers/GirlSilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },{
    name: "Dr. Jonathan M. Niones",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },{
    name: "Dr. Reynante L. Ordonio",
    title: "Chair/Moderator",
    image: "/assets/speakers/GuySilhouette.png",
    description: "",
    presentationTitle: "Panel Discussion: Emerging Agri-Tech Trends",
  },
];

// ✅ Combined Export for Easy Looping
export const speakerSections: SpeakerSection[] = [
  {
    sectionTitle: "Guest Of Honor",
    speakers: keynoteSpeakers,
  },
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
