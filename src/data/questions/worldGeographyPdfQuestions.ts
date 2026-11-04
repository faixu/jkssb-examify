import { Flashcard } from '../../types';

/**
 * 135 Comprehensive World & Indian Geography MCQs
 * Transcribed from world_geography PDF:
 * - Set 1 (Q1–Q50): Physical & Political Divisions of the World (1–25) & India (26–50)
 * - Set 2 (Q51–Q60): Analytical Indian Physiography Questions (Easy, Moderate & Difficult)
 * - Set 3 (Q61–Q110): Section-Wise Indian Physiography (Himalayas, Northern Plains, Peninsular Plateau, Coasts & Islands, Applied Physiography)
 * - Set 4 (Q111–Q135): Statement-Based Physiography Questions (Sections 1 to 6)
 */
export const WORLD_GEOGRAPHY_PDF_QUESTIONS: Flashcard[] = [
  // ============================================================================
  // SET 1: PHYSICAL & POLITICAL DIVISIONS OF THE WORLD (Q1–Q25) & INDIA (Q26–Q50)
  // ============================================================================
  {
    id: 'wgeo-s1-1',
    categoryId: 'general',
    question: 'Which of the following mountain ranges acts as a natural boundary between Europe and Asia?',
    answer: 'Urals',
    options: ['Alps', 'Himalayas', 'Urals', 'Andes'],
    explanation:
      'The Ural Mountains run roughly north to south through western Russia and are traditionally considered the natural physiographic boundary between Europe and Asia.',
    tip: 'Ural Mountains + Caucasus Mountains + Caspian/Black Seas separate Europe and Asia.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-2',
    categoryId: 'general',
    question: 'The "Grand Banks," one of the world\'s richest fishing grounds, is located off the coast of:',
    answer: 'Newfoundland (Canada)',
    options: ['Norway', 'Newfoundland (Canada)', 'Japan', 'Peru'],
    explanation:
      'The meeting of the warm Gulf Stream and the cold Labrador Current off the coast of Newfoundland (Canada) creates ideal nutrient-rich conditions for plankton, supporting vast fish populations.',
    tip: 'Grand Banks (Newfoundland) = Confluence of Warm Gulf Stream + Cold Labrador Current.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-3',
    categoryId: 'general',
    question: 'Which landlocked country is known as the "Heart of South America"?',
    answer: 'Paraguay',
    options: ['Bolivia', 'Paraguay', 'Ecuador', 'Uruguay'],
    explanation:
      'Paraguay is centrally located in South America and lacks direct access to the ocean, earning it the nickname "Corazón de Sudamérica" (Heart of South America). Bolivia and Paraguay are the only two landlocked countries in South America.',
    tip: 'Landlocked countries in South America: Bolivia and Paraguay ("Heart of South America").',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-4',
    categoryId: 'general',
    question: 'The Katanga Plateau, famous for its rich copper and uranium deposits, is located in:',
    answer: 'Democratic Republic of Congo',
    options: ['South Africa', 'Democratic Republic of Congo', 'Australia', 'Brazil'],
    explanation:
      'The Katanga (Shaba) Plateau in the southeastern Democratic Republic of Congo is one of the world\'s richest mineral belts, especially for copper, cobalt, and uranium.',
    tip: 'Katanga Plateau (DRC) = Copper, Cobalt & Uranium.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-5',
    categoryId: 'general',
    question: 'Which strait separates the Malay Peninsula from the Indonesian island of Sumatra?',
    answer: 'Strait of Malacca',
    options: ['Strait of Hormuz', 'Strait of Malacca', 'Bering Strait', 'Sunda Strait'],
    explanation:
      'The Strait of Malacca separates the Malay Peninsula from Sumatra (Indonesia) and serves as a vital maritime choke point connecting the Indian Ocean (Andaman Sea) to the Pacific Ocean (South China Sea).',
    tip: 'Strait of Malacca = Malay Peninsula & Sumatra; Sunda Strait = Sumatra & Java.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-6',
    categoryId: 'general',
    question: 'The Atacama Desert, the driest non-polar place on Earth, is caused primarily by:',
    answer: 'The cold Humboldt Current',
    options: [
      'The Rain Shadow of the Alps',
      'The cold Humboldt Current',
      'Its proximity to the Equator',
      'High-pressure systems in the Sahara',
    ],
    explanation:
      'The cold Humboldt (Peru) Current cools marine air off the western coast of South America, creating a temperature inversion that prevents moisture from precipitating, combined with the rain shadow effect of the Andes.',
    tip: 'Atacama Desert (Chile/Peru) = Cold Humboldt Current + Andes rain shadow.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-7',
    categoryId: 'general',
    question: 'In terms of political divisions, which is the world\'s smallest sovereign state by both area and population?',
    answer: 'Vatican City',
    options: ['Monaco', 'Nauru', 'Vatican City', 'San Marino'],
    explanation:
      'Vatican City covers roughly 44 hectares (0.44 sq. km) as an enclave within Rome, Italy, making it the smallest independent state in the world by both area and population.',
    tip: 'Smallest country: Vatican City (1st), Monaco (2nd), Nauru (3rd - smallest island nation).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-8',
    categoryId: 'general',
    question: 'The "Great Dividing Range" is the primary topographical feature of which continent?',
    answer: 'Australia',
    options: ['North America', 'Africa', 'Australia', 'Antarctica'],
    explanation:
      'The Great Dividing Range runs parallel to the east coast of Australia for over 3,500 km from Queensland to Victoria and includes Australia’s highest peak, Mount Kosciuszko.',
    tip: 'Great Dividing Range = Eastern Australia.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-9',
    categoryId: 'general',
    question: 'Which sea is surrounded by three continents: Europe, Africa, and Asia?',
    answer: 'Mediterranean Sea',
    options: ['Caspian Sea', 'Red Sea', 'Mediterranean Sea', 'Caribbean Sea'],
    explanation:
      'The Mediterranean Sea is bounded by Europe to the north, Africa to the south, and Asia (Anatolia and the Levant region) to the east.',
    tip: 'Mediterranean Sea = Bounded by Europe, Africa, and Asia.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-10',
    categoryId: 'general',
    question: 'The "Ring of Fire" is a major area in the basin of the Pacific Ocean where many earthquakes and volcanic eruptions occur. Which plate movement primarily causes this?',
    answer: 'Subduction of oceanic plates',
    options: [
      'Divergent plate boundaries',
      'Subduction of oceanic plates',
      'Transform faulting',
      'Continental drifting',
    ],
    explanation:
      'The Circum-Pacific Belt ("Ring of Fire") is predominantly formed by convergent plate boundaries where dense oceanic plates subduct beneath lighter continental or oceanic plates, creating deep trenches and volcanic arcs.',
    tip: 'Pacific Ring of Fire = Convergent subduction zones.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-11',
    categoryId: 'general',
    question: 'Which African country is the only one to have coasts on both the Atlantic Ocean and the Mediterranean Sea?',
    answer: 'Morocco',
    options: ['Egypt', 'Libya', 'Morocco', 'Algeria'],
    explanation:
      'Morocco sits at the northwest corner of Africa, bordering the Atlantic Ocean to the west and the Mediterranean Sea (via the Strait of Gibraltar) to the north.',
    tip: 'Morocco = Atlantic + Mediterranean coasts; Egypt = Mediterranean + Red Sea coasts.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-12',
    categoryId: 'general',
    question: 'The "Great Rift Valley" is a continuous geographic trench running from Lebanon in Western Asia to:',
    answer: 'Mozambique',
    options: ['South Africa', 'Mozambique', 'Nigeria', 'Ethiopia'],
    explanation:
      'The Great Rift Valley extends approximately 6,000 kilometers from the Beqaa Valley in Lebanon through the Red Sea and East Africa down to central Mozambique.',
    tip: 'Great Rift Valley = Lebanon (Asia) to Mozambique (Southeast Africa).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-13',
    categoryId: 'general',
    question: 'Which is the largest island in the world (excluding continents)?',
    answer: 'Greenland',
    options: ['Borneo', 'Madagascar', 'Greenland', 'New Guinea'],
    explanation:
      'Greenland (an autonomous territory of Denmark located between the Arctic and Atlantic oceans) is the world\'s largest non-continental island at ~2.16 million sq. km, followed by New Guinea and Borneo.',
    tip: 'Largest islands: 1. Greenland, 2. New Guinea, 3. Borneo, 4. Madagascar.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-14',
    categoryId: 'general',
    question: 'The Pampas temperate grasslands are primarily found in which country?',
    answer: 'Argentina',
    options: ['USA', 'Argentina', 'Hungary', 'South Africa'],
    explanation:
      'The Pampas are fertile South American temperate grassland lowlands located primarily in Argentina (and extending into Uruguay and southernmost Brazil).',
    tip: 'Pampas = Argentina; Prairies = North America; Pustaz = Hungary; Veld = South Africa.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-15',
    categoryId: 'general',
    question: 'Which country is popularly known as the "Land of a Thousand Lakes"?',
    answer: 'Finland',
    options: ['Norway', 'Canada', 'Finland', 'Switzerland'],
    explanation:
      'Finland is known as the "Land of a Thousand Lakes" because it has approximately 188,000 lakes formed by continental glaciation.',
    tip: 'Finland = Land of a Thousand Lakes.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-16',
    categoryId: 'general',
    question: 'The "49th Parallel" forms the international boundary between:',
    answer: 'USA and Canada',
    options: [
      'North and South Korea',
      'USA and Canada',
      'Vietnam and China',
      'Egypt and Sudan',
    ],
    explanation:
      'The 49th parallel north latitude forms a major straight-line segment of the international border between the United States and Canada from British Columbia to Manitoba.',
    tip: '49th Parallel = USA & Canada; 38th Parallel = North & South Korea; 22nd Parallel = Egypt & Sudan.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-17',
    categoryId: 'general',
    question: 'Which is the deepest lake in the world?',
    answer: 'Lake Baikal',
    options: ['Lake Superior', 'Lake Victoria', 'Lake Baikal', 'Lake Tanganyika'],
    explanation:
      'Located in southern Siberia, Russia, Lake Baikal is a rift lake that is both the deepest (1,642 m) and oldest freshwater lake in the world.',
    tip: 'Deepest lake = Lake Baikal (Russia); Largest freshwater by area = Lake Superior.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-18',
    categoryId: 'general',
    question: 'The "Steppes" are the vast temperate grasslands of:',
    answer: 'Eurasia',
    options: ['North America', 'Eurasia', 'South Africa', 'Australia'],
    explanation:
      'The Eurasian Steppe is a vast belt of temperate grasslands stretching from Eastern Europe (Ukraine/Russia) across Central Asia to Manchuria.',
    tip: 'Steppes = Eurasia; Downs = Australia; Canterbury = New Zealand.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-19',
    categoryId: 'general',
    question: 'Which historic city is famously known as the "City of Seven Hills"?',
    answer: 'Rome',
    options: ['Athens', 'Rome', 'Paris', 'Istanbul'],
    explanation:
      'Ancient Rome was traditionally founded on seven hills (Aventine, Caelian, Capitoline, Esquiline, Palatine, Quirinal, and Viminal) east of the Tiber River.',
    tip: 'City of Seven Hills & Eternal City = Rome.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-20',
    categoryId: 'general',
    question: '"Death Valley," the lowest and hottest location in North America, is located in which desert?',
    answer: 'Mojave',
    options: ['Gobi', 'Mojave', 'Sonoran', 'Thar'],
    explanation:
      'Death Valley in eastern California is situated within the northern Mojave Desert and holds the record for the highest reliably recorded air temperature on Earth.',
    tip: 'Death Valley (California) = Mojave Desert.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-21',
    categoryId: 'general',
    question: 'Which country has the longest coastline in the world?',
    answer: 'Canada',
    options: ['Russia', 'Australia', 'Canada', 'Indonesia'],
    explanation:
      'Canada has the world\'s longest coastline at over 202,080 km, bordering the Pacific, Arctic, and Atlantic oceans along with its vast Arctic archipelago.',
    tip: 'Longest coastline in the world = Canada; Longest in India = Gujarat.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-22',
    categoryId: 'general',
    question: 'The "Horn of Africa" consists of which group of four countries?',
    answer: 'Ethiopia, Eritrea, Djibouti, Somalia',
    options: [
      'Egypt, Sudan, Libya',
      'Ethiopia, Eritrea, Djibouti, Somalia',
      'Kenya, Tanzania, Uganda',
      'Nigeria, Ghana, Togo',
    ],
    explanation:
      'The Horn of Africa (Somali Peninsula) in Northeast Africa comprises Somalia, Ethiopia, Eritrea, and Djibouti, jutting into the Arabian Sea and Gulf of Aden.',
    tip: 'Mnemonic SEED for Horn of Africa: Somalia, Ethiopia, Eritrea, Djibouti.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-23',
    categoryId: 'general',
    question: 'Which African river crosses the Equator twice?',
    answer: 'Congo',
    options: ['Amazon', 'Nile', 'Congo', 'Mississippi'],
    explanation:
      'The Congo (Zaire) River curves northward and then southwestward, crossing the Equator twice before emptying into the Atlantic Ocean.',
    tip: 'Congo River crosses the Equator twice; Limpopo crosses Tropic of Capricorn twice; Mahi (India) crosses Tropic of Cancer twice.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-24',
    categoryId: 'general',
    question: 'The "Llanos" are vast tropical savanna grasslands found primarily in:',
    answer: 'Venezuela and Colombia',
    options: ['Brazil', 'Venezuela and Colombia', 'Argentina', 'Australia'],
    explanation:
      'The Llanos are extensive tropical grassland plains situated east of the Andes in the Orinoco River basin of Venezuela and Colombia.',
    tip: 'Llanos = Venezuela & Colombia (Orinoco basin); Campos = Brazil.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-25',
    categoryId: 'general',
    question: 'The "Iberian Peninsula" in southwestern Europe is occupied primarily by which two countries?',
    answer: 'Spain and Portugal',
    options: [
      'France and Italy',
      'Norway and Sweden',
      'Spain and Portugal',
      'Greece and Turkey',
    ],
    explanation:
      'Spain and Portugal (along with Andorra and Gibraltar) occupy the Iberian Peninsula in southwestern Europe, separated from France by the Pyrenees mountains.',
    tip: 'Iberian Peninsula = Spain & Portugal.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-26',
    categoryId: 'general',
    question: 'Which major line of latitude passes almost through the center of India?',
    answer: 'Tropic of Cancer',
    options: ['Equator', 'Tropic of Capricorn', 'Tropic of Cancer', 'Arctic Circle'],
    explanation:
      'The Tropic of Cancer (23°30\' N) passes almost halfway through India across 8 states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura, and Mizoram.',
    tip: 'Tropic of Cancer (23.5° N) passes through 8 Indian states.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-27',
    categoryId: 'general',
    question: 'The "Kanchenjunga" mountain peak (8,586 m) is located in which Indian state?',
    answer: 'Sikkim',
    options: ['Uttarakhand', 'Himachal Pradesh', 'Sikkim', 'Arunachal Pradesh'],
    explanation:
      'Kangchenjunga is the third highest mountain in the world and lies on the border between Sikkim (India) and Nepal.',
    tip: 'Kanchenjunga = Sikkim (India–Nepal border).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-28',
    categoryId: 'general',
    question: 'The "Duncan Passage" in the Bay of Bengal separates:',
    answer: 'South Andaman and Little Andaman',
    options: [
      'North and Middle Andaman',
      'South Andaman and Little Andaman',
      'Car Nicobar and Little Nicobar',
      'Lakshadweep and Maldives',
    ],
    explanation:
      'Duncan Passage is a strait in the Indian Ocean (about 48 km wide) that separates Rutland Island (part of Great/South Andaman) to the north from Little Andaman to the south.',
    tip: 'Duncan Passage = South Andaman & Little Andaman.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s1-29',
    categoryId: 'general',
    question: 'Which is the oldest fold mountain range in India?',
    answer: 'Aravallis',
    options: ['Himalayas', 'Aravallis', 'Western Ghats', 'Satpuras'],
    explanation:
      'The Aravalli Range (dating back to the Precambrian Proterozoic era) is one of the oldest fold mountain systems in the world, predating the Himalayas by hundreds of millions of years.',
    tip: 'Oldest fold mountains in India = Aravallis; Youngest fold mountains = Himalayas.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-30',
    categoryId: 'general',
    question: 'The "Chota Nagpur Plateau" is famous for its heavy concentration of:',
    answer: 'Mineral resources',
    options: ['Alluvial soil', 'Mineral resources', 'Desert flora', 'Coffee plantations'],
    explanation:
      'Known as the "Ruhr of India", the Chota Nagpur Plateau (mostly in Jharkhand) holds rich reserves of coal, iron ore, mica, bauxite, and copper.',
    tip: 'Chota Nagpur Plateau = Mineral heartland ("Ruhr of India").',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-31',
    categoryId: 'general',
    question: 'Which peninsular river is famously known as the "Dakshin Ganga" (or Vridha Ganga)?',
    answer: 'Godavari',
    options: ['Krishna', 'Kaveri', 'Godavari', 'Narmada'],
    explanation:
      'Due to its length (1,465 km) and the largest drainage basin among peninsular rivers, the Godavari is called "Dakshin Ganga" or "Vridha Ganga".',
    tip: 'Dakshin Ganga / Vridha Ganga = Godavari.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-32',
    categoryId: 'general',
    question: 'The "Palghat Gap" (Palakkad Gap) in the Western Ghats connects which two states?',
    answer: 'Tamil Nadu and Kerala',
    options: [
      'Tamil Nadu and Kerala',
      'Maharashtra and Gujarat',
      'Karnataka and Andhra Pradesh',
      'Sikkim and West Bengal',
    ],
    explanation:
      'The Palghat Gap is a major low mountain pass in the Western Ghats between the Nilgiri Hills and Anaimalai Hills, connecting Coimbatore (Tamil Nadu) with Palakkad (Kerala).',
    tip: 'Palghat Gap = Connects Kerala (Palakkad) and Tamil Nadu (Coimbatore).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-33',
    categoryId: 'general',
    question: 'Indian Standard Time (IST) is calculated based on which standard meridian of longitude?',
    answer: '82.5° E',
    options: ['80° E', '82.5° E', '85° E', '90° E'],
    explanation:
      'The 82°30\' E (82.5° E) longitude passing through Mirzapur (near Prayagraj, Uttar Pradesh) is the Standard Meridian of India, placing IST 5 hours and 30 minutes ahead of GMT/UTC.',
    tip: 'IST = 82.5° E (Mirzapur, UP), UTC +5:30.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-34',
    categoryId: 'general',
    question: 'Which state has the longest coastline in India?',
    answer: 'Gujarat',
    options: ['Andhra Pradesh', 'Maharashtra', 'Gujarat', 'Tamil Nadu'],
    explanation:
      'Gujarat has the longest coastline (~1,600 km) among all Indian states due to the deep indentations of the Gulf of Kutch and Gulf of Khambhat, followed by Andhra Pradesh.',
    tip: 'Longest coastline in India: 1st Gujarat, 2nd Andhra Pradesh, 3rd Tamil Nadu.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-35',
    categoryId: 'general',
    question: 'The "Malabar Coast" primarily refers to the coastline of which state?',
    answer: 'Kerala',
    options: ['Goa', 'Karnataka', 'Kerala', 'Odisha'],
    explanation:
      'The southwestern coastal plain of India, stretching primarily along Kerala (from Mangalore to Kanyakumari), is known as the Malabar Coast.',
    tip: 'Malabar Coast = Kerala; Konkan = Maharashtra/Goa; Coromandel = Tamil Nadu; Utkal = Odisha.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-36',
    categoryId: 'general',
    question: 'Which channel separates the Andaman Islands from the Nicobar Islands?',
    answer: '10 Degree Channel',
    options: ['8 Degree Channel', '9 Degree Channel', '10 Degree Channel', 'English Channel'],
    explanation:
      'The 10 Degree Channel (lying along the 10° N parallel) separates Little Andaman (in the Andaman group) from Car Nicobar (in the Nicobar group).',
    tip: '10° Channel = Andaman & Nicobar; 9° Channel = Minicoy & Lakshadweep; 8° Channel = Minicoy & Maldives.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-37',
    categoryId: 'general',
    question: 'The "Luni" river, which originates near Ajmer and flows through Rajasthan, ends in:',
    answer: 'Rann of Kutch',
    options: ['Arabian Sea', 'Gulf of Khambhat', 'Rann of Kutch', 'Lake Sambhar'],
    explanation:
      'The Luni is an inland (endorheic) river that originates in the Naga hills of the Aravalli range near Pushkar/Ajmer and disappears into the marshy lands of the Rann of Kutch in Gujarat.',
    tip: 'Luni River = Endorheic river disappearing in the Rann of Kutch.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-38',
    categoryId: 'general',
    question: 'The highest mountain peak in South India (Peninsular India) is:',
    answer: 'Anamudi',
    options: ['Doddabetta', 'Anamudi', 'Mahendragiri', 'Guru Shikhar'],
    explanation:
      'Anamudi (2,695 m), located in the Anaimalai Hills of Idukki district, Kerala, is the highest peak in the Western Ghats and all of Peninsular India.',
    tip: 'Highest in Peninsular India = Anamudi (2,695 m, Kerala); 2nd = Doddabetta (Nilgiris).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-39',
    categoryId: 'general',
    question: 'The "McMahon Line" forms the boundary line in the eastern sector between India and:',
    answer: 'China',
    options: ['Pakistan', 'China', 'Myanmar', 'Bhutan'],
    explanation:
      'Drawn at the 1914 Simla Convention, the McMahon Line demarcates the boundary between Northeast India (Arunachal Pradesh) and Tibet (China).',
    tip: 'McMahon Line = India & China; Radcliffe Line = India & Pakistan/Bangladesh.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-40',
    categoryId: 'general',
    question: 'Which Indian state is surrounded by Bangladesh on three sides?',
    answer: 'Tripura',
    options: ['Meghalaya', 'Mizoram', 'Tripura', 'West Bengal'],
    explanation:
      'Tripura is bordered by Bangladesh on its north, west, and south, and connects with Assam and Mizoram to the east.',
    tip: 'Tripura is surrounded by Bangladesh on three sides.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-41',
    categoryId: 'general',
    question: 'The "Deccan Trap" region of Peninsular India is characterized by:',
    answer: 'Black soil (Regur)',
    options: ['Alluvial soil', 'Red soil', 'Black soil (Regur)', 'Laterite soil'],
    explanation:
      'Formed by the weathering of Cretaceous basaltic lava flows, the Deccan Trap is characterized by moisture-retentive Black Soil (Regur), ideal for cotton cultivation.',
    tip: 'Deccan Trap = Basaltic lava -> Black Cotton Soil (Regur).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-42',
    categoryId: 'general',
    question: 'The "Zoji La" mountain pass connects:',
    answer: 'Srinagar and Leh',
    options: [
      'Srinagar and Leh',
      'Shimla and Tibet',
      'Sikkim and Lhasa',
      'Arunachal and Myanmar',
    ],
    explanation:
      'Zoji La is a high mountain pass on NH-1 connecting the Kashmir Valley (Srinagar/Sonamarg) with Drass, Kargil, and Leh in Ladakh.',
    tip: 'Zoji La = Srinagar to Kargil/Leh.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-43',
    categoryId: 'general',
    question: 'Which is the largest freshwater lake in India?',
    answer: 'Wular Lake',
    options: ['Chilika Lake', 'Wular Lake', 'Dal Lake', 'Pulicat Lake'],
    explanation:
      'Located in Bandipora district of Jammu & Kashmir, Wular Lake is the largest freshwater lake in India (while Chilika Lake in Odisha is the largest brackish water lagoon).',
    tip: 'Largest freshwater lake = Wular Lake (J&K); Largest brackish lagoon = Chilika Lake (Odisha).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-44',
    categoryId: 'general',
    question: '"Indira Point," the southernmost point of Indian territory, is located in:',
    answer: 'Great Nicobar',
    options: ['Kanyakumari', 'Lakshadweep', 'Great Nicobar', 'Little Andaman'],
    explanation:
      'While Kanyakumari (Cape Comorin) is the southernmost tip of the Indian mainland (8°4\' N), Indira Point (formerly Pygmalion Point, at 6°45\' N) on Great Nicobar Island is the southernmost point of the Indian Union.',
    tip: 'Southernmost point of India = Indira Point (Great Nicobar); Mainland = Kanyakumari.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-45',
    categoryId: 'general',
    question: 'Which river system forms "Majuli" island, the largest inhabited river island in the world?',
    answer: 'Brahmaputra',
    options: ['Ganga', 'Brahmaputra', 'Indus', 'Godavari'],
    explanation:
      'Majuli is a large river island in Assam formed by the braided channels of the Brahmaputra River and its tributaries (such as the Subansiri).',
    tip: 'Majuli Island (Assam) = Brahmaputra River.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-46',
    categoryId: 'general',
    question: '"Barren Island," India\'s only active volcano, is situated in:',
    answer: 'Andaman Islands',
    options: ['Lakshadweep', 'Andaman Islands', 'Nicobar Islands', 'Gulf of Mannar'],
    explanation:
      'Barren Island, located in the Andaman Sea about 138 km northeast of Port Blair, is the only confirmed active volcano in India and South Asia.',
    tip: 'Barren Island (Andaman Sea) = Only active volcano in India; Narcondam = Dormant volcano.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-47',
    categoryId: 'general',
    question: '"Saddle Peak" (732 m) is the highest mountain peak of:',
    answer: 'Andaman and Nicobar',
    options: ['Lakshadweep', 'Andaman and Nicobar', 'Himachal Pradesh', 'Nagaland'],
    explanation:
      'Located on North Andaman Island, Saddle Peak (732 m) is the highest point of the Andaman and Nicobar archipelago.',
    tip: 'Saddle Peak = North Andaman (Highest peak of A&N Islands).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-48',
    categoryId: 'general',
    question: 'In which state is the famous "Jog Falls" (Gerosoppa Falls) located?',
    answer: 'Karnataka',
    options: ['Kerala', 'Maharashtra', 'Karnataka', 'Tamil Nadu'],
    explanation:
      'Jog Falls, created by the Sharavathi River in Shivamogga district of Karnataka, is one of the highest plunge waterfalls in India.',
    tip: 'Jog Falls = Sharavathi River, Karnataka.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-49',
    categoryId: 'general',
    question: 'The "Radcliffe Line" is the international border between:',
    answer: 'India and Pakistan',
    options: [
      'India and China',
      'India and Pakistan',
      'India and Nepal',
      'India and Myanmar',
    ],
    explanation:
      'Demarcated by Sir Cyril Radcliffe in August 1947, the Radcliffe Line serves as the international boundary between India and Pakistan (and India and Bangladesh).',
    tip: 'Radcliffe Line (1947) = India & Pakistan.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s1-50',
    categoryId: 'general',
    question: 'Which Indian state shares its borders with the maximum number of other states?',
    answer: 'Uttar Pradesh',
    options: ['Madhya Pradesh', 'Uttar Pradesh', 'Assam', 'Maharashtra'],
    explanation:
      'Uttar Pradesh shares its borders with 8 states (Uttarakhand, Himachal Pradesh, Haryana, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, and Bihar) plus 1 Union Territory (Delhi) and Nepal.',
    tip: 'Uttar Pradesh borders 8 states + 1 UT (Delhi).',
    difficulty: 'beginner',
  },

  // ============================================================================
  // SET 2: ANALYTICAL INDIAN PHYSIOGRAPHY QUESTIONS (Q51–Q60)
  // ============================================================================
  {
    id: 'wgeo-s2-1',
    categoryId: 'general',
    question:
      'Which of the following is the correct longitudinal arrangement of the Himalayan ranges from North to South?',
    answer: 'Himadri, Himachal, Shiwaliks',
    options: [
      'Himachal, Himadri, Shiwaliks',
      'Himadri, Himachal, Shiwaliks',
      'Shiwaliks, Himachal, Himadri',
      'Himadri, Shiwaliks, Himachal',
    ],
    explanation:
      'The Himadri (Great Himalayas) is the northernmost and highest range. To its south lies the Himachal (Lesser Himalayas), and the southernmost outer range is the Shiwaliks.',
    tip: 'North to South: Himadri (Great) → Himachal (Lesser) → Shiwaliks (Outer).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s2-2',
    categoryId: 'general',
    question:
      'The "Malwa Plateau," which forms a significant part of the Central Highlands, is characterized by which of the following drainage patterns?',
    answer: 'Most rivers, like Chambal and Betwa, flow towards the North-East to join the Yamuna.',
    options: [
      'All rivers flow towards the Arabian Sea.',
      'It is an endorheic basin with no outlet to the sea.',
      'Most rivers, like Chambal and Betwa, flow towards the North-East to join the Yamuna.',
      'It is drained exclusively by the Narmada and Tapti rivers.',
    ],
    explanation:
      'The Malwa Plateau tilts towards the North-East. Consequently, major rivers like the Chambal, Sind, Betwa, and Ken flow northeastward to join the Yamuna-Ganga river system.',
    tip: 'Malwa Plateau slopes northeastward (drained by Chambal, Sind, Betwa, Ken into Yamuna).',
    difficulty: 'advanced',
  },
  {
    id: 'wgeo-s2-3',
    categoryId: 'general',
    question: 'Which physiographic division of India is geologically the oldest and most stable landmass?',
    answer: 'The Peninsular Plateau',
    options: [
      'The Northern Mountains',
      'The Northern Plains',
      'The Peninsular Plateau',
      'The Coastal Plains',
    ],
    explanation:
      'The Peninsular Plateau is part of ancient Gondwanaland, composed of old crystalline, igneous, and metamorphic rocks that have remained geologically stable for millions of years.',
    tip: 'Oldest & most stable landmass of India = Peninsular Plateau (Gondwanaland).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s2-4',
    categoryId: 'general',
    question:
      'The "Bhabar" region, located at the foot of the Shiwaliks, is known for which of the following characteristics?',
    answer: 'Disappearance of streams due to high porosity of pebbles.',
    options: [
      'Dense forests and marshy wildlife habitats.',
      'Highly fertile land ideal for intensive agriculture.',
      'Disappearance of streams due to high porosity of pebbles.',
      'Saline soil unsuitable for any vegetation.',
    ],
    explanation:
      'The Bhabar is a narrow belt (8 to 16 km wide) parallel to the Shiwalik slopes where rivers deposit heavy pebbles and boulders; streams flow underground through these porous beds and "disappear" from the surface.',
    tip: 'Bhabar = Porous pebble belt where streams disappear; Terai = Marshy belt where streams re-emerge.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s2-5',
    categoryId: 'general',
    question:
      'Consider the Western Ghats and Eastern Ghats. Which statement is correct regarding their physiography?',
    answer: 'The Western Ghats are continuous and can be crossed only through passes.',
    options: [
      'The Eastern Ghats are higher and more continuous than the Western Ghats.',
      'The Western Ghats are continuous and can be crossed only through passes.',
      'Anamudi, the highest peak of Peninsular India, is located in the Eastern Ghats.',
      'The Eastern Ghats run parallel to the Arabian Sea coast.',
    ],
    explanation:
      'The Western Ghats (Sahyadri) are higher (900–1,600 m) and continuous, crossable only through passes like Thal Ghat, Bhor Ghat, and Pal Ghat, whereas the Eastern Ghats are lower and dissected by east-flowing rivers.',
    tip: 'Western Ghats = Higher & continuous; Eastern Ghats = Lower & discontinuous.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s2-6',
    categoryId: 'general',
    question: 'The "Deccan Trap" of India is famous for "Regur" soil. How was this region primarily formed?',
    answer: 'By intense volcanic fissure eruptions during the Cretaceous period.',
    options: [
      'By the accumulation of river silt over millions of years.',
      'By the collision of the Indian plate with the Eurasian plate.',
      'By intense volcanic fissure eruptions during the Cretaceous period.',
      'By the recession of the sea from the western coast.',
    ],
    explanation:
      'The Deccan Trap is a large igneous province formed by flood basalt fissure eruptions during the late Cretaceous period. Weathering of these basaltic rocks over millennia produced fertile black (Regur) soil.',
    tip: 'Deccan Trap = Cretaceous fissure basaltic lava -> Regur soil.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s2-7',
    categoryId: 'general',
    question: 'Which of the following describes the "Kayals" found in Indian physiography?',
    answer: 'Brackish water lagoons/backwaters specifically found on the Malabar Coast.',
    options: [
      'Glacial lakes found in the Greater Himalayas.',
      'Shifting sand dunes in the Thar Desert.',
      'Brackish water lagoons/backwaters specifically found on the Malabar Coast.',
      'Deep gorges carved by the Brahmaputra in Arunachal Pradesh.',
    ],
    explanation:
      'Kayals are the famous brackish water lagoons and backwaters of Kerala (Malabar Coast), such as Vembanad and Ashtamudi lakes, used for fishing, inland navigation, and the Nehru Trophy Vallam Kali boat race.',
    tip: 'Kayals = Kerala backwaters (Malabar Coast); Dhrian = Shifting sand dunes in Thar.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s2-8',
    categoryId: 'general',
    question: 'Which water body separates the Andaman Islands from the Nicobar Islands?',
    answer: 'Ten Degree Channel',
    options: ['Palk Strait', 'Ten Degree Channel', 'Nine Degree Channel', 'Gulf of Mannar'],
    explanation:
      'The Ten Degree Channel is a 150 km wide stretch of water along the 10° N latitude that separates the Andaman group (Little Andaman) from the Nicobar group (Car Nicobar).',
    tip: 'Ten Degree Channel = Separates Andaman and Nicobar.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s2-9',
    categoryId: 'general',
    question: 'The "Island Groups of Lakshadweep" are unique in India because:',
    answer: 'They are entirely composed of coral deposits (Atolls).',
    options: [
      'They are of volcanic origin like the Barren Island.',
      'They are an extension of the Arakan Yoma mountain range.',
      'They are entirely composed of coral deposits (Atolls).',
      'They contain the highest peaks of the Indian Ocean.',
    ],
    explanation:
      'Lakshadweep islands in the Arabian Sea are coral islands (atolls, reefs, and submerged banks) built on a submarine ridge, unlike the volcanic/tectonic Andaman and Nicobar islands.',
    tip: 'Lakshadweep = Coral islands (Atolls) in the Arabian Sea.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s2-10',
    categoryId: 'general',
    question: 'In the context of the Northern Plains, what is the difference between "Bhangar" and "Khadar"?',
    answer:
      'Bhangar is the older alluvium containing "Kankar" (calcareous deposits), while Khadar is the newer, more fertile alluvium.',
    options: [
      'Bhangar is new alluvium, while Khadar is old alluvium.',
      'Bhangar is found in the deltaic regions, while Khadar is found in the upper reaches.',
      'Bhangar is the older alluvium containing "Kankar" (calcareous deposits), while Khadar is the newer, more fertile alluvium.',
      'There is no difference; both terms are used for the same soil type.',
    ],
    explanation:
      'Bhangar represents older alluvial terraces above the floodplains containing calcium carbonate nodules (Kankar), whereas Khadar is the newer, finer silt renewed annually by floods.',
    tip: 'Bhangar = Older alluvium with Kankar; Khadar = Newer, more fertile floodplain alluvium.',
    difficulty: 'intermediate',
  },

  // ============================================================================
  // SET 3: SECTION-WISE INDIAN PHYSIOGRAPHY (Q61–Q110)
  // ============================================================================
  {
    id: 'wgeo-s3-1',
    categoryId: 'general',
    question:
      'Which of the following is the correct chronological order of the formation of the Himalayan ranges from oldest to youngest (North to South)?',
    answer: 'Himadri, Himachal, Shiwaliks',
    options: [
      'Himadri, Himachal, Shiwaliks',
      'Shiwaliks, Himachal, Himadri',
      'Himachal, Himadri, Shiwaliks',
      'Trans-Himalayas, Shiwaliks, Himadri',
    ],
    explanation:
      'The Great Himalayas (Himadri) formed first during the Eocene-Oligocene period, followed by the Lesser Himalayas (Himachal) in the Miocene, and finally the Outer Himalayas (Shiwaliks) in the Pliocene-Pleistocene.',
    tip: 'Formation sequence: Himadri (1st) → Himachal (2nd) → Shiwaliks (3rd/Youngest).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-2',
    categoryId: 'general',
    question:
      'The "Karewas" of Jammu and Kashmir are famous for the cultivation of Saffron. Geologically, what are Karewas?',
    answer: 'Lacustrine deposits',
    options: ['Glacial moraines', 'Lacustrine deposits', 'Riverine alluvium', 'Volcanic ash'],
    explanation:
      'Karewas are thick lacustrine (lake) deposits of glacial clay and other materials embedded with moraines in the Kashmir Valley, ideal for cultivating Zafran (saffron), almonds, and walnuts.',
    tip: 'Karewas = Lacustrine (lake) deposits in Kashmir Valley famous for Saffron.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-3',
    categoryId: 'general',
    question:
      'In which part of the Himalayas is the "Malana Valley" (often called one of the oldest democracies in the world) located?',
    answer: 'Himachal Himalayas',
    options: [
      'Kashmir Himalayas',
      'Kumaon Himalayas',
      'Himachal Himalayas',
      'Arunachal Himalayas',
    ],
    explanation:
      'Malana is an ancient isolated village in the Parvati Valley of Kullu district, Himachal Pradesh, situated within the Himachal (Lesser) Himalayas.',
    tip: 'Malana Valley = Kullu district, Himachal Himalayas.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-4',
    categoryId: 'general',
    question: 'The sharp "Syntaxial Bends" at the western and eastern extremities of the Himalayas are found at:',
    answer: 'Nanga Parbat and Namcha Barwa',
    options: [
      'Nanga Parbat and Namcha Barwa',
      'K2 and Kanchenjunga',
      'Mount Everest and Makalu',
      'Pir Panjal and Dhauladhar',
    ],
    explanation:
      'The Himalayas take sharp, hairpin southward bends (Syntaxial Bends) near Nanga Parbat in the west (Indus gorge) and near Namcha Barwa in the east (Brahmaputra/Dihang gorge).',
    tip: 'Syntaxial Bends = Nanga Parbat (West) & Namcha Barwa (East).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-5',
    categoryId: 'general',
    question: 'Which Himalayan range is also known as the "Internal Himalayas" (or Inner Himalayas)?',
    answer: 'Himadri',
    options: ['Shiwaliks', 'Pir Panjal', 'Himadri', 'Zanskar'],
    explanation:
      'The Great Himalayas (Himadri) are called the Inner or Internal Himalayas because they form the innermost, highest, and most continuous core of the main Himalayan system.',
    tip: 'Himadri = Great / Inner Himalayas; Shiwaliks = Outer Himalayas.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-6',
    categoryId: 'general',
    question: 'The "Valley of Flowers" National Park in Uttarakhand is situated between which two mountain ranges?',
    answer: 'Greater Himalayas and Zanskar',
    options: [
      'Zanskar and Ladakh',
      'Greater Himalayas and Zanskar',
      'Pir Panjal and Dhauladhar',
      'Dhauladhar and Himachal',
    ],
    explanation:
      'The Valley of Flowers in Chamoli district, Uttarakhand, lies in the transition zone between the Zanskar range and the Great Himalayas.',
    tip: 'Valley of Flowers (Uttarakhand) = Transition zone between Zanskar and Great Himalayas.',
    difficulty: 'advanced',
  },
  {
    id: 'wgeo-s3-7',
    categoryId: 'general',
    question: 'Why are the Western Himalayas drier compared to the Eastern Himalayas?',
    answer: 'They receive less rainfall from the South-West Monsoon',
    options: [
      'They are farther from the sea',
      'They have higher altitude',
      'They receive less rainfall from the South-West Monsoon',
      'All of the above',
    ],
    explanation:
      'The Bay of Bengal branch of the South-West Monsoon strikes the Eastern Himalayas first with high moisture and progressively loses moisture as it moves westward along the Indo-Gangetic plain.',
    tip: 'Eastern Himalayas receive heavy SW monsoon rain first; moisture decreases westward.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-8',
    categoryId: 'general',
    question: 'Which mountain pass connects Srinagar to Leh?',
    answer: 'Zoji La',
    options: ['Nathu La', 'Zoji La', 'Shipki La', 'Jelep La'],
    explanation:
      'Zoji La connects Srinagar (Kashmir Valley) to Kargil and Leh (Ladakh). Shipki La is in Himachal Pradesh, while Nathu La and Jelep La are in Sikkim.',
    tip: 'Zoji La = Srinagar–Leh; Shipki La = HP–Tibet; Nathu La & Jelep La = Sikkim–Tibet.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-9',
    categoryId: 'general',
    question: 'The "Duns" (such as Dehradun, Kotli Dun, and Patli Dun) are longitudinal valleys located:',
    answer: 'Between Lesser Himalayas and Shiwaliks',
    options: [
      'In the Greater Himalayas',
      'In the Trans-Himalayas',
      'Between Lesser Himalayas and Shiwaliks',
      'In the Northern Plains',
    ],
    explanation:
      'Duns are flat-bottomed longitudinal structural valleys formed between the Lesser Himalayas (Himachal) and the Shiwalik range.',
    tip: 'Duns = Longitudinal valleys between Lesser Himalayas (Himachal) and Shiwaliks.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-10',
    categoryId: 'general',
    question:
      'Arrange the following Himalayan peaks from West to East: Nanda Devi, Kanchenjunga, Mount Everest, Nanga Parbat.',
    answer: 'Nanga Parbat, Nanda Devi, Mount Everest, Kanchenjunga',
    options: [
      'Nanga Parbat, Nanda Devi, Mount Everest, Kanchenjunga',
      'Nanda Devi, Nanga Parbat, Kanchenjunga, Mount Everest',
      'Kanchenjunga, Mount Everest, Nanda Devi, Nanga Parbat',
      'Nanga Parbat, Mount Everest, Nanda Devi, Kanchenjunga',
    ],
    explanation:
      'From West to East: Nanga Parbat (western syntaxial bend) → Nanda Devi (Uttarakhand) → Mount Everest (Nepal) → Kanchenjunga (Sikkim-Nepal border).',
    tip: 'West to East: Nanga Parbat → Nanda Devi → Mt. Everest → Kanchenjunga → Namcha Barwa.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-11',
    categoryId: 'general',
    question: 'Which belt of the Northern Plains is characterized by the disappearance of rivers underground?',
    answer: 'Bhabar',
    options: ['Terai', 'Bhangar', 'Bhabar', 'Khadar'],
    explanation:
      'Bhabar is a porous pebble-and-boulder belt (8–16 km wide) along the foot of the Shiwaliks where mountain streams sink and flow underground.',
    tip: 'Bhabar = Streams disappear into porous pebbles.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-12',
    categoryId: 'general',
    question: 'The marshy, humid, and thickly forested belt of the Northern Plains south of Bhabar is known as:',
    answer: 'Terai',
    options: ['Bhabar', 'Terai', 'Khadar', 'Reh'],
    explanation:
      'The Terai belt (15–30 km wide) lies immediately south of the Bhabar, where underground streams re-emerge onto the surface to create marshy wetlands and dense forests.',
    tip: 'Terai = Streams re-emerge on the surface south of Bhabar.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-13',
    categoryId: 'general',
    question: 'Which of the following terms refers to "Older Alluvium" in the Northern Plains?',
    answer: 'Bhangar',
    options: ['Khadar', 'Bhangar', 'Bhabar', 'Bet'],
    explanation:
      'Bhangar is the older alluvium forming elevated terraces above the flood limit, whereas Khadar (called Bet in Punjab) is the newer floodplain alluvium.',
    tip: 'Bhangar = Older alluvium; Khadar = Newer alluvium.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-14',
    categoryId: 'general',
    question: 'What are "Kankar" in the context of Indian alluvial soils?',
    answer: 'Calcium carbonate nodules in Bhangar',
    options: [
      'Large boulders in Bhabar',
      'Calcium carbonate nodules in Bhangar',
      'Saline efflorescence in Punjab',
      'Deltaic islands in Bengal',
    ],
    explanation:
      'Bhangar (older alluvial) soil contains impure calcareous concretions (calcium carbonate nodules) locally known as Kankar.',
    tip: 'Kankar = Calcareous (lime) nodules found in Bhangar soil.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-15',
    categoryId: 'general',
    question: 'The "Doab" (tract of land) lying between the Jhelum and Chenab rivers is called:',
    answer: 'Chaj Doab',
    options: ['Bari Doab', 'Bist Doab', 'Chaj Doab', 'Rechna Doab'],
    explanation:
      'Chaj Doab lies between the Chenab and Jhelum rivers. Bist Doab is between Beas and Sutlej; Bari Doab is between Beas and Ravi; Rechna Doab is between Ravi and Chenab; Sindh Sagar Doab is between Jhelum and Indus.',
    tip: 'Chaj = Chenab + Jhelum; Rechna = Ravi + Chenab; Bari = Beas + Ravi; Bist = Beas + Sutlej.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-16',
    categoryId: 'general',
    question: 'Which part of the Northern Plains is naturally the most fertile and suitable for intensive agriculture?',
    answer: 'Khadar',
    options: ['Bhabar', 'Bhangar', 'Khadar', 'Terai'],
    explanation:
      'Khadar floodplains receive fresh layers of fine silt and clay almost every year during floods, making them exceptionally fertile for intensive cultivation.',
    tip: 'Khadar = Renewed annually by floods -> Most fertile.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-17',
    categoryId: 'general',
    question: 'Seasonal torrential streams known as "Chohs" (or Chos) that cause gully erosion are found in which state?',
    answer: 'Punjab',
    options: ['Rajasthan', 'Punjab', 'Assam', 'Bihar'],
    explanation:
      'Chos (Chohs) are seasonal ephemeral streams descending from the Shiwalik hills, particularly in the Hoshiarpur district of Punjab, dissecting the piedmont plain.',
    tip: 'Chohs (Chos) = Seasonal Shiwalik streams in Punjab (Hoshiarpur).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-18',
    categoryId: 'general',
    question: 'The "Rajasthan Plain" was once fertile during the proto-historic period but turned arid primarily due to:',
    answer: 'Shift in the course and drying up of rivers like the Saraswati',
    options: [
      'Volcanic activity',
      'Shift in the course and drying up of rivers like the Saraswati',
      'Excessive monsoon rainfall',
      'Submergence under the sea',
    ],
    explanation:
      'Geological and palaeochannel studies indicate that the ancient Saraswati (Ghaggar-Hakra) river system once flowed through the Rajasthan plain before tectonic shifts and climatic aridification dried its course.',
    tip: 'Rajasthan Plain aridity is linked to the drying/shifting of the Saraswati (Ghaggar-Hakra) river.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-19',
    categoryId: 'general',
    question: 'Which Indian state encompasses the largest share of the Brahmaputra Plain?',
    answer: 'Assam',
    options: ['West Bengal', 'Arunachal Pradesh', 'Assam', 'Meghalaya'],
    explanation:
      'The Brahmaputra Plain (Assam Valley) extends for nearly 720 km through Assam from Sadiya in the east to Dhubri in the west.',
    tip: 'Brahmaputra Plain is primarily located in Assam (Sadiya to Dhubri).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-20',
    categoryId: 'general',
    question: 'The "Deltaic Plain" of the Ganga-Brahmaputra is geomorphologically an extension of which alluvial belt?',
    answer: 'Khadar',
    options: ['Bhabar', 'Bhangar', 'Khadar', 'Terai'],
    explanation:
      'The Deltaic Plain is formed by the continuous deposition of fresh, fine silt at the river mouth, making it a seaward extension of the Khadar (new alluvium) belt.',
    tip: 'Deltaic Plain = Extension of Khadar (new alluvium).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-21',
    categoryId: 'general',
    question: 'The Peninsular Plateau of India is a fragment of which ancient supercontinent?',
    answer: 'Gondwanaland',
    options: ['Angaraland', 'Tethys', 'Gondwanaland', 'Laurasia'],
    explanation:
      'Peninsular India was part of the southern supercontinent Gondwanaland (along with Africa, Australia, South America, and Antarctica) before drifting northward during the Mesozoic and Cenozoic eras.',
    tip: 'Peninsular India = Ancient Gondwanaland block.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-22',
    categoryId: 'general',
    question: 'Which river divides the Peninsular Plateau into the Central Highlands (north) and the Deccan Plateau (south)?',
    answer: 'Narmada',
    options: ['Godavari', 'Krishna', 'Narmada', 'Tapi'],
    explanation:
      'The Narmada River, flowing westward through a faulted rift valley between the Vindhya and Satpura ranges, forms the traditional dividing line between the Central Highlands and the Deccan Plateau.',
    tip: 'Narmada River divides Central Highlands (North) and Deccan Plateau (South).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-23',
    categoryId: 'general',
    question: 'The step-like basaltic topography of the "Deccan Trap" was formed by:',
    answer: 'Fissure volcanic eruptions',
    options: [
      'Himalayan orogeny',
      'Fissure volcanic eruptions',
      'Riverine silt deposition',
      'Pleistocene glacial activity',
    ],
    explanation:
      'Massive fissure volcanic eruptions over the Réunion hotspot at the end of the Cretaceous period poured out horizontal layers of basaltic lava, forming the step-like ("Trap") topography.',
    tip: 'Deccan Trap = Fissure basaltic lava flows.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-24',
    categoryId: 'general',
    question: 'Which is the highest peak of the Peninsular Plateau?',
    answer: 'Anamudi',
    options: ['Doda Betta', 'Anamudi', 'Mahendragiri', 'Guru Shikhar'],
    explanation:
      'Anamudi (2,695 m) in Kerala is the highest peak of the Peninsular Plateau. Doda Betta (2,637 m) is the highest in the Nilgiris, and Guru Shikhar (1,722 m) is the highest in the Aravallis.',
    tip: 'Anamudi (2,695 m) > Doda Betta (2,637 m) > Guru Shikhar (1,722 m).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-25',
    categoryId: 'general',
    question: 'The Western Ghats are locally known as "Sahyadri" primarily in which state?',
    answer: 'Maharashtra',
    options: ['Kerala', 'Karnataka', 'Maharashtra', 'Tamil Nadu'],
    explanation:
      'The Western Ghats are known as Sahyadri in Maharashtra (and northern Karnataka), Nilgiris in Tamil Nadu/Karnataka, and Anaimalai and Cardamom hills in Kerala.',
    tip: 'Western Ghats in Maharashtra = Sahyadri.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-26',
    categoryId: 'general',
    question: 'Which of the following mountain ranges in India is a classic example of a "Block Mountain" (Horst)?',
    answer: 'Satpura',
    options: ['Aravallis', 'Himalayas', 'Satpura', 'Nilgiris'],
    explanation:
      'The Satpura range is a classic block mountain (horst) flanked by two faulted rift valleys (graben)—the Narmada rift valley to the north and the Tapi rift valley to the south.',
    tip: 'Satpura & Vindhyas = Block mountains flanked by Narmada & Tapi rift valleys.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-27',
    categoryId: 'general',
    question: 'The "Chota Nagpur Plateau" is popularly called the:',
    answer: 'Ruhr of India',
    options: ['Wheat bowl of India', 'Ruhr of India', 'Garden of India', 'Silicon Plateau'],
    explanation:
      'Like the Ruhr valley in Germany, the Chota Nagpur Plateau (drained by the Damodar River) is the mineral and coal heartland of India.',
    tip: 'Ruhr of India = Chota Nagpur Plateau (Damodar Valley).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-28',
    categoryId: 'general',
    question: 'Which famous hill station of South India is located in the Palani Hills?',
    answer: 'Kodaikanal',
    options: ['Ooty', 'Kodaikanal', 'Munnar', 'Mahabaleshwar'],
    explanation:
      'Kodaikanal ("Princess of Hill Stations") is located in the Palani Hills (an eastward spur of the Western Ghats) in Dindigul district, Tamil Nadu, whereas Ooty (Udhagamandalam) is in the Nilgiri Hills.',
    tip: 'Kodaikanal = Palani Hills (Tamil Nadu); Ooty = Nilgiri Hills.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-29',
    categoryId: 'general',
    question: 'The "Malwa Plateau" is drained primarily by which of the following pairs of rivers?',
    answer: 'Chambal and Betwa',
    options: [
      'Narmada and Tapi',
      'Chambal and Betwa',
      'Godavari and Krishna',
      'Ganga and Yamuna',
    ],
    explanation:
      'The Malwa Plateau slopes northward and northeastward, drained by the Chambal, Kali Sindh, Parbati, Sind, and Betwa rivers into the Yamuna.',
    tip: 'Malwa Plateau rivers = Chambal, Sind, Betwa, Ken.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-30',
    categoryId: 'general',
    question: 'Which gorge/gap lies at the junction where the Western Ghats meet the Eastern Ghats at the Nilgiri Hills?',
    answer: 'Moyar Gap',
    options: ['Thal Ghat', 'Bhor Ghat', 'Palakkad Gap (Palghat)', 'Moyar Gap'],
    explanation:
      'The Nilgiri Hills form the structural knot where the Western and Eastern Ghats converge; the Moyar Gorge (Moyar Gap) separates the Nilgiri Hills from the Biligirirangan Hills and Mysore Plateau.',
    tip: 'Nilgiri Hills = Junction of Western & Eastern Ghats (Moyar Gorge/Gap).',
    difficulty: 'advanced',
  },
  {
    id: 'wgeo-s3-31',
    categoryId: 'general',
    question: 'The "Konkan Coast" along the western coastal plain extends between:',
    answer: 'Daman and Goa',
    options: [
      'Goa and Kochi',
      'Daman and Goa',
      'Goa and Mangalore',
      'Kanyakumari and Krishna Delta',
    ],
    explanation:
      'The Western Coastal Plain is divided into the Gujarat Coast, the Konkan Coast (Daman to Goa), the Kannada/Kanara Coast (Goa to Mangalore), and the Malabar Coast (Mangalore to Kanyakumari).',
    tip: 'Konkan = Daman to Goa; Kanara = Goa to Mangalore; Malabar = Mangalore to Kanyakumari.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-32',
    categoryId: 'general',
    question: '"Kayals" (Backwaters) are a unique physiographic feature of which Indian coast?',
    answer: 'Malabar Coast',
    options: ['Konkan Coast', 'Coromandel Coast', 'Malabar Coast', 'Utkal Coast'],
    explanation:
      'Kayals are shallow brackish lagoons and backwaters running parallel to the Arabian Sea along the Malabar Coast of Kerala.',
    tip: 'Kayals = Malabar Coast (Kerala).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-33',
    categoryId: 'general',
    question: 'The "Coromandel Coast" (Tamil Nadu and southern Andhra Pradesh) receives most of its rainfall during:',
    answer: 'Winter (Retreating / North-East Monsoon)',
    options: [
      'Summer (SW Monsoon)',
      'Winter (Retreating / North-East Monsoon)',
      'Spring',
      'Pre-monsoon Nor\'westers',
    ],
    explanation:
      'During summer, the Coromandel Coast lies in the rain shadow of the Western Ghats; however, during October–December, the retreating North-East Monsoon winds pick up moisture over the Bay of Bengal and bring heavy winter rainfall to Tamil Nadu.',
    tip: 'Coromandel Coast = Winter rainfall from Retreating (North-East) Monsoon.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-34',
    categoryId: 'general',
    question: 'Which of the following Indian island territories is a "Coral Island" group?',
    answer: 'Lakshadweep',
    options: ['Andaman Islands', 'Nicobar Islands', 'Lakshadweep', 'Majuli'],
    explanation:
      'Lakshadweep (consisting of Amindivi, Laccadive, and Minicoy islands) is an archipelago of coral atolls in the Arabian Sea.',
    tip: 'Coral Island group of India = Lakshadweep.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-35',
    categoryId: 'general',
    question: 'The "Ten Degree Channel" separates:',
    answer: 'Andaman and Nicobar',
    options: [
      'India and Sri Lanka',
      'Lakshadweep and Maldives',
      'Andaman and Nicobar',
      'South Andaman and Little Andaman',
    ],
    explanation:
      'The 10° N parallel (Ten Degree Channel) passes between Little Andaman and Car Nicobar, separating the Andaman Islands from the Nicobar Islands.',
    tip: '10° Channel = Little Andaman & Car Nicobar.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-36',
    categoryId: 'general',
    question: 'Which is the only confirmed active volcano in India?',
    answer: 'Barren Island',
    options: ['Narcondam Island', 'Barren Island', 'Minicoy', 'Pamban'],
    explanation:
      'Barren Island in the Andaman Sea is the only confirmed active volcano in South Asia, while Narcondam Island is classified as a dormant volcano.',
    tip: 'Active volcano = Barren Island; Dormant volcano = Narcondam Island.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-37',
    categoryId: 'general',
    question: '"Chilika Lake," the largest brackish water lagoon in India, is situated in which state?',
    answer: 'Odisha',
    options: ['Andhra Pradesh', 'Odisha', 'West Bengal', 'Tamil Nadu'],
    explanation:
      'Chilika Lake is located south of the Mahanadi delta on the Utkal coast of Odisha and was India’s first wetland of international importance under the Ramsar Convention (1981).',
    tip: 'Chilika Lake (Odisha) = Largest brackish water lagoon in India & first Ramsar site.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-38',
    categoryId: 'general',
    question: 'The "Palk Strait" lies between:',
    answer: 'India and Sri Lanka',
    options: [
      'Andaman and Nicobar',
      'Rann of Kutch and Gulf of Khambhat',
      'India and Sri Lanka',
      'Lakshadweep and Kerala',
    ],
    explanation:
      'Palk Strait connects the Bay of Bengal with Palk Bay and Gulf of Mannar, separating Tamil Nadu (India) from the Jaffna District of Sri Lanka.',
    tip: 'Palk Strait & Gulf of Mannar separate India and Sri Lanka.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-39',
    categoryId: 'general',
    question: 'Which Indian coast is geomorphologically an example of an "Emergent Coast"?',
    answer: 'Eastern Coast',
    options: ['Western Coast', 'Eastern Coast', 'Konkan Coast', 'North Kanara Coast'],
    explanation:
      'The Eastern Coastal Plain (along with the Malabar coast of Kerala) is an emergent coast characterized by wide beaches, sandbars, lagoons, and broad river deltas, whereas the northern Western Coast (Konkan/Kanara) is a submergent coast.',
    tip: 'Eastern Coast = Emergent coast (broad deltas, fewer natural harbours).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-40',
    categoryId: 'general',
    question: 'Saddle Peak (732 m), the highest point of the Andaman and Nicobar Islands, is located in:',
    answer: 'North Andaman',
    options: ['Great Nicobar', 'Little Andaman', 'North Andaman', 'Middle Andaman'],
    explanation:
      'Saddle Peak is situated near Diglipur on North Andaman Island, while Mount Thullier (642 m) is the highest peak of the Nicobar group (on Great Nicobar).',
    tip: 'Saddle Peak = North Andaman; Mount Thullier = Great Nicobar.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-41',
    categoryId: 'general',
    question: 'The "Radcliffe Line" demarcates the boundary between India and:',
    answer: 'Pakistan',
    options: ['China', 'Pakistan', 'Myanmar', 'Afghanistan'],
    explanation:
      'The Radcliffe Line was published on 17 August 1947 as the boundary demarcation line between India and Pakistan.',
    tip: 'Radcliffe Line = India & Pakistan; Durand Line = Pakistan/India & Afghanistan.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-42',
    categoryId: 'general',
    question: 'Which physical feature of northern India acts as the "Water Divide" between the Indus and Ganga river systems?',
    answer: 'Ambala Ridge (Delhi–Ambala upland)',
    options: ['Aravallis', 'Himalayas', 'Ambala Ridge (Delhi–Ambala upland)', 'Vindhyas'],
    explanation:
      'The slightly elevated upland around Ambala (Haryana) at ~300 m elevation acts as the water divide between the Indus river system (flowing west to the Arabian Sea) and the Ganga river system (flowing east to the Bay of Bengal).',
    tip: 'Ambala lies on the water divide between the Indus and Ganga river systems.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-43',
    categoryId: 'general',
    question: 'The "Patkai Bum" hills of the Purvanchal range form the international boundary between:',
    answer: 'India and Myanmar',
    options: [
      'India and China',
      'India and Myanmar',
      'India and Bhutan',
      'India and Bangladesh',
    ],
    explanation:
      'The Patkai Bum, Naga Hills, Manipur Hills, and Mizo (Lushai) Hills constitute the Purvanchal range along the eastern border between India and Myanmar.',
    tip: 'Purvanchal Hills (Patkai Bum, Naga, Mizo) = India–Myanmar border.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-44',
    categoryId: 'general',
    question: 'Which Indian state has the longest mainland coastline (approximately 1,600 km)?',
    answer: 'Gujarat',
    options: ['Andhra Pradesh', 'Tamil Nadu', 'Gujarat', 'Maharashtra'],
    explanation:
      'Gujarat possesses the longest coastline among Indian states (~1,600 km) due to its deeply indented Kathiawar and Kutch peninsulas.',
    tip: 'Gujarat = Longest state coastline in India.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-45',
    categoryId: 'general',
    question: 'The "Bundelkhand" and Chambal region is famous for which type of erosional topography?',
    answer: 'Badland topography (Ravines)',
    options: [
      'Desert dune topography',
      'Karst limestone topography',
      'Badland topography (Ravines)',
      'Glacial moraine topography',
    ],
    explanation:
      'Severe gully erosion by the Chambal River and its tributaries in the semi-arid Bundelkhand and Chambal basin has created a network of deep ravines known as "Badland topography" (locally called Bihads).',
    tip: 'Chambal & Bundelkhand = Badland topography (gully erosion / ravines).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-46',
    categoryId: 'general',
    question: 'Which northeastern state of India is geologically known as the "Molasses Basin"?',
    answer: 'Mizoram',
    options: ['Assam', 'Mizoram', 'Manipur', 'Nagaland'],
    explanation:
      'Mizoram is known as the "Molasses Basin" because it is composed of soft, unconsolidated Tertiary sedimentary deposits.',
    tip: 'Molasses Basin = Mizoram.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-47',
    categoryId: 'general',
    question: '"Loktak Lake," famous for its floating biomass islands called "Phumdis" and Keibul Lamjao National Park, is located in:',
    answer: 'Manipur',
    options: ['Meghalaya', 'Manipur', 'Tripura', 'Mizoram'],
    explanation:
      'Loktak Lake in Manipur is the largest freshwater lake in Northeast India, famous for circular floating heterogeneous vegetation masses called Phumdis and the world’s only floating national park, Keibul Lamjao (home of the Sangai deer).',
    tip: 'Loktak Lake + Phumdis + Keibul Lamjao + Sangai deer = Manipur.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s3-48',
    categoryId: 'general',
    question: 'Which is the largest district in India by geographical area?',
    answer: 'Kutch',
    options: ['Leh', 'Kutch', 'Jaisalmer', 'Bikaner'],
    explanation:
      'Kutch district in Gujarat (45,674 sq. km) is the largest district in India by area, followed by Leh in Ladakh and Jaisalmer in Rajasthan.',
    tip: 'Largest district in India by area: 1st Kutch (Gujarat), 2nd Leh (Ladakh), 3rd Jaisalmer (Rajasthan).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s3-49',
    categoryId: 'general',
    question: 'Geographically, the "Malabar Coast" begins south of which river mouth at Mangalore?',
    answer: 'Netravati',
    options: ['Tapi', 'Netravati', 'Periyar', 'Krishna'],
    explanation:
      'The Malabar Coast stretches from south of the Netravati River mouth (at Mangalore, Karnataka) all the way to Kanyakumari in the south.',
    tip: 'Malabar Coast extends from Netravati River (Mangalore) to Kanyakumari.',
    difficulty: 'advanced',
  },
  {
    id: 'wgeo-s3-50',
    categoryId: 'general',
    question: 'Which Indian state shares borders with 8 states and 1 Union Territory, the highest in India?',
    answer: 'Uttar Pradesh',
    options: ['Madhya Pradesh', 'Uttar Pradesh', 'Assam', 'Chhattisgarh'],
    explanation:
      'Uttar Pradesh borders 8 states (Uttarakhand, HP, Haryana, Rajasthan, MP, Chhattisgarh, Jharkhand, Bihar) and 1 Union Territory (Delhi).',
    tip: 'Uttar Pradesh = Maximum interstate borders (8 states + Delhi UT).',
    difficulty: 'beginner',
  },

  // ============================================================================
  // SET 4: STATEMENT-BASED PHYSIOGRAPHY QUESTIONS (Q111–Q135)
  // ============================================================================
  {
    id: 'wgeo-s4-1',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Himalayas: Statement 1: They are geographically the youngest and structurally fold mountains. Statement 2: The Himalayas take a sharp southward bend called the "Syntaxial Bend" at both their eastern and western ends. Statement 3: The Great Himalayas are characterized by an asymmetrical fold with a core made of granite.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct: the Himalayas are young Alpine fold mountains with syntaxial bends at Nanga Parbat and Namcha Barwa, and the Great Himalayas have an asymmetrical fold with an Archean granite core.',
    tip: 'Great Himalayas core = Granite; Structure = Asymmetrical young fold mountains.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-2',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Trans-Himalayas: Statement 1: They lie to the north of the Great Himalayan range. Statement 2: The Karakoram, Ladakh, and Zanskar ranges are part of this region. Statement 3: K2 (Godwin-Austen), the second highest peak in the world, is located in the Zanskar range.',
    answer: 'Only 1 and 2 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 2 are correct. Statement 3 is incorrect because K2 (8,611 m, Godwin-Austen) is located in the Karakoram Range, not the Zanskar range.',
    tip: 'K2 (Godwin-Austen) is in the Karakoram Range (not Zanskar).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-3',
    categoryId: 'general',
    question:
      'Consider the following statements about "Karewas": Statement 1: They are thick lacustrine (lake) deposits of glacial clay and moraines. Statement 2: They are primarily found in the Himachal (Lesser) Himalayas of Uttarakhand. Statement 3: They are globally renowned for the cultivation of "Zafran" (Saffron).',
    answer: 'Only 1 and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 3 are correct. Statement 2 is incorrect because Karewas are uniquely found in the Kashmir Himalayas (Kashmir Valley), not in Uttarakhand.',
    tip: 'Karewas = Kashmir Himalayas (not Uttarakhand), lacustrine deposits for Zafran.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-4',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Shiwalik Range: Statement 1: It is the southernmost and outermost range of the Himalayas. Statement 2: It is composed of unconsolidated sediments brought down by rivers. Statement 3: This range is continuous from the Indus River to the Brahmaputra without any breaks.',
    answer: 'Only 1 and 2 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 1 and 3 are correct',
      'Only 2 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 2 are correct. Statement 3 is incorrect because the Shiwaliks disappear or merge with the Lesser Himalayas in the eastern sector (for instance, across a 80–90 km gap near the Teesta and Raidak rivers in North Bengal/Sikkim).',
    tip: 'Shiwaliks are discontinuous in the eastern sector near the Teesta River.',
    difficulty: 'advanced',
  },
  {
    id: 'wgeo-s4-5',
    categoryId: 'general',
    question:
      'Consider the following statements about the regional divisions of the Himalayas (Sidney Burrard classification): Statement 1: The Nepal Himalayas lie between the Kali and Teesta rivers. Statement 2: The Kumaon Himalayas are situated between the Satluj and Kali rivers. Statement 3: The Punjab Himalayas are located between the Indus and Satluj rivers.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2',
      'Only 2 and 3',
      'Only 1 and 3',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Sidney Burrard divided the Himalayas longitudinally by river valleys: Punjab Himalayas (Indus to Satluj), Kumaon Himalayas (Satluj to Kali), Nepal Himalayas (Kali to Teesta), and Assam Himalayas (Teesta to Dihang/Brahmaputra).',
    tip: 'Indus–Satluj (Punjab) → Satluj–Kali (Kumaon) → Kali–Teesta (Nepal) → Teesta–Dihang (Assam).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-6',
    categoryId: 'general',
    question:
      'Consider the statements regarding the Bhabar region: Statement 1: It is a narrow belt parallel to the Shiwalik foothills. Statement 2: Rivers and streams disappear in this region due to high porosity. Statement 3: It is the most fertile region of the Northern Plains for agriculture.',
    answer: 'Only 1 and 2 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 2 are correct. Statement 3 is incorrect because the coarse pebble-and-boulder bed of the Bhabar is unsuitable for crop cultivation (Khadar is the most fertile region).',
    tip: 'Bhabar is rocky and porous (not suitable for agriculture).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-7',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Terai region: Statement 1: It lies to the south of the Bhabar belt. Statement 2: It is a marshy, damp, and thickly forested area. Statement 3: Most of the Terai in India has been cleared for agriculture, especially in Punjab and Uttar Pradesh.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. Following Partition, extensive tracts of the Terai in Punjab, Uttarakhand, and Uttar Pradesh were reclaimed for sugarcane, rice, and wheat cultivation.',
    tip: 'All 3 statements about the Terai belt are correct.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-8',
    categoryId: 'general',
    question:
      'Consider the following statements about "Bhangar" and "Khadar": Statement 1: Bhangar represents the older alluvium of the plains. Statement 2: Khadar is the newer alluvium that is renewed by floods almost every year. Statement 3: Bhangar is more fertile than Khadar due to the presence of "Kankar" (calcium deposits).',
    answer: 'Only 1 and 2 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 2 are correct. Statement 3 is incorrect because Khadar is much more fertile than Bhangar due to annual replenishment of fine silt.',
    tip: 'Khadar is more fertile than Bhangar.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-9',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Punjab Plains: Statement 1: They are primarily formed by the Indus and its tributaries. Statement 2: This region is dominated by "Doabs" (land between two rivers). Statement 3: The "Bari Doab" lies between the Beas and Ravi rivers.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Punjab ("Land of Five Rivers") plain is built by the Indus system and characterized by five famous Doabs, including the Bari Doab (Beas–Ravi).',
    tip: 'Bari Doab = Beas + Ravi.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-10',
    categoryId: 'general',
    question:
      'Consider the following statements about the Ganga Plains: Statement 1: It extends between the Ghaggar and Teesta rivers. Statement 2: The "Rohilkhand Plain" is a part of the Upper Ganga Plain. Statement 3: The deltaic part of the Ganga plain is known as the "Sunderbans".',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Ganga Plain stretches from the Ghaggar to the Teesta river, includes regional plains like Rohilkhand, Awadh, and Magadh, and terminates in the Sunderbans delta.',
    tip: 'Ganga Plain = Ghaggar to Teesta.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-11',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Peninsular Plateau: Statement 1: It is one of the oldest and most stable landmasses on Earth. Statement 2: It is primarily composed of old crystalline, igneous, and metamorphic rocks. Statement 3: It has a general slope from West to East.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The eastward drainage of major peninsular rivers (Mahanadi, Godavari, Krishna, Kaveri) into the Bay of Bengal demonstrates the general west-to-east slope of the plateau.',
    tip: 'Peninsular Plateau slopes from West to East.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-12',
    categoryId: 'general',
    question:
      'Consider the statements about the Deccan Trap: Statement 1: It was formed by fissure volcanic eruptions during the Cretaceous period. Statement 2: It is characterized by step-like topography made of basaltic lava. Statement 3: The region is famous for "Regur" or Black Soil, ideal for cotton.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2',
      'Only 2 and 3',
      'Only 1 and 3',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements accurately describe the origin, basaltic trap rock structure, and black cotton (Regur) soil of the Deccan Trap.',
    tip: 'Deccan Trap = Cretaceous fissure eruptions + Basaltic steps + Regur soil.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-13',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Western Ghats: Statement 1: They are higher and more continuous than the Eastern Ghats. Statement 2: Their height increases from South to North. Statement 3: They act as a water divide for many peninsular rivers.',
    answer: 'Only 1 and 3 are correct',
    options: [
      'Only 1 and 3 are correct',
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 3 are correct. Statement 2 is incorrect because the elevation of the Western Ghats progressively increases from North to South, culminating in Anamudi (2,695 m) in Kerala.',
    tip: 'Western Ghats height increases from North to South (not South to North).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-14',
    categoryId: 'general',
    question:
      'Consider the following statements about the Eastern Ghats: Statement 1: They are discontinuous and irregular due to erosion by rivers flowing into the Bay of Bengal. Statement 2: Mahendragiri is one of the highest peaks of the Eastern Ghats. Statement 3: They meet the Western Ghats at the Nilgiri Hills.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Eastern Ghats are dissected by the Mahanadi, Godavari, Krishna, and Kaveri rivers, feature peaks like Jindhagada and Mahendragiri (1,501 m), and meet the Western Ghats at the Nilgiri Hills.',
    tip: 'Eastern & Western Ghats meet at the Nilgiri Hills.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-15',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Central Highlands: Statement 1: They lie to the north of the Narmada river. Statement 2: They include the Malwa Plateau and the Chota Nagpur Plateau. Statement 3: Rivers like Chambal and Ken flow from Southwest to Northeast in this region.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 1 and 3 are correct',
      'Only 2 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Central Highlands lie north of the Narmada river, encompass Malwa, Bundelkhand, Baghelkhand, and Chota Nagpur plateaus, and slope from southwest to northeast.',
    tip: 'Central Highlands rivers (Chambal, Sind, Betwa, Ken) flow SW to NE.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-16',
    categoryId: 'general',
    question:
      'Consider the statements about the Western Coastal Plain: Statement 1: It is a narrow strip of land between the Western Ghats and the Arabian Sea. Statement 2: It is divided into Konkan, Kannada, and Malabar coasts. Statement 3: It is an example of an "Emergent" coastline throughout its entire length.',
    answer: 'Only 1 and 2 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 2 are correct. Statement 3 is incorrect because the Western Coastal Plain (especially the Konkan and Kannada coast) is a submerged coastal plain, which provides natural conditions for deep ports and harbours.',
    tip: 'Western Coastal Plain is primarily a submergent coast (ideal for natural harbours).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-17',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Eastern Coastal Plain: Statement 1: It is wider and more leveled than the Western Coastal Plain. Statement 2: It features large deltas formed by rivers like the Mahanadi and Godavari. Statement 3: It is known as the Coromandel Coast in its northern part.',
    answer: 'Only 1 and 2 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 2 are correct. Statement 3 is incorrect because the southern stretch (Tamil Nadu and southern AP) is called the Coromandel Coast, whereas the northern part is called the Northern Circars (and Utkal Coast in Odisha).',
    tip: 'Eastern Coast: Northern part = Northern Circars / Utkal; Southern part = Coromandel Coast.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-18',
    categoryId: 'general',
    question:
      'Consider the following statements about "Kayals": Statement 1: They are brackish water lagoons found along the Malabar Coast. Statement 2: They are used for fishing and inland navigation. Statement 3: The Vembanad Lake in Kerala is the largest Kayal in India.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. Vembanad Lake (Kerala) is the longest lake in India and the largest Kayal on the Malabar Coast.',
    tip: 'Vembanad Lake = Largest Kayal in Kerala and longest lake in India.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-19',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the Andaman and Nicobar Islands: Statement 1: They are an elevated portion of submarine mountains (Arakan Yoma extension). Statement 2: The Ten Degree Channel separates the Andaman group from the Nicobar group. Statement 3: Saddle Peak is the highest point in the entire archipelago.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Andaman & Nicobar islands represent the emergent peaks of a submerged Tertiary mountain chain continuing from Myanmar’s Arakan Yoma.',
    tip: 'Andaman & Nicobar = Submerged extension of Arakan Yoma.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-20',
    categoryId: 'general',
    question:
      'Consider the statements about Lakshadweep: Statement 1: It is a group of islands of coral origin (Atolls). Statement 2: It is located in the Bay of Bengal. Statement 3: Kavaratti is the administrative headquarters of Lakshadweep.',
    answer: 'Only 1 and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 1 and 3 are correct',
      'Only 2 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'Statements 1 and 3 are correct. Statement 2 is incorrect because Lakshadweep is located in the Arabian Sea off the coast of Kerala, not in the Bay of Bengal.',
    tip: 'Lakshadweep = Arabian Sea, Coral origin, Capital Kavaratti.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-21',
    categoryId: 'general',
    question:
      'Consider the following statements about the "Indian Desert" (Thar): Statement 1: It lies to the northwest of the Aravalli hills. Statement 2: It receives very low rainfall, below 150 mm per year. Statement 3: The Luni is the only significant river in this region.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 1 and 3 are correct',
      'Only 2 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Thar Desert (Marusthali) lies northwest of the Aravallis, receives <150 mm annual rainfall, and is drained primarily by the ephemeral Luni River.',
    tip: 'Thar Desert = NW of Aravallis, <150 mm rainfall, Luni River.',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-22',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the "Meghalaya Plateau" (Karbi-Meghalaya Plateau): Statement 1: It is a physical extension of the Peninsular Plateau. Statement 2: It is separated from the Chota Nagpur plateau by the Malda Fault (Garo-Rajmahal Gap). Statement 3: It includes the Garo, Khasi, and Jaintia hills.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. Geologically, the Meghalaya (Shillong) and Karbi Anglong plateaus are detached northeastern extensions of the ancient Peninsular block, separated from the Rajmahal Hills by the Malda Fault.',
    tip: 'Meghalaya Plateau = Extension of Peninsular Plateau separated by Malda Fault (Garo-Rajmahal Gap).',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-23',
    categoryId: 'general',
    question:
      'Consider the following statements about the "Aravalli Range": Statement 1: It is one of the oldest fold mountain systems in the world. Statement 2: It extends from Gujarat (Palanpur) to Delhi. Statement 3: Guru Shikhar is the highest peak of this range.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Aravallis stretch ~800 km from Palanpur (Gujarat) across Rajasthan to Delhi Ridge, with Guru Shikhar (1,722 m) in Mount Abu as their highest peak.',
    tip: 'Aravalli Range = Oldest fold mountains, Gujarat to Delhi, highest peak Guru Shikhar (1,722 m).',
    difficulty: 'beginner',
  },
  {
    id: 'wgeo-s4-24',
    categoryId: 'general',
    question:
      'Consider the following statements regarding the "Vindhya and Satpura" ranges: Statement 1: The Vindhyas lie to the north of the Narmada river. Statement 2: The Satpura range lies between the Narmada and Tapi rivers. Statement 3: Both are primarily block mountains formed by faulting.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. The Narmada flows in the rift valley between the Vindhyas (north) and Satpuras (south), while the Tapi flows south of the Satpura block.',
    tip: 'North to South order: Vindhya Range → Narmada River → Satpura Range → Tapi River.',
    difficulty: 'intermediate',
  },
  {
    id: 'wgeo-s4-25',
    categoryId: 'general',
    question:
      'Consider the statements about the "Purvanchal" hills: Statement 1: They are the eastern extension of the Himalayas beyond the Dihang gorge. Statement 2: They are composed of strong sandstones which are sedimentary rocks. Statement 3: They include the Patkai Bum, Naga, Manipur, and Mizo (Lushai) hills.',
    answer: 'All 1, 2, and 3 are correct',
    options: [
      'Only 1 and 2 are correct',
      'Only 2 and 3 are correct',
      'Only 1 and 3 are correct',
      'All 1, 2, and 3 are correct',
    ],
    explanation:
      'All three statements are correct. Beyond the Dihang gorge, the Himalayas bend sharply southward to form the Purvanchal hills composed of sedimentary sandstones.',
    tip: 'Purvanchal Hills (North to South): Patkai Bum → Naga Hills → Manipur Hills → Mizo (Lushai) Hills.',
    difficulty: 'intermediate',
  },
];
