import { Flashcard } from '../../types';

/**
 * 150 Comprehensive Jammu & Kashmir History, Polity, Culture, Geography & Heritage MCQs
 * Transcribed from Jammu_and_kashmir_history PDF:
 * - Set 1 (Q1–Q50): Chronological + Statement-Based J&K History MCQs (Ancient, Medieval, Modern & Rapid UPSC-Level)
 * - Set 2 (Q51–Q100): Hard MCQs on J&K UT (History & Polity, Ancient & Medieval, Geography, Economy, Culture, Tourism & Mixed)
 * - Set 3 (Q101–Q150): Very Hard JKSSB / JKPSC MCQs (Assertion-Reason, Chronology, Match the Following, Statement Elimination & Traps)
 */
const RAW_JK_HISTORY_QUESTIONS: Omit<Flashcard, 'categoryId'>[] = [
  // ============================================================================
  // SET 1: ANCIENT, MEDIEVAL & MODERN J&K HISTORY (Chronological + Statement Based)
  // ============================================================================
  {
    id: 'jkh-s1-1',
    question:
      'Consider the following statements regarding ancient Kashmir: (1) Kashmir was originally a lake known as Satisar. (2) Sage Kashyapa is associated with draining the lake. (3) This tradition is mentioned in Nilamata Purana. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Ancient tradition states that Kashmir Valley was originally a vast lake called Satisar, drained by Sage Kashyapa; this account is recorded in the Nilamata Purana.',
    tip: 'Satisar + Sage Kashyapa + Nilamata Purana = All three statements are correct.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-2',
    question:
      'Consider the following statements regarding the Nilamata Purana: (1) It is an important source for ancient Kashmir history. (2) It describes religious customs of Kashmir. (3) It was written by Kalhana. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Nilamata Purana is an ancient Sanskrit text detailing the sacred places, legends, and religious customs of Kashmir. Kalhana wrote Rajatarangini, not Nilamata Purana.',
    tip: 'Kalhana authored Rajatarangini (12th century), not Nilamata Purana.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-3',
    question:
      'Consider the following statements about Mauryan rule in Kashmir: (1) Ashoka introduced Buddhism in Kashmir. (2) Ashoka founded Srinagar (Srinagari). (3) Ashoka belonged to the Kushan dynasty. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Emperor Ashoka belonged to the Mauryan dynasty (not Kushan). He introduced Buddhism to Kashmir and founded the ancient city of Srinagari (Srinagar).',
    tip: 'Ashoka = Mauryan ruler who founded Srinagari.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-4',
    question:
      'Consider the following statements about Emperor Kanishka: (1) He ruled during the Kushan period. (2) The Fourth Buddhist Council is associated with him. (3) He established Kanishkapura. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Kushan Emperor Kanishka convened the Fourth Buddhist Council at Kundalvana in Kashmir and founded the town of Kanishkapura (modern Kanispora in Baramulla).',
    tip: 'Kanishka = Kushan dynasty + 4th Buddhist Council (Kundalvana) + Kanishkapura.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-5',
    question:
      'Consider the following statements regarding Kashmir Shaivism: (1) It flourished in ancient Kashmir. (2) Abhinavagupta was a major philosopher. (3) It is a branch of Vaishnavism. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Kashmir Shaivism (Trika philosophy) is a non-dualistic Shaiva philosophical tradition (not Vaishnavism), with Acharya Abhinavagupta as its greatest exponent.',
    tip: 'Kashmir Shaivism = Trika Shaiva philosophy; Abhinavagupta wrote Tantraloka.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-6',
    question:
      'Consider the following statements about Kalhana: (1) He wrote Rajatarangini. (2) Rajatarangini is written in Sanskrit. (3) Rajatarangini is a chronological history of Kashmir rulers. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Kalhana composed the Rajatarangini ("River of Kings") in Sanskrit verse between 1148 and 1150 CE, divided into 8 Tarangas chronicling Kashmir’s rulers chronologically.',
    tip: 'Rajatarangini = Kalhana, Sanskrit, 8 Tarangas.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-7',
    question:
      'Consider the following statements about Lalitaditya Muktapida: (1) He belonged to the Karkota dynasty. (2) He built the Martand Sun Temple. (3) He expanded his kingdom widely. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Lalitaditya Muktapida (8th century CE) was the most illustrious ruler of the Karkota dynasty, famed for extensive conquests and constructing the Martand Sun Temple and Parihaspora.',
    tip: 'Lalitaditya = Karkota dynasty + Martand Sun Temple.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-8',
    question:
      'Consider the following statements: (1) Avantivarman founded the Utpala dynasty. (2) He built the Avantipur temples. (3) Suyya was his engineer associated with flood control. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'King Avantivarman (855–883 CE) founded the Utpala dynasty, built the Avantiswami and Avantisvara temples at Avantipora, and patronized the hydraulic engineer Suyya.',
    tip: 'Avantivarman = Utpala dynasty + Avantipora + Engineer Suyya.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-9',
    question:
      'Suyya in ancient Kashmir history is known for: (1) River engineering works on the Jhelum. (2) Land reclamation in Kashmir. (3) Serving under King Avantivarman. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Suyya dredged the Jhelum (Vitasta) river near Baramulla, diverted its course to prevent recurring floods, reclaimed fertile agricultural land, and founded Suyyapur (Sopore).',
    tip: 'Suyya = Flood control on Jhelum + founded Sopore (Suyyapur).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-10',
    question:
      'Consider the following statements regarding Queen Didda: (1) She ruled Kashmir in the 10th century. (2) She exercised strong centralized power. (3) She paved the way for the Lohara dynasty. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Queen Didda ruled Kashmir first as regent and then as monarch (980–1003 CE). A princess of Lohara, she passed the throne to her nephew Sangramaraja, founding the Lohara dynasty.',
    tip: 'Queen Didda (980–1003 CE) transitioned Kashmir to the Lohara dynasty.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-11',
    question:
      'Consider the following statements about Shah Mir: (1) He founded the first Muslim dynasty in Kashmir. (2) He came to Kashmir from the Swat region. (3) His rule began in 1339 CE. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Shah Mir arrived in Kashmir from Swat during the reign of Suhadeva and established the Shah Mir dynasty in 1339 CE under the title Sultan Shams-ud-Din.',
    tip: 'Shah Mir = 1339 CE, Sultan Shams-ud-Din, first Sultanate dynasty of Kashmir.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-12',
    question:
      'Consider the following statements about Sultan Sikandar: (1) He was also called Sikandar Butshikan. (2) He is associated with temple destruction. (3) He encouraged Sanskrit scholarship. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Sultan Sikandar (1389–1413 CE) was known as Sikandar Butshikan (Iconoclast) for his orthodox policies and destruction of temples. It was his son Zain-ul-Abidin who revived Sanskrit scholarship.',
    tip: 'Sikandar = Butshikan; Zain-ul-Abidin = Budshah (revived Sanskrit).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-13',
    question:
      'Consider the following statements regarding Sultan Zain-ul-Abidin: (1) He was called Budshah. (2) He promoted religious tolerance. (3) He encouraged arts and crafts. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Sultan Zain-ul-Abidin (1420–1470 CE), revered as Budshah ("Great King"), abolished Jizya on Hindus, promoted religious harmony, and introduced carpet weaving, papier-mâché, and shawl making.',
    tip: 'Zain-ul-Abidin = Budshah, Akbar of Kashmir.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-14',
    question:
      'Sultan Zain-ul-Abidin is associated with: (1) Shawl industry promotion. (2) Papier-mâché encouragement. (3) Sanskrit learning patronage. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Zain-ul-Abidin invited artisans from Central Asia (Samarkand) to train locals in shawl weaving, papier-mâché, and bookbinding, and patronized Sanskrit scholars like Jonaraja and Srivara.',
    tip: 'Shawl + Papier-mâché + Sanskrit translations = Zain-ul-Abidin.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-15',
    question:
      'Consider the following statements on the Chak dynasty: (1) They succeeded the Shah Mir dynasty. (2) Yusuf Shah Chak was an important ruler. (3) Their rule ended with Mughal annexation. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Ghazi Shah Chak founded the Chak dynasty in 1561 CE, succeeding the Shah Mir dynasty. Yusuf Shah Chak and his son Yakub Shah Chak were the last rulers before Akbar annexed Kashmir in 1586 CE.',
    tip: 'Chak dynasty (1561–1586 CE) succeeded Shah Mir and ended with Mughal conquest.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-16',
    question:
      'Consider the following statements about Habba Khatoon: (1) She was the wife of Yusuf Shah Chak. (2) She was a famous Kashmiri poetess. (3) She belonged to the Mughal court. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Habba Khatoon ("The Nightingale of Kashmir"), originally named Zoon, was a 16th-century Kashmiri lyric poetess (Lol poetry) and Queen Consort of Yusuf Shah Chak, not a member of the Mughal court.',
    tip: 'Habba Khatoon = Zoon, wife of Yusuf Shah Chak, pioneer of Lol lyric poetry.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-17',
    question:
      'Mughal annexation of Kashmir occurred under which ruler? (1) Akbar (2) Jahangir (3) Aurangzeb',
    answer: '1 only',
    options: ['1 only', '2 only', '1 and 2 only', '1, 2 and 3'],
    explanation:
      'Mughal Emperor Akbar annexed Kashmir into the Mughal Empire in 1586 CE after his forces led by Qasim Khan defeated the Chak rulers.',
    tip: 'Akbar annexed Kashmir in 1586 CE.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-18',
    question:
      'Consider the following statements about Jahangir and Kashmir: (1) He frequently visited Kashmir. (2) The famous quote "If there is paradise on earth..." is linked to Mughal admiration of Kashmir. (3) He annexed Kashmir. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Jahangir visited Kashmir multiple times, laid out Shalimar Bagh for Nur Jahan, and popularized Amir Khusrau’s Persian couplet on Kashmir as paradise on earth. However, Kashmir was annexed by his father Akbar in 1586.',
    tip: 'Akbar annexed Kashmir (1586); Jahangir built Shalimar Bagh (1619).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-19',
    question:
      'Mughal gardens in Kashmir include: (1) Nishat Bagh (2) Shalimar Bagh (3) Chashme Shahi. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Shalimar Bagh (built by Jahangir, 1619), Nishat Bagh (built by Asif Khan, 1633), and Chashme Shahi (built by Ali Mardan Khan under Shah Jahan, 1632) are all iconic Mughal gardens in Srinagar.',
    tip: 'Shalimar, Nishat, Chashme Shahi, and Pari Mahal are famous Mughal gardens in Srinagar.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-20',
    question:
      'Consider the following statements about Afghan rule in Kashmir: (1) It started after the decline of the Mughals. (2) It was generally unpopular and oppressive. (3) It ended with the Sikh conquest. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Afghan (Durrani) rule in Kashmir lasted from 1752 to 1819 CE after Ahmad Shah Abdali’s general Abdullah Khan Ishk Aqasi defeated the Mughals. It ended when Maharaja Ranjit Singh’s Sikh army conquered Kashmir in 1819.',
    tip: 'Afghan Rule in Kashmir = 1752 to 1819 CE.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-21',
    question:
      'Sikh rule in Kashmir began: (1) In 1819 CE (2) After the defeat of the Afghans (3) Under Maharaja Ranjit Singh. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'In the Battle of Shopian (July 1819), Maharaja Ranjit Singh’s forces defeated the last Afghan governor Jabbar Khan, initiating Sikh rule in Kashmir (1819–1846).',
    tip: 'Battle of Shopian (1819) = End of Afghan rule, start of Sikh rule under Ranjit Singh.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-22',
    question:
      'Consider the following statements about the Treaty of Amritsar (1846): (1) It was signed between the British and Gulab Singh. (2) It transferred Kashmir to Gulab Singh. (3) It marked the beginning of Dogra rule in J&K. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Signed on 16 March 1846 between the British East India Company and Raja Gulab Singh of Jammu for 75 lakh Nanakshahi rupees, the Treaty of Amritsar founded the princely state of Jammu and Kashmir under Dogra rule.',
    tip: 'Treaty of Amritsar = 16 March 1846, 75 lakh Nanakshahi rupees.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-23',
    question:
      'Consider the following statements about Maharaja Gulab Singh: (1) He was the founder of the Dogra dynasty in J&K. (2) He expanded territories strategically. (3) He was the last Dogra ruler. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All correct'],
    explanation:
      'Maharaja Gulab Singh (1846–1857) was the first Dogra ruler and founder of J&K. The last Dogra ruler was Maharaja Hari Singh.',
    tip: 'First Dogra ruler = Gulab Singh; Last Dogra ruler = Hari Singh.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-24',
    question:
      'Maharaja Ranbir Singh is associated with: (1) Ranbir Penal Code (RPC). (2) Encouragement of Sanskrit and Persian scholarship. (3) Judicial and administrative reforms. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Maharaja Ranbir Singh (1857–1885) introduced the Ranbir Penal Code (RPC), reorganized civil and criminal courts, and built the Raghunath Temple complex housing a vast Sanskrit manuscript library.',
    tip: 'Ranbir Singh = Ranbir Penal Code + Raghunath Temple Library.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-25',
    question:
      'Consider the following statements about Maharaja Pratap Singh: (1) He improved roads and administration (Jhelum Valley Cart Road, Banihal Cart Road). (2) His reign saw growing British interference via a British Resident. (3) He introduced modern institutions and colleges. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'During Maharaja Pratap Singh’s reign (1885–1925), a British Resident was appointed in 1885, major roads and silk factories were built, and Sri Pratap (SP) College (Srinagar) and Prince of Wales (GGM Science) College (Jammu) were established.',
    tip: 'Pratap Singh (1885–1925) = British Residency, Jhelum Valley Cart Road, SP College.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-26',
    question:
      'Consider the following statements about Maharaja Hari Singh: (1) He was the last Maharaja of J&K. (2) He introduced progressive reforms in education and social welfare. (3) He signed the Instrument of Accession. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Maharaja Hari Singh (1925–1947) enacted the Primary Education Act, prohibited child marriage, opened temples to Dalits, and signed the Instrument of Accession with India on 26 October 1947.',
    tip: 'Hari Singh = Last Dogra Maharaja + Instrument of Accession (26 Oct 1947).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-27',
    question:
      'Consider the following statements regarding the 1931 uprising in Kashmir: (1) It marked a major political awakening in Kashmir. (2) 13 July 1931 is linked to this event. (3) It was directed against the autocratic Dogra administration. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'The events of 13 July 1931 outside Srinagar Central Jail marked the beginning of organized political awakening and the demand for responsible government against autocratic rule in J&K, leading to the appointment of the Glancy Commission.',
    tip: '1931 Uprising led to the Glancy Commission and the Praja Sabha.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-28',
    question:
      'Consider the following statements about the All Jammu and Kashmir Muslim Conference: (1) It was founded in October 1932. (2) It was associated with Sheikh Mohammad Abdullah and Chaudhry Ghulam Abbas. (3) It was later converted into the National Conference in 1939. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Founded in October 1932 with Sheikh Abdullah as its first President, the Muslim Conference was renamed the All Jammu and Kashmir National Conference in June 1939 to include people of all communities.',
    tip: '1932 = Muslim Conference; 1939 = Renamed National Conference.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-29',
    question:
      'Consider the following statements about the National Conference: (1) It emerged from the Muslim Conference in 1939. (2) It advocated broader secular politics. (3) It was led by Sheikh Abdullah. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'In 1939, under Sheikh Mohammad Abdullah and Prem Nath Bazaz, the Muslim Conference was transformed into the secular National Conference to unite all sections of J&K society.',
    tip: '1939 Special Session converted Muslim Conference into National Conference.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-30',
    question:
      'Consider the following statements about the Naya Kashmir manifesto: (1) It was associated with the National Conference. (2) It proposed progressive socio-economic and agrarian reforms. (3) It was issued in 1944. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Adopted by the National Conference in 1944, the "Naya Kashmir" (New Kashmir) manifesto outlined a progressive blueprint for constitutional democracy, "Land to the Tiller" agrarian reform, and women’s empowerment.',
    tip: 'Naya Kashmir Manifesto = 1944, National Conference.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-31',
    question:
      'Consider the following statements about the Quit Kashmir Movement: (1) It was launched in May 1946. (2) It was directed against the autocratic Dogra monarchy and the Treaty of Amritsar. (3) It was led by Sheikh Abdullah. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Launched in May 1946 by Sheikh Abdullah and the National Conference, the Quit Kashmir Movement challenged the legitimacy of the 1846 Treaty of Amritsar and demanded transfer of sovereignty to the people.',
    tip: 'Quit Kashmir Movement = May 1946, led by Sheikh Abdullah.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-32',
    question:
      'Consider the following statements regarding the Instrument of Accession of J&K: (1) It was signed in October 1947. (2) It was signed by Maharaja Hari Singh. (3) It initially covered three specified subjects (Defence, External Affairs, and Communications). Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Maharaja Hari Singh signed the Instrument of Accession on 26 October 1947, acceding J&K to the Dominion of India on Defence, External Affairs, and Communications.',
    tip: 'Instrument of Accession (26 Oct 1947) = Defence, External Affairs, Communications.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-33',
    question:
      'Consider the following statements about Article 370: (1) It granted special autonomous status to J&K. (2) It was placed in Part XXI (Temporary, Transitional and Special Provisions) of the Indian Constitution. (3) Its special status provisions were abrogated in August 2019. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Article 370 (Part XXI of the Indian Constitution) granted temporary special status to J&K until 5–6 August 2019, when Presidential Orders C.O. 272 & 273 and the J&K Reorganisation Act 2019 applied the entire Indian Constitution to J&K.',
    tip: 'Article 370 was in Part XXI and was abrogated on 5 August 2019.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-34',
    question:
      'Sheikh Mohammad Abdullah is associated with which of the following? (1) Title of "Sher-e-Kashmir" (2) All J&K National Conference (3) Naya Kashmir Manifesto and Big Landed Estates Abolition Act (1950)',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Popularly called "Sher-e-Kashmir" (Lion of Kashmir), Sheikh Abdullah founded the National Conference, introduced the 1944 Naya Kashmir manifesto, and enacted landmark "Land to the Tiller" reforms in 1950.',
    tip: 'Sher-e-Kashmir = Sheikh Mohammad Abdullah.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-35',
    question:
      'Consider the following statements about Bakshi Ghulam Mohammad: (1) He succeeded Sheikh Abdullah as Prime Minister of J&K in 1953. (2) He led the J&K government until 1963. (3) He was associated with major infrastructure, education, and development works. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Bakshi Ghulam Mohammad served as Prime Minister of J&K from 1953 to 1963, spearheading free education, medical/engineering colleges, road connectivity (Jawahar Tunnel), and ratification of J&K’s accession by the Constituent Assembly.',
    tip: 'Bakshi Ghulam Mohammad (1953–1963) is known as the Architect of Modern Kashmir.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-36',
    question:
      'Consider the following statements regarding the former Constitution of Jammu & Kashmir: (1) It was adopted on 17 November 1956. (2) It came into force on 26 January 1957. (3) It served as a separate state constitution before August 2019. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'The J&K Constituent Assembly adopted the state constitution on 17 November 1956, and it came into full force on 26 January 1957, remaining operative until the J&K Reorganisation Act, 2019.',
    tip: 'J&K Constitution: Adopted 17 Nov 1956; Enforced 26 Jan 1957.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-37',
    question:
      'What is the correct chronological order of the four Dogra rulers of Jammu and Kashmir?',
    answer: 'Gulab Singh → Ranbir Singh → Pratap Singh → Hari Singh',
    options: [
      'Gulab Singh → Ranbir Singh → Pratap Singh → Hari Singh',
      'Ranbir Singh → Gulab Singh → Pratap Singh → Hari Singh',
      'Gulab Singh → Pratap Singh → Ranbir Singh → Hari Singh',
      'Gulab Singh → Ranbir Singh → Hari Singh → Pratap Singh',
    ],
    explanation:
      'The four Dogra Maharajas ruled in the exact sequence: Gulab Singh (1846–1857) → Ranbir Singh (1857–1885) → Pratap Singh (1885–1925) → Hari Singh (1925–1947).',
    tip: 'Mnemonic: G-R-P-H (Gulab, Ranbir, Pratap, Hari).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-38',
    question:
      'Consider the following statements about the Martand Sun Temple: (1) It was built by Lalitaditya Muktapida. (2) It is dedicated to Surya (the Sun God). (3) It is a masterpiece of ancient Kashmiri peristyle stone architecture in Anantnag. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Built in the 8th century CE by Karkota King Lalitaditya Muktapida near Mattan (Anantnag), the Martand Temple is dedicated to Surya and exemplifies ancient Kashmiri architecture.',
    tip: 'Martand Sun Temple = Lalitaditya, Surya, Anantnag district.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-39',
    question:
      'Consider the following statements about the Avantipur temples (Avantiswami & Avantisvara): (1) They were built by King Avantivarman. (2) They are located in Pulwama district near Srinagar on the Srinagar-Anantnag highway. (3) They belong to the Utpala period (9th century CE). Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'King Avantivarman of the Utpala dynasty built two magnificent temples at Avantipora (Pulwama district): Avantiswami (dedicated to Lord Vishnu) before his accession and Avantisvara (dedicated to Lord Shiva) after becoming king.',
    tip: 'Avantiswami = Vishnu; Avantisvara = Shiva; Built by Avantivarman.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-40',
    question:
      'Consider the following statements about Queen Didda: (1) She was a powerful 10th-century queen ruler of Kashmir. (2) She founded the Lohara royal line in Kashmir. (3) Her reign is extensively documented in Kalhana’s Rajatarangini (Taranga VI). Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Kalhana’s Rajatarangini details Queen Didda’s astute statesmanship, administrative control, and her appointment of Sangramaraja of Lohara as her successor.',
    tip: 'Queen Didda is featured in the 6th Taranga of Rajatarangini.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-41',
    question:
      'Which of the following pairs of attributes is true regarding Sultan Zain-ul-Abidin? (1) Known as Budshah (2) Practiced religious tolerance and abolished Jizya (3) Promoted Kashmiri arts, crafts, and public works (Zaina Kadal, Zaina Lank)',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Sultan Zain-ul-Abidin (1420–1470 CE) built Zaina Lank in Wular Lake, Zaina Kadal bridge in Srinagar, irrigation canals (Mar Canal), and fostered religious tolerance and handicrafts.',
    tip: 'Zain-ul-Abidin = Zaina Lank + Mar Canal + Carpet & Shawl crafts.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-42',
    question:
      'Consider the following statements about Afghan rule in Kashmir: (1) It was marked by heavy and oppressive taxation. (2) It followed the decline of Mughal rule in 1752. (3) It ended in 1819 with the Sikh conquest. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Afghan (Durrani) rule lasted for 67 years (1752–1819 CE), characterized by heavy taxation on shawl weavers and peasantry until Ranjit Singh’s army captured Srinagar in 1819.',
    tip: 'Afghan rule in Kashmir: 1752–1819 (67 years).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-43',
    question:
      'Consider the following statements about Sikh rule in Kashmir: (1) It began in 1819 CE. (2) It commenced during Maharaja Ranjit Singh’s reign. (3) It immediately preceded Dogra rule (which began in 1846). Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Sikh rule in Kashmir lasted 27 years from 1819 to 1846, with Dewan Moti Ram as the first Sikh governor and Sheikh Imam-ud-Din as the last governor before Dogra rule began.',
    tip: 'Sikh rule (1819–1846): First governor = Dewan Moti Ram; Last = Sheikh Imam-ud-Din.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-44',
    question:
      'The Treaty of Amritsar is associated with which of the following facts? (1) Signed in March 1846 (2) Concluded between the British East India Company and Raja Gulab Singh (3) Involved a payment of 75 lakh Nanakshahi rupees',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Under Article 3 of the Treaty of Amritsar (16 March 1846), Gulab Singh agreed to pay 75 lakh Nanakshahi rupees to the British in exchange for sovereignty over the hilly and mountainous territory between the Indus and Ravi rivers.',
    tip: 'Treaty of Amritsar (1846) = Between Indus and Ravi, 75 lakh Nanakshahi rupees.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-45',
    question:
      'Consider the following statements about Maharaja Hari Singh: (1) He was the last Dogra ruler of J&K. (2) He signed the Instrument of Accession in October 1947. (3) The famous coronation declaration "Justice is my religion" is linked with him. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'At his coronation in 1926, Maharaja Hari Singh famously declared: "As a ruler I have no religion; all religions are mine and my religion is Justice."',
    tip: '"Justice is my religion" = Maharaja Hari Singh.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s1-46',
    question:
      'Consider the following statements about the Jhelum River: (1) It originates at Verinag spring in Anantnag. (2) It is the major river flowing through the Kashmir Valley. (3) Its ancient Vedic/Sanskrit name is Vitasta. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'The Jhelum River (ancient Sanskrit: Vitasta; Greek: Hydaspes; Kashmiri: Vyeth) originates from the Verinag spring at the foot of the Pir Panjal range in Anantnag.',
    tip: 'Jhelum = Vitasta (Sanskrit), Hydaspes (Greek), Vyeth (Kashmiri), source Verinag.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-47',
    question:
      'Consider the following statements about Wular Lake: (1) It is a freshwater lake fed by the Jhelum River. (2) It is located in Bandipora district. (3) It is the largest freshwater lake in India. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Wular Lake in Bandipora district, formed by tectonic activity and fed by the Jhelum River, is India’s largest freshwater lake and a designated Ramsar site (1990).',
    tip: 'Wular Lake = Bandipora, tectonic origin, largest freshwater lake in India.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-48',
    question:
      'Consider the following statements about Lal Ded (Lalleshwari): (1) She was a 14th-century mystic poetess of Kashmir. (2) She belonged to the Kashmir Shaiva mystic tradition and composed Vakhs. (3) She is revered as a cultural and spiritual bridge figure across communities. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Lal Ded (Lalleshwari, 1320–1392 CE), born in Pandrethan near Srinagar, composed four-line mystic verses called "Vakhs" that shaped the Kashmiri language and syncretic Rishi-Shaiva spirituality.',
    tip: 'Lal Ded composed Vakhs; Nund Rishi composed Shruks.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-49',
    question:
      'Consider the following statements about Nund Rishi: (1) He is also known as Sheikh Noor-ud-Din Wali (Alamdar-e-Kashmir). (2) He founded the indigenous Rishi order of Sufism in Kashmir. (3) His shrine is located at Charar-e-Sharif in Budgam district. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Sheikh Noor-ud-Din Noorani (Nund Rishi, 1377–1440 CE) founded the Rishi order of Kashmiri Sufism, composed didactic poetry called "Shruks", and is buried at Charar-e-Sharif (Budgam).',
    tip: 'Nund Rishi = Sheikh Noor-ud-Din Wali, Shruks, Charar-e-Sharif.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s1-50',
    question:
      'Which of the following scholars were continuators of Kalhana’s Rajatarangini in later centuries? (1) Jonaraja (2) Srivara (3) Prajyabhatta and Suka',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Kalhana’s Rajatarangini (up to 1150 CE) was continued by Jonaraja (Dwitiya Rajatarangini, up to 1459 CE), his pupil Srivara (Tritiya Rajatarangini, 1459–1486 CE), and Prajyabhatta & Suka (Chaturtha Rajatarangini, up to Akbar’s conquest in 1586 CE).',
    tip: 'Continuators of Rajatarangini: Jonaraja → Srivara → Prajyabhatta & Suka.',
    difficulty: 'intermediate',
  },

  // ============================================================================
  // SET 2: HARD MCQs – JAMMU & KASHMIR UT (History, Polity, Geography, Economy, Culture)
  // ============================================================================
  {
    id: 'jkh-s2-1',
    question:
      'Consider the following statements regarding the Treaty of Amritsar (1846): (1) It was signed after the First Anglo-Sikh War. (2) It transferred Kashmir to Gulab Singh for 75 lakh Nanakshahi rupees. (3) It was signed between Maharaja Ranjit Singh and the British. Which of the statements given above is/are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    explanation:
      'The Treaty of Amritsar (16 March 1846) was signed after the First Anglo-Sikh War between the British East India Company and Raja Gulab Singh. Maharaja Ranjit Singh had already passed away in 1839.',
    tip: 'Ranjit Singh died in 1839; Treaty of Amritsar (1846) was between British and Gulab Singh.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-2',
    question:
      'Arrange the following rulers of Kashmir chronologically: (1) Avantivarman (2) Lalitaditya Muktapida (3) Queen Didda (4) Sultan Zain-ul-Abidin',
    answer: '2-1-3-4',
    options: ['2-1-3-4', '1-2-3-4', '2-3-1-4', '3-2-1-4'],
    explanation:
      'Correct chronological sequence: Lalitaditya Muktapida (8th century, Karkota) → Avantivarman (9th century, Utpala) → Queen Didda (10th century) → Sultan Zain-ul-Abidin (15th century, Shah Mir dynasty).',
    tip: 'Lalitaditya (724–760) → Avantivarman (855–883) → Didda (980–1003) → Zain-ul-Abidin (1420–1470).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-3',
    question: 'Which ruler of Jammu and Kashmir is correctly matched with his contribution?',
    answer: 'Avantivarman — Flood control through Suyya',
    options: [
      'Lalitaditya — Ranbir Penal Code',
      'Avantivarman — Flood control through Suyya',
      'Gulab Singh — Naya Kashmir Manifesto',
      'Hari Singh — Rajatarangini',
    ],
    explanation:
      'King Avantivarman’s minister and engineer Suyya executed major flood-control dredging on the Jhelum River. Ranbir Penal Code belongs to Ranbir Singh, Naya Kashmir to Sheikh Abdullah, and Rajatarangini to Kalhana.',
    tip: 'Avantivarman — Engineer Suyya (Flood control).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-4',
    question:
      'Kalhana’s historical chronicle Rajatarangini was continued by which of the following scholars? (1) Jonaraja (2) Srivara (3) Prajyabhatta',
    answer: '1, 2 and 3',
    options: ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
    explanation:
      'Jonaraja, Srivara, Prajyabhatta, and Suka successively wrote sequels to Kalhana’s Rajatarangini, bringing the Sanskrit historical narrative down to 1586 CE.',
    tip: 'All three (Jonaraja, Srivara, Prajyabhatta) continued Rajatarangini.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-5',
    question: 'The "Naya Kashmir" (New Kashmir) document of 1944 was associated with:',
    answer: 'National Conference',
    options: ['Muslim Conference', 'National Conference', 'Dogra Sabha', 'Praja Parishad'],
    explanation:
      'The Naya Kashmir manifesto was adopted by the All Jammu & Kashmir National Conference in 1944 as a socio-economic and constitutional reform program.',
    tip: 'Naya Kashmir (1944) = National Conference.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-6',
    question: 'The Quit Kashmir Movement (1946) was launched against:',
    answer: 'Dogra monarchy',
    options: ['British rule', 'Dogra monarchy', 'Afghan administration', 'Sikh rule'],
    explanation:
      'The Quit Kashmir Movement was launched in May 1946 by the National Conference against the autocratic Dogra monarchy, demanding abrogation of the Treaty of Amritsar.',
    tip: 'Quit Kashmir (1946) targeted the Dogra monarchy.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-7',
    question: 'Which among the following pairs is NOT correctly matched?',
    answer: 'Hari Singh — Lion of Kashmir',
    options: [
      'Sheikh Abdullah — Sher-e-Kashmir',
      'Zain-ul-Abidin — Budshah',
      'Hari Singh — Lion of Kashmir',
      'Lal Ded — Mystic poetess',
    ],
    explanation:
      '"Lion of Kashmir" (Sher-e-Kashmir) was the popular title of Sheikh Mohammad Abdullah, not Maharaja Hari Singh.',
    tip: 'Sher-e-Kashmir (Lion of Kashmir) = Sheikh Abdullah.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-8',
    question: 'The Instrument of Accession signed by Maharaja Hari Singh in October 1947 covered:',
    answer: 'Defence, External Affairs, Communications',
    options: [
      'Defence only',
      'Defence, External Affairs, Communications',
      'Judiciary and Finance only',
      'All subjects',
    ],
    explanation:
      'Under the Instrument of Accession (26 October 1947), Maharaja Hari Singh acceded to the Dominion of India in respect of three subjects: Defence, External Affairs, and Communications.',
    tip: '3 subjects of Accession: Defence, External Affairs, Communications.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-9',
    question: 'The Constitution of Jammu & Kashmir was adopted by the Constituent Assembly in which year?',
    answer: '1956',
    options: ['1952', '1954', '1956', '1957'],
    explanation:
      'The Constitution of J&K was adopted on 17 November 1956 and came into effect on 26 January 1957.',
    tip: 'Adopted = 1956 (17 Nov); Enforced = 1957 (26 Jan).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-10',
    question: 'Which Article of the Indian Constitution granted special status to J&K before August 2019?',
    answer: '370',
    options: ['356', '35A only', '370', '371'],
    explanation:
      'Article 370 in Part XXI of the Constitution of India granted special status to Jammu & Kashmir prior to the constitutional reorganization of August 2019.',
    tip: 'Article 370 = Special status of J&K before 5 August 2019.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-11',
    question: 'The ancient text Nilamata Purana is historically significant because it:',
    answer: 'Describes early Kashmir culture, sacred geography, and traditions',
    options: [
      'Contains Mughal revenue records',
      'Describes early Kashmir culture, sacred geography, and traditions',
      'Is a biography of Kalhana',
      'Is a Persian history text',
    ],
    explanation:
      'Nilamata Purana (6th–8th century CE) is an ancient Sanskrit text describing the origin myth of Kashmir (Satisar), its sacred tirthas, and socio-religious customs.',
    tip: 'Nilamata Purana = Ancient Sanskrit source on Kashmir’s culture & sacred geography.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-12',
    question: 'The Karkota dynasty of Kashmir is prominently associated with which ruler?',
    answer: 'Lalitaditya Muktapida',
    options: ['Lalitaditya Muktapida', 'Avantivarman', 'Queen Didda', 'Gulab Singh'],
    explanation:
      'Founded by Durlabhavardhana in the 7th century CE, the Karkota dynasty reached its zenith under Emperor Lalitaditya Muktapida (724–760 CE).',
    tip: 'Karkota Dynasty = Founded by Durlabhavardhana, greatest king Lalitaditya.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-13',
    question: 'The famous Martand Sun Temple in Anantnag was built by:',
    answer: 'Lalitaditya Muktapida',
    options: ['Ashoka', 'Lalitaditya Muktapida', 'Avantivarman', 'Zain-ul-Abidin'],
    explanation:
      'Lalitaditya Muktapida built the Martand Sun Temple in the 8th century CE on a plateau near Mattan in Anantnag district.',
    tip: 'Martand Sun Temple = Lalitaditya Muktapida.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-14',
    question: 'Which medieval ruler of Kashmir was known by the epithet "Butshikan"?',
    answer: 'Sikandar',
    options: ['Shah Mir', 'Sikandar', 'Zain-ul-Abidin', 'Yusuf Shah Chak'],
    explanation:
      'Sultan Sikandar (1389–1413 CE) of the Shah Mir dynasty was called Sikandar Butshikan.',
    tip: 'Sikandar = Butshikan; Zain-ul-Abidin = Budshah.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-15',
    question:
      'Sultan Zain-ul-Abidin is known for which of the following? (1) Religious tolerance (2) Promotion of arts and crafts (3) Revival of Sanskrit learning',
    answer: '1, 2 and 3',
    options: ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
    explanation:
      'Sultan Zain-ul-Abidin promoted religious harmony, patronized Sanskrit works (including translations of the Mahabharata and Rajatarangini into Persian), and introduced carpet, shawl, and papier-mâché industries.',
    tip: 'All three achievements belong to Sultan Zain-ul-Abidin.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-16',
    question: 'Kashmir came under Mughal rule in which year?',
    answer: '1586',
    options: ['1586', '1605', '1526', '1819'],
    explanation:
      'Mughal Emperor Akbar annexed Kashmir in 1586 CE, making it a Subah (province) of the Mughal Empire.',
    tip: '1586 CE = Mughal annexation of Kashmir under Akbar.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-17',
    question: 'Afghan rule in Kashmir ended in which year?',
    answer: '1819',
    options: ['1752', '1819', '1846', '1947'],
    explanation:
      'Afghan rule in Kashmir began in 1752 CE and ended in July 1819 CE when Maharaja Ranjit Singh’s forces won the Battle of Shopian.',
    tip: 'Afghan rule: Started 1752, Ended 1819.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-18',
    question: 'The Sikh conquest of Kashmir in 1819 took place under which ruler?',
    answer: 'Ranjit Singh',
    options: ['Gulab Singh', 'Ranjit Singh', 'Hari Singh', 'Akbar'],
    explanation:
      'The Sikh conquest of Kashmir in 1819 took place under Maharaja Ranjit Singh, led by generals Misr Diwan Chand and Hari Singh Nalwa.',
    tip: '1819 Sikh conquest = Maharaja Ranjit Singh.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-19',
    question: 'Which river of Jammu and Kashmir is known as "Vitasta" in ancient Sanskrit texts?',
    answer: 'Jhelum',
    options: ['Chenab', 'Ravi', 'Jhelum', 'Indus'],
    explanation:
      'In the Rigveda and ancient Sanskrit texts, the Jhelum River is called Vitasta (while Chenab is Asikni and Ravi is Parushni).',
    tip: 'Vitasta = Jhelum; Asikni = Chenab; Parushni = Ravi.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-20',
    question: 'Wular Lake, the largest freshwater lake in India, is located in which district of J&K?',
    answer: 'Bandipora',
    options: ['Ganderbal', 'Bandipora', 'Shopian', 'Kulgam'],
    explanation:
      'Wular Lake is situated in Bandipora district (stretching toward Sopore in Baramulla) in northern Kashmir.',
    tip: 'Wular Lake = Bandipora district.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-21',
    question: 'Which mountain pass connects the Kashmir Valley with Ladakh?',
    answer: 'Zoji La',
    options: ['Banihal Pass', 'Zoji La', 'Pir Panjal Pass', 'Burzil Pass'],
    explanation:
      'Zoji La pass on National Highway 1 (Srinagar–Kargil–Leh highway) connects the Kashmir Valley (Sonamarg) with Drass and Kargil in Ladakh.',
    tip: 'Zoji La connects Kashmir Valley with Ladakh; Banihal Pass connects Jammu with Kashmir.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-22',
    question: 'Dachigam National Park near Srinagar is famous for the conservation of:',
    answer: 'Hangul (Kashmir Stag)',
    options: ['Snow leopard', 'Hangul (Kashmir Stag)', 'Musk deer', 'Himalayan black bear'],
    explanation:
      'Dachigam National Park is the primary protected habitat of the critically endangered Hangul (Kashmir Stag, Cervus hanglu hanglu), the UT animal of J&K.',
    tip: 'Dachigam National Park = Hangul (Kashmir Stag).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-23',
    question: 'The Jhelum River originates from which famous spring?',
    answer: 'Verinag',
    options: ['Wular', 'Verinag', 'Dal Lake', 'Lidder'],
    explanation:
      'The Jhelum River rises from the Verinag spring located at the base of the Pir Panjal range in Anantnag district.',
    tip: 'Jhelum source = Verinag spring (Anantnag).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-24',
    question: 'Which scenic meadow in Pahalgam is popularly called "Mini Switzerland" in J&K?',
    answer: 'Baisaran',
    options: ['Pahalgam', 'Gulmarg', 'Baisaran', 'Tulail'],
    explanation:
      'Baisaran meadow, situated about 5 km from Pahalgam in Anantnag district, is surrounded by dense pine forests and snow-clad peaks.',
    tip: 'Baisaran (near Pahalgam) is famous as Mini Switzerland; Gulmarg means Meadow of Flowers.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-25',
    question: 'Which district is popularly known as the "Apple Bowl of Kashmir"?',
    answer: 'Shopian',
    options: ['Pulwama', 'Shopian', 'Bandipora', 'Budgam'],
    explanation:
      'Shopian district (along with Sopore in Baramulla) is celebrated as the Apple Bowl of Kashmir due to its extensive high-quality apple orchards.',
    tip: 'Shopian = Apple Bowl of Kashmir; Pulwama = Saffron Bowl / Rice Bowl.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-26',
    question: 'Which of the following is a Geographical Indication (GI) tagged product of Kashmir?',
    answer: 'All of these',
    options: ['Kashmir Pashmina', 'Kashmiri Saffron', 'Kashmir Sozni Embroidery', 'All of these'],
    explanation:
      'Kashmir Pashmina, Kashmiri Saffron (Lachha, Mongra, Guchhi), Kashmir Sozni Embroidery, Kani Shawl, Walnut Wood Carving, Khatamband, and Papier-Mâché all hold official GI tags.',
    tip: 'Pashmina, Kashmiri Saffron, and Sozni Embroidery all have GI tags.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-27',
    question: 'Saffron (Zafran) cultivation on Karewa soils is predominantly concentrated in which district of J&K?',
    answer: 'Pulwama',
    options: ['Shopian', 'Pulwama', 'Baramulla', 'Kupwara'],
    explanation:
      'Pampore in Pulwama district is the hub of saffron cultivation on lacustrine Karewa deposits, earning it the title "Saffron Town of Kashmir".',
    tip: 'Pampore (Pulwama district) = Saffron capital of J&K.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-28',
    question: 'Which of the following major hydroelectric projects is constructed on the Chenab River?',
    answer: 'Salal',
    options: ['Salal', 'Uri', 'Kishanganga', 'Lower Jhelum'],
    explanation:
      'Salal Hydroelectric Power Station (in Reasi district), along with Baglihar, Dul Hasti, Ratle, and Pakal Dul, is located on the Chenab River. Uri and Lower Jhelum are on the Jhelum River.',
    tip: 'Chenab projects: Salal, Baglihar, Dul Hasti, Ratle.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-29',
    question: 'World-famous Kashmiri Pashmina wool is obtained from:',
    answer: 'Changthangi goat',
    options: ['Merino sheep', 'Changthangi goat', 'Yak', 'Angora rabbit'],
    explanation:
      'Fine Pashmina wool comes from the undercoat of the Changthangi (Changra) goat reared by Changpa nomads in the high-altitude Changthang plateau of Ladakh.',
    tip: 'Pashmina = Changthangi (Changra) goat.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-30',
    question: 'What is the primary backbone and largest employment contributor to the economy of J&K?',
    answer: 'Agriculture and horticulture',
    options: ['Petroleum', 'Agriculture and horticulture', 'Automobile manufacturing', 'Shipping'],
    explanation:
      'Agriculture and horticulture (apples, saffron, walnuts, cherries, almonds) form the backbone of J&K’s economy, supporting the livelihood of the majority of its rural population.',
    tip: 'Agriculture & Horticulture + Tourism are the twin pillars of J&K’s economy.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-31',
    question: 'What is the traditional loose winter attire worn by both men and women in Kashmir?',
    answer: 'Pheran',
    options: ['Achkan', 'Pheran', 'Sherwani', 'Jama'],
    explanation:
      'The Pheran is the traditional woollen cloak/tunic worn in Kashmir during winter to stay warm.',
    tip: 'Pheran = Traditional Kashmiri winter garment.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-32',
    question: 'In Kashmiri culture, what is a "Kangri"?',
    answer: 'Traditional portable earthen heating pot',
    options: ['Musical instrument', 'Traditional portable earthen heating pot', 'Traditional bread', 'Carpet type'],
    explanation:
      'A Kangri (Kanger) is a portable earthen pot encased in woven wickerwork (typically from Charar-e-Sharif or Bandipora) filled with glowing embers and carried beneath the Pheran for warmth.',
    tip: 'Kangri = Wicker-encased earthen fire pot used in winter.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-33',
    question: 'In the cultural traditions of Jammu and Kashmir, "Rouf" is a:',
    answer: 'Folk dance',
    options: ['Folk dance', 'Cuisine', 'Musical instrument', 'Shrine'],
    explanation:
      'Rouf is a graceful traditional folk dance performed by Kashmiri women standing in two facing rows, especially during Eid and spring festivities.',
    tip: 'Rouf = Traditional Kashmiri women’s folk dance.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-34',
    question: 'The "Dumhal" folk dance of Kashmir is traditionally performed by men of which community?',
    answer: 'Wattal tribe',
    options: ['Kashmiri Pandits', 'Wattal tribe', 'Gujjars', 'Bakarwals'],
    explanation:
      'Dumhal is a ceremonial dance performed solely by men of the Wattal tribe wearing colourful tall conical caps and long robes around a planted banner.',
    tip: 'Dumhal dance = Men of the Wattal tribe.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-35',
    question: 'What is the traditional multi-course royal feast of Kashmiri cuisine called?',
    answer: 'Wazwan',
    options: ['Wazwan', 'Kahwa', 'Harissa', 'Modur pulao'],
    explanation:
      'Wazwan is a formal multi-course meal in Kashmiri cuisine (up to 36 courses, prepared by a master chef called Vasta Waza), featuring dishes like Rogan Josh, Rista, Gushtaba, and Tabak Maaz.',
    tip: 'Wazwan = Multi-course Kashmiri feast ending with Gushtaba.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-36',
    question: 'The 14th-century saint-poetess Lal Ded (Lalleshwari) belonged to which spiritual tradition?',
    answer: 'Shaiva mystic tradition',
    options: ['Rishi tradition', 'Shaiva mystic tradition', 'Sufi order', 'Sikh philosophy'],
    explanation:
      'Lal Ded belonged to the Kashmir Shaiva (Trika) mystic tradition and expressed non-dual spiritual wisdom in vernacular Kashmiri Vakhs.',
    tip: 'Lal Ded = Kashmir Shaiva mystic tradition (Vakhs).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-37',
    question: 'Saint Nund Rishi, the patron saint of Kashmir, is also revered as:',
    answer: 'Sheikh Noor-ud-din Noorani',
    options: [
      'Sheikh Noor-ud-din Noorani',
      'Hamza Makhdoom',
      'Bulbul Shah',
      'Mir Syed Ali Hamadani',
    ],
    explanation:
      'Nund Rishi is revered as Sheikh Noor-ud-din Noorani (or Alamdar-e-Kashmir), founder of the indigenous Rishi order of Sufism.',
    tip: 'Nund Rishi = Sheikh Noor-ud-din Noorani (Alamdar-e-Kashmir).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-38',
    question: 'The revered Hazratbal Shrine in Srinagar is situated on the banks of which lake?',
    answer: 'Dal Lake',
    options: ['Jhelum', 'Dal Lake', 'Wular Lake', 'Lidder River'],
    explanation:
      'Hazratbal Shrine (Dargah Sharif), which houses the sacred Moi-e-Muqqadas relic, is located on the northern/western bank of Dal Lake in Srinagar.',
    tip: 'Hazratbal Shrine = Left/Northern shore of Dal Lake, Srinagar.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-39',
    question: 'Which of the following Mughal Gardens is NOT located in Srinagar?',
    answer: 'Pinjore Garden',
    options: ['Nishat Bagh', 'Shalimar Bagh', 'Chashme Shahi', 'Pinjore Garden'],
    explanation:
      'Nishat Bagh, Shalimar Bagh, and Chashme Shahi are all situated along the Zabarwan foothills in Srinagar, whereas Pinjore Garden (Yadavindra Gardens) is in Panchkula, Haryana.',
    tip: 'Pinjore Garden is in Haryana, not Srinagar.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-40',
    question: 'Betaab Valley, a popular tourist destination surrounded by deodar and pine forests, is located near:',
    answer: 'Pahalgam',
    options: ['Gulmarg', 'Sonamarg', 'Pahalgam', 'Kupwara'],
    explanation:
      'Betaab Valley (originally Hagan Valley) is located 15 km from Pahalgam in Anantnag district along the route to the Amarnath cave shrine.',
    tip: 'Betaab Valley & Aru Valley = Near Pahalgam (Anantnag).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-41',
    question: 'Aharbal Waterfall, often called the "Niagara Falls of Kashmir", is situated on which river?',
    answer: 'Vishav River',
    options: ['Vishav River', 'Jhelum', 'Lidder', 'Sindh'],
    explanation:
      'Aharbal Waterfall in Kulgam district is formed by the alpine Vishav River (a tributary of the Jhelum originating from Kausar Nag lake) plunging 25 meters through a narrow gorge.',
    tip: 'Aharbal Waterfall (Kulgam) = Vishav River.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-42',
    question: 'Doodhpathri ("Valley of Milk"), a scenic bowl-shaped alpine meadow, is located in which district?',
    answer: 'Budgam',
    options: ['Budgam', 'Anantnag', 'Kupwara', 'Kulgam'],
    explanation:
      'Doodhpathri and Yusmarg are famous alpine meadows located in the Pir Panjal range in Budgam district.',
    tip: 'Doodhpathri & Yusmarg = Budgam district.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-43',
    question: 'Indira Gandhi Memorial Tulip Garden, Asia’s largest tulip garden, is located in:',
    answer: 'Srinagar',
    options: ['Gulmarg', 'Srinagar', 'Pahalgam', 'Sonamarg'],
    explanation:
      'Opened in 2007 (formerly Siraj Bagh), the Indira Gandhi Memorial Tulip Garden is situated at the foothills of the Zabarwan Range overlooking Dal Lake in Srinagar.',
    tip: 'Asia’s largest Tulip Garden = Zabarwan foothills, Srinagar.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-44',
    question: 'What is the correct chronological sequence of rule in Kashmir from 1586 to 1947?',
    answer: 'Mughals → Afghans → Sikhs → Dogras',
    options: [
      'Mughals → Afghans → Sikhs → Dogras',
      'Afghans → Mughals → Sikhs → Dogras',
      'Sikhs → Afghans → Dogras → Mughals',
      'Mughals → Sikhs → Afghans → Dogras',
    ],
    explanation:
      'Kashmir was ruled successively by the Mughals (1586–1752) → Afghans (1752–1819) → Sikhs (1819–1846) → Dogras (1846–1947).',
    tip: 'Mnemonic: M-A-S-D (Mughals 1586, Afghans 1752, Sikhs 1819, Dogras 1846).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-45',
    question: 'Which of the following historical monument pairs is INCORRECTLY matched?',
    answer: 'Pari Mahal — Zain-ul-Abidin',
    options: [
      'Martand — Sun Temple',
      'Avantipur — Temple ruins',
      'Charar-e-Sharif — Nund Rishi',
      'Pari Mahal — Zain-ul-Abidin',
    ],
    explanation:
      'Pari Mahal ("Palace of Fairies"), a seven-terraced garden overlooking Srinagar, was built by Mughal Prince Dara Shikoh in the mid-17th century as a library and astronomical observatory, not by Zain-ul-Abidin.',
    tip: 'Pari Mahal = Built by Dara Shikoh (eldest son of Shah Jahan).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s2-46',
    question: 'The historical "Darbar Move" in Jammu and Kashmir referred to:',
    answer: 'Bi-annual transfer of the Civil Secretariat between Jammu and Srinagar',
    options: [
      'Bi-annual transfer of the Civil Secretariat between Jammu and Srinagar',
      'Army border relocation',
      'High Court shifting to Delhi',
      'Seasonal pastoral migration of Bakarwals',
    ],
    explanation:
      'Started by Maharaja Ranbir Singh in 1872, the Darbar Move was the bi-annual shifting of the capital and secretariat between Srinagar (summer capital) and Jammu (winter capital). In 2021, J&K transitioned to an e-Office system.',
    tip: 'Darbar Move was initiated in 1872 by Maharaja Ranbir Singh.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-47',
    question:
      'Under the Jammu and Kashmir Official Languages Act, 2020, the official languages of J&K UT include: (1) Kashmiri (2) Dogri (3) Hindi (4) Urdu. Select the correct answer:',
    answer: '1, 2, 3 and 4',
    options: ['1 and 2 only', '1, 2 and 4 only', '1, 2, 3 and 4', '2 and 4 only'],
    explanation:
      'The J&K Official Languages Act, 2020 designated five official languages for the Union Territory of Jammu & Kashmir: Kashmiri, Dogri, Urdu, Hindi, and English.',
    tip: '5 Official Languages of J&K UT (2020): Kashmiri, Dogri, Urdu, Hindi, English.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-48',
    question: 'Which of the following is NOT one of the 20 districts of the Union Territory of Jammu and Kashmir?',
    answer: 'Kargil',
    options: ['Kargil', 'Ganderbal', 'Shopian', 'Reasi'],
    explanation:
      'Following the J&K Reorganisation Act, 2019, Kargil and Leh form the Union Territory of Ladakh, while Jammu & Kashmir UT comprises 20 districts (10 in Jammu division and 10 in Kashmir division).',
    tip: 'Kargil and Leh are in Ladakh UT.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-49',
    question: 'The Banihal Tunnel (Jawahar Tunnel / Dr. Syama Prasad Mookerjee Tunnel corridor) connects:',
    answer: 'Jammu and Srinagar',
    options: ['Srinagar and Leh', 'Jammu and Srinagar', 'Poonch and Rajouri', 'Srinagar and Kupwara'],
    explanation:
      'The Banihal road/rail tunnels cut through the Pir Panjal range to provide all-weather connectivity between Jammu and the Kashmir Valley (Srinagar) along NH-44.',
    tip: 'Banihal Pass/Tunnel connects Jammu with Srinagar across the Pir Panjal range.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s2-50',
    question:
      'What is the correct chronological order of the following milestones in J&K history? (1) Treaty of Amritsar (2) Quit Kashmir Movement (3) Accession to India (4) Abrogation of Article 370',
    answer: '1-2-3-4',
    options: ['1-2-3-4', '2-1-3-4', '1-3-2-4', '1-2-4-3'],
    explanation:
      'Treaty of Amritsar (March 1846) → Quit Kashmir Movement (May 1946) → Instrument of Accession to India (October 1947) → Abrogation of Article 370 (August 2019).',
    tip: '1846 → 1946 → 1947 → 2019.',
    difficulty: 'beginner',
  },

  // ============================================================================
  // SET 3: VERY HARD JKSSB / JKPSC MCQs – J&K UT (Assertion-Reason, Chronology, Match, Traps)
  // ============================================================================
  {
    id: 'jkh-s3-1',
    question:
      'Assertion (A): Kashmir was called "Satisar" in ancient traditions. Reason (R): It is believed that the Kashmir Valley was once a vast lake submerged under water.',
    answer: 'Both A and R are true, and R is the correct explanation of A',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is not the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    explanation:
      'According to the Nilamata Purana and geological evidence (lacustrine Karewa deposits), the Kashmir Valley was once a vast Pleistocene lake known as Satisar ("Lake of Sati").',
    tip: 'Both A and R are true and R explains A (supported by Karewa lacustrine geology).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-2',
    question:
      'Assertion (A): Lalitaditya Muktapida was one of the greatest rulers of ancient Kashmir. Reason (R): He built the Martand Sun Temple and expanded his empire across northern India and Central Asia.',
    answer: 'Both A and R are true, and R is the correct explanation of A',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is not the correct explanation of A',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    explanation:
      'Lalitaditya Muktapida’s military campaigns (defeating Yasovarman of Kannauj) and monumental architectural patronage (Martand Sun Temple, Parihaspora) make him the greatest ruler of the Karkota dynasty.',
    tip: 'Both A and R are true and R directly explains A.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-3',
    question:
      'Assertion (A): King Avantivarman is remembered for his peaceful reign and administrative reforms. Reason (R): He introduced the Ranbir Penal Code.',
    answer: 'A is true, but R is false',
    options: [
      'Both A and R are true, and R explains A',
      'Both A and R are true, but R is not the explanation',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    explanation:
      'Avantivarman (9th century CE) is famed for administrative stability and flood-control engineering under Suyya. The Ranbir Penal Code was introduced in the 19th century by Dogra ruler Maharaja Ranbir Singh.',
    tip: 'Ranbir Penal Code = Maharaja Ranbir Singh (not Avantivarman).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-4',
    question:
      'Assertion (A): Sultan Zain-ul-Abidin is revered as "Budshah" (Great King) by Kashmiris. Reason (R): He followed a policy of religious tolerance, abolished Jizya, and promoted indigenous crafts.',
    answer: 'Both A and R are true, and R is the correct explanation of A',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is not the explanation',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    explanation:
      'Sultan Zain-ul-Abidin earned the title "Budshah" specifically because of his enlightened policies of religious tolerance, public welfare, and promotion of Kashmiri handicrafts.',
    tip: 'Budshah’s policies of harmony and craft patronage explain his title.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-5',
    question:
      'Assertion (A): The Treaty of Amritsar (1846) laid the foundation of Dogra rule in Jammu and Kashmir. Reason (R): The British transferred Kashmir and surrounding hilly territories to Raja Gulab Singh under this treaty.',
    answer: 'Both A and R are true, and R is the correct explanation of A',
    options: [
      'Both A and R are true, and R is the correct explanation of A',
      'Both A and R are true, but R is not the explanation',
      'A is true, but R is false',
      'A is false, but R is true',
    ],
    explanation:
      'By transferring the territories between the Indus and Ravi rivers to Raja Gulab Singh for 75 lakh Nanakshahi rupees on 16 March 1846, the Treaty of Amritsar established the Dogra princely state of J&K.',
    tip: 'Treaty of Amritsar (16 March 1846) directly created the Dogra state of J&K.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-6',
    question:
      'Arrange the following periods of rule in Kashmir in correct chronological order: (1) Mughal rule in Kashmir (2) Afghan rule (3) Sikh rule (4) Dogra rule',
    answer: '1-2-3-4',
    options: ['1-2-3-4', '2-1-3-4', '1-3-2-4', '3-1-2-4'],
    explanation:
      'Mughal rule (1586–1752) → Afghan rule (1752–1819) → Sikh rule (1819–1846) → Dogra rule (1846–1947).',
    tip: '1586 (Mughal) → 1752 (Afghan) → 1819 (Sikh) → 1846 (Dogra).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-7',
    question:
      'Arrange the following events in chronological order: (1) Quit Kashmir Movement (2) Treaty of Amritsar (3) Accession to India (4) Article 370 abrogation',
    answer: '2-1-3-4',
    options: ['2-1-3-4', '1-2-3-4', '2-3-1-4', '2-1-4-3'],
    explanation:
      'Treaty of Amritsar (1846) → Quit Kashmir Movement (May 1946) → Accession to India (October 1947) → Abrogation of Article 370 (August 2019).',
    tip: '2 (1846) → 1 (1946) → 3 (1947) → 4 (2019).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-8',
    question:
      'Arrange the following rulers of Kashmir in chronological order: (1) Queen Didda (2) Lalitaditya Muktapida (3) Avantivarman (4) Sultan Zain-ul-Abidin',
    answer: '2-3-1-4',
    options: ['2-3-1-4', '2-1-3-4', '3-2-1-4', '1-2-3-4'],
    explanation:
      'Lalitaditya (8th century) → Avantivarman (9th century) → Queen Didda (10th century) → Sultan Zain-ul-Abidin (15th century).',
    tip: 'Karkota (Lalitaditya) → Utpala (Avantivarman) → Didda → Shah Mir (Zain-ul-Abidin).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-9',
    question:
      'Arrange the following medieval transitions in Kashmir chronologically: (1) Shah Mir dynasty (2) Chak dynasty (3) Mughal annexation',
    answer: '1-2-3',
    options: ['1-2-3', '2-1-3', '1-3-2', '3-1-2'],
    explanation:
      'Shah Mir dynasty (1339–1561 CE) → Chak dynasty (1561–1586 CE) → Mughal annexation under Akbar (1586 CE).',
    tip: 'Shah Mir (1339) → Chaks (1561) → Mughals (1586).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-10',
    question:
      'Arrange the Dogra rulers of J&K in chronological order: (1) Gulab Singh (2) Ranbir Singh (3) Pratap Singh (4) Hari Singh',
    answer: '1-2-3-4',
    options: ['1-2-3-4', '2-1-3-4', '1-3-2-4', '4-3-2-1'],
    explanation:
      'Gulab Singh (1846–1857) → Ranbir Singh (1857–1885) → Pratap Singh (1885–1925) → Hari Singh (1925–1947).',
    tip: '1-2-3-4 (Gulab → Ranbir → Pratap → Hari).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-11',
    question:
      'Match List I (Rulers) with List II (Works/Contributions): (a) Lalitaditya – 1. Martand Temple; (b) Avantivarman – 2. Flood reforms; (c) Ranbir Singh – 3. Penal Code; (d) Zain-ul-Abidin – 4. Crafts promotion',
    answer: 'a1 b2 c3 d4',
    options: ['a1 b2 c3 d4', 'a2 b1 c4 d3', 'a3 b2 c1 d4', 'a1 b3 c2 d4'],
    explanation:
      'Lalitaditya built Martand Temple (a1); Avantivarman undertook flood reforms with Suyya (b2); Ranbir Singh enacted the Ranbir Penal Code (c3); Zain-ul-Abidin promoted Kashmiri crafts (d4).',
    tip: 'All four pairs (a1, b2, c3, d4) are directly matched.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-12',
    question:
      'Match List I (Places in J&K) with List II (Significance): (a) Verinag – 1. Jhelum source; (b) Dachigam – 2. Hangul; (c) Wular – 3. Freshwater lake; (d) Charar-e-Sharif – 4. Nund Rishi',
    answer: 'a1 b2 c3 d4',
    options: ['a1 b2 c3 d4', 'a2 b1 c3 d4', 'a1 b3 c2 d4', 'a4 b2 c1 d3'],
    explanation:
      'Verinag is the source of the Jhelum (a1); Dachigam National Park protects the Hangul (b2); Wular is India’s largest freshwater lake (c3); Charar-e-Sharif is the shrine of Nund Rishi (d4).',
    tip: 'Verinag–Jhelum, Dachigam–Hangul, Wular–Freshwater lake, Charar-e-Sharif–Nund Rishi.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-13',
    question:
      'Match List I (Personalities) with List II (Identity): (a) Lal Ded – 1. Mystic poetess (Vakhs); (b) Nund Rishi – 2. Sheikh Noor-ud-Din; (c) Habba Khatoon – 3. Nightingale of Kashmir (Lol poetess); (d) Kalhana – 4. Author of Rajatarangini (Historian)',
    answer: 'a1 b2 c3 d4',
    options: ['a1 b2 c3 d4', 'a2 b1 c3 d4', 'a1 b3 c2 d4', 'a4 b2 c1 d3'],
    explanation:
      'Lal Ded was a 14th-century mystic poetess (a1); Nund Rishi is Sheikh Noor-ud-Din (b2); Habba Khatoon was a 16th-century lyric poetess (c3); Kalhana was the 12th-century historian (d4).',
    tip: 'All four historical personalities match a1 b2 c3 d4.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-14',
    question:
      'Consider the following statements: (1) Rajatarangini is written in Sanskrit. (2) Kalhana wrote it in Persian. (3) It is a primary source of Kashmir history. Which of the statements given above are correct?',
    answer: '1 and 3 only',
    options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    explanation:
      'Kalhana composed Rajatarangini in Sanskrit (not Persian), though it was later translated into Persian by Mulla Ahmad during Sultan Zain-ul-Abidin’s reign.',
    tip: 'Eliminate Statement 2 (Rajatarangini was written in Sanskrit, not Persian).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-15',
    question:
      'Consider the following statements: (1) Article 370 granted temporary special status to J&K. (2) Article 35A was introduced via the Constitution (Application to Jammu and Kashmir) Order, 1954. (3) Both ceased to be operative following the August 2019 constitutional changes. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 only', '1 and 2 only', '1, 2 and 3', '2 only'],
    explanation:
      'Article 370 granted special status, Article 35A was added by the Presidential Order of 14 May 1954, and both were rendered inoperative in August 2019.',
    tip: 'Article 35A = 1954 Presidential Order; Both removed in August 2019.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-16',
    question:
      'Consider the following statements regarding agriculture in Kashmir: (1) Saffron is mainly grown in Pulwama (Pampore). (2) Apple production is high in Shopian and Baramulla. (3) Tea plantations dominate the Kashmir Valley. Which of the statements given above are correct?',
    answer: '1 and 2 only',
    options: ['1 and 2 only', '2 and 3 only', '1 only', 'All'],
    explanation:
      'Saffron is concentrated in Pampore (Pulwama) and apples dominate Shopian, Baramulla, and Anantnag. Tea plantations do not dominate the Kashmir Valley.',
    tip: 'Eliminate Statement 3 (Saffron and Apples dominate Kashmir horticulture, not tea).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-17',
    question:
      'Consider the following statements: (1) Dachigam National Park protects the Hangul. (2) Hangul (Kashmir Stag) is the UT animal of J&K. (3) Dachigam is located near Srinagar in the Zabarwan range. Which of the statements given above are correct?',
    answer: '1, 2 and 3',
    options: ['1 and 2 only', '2 and 3 only', '1, 2 and 3', '1 only'],
    explanation:
      'Dachigam National Park, located 22 km from Srinagar in the Zabarwan Range, is famous for protecting the Hangul, the official UT animal of Jammu and Kashmir.',
    tip: 'Dachigam = Zabarwan Range near Srinagar, home of the Hangul.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-18',
    question: 'Which of the following monument-patron pairs is INCORRECTLY matched?',
    answer: 'Rajatarangini — Abhinavagupta',
    options: [
      'Pari Mahal — Dara Shikoh',
      'Martand Sun Temple — Lalitaditya',
      'Shalimar Bagh — Jahangir',
      'Rajatarangini — Abhinavagupta',
    ],
    explanation:
      'Rajatarangini was written by Kalhana, whereas Abhinavagupta authored Tantraloka and Abhinavabharati.',
    tip: 'Rajatarangini = Kalhana; Tantraloka = Abhinavagupta.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-19',
    question:
      'Which Mughal Emperor famously recited Amir Khusrau’s Persian couplet "Agar firdaus bar roo-e zameen ast..." ("If there is a paradise on earth, it is this, it is this, it is this") in praise of Kashmir?',
    answer: 'Jahangir',
    options: ['Akbar', 'Jahangir', 'Shah Jahan', 'Dara Shikoh'],
    explanation:
      'Mughal Emperor Jahangir was deeply enamored with the natural beauty of Kashmir and famously quoted this Persian couplet in its praise.',
    tip: 'Paradise on Earth quote in Kashmir is associated with Emperor Jahangir.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-20',
    question: 'Kashmir formally became a part of the Mughal Empire in which year?',
    answer: '1586',
    options: ['1586', '1526', '1605', '1819'],
    explanation:
      'Akbar’s army led by Qasim Khan entered Srinagar in October 1586 CE, ending Chak rule and integrating Kashmir into the Mughal Empire.',
    tip: '1586 = Mughal conquest of Kashmir.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-21',
    question: 'Afghan rule in Kashmir (1752–1819) started immediately after the:',
    answer: 'Decline of the Mughals',
    options: [
      'Decline of the Mughals',
      'Decline of the Sikhs',
      'Treaty of Amritsar',
      'Quit Kashmir Movement',
    ],
    explanation:
      'In 1752 CE, Ahmad Shah Abdali’s forces ousted the last Mughal governor of Kashmir, Quli Khan, inaugurating 67 years of Afghan rule.',
    tip: 'Afghans replaced the Mughals in Kashmir in 1752.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-22',
    question: 'Sikh rule in Kashmir (which began in 1819) ended in which year?',
    answer: '1846',
    options: ['1819', '1846', '1947', '1752'],
    explanation:
      'Sikh rule in Kashmir ended in March 1846 following the First Anglo-Sikh War and the signing of the Treaty of Lahore and Treaty of Amritsar.',
    tip: 'Sikh rule in Kashmir: 1819 to 1846.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-23',
    question: 'Which of the following destinations is located in the Jammu Division and NOT in the Kashmir Valley?',
    answer: 'Vaishno Devi',
    options: ['Gulmarg', 'Sonamarg', 'Vaishno Devi', 'Pahalgam'],
    explanation:
      'Shri Mata Vaishno Devi shrine is located on the Trikuta Hills in Katra, Reasi district of the Jammu Division, whereas Gulmarg, Sonamarg, and Pahalgam are in the Kashmir Valley.',
    tip: 'Vaishno Devi = Trikuta Hills, Reasi district (Jammu Division).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-24',
    question: 'Which major river flows directly through the heart of Srinagar city?',
    answer: 'Jhelum',
    options: ['Chenab', 'Ravi', 'Jhelum', 'Tawi'],
    explanation:
      'The Jhelum River meanders through the heart of Srinagar city, spanned by historic bridges (Kadals) such as Zero Bridge, Amira Kadal, Habba Kadal, Fateh Kadal, and Zaina Kadal.',
    tip: 'Srinagar is situated on both banks of the Jhelum River.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-25',
    question: 'The Tawi River (Surya Putri) is prominently associated with which city?',
    answer: 'Jammu',
    options: ['Srinagar', 'Jammu', 'Anantnag', 'Kupwara'],
    explanation:
      'Jammu city is situated on the banks of the Tawi River, which originates from the Kailash Kund glacier in Bhaderwah (Doda district).',
    tip: 'Jammu city = Tawi River; Srinagar city = Jhelum River.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-26',
    question: 'Which of the following is the largest freshwater lake in Jammu & Kashmir and India?',
    answer: 'Wular Lake',
    options: ['Dal Lake', 'Mansar Lake', 'Wular Lake', 'Nigeen Lake'],
    explanation:
      'Wular Lake in Bandipora district is the largest freshwater lake in J&K and in India.',
    tip: 'Wular Lake = Largest freshwater lake in India.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-27',
    question: 'The Banihal Tunnel connects which two regions of Jammu and Kashmir?',
    answer: 'Jammu–Srinagar',
    options: ['Jammu–Srinagar', 'Srinagar–Leh', 'Poonch–Rajouri', 'Baramulla–Kupwara'],
    explanation:
      'The Banihal road and railway tunnels traverse the Pir Panjal range to connect the Jammu region with the Kashmir Valley (Srinagar).',
    tip: 'Banihal Tunnel = Jammu–Srinagar link.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-28',
    question: 'In Kashmir, a "Kangri" is traditionally used for:',
    answer: 'Personal heating during winter',
    options: ['Cooking Wazwan', 'Personal heating during winter', 'Wall decoration', 'Religious worship'],
    explanation:
      'Kangri is an earthenware fire-pot woven inside willow wickerwork, filled with glowing charcoal embers for personal warmth in winter.',
    tip: 'Kangri = Personal heating pot.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-29',
    question: 'In the cultural heritage of Kashmir, "Wazwan" refers to:',
    answer: 'Traditional multi-course cuisine',
    options: ['Traditional winter dress', 'Traditional multi-course cuisine', 'Harvest folk dance', 'Sufi shrine'],
    explanation:
      'Wazwan is the traditional multi-course celebratory cuisine of Kashmir.',
    tip: 'Wazwan = Traditional Kashmiri multi-course feast.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-30',
    question: 'The traditional "Rouf" folk dance of Kashmir is performed mainly by:',
    answer: 'Women during festivals and weddings',
    options: [
      'Men during autumn harvest',
      'Women during festivals and weddings',
      'Sufis inside shrines',
      'Nomadic shepherds only',
    ],
    explanation:
      'Rouf is performed by Kashmiri women lined up in two facing rows with interlocked arms and rhythmic footwork (Chakri/Rouf songs) during Eid, weddings, and spring celebrations.',
    tip: 'Rouf = Performed by women; Dumhal = Performed by Wattal men.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-31',
    question: 'The "Dumhal" folk dance is exclusively associated with which community of J&K?',
    answer: 'Wattal tribe',
    options: ['Gujjars', 'Wattal tribe', 'Dogras', 'Kashmiri Pandits'],
    explanation:
      'Men of the Wattal tribe perform the Dumhal dance wearing colourful robes and tall conical capsstudded with beads and shells.',
    tip: 'Dumhal = Wattal tribe.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-32',
    question: 'Betaab Valley is located in which tourist sub-region of Anantnag district?',
    answer: 'Pahalgam',
    options: ['Gulmarg', 'Pahalgam', 'Sonamarg', 'Srinagar'],
    explanation:
      'Betaab Valley is located along the Lidder River near Pahalgam in Anantnag district.',
    tip: 'Betaab Valley = Pahalgam (Anantnag).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-33',
    question: 'Aharbal in Kulgam district is famous as a:',
    answer: 'Scenic waterfall on the Vishav River',
    options: ['Ancient temple ruin', 'Scenic waterfall on the Vishav River', 'Winter skiing resort', 'Sufi shrine'],
    explanation:
      'Aharbal is famous for its powerful waterfall on the Vishav River, earning it the nickname "Niagara Falls of Kashmir".',
    tip: 'Aharbal = Waterfall in Kulgam.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-34',
    question: 'The alpine tourist resort of Doodhpathri is located in which district of Kashmir?',
    answer: 'Budgam',
    options: ['Budgam', 'Shopian', 'Jammu', 'Kupwara'],
    explanation:
      'Doodhpathri ("Valley of Milk") is situated in Khansahib tehsil of Budgam district.',
    tip: 'Doodhpathri = Budgam district.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-35',
    question: 'Yusmarg ("Meadow of Jesus") in Budgam district is famous as an:',
    answer: 'Alpine meadow',
    options: ['Alpine meadow', 'Medieval fort', 'Hindu shrine', 'Karakoram glacier'],
    explanation:
      'Yusmarg is a scenic alpine meadow in Budgam district located on the banks of the Doodhganga river.',
    tip: 'Yusmarg = Alpine meadow in Budgam.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-36',
    question: 'Which one of the following historical pairs is CORRECTLY matched?',
    answer: 'Gulab Singh — Treaty of Amritsar (1846)',
    options: [
      'Hari Singh — Founder of Dogra rule',
      'Gulab Singh — Treaty of Amritsar (1846)',
      'Ranbir Singh — Article 370',
      'Sheikh Abdullah — Treaty of Lahore',
    ],
    explanation:
      'Maharaja Gulab Singh signed the Treaty of Amritsar with the British on 16 March 1846 and founded the Dogra dynasty in J&K.',
    tip: 'Gulab Singh = Founder of Dogra rule & Treaty of Amritsar (1846).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-37',
    question:
      'What is the correct chronological sequence of the following developments? (1) Formation of All J&K Muslim Conference (2) Conversion into National Conference (3) Adoption of Naya Kashmir Manifesto',
    answer: '1-2-3',
    options: ['1-2-3', '2-1-3', '3-2-1', '2-3-1'],
    explanation:
      'All J&K Muslim Conference was formed in 1932 (1), renamed National Conference in 1939 (2), and adopted the Naya Kashmir Manifesto in 1944 (3).',
    tip: '1932 (Muslim Conference) → 1939 (National Conference) → 1944 (Naya Kashmir).',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-38',
    question:
      'Which of the following are official languages of the Union Territory of Jammu & Kashmir under the J&K Official Languages Act, 2020? (1) Kashmiri (2) Dogri (3) Hindi (4) Urdu (5) English',
    answer: '1, 2, 3, 4 and 5',
    options: ['1, 2, 3 and 4 only', '1, 2, 4 and 5 only', '1, 2, 3, 4 and 5', '2, 3 and 4 only'],
    explanation:
      'All five languages—Kashmiri, Dogri, Hindi, Urdu, and English—are official languages of the Union Territory of Jammu & Kashmir under the 2020 Act.',
    tip: 'All 5 (Kashmiri, Dogri, Hindi, Urdu, English) are official languages of J&K UT.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-39',
    question: 'Which district of Jammu and Kashmir is world-famous for its Karewa saffron fields?',
    answer: 'Pulwama',
    options: ['Kulgam', 'Pulwama', 'Bandipora', 'Kupwara'],
    explanation:
      'Pampore in Pulwama district is the premier center of GI-tagged Kashmiri saffron cultivation.',
    tip: 'Saffron = Pampore (Pulwama).',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-40',
    question: 'Kashmiri Saffron received the Geographical Indication (GI) tag because of its:',
    answer: 'Both A and B (Deep crimson color, high crocin aroma, and unique Karewa climate/soil)',
    options: [
      'Deep crimson color and strong aroma (high crocin & safranal)',
      'Unique high-altitude Karewa soil and agro-climatic conditions',
      'Both A and B (Deep crimson color, high crocin aroma, and unique Karewa climate/soil)',
      'None of the above',
    ],
    explanation:
      'Kashmiri Saffron (grown at 1,600–1,800 m altitude on Karewa soils) received the GI tag in 2020 for its long thick stigmas, natural deep red color (high crocin content), rich aroma (safranal), and bitter-sweet flavor (picrocrocin).',
    tip: 'Kashmiri Saffron GI tag (2020) = High crocin content + unique Karewa soil.',
    difficulty: 'intermediate',
  },
  {
    id: 'jkh-s3-41',
    question: 'In which district of Jammu & Kashmir are the ruins of the ancient Martand Sun Temple located?',
    answer: 'Anantnag',
    options: ['Anantnag', 'Pulwama', 'Baramulla', 'Ganderbal'],
    explanation:
      'The 8th-century Martand Sun Temple built by Lalitaditya Muktapida is located near Mattan in Anantnag district.',
    tip: 'Martand Sun Temple = Mattan, Anantnag district.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-42',
    question: 'The famous shrine of Charar-e-Sharif (dedicated to Sheikh Noor-ud-Din Wali / Nund Rishi) is located in which district?',
    answer: 'Budgam',
    options: ['Srinagar', 'Budgam', 'Anantnag', 'Shopian'],
    explanation:
      'Charar-e-Sharif is a historic Sufi shrine and town located in Budgam district.',
    tip: 'Charar-e-Sharif = Budgam district.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-43',
    question: 'On the banks of which lake is the white-marble Hazratbal Shrine located?',
    answer: 'Dal Lake',
    options: ['Wular Lake', 'Dal Lake', 'Mansbal Lake', 'Mansar Lake'],
    explanation:
      'Hazratbal Shrine stands on the northern shore of Dal Lake in Srinagar.',
    tip: 'Hazratbal Shrine = Dal Lake.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-44',
    question: 'In which month and year did Maharaja Hari Singh sign the Instrument of Accession of J&K with India?',
    answer: 'October 1947',
    options: ['August 1947', 'October 1947', 'January 1948', 'November 1949'],
    explanation:
      'Maharaja Hari Singh signed the Instrument of Accession on 26 October 1947.',
    tip: '26 October 1947 = Instrument of Accession.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-45',
    question: 'Where is the principal shrine (Ziyarat) of saint-poet Nund Rishi (Sheikh Noor-ud-Din Noorani) situated?',
    answer: 'Charar-e-Sharif',
    options: ['Charar-e-Sharif', 'Aishmuqam', 'Hazratbal', 'Khanqah-e-Moula'],
    explanation:
      'The shrine of Nund Rishi is located at Charar-e-Sharif in Budgam district (while Aishmuqam is the shrine of his disciple Baba Zain-ud-Din Wali).',
    tip: 'Nund Rishi = Charar-e-Sharif; Baba Zain-ud-Din = Aishmuqam.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-46',
    question: 'Which city serves as the summer capital of the Union Territory of Jammu and Kashmir?',
    answer: 'Srinagar',
    options: ['Jammu', 'Srinagar', 'Anantnag', 'Baramulla'],
    explanation:
      'Srinagar serves as the summer capital of J&K UT (May to October), while Jammu serves as the winter capital (November to April).',
    tip: 'Summer capital = Srinagar; Winter capital = Jammu.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-47',
    question: 'Which city serves as the winter capital of the Union Territory of Jammu and Kashmir?',
    answer: 'Jammu',
    options: ['Srinagar', 'Jammu', 'Udhampur', 'Kathua'],
    explanation:
      'Jammu ("City of Temples") is the winter capital of the Union Territory of Jammu and Kashmir.',
    tip: 'Winter capital = Jammu.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-48',
    question: 'What was the ancient Rigvedic and Sanskrit name of the Jhelum River?',
    answer: 'Vitasta',
    options: ['Asikni', 'Vitasta', 'Vipasha', 'Chandrabhaga'],
    explanation:
      'The Jhelum River was known as Vitasta in Vedic and Sanskrit literature and as Hydaspes to the ancient Greeks.',
    tip: 'Vitasta = Jhelum.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-49',
    question: 'Which famous Mughal garden and spring in Anantnag district is the source of the Jhelum River?',
    answer: 'Verinag',
    options: ['Achabal', 'Verinag', 'Kokernag', 'Chashme Shahi'],
    explanation:
      'Verinag spring in Anantnag district, enclosed in an octagonal stone basin built by Emperor Jahangir in 1620 CE, is the main source of the Jhelum River.',
    tip: 'Verinag octagonal arcade was built by Jahangir in 1620.',
    difficulty: 'beginner',
  },
  {
    id: 'jkh-s3-50',
    question: 'Which is the largest district by geographical area in the Union Territory of Jammu and Kashmir?',
    answer: 'Kishtwar',
    options: ['Doda', 'Anantnag', 'Baramulla', 'Kishtwar'],
    explanation:
      'Covering approximately 7,737 sq. km, Kishtwar is the largest district by area in the Union Territory of Jammu and Kashmir.',
    tip: 'Largest district of J&K UT by area = Kishtwar; Smallest by area = Ganderbal/Shopian.',
    difficulty: 'intermediate',
  },
];

export const JK_HISTORY_PDF_150_QUESTIONS_HISTORY: Flashcard[] = RAW_JK_HISTORY_QUESTIONS.map((q) => ({
  ...q,
  categoryId: 'history',
}));

export const JK_HISTORY_PDF_150_QUESTIONS_GENERAL: Flashcard[] = RAW_JK_HISTORY_QUESTIONS.map((q) => ({
  ...q,
  id: `gen-${q.id}`,
  categoryId: 'general',
}));
