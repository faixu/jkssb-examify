import { Flashcard } from '../../types';
import { FREEDOM_TIMELINE_PDF_QUESTIONS } from './freedomTimelineQuestions';
import { HISTORY_JKSSB_PDF_QUESTIONS } from './historyJkssbPdfQuestions';
import { FREEDOM_STRUGGLE_PDF_QUESTIONS } from './freedomStrugglePdfQuestions';

export const GENERAL_QUESTIONS: Flashcard[] = [
  ...FREEDOM_TIMELINE_PDF_QUESTIONS,
  ...HISTORY_JKSSB_PDF_QUESTIONS,
  ...FREEDOM_STRUGGLE_PDF_QUESTIONS,
  {
    "id": "gen-1",
    "categoryId": "general",
    "question": "Who wrote \"Rajatarangini\", the earliest historical chronicle of the kings of Kashmir, composed in Sanskrit in the 12th century?",
    "answer": "Kalhana",
    "options": [
      "Kalhana",
      "Bilhana",
      "Abhinavagupta",
      "Jonaraja"
    ],
    "explanation": "Kalhana wrote the celebrated chronicle \"Rajatarangini\" (The River of Kings) between 1148 and 1150 CE, providing a systematic history of Kashmir.",
    "tip": "Rajatarangini = Kalhana (12th Century).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-2",
    "categoryId": "general",
    "question": "Which prominent ruler of the Karkota dynasty built the famous Martand Sun Temple in Anantnag, Kashmir?",
    "answer": "Lalitaditya Muktapida",
    "options": [
      "Lalitaditya Muktapida",
      "Durlabhavardhana",
      "Avantivarman",
      "Harsha"
    ],
    "explanation": "Lalitaditya Muktapida (8th century CE), the most powerful ruler of Kashmir’s Karkota dynasty, constructed the magnificent Martand Sun Temple.",
    "tip": "Martand Sun Temple = Lalitaditya Muktapida.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-3",
    "categoryId": "general",
    "question": "Which medieval Sultan of Kashmir was popularly known as \"Budshah\" (Great King) for his religious tolerance, administrative reforms, and patronage of arts?",
    "answer": "Sultan Zain-ul-Abidin",
    "options": [
      "Sultan Zain-ul-Abidin",
      "Sultan Sikandar",
      "Shams-ud-din Shah Mir",
      "Yousuf Shah Chak"
    ],
    "explanation": "Sultan Zain-ul-Abidin (1420–1470 CE) earned the title \"Budshah\" for recalling exiled Brahmins, establishing peace, developing handicrafts (carpets, paper mache), and building Zaina Lank island on Wular Lake.",
    "tip": "Budshah = Sultan Zain-ul-Abidin.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-4",
    "categoryId": "general",
    "question": "The State of Jammu and Kashmir was founded by Maharaja Gulab Singh in 1846 following which historic treaty signed with the British East India Company?",
    "answer": "Treaty of Amritsar",
    "options": [
      "Treaty of Amritsar",
      "Treaty of Lahore",
      "Treaty of Srinagar",
      "Treaty of Rawalpindi"
    ],
    "explanation": "Signed on 16 March 1846, the Treaty of Amritsar transferred Kashmir to Maharaja Gulab Singh for the sum of 75 lakh Nanakshahi rupees, establishing the princely state of Jammu & Kashmir.",
    "tip": "Treaty of Amritsar (1846) = Gulab Singh founded J&K.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-5",
    "categoryId": "general",
    "question": "On which date did Maharaja Hari Singh sign the historic Instrument of Accession, acceding Jammu and Kashmir to the Dominion of India?",
    "answer": "26 October 1947",
    "options": [
      "26 October 1947",
      "15 August 1947",
      "26 January 1950",
      "5 August 2019"
    ],
    "explanation": "Facing tribal invasion backed by Pakistan, Maharaja Hari Singh signed the Instrument of Accession on 26 October 1947, which was accepted by Governor-General Lord Mountbatten on 27 October 1947.",
    "tip": "Accession Day of J&K = 26 October 1947.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-6",
    "categoryId": "general",
    "question": "Who was the ancient engineer/minister during the reign of King Avantivarman credited with dredging the river Jhelum to control devastating floods in the Kashmir Valley?",
    "answer": "Suyya",
    "options": [
      "Suyya",
      "Kshemendra",
      "Damodaragupta",
      "Utpala"
    ],
    "explanation": "Suyya, the master engineer under King Avantivarman (9th century CE), regulated the course of the Vitasta (Jhelum) river, draining marshes and reclaiming land for agriculture (the modern town of Sopore was originally Suyyapur).",
    "tip": "Suyya dredged Jhelum; Sopore was named Suyyapur.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-7",
    "categoryId": "general",
    "question": "Who was the first Prime Minister of Jammu and Kashmir under the Jammu and Kashmir Constitution before the designation was changed to Chief Minister in 1965?",
    "answer": "Mehr Chand Mahajan (later Sheikh Mohammad Abdullah)",
    "options": [
      "Mehr Chand Mahajan (later Sheikh Mohammad Abdullah)",
      "Ghulam Mohammed Sadiq",
      "Bakshi Ghulam Mohammad",
      "Karan Singh"
    ],
    "explanation": "Mehr Chand Mahajan was the Prime Minister during accession in 1947, followed by Sheikh Abdullah in 1948. In 1965, the 6th amendment to J&K Constitution replaced the titles \"Sadar-i-Riyasat\" and \"Prime Minister\" with \"Governor\" and \"Chief Minister\".",
    "tip": "Titles changed to Governor & Chief Minister in 1965.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-8",
    "categoryId": "general",
    "question": "Who built the historic Hari Parbat Fort (Kohi-Maran) rampart wall surrounding Srinagar city?",
    "answer": "Mughal Emperor Akbar",
    "options": [
      "Mughal Emperor Akbar",
      "Emperor Jahangir",
      "Atta Mohammad Khan",
      "Maharaja Gulab Singh"
    ],
    "explanation": "Emperor Akbar built the outer fortification wall around Hari Parbat hill in 1590 CE and founded the walled city of Nagar Nagar. The current fort atop the hill was later fortified by the Afghan governor Atta Mohammad Khan in the early 1800s.",
    "tip": "Outer wall by Akbar; summit fort strengthened by Afghan governor.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-9",
    "categoryId": "general",
    "question": "On which date did the Jammu and Kashmir Reorganisation Act, 2019 formally come into force, bifurcating the state into two Union Territories?",
    "answer": "31 October 2019",
    "options": [
      "31 October 2019",
      "5 August 2019",
      "9 August 2019",
      "26 January 2020"
    ],
    "explanation": "The Act came into force on 31 October 2019 (celebrated as National Unity Day / Rashtriya Ekta Diwas on Sardar Vallabhbhai Patel’s birth anniversary).",
    "tip": "J&K Reorganisation in force: 31 October 2019 (National Unity Day).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-10",
    "categoryId": "general",
    "question": "Under Section 13 of the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir is administered under which Article of the Indian Constitution (similar to Puducherry)?",
    "answer": "Article 239A",
    "options": [
      "Article 239A",
      "Article 239AA",
      "Article 370",
      "Article 356"
    ],
    "explanation": "Article 239A provides the legislative framework for the Union Territory of Jammu and Kashmir, giving it a Legislative Assembly with a Chief Minister and Council of Ministers (Article 239AA applies to Delhi).",
    "tip": "J&K UT follows Article 239A (like Puducherry).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-11",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, which districts formed the new Union Territory of Ladakh?",
    "answer": "Leh and Kargil",
    "options": [
      "Leh and Kargil",
      "Leh, Kargil and Kishtwar",
      "Leh and Zanskar",
      "Leh, Kargil and Doda"
    ],
    "explanation": "The UT of Ladakh was created comprising two districts: Leh and Kargil, and does not have a legislative assembly.",
    "tip": "UT of Ladakh consists of Leh & Kargil without assembly.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-12",
    "categoryId": "general",
    "question": "Who was sworn in as the first Lieutenant Governor of the Union Territory of Jammu and Kashmir on 31 October 2019?",
    "answer": "Girish Chandra Murmu",
    "options": [
      "Girish Chandra Murmu",
      "Manoj Sinha",
      "Radha Krishna Mathur",
      "Satya Pal Malik"
    ],
    "explanation": "Girish Chandra Murmu was appointed the first Lieutenant Governor of J&K UT. (Radha Krishna Mathur was the first LG of Ladakh; Manoj Sinha succeeded Murmu in August 2020).",
    "tip": "1st LG of J&K = G. C. Murmu; 1st LG of Ladakh = R. K. Mathur.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-13",
    "categoryId": "general",
    "question": "How many Lok Sabha seats are allocated to the Union Territory of Jammu and Kashmir under the J&K Reorganisation Act, 2019?",
    "answer": "5 seats",
    "options": [
      "5 seats",
      "6 seats",
      "4 seats",
      "7 seats"
    ],
    "explanation": "Out of the original 6 Lok Sabha seats of undivided J&K state, 5 seats are allocated to J&K UT (Baramulla, Srinagar, Anantnag-Rajouri, Udhampur, Jammu) and 1 seat to Ladakh UT.",
    "tip": "5 Lok Sabha seats for J&K UT; 1 for Ladakh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-14",
    "categoryId": "general",
    "question": "What is the ancient Sanskrit name of the river Jhelum, which is the lifeline of the Kashmir Valley?",
    "answer": "Vitasta",
    "options": [
      "Vitasta",
      "Asikni",
      "Purushni",
      "Vipasa"
    ],
    "explanation": "The Vedic/Sanskrit name of Jhelum is Vitasta (called Hydaspes by ancient Greeks). It originates from the spring at Verinag at the foothills of the Pir Panjal range.",
    "tip": "Jhelum = Vitasta (originates at Verinag).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-15",
    "categoryId": "general",
    "question": "What is the Vedic name of the Chenab River, which flows through the Jammu region and hosts major hydroelectric power projects?",
    "answer": "Asikni (Chandrabhaga)",
    "options": [
      "Asikni (Chandrabhaga)",
      "Shatadru",
      "Iravati",
      "Vitasta"
    ],
    "explanation": "The Chenab is known as Asikni in the Vedas and is formed by the confluence of Chandra and Bhaga rivers at Tandi in Himachal Pradesh.",
    "tip": "Chenab = Asikni / Chandrabhaga.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-16",
    "categoryId": "general",
    "question": "Which river, known mythologically as the daughter of the Sun God (\"Suryaputri\"), flows through the city of Jammu?",
    "answer": "Tawi River",
    "options": [
      "Tawi River",
      "Ravi River",
      "Chenab River",
      "Basantar River"
    ],
    "explanation": "The Tawi River originates from the Kali Kundi glacier in Bhaderwah and flows through Jammu city, dividing it into Old and New Jammu. Mythologically it is called Suryaputri.",
    "tip": "Tawi = Suryaputri (flows through Jammu).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-17",
    "categoryId": "general",
    "question": "Which is the largest freshwater lake in India, located in the Bandipora district of Jammu and Kashmir?",
    "answer": "Wular Lake",
    "options": [
      "Wular Lake",
      "Dal Lake",
      "Manasbal Lake",
      "Pangong Tso"
    ],
    "explanation": "Wular Lake is the largest freshwater lake in India, formed by tectonic activity and fed by the Jhelum River. It is a designated Ramsar wetland site.",
    "tip": "Wular Lake = Largest freshwater lake in India (tectonic origin).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-18",
    "categoryId": "general",
    "question": "Which lake in Kashmir is renowned as the deepest lake in the Kashmir Valley and famous for its water lilies (lotus blooms)?",
    "answer": "Manasbal Lake",
    "options": [
      "Manasbal Lake",
      "Dal Lake",
      "Gangabal Lake",
      "Sheshnag Lake"
    ],
    "explanation": "Manasbal Lake in Ganderbal district has a maximum depth of approximately 13 meters (43 ft), making it the deepest lake in Kashmir.",
    "tip": "Manasbal = Deepest lake in Kashmir Valley.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-19",
    "categoryId": "general",
    "question": "Dachigam National Park, located near Srinagar, is the sole surviving habitat of which endangered critically endangered animal species?",
    "answer": "Hangul (Kashmir Stag)",
    "options": [
      "Hangul (Kashmir Stag)",
      "Snow Leopard",
      "Markhor",
      "Chiru (Tibetan Antelope)"
    ],
    "explanation": "Dachigam National Park is celebrated worldwide as the primary conservation haven for the Hangul (Cervus hanglu hanglu), the state animal of Jammu and Kashmir.",
    "tip": "Dachigam = Hangul (Kashmir Stag).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-20",
    "categoryId": "general",
    "question": "The twin lakes \"Mansar and Surinsar\" are located in which division of Jammu and Kashmir and are recognized as Ramsar wetland sites?",
    "answer": "Jammu Division",
    "options": [
      "Jammu Division",
      "Kashmir Division",
      "Pir Panjal Division",
      "Chenab Valley Division"
    ],
    "explanation": "The Surinsar-Mansar Lakes in Jammu region are composite freshwater lakes recognized under the Ramsar Convention for their rich biodiversity.",
    "tip": "Mansar-Surinsar = Ramsar wetland in Jammu.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-21",
    "categoryId": "general",
    "question": "Which mountain pass connects the Kashmir Valley with the Jammu division across the Pir Panjal mountain range?",
    "answer": "Banihal Pass (Jawahar Tunnel)",
    "options": [
      "Banihal Pass (Jawahar Tunnel)",
      "Zoji La Pass",
      "Khardung La Pass",
      "Burzil Pass"
    ],
    "explanation": "Banihal Pass in the Pir Panjal range links Jammu with Srinagar. The historic Jawahar Tunnel and the new double-tube Qazigund-Banihal tunnel bypass this route.",
    "tip": "Banihal connects Jammu & Srinagar; Zoji La connects Srinagar & Leh.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-22",
    "categoryId": "general",
    "question": "Which plateau (lacustrine geological formation) in Kashmir, particularly in the Pampore region, is globally renowned for cultivating GI-tagged Saffron?",
    "answer": "Karewas (Wudur)",
    "options": [
      "Karewas (Wudur)",
      "Bhabhar",
      "Terai",
      "Doab"
    ],
    "explanation": "Karewas are lacustrine (lake-bed silt and clay) plateau deposits in the Kashmir Valley. Pampore Karewas produce the prized Kashmiri Saffron (Crocus sativus), which holds a Geographical Indication (GI) tag.",
    "tip": "Saffron is grown in Karewa soils in Pampore.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-23",
    "categoryId": "general",
    "question": "On which river are the major hydroelectric power projects \"Salal\", \"Baglihar\", and \"Dul Hasti\" located?",
    "answer": "Chenab River",
    "options": [
      "Chenab River",
      "Jhelum River",
      "Indus River",
      "Ravi River"
    ],
    "explanation": "Salal (Reasi), Baglihar (Ramban), and Dul Hasti (Kishtwar) are all run-of-the-river hydroelectric power stations engineered along the Chenab River.",
    "tip": "Salal, Baglihar & Dul Hasti are on the Chenab River.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-24",
    "categoryId": "general",
    "question": "Kashmir is widely known as the \"Fruit Bowl of India\" because it accounts for over 70% of India’s production of which fruit?",
    "answer": "Apple",
    "options": [
      "Apple",
      "Mango",
      "Banana",
      "Orange"
    ],
    "explanation": "Jammu & Kashmir is the leading producer of temperate fruits in India, contributing over 70% of the nation's total apple output (e.g., Ambri, Delicious).",
    "tip": "J&K leads India in apple and walnut production.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-25",
    "categoryId": "general",
    "question": "Pashmina wool, famed for luxury shawls, is derived from the undercoat fleece of which goat breed indigenous to the high-altitude Changthang plateau?",
    "answer": "Changthangi (Capra hircus) goat",
    "options": [
      "Changthangi (Capra hircus) goat",
      "Merino Sheep",
      "Angora Rabbit",
      "Jamnapari Goat"
    ],
    "explanation": "Pashmina is the fine undercoat hair of the Changthangi goat (Capra hircus laniger) raised by the nomadic Changpa people of the high-altitude Himalayan plateau.",
    "tip": "Pashmina = Changthangi goat.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-26",
    "categoryId": "general",
    "question": "Which traditional folk dance of Kashmir is performed by women in parallel rows on festive occasions like Eid, weddings, and Ramzan?",
    "answer": "Rouf",
    "options": [
      "Rouf",
      "Kud",
      "Dumhal",
      "Bhand Pather"
    ],
    "explanation": "Rouf is the quintessential folk dance of Kashmir, performed by women facing each other in two lines linked by their arms, moving forward and backward in rhythm.",
    "tip": "Rouf = Kashmiri traditional women folk dance.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-27",
    "categoryId": "general",
    "question": "Which traditional folk theatre of Kashmir combines satire, comedy, and social commentary with musical instruments like the Surnai and Dhol?",
    "answer": "Bhand Pather",
    "options": [
      "Bhand Pather",
      "Kud dance",
      "Chakri",
      "Hafiza dance"
    ],
    "explanation": "Bhand Pather is the centuries-old traditional satirical folk drama of Kashmir, where traditional artists (Bhands) satirize social evils and administrative corruption.",
    "tip": "Bhand Pather = Traditional satirical folk theatre of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-28",
    "categoryId": "general",
    "question": "What is the portable earthen brazier encased in woven wicker willow used by people in Kashmir to keep warm inside their \"Phiran\" called?",
    "answer": "Kangri (Kangar)",
    "options": [
      "Kangri (Kangar)",
      "Samovar",
      "Pashmina",
      "Daan"
    ],
    "explanation": "The Kangri is an earthen pot filled with burning charcoal and covered with wicker work, carried inside the traditional loose woolen cloak (Phiran).",
    "tip": "Kangri = Traditional Kashmiri wicker heater.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-29",
    "categoryId": "general",
    "question": "The multi-course feast that represents the pinnacle of Kashmiri formal hospitality and culinary art is known as:",
    "answer": "Wazwan",
    "options": [
      "Wazwan",
      "Harissa",
      "Noon Chai",
      "Kahwa"
    ],
    "explanation": "Wazwan is a royal 36-course banquet prepared by master chefs (Vastas), featuring dishes like Rista, Rogan Josh, Gushtaba, and Tabak Maaz, served on a large copper platter (Traemi).",
    "tip": "Wazwan = Formal 36-course Kashmiri feast.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-30",
    "categoryId": "general",
    "question": "Which Mughal Garden in Srinagar was built by Emperor Jahangir for his beloved wife Empress Nur Jahan in 1619 CE?",
    "answer": "Shalimar Bagh",
    "options": [
      "Shalimar Bagh",
      "Nishat Bagh",
      "Chashme Shahi",
      "Pari Mahal"
    ],
    "explanation": "Shalimar Bagh (\"Abode of Love\") was constructed by Jahangir in 1619. Nishat Bagh was built by Asif Khan (Nur Jahan’s brother) in 1633, and Chashme Shahi was commissioned by Shah Jahan in 1632.",
    "tip": "Shalimar Bagh was built by Jahangir for Nur Jahan.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-31",
    "categoryId": "general",
    "question": "The holy shrine of Mata Vaishno Devi is located on which sacred mountain peak in the Trikuta range near Katra?",
    "answer": "Trikuta Hills",
    "options": [
      "Trikuta Hills",
      "Harmukh Peak",
      "Kolahoi Peak",
      "Shankaracharya Hill"
    ],
    "explanation": "The holy cave shrine of Mata Vaishno Devi is situated at an altitude of approximately 5,200 feet on the Trikuta hills in Reasi district, near Katra.",
    "tip": "Mata Vaishno Devi shrine is on Trikuta Hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-32",
    "categoryId": "general",
    "question": "Which world-famous meadow in Baramulla district is renowned as the premier skiing resort of India and features one of the highest cable cars (Gondola) in the world?",
    "answer": "Gulmarg (Meadow of Flowers)",
    "options": [
      "Gulmarg (Meadow of Flowers)",
      "Sonamarg",
      "Pahalgam",
      "Yusmarg"
    ],
    "explanation": "Gulmarg, originally called \"Gaurimarg\" before Sultan Yousuf Shah Chak renamed it Gulmarg, is famous for its winter sports and the Kongdoori-Apharwat Gondola.",
    "tip": "Gulmarg = Premier skiing resort with Gondola.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-33",
    "categoryId": "general",
    "question": "Pahalgam, situated on the banks of the Lidder River in Anantnag, is known by which popular epithet and serves as the traditional base camp for the Amarnath Yatra?",
    "answer": "Valley of Shepherds",
    "options": [
      "Valley of Shepherds",
      "Meadow of Gold",
      "Valley of Flowers",
      "Chhota Kashmir"
    ],
    "explanation": "Pahalgam literally translates to the \"Village of Shepherds\". It is situated on the Lidder River and leads to Betaab Valley, Aru Valley, and the holy Amarnath Cave.",
    "tip": "Pahalgam = Valley of Shepherds; Sonamarg = Meadow of Gold.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-34",
    "categoryId": "general",
    "question": "Which ancient temple in Srinagar atop the Gopadari Hill is dedicated to Lord Shiva and visited by Adi Shankaracharya in the 8th century?",
    "answer": "Shankaracharya Temple (Jyeshtheshwara Temple)",
    "options": [
      "Shankaracharya Temple (Jyeshtheshwara Temple)",
      "Kheer Bhawani",
      "Martand Temple",
      "Awantipora Temple"
    ],
    "explanation": "The Shankaracharya Temple sits on the Takht-e-Suleiman / Shankaracharya hill overlooking Srinagar, dating back to King Gopaditya with later restorations.",
    "tip": "Shankaracharya Temple overlooks Dal Lake.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-35",
    "categoryId": "general",
    "question": "Which historic fort in Jammu, built on the left bank of the Tawi River by Raja Bahu Lochan, houses the famous \"Bawe Wali Mata\" temple?",
    "answer": "Bahu Fort",
    "options": [
      "Bahu Fort",
      "Mubarak Mandi",
      "Amar Mahal Palace",
      "Akhnoor Fort"
    ],
    "explanation": "Bahu Fort was built by Raja Bahu Lochan over 3,000 years ago and renovated by the Dogra kings. Inside stands the shrine of Goddess Kali (Bawe Wali Mata).",
    "tip": "Bahu Fort = Bawe Wali Mata on bank of Tawi.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-36",
    "categoryId": "general",
    "question": "Who was the Governor-General of India when the Indian National Congress (INC) was founded in Bombay in December 1885?",
    "answer": "Lord Dufferin",
    "options": [
      "Lord Dufferin",
      "Lord Ripon",
      "Lord Curzon",
      "Lord Lytton"
    ],
    "explanation": "The Indian National Congress was founded in December 1885 by A.O. Hume during the viceroyalty of Lord Dufferin (1884–1888).",
    "tip": "INC founded 1885 under Lord Dufferin.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-37",
    "categoryId": "general",
    "question": "The famous \"Dandi March\" (Salt March) launched by Mahatma Gandhi in March 1930 signaled the inauguration of which major freedom movement?",
    "answer": "Civil Disobedience Movement",
    "options": [
      "Civil Disobedience Movement",
      "Non-Cooperation Movement",
      "Quit India Movement",
      "Swadeshi Movement"
    ],
    "explanation": "Mahatma Gandhi walked 240 miles from Sabarmati Ashram to Dandi from 12 March to 6 April 1930 to break the Salt Law, launching the Civil Disobedience Movement.",
    "tip": "Dandi March (1930) started the Civil Disobedience Movement.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-38",
    "categoryId": "general",
    "question": "In which year did the infamous Jallianwala Bagh massacre take place in Amritsar under the command of General Dyer?",
    "answer": "1919 (13 April)",
    "options": [
      "1919 (13 April)",
      "1920 (1 August)",
      "1918 (11 November)",
      "1917 (5 May)"
    ],
    "explanation": "On 13 April 1919 (Baisakhi Day), British troops under Reginald Dyer opened fire on unarmed civilians protesting the Rowlatt Act at Jallianwala Bagh.",
    "tip": "Jallianwala Bagh = 13 April 1919.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-39",
    "categoryId": "general",
    "question": "Who gave the stirring patriotic call \"Give me blood, and I will give you freedom!\" to the Indian National Army (Azad Hind Fauj)?",
    "answer": "Netaji Subhas Chandra Bose",
    "options": [
      "Netaji Subhas Chandra Bose",
      "Bhagat Singh",
      "Chandrashekhar Azad",
      "Bal Gangadhar Tilak"
    ],
    "explanation": "Netaji Subhas Chandra Bose gave this iconic slogan in Myanmar (Burma) in 1944 while leading the Azad Hind Fauj.",
    "tip": "\"Give me blood and I will give you freedom\" = Netaji Subhas Chandra Bose.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-40",
    "categoryId": "general",
    "question": "The historic \"Quit India Resolution\" was adopted by the All India Congress Committee (AICC) in August 1942 at which venue in Bombay?",
    "answer": "Gowalia Tank Maidan (August Kranti Maidan)",
    "options": [
      "Gowalia Tank Maidan (August Kranti Maidan)",
      "Shivaji Park",
      "Azad Maidan",
      "Chowpatty Beach"
    ],
    "explanation": "On 8 August 1942, Mahatma Gandhi launched the Quit India Movement from Gowalia Tank Maidan, giving the historic mantra \"Do or Die\" (Karo ya Maro).",
    "tip": "Quit India Movement: 8 August 1942, Gowalia Tank Maidan.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-41",
    "categoryId": "general",
    "question": "Which is the longest National Highway in India, running from Srinagar in Jammu & Kashmir to Kanyakumari in Tamil Nadu?",
    "answer": "National Highway 44 (NH 44)",
    "options": [
      "National Highway 44 (NH 44)",
      "National Highway 48",
      "National Highway 27",
      "National Highway 1"
    ],
    "explanation": "NH 44 is India's longest highway, spanning over 4,112 kilometers from Srinagar to Kanyakumari, passing through 11 states and union territories.",
    "tip": "NH 44 = Srinagar to Kanyakumari (longest in India).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-42",
    "categoryId": "general",
    "question": "The \"Golden Quadrilateral\" highway project connects which four major metropolitan cities of India?",
    "answer": "Delhi, Mumbai, Chennai, and Kolkata",
    "options": [
      "Delhi, Mumbai, Chennai, and Kolkata",
      "Delhi, Bengaluru, Hyderabad, and Kolkata",
      "Mumbai, Ahmedabad, Delhi, and Chandigarh",
      "Chennai, Hyderabad, Nagpur, and Delhi"
    ],
    "explanation": "Launched under Prime Minister Atal Bihari Vajpayee, the Golden Quadrilateral spans 5,846 km linking Delhi, Mumbai, Chennai, and Kolkata.",
    "tip": "Golden Quadrilateral = Delhi, Mumbai, Chennai, Kolkata.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-43",
    "categoryId": "general",
    "question": "The world’s highest railway arch bridge has been constructed across which river in the Reasi district of Jammu and Kashmir as part of the USBRL rail project?",
    "answer": "Chenab River",
    "options": [
      "Chenab River",
      "Jhelum River",
      "Ravi River",
      "Anji Khad"
    ],
    "explanation": "The Chenab Rail Bridge rises 359 meters above the river bed (taller than the Eiffel Tower) in Reasi district, on the Udhampur-Srinagar-Baramulla Rail Link (USBRL).",
    "tip": "Chenab Railway Bridge (Reasi) = World's highest railway arch bridge.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-44",
    "categoryId": "general",
    "question": "India’s National Waterway 1 (NW-1), the longest national waterway in the country, operates along which river stretch?",
    "answer": "Ganga-Bhagirathi-Hooghly river system (Prayagraj to Haldia)",
    "options": [
      "Ganga-Bhagirathi-Hooghly river system (Prayagraj to Haldia)",
      "Brahmaputra river (Dhubri to Sadiya)",
      "Godavari river (Kakinada to Puducherry)",
      "West Coast Canal (Kottapuram to Kollam)"
    ],
    "explanation": "NW-1 runs 1,620 km along the Ganga from Prayagraj in Uttar Pradesh to Haldia in West Bengal.",
    "tip": "NW-1 = Prayagraj to Haldia on the Ganga.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-45",
    "categoryId": "general",
    "question": "Under which Ministry of the Government of India is the decennial Population Census conducted through the Office of the Registrar General and Census Commissioner?",
    "answer": "Ministry of Home Affairs",
    "options": [
      "Ministry of Home Affairs",
      "Ministry of Statistics & Programme Implementation",
      "Ministry of Finance",
      "Ministry of Health and Family Welfare"
    ],
    "explanation": "The Census of India is governed by the Census Act, 1948 and is executed under the Ministry of Home Affairs by the Registrar General & Census Commissioner.",
    "tip": "Census is conducted by Ministry of Home Affairs (RGI).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-46",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which Indian state recorded the highest literacy rate?",
    "answer": "Kerala (94.0%)",
    "options": [
      "Kerala (94.0%)",
      "Mizoram",
      "Goa",
      "Tripura"
    ],
    "explanation": "In the 2011 Census, Kerala ranked first with a literacy rate of 94.00%, followed by Lakshadweep (91.85%) and Mizoram (91.33%).",
    "tip": "Kerala recorded the highest literacy rate in 2011 (94%).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-47",
    "categoryId": "general",
    "question": "What was the overall sex ratio (females per 1,000 males) of India as per the 2011 Population Census?",
    "answer": "943 females per 1,000 males",
    "options": [
      "943 females per 1,000 males",
      "933 females per 1,000 males",
      "950 females per 1,000 males",
      "927 females per 1,000 males"
    ],
    "explanation": "India's overall sex ratio improved from 933 in the 2001 Census to 943 in the 2011 Census.",
    "tip": "2011 Sex Ratio = 943 per 1,000 males.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-48",
    "categoryId": "general",
    "question": "Which state in India registered the highest population density (persons per square kilometer) according to the 2011 Census?",
    "answer": "Bihar (1,106 persons/km²)",
    "options": [
      "Bihar (1,106 persons/km²)",
      "West Bengal",
      "Uttar Pradesh",
      "Kerala"
    ],
    "explanation": "Among Indian states, Bihar had the highest population density of 1,106 persons per km², overtaking West Bengal (1,028 persons per km²). (Among UTs, Delhi was highest).",
    "tip": "Highest density state in 2011 = Bihar.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-49",
    "categoryId": "general",
    "question": "Which river is the longest river in Peninsular India and often referred to as \"Dakshin Ganga\"?",
    "answer": "Godavari",
    "options": [
      "Godavari",
      "Krishna",
      "Narmada",
      "Kaveri"
    ],
    "explanation": "The Godavari originates at Trimbakeshwar near Nashik, Maharashtra, and flows 1,465 km into the Bay of Bengal, making it the longest peninsular river (\"Dakshin Ganga\").",
    "tip": "Godavari = Longest river in Peninsular India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-50",
    "categoryId": "general",
    "question": "Which two major rivers of Peninsular India flow westward through rift valleys and empty into the Arabian Sea without forming deltas?",
    "answer": "Narmada and Tapti",
    "options": [
      "Narmada and Tapti",
      "Mahanadi and Godavari",
      "Krishna and Kaveri",
      "Periyar and Vaigai"
    ],
    "explanation": "The Narmada (flowing between Vindhya and Satpura ranges) and Tapti flow westward through fault rift valleys and form estuaries rather than deltas.",
    "tip": "Narmada and Tapti flow West into Arabian Sea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-51",
    "categoryId": "general",
    "question": "Which is the largest brackish water coastal lagoon in India, located on the east coast in the state of Odisha?",
    "answer": "Chilika Lake",
    "options": [
      "Chilika Lake",
      "Pulicat Lake",
      "Kolleru Lake",
      "Vembanad Lake"
    ],
    "explanation": "Chilika Lake in Odisha is the largest brackish water lagoon in India and second largest in the world, designated as India's first Ramsar wetland site in 1981.",
    "tip": "Chilika = Largest brackish water lagoon in India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-52",
    "categoryId": "general",
    "question": "Which freshwater lake in Manipur is celebrated for its floating phumdis (heterogeneous vegetation masses) and the world’s only floating national park (Keibul Lamjao)?",
    "answer": "Loktak Lake",
    "options": [
      "Loktak Lake",
      "Deepor Beel",
      "Rudrasagar Lake",
      "Umiam Lake"
    ],
    "explanation": "Loktak Lake in Manipur is famous for circular floating biomass islands called \"phumdis\" and hosts Keibul Lamjao National Park, habitat of the Sangai brow-antlered deer.",
    "tip": "Loktak Lake = Floating phumdis & Keibul Lamjao.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-53",
    "categoryId": "general",
    "question": "Which weather phenomenon originating in the Mediterranean region brings crucial winter rainfall to the plains of northwest India and snowfall to Jammu & Kashmir?",
    "answer": "Western Disturbances",
    "options": [
      "Western Disturbances",
      "Southwest Monsoon",
      "Tropical Cyclones",
      "El Niño"
    ],
    "explanation": "Western Disturbances are extratropical storms originating in the Mediterranean that travel eastward via subtropical westerly jet streams, delivering rain and snow beneficial for Rabi crops (wheat).",
    "tip": "Western Disturbances bring winter rain & snow to J&K.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-54",
    "categoryId": "general",
    "question": "Crops sown at the onset of the southwest monsoon (June-July) and harvested in autumn (September-October), such as paddy, maize, and cotton, are classified as:",
    "answer": "Kharif Crops",
    "options": [
      "Kharif Crops",
      "Rabi Crops",
      "Zaid Crops",
      "Cash Crops"
    ],
    "explanation": "Kharif crops depend on summer monsoon rains. In contrast, Rabi crops (wheat, mustard, barley) are sown in winter (October-November) and harvested in spring.",
    "tip": "Kharif = Monsoon / Summer; Rabi = Winter crops.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-55",
    "categoryId": "general",
    "question": "Mawsynram, which holds the world record for receiving the highest average annual rainfall on Earth, is situated in which mountain hills?",
    "answer": "Khasi Hills (Meghalaya)",
    "options": [
      "Khasi Hills (Meghalaya)",
      "Garo Hills",
      "Jaintia Hills",
      "Mikir Hills"
    ],
    "explanation": "Mawsynram in the East Khasi Hills district of Meghalaya receives over 11,800 mm of annual precipitation due to the funnel-shaped relief capturing Bay of Bengal monsoon winds.",
    "tip": "Mawsynram is in the Khasi Hills of Meghalaya.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-56",
    "categoryId": "general",
    "question": "In which year did the Government of India enact the comprehensive Wildlife (Protection) Act to establish protected areas and combat poaching?",
    "answer": "1972",
    "options": [
      "1972",
      "1986",
      "1980",
      "1973"
    ],
    "explanation": "The Wildlife (Protection) Act, 1972 provides the legal framework for the protection of wild animal species, establishing National Parks, Wildlife Sanctuaries, and Schedules of protection.",
    "tip": "Wildlife Protection Act = 1972; Project Tiger = 1973.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-57",
    "categoryId": "general",
    "question": "In an ecosystem food web, which organisms occupy the first trophic level by converting solar energy into chemical energy through photosynthesis?",
    "answer": "Primary Producers (Autotrophs)",
    "options": [
      "Primary Producers (Autotrophs)",
      "Herbivores",
      "Decomposers",
      "Apex Predators"
    ],
    "explanation": "Green plants and phytoplankton form the foundational first trophic level (T1) by synthesizing organic matter from inorganic substances via photosynthesis.",
    "tip": "First trophic level (T1) = Autotrophs / Producers.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-58",
    "categoryId": "general",
    "question": "What is the international agreement signed in 1987 to phase out substances that deplete the stratospheric ozone layer (like CFCs)?",
    "answer": "Montreal Protocol",
    "options": [
      "Montreal Protocol",
      "Kyoto Protocol",
      "Paris Agreement",
      "Basel Convention"
    ],
    "explanation": "The Montreal Protocol on Substances that Deplete the Ozone Layer was adopted in 1987 and is universally recognized as one of the most successful international environmental treaties.",
    "tip": "Montreal Protocol (1987) protects the Ozone Layer.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-59",
    "categoryId": "general",
    "question": "Which of the following is considered one of the designated global \"Biodiversity Hotspots\" located in India?",
    "answer": "Western Ghats and Eastern Himalayas",
    "options": [
      "Western Ghats and Eastern Himalayas",
      "Thar Desert",
      "Gangetic Plains",
      "Deccan Plateau"
    ],
    "explanation": "India hosts 4 global biodiversity hotspots: the Western Ghats, Eastern Himalayas, Indo-Burma, and Sundaland (Nicobar Islands).",
    "tip": "Western Ghats & Himalayas are global biodiversity hotspots.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-60",
    "categoryId": "general",
    "question": "Which wetland site in Jammu and Kashmir, located on the outskirts of Srinagar, is a critical winter haven for migratory waterfowl and a Ramsar site?",
    "answer": "Hokersar Wetland",
    "options": [
      "Hokersar Wetland",
      "Dal Lake",
      "Nigeen Lake",
      "Gangabal"
    ],
    "explanation": "Hokersar (Hokera) Wetland, located 10 km from Srinagar, is designated as the \"Queen of Wetlands\" in Kashmir, hosting millions of migratory waterfowl from Siberia and Central Asia.",
    "tip": "Hokersar = Designated Ramsar wetland near Srinagar.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-61",
    "categoryId": "general",
    "question": "The Pir Panjal Railway Tunnel (T-80), India’s longest transportation railway tunnel spanning 11.215 km, connects which two stations?",
    "answer": "Qazigund and Banihal",
    "options": [
      "Qazigund and Banihal",
      "Udhampur and Katra",
      "Srinagar and Baramulla",
      "Jammu and Udhampur"
    ],
    "explanation": "The Pir Panjal Railway Tunnel is an 11.2 km rail tunnel on the Banihal-Qazigund section connecting Jammu division with Kashmir valley.",
    "tip": "Pir Panjal rail tunnel connects Banihal & Qazigund.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-62",
    "categoryId": "general",
    "question": "Which Dogra ruler established the High Court of Jammu & Kashmir and codified laws in the \"Ranbir Penal Code\" (RPC)?",
    "answer": "Maharaja Ranbir Singh",
    "options": [
      "Maharaja Ranbir Singh",
      "Maharaja Gulab Singh",
      "Maharaja Pratap Singh",
      "Maharaja Hari Singh"
    ],
    "explanation": "Maharaja Ranbir Singh (ruled 1856–1885) codified the legal system, introducing the Ranbir Penal Code (RPC), which served as the criminal code of J&K until October 2019.",
    "tip": "Ranbir Penal Code was introduced by Maharaja Ranbir Singh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-63",
    "categoryId": "general",
    "question": "Kani Shawls, woven with wooden needles (Tujis) in Kanihama village of Kashmir, possess which prestigious intellectual property status?",
    "answer": "Geographical Indication (GI) Tag",
    "options": [
      "Geographical Indication (GI) Tag",
      "UNESCO Heritage Stamp",
      "Patent Right",
      "Trade Secret"
    ],
    "explanation": "Kani Shawl has received a Geographical Indication (GI) tag, recognizing its centuries-old artisanal tapestry technique where patterns are woven using wooden needles.",
    "tip": "Kani Shawl from Kanihama has GI tag.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-64",
    "categoryId": "general",
    "question": "Which festival celebrated at the Tulmulla shrine in Ganderbal, Kashmir, is dedicated to Goddess Ragnya Devi?",
    "answer": "Kheer Bhawani Mela",
    "options": [
      "Kheer Bhawani Mela",
      "Amarnath Yatra",
      "Jhiri Mela",
      "Bahu Mela"
    ],
    "explanation": "The annual Kheer Bhawani festival in Tulmulla village brings together thousands of devotees, where the color of the spring water is said to foretell auspicious or challenging events.",
    "tip": "Kheer Bhawani shrine is at Tulmulla, Ganderbal.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-65",
    "categoryId": "general",
    "question": "What is the name of the annual agricultural fair held in Jammu to commemorate the sacrifice of the peasant Baba Jitto?",
    "answer": "Jhiri Mela",
    "options": [
      "Jhiri Mela",
      "Bahu Mela",
      "Purmandal Mela",
      "Chhari Mubarak"
    ],
    "explanation": "Jhiri Mela is held every autumn in Jhiri village, Jammu, honoring Baba Jitto, a farmer who sacrificed his life protesting landlords' injustice.",
    "tip": "Jhiri Mela commemorates Baba Jitto in Jammu.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-66",
    "categoryId": "general",
    "question": "Which Mughal Emperor constructed the scenic Nishat Bagh (\"Garden of Joy\") along the eastern shores of Dal Lake in Srinagar?",
    "answer": "Asif Khan (brother of Empress Nur Jahan)",
    "options": [
      "Asif Khan (brother of Empress Nur Jahan)",
      "Emperor Jahangir",
      "Emperor Shah Jahan",
      "Emperor Babur"
    ],
    "explanation": "Nishat Bagh was designed and built in 1633 by Asif Khan, elder brother of Nur Jahan and father of Mumtaz Mahal.",
    "tip": "Nishat Bagh was built by Asif Khan in 1633.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-67",
    "categoryId": "general",
    "question": "Which high-altitude mountain pass in the Greater Himalayas connects Srinagar and the Kashmir Valley with Kargil and Leh?",
    "answer": "Zoji La Pass",
    "options": [
      "Zoji La Pass",
      "Rohtang Pass",
      "Nathu La Pass",
      "Shipki La Pass"
    ],
    "explanation": "Zoji La pass (altitude 3,528 m / 11,575 ft) on NH 1 connects the Kashmir Valley with the cold desert of Ladakh.",
    "tip": "Zoji La links Kashmir with Ladakh.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-68",
    "categoryId": "general",
    "question": "Which national park in Jammu and Kashmir is located in the Kishtwar district and known for its high-altitude pine forests and brown bears?",
    "answer": "Kishtwar High Altitude National Park",
    "options": [
      "Kishtwar High Altitude National Park",
      "Dachigam National Park",
      "Salim Ali National Park",
      "Hemis National Park"
    ],
    "explanation": "Kishtwar High Altitude National Park (declared in 1981) protects Himalayan musk deer, snow leopard, and brown bear in the Chenab drainage.",
    "tip": "Kishtwar National Park protects high-altitude Himalayan wildlife.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-69",
    "categoryId": "general",
    "question": "Which treaty signed in 1960 between India and Pakistan, brokered by the World Bank, governs the distribution of waters of the Indus River basin?",
    "answer": "Indus Waters Treaty",
    "options": [
      "Indus Waters Treaty",
      "Tashkent Declaration",
      "Shimla Agreement",
      "Karachi Agreement"
    ],
    "explanation": "Signed in Karachi on 19 September 1960 by Jawaharlal Nehru and Ayub Khan, it allocated the three Eastern Rivers (Ravi, Beas, Sutlej) to India and three Western Rivers (Indus, Jhelum, Chenab) to Pakistan with rights for run-of-the-river power to India.",
    "tip": "Indus Waters Treaty signed in 1960.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-70",
    "categoryId": "general",
    "question": "What is the traditional long, flowing woolen tunic with wide sleeves worn by both men and women in Kashmir during winter called?",
    "answer": "Phiran",
    "options": [
      "Phiran",
      "Kasaba",
      "Taranga",
      "Gaddi"
    ],
    "explanation": "The Phiran is the traditional cloak worn in Kashmir, designed loose to comfortably conceal the warm Kangri underneath.",
    "tip": "Phiran is the traditional winter gown in Kashmir.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-71",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the High Court of Jammu and Kashmir serves as:",
    "answer": "A common High Court for both UT of J&K and UT of Ladakh",
    "options": [
      "A common High Court for both UT of J&K and UT of Ladakh",
      "Exclusive High Court for J&K only",
      "Subordinate to Delhi High Court",
      "Merged with Punjab & Haryana High Court"
    ],
    "explanation": "Section 75 of the Act provides that the High Court of Jammu & Kashmir serves as the common High Court for both Union Territories.",
    "tip": "Common High Court for J&K and Ladakh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-72",
    "categoryId": "general",
    "question": "The historic \"Pari Mahal\" (Palace of Fairies) overlooking Dal Lake was constructed as a residential school for astrology and optics by which Mughal Prince?",
    "answer": "Prince Dara Shikoh",
    "options": [
      "Prince Dara Shikoh",
      "Prince Khurram (Shah Jahan)",
      "Prince Murad",
      "Emperor Aurangzeb"
    ],
    "explanation": "Prince Dara Shikoh, the eldest son of Shah Jahan, built Pari Mahal in the mid-1600s as a retreat and library of astrological and Sufi studies.",
    "tip": "Pari Mahal was built by Prince Dara Shikoh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-73",
    "categoryId": "general",
    "question": "Which prominent peak in the Pir Panjal range in Poonch and Rajouri districts is a major geographical landmark of Jammu division?",
    "answer": "Tatakooti Peak",
    "options": [
      "Tatakooti Peak",
      "Harmukh",
      "Kolahoi",
      "Nun Kun"
    ],
    "explanation": "Tatakooti Peak (4,725 m) is one of the highest summits in the Pir Panjal range, located between Poonch and Budgam.",
    "tip": "Tatakooti is the highest peak in Pir Panjal range.",
    "difficulty": "advanced"
  },
  {
    "id": "gen-74",
    "categoryId": "general",
    "question": "Which town in Doda district, situated in a picturesque saucer-shaped valley, is popularly dubbed as \"Chhota Kashmir\"?",
    "answer": "Bhaderwah",
    "options": [
      "Bhaderwah",
      "Kishtwar",
      "Banihal",
      "Gurez"
    ],
    "explanation": "Bhaderwah in Doda district is renowned for its alpine meadows, cedar forests, and pleasant climate, earning the moniker \"Chhota Kashmir\".",
    "tip": "Bhaderwah = \"Chhota Kashmir\".",
    "difficulty": "beginner"
  },
  {
    "id": "gen-75",
    "categoryId": "general",
    "question": "What is the name of the cold herbal green tea of Kashmir brewed with saffron, cardamom, cinnamon, and slivered almonds?",
    "answer": "Kahwa",
    "options": [
      "Kahwa",
      "Noon Chai",
      "Sheer Chai",
      "Gur Gur Chai"
    ],
    "explanation": "Kahwa is the famous traditional green tea of Kashmir, infused with saffron strands, whole spices, and garnished with crushed almonds.",
    "tip": "Kahwa = Kashmiri saffron green tea; Noon Chai = Pink salted tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-76",
    "categoryId": "general",
    "question": "The historic spring and garden of \"Chashme Shahi\" (Royal Spring) in Srinagar was commissioned in 1632 CE by which Mughal Emperor?",
    "answer": "Shah Jahan",
    "options": [
      "Shah Jahan",
      "Jahangir",
      "Akbar",
      "Aurangzeb"
    ],
    "explanation": "Shah Jahan commissioned governor Ali Mardan Khan in 1632 CE to landscape the natural sweet-water spring into Chashme Shahi garden.",
    "tip": "Chashme Shahi was commissioned by Shah Jahan in 1632.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-77",
    "categoryId": "general",
    "question": "Which ancient temple ruins in Anantnag, constructed by King Avantivarman in the 9th century, are dedicated to Lord Vishnu and Lord Shiva?",
    "answer": "Avantiswami and Avantisvara temples at Awantipora",
    "options": [
      "Avantiswami and Avantisvara temples at Awantipora",
      "Martand Sun Temple",
      "Bumzuva cave temple",
      "Mamal temple"
    ],
    "explanation": "King Avantivarman (founder of the Utpala dynasty) built the magnificent Avantiswami temple (Vishnu) and Avantisvara temple (Shiva) at Awantipora.",
    "tip": "Awantipora temples were built by Avantivarman.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-78",
    "categoryId": "general",
    "question": "The holy Amarnath Cave, enshrining the naturally formed ice Shiva Lingam (Himani Shivling), is situated at an elevation of approximately:",
    "answer": "3,888 meters (12,756 feet)",
    "options": [
      "3,888 meters (12,756 feet)",
      "2,500 meters (8,200 feet)",
      "5,200 meters (17,060 feet)",
      "1,800 meters (5,900 feet)"
    ],
    "explanation": "The holy Amarnath cave is located in a narrow gorge at an altitude of 3,888 m, reachable via Pahalgam (Chandanwari) or Baltal routes.",
    "tip": "Amarnath Cave is at 3,888 m (12,756 ft).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-79",
    "categoryId": "general",
    "question": "Which Dogra ruler established the famous Sri Pratap Singh Museum (SPS Museum) in Srinagar in 1898?",
    "answer": "Maharaja Pratap Singh",
    "options": [
      "Maharaja Pratap Singh",
      "Maharaja Ranbir Singh",
      "Maharaja Gulab Singh",
      "Maharaja Hari Singh"
    ],
    "explanation": "Maharaja Pratap Singh (ruled 1885–1925) founded the SPS Museum in Lal Mandi, Srinagar, which houses archaeological artifacts, coins, and Buddhist sculptures.",
    "tip": "SPS Museum Srinagar established by Maharaja Pratap Singh (1898).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-80",
    "categoryId": "general",
    "question": "Which district of Jammu and Kashmir is the largest in geographic land area following the reorganization into Union Territories?",
    "answer": "Doda (or Kishtwar among undivided areas)",
    "options": [
      "Kishtwar",
      "Baramulla",
      "Anantnag",
      "Kathua"
    ],
    "explanation": "Kishtwar district is the largest district by geographic land area in the Union Territory of Jammu and Kashmir.",
    "tip": "Kishtwar is the largest district by area in J&K UT.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-81",
    "categoryId": "general",
    "question": "What is the official state animal of the Union Territory of Jammu & Kashmir?",
    "answer": "Kashmir Stag (Hangul)",
    "options": [
      "Kashmir Stag (Hangul)",
      "Snow Leopard",
      "Markhor",
      "Musk Deer"
    ],
    "explanation": "Hangul (Cervus hanglu hanglu) is the official animal of J&K UT. (The Snow Leopard was declared the UT animal of Ladakh).",
    "tip": "J&K UT animal = Hangul; Ladakh UT animal = Snow Leopard.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-82",
    "categoryId": "general",
    "question": "What is the official state bird of the Union Territory of Jammu and Kashmir?",
    "answer": "Kalij Pheasant (Lophura leucomelanos)",
    "options": [
      "Kalij Pheasant (Lophura leucomelanos)",
      "Black-necked Crane",
      "Western Tragopan",
      "Monal"
    ],
    "explanation": "In 2021, the Government of J&K declared the Kalij Pheasant as the official bird of J&K UT. (Black-necked Crane was adopted by Ladakh).",
    "tip": "J&K UT bird = Kalij Pheasant; Ladakh UT bird = Black-necked Crane.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-83",
    "categoryId": "general",
    "question": "Which prominent Dogra palace complex in Jammu was the official royal residence until 1925 and displays a blend of Rajasthani, Mughal, and European Gothic architecture?",
    "answer": "Mubarak Mandi Palace",
    "options": [
      "Mubarak Mandi Palace",
      "Amar Mahal Palace",
      "Bahu Fort",
      "Sheesh Mahal"
    ],
    "explanation": "Mubarak Mandi is the historic palace complex of the Dogra dynasty in Jammu, containing the Pink Hall, Gol Ghar, and Dogra Art Museum.",
    "tip": "Mubarak Mandi was the royal Dogra palace in Jammu.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-84",
    "categoryId": "general",
    "question": "The French-château style \"Amar Mahal Palace\" in Jammu, built in the 19th century overlooking the Tawi river, was commissioned by which ruler?",
    "answer": "Raja Amar Singh",
    "options": [
      "Raja Amar Singh",
      "Maharaja Gulab Singh",
      "Maharaja Hari Singh",
      "Maharaja Ranbir Singh"
    ],
    "explanation": "Amar Mahal was designed by a French architect in 1862 for Raja Amar Singh. It features a unique red sandstone structure and now houses a golden throne of 120 kg.",
    "tip": "Amar Mahal Palace was designed like a French château for Raja Amar Singh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-85",
    "categoryId": "general",
    "question": "The famous Raghunath Temple in Jammu, one of the largest temple complexes in Northern India, was initiated by Maharaja Gulab Singh and completed in 1860 by:",
    "answer": "Maharaja Ranbir Singh",
    "options": [
      "Maharaja Ranbir Singh",
      "Maharaja Pratap Singh",
      "Maharaja Hari Singh",
      "Raja Amar Singh"
    ],
    "explanation": "Maharaja Gulab Singh began the construction of the Raghunath Temple in 1835, and his son Maharaja Ranbir Singh completed it in 1860.",
    "tip": "Raghunath Temple was started by Gulab Singh and completed by Ranbir Singh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-86",
    "categoryId": "general",
    "question": "Which Sufi saint, revered as \"Nund Rishi\" and \"Sheikh-ul-Alam\", founded the indigenous Rishi Order of Sufism in Kashmir?",
    "answer": "Sheikh Noor-ud-Din Wali",
    "options": [
      "Sheikh Noor-ud-Din Wali",
      "Mir Sayyid Ali Hamadani",
      "Makhdoom Sahib",
      "Bulbul Shah"
    ],
    "explanation": "Nund Rishi (1377–1440 CE) founded the Rishi order, composing mystical verses in Kashmiri (Shruks) preaching universal peace, vegetarianism, and communal harmony. His shrine is at Charar-i-Sharief.",
    "tip": "Nund Rishi / Sheikh-ul-Alam = Charar-i-Sharief.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-87",
    "categoryId": "general",
    "question": "Which Iranian saint, known as \"Amir-e-Kabir\" and \"Shah-e-Hamadan\", arrived in Kashmir in the 14th century and popularized Persian arts, crafts, and Islamic scholarship?",
    "answer": "Mir Sayyid Ali Hamadani",
    "options": [
      "Mir Sayyid Ali Hamadani",
      "Bulbul Shah",
      "Makhdoom Sahib",
      "Dastgeer Sahib"
    ],
    "explanation": "Shah-e-Hamadan (1314–1384 CE) brought hundreds of Persian artisans, transforming Kashmir into an international center of carpets, shawls, and woodwork. The Khanqah-e-Moula commemorates him.",
    "tip": "Shah-e-Hamadan brought carpet and shawl crafts to Kashmir.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-88",
    "categoryId": "general",
    "question": "The Khanqah-e-Moula shrine, located on the right bank of the Jhelum river in old Srinagar, was originally built in 1395 CE by:",
    "answer": "Sultan Sikandar",
    "options": [
      "Sultan Sikandar",
      "Sultan Zain-ul-Abidin",
      "Mir Sayyid Ali Hamadani",
      "Yousuf Shah Chak"
    ],
    "explanation": "Sultan Sikandar constructed the historic wooden Khanqah-e-Moula in 1395 CE in memory of Mir Sayyid Ali Hamadani.",
    "tip": "Khanqah-e-Moula was built by Sultan Sikandar (1395).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-89",
    "categoryId": "general",
    "question": "The sacred Hazratbal Shrine on the western shores of Dal Lake in Srinagar preserves which holy relic?",
    "answer": "Moi-e-Muqqadas (relic hair of Prophet Muhammad)",
    "options": [
      "Moi-e-Muqqadas (relic hair of Prophet Muhammad)",
      "A cloak of Hazrat Ali",
      "An ancient manuscript of the Quran",
      "A staff of Moses"
    ],
    "explanation": "Hazratbal (\"The Respected Place\") is the only domed white marble shrine in Kashmir, venerated for housing the Moi-e-Muqqadas brought to Kashmir in the 17th century.",
    "tip": "Hazratbal preserves the Moi-e-Muqqadas.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-90",
    "categoryId": "general",
    "question": "Which prominent mountain peak in Jammu and Kashmir is known as the \"Matterhorn of the East\" due to its dramatic pyramidal summit?",
    "answer": "Kolahoi Peak",
    "options": [
      "Kolahoi Peak",
      "Harmukh Peak",
      "Amarnath Peak",
      "Sunset Peak"
    ],
    "explanation": "Kolahoi Peak (5,425 m), located near Pahalgam, gives rise to the Kolahoi Glacier, the primary source of the Lidder and Sindh rivers.",
    "tip": "Kolahoi Peak gives rise to Kolahoi Glacier (source of Lidder).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-91",
    "categoryId": "general",
    "question": "The Dal Lake in Srinagar features an island in the middle of Lokut Dal that is famous for four majestic Chinar trees standing at its corners, named:",
    "answer": "Char Chinar (Ropa Lank)",
    "options": [
      "Char Chinar (Ropa Lank)",
      "Sona Lank",
      "Zaina Lank",
      "Pari Mahal"
    ],
    "explanation": "Char Chinar (also called Ropa Lank) was built by Murad Baksh, brother of Mughal Emperor Aurangzeb, featuring four Chinar trees oriented to cardinal directions.",
    "tip": "Char Chinar = Island with 4 Chinar trees in Dal Lake.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-92",
    "categoryId": "general",
    "question": "The Indira Gandhi Memorial Tulip Garden, the largest tulip garden in Asia, is nestled at the foothills of which mountain range in Srinagar?",
    "answer": "Zabarwan Range",
    "options": [
      "Zabarwan Range",
      "Pir Panjal Range",
      "Karakoram Range",
      "Shivalik Hills"
    ],
    "explanation": "The Tulip Garden spans over 30 hectares at the base of the Zabarwan hills, overlooking Dal Lake, hosting millions of tulips during the annual April festival.",
    "tip": "Tulip Garden is at the foothills of Zabarwan hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-93",
    "categoryId": "general",
    "question": "Which high-altitude mountain lake situated near Sonamarg in Kashmir is called the \"Lake of Flowers\" or \"Lake of Fish\"?",
    "answer": "Vishansar Lake / Gadsar Lake",
    "options": [
      "Vishansar Lake / Gadsar Lake",
      "Wular Lake",
      "Mansar Lake",
      "Nigeen Lake"
    ],
    "explanation": "Vishansar (\"Lake of Vishnu\") and neighboring Gadsar (\"Lake of Fish\") are pristine alpine oligotrophic lakes along the Kashmir Great Lakes trek.",
    "tip": "Gadsar means Lake of Fish in Kashmiri.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-94",
    "categoryId": "general",
    "question": "Which scenic valley in north Kashmir, accessible through the Razdan Pass, is drained by the Kishanganga (Neelum) River?",
    "answer": "Gurez Valley",
    "options": [
      "Gurez Valley",
      "Lolab Valley",
      "Aru Valley",
      "Warwan Valley"
    ],
    "explanation": "Gurez Valley is an alpine valley inhabited by the Dard-Shin tribe, situated along the Kishanganga River with the iconic Habba Khatoon mountain peak.",
    "tip": "Gurez Valley is along the Kishanganga river.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-95",
    "categoryId": "general",
    "question": "Which famous 16th-century poetess of Kashmir, married to the last independent Chak ruler Sultan Yousuf Shah Chak, is known as \"Nightingale of Kashmir\"?",
    "answer": "Habba Khatoon (Zoon)",
    "options": [
      "Habba Khatoon (Zoon)",
      "Lalleshwari (Lal Ded)",
      "Arnimal",
      "Rupa Bhawani"
    ],
    "explanation": "Habba Khatoon (born Zoon in Chandhara, Pampore) introduced the romantic lyric song (Lol) into Kashmiri poetry, expressing grief after Akbar exiled her husband.",
    "tip": "Habba Khatoon = Nightingale of Kashmir; wife of Yousuf Shah Chak.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-96",
    "categoryId": "general",
    "question": "Which 14th-century mystic poetess of Kashmir composed mystical verses called \"Vatsun\" or \"Lalla Vakhs\", bridging Shaivism and Sufism?",
    "answer": "Lalleshwari (Lal Ded)",
    "options": [
      "Lalleshwari (Lal Ded)",
      "Habba Khatoon",
      "Rupa Bhawani",
      "Arnimal"
    ],
    "explanation": "Lalleshwari (Lal Ded) was the mother of Kashmiri literature whose four-line philosophical sayings (Lalla Vakhs) influenced Nund Rishi and centuries of Kashmiri thought.",
    "tip": "Lal Ded composed mystical Lalla Vakhs.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-97",
    "categoryId": "general",
    "question": "The Delimitation Commission for the Union Territory of Jammu and Kashmir, which submitted its final order in May 2022, was headed by:",
    "answer": "Justice (Retd.) Ranjana Prakash Desai",
    "options": [
      "Justice (Retd.) Ranjana Prakash Desai",
      "Sushil Chandra",
      "K.K. Sharma",
      "Justice Sanjay Kishan Kaul"
    ],
    "explanation": "The Delimitation Commission headed by former Supreme Court judge Justice Ranjana Desai increased assembly seats in J&K to 90 (43 in Jammu, 47 in Kashmir).",
    "tip": "J&K Delimitation Commission was headed by Justice Ranjana Prakash Desai.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-98",
    "categoryId": "general",
    "question": "How many total legislative assembly seats were demarcated for the Union Territory of Jammu and Kashmir by the Delimitation Commission (excluding the 24 seats reserved for Pakistan-occupied Jammu & Kashmir)?",
    "answer": "90 seats (43 Jammu, 47 Kashmir)",
    "options": [
      "90 seats (43 Jammu, 47 Kashmir)",
      "83 seats (37 Jammu, 46 Kashmir)",
      "87 seats (37 Jammu, 46 Kashmir, 4 Ladakh)",
      "95 seats"
    ],
    "explanation": "The Commission fixed 90 elected assembly seats: 43 for Jammu division and 47 for Kashmir division, in addition to 24 seats remaining vacant for PoJK.",
    "tip": "90 Assembly seats: 43 in Jammu, 47 in Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-99",
    "categoryId": "general",
    "question": "Which highway tunnel, also known as the Syama Prasad Mookerjee Tunnel, is an all-weather 9.28 km road tunnel bypassing Patnitop on NH 44?",
    "answer": "Chenani-Nashri Tunnel",
    "options": [
      "Chenani-Nashri Tunnel",
      "Jawahar Tunnel",
      "Z-Morh Tunnel",
      "Banihal-Qazigund Tunnel"
    ],
    "explanation": "The Chenani-Nashri Tunnel (9.28 km) in Udhampur/Ramban reduces travel distance between Jammu and Srinagar by 30 km, avoiding hazardous winter snow at Patnitop.",
    "tip": "Chenani-Nashri Tunnel = Dr. Syama Prasad Mookerjee Tunnel (9.28 km).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-100",
    "categoryId": "general",
    "question": "Which tree, scientifically named Platanus orientalis and locally known as \"Boen\", is the revered majesty of Kashmir’s heritage landscape?",
    "answer": "Chinar Tree",
    "options": [
      "Chinar Tree",
      "Deodar",
      "Kail",
      "Walnut"
    ],
    "explanation": "The Chinar tree (Platanus orientalis), known locally as \"Boen\", was declared a heritage royal tree and is an enduring cultural and natural emblem of the Kashmir Valley.",
    "tip": "Chinar (Platanus orientalis) = Boen.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-101",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta",
      "Chandragupta Maurya"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-102",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Huvishka",
      "Vasudeva I",
      "Emperor Kanishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-103",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Sugandha",
      "Queen Yashomati",
      "Kota Rani",
      "Queen Didda"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-104",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Rinchana",
      "Suhadeva",
      "Kota Rani",
      "Udayanadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-105",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "15 August 1846",
      "26 October 1846",
      "9 March 1846",
      "16 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-106",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-107",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-108",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "One woman member",
      "Five women members",
      "Two women members",
      "Three women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-109",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-110",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Baralacha La",
      "Gangabal Lake"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-111",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Rambiara River",
      "Sindh River",
      "Doodhganga River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-112",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Wular Lake",
      "Dal Lake",
      "Gangabal Lake",
      "Manasbal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-113",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Ramnagar Sanctuary",
      "Overa-Aru Sanctuary",
      "Jasrota Wildlife Sanctuary",
      "Dachigam National Park"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-114",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Rajouri and Poonch",
      "Baramulla and Kupwara",
      "Pulwama (Pampore) and Kishtwar",
      "Kathua and Samba"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-115",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Kishanganga Project",
      "Salal Project",
      "Baglihar Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-116",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Salix alba (White Willow)",
      "Cedrus deodara (Deodar)",
      "Platanus orientalis (Chinar)",
      "Pinus wallichiana (Kail)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-117",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Rouf Dance",
      "Kud Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-118",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-119",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Noon Chai (Sheer Chai)",
      "Sulaimani",
      "Darjeeling Chai",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-120",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-121",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Lala Lajpat Rai",
      "Bhagat Singh",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-122",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Dadabhai Naoroji",
      "Bal Gangadhar Tilak",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-123",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-124",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Uttar Pradesh",
      "Punjab",
      "Rajasthan"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-125",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Jim Corbett National Park",
      "Sundarbans National Park",
      "Kaziranga National Park",
      "Manas National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-126",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Ramsar Convention (1971)",
      "Bonn Convention",
      "Stockholm Convention",
      "Kyoto Protocol"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-127",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-128",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Vasudeva I",
      "Huvishka",
      "Emperor Kanishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-129",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Kota Rani",
      "Queen Didda",
      "Queen Yashomati",
      "Queen Sugandha"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-130",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Rinchana",
      "Suhadeva",
      "Udayanadeva",
      "Kota Rani"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-131",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "26 October 1846",
      "16 March 1846",
      "15 August 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-132",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-133",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "Zero reserved seats",
      "10 seats for SCs and 5 seats for STs",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-134",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Three women members",
      "Five women members",
      "One woman member",
      "Two women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-135",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-136",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Baralacha La",
      "Verinag (at the base of Pir Panjal)"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-137",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Rambiara River",
      "Lidder River",
      "Sindh River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-138",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Dal Lake",
      "Wular Lake",
      "Gangabal Lake",
      "Manasbal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-139",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Jasrota Wildlife Sanctuary",
      "Overa-Aru Sanctuary",
      "Ramnagar Sanctuary",
      "Dachigam National Park"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-140",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Kathua and Samba",
      "Pulwama (Pampore) and Kishtwar",
      "Baramulla and Kupwara",
      "Rajouri and Poonch"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-141",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Baglihar Project",
      "Salal Project",
      "Kishanganga Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-142",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Cedrus deodara (Deodar)",
      "Salix alba (White Willow)",
      "Pinus wallichiana (Kail)",
      "Platanus orientalis (Chinar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-143",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Rouf Dance",
      "Kud Dance",
      "Bhand Pather",
      "Dumhal Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-144",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-145",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Noon Chai (Sheer Chai)",
      "Darjeeling Chai",
      "Sulaimani",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-146",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-147",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Bhagat Singh",
      "Lala Lajpat Rai",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-148",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade",
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-149",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-150",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Punjab",
      "Uttar Pradesh",
      "Rajasthan"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-151",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Kaziranga National Park",
      "Manas National Park",
      "Jim Corbett National Park",
      "Sundarbans National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-152",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Bonn Convention",
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Stockholm Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-153",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-154",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Huvishka",
      "Vasudeva I"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-155",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Yashomati",
      "Kota Rani",
      "Queen Sugandha",
      "Queen Didda"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-156",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Udayanadeva",
      "Kota Rani",
      "Rinchana",
      "Suhadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-157",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "16 March 1846",
      "26 October 1846",
      "9 March 1846",
      "15 August 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-158",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-159",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-160",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Five women members",
      "One woman member",
      "Two women members",
      "Three women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-161",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-162",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Baralacha La",
      "Gangabal Lake",
      "Kolahoi Glacier"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-163",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Sindh River",
      "Rambiara River",
      "Lidder River",
      "Doodhganga River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-164",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-165",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Overa-Aru Sanctuary",
      "Ramnagar Sanctuary",
      "Jasrota Wildlife Sanctuary",
      "Dachigam National Park"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-166",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Kathua and Samba",
      "Rajouri and Poonch",
      "Baramulla and Kupwara",
      "Pulwama (Pampore) and Kishtwar"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-167",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Kishanganga Project",
      "Baglihar Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Salal Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-168",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Platanus orientalis (Chinar)",
      "Salix alba (White Willow)",
      "Pinus wallichiana (Kail)",
      "Cedrus deodara (Deodar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-169",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-170",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-171",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Kahwa",
      "Noon Chai (Sheer Chai)",
      "Sulaimani"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-172",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-173",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Bhagat Singh",
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh",
      "Lala Lajpat Rai"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-174",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade",
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-175",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Rohtang Pass",
      "Bara-lacha La",
      "Nathu La Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-176",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Uttar Pradesh",
      "Rajasthan",
      "Punjab"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-177",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Jim Corbett National Park",
      "Kaziranga National Park",
      "Sundarbans National Park",
      "Manas National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-178",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Stockholm Convention",
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Bonn Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-179",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta",
      "Chandragupta Maurya"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-180",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Huvishka",
      "Vasudeva I"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-181",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Kota Rani",
      "Queen Didda",
      "Queen Sugandha",
      "Queen Yashomati"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-182",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Kota Rani",
      "Udayanadeva",
      "Rinchana",
      "Suhadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-183",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "16 March 1846",
      "9 March 1846",
      "15 August 1846",
      "26 October 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-184",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-185",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats",
      "10 seats for SCs and 5 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-186",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Three women members",
      "Two women members",
      "Five women members",
      "One woman member"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-187",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-188",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Baralacha La"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-189",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Rambiara River",
      "Sindh River",
      "Doodhganga River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-190",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-191",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Ramnagar Sanctuary",
      "Dachigam National Park",
      "Overa-Aru Sanctuary",
      "Jasrota Wildlife Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-192",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Rajouri and Poonch",
      "Kathua and Samba",
      "Pulwama (Pampore) and Kishtwar",
      "Baramulla and Kupwara"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-193",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Baglihar Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Kishanganga Project",
      "Salal Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-194",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Platanus orientalis (Chinar)",
      "Salix alba (White Willow)",
      "Cedrus deodara (Deodar)",
      "Pinus wallichiana (Kail)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-195",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-196",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-197",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Noon Chai (Sheer Chai)",
      "Sulaimani",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-198",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-199",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Lala Lajpat Rai",
      "Sardar Ajit Singh",
      "Bhagat Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-200",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Dadabhai Naoroji",
      "Bal Gangadhar Tilak",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-201",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Shipki La Pass",
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-202",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Uttar Pradesh",
      "Rajasthan",
      "Punjab"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-203",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Sundarbans National Park",
      "Jim Corbett National Park",
      "Manas National Park",
      "Kaziranga National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-204",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Ramsar Convention (1971)",
      "Stockholm Convention",
      "Kyoto Protocol",
      "Bonn Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-205",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta",
      "Chandragupta Maurya"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-206",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Vasudeva I",
      "Huvishka",
      "Emperor Kanishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-207",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Didda",
      "Queen Sugandha",
      "Queen Yashomati",
      "Kota Rani"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-208",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Kota Rani",
      "Udayanadeva",
      "Rinchana",
      "Suhadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-209",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "15 August 1846",
      "16 March 1846",
      "26 October 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-210",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-211",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "Zero reserved seats",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "10 seats for SCs and 5 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-212",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Three women members",
      "One woman member",
      "Five women members",
      "Two women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-213",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-214",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Verinag (at the base of Pir Panjal)",
      "Baralacha La"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-215",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Rambiara River",
      "Sindh River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-216",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Dal Lake",
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-217",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Jasrota Wildlife Sanctuary",
      "Overa-Aru Sanctuary",
      "Dachigam National Park",
      "Ramnagar Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-218",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Kathua and Samba",
      "Pulwama (Pampore) and Kishtwar",
      "Rajouri and Poonch"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-219",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Salal Project",
      "Kishanganga Project",
      "Baglihar Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-220",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Pinus wallichiana (Kail)",
      "Cedrus deodara (Deodar)",
      "Platanus orientalis (Chinar)",
      "Salix alba (White Willow)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-221",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Rouf Dance",
      "Kud Dance",
      "Bhand Pather",
      "Dumhal Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-222",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Reasi",
      "Kargil",
      "Kathua"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-223",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Noon Chai (Sheer Chai)",
      "Darjeeling Chai",
      "Kahwa",
      "Sulaimani"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-224",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-225",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Bhagat Singh",
      "Lala Lajpat Rai",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-226",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-227",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-228",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Uttar Pradesh",
      "Haryana (879 females per 1,000 males)",
      "Rajasthan",
      "Punjab"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-229",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Jim Corbett National Park",
      "Manas National Park",
      "Sundarbans National Park",
      "Kaziranga National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-230",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Bonn Convention",
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Stockholm Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-231",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-232",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Vasudeva I",
      "Huvishka",
      "Emperor Kanishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-233",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Yashomati",
      "Queen Sugandha",
      "Queen Didda",
      "Kota Rani"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-234",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Rinchana",
      "Suhadeva",
      "Udayanadeva",
      "Kota Rani"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-235",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "16 March 1846",
      "26 October 1846",
      "15 August 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-236",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-237",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "10 seats for SCs and 5 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-238",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Five women members",
      "One woman member",
      "Two women members",
      "Three women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-239",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-240",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Baralacha La"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-241",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Sindh River",
      "Rambiara River",
      "Doodhganga River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-242",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Dal Lake",
      "Wular Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-243",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Ramnagar Sanctuary",
      "Dachigam National Park",
      "Jasrota Wildlife Sanctuary",
      "Overa-Aru Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-244",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Rajouri and Poonch",
      "Pulwama (Pampore) and Kishtwar",
      "Kathua and Samba"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-245",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Kishanganga Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Salal Project",
      "Baglihar Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-246",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Platanus orientalis (Chinar)",
      "Pinus wallichiana (Kail)",
      "Cedrus deodara (Deodar)",
      "Salix alba (White Willow)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-247",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-248",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-249",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Sulaimani",
      "Kahwa",
      "Noon Chai (Sheer Chai)"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-250",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-251",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Lala Lajpat Rai",
      "Bhagat Singh",
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-252",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-253",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Rohtang Pass",
      "Bara-lacha La",
      "Nathu La Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-254",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Rajasthan",
      "Punjab",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-255",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Sundarbans National Park",
      "Kaziranga National Park",
      "Jim Corbett National Park",
      "Manas National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-256",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Ramsar Convention (1971)",
      "Bonn Convention",
      "Stockholm Convention",
      "Kyoto Protocol"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-257",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-258",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Vasudeva I",
      "Huvishka",
      "Emperor Kanishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-259",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Sugandha",
      "Queen Didda",
      "Queen Yashomati",
      "Kota Rani"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-260",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Udayanadeva",
      "Rinchana",
      "Suhadeva",
      "Kota Rani"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-261",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "16 March 1846",
      "9 March 1846",
      "15 August 1846",
      "26 October 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-262",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-263",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "10 seats for SCs and 5 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-264",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Three women members",
      "Two women members",
      "One woman member",
      "Five women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-265",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-266",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Baralacha La",
      "Gangabal Lake"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-267",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Rambiara River",
      "Doodhganga River",
      "Sindh River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-268",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-269",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Jasrota Wildlife Sanctuary",
      "Ramnagar Sanctuary",
      "Overa-Aru Sanctuary",
      "Dachigam National Park"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-270",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Kathua and Samba",
      "Rajouri and Poonch",
      "Pulwama (Pampore) and Kishtwar",
      "Baramulla and Kupwara"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-271",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Baglihar Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Kishanganga Project",
      "Salal Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-272",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Platanus orientalis (Chinar)",
      "Pinus wallichiana (Kail)",
      "Cedrus deodara (Deodar)",
      "Salix alba (White Willow)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-273",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-274",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Reasi",
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-275",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Sulaimani",
      "Kahwa",
      "Noon Chai (Sheer Chai)"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-276",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-277",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh",
      "Lala Lajpat Rai",
      "Bhagat Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-278",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Dadabhai Naoroji",
      "Bal Gangadhar Tilak",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-279",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Shipki La Pass",
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-280",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Rajasthan",
      "Punjab",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-281",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Jim Corbett National Park",
      "Kaziranga National Park",
      "Manas National Park",
      "Sundarbans National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-282",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Stockholm Convention",
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Bonn Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-283",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-284",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Vasudeva I",
      "Huvishka"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-285",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Sugandha",
      "Queen Yashomati",
      "Kota Rani",
      "Queen Didda"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-286",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Kota Rani",
      "Rinchana",
      "Suhadeva",
      "Udayanadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-287",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "15 August 1846",
      "26 October 1846",
      "16 March 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-288",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-289",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-290",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Two women members",
      "Three women members",
      "Five women members",
      "One woman member"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-291",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-292",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Gangabal Lake",
      "Verinag (at the base of Pir Panjal)",
      "Baralacha La",
      "Kolahoi Glacier"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-293",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Sindh River",
      "Lidder River",
      "Doodhganga River",
      "Rambiara River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-294",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Dal Lake",
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-295",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Dachigam National Park",
      "Jasrota Wildlife Sanctuary",
      "Overa-Aru Sanctuary",
      "Ramnagar Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-296",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Kathua and Samba",
      "Baramulla and Kupwara",
      "Pulwama (Pampore) and Kishtwar",
      "Rajouri and Poonch"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-297",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Baglihar Project",
      "Salal Project",
      "Kishanganga Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-298",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Pinus wallichiana (Kail)",
      "Platanus orientalis (Chinar)",
      "Salix alba (White Willow)",
      "Cedrus deodara (Deodar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-299",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-300",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-301",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Noon Chai (Sheer Chai)",
      "Darjeeling Chai",
      "Sulaimani",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-302",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-303",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh",
      "Bhagat Singh",
      "Lala Lajpat Rai"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-304",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade",
      "Bal Gangadhar Tilak"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-305",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-306",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Uttar Pradesh",
      "Punjab",
      "Rajasthan"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-307",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Kaziranga National Park",
      "Manas National Park",
      "Sundarbans National Park",
      "Jim Corbett National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-308",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Stockholm Convention",
      "Ramsar Convention (1971)",
      "Kyoto Protocol",
      "Bonn Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-309",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-310",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Vasudeva I",
      "Huvishka"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-311",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Yashomati",
      "Queen Sugandha",
      "Queen Didda",
      "Kota Rani"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-312",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Rinchana",
      "Suhadeva",
      "Udayanadeva",
      "Kota Rani"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-313",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "16 March 1846",
      "26 October 1846",
      "15 August 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-314",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-315",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-316",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "One woman member",
      "Two women members",
      "Five women members",
      "Three women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-317",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-318",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Baralacha La",
      "Verinag (at the base of Pir Panjal)",
      "Gangabal Lake",
      "Kolahoi Glacier"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-319",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Lidder River",
      "Sindh River",
      "Rambiara River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-320",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Dal Lake",
      "Wular Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-321",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Jasrota Wildlife Sanctuary",
      "Dachigam National Park",
      "Overa-Aru Sanctuary",
      "Ramnagar Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-322",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Pulwama (Pampore) and Kishtwar",
      "Kathua and Samba",
      "Rajouri and Poonch"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-323",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Salal Project",
      "Baglihar Project",
      "Kishanganga Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-324",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Salix alba (White Willow)",
      "Cedrus deodara (Deodar)",
      "Pinus wallichiana (Kail)",
      "Platanus orientalis (Chinar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-325",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-326",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-327",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Sulaimani",
      "Darjeeling Chai",
      "Kahwa",
      "Noon Chai (Sheer Chai)"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-328",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-329",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh",
      "Bhagat Singh",
      "Lala Lajpat Rai"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-330",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-331",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Rohtang Pass",
      "Shipki La Pass",
      "Bara-lacha La",
      "Nathu La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-332",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Punjab",
      "Uttar Pradesh",
      "Rajasthan"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-333",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Jim Corbett National Park",
      "Sundarbans National Park",
      "Manas National Park",
      "Kaziranga National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-334",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Ramsar Convention (1971)",
      "Stockholm Convention",
      "Bonn Convention",
      "Kyoto Protocol"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-335",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-336",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Huvishka",
      "Kujula Kadphises",
      "Vasudeva I"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-337",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Didda",
      "Kota Rani",
      "Queen Yashomati",
      "Queen Sugandha"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-338",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Udayanadeva",
      "Kota Rani",
      "Rinchana",
      "Suhadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-339",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "15 August 1846",
      "16 March 1846",
      "26 October 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-340",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-341",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "10 seats for SCs and 5 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-342",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Five women members",
      "Two women members",
      "One woman member",
      "Three women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-343",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-344",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Baralacha La",
      "Gangabal Lake"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-345",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Sindh River",
      "Rambiara River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-346",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-347",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Overa-Aru Sanctuary",
      "Ramnagar Sanctuary",
      "Jasrota Wildlife Sanctuary",
      "Dachigam National Park"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-348",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Rajouri and Poonch",
      "Kathua and Samba",
      "Pulwama (Pampore) and Kishtwar"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-349",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Kishanganga Project",
      "Salal Project",
      "Baglihar Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-350",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Platanus orientalis (Chinar)",
      "Cedrus deodara (Deodar)",
      "Salix alba (White Willow)",
      "Pinus wallichiana (Kail)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-351",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Rouf Dance",
      "Kud Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-352",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-353",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Sulaimani",
      "Noon Chai (Sheer Chai)",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-354",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-355",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh",
      "Lala Lajpat Rai",
      "Bhagat Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-356",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Dadabhai Naoroji",
      "Bal Gangadhar Tilak",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-357",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Shipki La Pass",
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-358",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Uttar Pradesh",
      "Rajasthan",
      "Punjab"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-359",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Kaziranga National Park",
      "Jim Corbett National Park",
      "Manas National Park",
      "Sundarbans National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-360",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Stockholm Convention",
      "Bonn Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-361",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Samudragupta",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-362",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Huvishka",
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Vasudeva I"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-363",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Yashomati",
      "Kota Rani",
      "Queen Didda",
      "Queen Sugandha"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-364",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Kota Rani",
      "Rinchana",
      "Suhadeva",
      "Udayanadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-365",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "26 October 1846",
      "16 March 1846",
      "9 March 1846",
      "15 August 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-366",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-367",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "Zero reserved seats",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-368",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "One woman member",
      "Three women members",
      "Five women members",
      "Two women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-369",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-370",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Gangabal Lake",
      "Baralacha La",
      "Kolahoi Glacier"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-371",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Rambiara River",
      "Lidder River",
      "Sindh River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-372",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Dal Lake",
      "Wular Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-373",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Ramnagar Sanctuary",
      "Dachigam National Park",
      "Overa-Aru Sanctuary",
      "Jasrota Wildlife Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-374",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Rajouri and Poonch",
      "Baramulla and Kupwara",
      "Pulwama (Pampore) and Kishtwar",
      "Kathua and Samba"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-375",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Kishanganga Project",
      "Salal Project",
      "Baglihar Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-376",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Salix alba (White Willow)",
      "Cedrus deodara (Deodar)",
      "Pinus wallichiana (Kail)",
      "Platanus orientalis (Chinar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-377",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Rouf Dance",
      "Kud Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-378",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Reasi",
      "Kargil",
      "Kathua"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-379",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Kahwa",
      "Noon Chai (Sheer Chai)",
      "Sulaimani"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-380",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-381",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh",
      "Bhagat Singh",
      "Lala Lajpat Rai"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-382",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-383",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Rohtang Pass",
      "Bara-lacha La",
      "Nathu La Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-384",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Rajasthan",
      "Punjab",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-385",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Jim Corbett National Park",
      "Kaziranga National Park",
      "Manas National Park",
      "Sundarbans National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-386",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Bonn Convention",
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Stockholm Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-387",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-388",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Vasudeva I",
      "Emperor Kanishka",
      "Huvishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-389",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Kota Rani",
      "Queen Didda",
      "Queen Sugandha",
      "Queen Yashomati"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-390",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Udayanadeva",
      "Kota Rani",
      "Rinchana",
      "Suhadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-391",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "9 March 1846",
      "16 March 1846",
      "26 October 1846",
      "15 August 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-392",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-393",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "10 seats for SCs and 5 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-394",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Five women members",
      "One woman member",
      "Three women members",
      "Two women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-395",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-396",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Baralacha La"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-397",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Lidder River",
      "Rambiara River",
      "Doodhganga River",
      "Sindh River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-398",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Dal Lake",
      "Wular Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-399",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Overa-Aru Sanctuary",
      "Jasrota Wildlife Sanctuary",
      "Dachigam National Park",
      "Ramnagar Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-400",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Rajouri and Poonch",
      "Kathua and Samba",
      "Pulwama (Pampore) and Kishtwar"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-401",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Baglihar Project",
      "Salal Project",
      "Kishanganga Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-402",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Cedrus deodara (Deodar)",
      "Salix alba (White Willow)",
      "Pinus wallichiana (Kail)",
      "Platanus orientalis (Chinar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-403",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Rouf Dance",
      "Kud Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-404",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-405",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Kahwa",
      "Noon Chai (Sheer Chai)",
      "Sulaimani"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-406",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-407",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Bhagat Singh",
      "Lala Lajpat Rai",
      "Captain Mohan Singh and Rash Behari Bose",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-408",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade",
      "Dadabhai Naoroji"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-409",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-410",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Punjab",
      "Rajasthan",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-411",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Sundarbans National Park",
      "Kaziranga National Park",
      "Manas National Park",
      "Jim Corbett National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-412",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Ramsar Convention (1971)",
      "Stockholm Convention",
      "Bonn Convention",
      "Kyoto Protocol"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-413",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-414",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Huvishka",
      "Vasudeva I"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-415",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Kota Rani",
      "Queen Yashomati",
      "Queen Sugandha",
      "Queen Didda"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-416",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Kota Rani",
      "Rinchana",
      "Suhadeva",
      "Udayanadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-417",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "16 March 1846",
      "26 October 1846",
      "15 August 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-418",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-419",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-420",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Two women members",
      "One woman member",
      "Five women members",
      "Three women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-421",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-422",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Gangabal Lake",
      "Kolahoi Glacier",
      "Baralacha La"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-423",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Sindh River",
      "Rambiara River",
      "Lidder River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-424",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-425",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Overa-Aru Sanctuary",
      "Dachigam National Park",
      "Ramnagar Sanctuary",
      "Jasrota Wildlife Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-426",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Kathua and Samba",
      "Rajouri and Poonch",
      "Pulwama (Pampore) and Kishtwar"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-427",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Kishanganga Project",
      "Baglihar Project",
      "Salal Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-428",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Platanus orientalis (Chinar)",
      "Salix alba (White Willow)",
      "Pinus wallichiana (Kail)",
      "Cedrus deodara (Deodar)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-429",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-430",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Kargil",
      "Kathua",
      "Reasi"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-431",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Kahwa",
      "Noon Chai (Sheer Chai)",
      "Sulaimani"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-432",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-433",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Lala Lajpat Rai",
      "Bhagat Singh",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-434",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade",
      "Bal Gangadhar Tilak"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-435",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Bara-lacha La",
      "Nathu La Pass",
      "Rohtang Pass",
      "Shipki La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-436",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Punjab",
      "Rajasthan",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-437",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Kaziranga National Park",
      "Jim Corbett National Park",
      "Manas National Park",
      "Sundarbans National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-438",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Kyoto Protocol",
      "Stockholm Convention",
      "Bonn Convention",
      "Ramsar Convention (1971)"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-439",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Emperor Ashoka",
      "Harshavardhana",
      "Chandragupta Maurya",
      "Samudragupta"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-440",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Vasudeva I",
      "Huvishka"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-441",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Yashomati",
      "Queen Didda",
      "Queen Sugandha",
      "Kota Rani"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-442",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Kota Rani",
      "Rinchana",
      "Suhadeva",
      "Udayanadeva"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-443",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "26 October 1846",
      "16 March 1846",
      "15 August 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-444",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-445",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "10 seats for SCs and 5 seats for STs",
      "Zero reserved seats",
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-446",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "One woman member",
      "Three women members",
      "Two women members",
      "Five women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-447",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-448",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Baralacha La",
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Verinag (at the base of Pir Panjal)"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-449",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Doodhganga River",
      "Rambiara River",
      "Lidder River",
      "Sindh River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-450",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Wular Lake",
      "Gangabal Lake",
      "Manasbal Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-451",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Jasrota Wildlife Sanctuary",
      "Ramnagar Sanctuary",
      "Dachigam National Park",
      "Overa-Aru Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-452",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Rajouri and Poonch",
      "Pulwama (Pampore) and Kishtwar",
      "Kathua and Samba"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-453",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Kishanganga Project",
      "Baglihar Project",
      "Salal Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-454",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Pinus wallichiana (Kail)",
      "Platanus orientalis (Chinar)",
      "Cedrus deodara (Deodar)",
      "Salix alba (White Willow)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-455",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-456",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Reasi",
      "Kargil",
      "Kathua"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-457",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Noon Chai (Sheer Chai)",
      "Sulaimani",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-458",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-459",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Captain Mohan Singh and Rash Behari Bose",
      "Bhagat Singh",
      "Lala Lajpat Rai",
      "Sardar Ajit Singh"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-460",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-461",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Rohtang Pass",
      "Shipki La Pass",
      "Bara-lacha La",
      "Nathu La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-462",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Rajasthan",
      "Punjab",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-463",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Manas National Park",
      "Sundarbans National Park",
      "Jim Corbett National Park",
      "Kaziranga National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-464",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Ramsar Convention (1971)",
      "Bonn Convention",
      "Stockholm Convention",
      "Kyoto Protocol"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-465",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Chandragupta Maurya",
      "Emperor Ashoka",
      "Harshavardhana",
      "Samudragupta"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-466",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Emperor Kanishka",
      "Kujula Kadphises",
      "Huvishka",
      "Vasudeva I"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-467",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Sugandha",
      "Queen Yashomati",
      "Kota Rani",
      "Queen Didda"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-468",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Udayanadeva",
      "Rinchana",
      "Suhadeva",
      "Kota Rani"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-469",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "15 August 1846",
      "16 March 1846",
      "26 October 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-470",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-471",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats",
      "10 seats for SCs and 5 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-472",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "One woman member",
      "Five women members",
      "Three women members",
      "Two women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-473",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-474",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Verinag (at the base of Pir Panjal)",
      "Kolahoi Glacier",
      "Gangabal Lake",
      "Baralacha La"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-475",
    "categoryId": "general",
    "question": "Which major tributary of the Jhelum joins it near Shadipora in Ganderbal district, creating a sacred confluence known as \"Prayag\" of Kashmir?",
    "answer": "Sindh River",
    "options": [
      "Rambiara River",
      "Lidder River",
      "Doodhganga River",
      "Sindh River"
    ],
    "explanation": "The Sindh River (originating near Zoji La) merges with the Jhelum at Shadipora, where ashes of deceased Hindus are traditionally immersed.",
    "tip": "Sindh meets Jhelum at Shadipora (Prayag of Kashmir).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-476",
    "categoryId": "general",
    "question": "Which high-altitude lake in Kashmir is dedicated to Lord Shiva and sits at the foot of Mount Harmukh at an elevation of 3,570 meters?",
    "answer": "Gangabal Lake",
    "options": [
      "Gangabal Lake",
      "Manasbal Lake",
      "Wular Lake",
      "Dal Lake"
    ],
    "explanation": "Gangabal Lake (also called Harmukh Ganga) is considered sacred by Kashmiri Pandits who perform annual pilgrimages (Harmukh Ganga Yatra).",
    "tip": "Gangabal sits at the foot of Mount Harmukh.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-477",
    "categoryId": "general",
    "question": "Which wildlife sanctuary located in the Kathua district of Jammu is famous for its cheetah/leopard and barking deer population?",
    "answer": "Jasrota Wildlife Sanctuary",
    "options": [
      "Dachigam National Park",
      "Jasrota Wildlife Sanctuary",
      "Ramnagar Sanctuary",
      "Overa-Aru Sanctuary"
    ],
    "explanation": "Jasrota Wildlife Sanctuary in Kathua district is nestled along the Ujh River, protecting bamboo and mixed deciduous wildlife.",
    "tip": "Jasrota Wildlife Sanctuary is in Kathua.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-478",
    "categoryId": "general",
    "question": "Kashmir's prized Saffron (Crocus sativus), known for its distinct aroma, chemical purity, and deep red color, is primarily cultivated in which district?",
    "answer": "Pulwama (Pampore) and Kishtwar",
    "options": [
      "Baramulla and Kupwara",
      "Kathua and Samba",
      "Pulwama (Pampore) and Kishtwar",
      "Rajouri and Poonch"
    ],
    "explanation": "Pampore in Pulwama district is known as the \"Saffron Bowl of Kashmir\", producing the world-renowned GI-tagged saffron.",
    "tip": "Pampore (Pulwama) is the Saffron Town of India.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-479",
    "categoryId": "general",
    "question": "Which major hydroelectric project with a capacity of 390 MW is situated on the Jhelum River in Baramulla district?",
    "answer": "Uri Hydroelectric Project (Uri-I & Uri-II)",
    "options": [
      "Kishanganga Project",
      "Uri Hydroelectric Project (Uri-I & Uri-II)",
      "Baglihar Project",
      "Salal Project"
    ],
    "explanation": "The Uri Hydroelectric Projects are run-of-the-river power stations built on the Jhelum River near the Line of Control.",
    "tip": "Uri Project is on the Jhelum River in Baramulla.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-480",
    "categoryId": "general",
    "question": "The world-famous cricket bats of Kashmir are manufactured predominantly from the wood of which indigenous tree in the Sangam-Bijbehara belt?",
    "answer": "Salix alba (White Willow)",
    "options": [
      "Salix alba (White Willow)",
      "Cedrus deodara (Deodar)",
      "Platanus orientalis (Chinar)",
      "Pinus wallichiana (Kail)"
    ],
    "explanation": "Kashmir willow (Salix alba caerulea) is renowned globally alongside English willow for crafting high-grade international cricket bats.",
    "tip": "Kashmir cricket bats = White Willow (Salix alba).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-481",
    "categoryId": "general",
    "question": "What is the traditional group dance of Jammu region performed by villagers around a campfire to honor local deities (Gram Devatas)?",
    "answer": "Kud Dance",
    "options": [
      "Bhand Pather",
      "Dumhal Dance",
      "Kud Dance",
      "Rouf Dance"
    ],
    "explanation": "Kud is the traditional ritualistic folk dance of Jammu's hills (Bhadarwah, Kishtwar, Udhampur) celebrated after harvesting.",
    "tip": "Kud is the traditional folk dance of Jammu hills.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-482",
    "categoryId": "general",
    "question": "The conical wicker basket called \"Kangri\" used for heating in Kashmir is primarily manufactured in which specialized district center?",
    "answer": "Chadoora and Tsrar-i-Sharief (Budgam district)",
    "options": [
      "Chadoora and Tsrar-i-Sharief (Budgam district)",
      "Reasi",
      "Kargil",
      "Kathua"
    ],
    "explanation": "Budgam district, especially around Chadoora and Charar-i-Sharief, is famous for weaving high-quality willow-wicker Kangris.",
    "tip": "Budgam is famed for artistic Kangri wicker craft.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-483",
    "categoryId": "general",
    "question": "The traditional saltish pink tea of Kashmir prepared with baking soda, milk, and crushed dry fruits is known as:",
    "answer": "Noon Chai (Sheer Chai)",
    "options": [
      "Darjeeling Chai",
      "Noon Chai (Sheer Chai)",
      "Sulaimani",
      "Kahwa"
    ],
    "explanation": "Noon Chai (Noon = Salt in Kashmiri) is a distinctive pink tea brewed with green tea leaves, sodium bicarbonate, and milk.",
    "tip": "Noon Chai = Pink salted Kashmiri tea; Kahwa = Saffron spiced tea.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-484",
    "categoryId": "general",
    "question": "The historic Non-Cooperation Movement was launched by Mahatma Gandhi in which year following the Khilafat and Rowlatt agitations?",
    "answer": "1920",
    "options": [
      "1915",
      "1920",
      "1930",
      "1942"
    ],
    "explanation": "The Non-Cooperation Movement was launched in August 1920 and called off in February 1922 following the Chauri Chaura incident.",
    "tip": "Non-Cooperation Movement launched in 1920.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-485",
    "categoryId": "general",
    "question": "Who founded the \"Azad Hind Fauj\" (Indian National Army) originally in Singapore before Netaji Subhas Chandra Bose took over its leadership in 1943?",
    "answer": "Captain Mohan Singh and Rash Behari Bose",
    "options": [
      "Lala Lajpat Rai",
      "Bhagat Singh",
      "Sardar Ajit Singh",
      "Captain Mohan Singh and Rash Behari Bose"
    ],
    "explanation": "The INA was initially formed by Captain Mohan Singh with Indian POWs in Malaya and reorganized by Rash Behari Bose before handing over to Netaji.",
    "tip": "INA founded by Mohan Singh & Rash Behari Bose; led by Netaji.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-486",
    "categoryId": "general",
    "question": "Who was known as the \"Grand Old Man of India\" and formulated the \"Drain of Wealth\" theory in his book \"Poverty and Un-British Rule in India\"?",
    "answer": "Dadabhai Naoroji",
    "options": [
      "Bal Gangadhar Tilak",
      "Dadabhai Naoroji",
      "Gopal Krishna Gokhale",
      "Mahadev Govind Ranade"
    ],
    "explanation": "Dadabhai Naoroji calculated India's national income for the first time in 1867–68 and exposed colonial economic exploitation.",
    "tip": "Dadabhai Naoroji = Grand Old Man of India & Drain of Wealth theory.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-487",
    "categoryId": "general",
    "question": "Which mountain pass in the Greater Himalayas connects the state of Sikkim with the Tibet Autonomous Region of China on the historic Silk Route?",
    "answer": "Nathu La Pass",
    "options": [
      "Shipki La Pass",
      "Rohtang Pass",
      "Bara-lacha La",
      "Nathu La Pass"
    ],
    "explanation": "Nathu La (altitude 4,310 m) in East Sikkim links India with Tibet and was reopened for border trade in 2006.",
    "tip": "Nathu La connects Sikkim with Tibet.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-488",
    "categoryId": "general",
    "question": "According to the 2011 Census of India, which state recorded the lowest female sex ratio?",
    "answer": "Haryana (879 females per 1,000 males)",
    "options": [
      "Haryana (879 females per 1,000 males)",
      "Rajasthan",
      "Punjab",
      "Uttar Pradesh"
    ],
    "explanation": "In the 2011 Census, Haryana had the lowest sex ratio among Indian states at 879 females per 1,000 males.",
    "tip": "Haryana recorded lowest sex ratio in 2011 (879).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-489",
    "categoryId": "general",
    "question": "Which national park in Assam is globally renowned as the premier sanctuary for the Great One-horned Rhinoceros and is a UNESCO World Heritage Site?",
    "answer": "Kaziranga National Park",
    "options": [
      "Sundarbans National Park",
      "Jim Corbett National Park",
      "Kaziranga National Park",
      "Manas National Park"
    ],
    "explanation": "Kaziranga hosts two-thirds of the world's population of the endangered great one-horned rhinoceros.",
    "tip": "Kaziranga = One-horned Rhinoceros in Assam.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-490",
    "categoryId": "general",
    "question": "What is the international environmental treaty that designates wetlands of international importance, especially as waterfowl habitats?",
    "answer": "Ramsar Convention (1971)",
    "options": [
      "Bonn Convention",
      "Kyoto Protocol",
      "Ramsar Convention (1971)",
      "Stockholm Convention"
    ],
    "explanation": "Signed in Ramsar, Iran in 1971, the Ramsar Convention protects wetlands like Wular Lake, Mansar-Surinsar, and Hokersar in J&K.",
    "tip": "Ramsar Convention (1971) protects wetlands.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-491",
    "categoryId": "general",
    "question": "Which ancient Mauryan emperor is credited by Kalhana in Rajatarangini with founding the city of Srinagari (original Srinagar) and spreading Buddhism in Kashmir?",
    "answer": "Emperor Ashoka",
    "options": [
      "Samudragupta",
      "Chandragupta Maurya",
      "Emperor Ashoka",
      "Harshavardhana"
    ],
    "explanation": "According to Kalhana, Emperor Ashoka built the ancient city of Srinagari near modern Pandrethan in the 3rd century BCE.",
    "tip": "Ashoka founded Srinagari (Pandrethan).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-492",
    "categoryId": "general",
    "question": "Under which Kushan ruler was the 4th Buddhist Council convened at Kundalvana in Kashmir in the 1st century CE?",
    "answer": "Emperor Kanishka",
    "options": [
      "Huvishka",
      "Vasudeva I",
      "Emperor Kanishka",
      "Kujula Kadphises"
    ],
    "explanation": "Kanishka organized the 4th Buddhist Council in Kashmir, presided over by Vasumitra and Asvagosha, where Mahayana Buddhism was codified.",
    "tip": "4th Buddhist Council = Kanishka at Kundalvana (Kashmir).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-493",
    "categoryId": "general",
    "question": "Which celebrated Queen ruler of Kashmir belonging to the Lohara dynasty ruled in the 10th century CE and is noted for her strong administrative governance?",
    "answer": "Queen Didda",
    "options": [
      "Queen Yashomati",
      "Queen Sugandha",
      "Queen Didda",
      "Kota Rani"
    ],
    "explanation": "Queen Didda ruled Kashmir for over four decades (as regent and sole monarch from 980 to 1003 CE), displaying formidable political acumen.",
    "tip": "Queen Didda = Legendary 10th-century ruler of Kashmir.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-494",
    "categoryId": "general",
    "question": "Who was the last sovereign Hindu ruler of Kashmir who resisted Tartar invasions and died in 1339 CE, ending ancient dynastic rule?",
    "answer": "Kota Rani",
    "options": [
      "Udayanadeva",
      "Rinchana",
      "Suhadeva",
      "Kota Rani"
    ],
    "explanation": "Kota Rani was the last Hindu queen of Kashmir, defending the valley until Shams-ud-din Shah Mir established the Shah Mir dynasty in 1339.",
    "tip": "Kota Rani was the last Hindu monarch of Kashmir (1339).",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-495",
    "categoryId": "general",
    "question": "The historic Treaty of Amritsar (1846) by which Maharaja Gulab Singh acquired Kashmir was signed on which date?",
    "answer": "16 March 1846",
    "options": [
      "26 October 1846",
      "15 August 1846",
      "16 March 1846",
      "9 March 1846"
    ],
    "explanation": "The Treaty of Amritsar was signed on 16 March 1846 between the British Government and Gulab Singh, transferring territories for 75 lakh rupees.",
    "tip": "Treaty of Amritsar signed on 16 March 1846.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-496",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Union Territory of Jammu and Kashmir has a Legislative Assembly with a normal tenure of:",
    "answer": "5 years",
    "options": [
      "4 years",
      "5 years",
      "6 years",
      "7 years"
    ],
    "explanation": "Prior to 2019, the J&K assembly had a 6-year term. Under the 2019 Act, the Legislative Assembly of J&K UT has a tenure of 5 years, identical to other Indian states.",
    "tip": "J&K UT Assembly tenure = 5 years (changed from 6 years).",
    "difficulty": "beginner"
  },
  {
    "id": "gen-497",
    "categoryId": "general",
    "question": "Under Section 57 of the J&K Reorganisation Act, 2019, how many seats in the Legislative Assembly are reserved for Scheduled Castes (SCs) and Scheduled Tribes (STs) respectively following delimitation?",
    "answer": "7 seats for SCs and 9 seats for STs",
    "options": [
      "6 seats for SCs and 6 seats for STs",
      "7 seats for SCs and 9 seats for STs",
      "Zero reserved seats",
      "10 seats for SCs and 5 seats for STs"
    ],
    "explanation": "The Delimitation Commission reserved 9 assembly seats for Scheduled Tribes (STs) for the first time in J&K history, alongside 7 seats for SCs.",
    "tip": "J&K Delimitation: 9 seats for STs and 7 for SCs.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-498",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, the Lieutenant Governor may nominate how many women members to the Legislative Assembly if women are not adequately represented?",
    "answer": "Two women members",
    "options": [
      "Three women members",
      "Five women members",
      "One woman member",
      "Two women members"
    ],
    "explanation": "Section 15 provides that the Lieutenant Governor may nominate two women members to the Legislative Assembly.",
    "tip": "LG can nominate 2 women to J&K Assembly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gen-499",
    "categoryId": "general",
    "question": "Under the J&K Reorganisation Act, 2019, how many seats remain vacant in the Legislative Assembly to represent Pakistan-occupied Jammu & Kashmir (PoJK)?",
    "answer": "24 seats",
    "options": [
      "20 seats",
      "24 seats",
      "25 seats",
      "30 seats"
    ],
    "explanation": "Section 14(4) preserves 24 seats in the Legislative Assembly vacant for the territory under illegal Pakistani occupation.",
    "tip": "24 seats reserved for PoJK remain vacant.",
    "difficulty": "beginner"
  },
  {
    "id": "gen-500",
    "categoryId": "general",
    "question": "The Jhelum River (Vitasta) originates from a deep freshwater spring located at which historic site?",
    "answer": "Verinag (at the base of Pir Panjal)",
    "options": [
      "Gangabal Lake",
      "Kolahoi Glacier",
      "Baralacha La",
      "Verinag (at the base of Pir Panjal)"
    ],
    "explanation": "The Jhelum rises from the spring at Verinag in Anantnag district, celebrated for the octagonal stone basin built by Mughal Emperor Jahangir.",
    "tip": "Jhelum springs from Verinag.",
    "difficulty": "beginner"
  }
];
