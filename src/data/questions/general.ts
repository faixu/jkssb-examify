import { Flashcard } from '../../types';

export const GENERAL_QUESTIONS: Flashcard[] = [
  {
    id: 'gen-1',
    categoryId: 'general',
    question: 'What is the deepest known oceanic trench on Earth?',
    answer: 'Mariana Trench (Challenger Deep)',
    options: ['Mariana Trench (Challenger Deep)', 'Puerto Rico Trench', 'Java Trench', 'Philippine Trench'],
    explanation: 'Located in the western Pacific Ocean, the Challenger Deep inside the Mariana Trench plunges to approximately 10,994 meters (~36,070 feet) below sea level.',
    tip: 'Mariana Trench: ~11 km deep.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-2',
    categoryId: 'general',
    question: 'Which African nation remained uncolonized by European powers during the Scramble for Africa, alongside Liberia?',
    answer: 'Ethiopia',
    options: ['Ethiopia', 'Nigeria', 'Morocco', 'Sudan'],
    explanation: 'Ethiopia defeated the Italian army at the Battle of Adwa in 1896, preserving its sovereignty throughout the colonial era.',
    tip: 'Ethiopia defended independence at Battle of Adwa.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-3',
    categoryId: 'general',
    question: 'What is the largest hot desert in the world?',
    answer: 'Sahara Desert',
    options: ['Sahara Desert', 'Gobi Desert', 'Kalahari Desert', 'Arabian Desert'],
    explanation: 'The Sahara spans over 9.2 million square kilometers across North Africa. (Note: Antarctica and the Arctic are polar cold deserts and are larger in total area).',
    tip: 'Largest HOT desert = Sahara. Largest overall desert = Antarctic.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-4',
    categoryId: 'general',
    question: 'Who was the first human to journey into outer space, orbiting the Earth aboard Vostok 1 in 1961?',
    answer: 'Yuri Gagarin',
    options: ['Yuri Gagarin', 'Neil Armstrong', 'Alan Shepard', 'John Glenn'],
    explanation: 'Soviet cosmonaut Yuri Gagarin completed an orbit of Earth on April 12, 1961.',
    tip: 'Vostok 1 (April 1961): Yuri Gagarin.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-5',
    categoryId: 'general',
    question: 'Which element on the periodic table has the highest electrical and thermal conductivity of all metals at room temperature?',
    answer: 'Silver (Ag)',
    options: ['Silver (Ag)', 'Copper (Cu)', 'Gold (Au)', 'Aluminum (Al)'],
    explanation: 'Silver has the highest electrical and thermal conductivity of any known metal, though copper is more widely used industrially due to lower cost.',
    tip: 'Silver is #1 for conductivity, followed by copper and gold.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-6',
    categoryId: 'general',
    question: 'In what year was the United Nations established in San Francisco following World War II?',
    answer: '1945',
    options: ['1945', '1939', '1950', '1918'],
    explanation: 'The UN Charter was signed on June 26, 1945, and came into force on October 24, 1945, replacing the League of Nations.',
    tip: '1945: End of WWII and birth of the UN.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-7',
    categoryId: 'general',
    question: 'Which canal connects the Mediterranean Sea to the Red Sea, enabling direct maritime navigation between Europe and Asia without circumnavigating Africa?',
    answer: 'Suez Canal',
    options: ['Suez Canal', 'Panama Canal', 'Kiel Canal', 'Corinth Canal'],
    explanation: 'Opened in 1869 in Egypt, the Suez Canal drastically cut sailing distances between the North Atlantic and northern Indian Oceans.',
    tip: 'Suez = Mediterranean to Red Sea.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-8',
    categoryId: 'general',
    question: 'How many bones are in the adult human skeleton?',
    answer: '206',
    options: ['206', '300', '180', '248'],
    explanation: 'Infants are born with approximately 270–300 bones, many of which fuse together during growth, leaving 206 separate bones in an adult skeleton.',
    tip: 'Babies start with ~300; adult skeleton settles at 206.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-9',
    categoryId: 'general',
    question: 'What is the largest country in the world by total land area?',
    answer: 'Russia',
    options: ['Russia', 'Canada', 'China', 'United States'],
    explanation: 'Russia spans over 17 million square kilometers (~6.6 million square miles), covering more than one-eighth of Earth\'s inhabited land area across 11 time zones.',
    tip: 'Russia is the largest nation by land area.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-10',
    categoryId: 'general',
    question: 'What is the smallest independent sovereign state in the world by both area and population?',
    answer: 'Vatican City',
    options: ['Vatican City', 'Monaco', 'Nauru', 'San Marino'],
    explanation: 'An enclave completely surrounded by Rome, Italy, Vatican City covers only ~0.49 square kilometers (121 acres) with a population of under 1,000.',
    tip: 'Vatican City = Smallest sovereign state.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-11',
    categoryId: 'general',
    question: 'What is the longest river in the world according to traditional geographical consensus?',
    answer: 'Nile River',
    options: ['Nile River', 'Amazon River', 'Yangtze River', 'Mississippi River'],
    explanation: 'Flowing approximately 6,650 kilometers (4,132 miles) northward through 11 African countries into the Mediterranean Sea. (Amazon is largest by water discharge volume).',
    tip: 'Nile = Longest (~6,650 km); Amazon = Greatest water volume.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-12',
    categoryId: 'general',
    question: 'Which river has the largest drainage basin and the greatest discharge volume of water in the world?',
    answer: 'Amazon River',
    options: ['Amazon River', 'Nile River', 'Congo River', 'Ganges River'],
    explanation: 'The Amazon discharges approximately 209,000 cubic meters per second into the Atlantic Ocean—more than the next seven largest rivers combined.',
    tip: 'Amazon = Greatest water volume of any river.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-13',
    categoryId: 'general',
    question: 'What is the highest mountain peak above sea level on Earth?',
    answer: 'Mount Everest (Sagarmatha / Chomolungma)',
    options: ['Mount Everest (Sagarmatha / Chomolungma)', 'K2 (Godwin-Austen)', 'Kangchenjunga', 'Lhotse'],
    explanation: 'Standing in the Himalayas on the border between Nepal and China at an official elevation of 8,848.86 meters (29,031.7 feet).',
    tip: 'Mount Everest: 8,848.86 meters.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-14',
    categoryId: 'general',
    question: 'Which mountain peak is the closest to outer space and the farthest from the center of the Earth due to the equatorial bulge?',
    answer: 'Mount Chimborazo (Ecuador)',
    options: ['Mount Chimborazo (Ecuador)', 'Mount Everest', 'Mount Kilimanjaro', 'Mauna Kea'],
    explanation: 'Earth is an oblate spheroid thicker at the equator. Located just 1° south of the equator, Chimborazo\'s summit is ~2 km farther from Earth\'s center than Everest.',
    tip: 'Chimborazo (Ecuador) = Farthest point from Earth\'s center due to equatorial bulge.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-15',
    categoryId: 'general',
    question: 'What is the tallest mountain on Earth measured from its base on the ocean floor to its peak?',
    answer: 'Mauna Kea (Hawaii)',
    options: ['Mauna Kea (Hawaii)', 'Mount Everest', 'Mount Kilimanjaro', 'Denali'],
    explanation: 'From its underwater oceanic base to its summit, Mauna Kea measures over 10,210 meters (~33,500 feet), though only 4,207 meters rise above sea level.',
    tip: 'Mauna Kea = Tallest mountain from base to peak (>10 km).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-16',
    categoryId: 'general',
    question: 'What is the largest island in the world that is not a continent?',
    answer: 'Greenland',
    options: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
    explanation: 'Spanning approximately 2.16 million square kilometers, Greenland is an autonomous territory within the Kingdom of Denmark (Australia is classified as a continent).',
    tip: 'Greenland = Largest island in the world.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-17',
    categoryId: 'general',
    question: 'What is the capital city of Australia?',
    answer: 'Canberra',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
    explanation: 'Canberra was selected as a planned compromise capital in 1908 to resolve intense rivalry between Sydney and Melbourne.',
    tip: 'Canberra is Australia\'s capital (not Sydney or Melbourne).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-18',
    categoryId: 'general',
    question: 'What is the capital city of Canada?',
    answer: 'Ottawa',
    options: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'],
    explanation: 'Queen Victoria chose Ottawa as capital in 1857 because it was located safely on the border between English-speaking Ontario and French-speaking Quebec.',
    tip: 'Ottawa is Canada\'s federal capital.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-19',
    categoryId: 'general',
    question: 'What is the capital city of Brazil?',
    answer: 'Brasília',
    options: ['Brasília', 'Rio de Janeiro', 'São Paulo', 'Salvador'],
    explanation: 'A planned federal capital inaugurated in 1960, replacing Rio de Janeiro to move the political center inland (designed by Oscar Niemeyer and Lúcio Costa).',
    tip: 'Brasília is Brazil\'s capital (since 1960).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-20',
    categoryId: 'general',
    question: 'Which country has the most natural freshwater lakes in the world, containing over 60% of all lakes on Earth?',
    answer: 'Canada',
    options: ['Canada', 'Russia', 'United States', 'Finland'],
    explanation: 'Canada is home to an estimated 2 million lakes, covering ~9% of its surface area, carved out by retreating Pleistocene ice sheets.',
    tip: 'Canada has more lakes than the rest of the world combined.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-21',
    categoryId: 'general',
    question: 'What is the deepest freshwater lake in the world, holding approximately 20% of the world\'s unfrozen surface freshwater?',
    answer: 'Lake Baikal (Russia)',
    options: ['Lake Baikal (Russia)', 'Lake Superior', 'Lake Tanganyika', 'Lake Victoria'],
    explanation: 'Located in southern Siberia, Lake Baikal reaches a maximum depth of 1,642 meters (5,387 feet) and is the world\'s oldest freshwater lake (~25 million years).',
    tip: 'Lake Baikal = Deepest lake and largest by water volume.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-22',
    categoryId: 'general',
    question: 'What is the largest freshwater lake in the world by surface area?',
    answer: 'Lake Superior (North America)',
    options: ['Lake Superior (North America)', 'Lake Victoria', 'Lake Huron', 'Lake Michigan'],
    explanation: 'Covering 82,100 square kilometers between the US and Canada. (The Caspian Sea is larger but is endorheic saline water).',
    tip: 'Lake Superior = Largest freshwater lake by surface area.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-23',
    categoryId: 'general',
    question: 'What is the largest enclosed inland body of water on Earth by surface area (often classified as the world\'s largest lake)?',
    answer: 'Caspian Sea',
    options: ['Caspian Sea', 'Black Sea', 'Aral Sea', 'Baltic Sea'],
    explanation: 'Spans 371,000 square kilometers bordered by Russia, Kazakhstan, Turkmenistan, Iran, and Azerbaijan; saline water without natural oceanic outflow.',
    tip: 'Caspian Sea = Largest inland body of water on Earth.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-24',
    categoryId: 'general',
    question: 'What is the highest uninterrupted waterfall in the world?',
    answer: 'Angel Falls (Kerepakupai Merú in Venezuela)',
    options: ['Angel Falls (Kerepakupai Merú in Venezuela)', 'Niagara Falls', 'Victoria Falls', 'Iguazu Falls'],
    explanation: 'Plunges 979 meters (3,212 feet) with a direct drop of 807 meters from the Auyán-tepui mountain in Canaima National Park, Venezuela.',
    tip: 'Angel Falls (Venezuela): Highest waterfall (979 meters).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-25',
    categoryId: 'general',
    question: 'Which waterfall on the Zambezi River between Zambia and Zimbabwe forms the world\'s largest sheet of falling water, locally known as "Mosi-oa-Tunya" (The Smoke That Thunders)?',
    answer: 'Victoria Falls',
    options: ['Victoria Falls', 'Iguazu Falls', 'Angel Falls', 'Niagara Falls'],
    explanation: 'Spanning 1,708 meters wide and 108 meters high, forming the largest single sheet of cascading water in the world.',
    tip: 'Victoria Falls: Largest curtain of falling water (Zambezi River).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-26',
    categoryId: 'general',
    question: 'Which country spans the most time zones in the world including its overseas territories (12 time zones)?',
    answer: 'France',
    options: ['France', 'Russia', 'United States', 'United Kingdom'],
    explanation: 'Because of its overseas departments and territories across the Pacific, Indian, and Atlantic oceans (French Polynesia, Réunion, Guadeloupe, etc.), France spans 12 time zones (13 including Antarctica claims).',
    tip: 'France has 12 time zones due to overseas island territories.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-27',
    categoryId: 'general',
    question: 'How many time zones does China officially use nationwide?',
    answer: 'One (Beijing Time, UTC+8)',
    options: ['One (Beijing Time, UTC+8)', 'Four', 'Five', 'Three'],
    explanation: 'Despite spanning five geographical solar time zones, the Chinese government established a single nationwide time zone (UTC+8) in 1949 to foster national unity.',
    tip: 'China uses only 1 single time zone nationwide (UTC+8).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-28',
    categoryId: 'general',
    question: 'Which nation is known as the "Land of the Midnight Sun" where areas north of the Arctic Circle experience 24 hours of daylight in summer?',
    answer: 'Norway',
    options: ['Norway', 'Iceland', 'Finland', 'Canada'],
    explanation: 'Norway\'s northern territories (like Svalbard and Tromsø) experience continuous sunlight from late April to late August due to Earth\'s axial tilt.',
    tip: 'Norway = Land of the Midnight Sun.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-29',
    categoryId: 'general',
    question: 'What is the driest non-polar desert in the world, where some weather stations have never recorded a single drop of rain?',
    answer: 'Atacama Desert (Chile)',
    options: ['Atacama Desert (Chile)', 'Mojave Desert', 'Namib Desert', 'Thar Desert'],
    explanation: 'Sandwiched between the Andes and the Chilean Coast Range in a two-sided rain shadow, making it hyper-arid and an ideal site for astronomical telescopes (ALMA).',
    tip: 'Atacama Desert (Chile) = Driest non-polar desert on Earth.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-30',
    categoryId: 'general',
    question: 'Which country has the longest coastline in the world, stretching over 202,080 kilometers (125,567 miles)?',
    answer: 'Canada',
    options: ['Canada', 'Indonesia', 'Norway', 'Russia'],
    explanation: 'Its vast Arctic archipelago and deeply indented mainland shores give Canada the longest total shoreline of any nation.',
    tip: 'Canada = Longest coastline in the world.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-31',
    categoryId: 'general',
    question: 'What is the only sea in the world that has no land boundaries/coastlines, defined entirely by ocean currents?',
    answer: 'Sargasso Sea',
    options: ['Sargasso Sea', 'Coral Sea', 'Tasman Sea', 'Weddell Sea'],
    explanation: 'Located in the North Atlantic Subtropical Gyre, bounded by the Gulf Stream, North Atlantic Current, Canary Current, and North Atlantic Equatorial Current.',
    tip: 'Sargasso Sea has no land shores; bound by ocean currents.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-32',
    categoryId: 'general',
    question: 'Which strait separates Europe (Spain) and Africa (Morocco), connecting the Atlantic Ocean to the Mediterranean Sea?',
    answer: 'Strait of Gibraltar',
    options: ['Strait of Gibraltar', 'Strait of Hormuz', 'Bosphorus Strait', 'Strait of Malacca'],
    explanation: 'Only 14 kilometers (8.9 miles) wide at its narrowest point; historically known as the Pillars of Hercules.',
    tip: 'Strait of Gibraltar connects Atlantic to Mediterranean.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-33',
    categoryId: 'general',
    question: 'Which narrow strait connects the Persian Gulf to the Gulf of Oman, through which roughly 20% of the world\'s petroleum consumption passes?',
    answer: 'Strait of Hormuz',
    options: ['Strait of Hormuz', 'Strait of Malacca', 'Bab-el-Mandeb', 'Suez Canal'],
    explanation: 'Bordered by Iran to the north and Oman/UAE to the south; one of the most critical geopolitical choke points in international trade.',
    tip: 'Strait of Hormuz = Critical oil transit choke point (Persian Gulf).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-34',
    categoryId: 'general',
    question: 'Which strait between the Malay Peninsula and the Indonesian island of Sumatra is the main shipping channel between the Indian and Pacific Oceans?',
    answer: 'Strait of Malacca',
    options: ['Strait of Malacca', 'Sunda Strait', 'Lombok Strait', 'Torres Strait'],
    explanation: 'One of the busiest maritime trade routes in history, handling over 84,000 vessels annually carrying a quarter of the world\'s traded goods.',
    tip: 'Strait of Malacca = Key maritime artery between Indian & Pacific oceans.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-35',
    categoryId: 'general',
    question: 'What is the capital city of Turkey?',
    answer: 'Ankara',
    options: ['Ankara', 'Istanbul', 'Izmir', 'Antalya'],
    explanation: 'Mustafa Kemal Atatürk moved the capital from Istanbul (Constantinople) to Ankara in central Anatolia in 1923 upon founding the Republic of Turkey.',
    tip: 'Ankara is Turkey\'s capital (not Istanbul).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-36',
    categoryId: 'general',
    question: 'What is the capital city of Switzerland?',
    answer: 'Bern (de facto federal city)',
    options: ['Bern (de facto federal city)', 'Zurich', 'Geneva', 'Basel'],
    explanation: 'Switzerland does not officially have a constitutionally designated capital; Bern is designated the "Federal City" (Bundesstadt) hosting parliament and government.',
    tip: 'Bern is Switzerland\'s federal capital city (not Zurich or Geneva).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-37',
    categoryId: 'general',
    question: 'Which country has three official capital cities: Pretoria (executive), Cape Town (legislative), and Bloemfontein (judicial)?',
    answer: 'South Africa',
    options: ['South Africa', 'Nigeria', 'Bolivia', 'Malaysia'],
    explanation: 'To balance power between the historic provinces that united in 1910, South Africa split the three branches of government across three cities.',
    tip: 'South Africa has 3 capitals: Pretoria, Cape Town, Bloemfontein.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-38',
    categoryId: 'general',
    question: 'Which country has two official capitals: La Paz (seat of executive and legislature) and Sucre (constitutional and judicial capital)?',
    answer: 'Bolivia',
    options: ['Bolivia', 'Ecuador', 'Paraguay', 'Colombia'],
    explanation: 'Sucre is the historic constitutional capital where the declaration of independence was signed; La Paz is the administrative seat of government.',
    tip: 'Bolivia: Sucre (constitutional) and La Paz (administrative).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-39',
    categoryId: 'general',
    question: 'What is the oldest continuously inhabited sovereign city in the world according to historical consensus?',
    answer: 'Damascus (Syria)',
    options: ['Damascus (Syria)', 'Athens (Greece)', 'Rome (Italy)', 'Jerusalem'],
    explanation: 'Archaeological evidence shows habitation dating back at least 11,000 years, with historical urban records continuously for over 4,000 years.',
    tip: 'Damascus = Widely regarded as oldest continuously inhabited capital.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-40',
    categoryId: 'general',
    question: 'Which ancient wonder was located in Alexandria, Egypt, and stood for over 1,000 years guiding sailors before earthquakes destroyed it?',
    answer: 'The Lighthouse of Alexandria (Pharos)',
    options: ['The Lighthouse of Alexandria (Pharos)', 'The Colossus of Rhodes', 'The Temple of Artemis', 'The Mausoleum at Halicarnassus'],
    explanation: 'Built by the Ptolemaic Kingdom around 280 BC, standing over 100 meters tall, one of the Seven Wonders of the Ancient World.',
    tip: 'Pharos of Alexandria = Ancient Lighthouse Wonder.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-41',
    categoryId: 'general',
    question: 'Which of the Seven Wonders of the Ancient World is the only one that still largely stands today?',
    answer: 'The Great Pyramid of Giza (Khufu)',
    options: ['The Great Pyramid of Giza (Khufu)', 'Hanging Gardens of Babylon', 'Statue of Zeus at Olympia', 'Colossus of Rhodes'],
    explanation: 'Constructed around 2560 BC for Pharaoh Khufu; remained the tallest man-made structure in the world for over 3,800 years.',
    tip: 'Great Pyramid of Giza is the only surviving ancient wonder.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-42',
    categoryId: 'general',
    question: 'Who was the Swedish chemist and industrialist who invented dynamite and endowed the prestigious Nobel Prizes in his 1895 will?',
    answer: 'Alfred Nobel',
    options: ['Alfred Nobel', 'Jöns Jacob Berzelius', 'Svante Arrhenius', 'Carl Wilhelm Scheele'],
    explanation: 'Nobel held 355 patents; dismayed by a premature newspaper obituary calling him "the merchant of death," he bequeathed 94% of his fortune to fund annual prizes.',
    tip: 'Alfred Nobel invented dynamite and founded the Nobel Prizes.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-43',
    categoryId: 'general',
    question: 'Who is the only person in history to win Nobel Prizes in two different scientific fields (Physics in 1903 and Chemistry in 1911)?',
    answer: 'Marie Curie',
    options: ['Marie Curie', 'Linus Pauling', 'John Bardeen', 'Albert Einstein'],
    explanation: 'Curie won in Physics for research on radiation and in Chemistry for the discovery of polonium and radium. (Linus Pauling won Chemistry and Peace).',
    tip: 'Marie Curie: Nobel in Physics (1903) and Chemistry (1911).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-44',
    categoryId: 'general',
    question: 'Who is the only person to win two unshared Nobel Prizes?',
    answer: 'Linus Pauling',
    options: ['Linus Pauling', 'Marie Curie', 'John Bardeen', 'Frederick Sanger'],
    explanation: 'Won the 1954 Nobel Prize in Chemistry (chemical bond nature) and the 1962 Nobel Peace Prize (campaign against atmospheric nuclear testing), both unshared.',
    tip: 'Linus Pauling: Only person with two UNSHARED Nobel Prizes (Chemistry & Peace).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-45',
    categoryId: 'general',
    question: 'Who is the only physicist to win the Nobel Prize in Physics twice (1956 for the Transistor and 1972 for BCS Superconductivity)?',
    answer: 'John Bardeen',
    options: ['John Bardeen', 'Richard Feynman', 'Niels Bohr', 'Max Planck'],
    explanation: 'Co-invented the point-contact transistor at Bell Labs (1956) and developed the microscopic theory of superconductivity (1972).',
    tip: 'John Bardeen: Won two Nobel Prizes in Physics (Transistor & BCS Theory).',
    difficulty: 'advanced'
  },
  {
    id: 'gen-46',
    categoryId: 'general',
    question: 'What is the largest living mammal (and the largest animal known ever to have lived on Earth)?',
    answer: 'Blue Whale (Balaenoptera musculus)',
    options: ['Blue Whale (Balaenoptera musculus)', 'Fin Whale', 'African Bush Elephant', 'Argentinosaurus'],
    explanation: 'Can reach lengths of up to 30 meters (98 feet) and weigh up to 190 metric tons (its tongue alone can weigh as much as an elephant).',
    tip: 'Blue Whale = Largest animal in Earth\'s history.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-47',
    categoryId: 'general',
    question: 'What is the largest living terrestrial (land) animal on Earth?',
    answer: 'African Bush Elephant (Loxodonta africana)',
    options: ['African Bush Elephant (Loxodonta africana)', 'Asian Elephant', 'White Rhinoceros', 'Giraffe'],
    explanation: 'Adult bulls can reach shoulder heights of 4 meters (13 feet) and weigh up to 6,000–7,000 kg (13,000–15,000 lbs).',
    tip: 'African Bush Elephant = Largest land animal.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-48',
    categoryId: 'general',
    question: 'What is the fastest animal on Earth, capable of diving speeds exceeding 320 km/h (200 mph)?',
    answer: 'Peregrine Falcon',
    options: ['Peregrine Falcon', 'Cheetah', 'Golden Eagle', 'Sailfish'],
    explanation: 'In its hunting stoop (high-speed dive), the peregrine falcon has been measured reaching speeds up to 389 km/h (242 mph). Cheetah is the fastest land animal (~120 km/h).',
    tip: 'Peregrine Falcon = Fastest animal (>320 km/h dive). Cheetah = Fastest on land.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-49',
    categoryId: 'general',
    question: 'What is the fastest marine animal in the ocean, capable of swimming bursts up to 110 km/h (68 mph)?',
    answer: 'Sailfish (Istiophorus)',
    options: ['Sailfish (Istiophorus)', 'Shortfin Mako Shark', 'Bluefin Tuna', 'Orca (Killer Whale)'],
    explanation: 'Its streamlined bill and aerodynamic dorsal sail allow it to slice through water at highway driving speeds.',
    tip: 'Sailfish = Fastest swimmer in the ocean (~110 km/h).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-50',
    categoryId: 'general',
    question: 'What is the largest living organism on Earth by physical area coverage?',
    answer: 'Armillaria ostoyae (Honey Mushroom Fungus in Oregon)',
    options: ['Armillaria ostoyae (Honey Mushroom Fungus in Oregon)', 'General Sherman Giant Sequoia Tree', 'Pando Quaking Aspen clonal colony', 'Great Barrier Reef Coral colony'],
    explanation: 'The "Humongous Fungus" in the Malheur National Forest spans 9.6 square kilometers (2,385 acres) and is estimated to be over 2,400 years old.',
    tip: 'Honey Mushroom fungus in Oregon spans 3.5 square miles.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-51',
    categoryId: 'general',
    question: 'What is the most massive single-stem living tree on Earth by trunk volume?',
    answer: 'General Sherman (Giant Sequoia in California)',
    options: ['General Sherman (Giant Sequoia in California)', 'Hyperion (Coast Redwood)', 'Pando Aspen', 'The Great Banyan of Kolkata'],
    explanation: 'Located in Sequoia National Park: stands 83.8 meters tall with an estimated trunk volume of 1,487 cubic meters (52,500 cu ft).',
    tip: 'General Sherman = Most massive tree. Hyperion = Tallest tree (115.9m).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-52',
    categoryId: 'general',
    question: 'What is the tallest living individual tree species on Earth?',
    answer: 'Coast Redwood (Sequoia sempervirens)',
    options: ['Coast Redwood (Sequoia sempervirens)', 'Giant Sequoia', 'Mountain Ash (Eucalyptus regnans)', 'Douglas Fir'],
    explanation: 'The individual tree named Hyperion in Redwood National Park stands 115.92 meters (380.3 feet) tall, taller than the Statue of Liberty.',
    tip: 'Coast Redwood (Hyperion) = Tallest tree on Earth.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-53',
    categoryId: 'general',
    question: 'Which planet in our solar system has the most moons confirmed by the International Astronomical Union (IAU)?',
    answer: 'Saturn (146 moons)',
    options: ['Saturn (146 moons)', 'Jupiter (95 moons)', 'Uranus (28 moons)', 'Neptune (16 moons)'],
    explanation: 'Saturn leads with 146 confirmed moons, followed by Jupiter with 95 confirmed moons.',
    tip: 'Saturn has the most moons (146+).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-54',
    categoryId: 'general',
    question: 'What is the largest moon in the Solar System, larger in diameter than the planet Mercury?',
    answer: 'Ganymede (Moon of Jupiter)',
    options: ['Ganymede (Moon of Jupiter)', 'Titan (Moon of Saturn)', 'Callisto (Moon of Jupiter)', 'Io (Moon of Jupiter)'],
    explanation: 'Ganymede has a diameter of 5,268 km (Mercury is 4,879 km) and possesses its own internally generated magnetic field.',
    tip: 'Ganymede (Jupiter\'s moon) = Largest moon in solar system.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-55',
    categoryId: 'general',
    question: 'Which moon in the solar system has a dense nitrogen-rich atmosphere and liquid methane/ethane lakes on its surface?',
    answer: 'Titan (Moon of Saturn)',
    options: ['Titan (Moon of Saturn)', 'Europa (Moon of Jupiter)', 'Triton (Moon of Neptune)', 'Enceladus (Moon of Saturn)'],
    explanation: 'Explored by the Cassini-Huygens probe in 2005; the only celestial body besides Earth known to have stable liquid lakes on its surface.',
    tip: 'Titan = Dense atmosphere + liquid hydrocarbon lakes.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-56',
    categoryId: 'general',
    question: 'What is the hottest planet in our solar system, with a runaway greenhouse effect keeping surface temperatures around 465°C (869°F)?',
    answer: 'Venus',
    options: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
    explanation: 'Although Mercury is closer to the Sun, Venus has a dense atmosphere (96.5% CO2, 92 atm pressure) that traps extreme heat.',
    tip: 'Venus is hotter than Mercury due to runaway CO2 greenhouse effect.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-57',
    categoryId: 'general',
    question: 'What is the largest volcano and highest planetary mountain in the Solar System, located on Mars?',
    answer: 'Olympus Mons',
    options: ['Olympus Mons', 'Ascraeus Mons', 'Maat Mons', 'Caloris Montes'],
    explanation: 'A shield volcano standing approximately 21.9 kilometers (~13.6 miles or 72,000 feet) high, nearly two and a half times the height of Mount Everest.',
    tip: 'Olympus Mons on Mars = Largest volcano in solar system (22 km high).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-58',
    categoryId: 'general',
    question: 'What is the "Great Red Spot" on Jupiter?',
    answer: 'A colossal anticyclonic storm larger than Earth that has persisted for at least 350 years',
    options: ['A colossal anticyclonic storm larger than Earth that has persisted for at least 350 years', 'An active supervolcano crater venting iron oxide dust', 'A shadow cast by the Galilean moon Ganymede', 'An impact basin caused by a massive prehistoric comet collision'],
    explanation: 'Winds at the edge of the storm exceed 430 km/h (270 mph); observed continuously through telescopes since at least 1830.',
    tip: 'Jupiter\'s Great Red Spot = Giant anticyclonic storm larger than Earth.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-59',
    categoryId: 'general',
    question: 'What is the "Kuiper Belt"?',
    answer: 'A circumstellar disc in the outer Solar System extending beyond Neptune\'s orbit containing icy bodies and dwarf planets (including Pluto)',
    options: ['A circumstellar disc in the outer Solar System extending beyond Neptune\'s orbit containing icy bodies and dwarf planets (including Pluto)', 'The asteroid ring situated between the orbits of Mars and Jupiter', 'A cloud of comets at the theoretical edge of the Sun\'s gravitational sphere', 'The ring of charged plasma particles trapped in Earth\'s magnetosphere'],
    explanation: 'Extends from 30 to ~50 Astronomical Units (AU) from the Sun, home to Pluto, Eris, Haumea, and Makemake.',
    tip: 'Kuiper Belt = Ring of icy bodies past Neptune (Pluto\'s home).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-60',
    categoryId: 'general',
    question: 'What is the "Oort Cloud"?',
    answer: 'A theoretical spherical cloud of icy planetesimals surrounding the Solar System up to 100,000 AU from the Sun, the source of long-period comets',
    options: ['A theoretical spherical cloud of icy planetesimals surrounding the Solar System up to 100,000 AU from the Sun, the source of long-period comets', 'The dust ring surrounding the asteroid belt inside Mars\' orbit', 'A nebula currently forming new stars in the Orion constellation', 'The debris cloud generated by the impact that formed the Moon'],
    explanation: 'Named after Dutch astronomer Jan Oort: marks the outer gravitational boundary of our solar system, extending nearly a light-year out.',
    tip: 'Oort Cloud = Distant spherical boundary of solar system (long-period comets).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-61',
    categoryId: 'general',
    question: 'What is the closest star system to our Solar System, located approximately 4.24 light-years away?',
    answer: 'Alpha Centauri system (specifically Proxima Centauri)',
    options: ['Alpha Centauri system (specifically Proxima Centauri)', 'Sirius (Dog Star)', 'Barnard\'s Star', 'Betelgeuse'],
    explanation: 'A triple star system: Alpha Centauri A, B, and the red dwarf Proxima Centauri, which hosts an Earth-mass exoplanet in its habitable zone.',
    tip: 'Proxima Centauri = Closest star to Earth after the Sun (4.24 light-years).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-62',
    categoryId: 'general',
    question: 'What is the brightest star in Earth\'s night sky as seen from any hemisphere?',
    answer: 'Sirius (Alpha Canis Majoris / Dog Star)',
    options: ['Sirius (Alpha Canis Majoris / Dog Star)', 'Canopus', 'Vega', 'Polaris (North Star)'],
    explanation: 'Located 8.6 light-years away in the constellation Canis Major with an apparent visual magnitude of -1.46 (twice as bright as Canopus).',
    tip: 'Sirius is the brightest star in the night sky.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-63',
    categoryId: 'general',
    question: 'What is the name of our home galaxy, and what type of galaxy is it?',
    answer: 'Milky Way (Barred Spiral Galaxy)',
    options: ['Milky Way (Barred Spiral Galaxy)', 'Andromeda (Elliptical Galaxy)', 'Triangulum (Irregular Galaxy)', 'Centaurus A (Lenticular Galaxy)'],
    explanation: 'The Milky Way contains 100–400 billion stars, spanning roughly 100,000 light-years in diameter with a central supermassive black hole (Sagittarius A*).',
    tip: 'Milky Way is a Barred Spiral galaxy with ~200 billion stars.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-64',
    categoryId: 'general',
    question: 'What is the nearest major spiral galaxy to the Milky Way, scheduled to collide with it in approximately 4.5 billion years?',
    answer: 'Andromeda Galaxy (M31)',
    options: ['Andromeda Galaxy (M31)', 'Large Magellanic Cloud', 'Triangulum Galaxy (M33)', 'Whirlpool Galaxy (M51)'],
    explanation: 'Located ~2.5 million light-years away; approaching the Milky Way at ~110 km/s, their merger will eventually create an giant elliptical galaxy ("Milkomeda").',
    tip: 'Andromeda (M31) = Nearest major spiral galaxy (~2.5 million light-years).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-65',
    categoryId: 'general',
    question: 'What is the largest living species of reptile in the world?',
    answer: 'Saltwater Crocodile (Crocodylus porosus)',
    options: ['Saltwater Crocodile (Crocodylus porosus)', 'Komodo Dragon', 'Nile Crocodile', 'Leatherback Sea Turtle'],
    explanation: 'Native to saltwater habitats from eastern India through Southeast Asia to northern Australia; males can reach 6 to 7 meters (20–23 ft) and over 1,000 kg.',
    tip: 'Saltwater Crocodile = Largest living reptile.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-66',
    categoryId: 'general',
    question: 'What is the largest living lizard species in the world?',
    answer: 'Komodo Dragon (Varanus komodoensis)',
    options: ['Komodo Dragon (Varanus komodoensis)', 'Asian Water Monitor', 'Gila Monster', 'Perentie'],
    explanation: 'Endemic to Indonesian islands (Komodo, Rinca, Flores); can grow up to 3 meters (10 feet) and weigh over 70 kg, hunting with venomous saliva.',
    tip: 'Komodo Dragon = Largest living lizard.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-67',
    categoryId: 'general',
    question: 'What is the largest species of shark (and largest fish) living in the oceans today?',
    answer: 'Whale Shark (Rhincodon typus)',
    options: ['Whale Shark (Rhincodon typus)', 'Great White Shark', 'Basking Shark', 'Tiger Shark'],
    explanation: 'A filter feeder that consumes plankton and small fish; confirmed individuals have reached lengths of 18.8 meters (61.7 feet).',
    tip: 'Whale Shark = Largest living shark and fish (harmless filter feeder).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-68',
    categoryId: 'general',
    question: 'Which country invented paper, the magnetic compass, gunpowder, and movable type printing (Four Great Inventions)?',
    answer: 'Ancient China',
    options: ['Ancient China', 'Ancient Egypt', 'Mesopotamia (Sumer)', 'Ancient Greece'],
    explanation: 'Celebrated in Chinese culture as the "Four Great Inventions" that fundamentally transformed world civilization, navigation, and warfare.',
    tip: 'China invented: Paper, Compass, Gunpowder, Printing.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-69',
    categoryId: 'general',
    question: 'In which city is the world\'s tallest architectural structure and skyscraper, the Burj Khalifa (828 meters / 2,717 ft), located?',
    answer: 'Dubai (United Arab Emirates)',
    options: ['Dubai (United Arab Emirates)', 'Doha (Qatar)', 'Riyadh (Saudi Arabia)', 'Shanghai (China)'],
    explanation: 'Opened in January 2010; designed by Adrian Smith of Skidmore, Owings & Merrill (SOM) with 163 habitable floors.',
    tip: 'Burj Khalifa (828m) is in Dubai, UAE.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-70',
    categoryId: 'general',
    question: 'What is the largest museum in the world by gallery space and the most visited art museum, located in Paris, France?',
    answer: 'The Louvre Museum (Musée du Louvre)',
    options: ['The Louvre Museum (Musée du Louvre)', 'The British Museum', 'The Metropolitan Museum of Art', 'The Hermitage Museum'],
    explanation: 'A former royal palace spanning 72,735 square meters, home to Leonardo da Vinci\'s Mona Lisa and the Venus de Milo.',
    tip: 'The Louvre in Paris = Largest and most visited art museum.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-71',
    categoryId: 'general',
    question: 'Who painted the ceiling of the Sistine Chapel in Rome between 1508 and 1512?',
    answer: 'Michelangelo Buonarroti',
    options: ['Michelangelo Buonarroti', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
    explanation: 'Commissioned by Pope Julius II, featuring iconic high Renaissance frescoes including "The Creation of Adam" and "The Fall of Man".',
    tip: 'Michelangelo painted the Sistine Chapel ceiling.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-72',
    categoryId: 'general',
    question: 'Who painted the famous post-impressionist masterpiece "The Starry Night" in June 1889?',
    answer: 'Vincent van Gogh',
    options: ['Vincent van Gogh', 'Claude Monet', 'Paul Cézanne', 'Pablo Picasso'],
    explanation: 'Painted from the window of his asylum room at Saint-Rémy-de-Provence shortly after mutilating his ear.',
    tip: 'Vincent van Gogh painted The Starry Night (1889).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-73',
    categoryId: 'general',
    question: 'Which Spanish artist co-founded the Cubist movement alongside Georges Braque and painted the monumental anti-war canvas "Guernica"?',
    answer: 'Pablo Picasso',
    options: ['Pablo Picasso', 'Salvador Dalí', 'Francisco Goya', 'Diego Velázquez'],
    explanation: 'Guernica (1937) was created in response to the Nazi German Luftwaffe bombing of the Basque town of Guernica during the Spanish Civil War.',
    tip: 'Pablo Picasso co-founded Cubism and painted Guernica.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-74',
    categoryId: 'general',
    question: 'Which surrealist Spanish artist painted "The Persistence of Memory" (1931), famous for its melting pocket watches in a desolate landscape?',
    answer: 'Salvador Dalí',
    options: ['Salvador Dalí', 'René Magritte', 'Joan Miró', 'Max Ernst'],
    explanation: 'Dalí claimed the melting clocks were inspired by surrealist perception of Camembert cheese melting in the sun.',
    tip: 'Salvador Dalí painted the melting clocks in "The Persistence of Memory".',
    difficulty: 'beginner'
  },
  {
    id: 'gen-75',
    categoryId: 'general',
    question: 'Who was the ancient Greek polymath who exclaimed "Eureka!" upon discovering how to calculate buoyancy and volume while taking a bath?',
    answer: 'Archimedes of Syracuse',
    options: ['Archimedes of Syracuse', 'Pythagoras of Samos', 'Euclid of Alexandria', 'Aristotle of Stagira'],
    explanation: 'King Hiero II commissioned him to determine if a golden crown had been diluted with silver without damaging it.',
    tip: 'Archimedes shouted Eureka discovering water displacement.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-76',
    categoryId: 'general',
    question: 'Which ancient Greek philosopher was sentenced to death in 399 BC for "corrupting the youth" and impiety, executing himself with hemlock poison?',
    answer: 'Socrates',
    options: ['Socrates', 'Plato', 'Aristotle', 'Epicurus'],
    explanation: 'Teacher of Plato and founder of Western moral philosophy and the Socratic method of dialogue and inquiry.',
    tip: 'Socrates drank hemlock after being condemned in Athens.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-77',
    categoryId: 'general',
    question: 'Which ancient Greek philosopher founded the Academy in Athens and wrote philosophical dialogues including "The Republic"?',
    answer: 'Plato',
    options: ['Plato', 'Socrates', 'Aristotle', 'Zeno of Citium'],
    explanation: 'Student of Socrates and teacher of Aristotle; famous for his Theory of Forms and the Allegory of the Cave.',
    tip: 'Plato founded the Academy and wrote The Republic.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-78',
    categoryId: 'general',
    question: 'Which ancient Greek philosopher founded the Lyceum in Athens and served as the personal tutor to Alexander the Great?',
    answer: 'Aristotle',
    options: ['Aristotle', 'Plato', 'Socrates', 'Heraclitus'],
    explanation: 'Wrote extensively on physics, biology, zoology, metaphysics, ethics, poetry, theater, logic, and politics.',
    tip: 'Aristotle tutored Alexander the Great and founded the Lyceum.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-79',
    categoryId: 'general',
    question: 'What is the most spoken language in the world by total number of speakers (native plus second language)?',
    answer: 'English (approximately 1.5 billion speakers)',
    options: ['English (approximately 1.5 billion speakers)', 'Mandarin Chinese', 'Hindi', 'Spanish'],
    explanation: 'English leads in total global speakers (~1.5 billion). Mandarin Chinese has the largest number of native first-language speakers (~930 million).',
    tip: 'English = Most total speakers. Mandarin = Most native first-language speakers.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-80',
    categoryId: 'general',
    question: 'What is the most widely spoken language in the world by native (first-language) speakers?',
    answer: 'Mandarin Chinese',
    options: ['Mandarin Chinese', 'Spanish', 'English', 'Hindi'],
    explanation: 'With over 930 million native speakers, Mandarin Chinese has nearly double the native speakers of Spanish (~485M) or English (~380M).',
    tip: 'Mandarin Chinese has the most native first-language speakers.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-81',
    categoryId: 'general',
    question: 'How many sovereign member states are currently represented in the United Nations General Assembly?',
    answer: '193',
    options: ['193', '195', '189', '206'],
    explanation: 'There are 193 UN member states plus 2 permanent non-member observer states: the Holy See (Vatican City) and the State of Palestine.',
    tip: '193 UN member states (+ 2 permanent observer states).',
    difficulty: 'beginner'
  },
  {
    id: 'gen-82',
    categoryId: 'general',
    question: 'Which country has the most official languages in the world according to Guinness World Records (16 official languages)?',
    answer: 'Zimbabwe',
    options: ['Zimbabwe', 'South Africa', 'India', 'Switzerland'],
    explanation: 'Zimbabwe\'s 2013 constitution recognizes 16 official languages including Chewa, Chibarwe, English, Kalanga, Ndebele, Shona, and sign language.',
    tip: 'Zimbabwe has 16 constitutionally recognized official languages.',
    difficulty: 'advanced'
  },
  {
    id: 'gen-83',
    categoryId: 'general',
    question: 'Which country has the highest population density in the world among sovereign nations?',
    answer: 'Monaco',
    options: ['Monaco', 'Singapore', 'Vatican City', 'Maldives'],
    explanation: 'With an area of only ~2.08 square kilometers and ~39,000 residents, Monaco has a density of over 19,000 people per square kilometer.',
    tip: 'Monaco = Highest population density in the world.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-84',
    categoryId: 'general',
    question: 'Which sovereign nation has the lowest population density in the world (approximately 2 people per square kilometer)?',
    answer: 'Mongolia',
    options: ['Mongolia', 'Namibia', 'Australia', 'Iceland'],
    explanation: 'With ~3.4 million residents across 1.56 million square kilometers of steppe and desert, Mongolia is the most sparsely populated sovereign country.',
    tip: 'Mongolia = Most sparsely populated country (~2 people/km²).',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-85',
    categoryId: 'general',
    question: 'Which country is completely landlocked by a single other country (an enclave country)?',
    answer: 'Lesotho (enclaved within South Africa)',
    options: ['Lesotho (enclaved within South Africa)', 'Swaziland (Eswatini)', 'Luxembourg', 'Andorra'],
    explanation: 'Only three nations are completely enclaved within a single country: Lesotho (surrounded by South Africa), San Marino, and Vatican City (both surrounded by Italy).',
    tip: 'Lesotho, San Marino, and Vatican City are completely surrounded by one country.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-86',
    categoryId: 'general',
    question: 'What are the only two "Doubly Landlocked" countries in the world (surrounded entirely by other landlocked countries)?',
    answer: 'Liechtenstein and Uzbekistan',
    options: ['Liechtenstein and Uzbekistan', 'Switzerland and Bolivia', 'Austria and Mongolia', 'Paraguay and Nepal'],
    explanation: 'To reach an ocean coastline from Liechtenstein or Uzbekistan, one must cross at least two international national borders.',
    tip: 'Only 2 doubly landlocked countries: Liechtenstein & Uzbekistan.',
    difficulty: 'advanced'
  },
  {
    id: 'gen-87',
    categoryId: 'general',
    question: 'What is the currency of the United Kingdom?',
    answer: 'Pound Sterling (GBP, £)',
    options: ['Pound Sterling (GBP, £)', 'Euro (€)', 'British Crown', 'Shilling'],
    explanation: 'The British Pound Sterling is the world\'s oldest currency still in continuous circulation, dating back over 1,200 years to Anglo-Saxon times.',
    tip: 'Pound Sterling (£) is the oldest currency still in use.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-88',
    categoryId: 'general',
    question: 'What is the oldest national flag in continuous use in the world, dating back to at least 1219?',
    answer: 'The Dannebrog (Flag of Denmark)',
    options: ['The Dannebrog (Flag of Denmark)', 'The Union Jack (United Kingdom)', 'The Stars and Stripes (United States)', 'The Tricolore (France)'],
    explanation: 'Legend records it falling from the heavens during the Battle of Lyndanisse on June 15, 1219, confirmed by Guinness World Records as the oldest continuous national flag.',
    tip: 'Dannebrog (Denmark) = Oldest continuously used national flag.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-89',
    categoryId: 'general',
    question: 'Which is the only sovereign national flag in the world that is not a quadrilateral (four-sided rectangle or square)?',
    answer: 'Nepal',
    options: ['Nepal', 'Switzerland', 'Vatican City', 'Bhutan'],
    explanation: 'Nepal\'s unique flag consists of two stacked pennants (triangles) featuring the sun and crescent moon, representing the Himalayas and eternity.',
    tip: 'Nepal has the only non-quadrilateral national flag.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-90',
    categoryId: 'general',
    question: 'Which two sovereign national flags are exact squares (1:1 aspect ratio)?',
    answer: 'Switzerland and Vatican City',
    options: ['Switzerland and Vatican City', 'Monaco and Indonesia', 'Belgium and Chad', 'Ireland and Côte d\'Ivoire'],
    explanation: 'All other sovereign flags are rectangular; only the Swiss white cross on red and the Vatican gold and silver tiara flags are perfect squares.',
    tip: 'Square flags: Switzerland and Vatican City.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-91',
    categoryId: 'general',
    question: 'What is the largest coral reef system in the world, stretching over 2,300 kilometers (1,400 miles) off the coast of Queensland, Australia?',
    answer: 'The Great Barrier Reef',
    options: ['The Great Barrier Reef', 'Mesoamerican Barrier Reef', 'New Caledonia Barrier Reef', 'Red Sea Coral Reef'],
    explanation: 'Composed of over 2,900 individual reefs and 900 islands; the largest single structure made by living organisms, visible from space.',
    tip: 'Great Barrier Reef (Australia) = Largest living structure on Earth.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-92',
    categoryId: 'general',
    question: 'What is the name of the world\'s largest tropical rainforest, often called the "lungs of the planet"?',
    answer: 'The Amazon Rainforest',
    options: ['The Amazon Rainforest', 'The Congo Basin Rainforest', 'Daintree Rainforest', 'Sundaland Rainforest'],
    explanation: 'Covers over 5.5 million square kilometers across nine South American nations (60% in Brazil), producing immense oxygen and harboring 10% of known species.',
    tip: 'Amazon = Largest tropical rainforest on Earth.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-93',
    categoryId: 'general',
    question: 'What is the coldest temperature ever officially recorded on Earth\'s surface in history?',
    answer: '-89.2°C (-128.6°F) at Vostok Station, Antarctica (July 21, 1983)',
    options: ['-89.2°C (-128.6°F) at Vostok Station, Antarctica (July 21, 1983)', '-67.8°C (-90.0°F) in Oymyakon, Siberia', '-55.0°C (-67.0°F) at the North Pole', '-105.4°C (-157.7°F) on Mount Everest summit'],
    explanation: 'Recorded at the Soviet Vostok research station in inland Antarctica near the Southern Pole of Cold.',
    tip: 'Coldest ground temperature: -89.2°C at Vostok Station, Antarctica.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-94',
    categoryId: 'general',
    question: 'What is the highest temperature ever reliably recorded on Earth\'s surface according to the World Meteorological Organization (WMO)?',
    answer: '56.7°C (134.1°F) at Furnace Creek in Death Valley, California (July 10, 1913)',
    options: ['56.7°C (134.1°F) at Furnace Creek in Death Valley, California (July 10, 1913)', '54.0°C (129.2°F) in Kuwait City', '58.0°C (136.4°F) in El Azizia, Libya', '51.5°C (124.7°F) in Alice Springs, Australia'],
    explanation: 'Following the 2012 invalidation of an unverified 1922 Libyan claim, Death Valley holds the official WMO global heat record.',
    tip: 'Highest temperature record: 56.7°C in Death Valley, California.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-95',
    categoryId: 'general',
    question: 'How long does it take for sunlight traveling at the speed of light to reach the Earth from the Sun?',
    answer: 'Approximately 8 minutes and 20 seconds (500 seconds)',
    options: ['Approximately 8 minutes and 20 seconds (500 seconds)', 'Approximately 1 second', 'Approximately 1 hour and 15 minutes', 'Instantaneously (0 seconds)'],
    explanation: 'The average distance between Earth and Sun (1 Astronomical Unit) is ~149.6 million kilometers; divided by c (300,000 km/s) yields ~499 seconds.',
    tip: 'Sunlight reaches Earth in about 8 minutes and 20 seconds.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-96',
    categoryId: 'general',
    question: 'What is the approximate age of the Earth according to radiometric dating of meteorite material and ancient zircon crystals?',
    answer: 'Approximately 4.54 billion years old (± 50 million years)',
    options: ['Approximately 4.54 billion years old (± 50 million years)', 'Approximately 13.8 billion years old', 'Approximately 65 million years old', 'Approximately 2.5 billion years old'],
    explanation: 'Confirmed by lead-lead isotope dating on the Canyon Diablo meteorite (by Clair Patterson in 1953) and lunar Apollo rock samples.',
    tip: 'Earth\'s age = ~4.54 billion years. Universe\'s age = ~13.8 billion years.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-97',
    categoryId: 'general',
    question: 'What is the largest planet in our solar system by diameter and mass?',
    answer: 'Jupiter',
    options: ['Jupiter', 'Saturn', 'Neptune', 'Uranus'],
    explanation: 'Jupiter has more than twice the mass of all other planets in the Solar System combined (318 Earth masses).',
    tip: 'Jupiter = Largest planet in our solar system.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-98',
    categoryId: 'general',
    question: 'What is the smallest planet in our solar system (since Pluto was reclassified as a dwarf planet in 2006)?',
    answer: 'Mercury',
    options: ['Mercury', 'Mars', 'Venus', 'Pluto'],
    explanation: 'Mercury is only slightly larger than Earth\'s Moon, with an equatorial diameter of 4,879 kilometers.',
    tip: 'Mercury is the smallest planet in our solar system.',
    difficulty: 'beginner'
  },
  {
    id: 'gen-99',
    categoryId: 'general',
    question: 'Which chemical element is named after the Titan of Greek mythology who stole fire from Mount Olympus to give to humanity?',
    answer: 'Promethium (Pm, atomic number 61)',
    options: ['Promethium (Pm, atomic number 61)', 'Titanium (Ti, atomic number 22)', 'Tantalum (Ta, atomic number 73)', 'Uranium (U, atomic number 92)'],
    explanation: 'Promethium was synthesized in 1945 at Oak Ridge National Laboratory; named to symbolize the dawning of the nuclear age.',
    tip: 'Promethium (element 61) is named after Prometheus.',
    difficulty: 'intermediate'
  },
  {
    id: 'gen-100',
    categoryId: 'general',
    question: 'Which instrument is used by meteorologists to measure atmospheric air pressure?',
    answer: 'Barometer',
    options: ['Barometer', 'Anemometer', 'Hygrometer', 'Seismometer'],
    explanation: 'Invented by Evangelista Torricelli in 1643: falling barometric pressure typically indicates an approaching storm or low-pressure weather system.',
    tip: 'Barometer measures air pressure. Anemometer = wind speed. Hygrometer = humidity.',
    difficulty: 'beginner'
  }
];
