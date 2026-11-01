import { Flashcard } from '../../types';

/**
 * 120 Official Examination MCQs from JKSSB Data Entry Operator (DEO) OMR Examination 2025 (Series A)
 * Source: /public/assets/aistudio/QP_Series-A_Data_entry_operator_24a3eaae.pdf
 * Complete transcription with all 120 questions across General Knowledge, General English,
 * Mental Ability/Reasoning, Quantitative Mathematics, Statistics, and Computer Science.
 */
export const JKSSB_DEO_2025_PDF_QUESTIONS: Flashcard[] = [
  // --- Section 1: General Knowledge, J&K UT Special, Polity & Science (Q1 - Q36) ---
  {
    id: "jkssb-deo-2025-1",
    categoryId: "general",
    question: "Which of the following countries didn't have any satellite launched by PSLV C-40?",
    answer: "Russia",
    options: ["Canada", "France", "Russia", "USA"],
    explanation: "ISRO's PSLV C-40 mission carried 31 satellites, including co-passenger satellites from Canada, Finland, France, South Korea, the United Kingdom, and the USA. Russia did not have a satellite on this launch.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q1)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-2",
    categoryId: "general",
    question: "In the 1962 India-China war, the primary disputed region lay in which state/UT?",
    answer: "Ladakh and Arunachal Pradesh",
    options: [
      "Uttarakhand and Himachal Pradesh",
      "Ladakh and Arunachal Pradesh",
      "Sikkim and Nagaland",
      "Jammu and Kashmir"
    ],
    explanation: "The 1962 Sino-Indian War was fought primarily across the western theatre in Ladakh (Aksai Chin) and the eastern theatre in the North-East Frontier Agency (now Arunachal Pradesh).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q2)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-3",
    categoryId: "general",
    question: "Which initiative was launched by the Government of India to promote innovation and entrepreneurship?",
    answer: "Start-Up India",
    options: ["Make in India", "Start-Up India", "Digital India", "Skill India"],
    explanation: "The Start-Up India initiative was inaugurated on January 16, 2016, specifically to build a strong ecosystem for nurturing innovation and startups in the country.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q3)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-4",
    categoryId: "general",
    question: "Which of the following are part of the Goods and Services Tax (GST) Council of India?\nI. Cabinet Ministers of Union Government\nII. Union Finance Minister\nIII. Union Minister of State in charge of Revenue or Finance\nIV. The Minister in charge of Finance for each state or any minister nominated by the state government",
    answer: "II, III, and IV",
    options: [
      "I, II, and III",
      "I, II, and IV",
      "II, III, and IV",
      "I, II, III and IV"
    ],
    explanation: "Under Article 279A, the GST Council comprises the Union Finance Minister (Chairperson), Union Minister of State in charge of Revenue/Finance, and the Minister in charge of Finance/Taxation nominated by each State Government. Union Cabinet Ministers as a whole are not members.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q4)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-5",
    categoryId: "general",
    question: "Which educational institute is at the core of the initiative e-Yantra—incorporation of robotics into engineering education?",
    answer: "IIT Bombay",
    options: ["IIT Madras", "IIT Bombay", "IIT Hyderabad", "IIT Kanpur"],
    explanation: "e-Yantra is a flagship robotics outreach project sponsored by MoE under NMEICT, conceptualized and anchored at IIT Bombay.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q5)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-6",
    categoryId: "general",
    question: "Which of the following is the literal meaning of the name \"Kashmir\"?",
    answer: "Land desiccated from water",
    options: [
      "Valley of Flowers",
      "Land of Lakes",
      "Land of Kashyap Rishi",
      "Land desiccated from water"
    ],
    explanation: "In Sanskrit, 'Ka' means water and 'shimir' means to desiccate or desiccated. Thus, Kashmir etymologically translates to 'land desiccated from water', aligning with the geological lore of Satisar lake drainage.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q6)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-7",
    categoryId: "general",
    question: "Which of the following provisions was repealed by the Jammu & Kashmir Reorganisation Act, 2019?",
    answer: "All of the above",
    options: [
      "Article 370",
      "Article 35A",
      "Jammu & Kashmir Constitution",
      "All of the above"
    ],
    explanation: "The August 2019 parliamentary actions and the J&K Reorganisation Act superseded Article 370, revoked Article 35A, and rendered the separate Constitution of Jammu and Kashmir null and void.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q7)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-8",
    categoryId: "general",
    question: "In the present Jammu and Kashmir Legislative Assembly, how many members can be nominated by the Lieutenant Governor?",
    answer: "5",
    options: ["There is no such provision", "3", "4", "5"],
    explanation: "Under the J&K Reorganisation (Amendment) Act, the Lieutenant Governor can nominate 5 members: 2 women, 2 from the Kashmiri migrant community (one of whom must be a woman), and 1 representing displaced persons from PoJK.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q8)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-9",
    categoryId: "general",
    question: "Consider the following statement:\nAssertion (A): India is the third-largest country in the world by area, covering 3,287,469 square kilometres.\nReason (R): India is bordered by five countries, including Bangladesh, Bhutan, and Nepal.\nWhich of the following is correct?",
    answer: "Both Assertion (A) and Reason (R) are incorrect",
    options: [
      "Both Assertion (A) and Reason (R) are correct, and Reason (R) correctly explains Assertion (A)",
      "Both Assertion (A) and Reason (R) are correct, but Reason (R) does not correctly explain Assertion (A)",
      "Assertion (A) is correct, but Reason (R) is incorrect",
      "Both Assertion (A) and Reason (R) are incorrect"
    ],
    explanation: "Assertion (A) is false because India is the 7th largest country by area (not 3rd). Reason (R) is false because India shares land borders with 7 countries: Bangladesh, China, Pakistan, Nepal, Myanmar, Bhutan, and Afghanistan.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q9)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-10",
    categoryId: "general",
    question: "The 1952 Agreement between Jammu and Kashmir and India was signed by:",
    answer: "Jawaharlal Nehru and Sheikh Abdullah",
    options: [
      "Jawaharlal Nehru and Sheikh Abdullah",
      "Sheikh Abdullah and Ghulam Mohammad Sadiq",
      "Maharaja Hari Singh and Jawaharlal Nehru",
      "Jawaharlal Nehru and Bakshi Ghulam Mohammad"
    ],
    explanation: "The Delhi Agreement of 1952 was concluded between Prime Minister Jawaharlal Nehru and Prime Minister of J&K Sheikh Abdullah, delineating the constitutional relationship between India and J&K.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q10)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-11",
    categoryId: "general",
    question: "Who initially proposed the idea of implementing a nationwide GST in India, and in which year?",
    answer: "The Kelkar Task Force on Indirect Taxes in 2000",
    options: [
      "The Empowered Committee of State Finance Ministers in 2009",
      "The Kelkar Task Force on Indirect Taxes in 2000",
      "The Central Government in 2011",
      "The Parliament through the Constitution (122nd Amendment) Bill, 2014"
    ],
    explanation: "The concept of a national Goods and Services Tax (GST) in India was first mooted and recommended by the Kelkar Task Force on implementation of the FRBM Act in the early 2000s under Atal Bihari Vajpayee's government.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q11)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-12",
    categoryId: "general",
    question: "Match Column - X with Column - Y and select the correct answer using the codes given below the list:\nColumn - X (Leader):\n1. Lala Lajpat Rai\n2. Chittaranjan Das\n3. Annie Besant\nColumn - Y (Role in Freedom Movement):\nI. Proponent of home rule movement in India\nII. Leader of the Punjab National Movement\nIII. Founder-leader of the Swaraj party",
    answer: "1-II, 2-III, 3-I",
    options: [
      "1-III, 2-I, 3-II",
      "1-I, 2-II, 3-III",
      "1-III, 2-II, 3-I",
      "1-II, 2-III, 3-I"
    ],
    explanation: "Lala Lajpat Rai was the preeminent leader in Punjab (Punjab Kesari, II); C.R. Das co-founded the Congress-Khilafat Swaraj Party with Motilal Nehru (III); Annie Besant spearheaded the Home Rule Movement in India (I).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q12)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-13",
    categoryId: "general",
    question: "Article 35A of the Indian Constitution, which was applicable only to Jammu and Kashmir, was concerned with:",
    answer: "Prohibition of land sale to non-residents",
    options: [
      "Prohibition of land sale to non-residents",
      "Protection of religious rights",
      "The rights of Indian citizens in Jammu and Kashmir",
      "Representation of Jammu and Kashmir in Parliament"
    ],
    explanation: "Article 35A empowered the J&K State legislature to define 'permanent residents' and confer special privileges such as restricting immovable property ownership and public sector employment exclusively to them.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q13)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-14",
    categoryId: "general",
    question: "Consider the following statements:\nAssertion (A): Ganga Plain is the most densely populated part of India.\nReason (R): Ganga is the least harnessed river in India.\nChoose the correct statement:",
    answer: "A is true, but R is false",
    options: [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    explanation: "The fertile Ganga plains are indeed the most densely populated tract of India (A is true). Reason (R) is false because the Ganga basin is among the most extensively harnessed and utilized river systems in India for irrigation and canal networks.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q14)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-15",
    categoryId: "general",
    question: "Match Column - X with Column Y and select the correct answer using the codes given below the list:\nColumn - X (Agriculture products):\n1. Gram\n2. Cardamom\n3. Pineapple\nColumn - Y (Foremost producer):\nI. Madhya Pradesh\nII. West Bengal\nIII. Kerala",
    answer: "1-I, 2-III, 3-II",
    options: [
      "1-III, 2-I, 3-II",
      "1-I, 2-III, 3-II",
      "1-III, 2-II, 3-I",
      "1-II, 2-III, 3-I"
    ],
    explanation: "Madhya Pradesh is the largest producer of Gram (pulses, I); Kerala is renowned as the primary producer of small cardamom (III); West Bengal is a foremost producer of pineapple (II).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q15)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-16",
    categoryId: "general",
    question: "Consider the following statements:\nAssertion (A): The Jammu & Kashmir Reorganisation Act, 2019, fully integrated Jammu & Kashmir into the Indian Union.\nReason (R): The Act dissolved the special status granted to Jammu & Kashmir and brought it under the provisions of the Indian Constitution.\nChoose the correct statement:",
    answer: "Both A and R are true, and R is the correct explanation of A.",
    options: [
      "Both A and R are true, and R is the correct explanation of A.",
      "Both A and R are true, but R is not the correct explanation of A.",
      "A is true, but R is false.",
      "A is false, but R is true."
    ],
    explanation: "By repealing the separate constitutional framework and revoking Article 370's special status, the 2019 Act extended the entire Indian Constitution to J&K, thus fully integrating it.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q16)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-17",
    categoryId: "general",
    question: "Match Column - X with Column - Y and select the correct answer using the codes given below the list:\nColumn - X (Revolutions):\n1. Golden Revolution\n2. Silver Fibre Revolution\n3. Golden Fibre Revolution\nColumn - Y (Sector/Relation):\nI. Jute Production\nII. Cotton Production\nIII. Horticulture and Honey",
    answer: "1-III, 2-II, 3-I",
    options: [
      "1-III, 2-I, 3-II",
      "1-I, 2-III, 3-II",
      "1-III, 2-II, 3-I",
      "1-II, 2-III, 3-I"
    ],
    explanation: "Golden Revolution relates to Horticulture and Honey (III); Silver Fibre Revolution relates to Cotton (II); Golden Fibre Revolution relates to Jute (I).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q17)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-18",
    categoryId: "general",
    question: "The Ladakhi Buddhist community, which forms a significant portion of Ladakh's population, belongs to which category for reservation purposes in India?",
    answer: "Scheduled Tribes (ST)",
    options: [
      "Scheduled Tribes (ST)",
      "Scheduled Castes (SC)",
      "Other Backward Classes (OBC)",
      "General Category"
    ],
    explanation: "The native communities of Ladakh, including the Balti, Beda, Bot/Boto (Ladakhi Buddhists), Brokpa, Changpa, Garra, and Mon, are officially notified as Scheduled Tribes (ST) in India.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q18)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-19",
    categoryId: "general",
    question: "In which State/Union Territory is the Chushul Valley located?",
    answer: "Ladakh",
    options: [
      "Jammu and Kashmir",
      "Himachal Pradesh",
      "Ladakh",
      "Uttarakhand"
    ],
    explanation: "Chushul Valley and its historic airfield are located in eastern Ladakh near the Line of Actual Control (LAC), south of Pangong Tso.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q19)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-20",
    categoryId: "general",
    question: "Which is a traditional Kashmiri musical instrument, often used in the classical music of the region?",
    answer: "Santoor",
    options: ["Veena", "Santoor", "Guitar", "Shehnai"],
    explanation: "The Santoor (a 100-stringed hammered dulcimer, originally Shata Tantri Veena) is the central instrument in Kashmiri Sufiana Maqam music, popularized globally by Pandit Bhajan Sopori and Pandit Shivkumar Sharma.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q20)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-21",
    categoryId: "general",
    question: "Which important mountain pass in Ladakh has strategic significance and serves as a trade route connecting India to Central Asia?",
    answer: "Aghil Pass",
    options: ["Khardung La", "Zoji La", "Aghil Pass", "Nathula Pass"],
    explanation: "Aghil Pass in the Karakoram range links Ladakh with the Tarim Basin / Yarkand in Central Asia. Khardung La connects Leh to Nubra, and Nathula connects Sikkim to Tibet.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q21)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-22",
    categoryId: "general",
    question: "Which of the following is the fundamental principle of National Education Policy 2020?\nI. Promoting self-assessment (students actively evaluate their own learning progress and performance)\nII. Promoting multilingualism\nIII. Respecting diversity and the local context in all curriculum, pedagogy, and policy\nChoose the correct statement:",
    answer: "All the statements are correct",
    options: ["I and II", "II and III", "I and III", "All the statements are correct"],
    explanation: "NEP 2020 emphasizes continuous formative self-assessment, mother tongue / multilingual instruction, and full respect for diversity and local context in pedagogical design.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q22)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-23",
    categoryId: "general",
    question: "Who was primarily responsible for drafting Article 370 of the Indian Constitution?",
    answer: "N. Gopalaswami Ayyangar",
    options: [
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "N. Gopalaswami Ayyangar",
      "Dr. B.R. Ambedkar"
    ],
    explanation: "Dr. B.R. Ambedkar declined to draft the special provision for J&K; Prime Minister Nehru entrusted the drafting of Article 370 (originally Article 306A) to Sir N. Gopalaswami Ayyangar.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q23)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-24",
    categoryId: "general",
    question: "Who became the first woman Chief Minister of the State of Jammu and Kashmir?",
    answer: "Mehbooba Mufti",
    options: [
      "Mehbooba Mufti",
      "Sarojini Naidu",
      "Sushma Swaraj",
      "Rajkumari Amrit Kaur"
    ],
    explanation: "Mehbooba Mufti took oath on April 4, 2016, becoming the first woman Chief Minister of the State of Jammu and Kashmir.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q24)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-25",
    categoryId: "general",
    question: "The famous 'Hemis National Park,' located in Ladakh, is known for being home to which endangered animal?",
    answer: "Snow Leopard",
    options: [
      "Asiatic Cheetah",
      "Tibetan Antelope",
      "Snow Leopard",
      "Indian Tiger"
    ],
    explanation: "Hemis National Park in Ladakh is globally renowned as the 'Snow Leopard Capital of the World', harboring the highest density of snow leopards (Panthera uncia) in any protected area.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q25)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-26",
    categoryId: "general",
    question: "The Dokra printing method, a traditional form of metal casting, is most famous in which of the following states?",
    answer: "Odisha",
    options: ["Rajasthan", "Odisha", "Gujarat", "Tamil Nadu"],
    explanation: "Dhokra (or Dokra) non-ferrous lost-wax bell metal casting is an ancient craft practised by tribal metalsmiths in Odisha, West Bengal, Jharkhand, and Chhattisgarh.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q26)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-27",
    categoryId: "general",
    question: "In 2020, which major security incident occurred in Ladakh that drew international attention and increased tensions between India and China?",
    answer: "The Galwan Valley clash",
    options: [
      "The Doklam standoff",
      "The Galwan Valley clash",
      "The Siachen conflict",
      "Sumdorong Chu Valley Standoff"
    ],
    explanation: "On June 15, 2020, Indian and Chinese troops engaged in hand-to-hand combat in the Galwan Valley in eastern Ladakh, leading to the first combat casualties between the two sides in over four decades.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q27)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-28",
    categoryId: "general",
    question: "Which of the following is true about Ladakh after the Jammu and Kashmir Reorganisation Act, 2019?",
    answer: "Ladakh has no Legislative Assembly",
    options: [
      "Ladakh became a Union Territory with a Legislative Assembly",
      "Ladakh was merged with Jammu and Kashmir",
      "Ladakh has no Legislative Assembly",
      "Ladakh was given full statehood"
    ],
    explanation: "Under Section 3 of the J&K Reorganisation Act, 2019, Ladakh was constituted as a Union Territory without a Legislature (unlike J&K, which was constituted as a UT with a Legislative Assembly).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q28)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-29",
    categoryId: "general",
    question: "Which of the following statements is/are correct about Param Shivay?\nI. Param Shivay was the first supercomputer fully designed and assembled in India under the National Supercomputing Mission\nII. Param Shivay was developed by the Indian Space Research Organisation (ISRO)\nIII. Param Shivay is primarily used for commercial purposes\nIV. Param Shivay was installed at the Indian Institute of Technology (IIT) Delhi\nChoose the correct statement:",
    answer: "I only",
    options: ["I and IV", "I, II, and IV", "I only", "I and II"],
    explanation: "Statement I is correct: Param Shivay was the first supercomputer designed and built under NSM by C-DAC. It was installed at IIT BHU (Varanasi), not IIT Delhi, and built by C-DAC (not ISRO). Hence only I is correct.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q29)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-30",
    categoryId: "general",
    question: "The traditional festival of Ladakh, celebrated by both Buddhists and Muslims, is called:",
    answer: "Losar",
    options: ["Losar", "Hemis", "Eid", "Diwali"],
    explanation: "Losar marks the Tibetan/Ladakhi New Year and is traditionally celebrated enthusiastically across communal lines in Ladakh.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q30)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-31",
    categoryId: "general",
    question: "Match Column - X with Column - Y and select the correct answer using the codes given below the list:\nColumn - X (Padma Shri recipients):\n1. H.C. Verma\n2. Sudha Murthy\n3. Ratan Tata\nColumn - Y (Year):\nI. 2021\nII. 2000\nIII. 2006\nChoose the correct option:",
    answer: "1-I, 2-III, 3-II",
    options: [
      "1-III, 2-I, 3-II",
      "1-I, 2-III, 3-II",
      "1-III, 2-II, 3-I",
      "1-I, 2-II, 3-III"
    ],
    explanation: "Prof. H.C. Verma was conferred the Padma Shri in 2021 (I); Sudha Murty received the Padma Shri in 2006 (III); Ratan Tata was awarded the Padma Bhushan in 2000 (II).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q31)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-32",
    categoryId: "general",
    question: "What is the primary objective of the Kyoto Protocol?",
    answer: "To limit and reduce greenhouse gas emissions",
    options: [
      "To reduce ozone depletion by phasing out chlorofluorocarbons",
      "To limit and reduce greenhouse gas emissions",
      "To establish international guidelines for ocean conservation",
      "To promote sustainable agriculture in developing countries"
    ],
    explanation: "Adopted in 1997, the Kyoto Protocol is an international treaty that commits state parties to reduce greenhouse gas emissions, based on the scientific consensus that global warming is occurring.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q32)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-33",
    categoryId: "general",
    question: "Which of the following statements about the Chandrayaan-2 and Mangalyaan missions is/are correct?\nStatement 1: The Chandrayaan-2 mission was launched by ISRO in 2019, with an aim to explore the Moon's south pole\nStatement 2: The Mangalyaan mission was launched in 2017, and aimed at exploring Mars\nChoose the correct statement:",
    answer: "Only Statement 1 is correct",
    options: [
      "Only Statement 1 is correct",
      "Only Statement 2 is correct",
      "Both Statement 1 and Statement 2 are correct",
      "Neither Statement 1 nor Statement 2 is correct"
    ],
    explanation: "Statement 1 is correct (Chandrayaan-2 launched July 22, 2019). Statement 2 is incorrect because the Mars Orbiter Mission (Mangalyaan) was launched in November 2013 (not 2017).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q33)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-34",
    categoryId: "general",
    question: "Which year saw the mass exodus of Kashmiri Pandits from the Kashmir Valley?",
    answer: "1990",
    options: ["1989", "1990", "1995", "2000"],
    explanation: "The mass exodus of Kashmiri Pandits from the Kashmir Valley took place in early 1990, notably following January 19, 1990.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q34)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-35",
    categoryId: "general",
    question: "Which state and city in India are known for being major exporters of sports goods?",
    answer: "Punjab, Jalandhar",
    options: [
      "Maharashtra, Mumbai",
      "Punjab, Jalandhar",
      "Uttar Pradesh, Lucknow",
      "Tamil Nadu, Chennai"
    ],
    explanation: "Jalandhar in Punjab (along with Meerut in UP) is the epicenter of India's sports goods manufacturing industry, exporting equipment worldwide.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q35)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-36",
    categoryId: "general",
    question: "Consider the following National missions that come under the National Action Plan for Climate Change (NAPCC)?\nI. National Mission for Enhanced Energy Efficiency\nII. National Mission for Sustainable Agriculture\nChoose the most appropriate answer from the options given below:",
    answer: "Both I and II",
    options: ["Both I and II", "I only", "II only", "Neither I nor II"],
    explanation: "India's NAPCC comprises eight core national missions, which include both the National Mission for Enhanced Energy Efficiency (NMEEE) and the National Mission for Sustainable Agriculture (NMSA).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q36)",
    difficulty: "intermediate"
  },

  // --- Section 2: General English (Q37 - Q60) ---
  {
    id: "jkssb-deo-2025-37",
    categoryId: "grammar",
    question: "Choose the most appropriate auxiliary or modal verb from the given options:\nEmma is unwell, so she _____ stay in bed and drink plenty of water.",
    answer: "has to",
    options: ["can't", "need", "doesn't have to", "has to"],
    explanation: "'Has to' expresses necessity or medical obligation arising from being unwell.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q37)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-38",
    categoryId: "grammar",
    question: "Identify the type of phrase in the following sentence: \"Did you have fun watching the movie?\"",
    answer: "Gerund phrase",
    options: ["Adjective phrase", "Gerund phrase", "Adverb phrase", "None"],
    explanation: "'Watching the movie' starts with the gerund 'watching' and functions as a gerund phrase modifying/completing the activity.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q38)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-39",
    categoryId: "grammar",
    question: "Select the most appropriate word to complete the sentence:\nI have nobody _____ I can confide in.",
    answer: "whom",
    options: ["whoever", "whose", "that", "whom"],
    explanation: "'Whom' is the objective case relative pronoun required as the prepositional object of 'confide in' (confide in whom).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q39)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-40",
    categoryId: "grammar",
    question: "Out of the given words, choose the misspelt one.",
    answer: "Mischievious",
    options: ["Deteriorate", "Mischievious", "Licentious", "Miscellaneous"],
    explanation: "The correct spelling is 'Mischievous' (three syllables: mis-chie-vous). 'Mischievious' with an extra 'i' is an erroneous misspelling.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q40)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-41",
    categoryId: "grammar",
    question: "Select the alternative that best expresses the same sentence in passive voice:\nSarita was writing a letter to her mother.",
    answer: "A letter was being written by Sarita to her mother.",
    options: [
      "A letter was written by Sarita to her mother.",
      "A letter was being written by Sarita to her mother.",
      "A letter has been written to her mother by Sarita.",
      "A letter was written to her mother by Sarita."
    ],
    explanation: "Past continuous active ('was writing') changes to 'was/were being + past participle' ('was being written').",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q41)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-42",
    categoryId: "grammar",
    question: "Select the alternative that best expresses the same sentence in passive voice:\nMy brother promised me a present.",
    answer: "I was promised a present by my brother.",
    options: [
      "I was promised a present by my brother.",
      "I was promised by my brother a present.",
      "A present was promised from my brother to me.",
      "I had been promised a present by my brother."
    ],
    explanation: "With ditransitive verbs, taking the indirect object 'me' as subject produces the natural passive: 'I was promised a present by my brother.'",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q42)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-43",
    categoryId: "grammar",
    question: "Select the alternative that best expresses the same sentence in passive voice:\nThe teacher explained the lesson to the students.",
    answer: "The lesson was explained to the students by the teacher.",
    options: [
      "The lesson is explained to the students by the teacher.",
      "The students were being explained the lesson by the teacher.",
      "The lesson was explained to the students by the teacher.",
      "The students explained the lesson to the teacher."
    ],
    explanation: "Simple past active 'explained' converts into 'was explained' with 'the lesson' as subject.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q43)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-44",
    categoryId: "grammar",
    question: "Out of the given words, choose the mis-spelt one.",
    answer: "Immitate",
    options: ["Impressive", "Immaculate", "Imminent", "Immitate"],
    explanation: "The correct spelling is 'Imitate' (with a single 'm').",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q44)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-45",
    categoryId: "grammar",
    question: "Identify the part of the sentence that contains an error:\nThis room would appear much more appealing (A) / if you put a furniture (B) / in that corner. (C) / No error (D)",
    answer: "if you put a furniture",
    options: [
      "This room would appear much more appealing.",
      "if you put a furniture",
      "in that corner.",
      "No error"
    ],
    explanation: "'Furniture' is an uncountable noun and cannot be preceded by the indefinite article 'a'. One should say 'a piece of furniture' or simply 'some furniture'.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q45)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-46",
    categoryId: "grammar",
    question: "Fill in the blanks with suitable options:\nOn _____ cold December evening, _____ doorbell wouldn't stop ringing at my house.",
    answer: "a, the",
    options: ["a, the", "the, the", "no article, no article", "no article, the"],
    explanation: "'On a cold December evening' refers to an unspecified evening, and 'the doorbell' refers to the specific doorbell of the house.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q46)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-47",
    categoryId: "grammar",
    question: "In the sentence \"It was she who arrived first in the meeting,\" identify the part of speech of the word 'who':",
    answer: "Pronoun",
    options: ["Verb", "Pronoun", "Preposition", "Adjective"],
    explanation: "'Who' serves as a relative pronoun introducing the relative clause 'who arrived first in the meeting'.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q47)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-48",
    categoryId: "grammar",
    question: "His ambition _____ a successful entrepreneur.",
    answer: "is to become",
    options: ["is becoming", "is become", "is to becoming", "is to become"],
    explanation: "The infinitive 'to become' after the copular verb 'is' correctly acts as a subject complement expressing purpose or ambition.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q48)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-49",
    categoryId: "grammar",
    question: "Determine the function of the highlighted dependent clause: The medicines [which the doctor prescribed] were very expensive.",
    answer: "Adjective clause",
    options: ["Noun clause", "Adverb clause", "Adjective clause", "None"],
    explanation: "The clause 'which the doctor prescribed' qualifies the noun 'medicines', functioning as an adjective (relative) clause.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q49)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-50",
    categoryId: "grammar",
    question: "According to the passage on speech: Speech can become a curse because it can:",
    answer: "create misunderstanding",
    options: [
      "hurt others",
      "create misunderstanding",
      "result in negligence",
      "reveal our intentions"
    ],
    explanation: "The passage notes: 'Speech is a great blessing but it can also be a great curse... if we use it carelessly, make our attitude completely misunderstood.'",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q50)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-51",
    categoryId: "grammar",
    question: "A 'slip of the tongue' refers to something said:",
    answer: "without giving proper thought",
    options: [
      "without giving proper thought",
      "intentionally",
      "poor vocabulary",
      "knowingly"
    ],
    explanation: "A slip of the tongue means an inadvertent, unintended remark made carelessly or without proper forethought.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q51)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-52",
    categoryId: "grammar",
    question: "The most effective way to gain a friend is to avoid _____ in speech.",
    answer: "ambiguity",
    options: ["diffuseness", "attitude", "ambiguity", "Irony"],
    explanation: "The passage states: 'the use of an ambiguous word, and so on, may create an enemy where we had hoped to win a friend.' Hence, avoiding ambiguity is key.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q52)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-53",
    categoryId: "grammar",
    question: "When speaking to an uneducated person, we should use:",
    answer: "his vocabulary",
    options: [
      "polite language",
      "complicated words",
      "ordinary speech",
      "his vocabulary"
    ],
    explanation: "The passage highlights: 'different classes of people use different vocabularies... Thus speech is not a gift to use lightly without thought... only a fool will express himself alike to all kinds and conditions of men.' Adapting to his vocabulary prevents being seen as pompous.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q53)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-54",
    categoryId: "grammar",
    question: "Using the same style of language with everyone would make one sound:",
    answer: "foolish",
    options: ["flat", "democratic", "tedious", "foolish"],
    explanation: "The author explicitly concludes: 'Only a fool will express himself alike to all kinds and conditions of men.'",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q54)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-55",
    categoryId: "grammar",
    question: "Out of the four alternatives suggested, select the one which best expresses the same sentence in Passive voice:\nThe teacher praised the student.",
    answer: "The student was praised by the teacher.",
    options: [
      "The student was praised by the teacher.",
      "The student praises the teacher.",
      "The teacher praises the student.",
      "Did the teacher praise the student?"
    ],
    explanation: "Active 'praised' (simple past) converts to passive 'was praised' by the teacher.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q55)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-56",
    categoryId: "grammar",
    question: "Select the most appropriate meaning of the given idiom: \"Weal and woe\"",
    answer: "Prosperity and misfortune",
    options: [
      "Well-wishers and critics",
      "High and low level",
      "Safe and dangerous place",
      "Prosperity and misfortune"
    ],
    explanation: "'Weal' denotes prosperity/good fortune and 'woe' denotes grief/adversity. Together, 'weal and woe' means the joys and sorrows of life.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q56)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-57",
    categoryId: "grammar",
    question: "Choose the most suitable \"one word\" for the given expression: \"A person who believes in no god\"",
    answer: "Atheist",
    options: ["Agnostic", "Atheist", "Theist", "Monotheist"],
    explanation: "An atheist disbelieves or lacks belief in the existence of God. (An agnostic believes nothing can be known of God).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q57)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-58",
    categoryId: "grammar",
    question: "Choose the correct synonym of the word: TRADUCE",
    answer: "Betray",
    options: ["Betray", "Build", "Pressure", "Stiffen"],
    explanation: "To traduce means to speak maliciously and falsely of, defame, or betray trust.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q58)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-59",
    categoryId: "grammar",
    question: "Choose the correct antonym of the given word: DILEMMA",
    answer: "Agreement",
    options: ["Quandary", "Perplexity", "Agreement", "Predicament"],
    explanation: "Dilemma, quandary, and predicament signify difficulty in choice or state of perplexity. Its contextual opposite is certainty, resolution, or agreement.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q59)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-60",
    categoryId: "grammar",
    question: "Fill in the blanks with suitable options:\nShe was absent _____ school yesterday.",
    answer: "from",
    options: ["from", "to", "in", "for"],
    explanation: "The adjective 'absent' regularly takes the preposition 'from' (absent from school).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q60)",
    difficulty: "beginner"
  },

  // --- Section 3: Mental Ability, Reasoning & General Math (Q61 - Q84) ---
  {
    id: "jkssb-deo-2025-61",
    categoryId: "math",
    question: "Choose the correct alternative that will continue the same pattern and fill in the blank space:\n3, 8, 23, 68, (.....)",
    answer: "203",
    options: ["181", "198", "203", "211"],
    explanation: "Pattern: (previous number * 3) - 1. 3*3 - 1 = 8; 8*3 - 1 = 23; 23*3 - 1 = 68; 68*3 - 1 = 203.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q61)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-62",
    categoryId: "math",
    question: "Choose the missing term out of the given alternatives: BEH, KNQ, TWZ, ?",
    answer: "CFI",
    options: ["LJL", "BDF", "ADH", "CFI"],
    explanation: "Each corresponding letter adds 9 positions: B(2)+9 = K(11), K+9 = T(20), T+9 = 29 -> C(3). E(5)+9 = N(14)+9 = W(23)+9 = F(6). H(8)+9 = Q(17)+9 = Z(26)+9 = I(9). Result is CFI.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q62)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-63",
    categoryId: "math",
    question: "Gunjan runs 5/2 times as fast as Babli. In a race, if Gunjan gives a lead of 30 m to Babli, find the distance from the starting point where both of them will meet.",
    answer: "50 m",
    options: ["42m", "48 m", "50 m", "54m"],
    explanation: "Let Babli's speed be 2s, so Gunjan's speed is 5s. Gunjan must gain 30 m at relative speed (5s - 2s) = 3s. Time t = 30 / 3s = 10/s. Distance covered by Gunjan from start = 5s * (10/s) = 50 m.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q63)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-64",
    categoryId: "math",
    question: "A statement is given, followed by two conclusions. Choose the correct option:\nStatements: All organized individuals make time for rest. Despite her hectic schedule, Manisha manages to find time to rest.\nConclusions:\nI. Manisha is an organised person.\nII. Manisha is an industrious person.\nChoose the correct statement:",
    answer: "Only conclusion I follows",
    options: [
      "Either I or II follows",
      "Both I and II follow",
      "Only conclusion I follows",
      "Only conclusion II follows"
    ],
    explanation: "Since finding time to rest despite a hectic schedule is the defining attribute attributed to organized persons in the premise, Conclusion I directly follows.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q64)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-65",
    categoryId: "math",
    question: "The logic problem provides three true statements: Fact 1, Fact 2, and Fact 3.\nFact 1: Islands are entirely surrounded by water.\nFact 2: Maui is an island.\nFact 3: Maui was created by volcanic activity.\nBased on these facts, determine which of the following statements must also be true:\nStatement-I: Maui is entirely surrounded by water.\nStatement-II: Every island is created by volcanic activity.\nStatement-III: Every volcano exists on an island.\nWhich of the above statement is/are correct?",
    answer: "Only Statement I is true.",
    options: [
      "Only Statement I is true.",
      "Statements I and II are true.",
      "Only Statement II is true.",
      "All the statements are true."
    ],
    explanation: "Since Maui is an island (Fact 2) and all islands are entirely surrounded by water (Fact 1), Statement I must be true. Facts 2 & 3 do not imply that all islands are volcanic or that all volcanoes are islands.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q65)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-66",
    categoryId: "math",
    question: "If in a certain code, 'DEVELOPMENT' is written as 'GHYHORSPHQW', how is 'COUNTRY' written in that code?",
    answer: "FRXQWUB",
    options: ["FRXSWVB", "FRXQWUB", "GRXSWVB", "GRXQWUB"],
    explanation: "Each letter is shifted forward by 3: C(+3)=F, O(+3)=R, U(+3)=X, N(+3)=Q, T(+3)=W, R(+3)=U, Y(+3)=B. Hence FRXQWUB.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q66)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-67",
    categoryId: "math",
    question: "Complete the following analogy:\n3 : 12 :: 5 : ?",
    answer: "30",
    options: ["16", "29", "30", "40"],
    explanation: "Rule: n -> n^2 + n (or n * (n + 1)). For 3: 3^2 + 3 = 12. For 5: 5^2 + 5 = 30.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q67)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-68",
    categoryId: "math",
    question: "Rashmi, Sheela, Madhu and Rita are sitting along with a rectangular table. Rashmi is to the right of Sheela. Madhu is to the left of Rita. Which of the person given in the option is sitting opposite to each other?",
    answer: "Rashmi - Rita",
    options: [
      "Madhu - Rashmi",
      "Rashmi - Sheela",
      "Sheela - Rita",
      "Rashmi - Rita"
    ],
    explanation: "When seated around a rectangular table facing inwards: Sheela has Rashmi to her right. Across from them, Madhu is to the left of Rita. Thus Rashmi sits directly opposite Rita.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q68)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-69",
    categoryId: "math",
    question: "A four-person crew from Classic Colors is painting Mr. Smith's house. Alex is painting the front of the house. Ryan is in the alley behind the house painting the back. Ethan is painting the window frames on the north side, and Liam is on the south. If Alex switches places with Ethan, and Ethan then switches places with Liam, where is Liam?",
    answer: "in front of the house",
    options: [
      "on the north side of the house",
      "in the alley behind the house",
      "on the south side of the house",
      "in front of the house"
    ],
    explanation: "Initially: Alex = Front, Ryan = Back, Ethan = North, Liam = South. Alex switches with Ethan: Ethan is at Front, Alex at North. Ethan then switches with Liam: Liam moves to Front, Ethan to South. Liam is now in front of the house.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q69)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-70",
    categoryId: "math",
    question: "Birds is related to Aviary in the same way as Bees is related to............?",
    answer: "Apiary",
    options: ["Apiary", "Aquarium", "Sanctuary", "Brewery"],
    explanation: "An aviary is an enclosure for keeping birds; an apiary is a place where beehives of honey bees are kept.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q70)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-71",
    categoryId: "math",
    question: "Select the Venn diagram that best represents the relationship between the three given items: Moon, Sun, Stars",
    answer: "Concentric Sun within Stars, and separate Moon circle (Option B)",
    options: [
      "Three completely separate disjoint circles (Option A)",
      "Concentric Sun within Stars, and separate Moon circle (Option B)",
      "Three concentric circles inside each other (Option C)",
      "Three overlapping intersecting circles (Option D)"
    ],
    explanation: "The Sun is an individual star (so the Sun circle lies wholly inside the Stars circle). The Moon is a planetary satellite, entirely separate from stars.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q71)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-72",
    categoryId: "math",
    question: "Among the five figures labelled (I), (II), (III), (IV), and (V), four share a common characteristic, while one stands out as different. Identify the figure that does not belong to the group.",
    answer: "III",
    options: ["V", "IV", "III", "II"],
    explanation: "In figures I, II, IV, and V, the symbols preserve an exact cyclic corner rotation, whereas in figure III the placement of the cross and circle violates the rotational rule.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q72)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-73",
    categoryId: "math",
    question: "Establishing a Power of Attorney occurs when a legal document is created that grants one person the authority to act on behalf of another. Which of the following situations best illustrates the concept of Establishing a Power of Attorney?",
    answer: "Emily's father is unable to visit the bank to deposit checks and withdraw money, so he has legally authorized Emily to handle these tasks for him.",
    options: [
      "Michael's mother is elderly, and Michael believes she is no longer capable of making decisions for herself.",
      "Encouraged by her son, Mrs. Harris opens a savings account at a local bank.",
      "Emily's father is unable to visit the bank to deposit checks and withdraw money, so he has legally authorized Emily to handle these tasks for him.",
      "Rachel is selling her car and hires an attorney to review the contract."
    ],
    explanation: "Power of Attorney requires formal legal authorization empowering an agent to act on the principal's behalf, as seen in Emily's legal authorization by her father.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q73)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-74",
    categoryId: "math",
    question: "If an event is scheduled for 3:00 PM on December 10th in Los Angeles, what is the corresponding time and date in Cape Town, South Africa, which is 10 hours ahead of Los Angeles?",
    answer: "1:00 AM, December 11th",
    options: [
      "1:00 AM, December 10th",
      "1:00 AM, December 11th",
      "5:00 AM, December 10th",
      "5:00 AM, December 11th"
    ],
    explanation: "3:00 PM (15:00) on Dec 10 + 10 hours = 25:00 -> 1:00 AM on the following day (December 11th).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q74)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-75",
    categoryId: "math",
    question: "If the centre code is a 6-digit number where the first two digits represent the country, the next two digits represent the state, and the last two digits represent the specific centre, what would the centre code \"IN2305\" signify?",
    answer: "India, State 23, Center 05",
    options: [
      "India, State 23, Center 05",
      "India, State 2, Center 305",
      "International, State 23, Center 05",
      "India, State 230, Center 5"
    ],
    explanation: "Two letters/digits per block: 'IN' = India (country), '23' = State 23 (state), '05' = Center 05 (centre).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q75)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-76",
    categoryId: "math",
    question: "What comes next in the series?\nz, X, t, N, f, ?",
    answer: "V",
    options: ["W", "w", "V", "v"],
    explanation: "Alphabet positions: z=26, X=24 (-2), t=20 (-4), N=14 (-6), f=6 (-8). Next step is 6 - 10 = -4, which wraps to 26 - 4 = 22 = letter V. The case alternates: lower, upper, lower, upper, lower -> uppercase V.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q76)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-77",
    categoryId: "math",
    question: "Amit is older than Manish but younger than Rahul. Manish is older than Sohan but younger than Rahul. Who is the oldest?",
    answer: "Rahul",
    options: ["Sohan", "Amit", "Manish", "Rahul"],
    explanation: "Rahul > Amit > Manish > Sohan. Thus, Rahul is strictly the oldest.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q77)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-78",
    categoryId: "math",
    question: "A matrix containing specific characters is provided. These characters follow a particular pattern, either row-wise or column-wise. Identify the pattern and select the missing character based on it:\nRow 1: 1 | 2 | 3\nRow 2: 13 | 11 | 7\nRow 3: 168 | 117 | ?",
    answer: "40",
    options: ["35", "40", "45", "50"],
    explanation: "Column-wise pattern: (Row 2)^2 - (Row 1)^2 = Row 3. Col 1: 13^2 - 1^2 = 169 - 1 = 168. Col 2: 11^2 - 2^2 = 121 - 4 = 117. Col 3: 7^2 - 3^2 = 49 - 9 = 40.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q78)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-79",
    categoryId: "math",
    question: "Among the five figures labelled (I), (II), (III), (IV), and (V), four share a common characteristic, while one stands out as different. Identify the figure that does not belong to the group.",
    answer: "II",
    options: ["IV", "III", "II", "I"],
    explanation: "Examining the clockwise numerical sequence across the 4 quadrant sectors, figure (II) has inverted polarity compared to the standard pattern shared by the other four.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q79)",
    difficulty: "advanced"
  },
  {
    id: "jkssb-deo-2025-80",
    categoryId: "math",
    question: "When the letters A, V, S, E, B, O, R, I, N, T, and O are arranged to form a meaningful word, what is the position of the letter T from the left in the newly formed word?",
    answer: "8",
    options: ["4", "5", "8", "9"],
    explanation: "The letters spell OBSERVATION (O-B-S-E-R-V-A-T-I-O-N). Counting from the left: 1:O, 2:B, 3:S, 4:E, 5:R, 6:V, 7:A, 8:T. The letter T is in the 8th position.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q80)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-81",
    categoryId: "math",
    question: "Choose the odd one out.",
    answer: "Lotus",
    options: ["Marigold", "Lily", "Rose", "Lotus"],
    explanation: "Lotus is an aquatic flower (grows in water and mud), whereas Marigold, Lily, and Rose are terrestrial plants that grow on land.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q81)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-82",
    categoryId: "math",
    question: "Read the paragraph carefully and determine the main point:\n\"It is widely acknowledged that there is an urgent need for proper distribution of food to ensure that everyone has enough to eat. Similarly, the distribution of medical care is equally critical. Medical resources, including both expertise and supplies, must be more effectively distributed worldwide so that people in developing countries have access to the healthcare they require.\"\nThis paragraph best supports the statement that:",
    answer: "A significant number of people in developing nations are not receiving adequate medical treatment.",
    options: [
      "The majority of doctors around the world are unwilling to dedicate their time and resources to helping the poor.",
      "Food production in developing countries has decreased in recent years.",
      "A significant number of people in developing nations are not receiving adequate medical treatment.",
      "The medical-supply sector needs to increase the production of its products."
    ],
    explanation: "The passage directly argues that because medical care is poorly distributed, people in developing countries currently lack needed access and healthcare.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q82)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-83",
    categoryId: "math",
    question: "If the day before yesterday was Wednesday, what will be the day after tomorrow?",
    answer: "Sunday",
    options: ["Monday", "Sunday", "Friday", "Saturday"],
    explanation: "Day before yesterday = Wednesday -> Yesterday = Thursday -> Today = Friday -> Tomorrow = Saturday -> Day after tomorrow = Sunday.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q83)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-84",
    categoryId: "math",
    question: "Which one of the following is not a leap year?",
    answer: "1618",
    options: ["800", "1200", "1618", "2004"],
    explanation: "A leap year must be divisible by 4 (and for century years, by 400). 1618 is not divisible by 4 (1618 / 4 = 404.5), so it is not a leap year.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q84)",
    difficulty: "beginner"
  },

  // --- Section 4: Quantitative Aptitude & Statistics (Q85 - Q108) ---
  {
    id: "jkssb-deo-2025-85",
    categoryId: "math",
    question: "The difference between two numbers is 1365. When the larger number is divided by the smaller one, the quotient is 6 and the remainder is 15. What is the value of the smaller number?",
    answer: "270",
    options: ["240", "250", "260", "270"],
    explanation: "Let the smaller number be S, and the larger number be L. L - S = 1365 => L = S + 1365. Also L = 6S + 15. Therefore, 6S + 15 = S + 1365 => 5S = 1350 => S = 270.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q85)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-86",
    categoryId: "math",
    question: "4.032 divided by 0.04 gives :",
    answer: "100.8",
    options: ["1.008", "10.08", "100.8", "None of these"],
    explanation: "4.032 / 0.04 = 403.2 / 4 = 100.8.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q86)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-87",
    categoryId: "math",
    question: "A watch is sold at a profit of 20%. If both the cost price and the selling price of the watch are decreased by Rs 100, the profit would be 10% more. The original cost price of the watch is:",
    answer: "Rs. 300",
    options: ["Rs. 250", "Rs. 300", "Rs. 450", "Rs. 500"],
    explanation: "Let CP = x. Original SP = 1.20x. New CP = x - 100, New SP = 1.20x - 100. New profit % = 20% + 10% = 30%. Thus 1.20x - 100 = 1.30(x - 100) = 1.30x - 130 => 0.10x = 30 => x = Rs 300.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q87)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-88",
    categoryId: "math",
    question: "In a parallelogram, which of the following is true?",
    answer: "The diagonals are unequal in length but bisect each other",
    options: [
      "The diagonals are equal in length",
      "The diagonals bisect each other at right angles",
      "The diagonals do not bisect each other",
      "The diagonals are unequal in length but bisect each other"
    ],
    explanation: "In a general parallelogram, the diagonals bisect each other, but they are not equal in length (unless it is a rectangle) and do not meet at right angles (unless it is a rhombus).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q88)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-89",
    categoryId: "math",
    question: "G is an active partner and H is an inactive partner in business. G puts in Rs. 5000 and H puts in Rs. 6000. G received 15% of the profit for managing the business and the rest is divided in proportion to their capitals. The amount received by G out of the total profit of Rs. 880 is:",
    answer: "Rs. 472",
    options: ["Rs. 472", "Rs. 486", "Rs. 500", "Rs. 512"],
    explanation: "Total profit = Rs 880. Management fee to G = 15% of 880 = Rs 132. Remaining profit = 880 - 132 = Rs 748. Capital ratio G:H = 5000:6000 = 5:6. G's profit share = (5/11) * 748 = Rs 340. Total G receives = 132 + 340 = Rs 472.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q89)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-90",
    categoryId: "math",
    question: "A train started from station C and proceeded towards station D at a speed of 48 km/hr. Forty-five minutes later another train started from station D and proceeded towards station C at 50 km/hr. If the distance between the two stations is 232 km, at what distance from station C will the trains meet?",
    answer: "132 km",
    options: ["108 km", "128 km", "132 km", "146 km"],
    explanation: "In 45 minutes (3/4 hr), train from C travels: 48 * 3/4 = 36 km. Remaining distance = 232 - 36 = 196 km. Combined relative speed = 48 + 50 = 98 km/hr. Time until meeting = 196 / 98 = 2 hours. Total distance from station C = 36 + (48 * 2) = 36 + 96 = 132 km.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q90)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-91",
    categoryId: "math",
    question: "A can contains a mixture of two liquids X and Y in the ratio 7 : 5. When 9 litres of the mixture are drawn off and the can is filled with 9 litres of Y, the ratio of X and Y becomes 7 : 9. How many litres of liquid X was contained by the can initially?",
    answer: "21",
    options: ["24", "15", "18", "21"],
    explanation: "Let initial X = 7k and Y = 5k. Quantity of X removed = 9 * (7/12) = 21/4 litres. Quantity of Y remaining = 5k - 9*(5/12) + 9 = 5k + 21/4. Ratio: (7k - 21/4) / (5k + 21/4) = 7/9 => 9(k - 3/4) = 5k + 21/4 => 4k = 12 => k = 3. Initial X = 7 * 3 = 21 litres.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q91)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-92",
    categoryId: "math",
    question: "If 6 men and 8 women can complete a task in 10 days, and 26 men and 48 women can finish it in 2 days, how long will it take for 15 men and 20 women to complete the same task?",
    answer: "4 days",
    options: ["4 days", "5 days", "6 days", "7 days"],
    explanation: "Total work = 10*(6m + 8w) = 60m + 80w. Also work = 2*(26m + 48w) = 52m + 96w. Equating: 60m + 80w = 52m + 96w => 8m = 16w => 1m = 2w. Total work in terms of women = 60(2w) + 80w = 200 women-days. For 15 men and 20 women: 15(2w) + 20w = 50 women. Days required = 200 / 50 = 4 days.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q92)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-93",
    categoryId: "math",
    question: "In a hotel, 80% had a vegetarian lunch, 10% had a non-vegetarian lunch and 15% had both types of lunch. If 96 people were present, how many did not eat either type of lunch?",
    answer: "24",
    options: ["18", "21", "24", "36"],
    explanation: "Percentage eating at least one type = %Veg + %Non-veg - %Both = 80% + 10% - 15% = 75%. Percentage eating neither = 100% - 75% = 25%. Number of people = 25% of 96 = 24.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q93)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-94",
    categoryId: "statistics",
    question: "The mean weight of 120 students in a class is 55 kg. The mean weight of boys is 60 kg and of girls is 40 kg. Therefore, the number of boys is:",
    answer: "90",
    options: ["80", "85", "90", "100"],
    explanation: "Let B be number of boys. 60*B + 40*(120 - B) = 120 * 55 = 6600. 20*B + 4800 = 6600 => 20*B = 1800 => B = 90.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q94)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-95",
    categoryId: "math",
    question: "X and Y are two alloys of gold and copper prepared by mixing metals in the ratio 7 : 2 and 7 : 11 respectively. If equal quantities of the alloys are melted to form a third alloy Z, then the ratio of gold and copper in alloy Z will be:",
    answer: "7 : 5",
    options: ["5 : 7", "13 : 14", "7 : 5", "14 : 13"],
    explanation: "Take 18 units of each alloy (LCM of 9 and 18). Alloy X (18 units, ratio 7:2) has 14 units gold and 4 units copper. Alloy Y (18 units, ratio 7:11) has 7 units gold and 11 units copper. In alloy Z: Total Gold = 14 + 7 = 21, Total Copper = 4 + 11 = 15. Ratio = 21 : 15 = 7 : 5.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q95)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-96",
    categoryId: "math",
    question: "How many perfect squares lie between 120 and 300?",
    answer: "7",
    options: ["5", "6", "7", "8"],
    explanation: "11^2 = 121, 12^2 = 144, 13^2 = 169, 14^2 = 196, 15^2 = 225, 16^2 = 256, 17^2 = 289. (18^2 = 324 > 300). The integers are from 11 to 17, giving 17 - 11 + 1 = 7 perfect squares.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q96)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-97",
    categoryId: "math",
    question: "Sonali borrowed Rs. 1200 at simple interest for a period equal to the rate of interest. At the end of the loan term, she paid Rs. 432 as interest. What was the rate of interest?",
    answer: "6",
    options: ["3.6", "4", "5.4", "6"],
    explanation: "SI = (P * R * T) / 100. Given T = R. 432 = (1200 * R^2) / 100 = 12 * R^2 => R^2 = 432 / 12 = 36 => R = 6%.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q97)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-98",
    categoryId: "math",
    question: "If the simple interest for 2 years is Rs. 1000 at 10% rate of interest. Find the compound interest for the same time.",
    answer: "1050",
    options: ["1020", "1025", "1050", "1100"],
    explanation: "SI = P * 0.10 * 2 = 0.20 P = 1000 => P = Rs 5000. CI for 2 years = P * [(1 + 0.10)^2 - 1] = 5000 * [1.21 - 1] = 5000 * 0.21 = Rs 1050.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q98)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-99",
    categoryId: "math",
    question: "If 60% of (p - q) = 20% of (p + q), then p : q is equal to?",
    answer: "2 : 1",
    options: ["2 : 3", "3 : 2", "2 : 1", "1 : 2"],
    explanation: "60(p - q) = 20(p + q) => 3(p - q) = p + q => 3p - 3q = p + q => 2p = 4q => p/q = 2/1.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q99)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-100",
    categoryId: "math",
    question: "A chord of length 12 cm is drawn in a circle of radius 10 cm. The distance of the chord from the centre of the circle is:",
    answer: "8 cm",
    options: ["12.5 cm", "12 cm", "8.5 cm", "8 cm"],
    explanation: "The perpendicular from the center bisects the chord into two 6 cm segments. In the right-angled triangle: d = sqrt(r^2 - (chord/2)^2) = sqrt(10^2 - 6^2) = sqrt(64) = 8 cm.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q100)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-101",
    categoryId: "math",
    question: "An observer 1.6 m tall is 20√3 m away from a tower. The angle of elevation from his eye to the top of the tower is 30°. The height of the tower is:",
    answer: "21.6 m",
    options: ["20.8 m", "21.6 m", "23.96 m", "24.52 m"],
    explanation: "tan(30°) = (h - 1.6) / (20√3) => 1/√3 = (h - 1.6) / (20√3) => h - 1.6 = 20 => h = 21.6 m.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q101)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-102",
    categoryId: "math",
    question: "A cylindrical can has a radius of 3 cm and a height of 8 cm. What is the total surface area of the can, including the top and bottom? (Take π=3.14)",
    answer: "207.24 square cm",
    options: [
      "207.24 square cm",
      "220.22 square cm",
      "208.36 square cm",
      "235.62 square cm"
    ],
    explanation: "Total Surface Area = 2πr(r + h) = 2 * 3.14 * 3 * (3 + 8) = 18.84 * 11 = 207.24 cm².",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q102)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-103",
    categoryId: "statistics",
    question: "A histogram represents the data distribution of the marks scored by 50 students in a test. The intervals (bins) and their respective frequencies are given below:\nInterval (marks) | Frequency\n0-10 | 5\n10-20 | 8\n20-30 | 12\n30-40 | 15\n40-50 | 10\nWhich interval contains the mode of the data?",
    answer: "30-40",
    options: ["0-10", "20-30", "30-40", "40-50"],
    explanation: "The mode of grouped frequency data lies in the modal class, which is the class interval having the highest frequency. Here, the highest frequency is 15 in interval 30-40.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q103)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-104",
    categoryId: "math",
    question: "If cos θ = 5/13 and θ is an acute angle, what is the value of sin θ?",
    answer: "12/13",
    options: ["12/13", "5/13", "12/5", "13/5"],
    explanation: "sin θ = √(1 - cos² θ) = √(1 - 25/169) = √(144/169) = 12/13.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q104)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-105",
    categoryId: "statistics",
    question: "Based on the GDP bar chart (Pakistan: Agriculture 40%, Services 20%, Manufacturing 20%, Exports 10%, Miscellaneous 10%): If Pakistan's total GDP is Rs. 10,000 crores, what portion of the GDP is contributed by the manufacturing sector?",
    answer: "Rs. 2000 crore",
    options: ["Rs.1000 crore", "Rs. 2000 crore", "Rs. 1800 crore", "Rs. 4000 crore"],
    explanation: "Manufacturing accounts for 20% of Pakistan's GDP. 20% of Rs. 10,000 crore = 0.20 * 10,000 = Rs. 2,000 crore.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q105)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-106",
    categoryId: "statistics",
    question: "Based on the GDP bar chart (India: Agriculture 40%, Services 20%, Manufacturing 10%, Exports 20%, Miscellaneous 10%): If India's total GDP is Rs. 30,000 crores, what is the contribution of Agriculture, Services, and Miscellaneous sectors combined?",
    answer: "Rs.21,000 crore",
    options: [
      "Rs.17,500 crore",
      "Rs.18,570 crore",
      "Rs.21,000 crore",
      "Rs.25,000 crore"
    ],
    explanation: "Combined percentage = Agriculture (40%) + Services (20%) + Miscellaneous (10%) = 70%. Total contribution = 70% of Rs. 30,000 crore = 0.70 * 30,000 = Rs. 21,000 crore.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q106)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-107",
    categoryId: "statistics",
    question: "Based on the GDP bar chart: If the total GDP is the same for both countries, what is the ratio of Pakistan's income through agriculture over India's income through exports and miscellaneous?",
    answer: "1.33",
    options: ["1.25", "1.33", "1.5", "2"],
    explanation: "Pakistan's income from Agriculture = 40%. India's income from Exports (20%) + Miscellaneous (10%) = 30%. Ratio = 40 / 30 = 4/3 ≈ 1.33.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q107)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-108",
    categoryId: "math",
    question: "A hemisphere has a radius of 10 cm. What is the volume of the hemisphere? (Take π=3.14)",
    answer: "2,093.3 cm³",
    options: ["1,047.2 cm³", "2,093.3 cm³", "3,141.6 cm³", "4,188.8 cm³"],
    explanation: "Volume of a hemisphere = (2/3)πr³ = (2/3) * 3.14 * 1000 = 6280 / 3 ≈ 2,093.33 cm³.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q108)",
    difficulty: "beginner"
  },

  // --- Section 5: Computer Science & IT (Q109 - Q120) ---
  {
    id: "jkssb-deo-2025-109",
    categoryId: "cs",
    question: "Which type of software can be easily modified and distributed by editing the program's source code?\nI. Shareware\nII. Freeware\nIII. Open source software\nIV. Utility software\nWhich of the above statements is/are correct?",
    answer: "III only",
    options: ["I, II, and III", "I, II, and IV", "III only", "II and III"],
    explanation: "Open source software explicitly provides public access to its source code, granting users rights to study, modify, and distribute altered versions. Freeware and shareware do not provide source code modification rights.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q109)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-110",
    categoryId: "cs",
    question: "The port that connects flat panel LCD monitors to the computer's high-end video graphic card is named as?",
    answer: "DVI port",
    options: ["Game port", "Modem port", "DVI port", "PS/2 port"],
    explanation: "DVI (Digital Visual Interface) was specifically developed to transmit uncompressed digital video to flat panel LCD displays and high-end graphics cards.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q110)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-111",
    categoryId: "cs",
    question: "Consider the following statements on 'firewall' used on computer systems:\nI. It controls and monitors the data traffic flow between inside and outside network\nII. It protects and secures the inside network from any outside network\nIII. It can be implemented in software or hardware or a combination of both.\nWhich of the above statements is/are correct?",
    answer: "I, II and III",
    options: ["II only", "II and III", "I and III", "I, II and III"],
    explanation: "All three statements are correct: Firewalls monitor incoming/outgoing traffic, block unauthorized network access, and can be hardware appliances, host software, or hybrid.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q111)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-112",
    categoryId: "cs",
    question: "What was the earlier name of BharatNet?",
    answer: "National Optic Fiber Network (NOFN)",
    options: [
      "National Optic Fiber Network (NOFN)",
      "Bharat Broadband Network (BBN)",
      "Indian Optical Fiber Network (IOFN)",
      "National Digital Connectivity Network (NDCN)"
    ],
    explanation: "The BharatNet project was initially launched in October 2011 as the National Optical Fibre Network (NOFN) before being rebranded to BharatNet in 2015.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q112)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-113",
    categoryId: "cs",
    question: "Consider the following statements:\nStatement (I): The long-term sustainability of e-governance projects depends on financial viability, especially if they are to be implemented in the Public-Private Partnership (PPP) mode.\nStatement (II): PPP models in e-governance often involve significant upfront investments by private partners, requiring a robust revenue model to ensure project continuity.\nWhich of the following statement is/are correct?",
    answer: "Both Statement (I) and Statement (II) are true and Statement (II) is the correct explanation of Statement (I)",
    options: [
      "Both Statement (I) and Statement (II) are true and Statement (II) is the correct explanation of Statement (I)",
      "Both Statement (I) and Statement (II) are true, but Statement (II) is not the correct explanation of Statement (I)",
      "Statement (I) is true, but Statement (II) is false",
      "Statement (I) is false, but Statement (II) is true"
    ],
    explanation: "Private entities investing capital upfront under PPP require dependable cost recovery and revenue streams, making financial viability the cornerstone of project sustainability.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q113)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-114",
    categoryId: "cs",
    question: "Consider the following statements regarding 'Mobile Seva':\nI. It aims to provide government services to people through mobile phones and tablets\nII. It enables a government department to integrate web and mobile-based services seamlessly.\nWhich of the above statements is/are correct?",
    answer: "Both I and II",
    options: ["Both I and II", "Neither I nor II", "I only", "II only"],
    explanation: "Mobile Seva (m-Governance initiative by MeitY) delivers public services via mobile channels (SMS, USSD, IVRS, apps) and facilitates seamless backend departmental integration.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q114)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-115",
    categoryId: "cs",
    question: "What is the main function of a compiler?",
    answer: "To convert high-level language into machine code",
    options: [
      "To execute code",
      "To convert high-level language into machine code",
      "To debug programs",
      "All of the above"
    ],
    explanation: "A compiler translates entire source code written in a high-level programming language into low-level target machine code or assembly code.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q115)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-116",
    categoryId: "cs",
    question: "Which of the following shortcut keys in MS PowerPoint is used to start a slideshow from the beginning?",
    answer: "F5",
    options: ["Ctrl + F5", "Shift + F5", "Alt+ F5", "F5"],
    explanation: "Pressing F5 starts the PowerPoint slideshow from the very first slide. (Shift + F5 starts the show from the current slide).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q116)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-117",
    categoryId: "cs",
    question: "The process of monitoring and capturing all data packets that are passing through the computer network is known as?",
    answer: "Sniffing",
    options: ["Sniffing", "Spoofing", "Back doors", "Interference"],
    explanation: "Packet sniffing (or packet analysis) is the technique of intercepting and inspecting data packets as they transit across a computer network.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q117)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-deo-2025-118",
    categoryId: "cs",
    question: "Match the following browser features with their correct descriptions:\nColumn - X:\n1. Incognito Mode\n2. Automatic File Compression\n3. Bookmarking\n4. Build in Antivirus protection\nColumn - Y:\nI. Saves favourite websites for easy access\nII. Browses without saving history or cookies\nIII. Managed by download managers, not browsers\nIV. Provided by antivirus software, not browsers\nChoose the Correct Option:",
    answer: "1-II, 2-III, 3-I, 4-IV",
    options: [
      "1-I, 2-II, 3-III, 4-IV",
      "1-II, 2-III, 3-I, 4-IV",
      "1-IV, 2-I, 3-II, 4-III",
      "1-II, 2-IV, 3-III, 4-I"
    ],
    explanation: "1 matches II (Incognito browses without history/cookies); 2 matches III (Compression handled externally); 3 matches I (Bookmarking stores favourite sites); 4 matches IV (Dedicated antivirus protection).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q118)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-119",
    categoryId: "cs",
    question: "Which of the following statements is correct regarding e-mail?",
    answer: "The email was invented in 1971 by Ray Tomlinson",
    options: [
      "The email was invented in 1971 by Ray Tomlinson",
      "All early email systems required the sender and recipient to be online simultaneously",
      "The term \"e-Mail\" stands for Electronic Messaging",
      "Email allows exchanging messages exclusively between users of the same computer"
    ],
    explanation: "Ray Tomlinson developed the first ARPANET networked person-to-person email system in 1971 and introduced the '@' symbol to separate username from host.",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q119)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-deo-2025-120",
    categoryId: "cs",
    question: "Match the following email protocols with their descriptions:\nColumn - X:\n1. POP3\n2. IMAP\n3. SMTP\nColumn - Y:\nI. Used for sending emails from a client to a server or between servers.\nII. Used for retrieving and synchronising emails across multiple devices\nIII. Used for downloading emails to a local device for offline access\nChoose the Correct Option:",
    answer: "1-III, 2-II, 3-I",
    options: [
      "1-III, 2-II, 3-I",
      "1-I, 2-II, 3-III",
      "1-III, 2-I, 3-II",
      "1-I, 2-III, 3-II"
    ],
    explanation: "POP3 downloads emails to a local client (III); IMAP keeps emails on the server synchronizing across multiple devices (II); SMTP sends emails between clients and servers (I).",
    tip: "JKSSB Data Entry Operator 2025 (Series A - Q120)",
    difficulty: "intermediate"
  }
];

export const JKSSB_DEO_GENERAL_QUESTIONS: Flashcard[] = JKSSB_DEO_2025_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'general'
);

export const JKSSB_DEO_ENGLISH_QUESTIONS: Flashcard[] = JKSSB_DEO_2025_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'grammar'
);

export const JKSSB_DEO_MATH_QUESTIONS: Flashcard[] = JKSSB_DEO_2025_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'math'
);

export const JKSSB_DEO_STATISTICS_QUESTIONS: Flashcard[] = JKSSB_DEO_2025_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'statistics'
);

export const JKSSB_DEO_CS_QUESTIONS: Flashcard[] = JKSSB_DEO_2025_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'cs'
);

