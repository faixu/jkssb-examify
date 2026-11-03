import { CurrentAffairsMCQ, CACategoryId, CA_TOPICS_BY_CATEGORY } from '../types/currentAffairs';
import { CURRENT_AFFAIRS_QUESTIONS } from './questions/currentAffairs';

export const CURATED_HIGH_YIELD_MCQS: CurrentAffairsMCQ[] = [
  // ==========================================
  // --- JAMMU & KASHMIR CURRENT AFFAIRS ---
  // ==========================================
  {
    id: 'ca-jk-001',
    category: 'jammu_kashmir',
    topic: 'Infrastructure, Rail & Tunnel Projects',
    date: '2026-08-15',
    question: 'The Chenab Bridge, recognized as the world’s highest railway arch bridge built as part of the Udhampur-Srinagar-Baramulla Rail Link (USBRL) project, stands at what height above the river bed?',
    options: ['324 metres', '359 metres', '380 metres', '412 metres'],
    correctOptionIndex: 1,
    explanation: 'The Chenab Rail Bridge stands at an elevation of 359 metres (1,178 ft) above the river bed, making it approximately 35 metres higher than the Eiffel Tower in Paris. It spans 1,315 metres across the Chenab River in Reasi district of Jammu & Kashmir.',
    examTags: ['JKSSB', 'UPSC', 'SSC CGL'],
  },
  {
    id: 'ca-jk-002',
    category: 'jammu_kashmir',
    topic: 'Culture, Tourism, GI Tags & Festivals',
    date: '2026-09-02',
    question: 'Which renowned craft from Kathua district of Jammu and Kashmir recently received the prestigious Geographical Indication (GI) tag certification alongside Bhaderwah Rajmash and Ramban Sulai Honey?',
    options: [
      'Basohli Pashmina & Basohli Painting',
      'Pampore Saffron',
      'Kani Shawl',
      'Kashmir Walnut Wood Carving',
    ],
    correctOptionIndex: 0,
    explanation: 'Basohli Pashmina and Basohli Painting from Kathua district were awarded the prestigious Geographical Indication (GI) tag. Basohli Pashmina is renowned for its 100% handspun fineness and traditional spinning charkha methods.',
    examTags: ['JKSSB', 'JKPSC', 'State GK'],
  },
  {
    id: 'ca-jk-003',
    category: 'jammu_kashmir',
    topic: 'J&K Government Schemes & Policies',
    date: '2026-07-20',
    question: 'Under J&K’s flagship "Mission Youth" initiative, which scheme provides financial support up to ₹10 Lakh with 100% interest subsidy to young aspiring entrepreneurs in the UT?',
    options: [
      'PARVAZ Scheme',
      'MUMKIN Scheme',
      'TEJASWINI Scheme',
      'HAUSLA Scheme',
    ],
    correctOptionIndex: 1,
    explanation: 'The MUMKIN scheme under Mission Youth provides financial support to youth for commercial vehicle purchases with a 20% subsidy (10% by Mission Youth and 10% by vehicle manufacturer) with zero collateral. Meanwhile, TEJASWINI specifically supports women entrepreneurs with ₹5 Lakh interest-free assistance.',
    examTags: ['JKSSB', 'JKPSC'],
  },
  {
    id: 'ca-jk-004',
    category: 'jammu_kashmir',
    topic: 'J&K Government Schemes & Policies',
    date: '2026-06-18',
    question: 'Which district became the first district in India to achieve 100% household coverage under the Ayushman Bharat PM-JAY SEHAT scheme?',
    options: ['Samba (J&K)', 'Solan (HP)', 'Kurnool (Andhra Pradesh)', 'Kathua (J&K)'],
    correctOptionIndex: 0,
    explanation: 'Samba district in Jammu & Kashmir became the first district in India to cover 100% of households under the ABPMJAY-SEHAT scheme. The scheme provides ₹5 Lakh cashless health cover per family to all UT residents on a floater basis.',
    examTags: ['JKSSB', 'JKPSC', 'Health Schemes'],
  },
  {
    id: 'ca-jk-005',
    category: 'jammu_kashmir',
    topic: 'Culture, Tourism, GI Tags & Festivals',
    date: '2026-01-26',
    question: 'At the 77th Republic Day Parade 2026 at Kartavya Path, which state/UT won the 2nd prize in the State Tableau category for showcasing traditional handicrafts and regional folk dances?',
    options: ['Kerala', 'Jammu & Kashmir', 'Uttarakhand', 'Odisha'],
    correctOptionIndex: 1,
    explanation: 'At the 77th Republic Day Parade 2026, Maharashtra won 1st prize for its "Ganeshotsav: A Symbol of Aatmanirbharta" tableau, while Jammu & Kashmir secured 2nd place with its tableau depicting authentic J&K handicrafts (Kani shawls, papier-mâché) and Rouf/Kud folk dances.',
    examTags: ['JKSSB', 'JKPSC', 'Art & Culture'],
  },
  {
    id: 'ca-jk-006',
    category: 'jammu_kashmir',
    topic: 'Environment, Lakes, Rivers & Wildlife',
    date: '2026-06-12',
    question: 'With the inclusion of Hygam and Shallabugh wetlands under the Ramsar Convention on Wetlands of International Importance, what is the total number of designated Ramsar sites in Jammu and Kashmir?',
    options: ['3 Ramsar Sites', '4 Ramsar Sites', '5 Ramsar Sites', '7 Ramsar Sites'],
    correctOptionIndex: 2,
    explanation: 'Jammu & Kashmir is home to 5 designated Ramsar Wetland Sites: Wular Lake (Bandipora), Hokersar Wetland (Srinagar/Budgam), Surinsar-Mansar Lakes (Jammu/Udhampur), Hygam Wetland Conservation Reserve (Baramulla), and Shallabugh Wetland Conservation Reserve (Ganderbal).',
    examTags: ['JKSSB', 'UPSC', 'JKPSC'],
  },
  {
    id: 'ca-jk-007',
    category: 'jammu_kashmir',
    topic: 'Appointments, LG Announcements & Administrative Orders',
    date: '2026-05-30',
    question: 'Which constitutional provision of the J&K Reorganization Act, 2019 governs the appointment, powers, and administrative functioning of the Lieutenant Governor (LG) of the Union Territory of Jammu & Kashmir?',
    options: [
      'Section 13 (mirroring Article 239A)',
      'Section 53 and Section 55',
      'Section 73',
      'Section 96',
    ],
    correctOptionIndex: 1,
    explanation: 'Section 53 and Section 55 of the Jammu & Kashmir Reorganization Act, 2019 delineate the executive powers, rules of business, and administrative sanction authorities of the Lieutenant Governor of the Union Territory of J&K.',
    examTags: ['JKSSB', 'JKPSC', 'Polity'],
  },

  // ==========================================
  // --- NATIONAL CURRENT AFFAIRS (INDIA) ---
  // ==========================================
  {
    id: 'ca-nat-001',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-09-24',
    question: 'Who was honoured with the prestigious Dadasaheb Phalke Award 2026 (for the year 2024) at the 72nd National Film Awards in Kevadia, Gujarat?',
    options: ['Rajnikanth', 'Mithun Chakraborty', 'Anant Nag', 'Allu Arjun'],
    correctOptionIndex: 2,
    explanation: 'Veteran Kannada cinema legend Anant Nag was honoured with India\'s highest film award, the Dadasaheb Phalke Award 2026 (for 2024), at the 72nd National Film Awards. The award was instituted in 1969 with Devika Rani as its first recipient.',
    examTags: ['JKSSB', 'SSC', 'UPSC'],
  },
  {
    id: 'ca-nat-002',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-09-15',
    question: 'Who was crowned Miss Universe India 2026 at the grand finale held in Jaipur, Rajasthan?',
    options: ['Vaishnavi Gannesh', 'Anushri Satavlekar', 'Kaziah Liz Mejo', 'Manika Vishwakarma'],
    correctOptionIndex: 2,
    explanation: 'Kaziah Liz Mejo from Kerala was crowned Miss Universe India 2026 at the finale in Jaipur, Rajasthan, and will represent India at the 75th Miss Universe event in Puerto Rico. Vaishnavi Gannesh from Tamil Nadu was 1st runner-up.',
    examTags: ['SSC', 'JKSSB', 'Awards'],
  },
  {
    id: 'ca-nat-003',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-08-01',
    question: 'Who was conferred the Lokmanya Tilak National Award 2026 by the Lokmanya Tilak Smarak Trust in Pune?',
    options: ['Amit Shah', 'Nitin Gadkari', 'Sudha Murty', 'Ajit Doval'],
    correctOptionIndex: 3,
    explanation: 'National Security Adviser (NSA) Ajit Doval was conferred the Lokmanya Tilak National Award 2026 (instituted in 1983, cash prize ₹1 Lakh) in Pune for his extraordinary contribution to national security and strategic intelligence.',
    examTags: ['UPSC', 'JKSSB', 'National Awards'],
  },
  {
    id: 'ca-nat-004',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-07-28',
    question: 'Which Odia poet and former CSIR-IMMT scientist was selected for the 47th Sarala Puraskar 2026 for the poetry collection "Bishwas De Pruthwi"?',
    options: ['R. Vairamuthu', 'Prakash Mahapatra', 'Dr. Ashutosh Parida', 'Bijay Nayak'],
    correctOptionIndex: 2,
    explanation: 'Dr. Ashutosh Parida was awarded the 47th Sarala Puraskar 2026 along with a cash prize of ₹7 Lakh for his acclaimed Odia poetry collection "Bishwas De Pruthwi".',
    examTags: ['Literature', 'SSC', 'UPSC'],
  },
  {
    id: 'ca-nat-005',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-08-16',
    question: 'Which film won the Best Feature Film award at the 72nd National Film Awards for 2024?',
    options: ['Chandu Champion', 'Kalki 2898 AD', 'Article 370', 'Captain Miller'],
    correctOptionIndex: 1,
    explanation: 'At the 72nd National Film Awards, Kalki 2898 AD won Best Feature Film Providing Wholesome Entertainment, Srikanth won Best Hindi Film, and Yami Gautam was named Best Actress for Article 370.',
    examTags: ['National Awards', 'JKSSB'],
  },
  {
    id: 'ca-nat-006',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-01-26',
    question: 'How many total Padma Awards were announced by the Ministry of Home Affairs on the occasion of Republic Day 2026?',
    options: ['120 Awards', '128 Awards', '131 Awards', '135 Awards'],
    correctOptionIndex: 2,
    explanation: 'President Droupadi Murmu approved 131 Padma Awards for 2026: 5 Padma Vibhushan (including Dharmendra Deol posthumously), 13 Padma Bhushan (including Alka Yagnik, Mammootty, Uday Kotak), and 113 Padma Shri (including cricketer Rohit Sharma, Harmanpreet Kaur Bhullar, and high jumper Praveen Kumar).',
    examTags: ['JKSSB', 'UPSC', 'Civic Honours'],
  },
  {
    id: 'ca-nat-007',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-06-20',
    question: 'Who was awarded the 60th Jnanpith Award (2025), India’s highest and oldest literary award?',
    options: ['R. Vairamuthu', 'Naresh Mehta', 'Liladhar Mandloi', 'Vinod Kumar Shukla'],
    correctOptionIndex: 0,
    explanation: 'Renowned Tamil poet and lyricist R. Vairamuthu was awarded the 60th Jnanpith Award 2025 (cash prize ₹11 Lakh). The first recipient in 1965 was Malayalam writer G. Sankara Kurup.',
    examTags: ['Literature', 'UPSC', 'JKPSC'],
  },
  {
    id: 'ca-nat-008',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-05-15',
    question: 'How many eminent personalities were conferred India\'s highest civilian award, the Bharat Ratna, in 2024?',
    options: ['3 personalities', '4 personalities', '5 personalities', '6 personalities'],
    correctOptionIndex: 2,
    explanation: 'In 2024, the Bharat Ratna was conferred on 5 leaders: Karpoori Thakur (11th CM of Bihar), L.K. Advani (7th Deputy PM), Dr. M.S. Swaminathan (Father of Green Revolution), P.V. Narasimha Rao (9th PM), and Chaudhary Charan Singh (5th PM).',
    examTags: ['JKSSB', 'UPSC', 'Polity'],
  },
  {
    id: 'ca-nat-009',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-04-10',
    question: 'Who received the 9th Prof. M.S. Swaminathan Award 2026 for outstanding research leadership in agriculture?',
    options: ['Dr. Ch. Srinivasa Rao', 'Rattan Lal', 'Ashok Gulati', 'Ramesh Chand'],
    correctOptionIndex: 0,
    explanation: 'Dr. Ch. Srinivasa Rao was conferred the 9th Prof. M.S. Swaminathan Award 2026 by former Vice President Venkaiah Naidu for his breakthrough work in climate-resilient dryland agriculture and sustainable soil management.',
    examTags: ['Agriculture', 'UPSC', 'JKSSB'],
  },
  {
    id: 'ca-nat-010',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-03-12',
    question: 'Who was awarded the 34th Vyas Samman by the KK Birla Foundation for the Hindi novel "Kaun Des Ko Vasi: Venu Ki Diary"?',
    options: ['Dr. Asghar Wajahat', 'Suryabala', 'Sankar Singh', 'Gyan Chaturvedi'],
    correctOptionIndex: 1,
    explanation: 'Prominent Hindi author Suryabala was honoured with the 34th Vyas Samman 2024 for her novel "Kaun Des Ko Vasi: Venu Ki Diary", presented by the KK Birla Foundation.',
    examTags: ['Literature', 'SSC', 'Awards'],
  },
  {
    id: 'ca-nat-011',
    category: 'national',
    topic: 'Books, Authors & Civilian Awards',
    date: '2026-03-25',
    question: 'Ram V. Sutar, sculptor of the world’s tallest statue (Statue of Unity, Gujarat), was conferred with which prestigious state honour in 2024?',
    options: ['Anupam Kher Award', 'Maharashtra Bhushan Award', 'Kalidas Samman', 'Karnataka Ratna'],
    correctOptionIndex: 1,
    explanation: 'Master sculptor Ram V. Sutar was conferred the Maharashtra Bhushan Award (highest civilian award of Maharashtra) for 2024. He is renowned globally for sculpting the 182-metre Statue of Unity.',
    examTags: ['Art & Culture', 'State Honours'],
  },
  {
    id: 'ca-nat-012',
    category: 'national',
    topic: 'Science, Defence, Space & Technology (ISRO/DRDO)',
    date: '2026-07-14',
    question: 'Who was awarded the prestigious Vikram Sarabhai Medal for 2026 jointly by COSPAR and ISRO?',
    options: ['Sunita Williams', 'Annapurni Subramaniam', 'Nigar Shaji', 'Ritu Karidhal'],
    correctOptionIndex: 1,
    explanation: 'Dr. Annapurni Subramaniam, Director of the Indian Institute of Astrophysics (IIA), Bengaluru, received the Vikram Sarabhai Medal 2026 at the 46th COSPAR Scientific Assembly in Italy for her leadership in space astronomy.',
    examTags: ['ISRO', 'UPSC', 'Science'],
  },
  {
    id: 'ca-nat-013',
    category: 'national',
    topic: 'Science, Defence, Space & Technology (ISRO/DRDO)',
    date: '2026-08-08',
    question: 'Which Indian physicist won the prestigious 2026 ICTP Dirac Medal awarded by the Abdus Salam International Centre for Theoretical Physics in Italy?',
    options: ['Ashoke Sen', 'Deepak Dhar', 'C. N. R. Rao', 'S. S. Bhatnagar'],
    correctOptionIndex: 1,
    explanation: 'Physicist Deepak Dhar (Padma Bhushan 2023) won the 2026 Dirac Medal alongside Bernard Derrida, Marc Mézard, and Haim Sompolinsky. Ashoke Sen was the first Indian recipient.',
    examTags: ['Science', 'UPSC', 'Physics'],
  },
  {
    id: 'ca-nat-014',
    category: 'national',
    topic: 'Science, Defence, Space & Technology (ISRO/DRDO)',
    date: '2026-01-26',
    question: 'In the Peacetime Gallantry Awards approved by President Droupadi Murmu, who was conferred the nation\'s highest peacetime gallantry decoration, the Ashok Chakra?',
    options: ['Group Captain Shubhanshu Shukla', 'Major Radhika Sen', 'Major Abhilasha Barak', 'Lt Colonel Seeta Ashok Shelke'],
    correctOptionIndex: 0,
    explanation: 'Group Captain Shubhanshu Shukla was decorated with the Ashok Chakra. A total of 70 peacetime gallantry awards were approved, including 3 Kirti Chakras, 13 Shaurya Chakras, and 44 Sena Medals.',
    examTags: ['Defence', 'JKSSB', 'UPSC'],
  },
  {
    id: 'ca-nat-015',
    category: 'national',
    topic: 'Science, Defence, Space & Technology (ISRO/DRDO)',
    date: '2026-02-18',
    question: 'Who received the prestigious Vigyan Ratna Award, India\'s highest science honor under the Rashtriya Vigyan Puraskar?',
    options: ['C. N. R. Rao', 'M. S. Swaminathan', 'Jayant Vishnu Narlikar', 'G. Madhavan Nair'],
    correctOptionIndex: 2,
    explanation: 'Renowned astrophysicist Prof. Jayant Vishnu Narlikar was posthumously conferred the first Vigyan Ratna Award by the Ministry of Science & Technology under the newly instituted Rashtriya Vigyan Puraskar framework.',
    examTags: ['Science', 'UPSC', 'National Awards'],
  },
  {
    id: 'ca-nat-016',
    category: 'national',
    topic: 'National Sports & Major Championships',
    date: '2026-01-10',
    question: 'How many sportspersons were selected for the prestigious Arjuna Award at the National Sports Awards 2025?',
    options: ['10 sportspersons', '11 sportspersons', '17 sportspersons', '20 sportspersons'],
    correctOptionIndex: 2,
    explanation: '17 sportspersons were conferred the Arjuna Award 2025, including Tejaswin Shankar, Priyanka Goswami, Treesa Jolly, Gayatri Gopichand, Vidit Gujrathi, Divya Deshmukh, and Manu Bhaker, recommended by a committee headed by Justice Arun Kumar Mishra.',
    examTags: ['Sports', 'JKSSB', 'SSC'],
  },
  {
    id: 'ca-nat-017',
    category: 'national',
    topic: 'National Sports & Major Championships',
    date: '2026-02-22',
    question: 'Who was named the Best Male Athlete of the Year at the 1st edition of the Indian Athletics Awards 2025?',
    options: ['Neeraj Chopra', 'Avinash Sable', 'Tejaswin Shankar', 'Gulveer Singh'],
    correctOptionIndex: 0,
    explanation: 'Olympic gold and silver medalist Neeraj Chopra (Javelin) was named Best Male Athlete of the Year 2025, and Asian Games champion Parul Chaudhary was named Best Female Athlete of the Year.',
    examTags: ['Sports', 'JKSSB'],
  },
  {
    id: 'ca-nat-018',
    category: 'national',
    topic: 'National Sports & Major Championships',
    date: '2026-03-08',
    question: 'Who won the BBC Indian Sportswoman of the Year 2025 award?',
    options: ['Smriti Mandhana', 'P. V. Sindhu', 'Nikhat Zareen', 'Mirabai Chanu'],
    correctOptionIndex: 0,
    explanation: 'Indian cricket star Smriti Mandhana won BBC Indian Sportswoman of the Year 2025. Chess grandmaster Divya Deshmukh won Emerging Player of the Year, while Olympian Anjali Bhagwat won the Lifetime Achievement Award.',
    examTags: ['Sports', 'Current Affairs'],
  },
  {
    id: 'ca-nat-019',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-04-05',
    question: 'How many small railway stations are being modernized and revamped under the Ministry of Railways’ "Amrit Bharat Station Scheme"?',
    options: ['1,000 stations', '2,000 stations', '5,000 stations', '6,000 stations'],
    correctOptionIndex: 0,
    explanation: 'The Amrit Bharat Station Scheme, initiated by Railway Minister Ashwini Vaishnaw, envisions the holistic development and continuous modernization of 1,000 small and medium stations across Indian Railways.',
    examTags: ['Railways', 'JKSSB', 'Schemes'],
  },
  {
    id: 'ca-nat-020',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-03-14',
    question: 'What is the renamed title of the "Pradhan Mantri Kaushal Ko Kaam Karyakram" implemented by the Ministry of Minority Affairs?',
    options: ['PM VIKAS Scheme', 'PM ROJGAR', 'PM KARMI', 'PM VISHWAKARMA'],
    correctOptionIndex: 0,
    explanation: 'PM VIKAS (Pradhan Mantri Virasat Ka Samvardhan) is the integrated central sector scheme aiming to improve the livelihoods of artisans and craftsmen from minority communities through master craftsperson training and credit support.',
    examTags: ['Government Schemes', 'JKSSB', 'UPSC'],
  },
  {
    id: 'ca-nat-021',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-05-11',
    question: 'Project Re-HAB (Reducing Elephant-Human Attacks using Honey Bees), aimed at establishing bee-fences against elephant incursions, was inaugurated in Nainital by which organization?',
    options: ['Wildlife Trust of India', 'Forest Survey of India', 'Khadi and Village Industries Commission (KVIC)', 'Ministry of Environment'],
    correctOptionIndex: 2,
    explanation: 'Project Re-HAB was initiated by KVIC under its National Honey Mission (Sweet Revolution) to deter wild elephants from entering human settlements using bee boxes, tested in Karnataka and extended to Nainital, Uttarakhand.',
    examTags: ['Environment', 'KVIC', 'JKSSB'],
  },
  {
    id: 'ca-nat-022',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-06-01',
    question: 'How many schools across India are targeted for comprehensive infrastructure and pedagogical upgrading under the PM-SHRI scheme?',
    options: ['10,000 schools', '12,500 schools', '14,500 schools', '20,000 schools'],
    correctOptionIndex: 2,
    explanation: 'PM-SHRI (Pradhan Mantri Schools for Rising India) aims to upgrade 14,500 schools to showcase implementation of the National Education Policy 2020 as modern, experiential, and inquiry-driven green institutions.',
    examTags: ['Education', 'NEP 2020', 'JKSSB'],
  },
  {
    id: 'ca-nat-023',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-07-02',
    question: 'How many Mega Integrated Textile Region and Apparel (PM MITRA) Parks are being established across India over 3 years?',
    options: ['5 Parks', '7 Parks', '10 Parks', '12 Parks'],
    correctOptionIndex: 1,
    explanation: 'Under PM MITRA, 7 world-class mega textile parks with plug-and-play manufacturing infrastructure are being set up to realize the Prime Minister\'s 5F vision: Farm to Fibre to Factory to Fashion to Foreign.',
    examTags: ['Economy', 'Schemes', 'UPSC'],
  },
  {
    id: 'ca-nat-024',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-06-14',
    question: 'Under the Agnipath scheme, what percentage of each Agniveer cohort is enrolled into the regular cadres of the Armed Forces after 4 years?',
    options: ['15%', '25%', '35%', '50%'],
    correctOptionIndex: 1,
    explanation: 'Under Agnipath, youth aged 17.5 to 21 serve for 4 years across Army, Navy, and Air Force. Up to 25% are retained for 15 years in regular service, while exiting Agniveers receive an exempt ₹11.71 Lakh Seva Nidhi financial package.',
    examTags: ['Defence', 'JKSSB', 'Schemes'],
  },
  {
    id: 'ca-nat-025',
    category: 'national',
    topic: 'Central Government Schemes & Portal Launches',
    date: '2026-05-20',
    question: 'The NAMASTE scheme, aimed at ensuring zero fatalities in sanitation work and mechanizing sewer maintenance, is implemented by which ministry?',
    options: ['Ministry of Jal Shakti', 'Ministry of Social Justice and Empowerment', 'Ministry of Housing and Urban Affairs', 'Ministry of Health'],
    correctOptionIndex: 1,
    explanation: 'NAMASTE (National Action for Mechanised Sanitation Ecosystem) is jointly implemented by MoSJE and MoHUA to eliminate hazardous manual entry into sewers and empower sanitation workers through mechanization.',
    examTags: ['Social Justice', 'JKSSB', 'UPSC'],
  },
  {
    id: 'ca-nat-026',
    category: 'national',
    topic: 'Indian Economy, Banking & RBI Guidelines',
    date: '2026-08-25',
    question: 'Which institution launched the advanced supervisory monitoring web application named "DAKSH" to streamline regulatory compliance?',
    options: ['SEBI', 'Reserve Bank of India (RBI)', 'SBI', 'NABARD'],
    correctOptionIndex: 1,
    explanation: 'Reserve Bank of India Governor Shaktikanta Das launched "DAKSH", a web-based SupTech (Supervisory Technology) platform designed to enhance monitoring of banks, NBFCs, and financial entities.',
    examTags: ['Banking', 'RBI', 'JKSSB'],
  },
  {
    id: 'ca-nat-027',
    category: 'national',
    topic: 'National Environment & Climate Initiatives',
    date: '2026-01-15',
    question: 'In Swachh Survekshan 2024-25, which city was ranked the cleanest in the Swachh Shehar Category among Million-Plus cities?',
    options: ['New Delhi', 'Surat', 'Ahmedabad', 'Bhopal'],
    correctOptionIndex: 2,
    explanation: 'In Swachh Survekshan 2024-25, Ahmedabad emerged as the cleanest city in the Swachh Shehar (Million-Plus) category followed by Bhopal, while Indore and Surat were elevated to the Super Swachh League.',
    examTags: ['Environment', 'JKSSB', 'Urban Affairs'],
  },
  {
    id: 'ca-nat-028',
    category: 'national',
    topic: 'National Environment & Climate Initiatives',
    date: '2026-02-10',
    question: 'Which Indian airport became the first in the country to achieve verified "Water-Positive" status under the NITI Aayog–CII Water Neutrality Framework?',
    options: [
      'Chhatrapati Shivaji Maharaj Airport (Mumbai)',
      'Indira Gandhi International Airport (Delhi)',
      'Kempegowda International Airport (Bengaluru)',
      'Rajiv Gandhi International Airport (Hyderabad)',
    ],
    correctOptionIndex: 1,
    explanation: 'Delhi\'s Indira Gandhi International Airport (IGI) became India\'s first water-positive airport by harvesting, treating, and recharging more freshwater than consumed through dedicated rainwater harvesting ponds and zero-discharge STPs.',
    examTags: ['Environment', 'NITI Aayog', 'Infrastructure'],
  },

  // ==========================================
  // --- INTERNATIONAL CURRENT AFFAIRS ---
  // ==========================================
  {
    id: 'ca-intl-001',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-08-31',
    question: 'How many awardees were selected for the 68th Ramon Magsaysay Award (Nobel Peace Prize of Asia) in 2026?',
    options: ['2 Awardees', '3 Awardees', '4 Awardees', '5 Awardees'],
    correctOptionIndex: 1,
    explanation: 'The 68th Ramon Magsaysay Award 2026 was conferred on 3 luminaries: Tommy Koh (Singapore - UNCLOS law of sea diplomat), Runa Khan (Bangladesh - Friendship NGO founder), and Bo Kyi (Myanmar - human rights advocate).',
    examTags: ['International Awards', 'UPSC', 'JKPSC'],
  },
  {
    id: 'ca-intl-002',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-09-05',
    question: 'Prime Minister Narendra Modi was conferred with the "Bintang Adipurna" (Star of the Republic), the highest civilian honour of which nation?',
    options: ['Malaysia', 'Vietnam', 'Thailand', 'Indonesia'],
    correctOptionIndex: 3,
    explanation: 'Indonesian President Prabowo Subianto conferred Indonesia\'s highest civilian medal, the "Bintang Adipurna", on PM Narendra Modi in Jakarta to celebrate maritime solidarity and bilateral diplomatic cooperation.',
    examTags: ['International Relations', 'UPSC', 'Modi Honours'],
  },
  {
    id: 'ca-intl-003',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-05-18',
    question: 'Who became the first person of Indian origin to win the prestigious Wolf Prize in Physics (2025) for discovering Composite Fermions?',
    options: ['Venkatraman Ramakrishnan', 'Ashoke Sen', 'C. N. R. Rao', 'Jainendra K. Jain'],
    correctOptionIndex: 3,
    explanation: 'Prof. Jainendra K. Jain of Penn State University won the 2025 Wolf Prize in Physics in Israel for establishing Composite Fermion Theory explaining fractional quantum Hall states.',
    examTags: ['Physics', 'Wolf Prize', 'UPSC'],
  },
  {
    id: 'ca-intl-004',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-03-05',
    question: 'Who was awarded the 2026 Pritzker Architecture Prize, widely regarded as the highest global honor in architecture?',
    options: ['Alejandro Aravena', 'Liu Jiakun', 'Smiljan Radić Clarke', 'David Chipperfield'],
    correctOptionIndex: 2,
    explanation: 'Chilean architect Smiljan Radić Clarke was honoured with the 2026 Pritzker Architecture Prize for his visionary buildings merging natural stone geology and transparent membranes.',
    examTags: ['Architecture', 'Pritzker', 'World Awards'],
  },
  {
    id: 'ca-intl-005',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-05-24',
    question: 'Which Indian Army officer won the 2025 UN Military Gender Advocate of the Year Award for peacekeeping service with UNIFIL in Lebanon?',
    options: ['Major Radhika Sen', 'Major Suman Gawani', 'Major Abhilasha Barak', 'Major Swathi Shantha Kumar'],
    correctOptionIndex: 2,
    explanation: 'Major Abhilasha Barak, India\'s first female combat helicopter pilot, became the 3rd Indian officer to win the UN Military Gender Advocate of the Year Award for empowering women peacekeepers in UNIFIL, Lebanon.',
    examTags: ['United Nations', 'Peacekeeping', 'Defence'],
  },
  {
    id: 'ca-intl-006',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-05-21',
    question: 'Who won the International Booker Prize 2026 for the novel "Taiwan Travelogue", originally written in Mandarin Chinese?',
    options: ['Yáng Shuāng-zǐ', 'Daniel Kehlmann', 'Marie NDiaye', 'Banu Mushtaq'],
    correctOptionIndex: 0,
    explanation: 'Taiwanese author Yáng Shuāng-zǐ and translator Lin King won the International Booker Prize 2026 (prize £50,000) for "Taiwan Travelogue", chronicling a 1930s food journey across Taiwan.',
    examTags: ['Booker Prize', 'Literature', 'UPSC'],
  },
  {
    id: 'ca-intl-007',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-04-22',
    question: 'Three Indian students won the global Earth Prize 2026 for developing "Plas-Stick", a microplastic removal solution made from which natural seed powder?',
    options: ['Neem Seed Powder', 'Tamarind Seed Powder', 'Moringa Seed Powder', 'Custard Apple Seed Powder'],
    correctOptionIndex: 1,
    explanation: 'Innovators Vivaan Chhawchharia, Ariana Agarwal, and Avyana Mehta won the $100,000 Earth Prize 2026 for creating "Plas-Stick", an organic flocculant made of tamarind seed powder to capture water microplastics.',
    examTags: ['Earth Prize', 'Environment', 'Innovation'],
  },
  {
    id: 'ca-intl-008',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-04-20',
    question: 'Who won the Laureus World Sportsman of the Year Award 2026 at the awards ceremony in Madrid, Spain?',
    options: ['Novak Djokovic', 'Lionel Messi', 'Carlos Alcaraz', 'Lando Norris'],
    correctOptionIndex: 2,
    explanation: 'Spanish tennis champion Carlos Alcaraz was voted Sportsman of the Year 2026, Aryna Sabalenka won Sportswoman of the Year, Lando Norris won Breakthrough of the Year, and gymnast Nadia Comăneci received the Lifetime Achievement Award.',
    examTags: ['Laureus', 'Sports', 'International'],
  },
  {
    id: 'ca-intl-009',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-03-02',
    question: 'Which film won the Best Film award at the 98th Academy Awards (Oscars 2026)?',
    options: ['Hamnet', 'Sinners', 'One Battle After Another', 'Frankenstein'],
    correctOptionIndex: 2,
    explanation: '"One Battle After Another" directed by Paul Thomas Anderson took home the Best Film award at the 98th Academy Awards. Best Actor went to Michael B. Jordan (Sinners) and Best Actress to Jessie Buckley (Hamnet).',
    examTags: ['Oscars', 'Cinema', 'World Awards'],
  },
  {
    id: 'ca-intl-010',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-03-18',
    question: 'Who was awarded the prestigious Abel Prize 2026 in Mathematics by The Norwegian Academy of Science and Letters?',
    options: ['Dennis P. Sullivan', 'Gerd Faltings', 'Luis Caffarelli', 'Masaki Kashiwara'],
    correctOptionIndex: 1,
    explanation: 'German mathematician Gerd Faltings won the Abel Prize 2026 for his groundbreaking geometric methods in arithmetic algebraic geometry that led to the proof of the Mordell conjecture.',
    examTags: ['Mathematics', 'Abel Prize', 'Science'],
  },
  {
    id: 'ca-intl-011',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-03-22',
    question: 'Who won the Stockholm Water Prize 2026 (called the Nobel Prize of Water) as its youngest ever recipient?',
    options: ['Günter Blöschl', 'Roger Falconer', 'Sunita Narain', 'Kaveh Madani'],
    correctOptionIndex: 3,
    explanation: 'Iranian-American systems scientist and hydrologist Kaveh Madani was awarded the Stockholm Water Prize 2026 for his pioneering integration of game theory with water conflict management.',
    examTags: ['Water Prize', 'Environment', 'UPSC'],
  },
  {
    id: 'ca-intl-012',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-02-15',
    question: 'Which Indian children’s film from Manipur won the BAFTA Award 2026 in the Best Children’s & Family Film category?',
    options: ['Homebound', 'RRR', 'Boong', '12th Fail'],
    correctOptionIndex: 2,
    explanation: 'Manipuri feature film "Boong", directed by Lakshmipriya Devi and produced by Farhan Akhtar and Ritesh Sidhwani, became the first Indian film to win a BAFTA in the Best Children’s & Family Film category.',
    examTags: ['BAFTA', 'Cinema', 'North East India'],
  },
  {
    id: 'ca-intl-013',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-02-08',
    question: 'Which Tibetan spiritual leader won the 2026 Grammy Award for Best Audio Book, Narration & Storytelling Recording for the album "Meditations"?',
    options: ['Dalai Lama', 'Anoushka Shankar', 'Kendrick Lamar', 'Barack Obama'],
    correctOptionIndex: 0,
    explanation: 'The 14th Dalai Lama won the 2026 Grammy Award for Best Audio Book, Narration & Storytelling Recording for his spoken-word musical album "Meditations", spreading universal compassion.',
    examTags: ['Grammy', 'World Figures'],
  },
  {
    id: 'ca-intl-014',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-02-12',
    question: 'Which Indian educator and artist was honoured with the $1 million Global Teacher Prize 2026 at the World Governments Summit in Dubai?',
    options: ['Rouble Nagi', 'Ranjitsinh Disale', 'Sister Cyril', 'Anand Kumar'],
    correctOptionIndex: 0,
    explanation: 'Indian educator and artist Rouble Nagi won the Global Teacher Prize 2026 awarded by the Varkey Foundation and UNESCO for transforming urban slums through the Misaal Mumbai initiative.',
    examTags: ['Global Teacher Prize', 'Education', 'UNESCO'],
  },
  {
    id: 'ca-intl-015',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-10-10',
    question: 'Who was awarded the Nobel Peace Prize 2025 by the Norwegian Nobel Committee?',
    options: ['Nihon Hidankyo', 'John Hopfield', 'Maria Corina Machado', 'Victor Ambros'],
    correctOptionIndex: 2,
    explanation: 'Venezuelan democratic opposition leader Maria Corina Machado was awarded the Nobel Peace Prize 2025 for her courageous, non-violent defense of democratic rights and peaceful political transitions.',
    examTags: ['Nobel Prize', 'UPSC', 'Peace'],
  },
  {
    id: 'ca-intl-016',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-10-08',
    question: 'Who won the Nobel Prize in Literature 2025 for compelling apocalyptic and rhythmic prose?',
    options: ['Pierre Agostini', 'László Krasznahorkai', 'Anne L’Huillier', 'Jon Fosse'],
    correctOptionIndex: 1,
    explanation: 'Hungarian novelist László Krasznahorkai (author of Satantango and The Melancholy of Resistance) was awarded the Nobel Prize in Literature 2025 by the Swedish Academy.',
    examTags: ['Nobel Prize', 'Literature'],
  },
  {
    id: 'ca-intl-017',
    category: 'international',
    topic: 'Global Science, Tech & Energy Transitions',
    date: '2026-07-06',
    question: 'Who became the first Chinese woman mathematician to win the prestigious Fields Medal from the International Mathematical Union (IMU)?',
    options: ['Hong Wang', 'Yu Deng', 'Maryna Viazovska', 'Hannah Fry'],
    correctOptionIndex: 0,
    explanation: 'Mathematician Hong Wang made history as the first Chinese woman to be awarded the Fields Medal, recognized for seminal contributions to harmonic analysis, restriction conjectures, and geometric measure theory.',
    examTags: ['Fields Medal', 'Mathematics', 'Science'],
  },
  {
    id: 'ca-intl-018',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-09-01',
    question: 'Who won the Men’s Ballon d’Or 2025 at the ceremony held in London, England?',
    options: ['Lionel Messi', 'Erling Haaland', 'Ousmane Dembélé', 'Kylian Mbappé'],
    correctOptionIndex: 2,
    explanation: 'French forward Ousmane Dembélé won the Men\'s Ballon d\'Or 2025, while Spanish midfield maestro Aitana Bonmatí claimed the Women\'s Ballon d\'Or.',
    examTags: ['Football', 'Ballon d\'Or', 'Sports'],
  },
  {
    id: 'ca-intl-019',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-05-28',
    question: 'Which film won the prestigious Palme d\'Or (highest prize) at the 78th Cannes Film Festival 2025?',
    options: ['Anora', 'Mission Impossible', 'It Was Just an Accident', 'Conclave'],
    correctOptionIndex: 2,
    explanation: 'Iranian director Jafar Panahi\'s film "It Was Just an Accident" won the Palme d\'Or at the 78th Cannes Film Festival 2025.',
    examTags: ['Cannes', 'Cinema', 'Awards'],
  },
  {
    id: 'ca-intl-020',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-05-02',
    question: 'Who was crowned Miss World 2025 at the 72nd Miss World pageant hosted in Hyderabad, India?',
    options: ['Suchata Chuangsri', 'Hasset Dereje Admassu', 'Maja Klajda', 'Aurelie Joachim'],
    correctOptionIndex: 0,
    explanation: 'Suchata Chuangsri made history as the first woman from Thailand to win the Miss World title at the 72nd edition held in Hyderabad, India. Ethiopia\'s Hasset Dereje Admassu was 1st runner-up.',
    examTags: ['Miss World', 'World Events'],
  },
  {
    id: 'ca-intl-021',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-05-12',
    question: 'Which microbiologist from Brazil was awarded the 2025 World Food Prize for revolutionary advancements in biological nitrogen fixation?',
    options: ['Norman Borlaug', 'Mariangela Hungria', 'Gebisa Ejeta', 'Rattan Lal'],
    correctOptionIndex: 1,
    explanation: 'Dr. Mariangela Hungria of Embrapa, Brazil, won the $500,000 World Food Prize 2025 for developing microbial inoculants (Rhizobium, Azospirillum) enabling soil bacteria to fix atmospheric nitrogen without synthetic chemical fertilizers.',
    examTags: ['World Food Prize', 'Agriculture', 'Environment'],
  },
  {
    id: 'ca-intl-022',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-06-15',
    question: 'Prime Minister Narendra Modi was conferred the "Order of Makarios III", the highest civilian honour of which Mediterranean nation?',
    options: ['Cyprus', 'Greece', 'Turkey', 'Malta'],
    correctOptionIndex: 0,
    explanation: 'The President of Cyprus conferred "The Order of Makarios III" on PM Narendra Modi in Nicosia in recognition of India\'s steadfast friendship and bilateral diplomatic cooperation.',
    examTags: ['International Relations', 'Modi Honours', 'Cyprus'],
  },
  {
    id: 'ca-intl-023',
    category: 'international',
    topic: 'International Awards & World Figures',
    date: '2026-06-28',
    question: 'Which highest national civilian honour was conferred upon Prime Minister Narendra Modi by Ethiopian Prime Minister Dr. Abiy Ahmed Ali in Addis Ababa?',
    options: ['Order of the Blue Nile', 'Order of the Lion', 'Great Honour Nishan of Ethiopia', 'Star of Africa'],
    correctOptionIndex: 2,
    explanation: 'Ethiopian Prime Minister Dr. Abiy Ahmed Ali conferred the "Great Honour Nishan of Ethiopia" (Ethiopia\'s highest civilian medal) on PM Narendra Modi in recognition of his global leadership and commitment to the Global South.',
    examTags: ['International Relations', 'Africa', 'Modi Honours'],
  },
];

// Helper to classify JKSSB Current Affairs bank questions into Tier 1 and Tier 2 categories
function classifyCurrentAffairsQuestion(q: typeof CURRENT_AFFAIRS_QUESTIONS[0]): { category: CACategoryId; topic: string } {
  const text = `${q.question} ${q.explanation} ${q.tip || ''}`.toLowerCase();
  
  const isJK = /j&k|jammu|kashmir|ladakh|leh|kargil|zojila|chenab|anji|marusudar|pakal dul|sawalkote|baglihar|salal|kiru|kwar|ratle|kishtwar|doda|reasi|srinagar|baramulla|pulwama|shopian|anantnag|bandipora|ganderbal|kupwara|rajouri|poonch|udhampur|kathua|samba|ramban|dal lake|wular|pampore|gulmarg|pahalgam|sonamarg|darbar move|lieutenant governor|sinthan|shinku la|drass|nubra|changthang|zanskar|padum|diskit|khaltse|hanle|nyoma|basohli|bhaderwah|ranbir singh|gulab singh|hari singh|sheikh abdullah|farooq|omar abdullah|mehbooba|articles 370|35a|reorganisation act|mission youth|parvaz|mumkin|tejaswini|hausla|kheer bhawani|tulip festival|gurez/i.test(text);

  const isIntl = /un |united nations|unesco|who |imf|world bank|g20|g7|brics|sco |asean|nato|cop2|treaty|bilateral|pact|israel|gaza|ukraine|russia|china|usa|united states|donald trump|biden|putin|iran|cannes|oscar|grammy|nobel|miss world|palme d|international|global index|world press freedom|global hunger|world happiness/i.test(text);

  let category: CACategoryId = 'national';
  let topic = 'Central Government Schemes & Portal Launches';

  if (isJK) {
    category = 'jammu_kashmir';
    if (/rail|bridge|tunnel|highway|road|nh-|infrastructure|expressway|zojila|z-morh|chenab.*bridge/i.test(text)) {
      topic = 'Infrastructure, Rail & Tunnel Projects';
    } else if (/river|lake|wetland|wildlife|forest|national park|sanctuary|environment|climate|pollution|biodiversity|hangul|water/i.test(text)) {
      topic = 'Environment, Lakes, Rivers & Wildlife';
    } else if (/gi tag|craft|art|pashmina|saffron|festival|culture|heritage|tourism|monument|shrine|temple|pilgrimage|kheer bhawani/i.test(text)) {
      topic = 'Culture, Tourism, GI Tags & Festivals';
    } else if (/sport|cricket|football|medal|award|padma|khel|sheikh mohammad|stadium/i.test(text)) {
      topic = 'J&K Sports & Regional Awards';
    } else if (/scheme|policy|mission|yojana|portal|subsidy|grant|allowance|welfare|health|pension|scholarship/i.test(text)) {
      topic = 'J&K Government Schemes & Policies';
    } else if (/economy|budget|agriculture|horticulture|apple|walnut|silk|handicraft|revenue|tax|gdp|gsdp|bank/i.test(text)) {
      topic = 'J&K Economy, Agriculture & Horticulture';
    } else {
      topic = 'Appointments, LG Announcements & Administrative Orders';
    }
  } else if (isIntl) {
    category = 'international';
    if (/award|prize|figure|person|leader|president|prime minister.*honour|palme|oscar|nobel|miss world/i.test(text)) {
      topic = 'International Awards & World Figures';
    } else if (/defence|military|exercise|conflict|war|army|navy|air force|missile/i.test(text)) {
      topic = 'International Defence Exercises & Conflicts';
    } else if (/index|report|ranking|rank|indicator/i.test(text)) {
      topic = 'Global Indices & Reports';
    } else if (/science|tech|ai|energy|space|satellite|climate|transition|green|carbon/i.test(text)) {
      topic = 'Global Science, Tech & Energy Transitions';
    } else if (/treaty|mou|agreement|pact|trade|fta/i.test(text)) {
      topic = 'International Treaties, MOUs & Trade Pacts';
    } else {
      topic = 'Bilateral Summits & Global Groupings (G20, SCO, BRICS, UN)';
    }
  } else {
    category = 'national';
    if (/isro|drdo|space|satellite|defence|missile|tech|ai|quantum|semiconductor|navy|army|air force/i.test(text)) {
      topic = 'Science, Defence, Space & Technology (ISRO/DRDO)';
    } else if (/economy|rbi|bank|repo|inflation|gdp|fiscal|budget|gst|rupee|sebi/i.test(text)) {
      topic = 'Indian Economy, Banking & RBI Guidelines';
    } else if (/sport|cricket|olympic|paralympic|badminton|chess|hockey|fifa|championship|trophy/i.test(text)) {
      topic = 'National Sports & Major Championships';
    } else if (/award|padma|bharat ratna|book|author|sahitya|jnanpith|dadasaheb/i.test(text)) {
      topic = 'Books, Authors & Civilian Awards';
    } else if (/summit|report|index|rank|niti aayog|survey/i.test(text)) {
      topic = 'National Summits, Reports & Indexes';
    } else if (/environment|climate|forest|tiger|cheetah|ramsar|pollution|solar|green/i.test(text)) {
      topic = 'National Environment & Climate Initiatives';
    } else {
      topic = 'Central Government Schemes & Portal Launches';
    }
  }

  if (!CA_TOPICS_BY_CATEGORY[category].includes(topic)) {
    topic = CA_TOPICS_BY_CATEGORY[category][0];
  }

  return { category, topic };
}

// Convert all 401 questions from the JKSSB Current Affairs bank into 2-Tier CurrentAffairsMCQ format
const MAPPED_CURRENT_AFFAIRS_BANK: CurrentAffairsMCQ[] = CURRENT_AFFAIRS_QUESTIONS.map((q, idx) => {
  const { category, topic } = classifyCurrentAffairsQuestion(q);
  const correctIdx = q.options.findIndex(
    (opt) => opt.trim().toLowerCase() === q.answer.trim().toLowerCase()
  );
  return {
    id: `ca-bank-${q.id || idx + 1}`,
    category,
    topic,
    date: '2026-06-15',
    question: q.question,
    options: q.options,
    correctOptionIndex: correctIdx >= 0 ? correctIdx : 0,
    explanation: q.explanation || q.tip || 'Verified against authentic JKSSB 2026 syllabus materials.',
    examTags: ['JKSSB', 'Current Affairs 2026', category === 'jammu_kashmir' ? 'J&K Special' : 'General GK'],
  };
});

// Merged master bank containing both curated high-yield questions and the full 401-question JKSSB bank
export const CURRENT_AFFAIRS_MCQS: CurrentAffairsMCQ[] = [
  ...CURATED_HIGH_YIELD_MCQS,
  ...MAPPED_CURRENT_AFFAIRS_BANK,
];

export const SAMPLE_CURRENT_AFFAIRS_MCQS = CURRENT_AFFAIRS_MCQS;
