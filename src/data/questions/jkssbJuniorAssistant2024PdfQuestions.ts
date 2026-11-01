import { Flashcard } from '../../types';

/**
 * 80 Official Examination MCQs from JKSSB Junior Assistant OMR Examination 2024 (Series A - 25-08-2024)
 * Source: /public/assets/aistudio/SET-A_JUNIOR_ASSISTANT_25-08-2024_a969da07.pdf
 * Complete transcription with all 80 questions across:
 * - General English (20 MCQs)
 * - General Knowledge & J&K UT Special (20 MCQs)
 * - Knowledge of Computers & IT (20 MCQs)
 * - Mathematics, Reasoning & Statistics (20 MCQs)
 */
export const JKSSB_JA_2024_PDF_QUESTIONS: Flashcard[] = [
  // --- General English (Q1 - Q15) ---
  {
    id: "jkssb-ja-2024-1",
    categoryId: "grammar",
    question: "Given below are five scattered segments of two sentences. Indicate the correct sequence which correctly assembles the segments and completes the sentence.\nP. Mornings at her grandmother's house\nQ. Baked bread filled the kitchen\nR. The aroma of freshly\nS. It reminded her of childhood\nThe correct sequence should be:",
    answer: "RQSP",
    options: ["SQRP", "RQSP", "SPRQ", "QRPS"],
    explanation: "Segment R ('The aroma of freshly') connects directly to Q ('Baked bread filled the kitchen'). Then sentence two begins with S ('It reminded her of childhood') and finishes with P ('Mornings at her grandmother's house'), creating the coherent narrative: 'The aroma of freshly baked bread filled the kitchen. It reminded her of childhood mornings at her grandmother's house.'",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q1)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-2",
    categoryId: "grammar",
    question: "In this question, the sentence is broken into four parts. Find out the error part in the sentence from the given options and mark your answer.\nHis perspicacious (a)/ observations would have revealed (b)/ insights that had (c)/ previously gone unnoticed (d).",
    answer: "His perspicacious",
    options: [
      "His perspicacious",
      "Observations would have revealed",
      "Insights that had",
      "Previously gone unnoticed"
    ],
    explanation: "'Perspicacious' refers to persons who possess keen insight ('a perspicacious detective'). When describing written or spoken observations, explanations, or language, the correct adjective is 'perspicuous' (clearly expressed, lucid). Hence part (a) contains the diction error.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q2)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-3",
    categoryId: "grammar",
    question: "Identify the sentence that correctly changes the following direct speech into indirect speech.\nHe said, \"I am going to the market now.\"",
    answer: "He said that he was going to the market then.",
    options: [
      "He said that he was going to the market then.",
      "He said that he is going to the market now.",
      "He says that he is going to the market now.",
      "He said that I was going to the market then."
    ],
    explanation: "In indirect speech with a past reporting verb ('said'): the first-person pronoun 'I' shifts to 'he', present continuous 'am going' shifts to past continuous 'was going', and time adverb 'now' shifts to 'then'.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q3)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-4",
    categoryId: "grammar",
    question: "Fill in the blank using a suitable modal:\nWe _____ have locked the gate. Then the dog wouldn't have got out.",
    answer: "ought to",
    options: ["ought to", "would", "may", "have to"],
    explanation: "'Ought to have + past participle' expresses an unfulfilled past moral obligation or recommended action ('We ought to have locked the gate', meaning we should have locked it, but didn't).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q4)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-5",
    categoryId: "grammar",
    question: "Fill in the blank using suitable articles. When no article is required, select no article among the given options.\nSudha is studying in _ Canadian University. From there, it will take _ hour for her to reach the airport.",
    answer: "a, an",
    options: ["an, a", "the, an", "the, a", "a, an"],
    explanation: "'Canadian' starts with a consonant sound /k/, taking indefinite article 'a'. 'Hour' begins with a silent 'h' and vowel sound /aʊər/, requiring 'an'.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q5)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-6",
    categoryId: "grammar",
    question: "From the passage: Last weekend, my friend and I decided to go for a hike in the mountains... My friend looked at me and said, \"Climbing this hill will be a piece of cake!\"\nPick out the correct meaning of the given idiom/Phrase: \"a piece of cake\"",
    answer: "A facile task.",
    options: [
      "A quirky experience.",
      "A strenuous task.",
      "A facile task.",
      "A bizarre event."
    ],
    explanation: "The idiom 'a piece of cake' means something very easy to accomplish or an effortless, facile task.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q6)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-7",
    categoryId: "grammar",
    question: "Based on the hiking passage (referring to 'my friend and I', 'we packed our bags', 'they nodded'):\nWhich of the following pronouns is NOT used in the passage?",
    answer: "She",
    options: ["We", "They", "Our", "She"],
    explanation: "The passage uses first-person plural pronouns ('We', 'our') and singular/plural third-person ('They'), but nowhere does it mention or use the third-person feminine pronoun 'She'.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q7)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-8",
    categoryId: "grammar",
    question: "Which of the following words from the passage has a Homonym/Homophone pair?",
    answer: "Hear.",
    options: ["Bags.", "Across.", "Hear.", "View."],
    explanation: "'Hear' (/hɪər/) is a classic homophone with 'here' (/hɪər/). Both share identical pronunciation but have distinct spellings and meanings.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q8)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-9",
    categoryId: "grammar",
    question: "Select the sentence with the correct punctuation.",
    answer: "Jaya said, 'They were getting really excited and were shouting \"Come on!\"'",
    options: [
      "Jaya said, 'They were getting really excited and were shouting \"Come on!\"'",
      "Jaya said They were getting really excited and were shouting \"Come on!\"",
      "Jaya said, 'they were getting really excited and were shouting' \"Come on!\"",
      "Jaya said, 'they were getting really excited and were shouting' Come on."
    ],
    explanation: "Option A properly introduces quoted speech with a comma after the introductory verb, encloses the reported speech in single quotes, and nests the direct shouted exclamation in double quotes with appropriate end punctuation.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q9)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-10",
    categoryId: "grammar",
    question: "Select the Synonym of the word:\nGallant",
    answer: "Valiant",
    options: ["Valiant", "Coward", "Craven", "Timid"],
    explanation: "'Gallant' means brave, heroic, or courageous. 'Valiant' is its direct synonym, while coward, craven, and timid are antonyms.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q10)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-11",
    categoryId: "grammar",
    question: "Select the antonym of the word:\nIdiosyncrasy",
    answer: "Conformity.",
    options: ["Erraticism.", "Conformity.", "Peculiarity.", "Oddity."],
    explanation: "'Idiosyncrasy' refers to an individual's unique quirk, eccentric habit, or peculiarity. Its opposite is 'Conformity' (adherence to standard or conventional behavior).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q11)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-12",
    categoryId: "grammar",
    question: "Choose the correct meaning of the idiom:\n\"By the skin of your teeth\"",
    answer: "narrowly avoiding something.",
    options: [
      "be in a comfortable situation.",
      "to do more than you can actually do.",
      "to spoil someone's moment of praise.",
      "narrowly avoiding something."
    ],
    explanation: "The idiom 'by the skin of your teeth' originates from the Book of Job and signifies barely escaping disaster or narrowly succeeding by the smallest possible margin.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q12)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-13",
    categoryId: "grammar",
    question: "Fill in the blanks with appropriate prepositions:\nShe stood ___ the window, lost in thought ___ her future plans for the upcoming year.",
    answer: "beside, about.",
    options: ["by, about.", "beside, towards.", "by, towards.", "beside, about."],
    explanation: "Standing 'beside' (next to) the window and being lost in thought 'about' (concerning) future plans is the grammatically standard prepositional collocation.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q13)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-14",
    categoryId: "grammar",
    question: "Fill in the blanks with appropriate prepositions:\nThe team worked tirelessly ___ the guidance of their coach to improve their performance ___ the challenging season.",
    answer: "under, during.",
    options: ["by, about", "under, towards.", "under, during.", "by, during."],
    explanation: "One works 'under the guidance' of a mentor or coach, and activities occurring across an entire competitive period take place 'during the season'.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q14)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-15",
    categoryId: "grammar",
    question: "Change the following sentence from Active voice to Passive voice:\nThey are organizing a farewell party next week.",
    answer: "A farewell party is being organized by them next week.",
    options: [
      "A farewell party is being organized next week.",
      "A farewell party is being organized by them next week.",
      "A farewell party was organized by them next week.",
      "A farewell party will be organized by them next week."
    ],
    explanation: "Present continuous active ('are organizing') changes in passive voice to 'is being + past participle' ('is being organized') plus the agent ('by them').",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q15)",
    difficulty: "beginner"
  },

  // --- Mathematics & Mental Ability (Q16 - Q17) ---
  {
    id: "jkssb-ja-2024-16",
    categoryId: "math",
    question: "Find the wrong number in the following number series:\n336, 272, 321, 286, 310, 294.",
    answer: "286",
    options: ["272", "286", "321", "310"],
    explanation: "The series follows alternating square differences: 336 - 8² (64) = 272; 272 + 7² (49) = 321; 321 - 6² (36) = 285 (given as 286!); 285 + 5² (25) = 310; 310 - 4² (16) = 294. Thus, 286 is incorrect and should be 285.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q16)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-17",
    categoryId: "math",
    question: "Find the last term in the number series:\n234, 117, 351, 87.75, 438.75, ?",
    answer: "73.125",
    options: ["143.75", "117.25", "93.50", "73.125"],
    explanation: "The pattern alternates division and multiplication with incrementing integers: 234 ÷ 2 = 117; 117 × 3 = 351; 351 ÷ 4 = 87.75; 87.75 × 5 = 438.75; next term = 438.75 ÷ 6 = 73.125.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q17)",
    difficulty: "intermediate"
  },

  // --- Computer Science & IT (Q18 - Q31) ---
  {
    id: "jkssb-ja-2024-18",
    categoryId: "cs",
    question: "What is the relationship between bits and bytes?",
    answer: "1 byte = 8 bits.",
    options: [
      "1 bit = 8 bytes.",
      "1 byte = 8 bits.",
      "1 bit = 4 bytes.",
      "1 byte = 4 bits."
    ],
    explanation: "A byte is a standard unit of digital information consisting of 8 consecutive binary digits (bits). (4 bits make a nibble).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q18)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-19",
    categoryId: "cs",
    question: "The first supercomputer developed by the Centre for Development of Advanced Computing (C-DAC), Pune is:",
    answer: "Param 8000.",
    options: ["Param 8000.", "Mihir 2000.", "Virgo 8000.", "SAGA - 220."],
    explanation: "PARAM 8000, unveiled in 1991 under the leadership of Dr. Vijay Bhatkar at C-DAC Pune, was India's first indigenously developed supercomputer.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q19)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-20",
    categoryId: "cs",
    question: "Which of the following is a product of Meta Platforms Inc.?",
    answer: "Instagram.",
    options: ["Instagram.", "Azure.", "Skype.", "Github."],
    explanation: "Instagram (acquired in 2012) is owned and operated by Meta Platforms Inc. Azure, Skype, and GitHub are products of Microsoft Corporation.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q20)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-21",
    categoryId: "cs",
    question: "Which of the following is NOT an e-commerce website?",
    answer: "Facebook.",
    options: ["AJIO", "Amazon.", "Facebook.", "Bookmyshow."],
    explanation: "Facebook is primarily a social networking service, whereas AJIO (apparel), Amazon (retail), and BookMyShow (ticketing) operate as commercial transactional e-commerce platforms.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q21)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-22",
    categoryId: "cs",
    question: "Match the computer generation with its corresponding characteristic:\nList - I (Computer generation):\ni) First Generation\nii) Second Generation\niii) Third Generation\niv) Fourth Generation\nv) Fifth Generation\nList - II (Characteristic):\n1) Utilized microprocessors, personal computers emerged.\n2) Used vacuum tubes, large size, limited processing power.\n3) Featured transistors, smaller and more reliable.\n4) Focused on parallel processing, artificial intelligence, and natural language processing.\n5) Introduced integrated circuits, reduced size and power consumption.",
    answer: "i-2, ii-3, iii-5, iv-1, v-4",
    options: [
      "i-2, ii-3, iii-1, iv-4, v-5",
      "i-4, ii-5, iii-1, iv-3, v-2",
      "i-2, ii-3, iii-5, iv-1, v-4",
      "i-2, ii-1, iii-4, iv-5, v-3"
    ],
    explanation: "First gen used vacuum tubes (2); second gen introduced transistors (3); third gen introduced integrated circuits (5); fourth gen utilized microprocessors (1); fifth gen focuses on AI and parallel processing (4).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q22)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-23",
    categoryId: "cs",
    question: "Consider the following statements about Device Driver:\n1. It a hardware device that is attached to a computer.\n2. It acts as a translator between the hardware device and operating systems or applications that use it.\n3. It instructs computer on how to communicate with the device by translating the operating system's instructions into a language that a device can understand in order to perform the necessary task.\n4. Examples of device driver: printer driver, display driver, USB driver, sound card driver, motherboard driver, ROM driver, etc.\nWhich of the above statements is/are correct?",
    answer: "2, 3 and 4",
    options: ["1 and 3", "1, 2 and 3", "2, 3 and 4", "1, 2, 3 and 4"],
    explanation: "Statement 1 is incorrect because a device driver is system software, not hardware. Statements 2, 3, and 4 accurately describe its translator function and examples.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q23)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-24",
    categoryId: "cs",
    question: "Which of the following is an example of internal hardware devices?",
    answer: "Video card.",
    options: ["Video card.", "Touchpad.", "Webcam.", "Microphone."],
    explanation: "A video card (graphics processing card) is installed internally inside the computer's system unit onto the motherboard expansion slot, whereas touchpads, webcams, and microphones are peripherals/input devices.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q24)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-25",
    categoryId: "cs",
    question: "Direct Memory Access (DMA) controller is a feature within the computer that:",
    answer: "Transfers the data to the main memory without intervention of CPU.",
    options: [
      "Transfers the data to the main memory without intervention of CPU.",
      "Coordinates communication between the computer and network devices.",
      "Provides a graphical interface for managing system resources.",
      "Manages the CPU's clock speed and temperature."
    ],
    explanation: "DMA enables hardware subsystems to transfer blocks of data directly to and from main RAM without channeling every word through the central CPU, drastically boosting I/O throughput.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q25)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-26",
    categoryId: "cs",
    question: "Which of the following is NOT a real time operating system (RTOS)?",
    answer: "Palm OS.",
    options: ["RTLinux.", "Palm OS.", "QNX.", "VxWorks."],
    explanation: "Palm OS was designed for personal digital assistants (PDAs) with general event loops without strict deterministic timing guarantees. RTLinux, QNX, and VxWorks are well-known hard/soft real-time operating systems.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q26)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-27",
    categoryId: "cs",
    question: "Match List - I with List - II\nList - I (Command):\ni) Replace\nii) Insert Hyperlink\niii) Paste\niv) Cut\nList - II (Shortcut keys on windows):\n1) Ctrl + K\n2) Ctrl + H\n3) Ctrl + X\n4) Ctrl + V",
    answer: "i-2, ii-1, iii-4, iv-3",
    options: [
      "i-1, ii-2, iii-3, iv-4",
      "i-4, ii-2, iii-1, iv-3",
      "i-2, ii-1, iii-4, iv-3",
      "i-3, ii-1, iii-4, iv-2"
    ],
    explanation: "Ctrl + H opens Replace (2); Ctrl + K inserts Hyperlink (1); Ctrl + V Pastes clipboard content (4); Ctrl + X Cuts selected item (3).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q27)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-28",
    categoryId: "cs",
    question: "Which of the following is a primary feature of Microsoft Access?",
    answer: "It is a database management system used for creating, managing, and querying databases.",
    options: [
      "It is a web development framework that manages web applications, web services and websites.",
      "It is a spreadsheet application that can capture, display and manipulate data.",
      "It is graphic design software used to create, edit, and manipulate digital images.",
      "It is a database management system used for creating, managing, and querying databases."
    ],
    explanation: "Microsoft Access is a relational database management system (RDBMS) combining the relational Jet Database Engine with a graphical user interface and software-development tools.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q28)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-29",
    categoryId: "cs",
    question: "Match List - I with List - II\nList - I (Key):\ni) F5\nii) Shift+F5\niii) Alt + F5\niv) Esc\nList - II (Shortcut keys on PowerPoint presentation):\n1) Start the presentation from beginning.\n2) Start the presentation from the current slide.\n3) Start the presentation in presenter view.\n4) End the presentation.",
    answer: "i-1, ii-2, iii-3, iv-4.",
    options: [
      "i-1, ii-2, iii-3, iv-4.",
      "i-3, ii-2, iii-1, iv-4.",
      "i-2, ii-1, iii-4, iv-3.",
      "i-3, ii-1, iii-4, iv-2."
    ],
    explanation: "F5 begins presentation from slide 1 (1); Shift+F5 begins from current slide (2); Alt+F5 opens Presenter View (3); Esc exits slide show (4).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q29)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-30",
    categoryId: "cs",
    question: "Which of the following statements about MS PowerPoint's slide master features is NOT true?",
    answer: "Slide masters cannot be used to modify the font and background of slides.",
    options: [
      "Changes made to the slide master affect all slides in the presentation that use the same layout.",
      "You can create multiple slide masters within a single presentation.",
      "Slide masters cannot be used to modify the font and background of slides.",
      "Custom slide layouts can be created and saved in the slide master."
    ],
    explanation: "Statement C is false: altering default typography, font theme, color schemes, and slide backgrounds across the entire presentation is precisely the central purpose of the Slide Master.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q30)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-31",
    categoryId: "cs",
    question: "Which of the following statements about email protocols and services is NOT true?",
    answer: "POP3 enables users to access their email messages directly on the server without downloading them.",
    options: [
      "POP3 enables users to access their email messages directly on the server without downloading them.",
      "IMAP allows users to access and manage their email on multiple devices while keeping the messages synchronized.",
      "SMTP is used for sending outgoing email messages from the client to the server.",
      "Email clients can use SSL/TLS to encrypt the communication between the client and the server for secure email transmission."
    ],
    explanation: "Statement A is false: POP3 (Post Office Protocol 3) downloads messages off the mail server to the local storage, typically deleting them from the server. Accessing and managing mail live on the server without downloading is done by IMAP.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q31)",
    difficulty: "intermediate"
  },

  // --- Reading Comprehension (General English) (Q32 - Q36) ---
  {
    id: "jkssb-ja-2024-32",
    categoryId: "grammar",
    question: "From the passage about holidaying in the Continent: \"We both enjoyed ourselves and were sorry when the week was over... on parting our behaviour was absolutely different. He was plunged in despair. He felt that because the holiday was over all happiness was over until the world ended.\"\nWhy was the Indian friend plunged in despair?",
    answer: "He would never be so happy again",
    options: [
      "He had spent lot of money",
      "He would never be so happy again",
      "He was hopeless",
      "He experienced racial discrimination"
    ],
    explanation: "The text states the friend felt that 'because the holiday was over all happiness was over until the world ended'—meaning he felt he would never experience such joy again.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q32)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-33",
    categoryId: "grammar",
    question: "What is the author's primary intention in the holiday passage?",
    answer: "To contrast the Indian character with the English character.",
    options: [
      "To praise the Englishman.",
      "To ridicule the Indian traditions.",
      "To contrast the Indian character with the English character.",
      "To show that an Indian is sorrowful."
    ],
    explanation: "The author explicitly emphasizes: 'on parting our behaviour was absolutely different... But in me the Englishman came out strong', aiming to contrast emotional expressiveness versus British emotional reserve.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q33)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-34",
    categoryId: "grammar",
    question: "What is 'the Continent' in the context of the British author's passage?",
    answer: "Europe.",
    options: ["Europe.", "Africa.", "South America.", "Russia."],
    explanation: "In traditional British English terminology, 'the Continent' refers specifically to mainland Europe across the English Channel.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q34)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-35",
    categoryId: "grammar",
    question: "What does 'But in me the Englishman came out strong' imply in the passage?",
    answer: "He had the typical English character.",
    options: [
      "He started following Indian traditions.",
      "The Englishman went out of him.",
      "He was a strong Englishman.",
      "He had the typical English character."
    ],
    explanation: "It indicates that the narrator exhibited the stereotypical British cultural trait of emotional stoicism and the 'stiff upper lip', feeling there was no cause to make a dramatic fuss over a routine parting.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q35)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-36",
    categoryId: "grammar",
    question: "What does the author mean by telling his friend to 'buck up'?",
    answer: "Cheer up.",
    options: ["Shut up.", "Cheer up.", "Buckle yourself up.", "Stand up."],
    explanation: "The informal idiom 'buck up' means to cheer up, take courage, or regain high spirits.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q36)",
    difficulty: "beginner"
  },

  // --- General Knowledge, J&K UT Special & Indian Geography (Q37 - Q56) ---
  {
    id: "jkssb-ja-2024-37",
    categoryId: "general",
    question: "After returning from South Africa in 1915, Mahatma Gandhi launched his first successful Satyagraha movement in India in:",
    answer: "Champaran.",
    options: ["Chauri Chaura.", "Champaran.", "Bardoli.", "Dandi."],
    explanation: "Gandhiji launched the Champaran Satyagraha in 1917 in Bihar to fight against the oppressive Tinkathia system imposed on indigo peasant cultivators.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q37)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-38",
    categoryId: "general",
    question: "Which of the following statements related to tribes in India are correct?",
    answer: "Tharu tribes are found in Uttar Pradesh and Uttarakhand.",
    options: [
      "Tharu tribes are found in Uttar Pradesh and Uttarakhand.",
      "Irula, Chenchu and Sumali tribes are found in Kerala.",
      "Garasia tribes are found in Goa.",
      "Gaddi tribes are nomadic herders of Jammu and Kashmir and Himachal Pradesh."
    ],
    explanation: "The Tharu tribal people inhabit the Terai lowlands of Uttar Pradesh, Uttarakhand, and southern Nepal, making statement A geographically precise.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q38)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-39",
    categoryId: "general",
    question: "Salal Hydroelectric Power Project is situated in:",
    answer: "Jammu and Kashmir.",
    options: ["Punjab.", "Jammu and Kashmir.", "Himachal Pradesh.", "Uttarakhand"],
    explanation: "Salal Power Station (690 MW) is a run-of-the-river hydroelectric project built across the Chenab River in the Reasi district of Jammu and Kashmir.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q39)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-40",
    categoryId: "general",
    question: "The Kiru Hydroelectric Power Project is situated in:",
    answer: "Jammu and Kashmir.",
    options: ["Arunachal Pradesh.", "Chhattisgarh.", "Jammu and Kashmir.", "Andhra Pradesh."],
    explanation: "The 624 MW Kiru Hydroelectric Project is located on the Chenab River in Kishtwar district of Jammu and Kashmir, implemented by Chenab Valley Power Projects (CVPP).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q40)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-41",
    categoryId: "general",
    question: "Which of the following States of India does not have a common border with Myanmar?",
    answer: "Assam.",
    options: ["Nagaland.", "Arunachal Pradesh.", "Mizoram.", "Assam."],
    explanation: "India shares a 1,643 km border with Myanmar through four Northeastern states: Arunachal Pradesh, Nagaland, Manipur, and Mizoram. Assam is separated from Myanmar by Nagaland and Manipur.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q41)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-42",
    categoryId: "general",
    question: "The name of the coastline of Tamil Nadu and Andhra Pradesh along the southeastern coast of India is:",
    answer: "Coromandel.",
    options: ["Northern circar", "Malabar.", "Konkan.", "Coromandel."],
    explanation: "The southeastern coastal plain extending between the Eastern Ghats and the Bay of Bengal through Tamil Nadu and southern Andhra Pradesh is the Coromandel Coast. (Malabar is southwest/Kerala; Konkan is western Maharashtra/Goa).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q42)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-43",
    categoryId: "general",
    question: "Which State of India has international borders with three countries, namely Nepal, Bhutan and China?",
    answer: "Sikkim.",
    options: ["Meghalaya.", "Mizoram.", "Sikkim.", "Assam."],
    explanation: "Sikkim shares international borders with Nepal to the west, the Tibet Autonomous Region of China to the north and northeast, and Bhutan to the east.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q43)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-44",
    categoryId: "general",
    question: "Which of the following lakes of India is located in Jammu and Kashmir?",
    answer: "Anchar Lake.",
    options: ["Phulhar Lake.", "Kolleru Lake.", "Anchar Lake.", "Hamirsar Lake."],
    explanation: "Anchar Lake is located near Soura in the Srinagar district of Jammu and Kashmir, connected to the Dal Lake via the Amir Khan Nallah channel. (Phulhar is in UP, Kolleru in Andhra Pradesh, Hamirsar in Gujarat).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q44)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-45",
    categoryId: "general",
    question: "Zojila Pass connects:",
    answer: "Leh and Srinagar.",
    options: ["Leh and Kargil.", "Leh and Srinagar.", "Kashmir and Tibet.", "Nepal and Tibet."],
    explanation: "Zojila (altitude 3,528 m) connects the Kashmir Valley (Srinagar/Sonamarg) with the Drass and Suru valleys leading to Kargil and Leh on National Highway 1.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q45)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-46",
    categoryId: "general",
    question: "Which of the following States has the longest coastline in India?",
    answer: "Gujarat.",
    options: ["Gujarat.", "Maharashtra.", "Tamil Nadu.", "Odisha."],
    explanation: "Gujarat boasts the longest mainland coastline in India, extending approximately 1,600 km along the Kathiawar peninsula and Arabian Sea (accounting for ~24% of the country's mainland coastline).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q46)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-47",
    categoryId: "general",
    question: "The Northernmost point of India, 'Indira Col' is situated in:",
    answer: "Ladakh.",
    options: ["Jammu and Kashmir.", "Ladakh.", "Himachal Pradesh", "Arunachal Pradesh."],
    explanation: "Indira Col (altitude 5,764 m) is located on the Indira Ridge in the Siachen Muztagh of the Karakoram Range, falling administratively in the Union Territory of Ladakh.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q47)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-48",
    categoryId: "general",
    question: "'Kashida' is a traditional form of embroidery famous in which Indian State/UT?",
    answer: "Jammu and Kashmir",
    options: ["Punjab", "West Bengal", "Jammu and Kashmir", "Rajasthan"],
    explanation: "Kashida is the renowned historical needlework embroidery of Kashmir, featuring floral motifs, chinar leaves, and paisley designs worked on pashmina and woollen shawls and pherans.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q48)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-49",
    categoryId: "general",
    question: "Which of the following is not a folk dance belonging to the Union Territory of Jammu and Kashmir?",
    answer: "Dangi.",
    options: ["Dhumal.", "Hafiza.", "Rouf.", "Dangi."],
    explanation: "Dangi is a traditional tribal folk dance belonging to Gujarat and Maharashtra. Dumhal (performed by Wattal men), Hafiza, and Rouf are authentic Kashmiri folk dances.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q49)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-50",
    categoryId: "general",
    question: "Which one of the following is not among the principal/traditional languages of Jammu and Kashmir?",
    answer: "Monpa.",
    options: ["Urdu.", "Gojari.", "Koshur.", "Monpa."],
    explanation: "Monpa is a Tibeto-Burman language spoken by the Monpa people in West Kameng and Tawang districts of Arunachal Pradesh. Urdu, Gojri, and Koshur (Kashmiri) are native/official languages of J&K.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q50)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-51",
    categoryId: "general",
    question: "Which is the deepest lake in Jammu and Kashmir?",
    answer: "Manasbal Lake.",
    options: ["Wular Lake.", "Nigeen Lake.", "Mansar Lake.", "Manasbal Lake."],
    explanation: "Manasbal Lake, situated in Ganderbal district, reaches a depth of approximately 13 metres (43 ft), making it the deepest lake in the Kashmir Valley.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q51)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-52",
    categoryId: "general",
    question: "The Union Territory of Jammu and Kashmir came into existence on:",
    answer: "31-10-2019",
    options: ["31-08-2019", "31-10-2019", "31-12-2019", "31-07-2019"],
    explanation: "Under the Jammu and Kashmir Reorganisation Act 2019, the appointed day on which the State of J&K was reconstituted into the UT of Jammu & Kashmir and the UT of Ladakh was 31st October 2019 (commemorating the birth anniversary of Sardar Vallabhbhai Patel).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q52)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-53",
    categoryId: "general",
    question: "_____ is the coldest inhabited place in India.",
    answer: "Drass",
    options: ["Reasi.", "Drass", "Anantnag.", "Gulmarg."],
    explanation: "Drass town in Kargil district (Ladakh UT) at 3,230 m altitude is known as the 'Gateway to Ladakh' and the second coldest permanently inhabited place in the world, with winter temperatures dropping to −45°C.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q53)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-54",
    categoryId: "general",
    question: "India's longest road tunnel is:",
    answer: "Shyama prasad Mukherjee Tunnel (Chenani - Nashri Tunnel).",
    options: [
      "Shyama prasad Mukherjee Tunnel (Chenani - Nashri Tunnel).",
      "Atal Tunnel",
      "Kuthiran Tunnel.",
      "Banihal Qazigund Road Tunnel."
    ],
    explanation: "Dr. Syama Prasad Mookerjee Tunnel (Chenani–Nashri Tunnel) on NH 44 between Udhampur and Ramban in J&K spans 9.28 km, making it India's longest bidirectional road tunnel.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q54)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-55",
    categoryId: "general",
    question: "Which town in Jammu and Kashmir is also known as 'Apple Town'?",
    answer: "Sopore.",
    options: ["Sopore.", "Shopian.", "Jammu.", "Pahalgam."],
    explanation: "Sopore in Baramulla district is historically renowned as the 'Apple Town of Kashmir' and hosts the second largest fruit mandi in all of Asia.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q55)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-56",
    categoryId: "general",
    question: "Which Mughal ruler famously labelled Kashmir as the \"Paradise of Earth\"?",
    answer: "Jahangir",
    options: ["Jahangir", "Aurangzeb", "Ashoka", "Shah Jahan"],
    explanation: "Mughal Emperor Jahangir famously praised Kashmir with the Persian couplet: 'Agar firdaus bar roo-e zameen ast, hameen ast-o hameen ast-o hameen ast' (If there is paradise on earth, it is this, it is this, it is this).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q56)",
    difficulty: "beginner"
  },

  // --- Mathematics, Quantitative Aptitude & Statistics (Q57 - Q66) ---
  {
    id: "jkssb-ja-2024-57",
    categoryId: "math",
    question: "All natural numbers and 0 are called as _____ numbers.",
    answer: "Whole",
    options: ["Rational.", "Integers", "Whole", "Prime"],
    explanation: "Natural numbers are the counting numbers {1, 2, 3, ...}. Including 0 with the set of natural numbers produces the set of Whole numbers {0, 1, 2, 3, ...}.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q57)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-58",
    categoryId: "math",
    question: "P and Q are two positive integers such that PQ = 64. Which of the following cannot be the value of P + Q?",
    answer: "35",
    options: ["16", "20", "35", "65"],
    explanation: "The possible positive factor pairs of 64 are: (1, 64) -> sum = 65; (2, 32) -> sum = 34; (4, 16) -> sum = 20; (8, 8) -> sum = 16. Among the options, 35 cannot be formed.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q58)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-59",
    categoryId: "math",
    question: "In a school, 40% of the students play football and 50% play cricket. If 18% of the students neither play football nor cricket, the percentage of the students playing both is:",
    answer: "8%",
    options: ["8%", "12%", "16%", "28%"],
    explanation: "Students playing at least one sport = 100% - 18% = 82%. By inclusion-exclusion: n(F ∪ C) = n(F) + n(C) - n(F ∩ C) => 82% = 40% + 50% - n(Both) => n(Both) = 90% - 82% = 8%.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q59)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-60",
    categoryId: "math",
    question: "What is 20% of 25% of 300?",
    answer: "15",
    options: ["45", "15", "55", "90"],
    explanation: "25% of 300 = 300 / 4 = 75. Then 20% of 75 = (20/100) × 75 = 15.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q60)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-61",
    categoryId: "statistics",
    question: "A student was asked to find the arithmetic mean of the following 12 numbers: 3, 11, 7, 9, 15, 13, 8, 19, 17, 21, 14 and 'x'. He found the mean to be 12. The value of 'x' will be:",
    answer: "7",
    options: ["17", "15", "27", "7"],
    explanation: "Total sum of 12 numbers = 12 × 12 = 144. Sum of the given 11 numbers = 3 + 11 + 7 + 9 + 15 + 13 + 8 + 19 + 17 + 21 + 14 = 137. Therefore, x = 144 - 137 = 7.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q61)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-62",
    categoryId: "statistics",
    question: "The average of 100 observations was calculated as 35. It was found later, that one of the observations was misread as 83 instead of 53. The correct average is:",
    answer: "34.7",
    options: ["35.7", "36.8", "35.4", "34.7"],
    explanation: "Calculated sum = 100 × 35 = 3500. Excess added due to misreading = 83 - 53 = 30. Correct sum = 3500 - 30 = 3470. Correct average = 3470 / 100 = 34.7.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q62)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-63",
    categoryId: "statistics",
    question: "If the average weight of 6 students is 50 kg; that of 2 students is 51 kg; and that of other 2 students is 55 kg; then the average weight of all ten students combined is:",
    answer: "51.2 kg",
    options: ["54.1 kg", "51.2 kg", "49.3 kg", "56.4 kg"],
    explanation: "Total weight = (6 × 50) + (2 × 51) + (2 × 55) = 300 + 102 + 110 = 512 kg. Combined average = 512 / 10 = 51.2 kg.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q63)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-64",
    categoryId: "math",
    question: "The cost price of a radio is Rs. 600. The 5% of the cost price is charged towards transportation. After adding that, if the net profit to be made is 15%, then the selling price of the radio must be:",
    answer: "Rs. 724.50",
    options: ["Rs. 724.50", "Rs. 748.50", "Rs. 772.50", "Rs. 796.50"],
    explanation: "Base CP = 600. Transportation overhead = 5% of 600 = Rs. 30. Total effective cost = 600 + 30 = Rs. 630. Profit required = 15% of 630 = Rs. 94.50. Selling price = 630 + 94.50 = Rs. 724.50.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q64)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-65",
    categoryId: "math",
    question: "By selling an article for Rs. 960 a man incurs a loss of 4%; what was the cost price?",
    answer: "Rs. 1000",
    options: ["Rs. 498", "Rs. 1920", "Rs. 1000", "Rs. 1440"],
    explanation: "SP = CP × (100 - 4)/100 = 0.96 × CP => 960 = 0.96 × CP => CP = 960 / 0.96 = Rs. 1000.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q65)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-66",
    categoryId: "math",
    question: "By selling a car for Rs. 64,000, Mr. Rao lost 20%. Then the cost price of the car is:",
    answer: "Rs. 80,000.",
    options: ["Rs. 80,000.", "Rs. 72,000.", "Rs. 1,08,000.", "Rs. 96,000."],
    explanation: "Selling at a 20% loss means SP = 80% of CP => 64,000 = 0.8 × CP => CP = 64,000 / 0.8 = Rs. 80,000.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q66)",
    difficulty: "beginner"
  },

  // --- Reasoning & Mental Ability (Q67 - Q74) ---
  {
    id: "jkssb-ja-2024-67",
    categoryId: "math",
    question: "A man goes 5 km East, then he turns right and goes 4 km, then he turns left and goes 5 km. Which direction is he facing now?",
    answer: "East.",
    options: ["North.", "East.", "West.", "South."],
    explanation: "He starts walking East. Turning right faces him South. Moving 4 km South and turning left faces him East again. He is facing East.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q67)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-68",
    categoryId: "math",
    question: "City D is to the West of city M. City R is to the South of city D. If city K is to the East of city R, then in which direction is city K located in respect of city D?",
    answer: "South - East.",
    options: ["North - East.", "North - West.", "South - West.", "South - East."],
    explanation: "From D, going South reaches R, and from R, going East reaches K. Therefore, city K lies South-East with respect to city D.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q68)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-69",
    categoryId: "math",
    question: "A boy first goes in South direction, then he turns towards left and travels for some distance. After that he turns right and moves certain distance. At last he turns left and travels again for some distance. Now, in which direction is he moving?",
    answer: "East.",
    options: ["North.", "East.", "West.", "South - East."],
    explanation: "Start South -> turn left (faces East) -> turn right (faces South) -> turn left (faces East). He is moving towards East.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q69)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-70",
    categoryId: "math",
    question: "In a certain code, 'CLOCK' is written as 'XOLXP'. How will 'LOTUS' be written in that same code?",
    answer: "OLGFH",
    options: ["OLGFH", "LOGFH", "OLGHF", "OGLFH"],
    explanation: "Each letter is encoded by its reverse alphabetical partner (sum of positions = 27): C(3)↔X(24), L(12)↔O(15), O(15)↔L(12), C(3)↔X(24), K(11)↔P(16). Applying to LOTUS: L→O, O→L, T→G, U→F, S→H = OLGFH.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q70)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-71",
    categoryId: "math",
    question: "If in a certain code language 'NEETA' is written as 'MVVGZ', then what word will be written for 'IZHSNR'?",
    answer: "RASHMI.",
    options: ["RASHMI.", "VANDANA.", "KAJAL.", "SHEELA."],
    explanation: "The cipher uses opposite pairs: N(14)↔M(13), E(5)↔V(22), T(20)↔G(7), A(1)↔Z(26). Reversing the code 'IZHSNR': I(9)↔R, Z(26)↔A, H(8)↔S, S(19)↔H, N(14)↔M, R(18)↔I => RASHMI.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q71)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-72",
    categoryId: "math",
    question: "Pointing to a woman in the photograph, Rajesh said, \"The only daughter of her grandfather is my wife\". How is Rajesh related to that woman?",
    answer: "Father.",
    options: ["Father.", "Brother.", "Uncle.", "Nephew."],
    explanation: "The woman's grandfather's only daughter is the woman's mother. Rajesh says she is his wife. The husband of the woman's mother is the woman's father.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q72)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-73",
    categoryId: "math",
    question: "Pointing towards Sita, Nikhil said, \"I am the only son of her mother's son\". How is Sita related to Nikhil?",
    answer: "Aunt.",
    options: ["Aunt.", "Neice.", "Grandmother.", "Mother."],
    explanation: "Sita's mother's son is Sita's brother. Nikhil is the only son of Sita's brother. Thus, Sita is the paternal aunt of Nikhil.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q73)",
    difficulty: "intermediate"
  },
  {
    id: "jkssb-ja-2024-74",
    categoryId: "math",
    question: "Introducing a man, a woman said, \"He is the only son of my mother's mother\". How is the woman related to the man?",
    answer: "Neice.",
    options: ["Aunt", "Neice.", "Grandmother", "Mother."],
    explanation: "The woman's mother's mother is her maternal grandmother. The only son of her maternal grandmother is her mother's brother (maternal uncle). The woman is therefore the niece of the man.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q74)",
    difficulty: "intermediate"
  },

  // --- Computer Science & Applications (Q75 - Q80) ---
  {
    id: "jkssb-ja-2024-75",
    categoryId: "cs",
    question: "'IC chips' (integrated circuits) for computers are usually made of which material/element?",
    answer: "Silicon",
    options: ["Silicon", "Platinum", "Nickel", "None of the above"],
    explanation: "Integrated circuits are manufactured using semiconductor materials, primarily silicon (Si), owing to its ideal electrical bandgap, abundance, and stable oxide properties.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q75)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-76",
    categoryId: "cs",
    question: "The _____ folder retains copies of email messages you have started composing but are not yet ready to send.",
    answer: "Drafts",
    options: ["Outbox.", "Inbox.", "Drafts", "Sent."],
    explanation: "The Drafts folder automatically saves unsent, in-progress email messages until the user finishes and transmits them.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q76)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-77",
    categoryId: "cs",
    question: "_____ is the programming language used to write a Macro in MS Excel.",
    answer: "VB Script.",
    options: ["VB Script.", "Python.", "C++.", "JAVA."],
    explanation: "Macros in Microsoft Excel and Office are automated using Visual Basic for Applications (VBA / VB Script).",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q77)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-78",
    categoryId: "cs",
    question: "What is the function of = COUNTIF ( ) in Excel?",
    answer: "Counts cells as specified.",
    options: [
      "Counts cells as specified.",
      "Counts blank cells in a range.",
      "Returns values based on a TRUE or FALSE condition.",
      "Counts cells with numbers in a range."
    ],
    explanation: "COUNTIF applies a user-specified criterion or condition to a given range and counts only the cells that meet that specification.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q78)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-79",
    categoryId: "cs",
    question: "What is a computer firewall?",
    answer: "It is software or hardware - based program to protect against threats and make the internet network secure.",
    options: [
      "It is software or hardware - based program to enhance the speed of the personal computer.",
      "It is software or hardware - based program to protect the personal computer from crash due to bugs.",
      "It is software or hardware - based program to protect against threats and make the internet network secure.",
      "All the statements given above about the firewall are correct."
    ],
    explanation: "A firewall monitors and filters incoming and outgoing network traffic based on predetermined security rules, shielding trusted private networks from unauthorized external threats.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q79)",
    difficulty: "beginner"
  },
  {
    id: "jkssb-ja-2024-80",
    categoryId: "cs",
    question: "A _____ is a pre-designed document that already has coordinating fonts, a layout and a background.",
    answer: "Template.",
    options: ["Model.", "Prototype.", "Format.", "Template."],
    explanation: "A template provides a pre-formatted structure with coordinated typography, styles, placeholders, and layout schemes for rapid document or presentation generation.",
    tip: "JKSSB Junior Assistant 2024 (Series A - Q80)",
    difficulty: "beginner"
  }
];

export const JKSSB_JA_ENGLISH_QUESTIONS: Flashcard[] = JKSSB_JA_2024_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'grammar'
);

export const JKSSB_JA_CS_QUESTIONS: Flashcard[] = JKSSB_JA_2024_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'cs'
);

export const JKSSB_JA_GENERAL_QUESTIONS: Flashcard[] = JKSSB_JA_2024_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'general'
);

export const JKSSB_JA_MATH_QUESTIONS: Flashcard[] = JKSSB_JA_2024_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'math'
);

export const JKSSB_JA_STATISTICS_QUESTIONS: Flashcard[] = JKSSB_JA_2024_PDF_QUESTIONS.filter(
  (q) => q.categoryId === 'statistics'
);
