import { Flashcard } from '../../types';

export const SCIENCE_QUESTIONS: Flashcard[] = [
  {
    "id": "sci-1",
    "categoryId": "science",
    "question": "What organelle is known as the \"powerhouse of the cell\" responsible for generating ATP through cellular respiration?",
    "answer": "Mitochondrion",
    "options": [
      "Mitochondrion",
      "Ribosome",
      "Endoplasmic Reticulum",
      "Golgi Apparatus"
    ],
    "explanation": "Mitochondria generate most of the cell's chemical energy in the form of adenosine triphosphate (ATP) via oxidative phosphorylation and the Krebs cycle.",
    "tip": "ATP synthesis occurs across the inner mitochondrial cristae.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-2",
    "categoryId": "science",
    "question": "What is the First Law of Thermodynamics?",
    "answer": "Energy cannot be created or destroyed, only transformed from one form to another",
    "options": [
      "Energy cannot be created or destroyed, only transformed from one form to another",
      "The entropy of an isolated system always increases over time",
      "Absolute zero is unattainable in a finite number of steps",
      "Force equals mass times acceleration in an inertial frame"
    ],
    "explanation": "Also known as the Law of Conservation of Energy: ΔU = Q - W (change in internal energy equals heat added minus work done).",
    "tip": "Conservation of energy: Total energy of closed system remains constant.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-3",
    "categoryId": "science",
    "question": "Which chemical bond involves the equal or unequal sharing of electron pairs between atoms?",
    "answer": "Covalent Bond",
    "options": [
      "Covalent Bond",
      "Ionic Bond",
      "Hydrogen Bond",
      "Metallic Bond"
    ],
    "explanation": "Covalent bonds form when nonmetal atoms share valence electrons to achieve stable noble-gas electron configurations (polar vs nonpolar).",
    "tip": "Co-valent = Sharing valence electrons.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-4",
    "categoryId": "science",
    "question": "What is the speed of light in a vacuum (c) to three significant figures?",
    "answer": "3.00 × 10^8 m/s",
    "options": [
      "3.00 × 10^8 m/s",
      "3.00 × 10^6 m/s",
      "1.50 × 10^8 m/s",
      "9.81 × 10^7 m/s"
    ],
    "explanation": "The exact speed of light in vacuum is defined as 299,792,458 m/s, approximately 3.00 × 10^8 m/s (or ~300,000 km/s).",
    "tip": "~300,000 km per second.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-5",
    "categoryId": "science",
    "question": "In DNA, which nitrogenous base pairs with Adenine through two hydrogen bonds?",
    "answer": "Thymine",
    "options": [
      "Thymine",
      "Guanine",
      "Cytosine",
      "Uracil"
    ],
    "explanation": "According to Chargaff's base-pairing rules, Adenine (A) pairs with Thymine (T) via 2 hydrogen bonds, while Guanine (G) pairs with Cytosine (C) via 3 hydrogen bonds. (In RNA, Uracil replaces Thymine).",
    "tip": "A pairs with T (2 bonds); G pairs with C (3 bonds).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-6",
    "categoryId": "science",
    "question": "What happens to the wavelength of light emitted by a star moving away from Earth?",
    "answer": "It shifts toward longer wavelengths (Redshift)",
    "options": [
      "It shifts toward longer wavelengths (Redshift)",
      "It shifts toward shorter wavelengths (Blueshift)",
      "Its wavelength compresses to zero",
      "Its speed slows down below c"
    ],
    "explanation": "The Doppler effect causes electromagnetic waves from receding objects to stretch into longer, redder wavelengths, which Edwin Hubble used to demonstrate cosmic expansion.",
    "tip": "Moving away = Stretched wave = Redshift. Moving closer = Blueshift.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-7",
    "categoryId": "science",
    "question": "What is the pH of a neutral aqueous solution at 25°C?",
    "answer": "7.0",
    "options": [
      "7.0",
      "0.0",
      "14.0",
      "1.0"
    ],
    "explanation": "pH = -log[H+]. Pure water at 25°C has [H+] = 10^-7 M, resulting in a neutral pH of 7. Values below 7 are acidic; above 7 are basic.",
    "tip": "pH 7 is neutral; <7 is acidic, >7 is alkaline.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-8",
    "categoryId": "science",
    "question": "Which subatomic particle has positive charge and is composed of two \"up\" quarks and one \"down\" quark?",
    "answer": "Proton",
    "options": [
      "Proton",
      "Neutron",
      "Electron",
      "Positron"
    ],
    "explanation": "Up quarks have charge +2/3 and down quarks have -1/3. A proton has (2/3 + 2/3 - 1/3) = +1 charge. Neutrons have two down and one up quark (net charge 0).",
    "tip": "Proton = uud (+1 charge). Neutron = udd (0 charge).",
    "difficulty": "advanced"
  },
  {
    "id": "sci-9",
    "categoryId": "science",
    "question": "What is the Second Law of Thermodynamics?",
    "answer": "The total entropy of an isolated system always increases over time in any spontaneous process",
    "options": [
      "The total entropy of an isolated system always increases over time in any spontaneous process",
      "Energy can be created from pure gravitational fields",
      "Matter cannot be converted into energy under any circumstances",
      "Absolute zero can be achieved using laser refrigeration"
    ],
    "explanation": "Spontaneous physical and chemical processes increase the disorder (entropy, S) of the universe: ΔS_universe > 0.",
    "tip": "Second Law: Entropy (disorder) of an isolated system always increases.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-10",
    "categoryId": "science",
    "question": "What is the Third Law of Thermodynamics?",
    "answer": "The entropy of a perfect pure crystalline substance at absolute zero temperature (0 Kelvin) is zero",
    "options": [
      "The entropy of a perfect pure crystalline substance at absolute zero temperature (0 Kelvin) is zero",
      "The speed of light is infinite at zero degrees Celsius",
      "All chemical reactions stop when volume becomes infinite",
      "Pressure and temperature are inversely related in ideal gases"
    ],
    "explanation": "As temperature approaches absolute zero (0 K or -273.15°C), all thermal motion ceases and the system reaches its minimum possible energy state.",
    "tip": "Third Law: Entropy = 0 for a perfect crystal at 0 Kelvin.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-11",
    "categoryId": "science",
    "question": "What is Newton's Second Law of Motion?",
    "answer": "Force equals mass times acceleration (F = m*a) or rate of change of momentum (F = dp/dt)",
    "options": [
      "Force equals mass times acceleration (F = m*a) or rate of change of momentum (F = dp/dt)",
      "For every action, there is an equal and opposite reaction",
      "An object in motion remains in motion unless acted upon by a net external force",
      "Gravitational attraction is proportional to the cube of distance"
    ],
    "explanation": "Net force applied to a body produces acceleration directly proportional to force and inversely proportional to body mass.",
    "tip": "F = ma (Force = Mass × Acceleration).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-12",
    "categoryId": "science",
    "question": "What is Newton's Third Law of Motion?",
    "answer": "For every action, there is an equal and opposite reaction",
    "options": [
      "For every action, there is an equal and opposite reaction",
      "Force equals mass multiplied by velocity",
      "Energy is conserved in all inelastic collisions",
      "Planetary orbits are ellipses with the Sun at one focus"
    ],
    "explanation": "When object A exerts a force on object B, object B simultaneously exerts an equal and oppositely directed force on object A.",
    "tip": "Action = Reaction (Equal magnitude, opposite direction).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-13",
    "categoryId": "science",
    "question": "What is Newton's First Law of Motion (Law of Inertia)?",
    "answer": "An object remains at rest or continues at constant velocity in a straight line unless acted on by a net external force",
    "options": [
      "An object remains at rest or continues at constant velocity in a straight line unless acted on by a net external force",
      "Acceleration increases as mass increases under constant force",
      "The center of mass of an isolated system always accelerates",
      "Gravitational potential energy equals mass times velocity"
    ],
    "explanation": "Inertia is the natural resistance of any physical object to any change in its velocity.",
    "tip": "Law of Inertia: Things keep doing what they are doing unless pushed.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-14",
    "categoryId": "science",
    "question": "What is Einstein's mass-energy equivalence equation?",
    "answer": "E = m * c²",
    "options": [
      "E = m * c²",
      "E = 0.5 * m * v²",
      "E = h * f / c",
      "E = m * g * h"
    ],
    "explanation": "States that mass and energy are interchangeable; a small amount of mass (m) can be converted into a tremendous quantity of energy (E) because c² is huge (~9 × 10^16 m²/s²).",
    "tip": "E = mc² (Energy = Mass × Speed of Light squared).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-15",
    "categoryId": "science",
    "question": "What is the Heisenberg Uncertainty Principle?",
    "answer": "It is fundamentally impossible to simultaneously measure both the position and momentum of a subatomic particle with arbitrary precision",
    "options": [
      "It is fundamentally impossible to simultaneously measure both the position and momentum of a subatomic particle with arbitrary precision",
      "Subatomic particles decay into photons every 10 seconds",
      "Electrons can jump to higher energy levels without absorbing energy",
      "Quantum computers can solve NP-complete problems in zero seconds"
    ],
    "explanation": "Δx * Δp ≥ ħ / 2. This is not a limitation of measuring instruments, but an intrinsic wave-particle property of quantum reality.",
    "tip": "Uncertainty Principle: Δx · Δp ≥ ħ/2 (Position and Momentum cannot both be exact).",
    "difficulty": "advanced"
  },
  {
    "id": "sci-16",
    "categoryId": "science",
    "question": "What is the Pauli Exclusion Principle in quantum mechanics?",
    "answer": "No two identical fermions (such as electrons) can occupy the same quantum state simultaneously in an atom",
    "options": [
      "No two identical fermions (such as electrons) can occupy the same quantum state simultaneously in an atom",
      "Photons cannot interact with magnetic fields in a vacuum",
      "Protons and neutrons must have identical masses in the nucleus",
      "Radioactive nuclei can only emit alpha particles in pairs"
    ],
    "explanation": "No two electrons in an atom can have the identical set of four quantum numbers (n, l, m_l, m_s), explaining the structure of the periodic table and matter's stability.",
    "tip": "Pauli Exclusion: Max 2 electrons per orbital with opposite spins.",
    "difficulty": "advanced"
  },
  {
    "id": "sci-17",
    "categoryId": "science",
    "question": "What is the primary photosynthetic pigment in green plants that absorbs blue and red light while reflecting green light?",
    "answer": "Chlorophyll a",
    "options": [
      "Chlorophyll a",
      "Carotenoid",
      "Anthocyanin",
      "Phycobilin"
    ],
    "explanation": "Located in chloroplast thylakoid membranes, chlorophyll a captures photons to drive the light reactions of photosynthesis.",
    "tip": "Chlorophyll absorbs red & blue light; reflects green light.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-18",
    "categoryId": "science",
    "question": "What are the overall chemical reactants and products of oxygenic Photosynthesis?",
    "answer": "6CO2 + 6H2O + Light Energy -> C6H12O6 + 6O2",
    "options": [
      "6CO2 + 6H2O + Light Energy -> C6H12O6 + 6O2",
      "C6H12O6 + 6O2 -> 6CO2 + 6H2O + ATP",
      "6CH4 + 6O2 -> 6CO2 + 12H2O",
      "2H2O -> 2H2 + O2 + Light"
    ],
    "explanation": "Plants use carbon dioxide and water driven by solar photons to synthesize glucose sugar and release molecular oxygen gas.",
    "tip": "Photosynthesis: Carbon Dioxide + Water + Light -> Glucose + Oxygen.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-19",
    "categoryId": "science",
    "question": "Where do the light-independent reactions (Calvin Cycle) of photosynthesis occur inside plant cells?",
    "answer": "In the Stroma of the chloroplast",
    "options": [
      "In the Stroma of the chloroplast",
      "Across the Thylakoid membrane",
      "Inside the cell Nucleolus",
      "In the Matrix of the mitochondrion"
    ],
    "explanation": "The Calvin cycle fixes CO2 into carbohydrates using ATP and NADPH generated by light reactions in the chloroplast stroma.",
    "tip": "Light reactions = Thylakoids; Calvin Cycle = Stroma.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-20",
    "categoryId": "science",
    "question": "What enzyme catalyzes the primary step of carbon fixation in the Calvin Cycle?",
    "answer": "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)",
    "options": [
      "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)",
      "ATP Synthase",
      "DNA Polymerase III",
      "Amylase"
    ],
    "explanation": "RuBisCO is the most abundant enzyme on Earth, fixing CO2 onto ribulose-1,5-bisphosphate (RuBP).",
    "tip": "RuBisCO = Most abundant enzyme on Earth (fixes CO2).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-21",
    "categoryId": "science",
    "question": "What is the primary difference between Mitosis and Meiosis?",
    "answer": "Mitosis produces two genetically identical diploid somatic cells; meiosis produces four genetically diverse haploid gametes",
    "options": [
      "Mitosis produces two genetically identical diploid somatic cells; meiosis produces four genetically diverse haploid gametes",
      "Mitosis occurs only in bacterial prokaryotes; meiosis occurs in viruses",
      "Mitosis halves chromosome count; meiosis doubles chromosome count",
      "Mitosis produces reproductive sperm; meiosis repairs damaged skin cells"
    ],
    "explanation": "Mitosis is for growth, tissue repair, and asexual reproduction. Meiosis involves two divisions with crossing over to generate haploid sex cells.",
    "tip": "Mitosis = 2 identical daughter cells. Meiosis = 4 unique haploid gametes.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-22",
    "categoryId": "science",
    "question": "What is \"Crossing Over\" (genetic recombination) during Meiosis, and when does it occur?",
    "answer": "Exchange of genetic material between non-sister chromatids of homologous chromosomes during Prophase I",
    "options": [
      "Exchange of genetic material between non-sister chromatids of homologous chromosomes during Prophase I",
      "The replication of DNA during the S phase of interphase",
      "The separation of sister chromatids during Anaphase II",
      "The fusion of sperm and egg during fertilization"
    ],
    "explanation": "Homologous chromosomes form tetrads and cross over at chiasmata during Prophase I, breaking linkage and creating novel allele combinations.",
    "tip": "Crossing over occurs in Prophase I of Meiosis.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-23",
    "categoryId": "science",
    "question": "What is the Central Dogma of Molecular Biology?",
    "answer": "DNA -> RNA -> Protein (Transcription followed by Translation)",
    "options": [
      "DNA -> RNA -> Protein (Transcription followed by Translation)",
      "Protein -> RNA -> DNA (Reverse synthesis)",
      "RNA -> DNA -> Protein -> Lipid",
      "Glucose -> ATP -> Carbon Dioxide"
    ],
    "explanation": "Formulated by Francis Crick: genetic information is stored in DNA, transcribed into messenger RNA (mRNA), and translated by ribosomes into functional proteins.",
    "tip": "Central Dogma: DNA transcribed to mRNA, mRNA translated to Protein.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-24",
    "categoryId": "science",
    "question": "Which enzyme is responsible for synthesizing new DNA strands complementary to a template strand during DNA replication?",
    "answer": "DNA Polymerase",
    "options": [
      "DNA Polymerase",
      "RNA Polymerase",
      "DNA Ligase",
      "Topoisomerase"
    ],
    "explanation": "DNA polymerase synthesizes DNA in the 5' to 3' direction, adding complementary nucleotides and proofreading for errors.",
    "tip": "DNA Polymerase builds DNA; RNA Polymerase builds RNA.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-25",
    "categoryId": "science",
    "question": "What are the start codon and its corresponding amino acid in universal genetic code translation?",
    "answer": "AUG (Methionine)",
    "options": [
      "AUG (Methionine)",
      "UAA (Ochre)",
      "UAG (Amber)",
      "UGA (Opal)"
    ],
    "explanation": "AUG specifies methionine and signals ribosomes to initiate polypeptide translation in both prokaryotes and eukaryotes.",
    "tip": "AUG = START codon (Methionine). UAA, UAG, UGA = STOP codons.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-26",
    "categoryId": "science",
    "question": "What is the function of Restriction Enzymes (endonucleases) in bacteria and biotechnology?",
    "answer": "They cut double-stranded DNA at specific palindromic recognition sequences",
    "options": [
      "They cut double-stranded DNA at specific palindromic recognition sequences",
      "They seal nicks in the sugar-phosphate backbone of DNA",
      "They translate messenger RNA into structural collagen proteins",
      "They synthesize ATP in the mitochondrial electron transport chain"
    ],
    "explanation": "Bacteria use them as immune defense against bacteriophage viruses; genetic engineers use them (e.g. EcoRI) to clone genes into plasmids.",
    "tip": "Restriction enzymes = Molecular scissors cutting DNA at specific sites.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-27",
    "categoryId": "science",
    "question": "What does CRISPR-Cas9 technology do in molecular genetics?",
    "answer": "Provides RNA-guided targeted genome editing by introducing precise double-strand breaks at specific DNA sequences",
    "options": [
      "Provides RNA-guided targeted genome editing by introducing precise double-strand breaks at specific DNA sequences",
      "Automates the polymerase chain reaction temperature cycling",
      "Sequences whole human genomes using fluorescent dye terminators",
      "Converts adult mammalian cells into embryonic stem cells"
    ],
    "explanation": "Adapted from bacterial adaptive immune systems: a single guide RNA (sgRNA) directs Cas9 endonuclease to cut target DNA with extraordinary precision.",
    "tip": "CRISPR-Cas9 = Programmable RNA-guided molecular genome editing.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-28",
    "categoryId": "science",
    "question": "What is the most abundant gas in Earth's atmosphere by volume?",
    "answer": "Nitrogen (N2, approximately 78%)",
    "options": [
      "Nitrogen (N2, approximately 78%)",
      "Oxygen (O2, approximately 21%)",
      "Argon (Ar, approximately 0.93%)",
      "Carbon Dioxide (CO2, approximately 0.04%)"
    ],
    "explanation": "Earth's dry atmosphere consists of ~78% Nitrogen, ~21% Oxygen, ~0.93% Argon, and trace gases like Carbon Dioxide and Neon.",
    "tip": "Atmosphere: 78% Nitrogen, 21% Oxygen, 0.9% Argon.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-29",
    "categoryId": "science",
    "question": "Which atmospheric layer contains the ozone layer that absorbs harmful ultraviolet (UV-B/UV-C) solar radiation?",
    "answer": "Stratosphere",
    "options": [
      "Stratosphere",
      "Troposphere",
      "Mesosphere",
      "Thermosphere"
    ],
    "explanation": "The ozone layer (O3) resides in the stratosphere (roughly 15 to 35 km above sea level), absorbing high-energy solar UV photons.",
    "tip": "Ozone layer lives in the Stratosphere.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-30",
    "categoryId": "science",
    "question": "In which atmospheric layer does virtually all Earth weather (clouds, rain, storms) occur?",
    "answer": "Troposphere",
    "options": [
      "Troposphere",
      "Stratosphere",
      "Mesosphere",
      "Exosphere"
    ],
    "explanation": "The troposphere extends from ground level up to about 8–15 km and contains ~75% of atmospheric mass and 99% of water vapor.",
    "tip": "Troposphere = Lowest layer where weather lives.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-31",
    "categoryId": "science",
    "question": "What is the Ideal Gas Law equation?",
    "answer": "P * V = n * R * T",
    "options": [
      "P * V = n * R * T",
      "P / V = n * R * T",
      "P * T = n * R * V",
      "V = P * R * T / n"
    ],
    "explanation": "P = Pressure, V = Volume, n = Moles of gas, R = Universal gas constant (8.314 J/mol·K), T = Absolute temperature in Kelvin.",
    "tip": "PV = nRT (Ideal Gas Law).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-32",
    "categoryId": "science",
    "question": "What does Avogadro's Law state regarding gases at identical temperature and pressure?",
    "answer": "Equal volumes of all gases contain the same number of molecules (V ∝ n)",
    "options": [
      "Equal volumes of all gases contain the same number of molecules (V ∝ n)",
      "Gas pressure is inversely proportional to temperature",
      "The density of a gas is independent of its molar mass",
      "All gases condense to liquid at 100 degrees Celsius"
    ],
    "explanation": "At standard temperature and pressure (STP: 0°C, 1 atm), one mole of any ideal gas occupies approximately 22.4 liters.",
    "tip": "Avogadro: Equal volume of gas = Equal number of moles (22.4 L at STP).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-33",
    "categoryId": "science",
    "question": "What is Avogadro's Number (N_A) to three significant figures?",
    "answer": "6.02 × 10^23 particles per mole",
    "options": [
      "6.02 × 10^23 particles per mole",
      "6.02 × 10^21 particles per mole",
      "1.60 × 10^-19 particles per mole",
      "3.14 × 10^23 particles per mole"
    ],
    "explanation": "Defined as the number of constituent elementary particles (atoms, molecules, ions) in one mole of a substance.",
    "tip": "1 mole = 6.022 × 10²³ particles.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-34",
    "categoryId": "science",
    "question": "What does Boyle's Law state for a fixed amount of gas at constant temperature?",
    "answer": "Pressure and volume are inversely proportional (P1*V1 = P2*V2)",
    "options": [
      "Pressure and volume are inversely proportional (P1*V1 = P2*V2)",
      "Volume and temperature are directly proportional",
      "Pressure and temperature are inversely proportional",
      "Gas volume doubles whenever atmospheric pressure triples"
    ],
    "explanation": "Compressing a gas to half its original volume at constant temperature doubles its internal pressure.",
    "tip": "Boyle's Law: P × V = constant (Pressure up -> Volume down).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-35",
    "categoryId": "science",
    "question": "What does Charles's Law state for a fixed amount of gas at constant pressure?",
    "answer": "Volume and absolute temperature (Kelvin) are directly proportional (V1/T1 = V2/T2)",
    "options": [
      "Volume and absolute temperature (Kelvin) are directly proportional (V1/T1 = V2/T2)",
      "Volume and pressure are directly proportional",
      "Pressure and temperature are inversely proportional",
      "Molar mass increases linearly with temperature"
    ],
    "explanation": "Heating an ideal gas at constant pressure causes it to expand proportionally to its temperature in Kelvin.",
    "tip": "Charles's Law: V / T = constant (Volume expands with heat).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-36",
    "categoryId": "science",
    "question": "What is an \"Exothermic\" chemical reaction?",
    "answer": "A reaction that releases heat energy to its surroundings (ΔH < 0)",
    "options": [
      "A reaction that releases heat energy to its surroundings (ΔH < 0)",
      "A reaction that absorbs thermal heat from its surroundings (ΔH > 0)",
      "A reaction where total entropy remains strictly zero",
      "A reaction that occurs exclusively inside vacuum chambers"
    ],
    "explanation": "Examples: combustion of fuels, neutralization of acids with bases. The products have lower enthalpy than the reactants.",
    "tip": "Exothermic = Releases heat (feels hot, negative ΔH).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-37",
    "categoryId": "science",
    "question": "What is an \"Endothermic\" chemical reaction?",
    "answer": "A reaction that absorbs thermal heat energy from its surroundings (ΔH > 0)",
    "options": [
      "A reaction that absorbs thermal heat energy from its surroundings (ΔH > 0)",
      "A reaction that releases photons and sparks",
      "A reaction where activation energy is zero",
      "A reaction that generates nuclear fusion energy"
    ],
    "explanation": "Examples: chemical cold packs (ammonium nitrate dissolving in water), photosynthesis. The surroundings feel cold.",
    "tip": "Endothermic = Absorbs heat (feels cold, positive ΔH).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-38",
    "categoryId": "science",
    "question": "What does Le Chatelier's Principle state about chemical equilibrium?",
    "answer": "If a dynamic equilibrium is disturbed by changing conditions, the system shifts in a way that counteracts the disturbance",
    "options": [
      "If a dynamic equilibrium is disturbed by changing conditions, the system shifts in a way that counteracts the disturbance",
      "All reversible reactions proceed until 100% of reactants are consumed",
      "Reaction rate is independent of catalyst concentration",
      "Equilibrium constants are identical for all temperatures"
    ],
    "explanation": "If you increase pressure on an equilibrium gas mixture, the system shifts toward the side with fewer gas moles to relieve pressure.",
    "tip": "Le Chatelier: Systems at equilibrium shift to relieve applied stress.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-39",
    "categoryId": "science",
    "question": "What does a Catalyst do to increase the rate of a chemical reaction?",
    "answer": "It provides an alternative reaction pathway with a lower Activation Energy (E_a)",
    "options": [
      "It provides an alternative reaction pathway with a lower Activation Energy (E_a)",
      "It shifts the equilibrium constant K_eq toward more products",
      "It increases the overall enthalpy change ΔH of the reaction",
      "It gets consumed completely as a permanent reactant in the final product"
    ],
    "explanation": "Catalysts speed up both forward and reverse reaction rates equally by lowering activation energy without altering the equilibrium position or being consumed.",
    "tip": "Catalysts lower activation energy; they do NOT change ΔH or K_eq.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-40",
    "categoryId": "science",
    "question": "According to the Brønsted-Lowry acid-base theory, what is an Acid?",
    "answer": "A proton (H+ ion) donor",
    "options": [
      "A proton (H+ ion) donor",
      "A proton (H+ ion) acceptor",
      "An electron-pair donor",
      "A substance that produces OH- hydroxide ions in water"
    ],
    "explanation": "A Brønsted-Lowry acid donates H+ (e.g. HCl); a Brønsted-Lowry base accepts H+ (e.g. NH3).",
    "tip": "Brønsted-Lowry: Acid = Proton Donor; Base = Proton Acceptor.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-41",
    "categoryId": "science",
    "question": "According to the Lewis acid-base theory, what is a Base?",
    "answer": "An electron-pair donor",
    "options": [
      "An electron-pair donor",
      "An electron-pair acceptor",
      "A proton donor",
      "A substance with pH below 7"
    ],
    "explanation": "Lewis definition is the broadest: Lewis Base = electron pair donor (e.g. NH3); Lewis Acid = electron pair acceptor (e.g. BF3).",
    "tip": "Lewis: Base = Donates electron pair. Acid = Accepts electron pair.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-42",
    "categoryId": "science",
    "question": "What is a \"Redox\" (Reduction-Oxidation) reaction?",
    "answer": "A chemical reaction involving the transfer of electrons between species",
    "options": [
      "A chemical reaction involving the transfer of electrons between species",
      "A reaction where protons are annihilated into pure gamma rays",
      "A reaction that occurs exclusively between halogen gases",
      "A reaction where physical states change without chemical bonding"
    ],
    "explanation": "Oxidation is the loss of electrons (increase in oxidation state); Reduction is the gain of electrons (decrease in oxidation state).",
    "tip": "OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-43",
    "categoryId": "science",
    "question": "What is the universal gravitational constant (G) in Newton's law of universal gravitation?",
    "answer": "6.674 × 10^-11 N·m²/kg²",
    "options": [
      "6.674 × 10^-11 N·m²/kg²",
      "9.81 m/s²",
      "8.314 J/mol·K",
      "1.38 × 10^-23 J/K"
    ],
    "explanation": "F = G * (m1 * m2) / r². Unlike \"g\" (local surface gravity ~9.8 m/s²), G is a fundamental physical constant across the universe.",
    "tip": "G = 6.67 × 10⁻¹¹ N·m²/kg².",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-44",
    "categoryId": "science",
    "question": "What is Kepler's First Law of Planetary Motion?",
    "answer": "Planets orbit the Sun in elliptical paths with the Sun located at one of the two foci",
    "options": [
      "Planets orbit the Sun in elliptical paths with the Sun located at one of the two foci",
      "Planetary orbits are perfect concentric circles centered on Earth",
      "A line connecting a planet sweeps out unequal areas in equal times",
      "The square of orbital period equals the velocity of planetary rotation"
    ],
    "explanation": "Johannes Kepler showed that orbits are not circular epicycles, but ellipses with eccentricity e between 0 and 1.",
    "tip": "Kepler 1: Planetary orbits are ellipses with Sun at one focus.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-45",
    "categoryId": "science",
    "question": "What is Kepler's Second Law (Law of Equal Areas)?",
    "answer": "A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time",
    "options": [
      "A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time",
      "Planets move at constant linear speed throughout their entire orbit",
      "The orbital velocity of a planet is independent of its distance to the Sun",
      "All planets complete one revolution in identical time periods"
    ],
    "explanation": "Consequence of conservation of angular momentum: planets move faster when nearest the Sun (perihelion) and slower when farthest (aphelion).",
    "tip": "Kepler 2: Sweeps equal areas in equal times (faster near sun, slower far away).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-46",
    "categoryId": "science",
    "question": "What is Kepler's Third Law (Law of Harmonies)?",
    "answer": "The square of the orbital period (T²) is directly proportional to the cube of the semi-major axis of its orbit (a³)",
    "options": [
      "The square of the orbital period (T²) is directly proportional to the cube of the semi-major axis of its orbit (a³)",
      "T³ is proportional to a²",
      "T is proportional to the square root of orbital speed",
      "Orbital period doubles whenever planetary mass triples"
    ],
    "explanation": "T² ∝ a³. In astronomical units (AU) and Earth years: T² = a³. A planet at 4 AU takes √4³ = √64 = 8 years to orbit.",
    "tip": "Kepler 3: T² = a³ (Period squared = Distance cubed).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-47",
    "categoryId": "science",
    "question": "What is the \"Photoelectric Effect\" (which won Albert Einstein his 1921 Nobel Prize)?",
    "answer": "The emission of electrons from a metal surface when illuminated by light of frequency above a specific threshold",
    "options": [
      "The emission of electrons from a metal surface when illuminated by light of frequency above a specific threshold",
      "The bending of starlight around massive gravitational bodies",
      "The radioactive decay of uranium nuclei into lead isotopes",
      "The generation of electrical voltage by mechanical crystal compression"
    ],
    "explanation": "Showed that light behaves as discrete quantized packets of energy (photons: E = hf) rather than purely continuous classical waves.",
    "tip": "Photoelectric effect demonstrated light is quantized into photons.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-48",
    "categoryId": "science",
    "question": "What is Planck's Constant (h)?",
    "answer": "6.626 × 10^-34 J·s",
    "options": [
      "6.626 × 10^-34 J·s",
      "1.602 × 10^-19 J",
      "9.109 × 10^-31 kg",
      "8.988 × 10^9 N·m²/C²"
    ],
    "explanation": "The fundamental physical quantum constant relating photon energy to its frequency: E = h * f.",
    "tip": "Planck's constant h ≈ 6.63 × 10⁻³⁴ J·s.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-49",
    "categoryId": "science",
    "question": "What are the four fundamental forces of nature in modern physics?",
    "answer": "Gravity, Electromagnetism, Strong Nuclear Force, and Weak Nuclear Force",
    "options": [
      "Gravity, Electromagnetism, Strong Nuclear Force, and Weak Nuclear Force",
      "Friction, Tension, Centripetal Force, and Elasticity",
      "Thermal, Kinetic, Potential, and Chemical Forces",
      "Nuclear, Magnetic, Gravitational, and Barometric Forces"
    ],
    "explanation": "Strong force binds quarks/nuclei; Electromagnetism governs atomic chemistry; Weak force governs radioactive beta decay; Gravity governs mass at cosmic scales.",
    "tip": "4 Forces: Strong, Weak, Electromagnetic, Gravitational.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-50",
    "categoryId": "science",
    "question": "Which fundamental force is the weakest in strength, yet dominates on astronomical scales?",
    "answer": "Gravity",
    "options": [
      "Gravity",
      "Weak Nuclear Force",
      "Electromagnetism",
      "Strong Nuclear Force"
    ],
    "explanation": "Gravity is roughly 10^38 times weaker than the strong nuclear force, but because mass is always positive and has infinite range, it dominates large-scale cosmic structure.",
    "tip": "Gravity is the weakest fundamental force, but infinite in range and cumulative.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-51",
    "categoryId": "science",
    "question": "Which gauge boson mediates the Electromagnetic Force?",
    "answer": "Photon",
    "options": [
      "Photon",
      "Gluon",
      "W and Z bosons",
      "Graviton"
    ],
    "explanation": "Photons are massless spin-1 bosons that mediate all electromagnetic interactions between electrically charged particles.",
    "tip": "Electromagnetism = Mediated by Photons.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-52",
    "categoryId": "science",
    "question": "Which gauge boson mediates the Strong Nuclear Force between quarks?",
    "answer": "Gluon",
    "options": [
      "Gluon",
      "Photon",
      "Higgs Boson",
      "Z Boson"
    ],
    "explanation": "Gluons carry \"color charge\" in quantum chromodynamics (QCD) and hold quarks together inside protons and neutrons.",
    "tip": "Strong force = Mediated by Gluons (\"glues\" quarks together).",
    "difficulty": "advanced"
  },
  {
    "id": "sci-53",
    "categoryId": "science",
    "question": "What does the Higgs Boson particle and field provide to fundamental particles in the Standard Model?",
    "answer": "Mass (via the Higgs mechanism)",
    "options": [
      "Mass (via the Higgs mechanism)",
      "Electric charge",
      "Nuclear spin velocity",
      "Antimatter annihilation energy"
    ],
    "explanation": "Discovered at CERN's Large Hadron Collider in 2012, interaction with the Higgs field gives inertial mass to fundamental particles (like quarks and leptons).",
    "tip": "Higgs field gives mass to elementary particles.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-54",
    "categoryId": "science",
    "question": "What is the \"Chandrasekhar Limit\" in stellar astrophysics?",
    "answer": "The maximum mass (~1.44 solar masses) of a stable White Dwarf star before collapsing into a neutron star or black hole",
    "options": [
      "The maximum mass (~1.44 solar masses) of a stable White Dwarf star before collapsing into a neutron star or black hole",
      "The minimum distance a planet can orbit a star without tidally disrupting",
      "The maximum surface temperature of a red supergiant star",
      "The critical density required for the universe to be geometrically flat"
    ],
    "explanation": "Discovered by Subrahmanyan Chandrasekhar: above ~1.44 M_sun, electron degeneracy pressure can no longer withstand gravitational collapse.",
    "tip": "Chandrasekhar limit ≈ 1.44 solar masses for white dwarfs.",
    "difficulty": "advanced"
  },
  {
    "id": "sci-55",
    "categoryId": "science",
    "question": "What is the \"Event Horizon\" of a Black Hole?",
    "answer": "The boundary threshold around a black hole beyond which nothing, not even light, can escape the gravitational pull",
    "options": [
      "The boundary threshold around a black hole beyond which nothing, not even light, can escape the gravitational pull",
      "The central infinite singularity at the core of the black hole",
      "The outer boundary of the accretion disk where gas glows in X-rays",
      "The point where Hawking radiation is reflected back into space"
    ],
    "explanation": "The escape velocity at the event horizon equals the speed of light. Its radius is given by the Schwarzschild radius: r_s = 2GM / c².",
    "tip": "Event Horizon: Point of no return where escape velocity = c.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-56",
    "categoryId": "science",
    "question": "What is \"Hawking Radiation\"?",
    "answer": "Theoretical thermal black-body radiation predicted by Stephen Hawking to be emitted outside a black hole's event horizon due to quantum vacuum fluctuations",
    "options": [
      "Theoretical thermal black-body radiation predicted by Stephen Hawking to be emitted outside a black hole's event horizon due to quantum vacuum fluctuations",
      "Gamma ray bursts emitted when neutron stars merge",
      "Cosmic microwave background radiation from the Big Bang",
      "X-rays emitted by high-energy pulsar magnetic fields"
    ],
    "explanation": "Virtual particle-antiparticle pairs near the event horizon can separate: one falls in while the other escapes, causing black holes to slowly evaporate over eons.",
    "tip": "Hawking radiation causes black holes to slowly lose mass and evaporate.",
    "difficulty": "advanced"
  },
  {
    "id": "sci-57",
    "categoryId": "science",
    "question": "What is the Cosmic Microwave Background (CMB) radiation?",
    "answer": "Thermal remnant electromagnetic radiation left over from the epoch of recombination (~380,000 years after the Big Bang)",
    "options": [
      "Thermal remnant electromagnetic radiation left over from the epoch of recombination (~380,000 years after the Big Bang)",
      "Radiation emitted by active supermassive black holes in quasars",
      "Microwave signals generated by mobile telecommunication satellites",
      "Infrared light reflected by the Kuiper belt asteroid field"
    ],
    "explanation": "Discovered in 1965 by Penzias and Wilson: isotropic black-body radiation at ~2.725 Kelvin, offering primary empirical evidence for the Big Bang.",
    "tip": "CMB: Afterglow of the Big Bang (~2.7 Kelvin).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-58",
    "categoryId": "science",
    "question": "What is \"Dark Matter\"?",
    "answer": "A hypothesized form of matter that does not emit, absorb, or reflect electromagnetic radiation, detected via its gravitational effects on galaxies",
    "options": [
      "A hypothesized form of matter that does not emit, absorb, or reflect electromagnetic radiation, detected via its gravitational effects on galaxies",
      "Antimatter particles stored in deep interstellar molecular dust clouds",
      "Deuterium and tritium gas inside brown dwarf stars",
      "Burned-out stellar cores floating in intergalactic space"
    ],
    "explanation": "Accounts for ~85% of total cosmic matter, explaining flat galactic rotation curves and gravitational lensing where visible matter is insufficient.",
    "tip": "Dark Matter: Gravitational effects observed, but emits zero light (~85% of matter).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-59",
    "categoryId": "science",
    "question": "What is \"Dark Energy\"?",
    "answer": "A mysterious form of energy that permeates all space and accelerates the expansion of the universe",
    "options": [
      "A mysterious form of energy that permeates all space and accelerates the expansion of the universe",
      "The kinetic energy of rotating supermassive black holes",
      "Nuclear energy released during supernova explosions",
      "Electromagnetic energy absorbed by dark nebulae"
    ],
    "explanation": "Accounts for ~68% of the total energy-matter density of the universe, represented mathematically by Einstein's Cosmological Constant (Λ).",
    "tip": "Dark Energy drives the accelerating expansion of the universe (~68% of universe).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-60",
    "categoryId": "science",
    "question": "What is Plate Tectonics theory in geology?",
    "answer": "Earth's lithosphere is divided into rigid plates that float and move atop the semi-fluid asthenosphere",
    "options": [
      "Earth's lithosphere is divided into rigid plates that float and move atop the semi-fluid asthenosphere",
      "Continents are permanently anchored to Earth's solid metallic core",
      "Earthquakes are caused exclusively by solar magnetic storms",
      "Mountain ranges were formed by rapid contraction of Earth cooling from molten rock"
    ],
    "explanation": "Interactions at plate boundaries (convergent, divergent, transform) drive earthquakes, volcanoes, seafloor spreading, and mountain orogeny.",
    "tip": "Tectonic plates float on the ductile asthenosphere.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-61",
    "categoryId": "science",
    "question": "What happens at a \"Divergent\" tectonic plate boundary?",
    "answer": "Plates pull apart from each other, allowing magma to rise and form new oceanic crust (e.g. Mid-Atlantic Ridge)",
    "options": [
      "Plates pull apart from each other, allowing magma to rise and form new oceanic crust (e.g. Mid-Atlantic Ridge)",
      "One plate slides beneath another into the mantle (subduction)",
      "Plates grind past each other horizontally without creating crust",
      "Two continental plates collide to thrust up massive mountain ranges"
    ],
    "explanation": "Divergent boundaries create rift valleys on land and mid-ocean ridges underwater via seafloor spreading.",
    "tip": "Divergent = Moving apart -> Creates new crust (seafloor spreading).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-62",
    "categoryId": "science",
    "question": "What happens at a \"Convergent Subduction\" plate boundary?",
    "answer": "A denser oceanic plate sinks beneath an overriding plate into the mantle, forming deep trenches and volcanic arcs",
    "options": [
      "A denser oceanic plate sinks beneath an overriding plate into the mantle, forming deep trenches and volcanic arcs",
      "Two plates separate to create new ocean floor",
      "Two plates slide laterally past each other along strike-slip faults",
      "Underground magma chambers freeze into granite batholiths"
    ],
    "explanation": "Forms deep ocean trenches (like the Mariana Trench) and explosive volcanic mountain chains (like the Pacific Ring of Fire).",
    "tip": "Subduction: Dense oceanic plate dives beneath lighter plate into mantle.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-63",
    "categoryId": "science",
    "question": "What type of fault is the San Andreas Fault in California?",
    "answer": "Transform (Strike-Slip) fault",
    "options": [
      "Transform (Strike-Slip) fault",
      "Normal divergent fault",
      "Reverse thrust fault",
      "Continental subduction zone"
    ],
    "explanation": "The Pacific Plate and North American Plate slide horizontally past each other along a right-lateral strike-slip transform fault.",
    "tip": "San Andreas = Transform / Strike-slip fault (horizontal motion).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-64",
    "categoryId": "science",
    "question": "What are the three major rock classifications in geology based on their formation?",
    "answer": "Igneous, Sedimentary, and Metamorphic",
    "options": [
      "Igneous, Sedimentary, and Metamorphic",
      "Basalt, Granite, and Quartz",
      "Silicate, Carbonate, and Oxide",
      "Volcanic, Plutonic, and Magmatic"
    ],
    "explanation": "Igneous form from cooled magma/lava; Sedimentary form from compacted sediments; Metamorphic form from intense heat and pressure altering existing rock.",
    "tip": "Rock cycle: Igneous (melted), Sedimentary (layered), Metamorphic (transformed by heat/pressure).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-65",
    "categoryId": "science",
    "question": "What is the \"Mohs Scale\" used to measure in mineralogy?",
    "answer": "Mineral hardness (scratch resistance from 1 Talc to 10 Diamond)",
    "options": [
      "Mineral hardness (scratch resistance from 1 Talc to 10 Diamond)",
      "The refractive index of transparent gemstones",
      "The crystal density of silicate minerals",
      "The radioactive half-life of volcanic basalt"
    ],
    "explanation": "Created by Friedrich Mohs: Talc (1), Gypsum (2), Calcite (3), Fluorite (4), Apatite (5), Orthoclase (6), Quartz (7), Topaz (8), Corundum (9), Diamond (10).",
    "tip": "Mohs scale: 1 (softest, Talc) to 10 (hardest, Diamond).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-66",
    "categoryId": "science",
    "question": "What is the difference between an Isotope and an Ion of a chemical element?",
    "answer": "Isotopes differ in number of neutrons; ions differ in number of electrons",
    "options": [
      "Isotopes differ in number of neutrons; ions differ in number of electrons",
      "Isotopes differ in number of protons; ions differ in neutrons",
      "Isotopes have electrical charge; ions are strictly neutral",
      "Isotopes form chemical bonds; ions never participate in bonding"
    ],
    "explanation": "Carbon-12 and Carbon-14 have 6 protons but 6 vs 8 neutrons (isotopes). Na+ has lost 1 electron (ion).",
    "tip": "Isotopes = Different Neutrons. Ions = Charged (different Electrons).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-67",
    "categoryId": "science",
    "question": "What is \"Radioactive Half-Life\"?",
    "answer": "The time required for half of the unstable radioactive nuclei in a sample to undergo decay",
    "options": [
      "The time required for half of the unstable radioactive nuclei in a sample to undergo decay",
      "The time for an atom to complete half of an orbit around the nucleus",
      "The time required for a nuclear reactor fuel rod to melt down",
      "The average lifetime of a chemical covalent bond in water"
    ],
    "explanation": "Radioactive decay follows first-order exponential kinetics: N(t) = N0 * (1/2)^(t / t_half). Independent of temperature, pressure, or chemical state.",
    "tip": "Half-life = Time for 50% of radioactive atoms to decay.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-68",
    "categoryId": "science",
    "question": "What is Carbon-14 (Radiocarbon) Dating used for?",
    "answer": "Determining the age of organic, carbon-bearing materials up to approximately 50,000 to 60,000 years old",
    "options": [
      "Determining the age of organic, carbon-bearing materials up to approximately 50,000 to 60,000 years old",
      "Dating igneous moon rocks billions of years old",
      "Measuring the temperature of prebiotic oceans",
      "Determining the metallic purity of ancient gold coins"
    ],
    "explanation": "Living organisms assimilate C-14 from atmosphere; upon death, C-14 decays into N-14 with a half-life of ~5,730 years.",
    "tip": "Carbon-14 dating: Organic material up to ~50,000 years (half-life = 5,730 yrs).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-69",
    "categoryId": "science",
    "question": "What is Nuclear Fission?",
    "answer": "The splitting of a heavy atomic nucleus (like Uranium-235) into lighter nuclei, releasing free neutrons and energy",
    "options": [
      "The splitting of a heavy atomic nucleus (like Uranium-235) into lighter nuclei, releasing free neutrons and energy",
      "The combination of light hydrogen nuclei to form helium",
      "The emission of an orbital electron from a neutral atom",
      "The chemical combustion of fossil coal in oxygen gas"
    ],
    "explanation": "Used in conventional commercial nuclear power plants and atomic bombs. The missing mass converts to kinetic energy via E = mc².",
    "tip": "Fission = Splitting heavy nuclei (Uranium). Fusion = Combining light nuclei (Hydrogen).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-70",
    "categoryId": "science",
    "question": "What is Nuclear Fusion?",
    "answer": "The process where two light atomic nuclei (like Deuterium and Tritium) combine to form a heavier nucleus, releasing immense energy",
    "options": [
      "The process where two light atomic nuclei (like Deuterium and Tritium) combine to form a heavier nucleus, releasing immense energy",
      "The radioactive decay of heavy isotopes in Earth's crust",
      "The splitting of plutonium atoms inside a reactor core",
      "The ionization of noble gas atoms in fluorescent tubes"
    ],
    "explanation": "The power source of the Sun and stars: high temperatures and pressures overcome electrostatic Coulomb repulsion to fuse nuclei.",
    "tip": "Fusion powers the stars (Hydrogen -> Helium).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-71",
    "categoryId": "science",
    "question": "What is the \"Coriolis Effect\"?",
    "answer": "The apparent deflection of moving objects (like winds and ocean currents) caused by Earth's rotation",
    "options": [
      "The apparent deflection of moving objects (like winds and ocean currents) caused by Earth's rotation",
      "The gravitational pull of the Moon generating oceanic tides",
      "The precession of Earth's orbital equinoxes over 26,000 years",
      "The reflection of solar radiation by polar ice sheets"
    ],
    "explanation": "Deflects moving fluids to the RIGHT in the Northern Hemisphere and to the LEFT in the Southern Hemisphere, shaping hurricane rotations.",
    "tip": "Coriolis: Deflects right in North, left in South due to planetary rotation.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-72",
    "categoryId": "science",
    "question": "What causes Ocean Tides on Earth?",
    "answer": "The gravitational differential gradient exerted primarily by the Moon, and to a lesser extent the Sun",
    "options": [
      "The gravitational differential gradient exerted primarily by the Moon, and to a lesser extent the Sun",
      "Underwater geothermal volcanic vents heating ocean floors",
      "Atmospheric high-pressure trade wind belts pushing surface water",
      "Centrifugal force generated by Earth's core dynamo magnetic field"
    ],
    "explanation": "The difference in gravitational pull between the near side and far side of Earth creates two tidal bulges, producing roughly two high tides daily.",
    "tip": "Tides: Lunar gravity gradient produces tidal bulges.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-73",
    "categoryId": "science",
    "question": "What are \"Spring Tides\" and when do they occur?",
    "answer": "Exceptionally high high tides and low low tides occurring when the Sun, Moon, and Earth align (New and Full Moon)",
    "options": [
      "Exceptionally high high tides and low low tides occurring when the Sun, Moon, and Earth align (New and Full Moon)",
      "Tides that occur exclusively during the astronomical spring equinox",
      "Weak tides that occur when the Moon is at first or third quarter",
      "Tides caused by freshwater runoff from melting mountain snow"
    ],
    "explanation": "Gravitational forces of Sun and Moon reinforce each other in syzygy (alignment at New/Full Moon). In contrast, Neap Tides occur at 90° quadrature.",
    "tip": "Spring Tides = Maximum tidal range (New & Full Moon alignment).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-74",
    "categoryId": "science",
    "question": "What are \"Neap Tides\"?",
    "answer": "Tides with the smallest tidal range occurring when the Sun and Moon are at right angles (90°) relative to Earth (Quarter Moons)",
    "options": [
      "Tides with the smallest tidal range occurring when the Sun and Moon are at right angles (90°) relative to Earth (Quarter Moons)",
      "Tides occurring during lunar eclipses in winter months",
      "Rapid storm surges caused by offshore tropical cyclones",
      "Tides that occur in inland enclosed freshwater lakes"
    ],
    "explanation": "The gravitational pull of the Sun partially cancels out the gravitational bulge created by the Moon, producing moderate tides.",
    "tip": "Neap Tides = Minimal tidal range (Quarter Moon, 90° angle).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-75",
    "categoryId": "science",
    "question": "What is the primary greenhouse gas contributing to Earth's natural baseline greenhouse effect by volume and heat trapping?",
    "answer": "Water Vapor (H2O)",
    "options": [
      "Water Vapor (H2O)",
      "Carbon Dioxide (CO2)",
      "Methane (CH4)",
      "Nitrous Oxide (N2O)"
    ],
    "explanation": "Water vapor accounts for ~60% of natural greenhouse warming. CO2 is the most significant anthropogenic (human-caused) greenhouse gas.",
    "tip": "Water vapor is the most abundant natural greenhouse gas; CO2 is the primary human-emitted driver.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-76",
    "categoryId": "science",
    "question": "What is \"Ocean Acidification\"?",
    "answer": "The ongoing decrease in ocean pH caused by absorption of anthropogenic CO2 from the atmosphere forming carbonic acid",
    "options": [
      "The ongoing decrease in ocean pH caused by absorption of anthropogenic CO2 from the atmosphere forming carbonic acid",
      "Industrial chemical runoff dumping sulfuric acid into coastal harbors",
      "Acid rain dissolving limestone cliffs along marine shorelines",
      "The warming of surface sea waters causing coral bleaching"
    ],
    "explanation": "CO2 + H2O -> H2CO3 -> H+ + HCO3-. The increased hydrogen ions lower pH and reduce carbonate ion availability, threatening coral reefs and shellfish.",
    "tip": "Ocean acidification: Dissolved CO2 forms carbonic acid, lowering marine pH.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-77",
    "categoryId": "science",
    "question": "What is \"Bernoulli's Principle\" in fluid dynamics?",
    "answer": "An increase in the speed of a fluid occurs simultaneously with a decrease in static pressure or potential energy",
    "options": [
      "An increase in the speed of a fluid occurs simultaneously with a decrease in static pressure or potential energy",
      "Fluid pressure increases proportionally with flow velocity",
      "Viscous fluids always flow in turbulent concentric vortices",
      "The volume of a liquid expands as its flow rate decelerates"
    ],
    "explanation": "Conservation of energy for flowing fluids: faster fluid flow generates lower pressure (contributing to aerodynamic lift and carburetor venturi tubes).",
    "tip": "Bernoulli: Faster fluid speed -> Lower fluid pressure.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-78",
    "categoryId": "science",
    "question": "What is \"Archimedes' Principle\"?",
    "answer": "Any body completely or partially submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced",
    "options": [
      "Any body completely or partially submerged in a fluid is buoyed up by a force equal to the weight of the fluid displaced",
      "The density of a floating object is always greater than the fluid",
      "Water level in a container rises by half the submerged volume",
      "Fluid friction is proportional to the square root of surface area"
    ],
    "explanation": "F_buoyant = ρ_fluid * V_submerged * g. If buoyant force equals object weight, the object floats; if less, it sinks.",
    "tip": "Archimedes: Buoyant Force = Weight of displaced fluid.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-79",
    "categoryId": "science",
    "question": "What is \"Snell's Law\" of light refraction?",
    "answer": "n1 * sin(θ1) = n2 * sin(θ2)",
    "options": [
      "n1 * sin(θ1) = n2 * sin(θ2)",
      "n1 * cos(θ1) = n2 * cos(θ2)",
      "n1 * θ1 = n2 * θ2",
      "sin(θ1) / sin(θ2) = c / v"
    ],
    "explanation": "Relates angles of incidence and refraction for a wave passing between two media with differing refractive indices (n1 and n2).",
    "tip": "Snell's Law: n1 sin θ1 = n2 sin θ2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-80",
    "categoryId": "science",
    "question": "What is \"Total Internal Reflection\"?",
    "answer": "Complete reflection of light back into a denser medium when the angle of incidence exceeds the critical angle",
    "options": [
      "Complete reflection of light back into a denser medium when the angle of incidence exceeds the critical angle",
      "The absorption of 100% of light rays by a black hole surface",
      "Refraction of light rays parallel to the boundary surface",
      "Scattering of polarized sunlight by atmospheric nitrogen"
    ],
    "explanation": "Occurs when light travels from higher index n1 to lower index n2 (e.g. glass to air) past the critical angle. Critical for fiber-optic cables.",
    "tip": "Total Internal Reflection powers fiber optic communication.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-81",
    "categoryId": "science",
    "question": "What is the function of the Sodium-Potassium Pump (Na+/K+-ATPase) in animal cell membranes?",
    "answer": "Actively pumps 3 Na+ ions OUT of the cell and 2 K+ ions IN, consuming one ATP molecule",
    "options": [
      "Actively pumps 3 Na+ ions OUT of the cell and 2 K+ ions IN, consuming one ATP molecule",
      "Passively diffuses 2 Na+ in and 2 K+ out without using energy",
      "Pumps glucose molecules across the mitochondrial membrane",
      "Synthesizes myelin sheaths around peripheral nerve axons"
    ],
    "explanation": "Maintains the resting membrane potential (-70 mV inside) essential for nerve impulse conduction, muscle contraction, and osmotic balance.",
    "tip": "Na+/K+ Pump: 3 Na+ OUT, 2 K+ IN, 1 ATP used (NOKIA: No K Inside, Ok K In).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-82",
    "categoryId": "science",
    "question": "What is an \"Action Potential\" in a neuron?",
    "answer": "A rapid, transient reversal of membrane electrical potential driven by the opening of voltage-gated Na+ channels followed by K+ channels",
    "options": [
      "A rapid, transient reversal of membrane electrical potential driven by the opening of voltage-gated Na+ channels followed by K+ channels",
      "The continuous chemical flow of neurotransmitters across the synapse",
      "The permanent destruction of the nerve myelin sheath",
      "A gradual steady decline in cellular glucose concentration"
    ],
    "explanation": "All-or-none electrical impulse: depolarizes from -70 mV to +30 mV via rapid Na+ influx, then repolarizes via K+ efflux.",
    "tip": "Action potential: Depolarization (Na+ in) -> Repolarization (K+ out).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-83",
    "categoryId": "science",
    "question": "Which neurotransmitter is primarily released at neuromuscular junctions to stimulate skeletal muscle contraction?",
    "answer": "Acetylcholine (ACh)",
    "options": [
      "Acetylcholine (ACh)",
      "Dopamine",
      "Serotonin",
      "GABA (gamma-aminobutyric acid)"
    ],
    "explanation": "ACh binds to nicotinic receptors on the muscle motor end plate, triggering sodium influx and muscle fiber depolarization.",
    "tip": "Acetylcholine = Primary neurotransmitter for muscle contraction.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-84",
    "categoryId": "science",
    "question": "What is the primary inhibitory neurotransmitter in the mammalian central nervous system?",
    "answer": "GABA (Gamma-Aminobutyric Acid)",
    "options": [
      "GABA (Gamma-Aminobutyric Acid)",
      "Glutamate",
      "Norepinephrine",
      "Histamine"
    ],
    "explanation": "GABA hyperpolarizes postsynaptic neurons by opening chloride channels (Cl- influx), dampening neuronal excitability. (Glutamate is the main excitatory neurotransmitter).",
    "tip": "GABA = Main inhibitory neurotransmitter; Glutamate = Main excitatory.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-85",
    "categoryId": "science",
    "question": "What is the function of Hemoglobin in vertebrate red blood cells?",
    "answer": "Transports oxygen from the lungs to tissues using four iron-containing heme prosthetic groups",
    "options": [
      "Transports oxygen from the lungs to tissues using four iron-containing heme prosthetic groups",
      "Synthesizes antibodies against bacterial antigens in blood plasma",
      "Initiates blood clotting cascades at damaged vascular sites",
      "Produces digestive bile salts for emulsifying dietary fats"
    ],
    "explanation": "Hemoglobin exhibits cooperative binding: oxygen binding to one heme subunit increases the affinity of remaining subunits for oxygen (sigmoidal curve).",
    "tip": "Hemoglobin: 4 heme subunits binding oxygen with cooperativity.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-86",
    "categoryId": "science",
    "question": "What is the Bohr Effect in respiratory physiology?",
    "answer": "Hemoglobin's oxygen binding affinity decreases in environments with higher CO2 concentration and lower pH (more acidic)",
    "options": [
      "Hemoglobin's oxygen binding affinity decreases in environments with higher CO2 concentration and lower pH (more acidic)",
      "Oxygen solubility doubles when blood temperature drops below 30°C",
      "Red blood cells produce ATP exclusively through aerobic respiration",
      "Carbon monoxide enhances oxygen delivery to brain tissues"
    ],
    "explanation": "Working muscles produce CO2 and lactic acid; the acidic environment triggers hemoglobin to unload oxygen right where it is needed most.",
    "tip": "Bohr Effect: High CO2 & low pH trigger hemoglobin to release oxygen.",
    "difficulty": "advanced"
  },
  {
    "id": "sci-87",
    "categoryId": "science",
    "question": "What is an \"Endosymbiotic Theory\" origin for mitochondria and chloroplasts?",
    "answer": "They evolved from free-living prokaryotic bacteria engulfed by an ancestral eukaryotic host cell",
    "options": [
      "They evolved from free-living prokaryotic bacteria engulfed by an ancestral eukaryotic host cell",
      "They originated as viral parasites that incorporated host ribosomes",
      "They formed spontaneously by crystallizing inorganic mineral salts",
      "They were extruded from the nuclear membrane during cell division"
    ],
    "explanation": "Championed by Lynn Margulis: supported by circular DNA, 70S bacterial ribosomes, double membranes, and binary fission division.",
    "tip": "Endosymbiosis: Mitochondria & chloroplasts were once free-living bacteria.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-88",
    "categoryId": "science",
    "question": "What are the three domains of life in modern biological taxonomy (Carl Woese)?",
    "answer": "Bacteria, Archaea, and Eukarya",
    "options": [
      "Bacteria, Archaea, and Eukarya",
      "Plantae, Animalia, and Fungi",
      "Prokaryotes, Eukaryotes, and Viruses",
      "Monera, Protista, and Chordata"
    ],
    "explanation": "Based on 16S ribosomal RNA sequencing, Woese discovered that Archaea are distinct from Bacteria and more closely related to Eukarya.",
    "tip": "3 Domains: Bacteria, Archaea, Eukarya.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-89",
    "categoryId": "science",
    "question": "What is an \"Allotrope\"?",
    "answer": "Two or more different physical structural forms of the same chemical element in the same physical state",
    "options": [
      "Two or more different physical structural forms of the same chemical element in the same physical state",
      "Compounds containing identical molecular formulas but different isomers",
      "Atoms with identical neutron counts but different atomic numbers",
      "Molecules that rotate polarized light in opposite directions"
    ],
    "explanation": "Classic example: Carbon allotropes include diamond (tetrahedral lattice), graphite (hexagonal sheets), and graphene/buckyballs.",
    "tip": "Allotropes = Same element, different structural forms (Diamond vs Graphite).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-90",
    "categoryId": "science",
    "question": "What is the \"Triple Point\" on a substance's phase diagram?",
    "answer": "The unique temperature and pressure at which solid, liquid, and gas phases coexist in thermodynamic equilibrium",
    "options": [
      "The unique temperature and pressure at which solid, liquid, and gas phases coexist in thermodynamic equilibrium",
      "The boiling point of a substance at standard atmospheric pressure",
      "The temperature above which gas cannot be liquefied regardless of pressure",
      "The point where chemical entropy equals enthalpy"
    ],
    "explanation": "For pure water, the triple point occurs at precisely 273.16 K (0.01°C) and 611.65 Pa (0.006 atm).",
    "tip": "Triple Point: Solid, liquid, and gas coexist in equilibrium.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-91",
    "categoryId": "science",
    "question": "What is the \"Critical Point\" on a phase diagram?",
    "answer": "The end point of a phase equilibrium curve where liquid and gas phases become indistinguishable (Supercritical Fluid)",
    "options": [
      "The end point of a phase equilibrium curve where liquid and gas phases become indistinguishable (Supercritical Fluid)",
      "The temperature where solid spontaneously sublimes into plasma",
      "The point where latent heat of fusion equals latent heat of vaporization",
      "The boundary where density of ice exceeds liquid water"
    ],
    "explanation": "Beyond critical temperature and pressure, the substance enters the supercritical fluid state, possessing liquid-like density and gas-like diffusivity.",
    "tip": "Critical Point: Beyond this, liquid and gas merge into a supercritical fluid.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-92",
    "categoryId": "science",
    "question": "What is \"Faraday's Law of Electromagnetic Induction\"?",
    "answer": "A changing magnetic flux through a closed conducting loop induces an electromotive force (EMF) in the loop",
    "options": [
      "A changing magnetic flux through a closed conducting loop induces an electromotive force (EMF) in the loop",
      "Electric current flows only when magnetic poles are identical",
      "Electrostatic attraction decreases with the square root of distance",
      "Magnetic monopoles exist at the center of all rotating dynamos"
    ],
    "explanation": "EMF = -dΦ_B / dt. The negative sign represents Lenz's Law: the induced current opposes the change in magnetic flux that produced it.",
    "tip": "Faraday's Law: Changing magnetic flux induces electric voltage (generators).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-93",
    "categoryId": "science",
    "question": "What is \"Ohm's Law\" for an electrical circuit?",
    "answer": "Voltage equals current multiplied by resistance (V = I * R)",
    "options": [
      "Voltage equals current multiplied by resistance (V = I * R)",
      "Current equals voltage multiplied by resistance (I = V * R)",
      "Resistance equals voltage multiplied by current (R = V * I)",
      "Electrical power equals resistance divided by voltage"
    ],
    "explanation": "For ohmic conductors at constant temperature, current (I, amperes) is directly proportional to applied voltage (V, volts) across resistance (R, ohms).",
    "tip": "V = IR (Voltage = Current × Resistance).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-94",
    "categoryId": "science",
    "question": "How is electrical Power (P) calculated in terms of Voltage and Current?",
    "answer": "P = V * I (or I²*R, or V²/R)",
    "options": [
      "P = V * I (or I²*R, or V²/R)",
      "P = V / I",
      "P = I / R²",
      "P = V² * I"
    ],
    "explanation": "Measured in Watts (Joules/sec): 1 Watt = 1 Volt × 1 Ampere.",
    "tip": "Power: P = VI = I²R = V²/R.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-95",
    "categoryId": "science",
    "question": "What is the \"Doppler Effect\"?",
    "answer": "The change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source",
    "options": [
      "The change in frequency or wavelength of a wave in relation to an observer who is moving relative to the wave source",
      "The constructive interference of two waves of equal amplitude",
      "The total absorption of acoustic energy by soundproofing insulation",
      "The polarization of light rays passing through crystalline calcite"
    ],
    "explanation": "Sirens sound higher-pitched as an ambulance approaches (wave crests compressed) and lower-pitched as it recedes.",
    "tip": "Doppler effect: Pitch/frequency rises approaching, drops receding.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-96",
    "categoryId": "science",
    "question": "What is the difference between Transverse and Longitudinal waves?",
    "answer": "Transverse waves oscillate perpendicular to the direction of wave travel; longitudinal waves oscillate parallel to wave travel",
    "options": [
      "Transverse waves oscillate perpendicular to the direction of wave travel; longitudinal waves oscillate parallel to wave travel",
      "Transverse waves require a material medium; longitudinal waves travel in vacuum",
      "Transverse waves are always audible; longitudinal waves are invisible light",
      "Longitudinal waves cannot reflect off physical boundaries"
    ],
    "explanation": "Electromagnetic light waves and guitar strings are transverse. Sound waves in air are longitudinal (compressions and rarefactions).",
    "tip": "Transverse = Perpendicular oscillation (Light). Longitudinal = Parallel (Sound).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-97",
    "categoryId": "science",
    "question": "What is the biological function of the enzyme Telomerase?",
    "answer": "It maintains telomere length at chromosome ends by adding repetitive DNA sequences (TTAGGG in humans), preventing cellular senescence",
    "options": [
      "It maintains telomere length at chromosome ends by adding repetitive DNA sequences (TTAGGG in humans), preventing cellular senescence",
      "It breaks down toxic hydrogen peroxide into water and oxygen in peroxisomes",
      "It unzips double-stranded DNA during replication fork formation",
      "It degrades damaged misfolded proteins in cellular proteasomes"
    ],
    "explanation": "Most somatic cells lack telomerase and have finite divisions (Hayflick limit); stem cells and 90% of cancer cells activate telomerase to achieve immortality.",
    "tip": "Telomerase extends chromosome ends (telomeres), conferring cellular immortality.",
    "difficulty": "advanced"
  },
  {
    "id": "sci-98",
    "categoryId": "science",
    "question": "What is \"Apoptosis\"?",
    "answer": "Programmed, controlled cellular suicide that eliminates redundant, damaged, or infected cells without triggering inflammation",
    "options": [
      "Programmed, controlled cellular suicide that eliminates redundant, damaged, or infected cells without triggering inflammation",
      "Uncontrolled cellular death resulting from traumatic acute injury (necrosis)",
      "The rapid division of cancer cells forming malignant metastatic tumors",
      "The process of cell specialization from pluripotent stem cells"
    ],
    "explanation": "Unlike necrosis (cell swelling and lysis causing inflammation), apoptosis involves cell shrinkage, chromatin condensation, membrane blebbing, and orderly phagocytosis.",
    "tip": "Apoptosis = Programmed, orderly cell death.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-99",
    "categoryId": "science",
    "question": "What is the primary difference between Gram-Positive and Gram-Negative bacteria in microbiology?",
    "answer": "Gram-positive bacteria have a thick peptidoglycan cell wall; Gram-negative have a thin peptidoglycan layer surrounded by an outer lipopolysaccharide membrane",
    "options": [
      "Gram-positive bacteria have a thick peptidoglycan cell wall; Gram-negative have a thin peptidoglycan layer surrounded by an outer lipopolysaccharide membrane",
      "Gram-positive bacteria have a nucleus; Gram-negative lack a nucleus",
      "Gram-negative bacteria reproduce exclusively through meiosis",
      "Gram-positive bacteria do not possess ribosomes"
    ],
    "explanation": "Gram-positive stain purple/violet with crystal violet. Gram-negative stain pink/red with safranin counterstain and are often more antibiotic-resistant.",
    "tip": "Gram+ = Thick peptidoglycan (Purple). Gram- = Outer membrane + LPS (Pink).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-100",
    "categoryId": "science",
    "question": "What is the \"Fermi Paradox\"?",
    "answer": "The apparent contradiction between high statistical estimates of extraterrestrial civilizations and the total lack of empirical evidence or contact",
    "options": [
      "The apparent contradiction between high statistical estimates of extraterrestrial civilizations and the total lack of empirical evidence or contact",
      "The impossibility of measuring subatomic particles without collapsing their wavefunctions",
      "The calculation that black holes violate quantum information conservation",
      "The mathematical problem of integrating three gravitational bodies"
    ],
    "explanation": "Enrico Fermi famously asked: \"Where is everybody?\" Given billions of Sun-like stars and habitable planets in our galaxy, intelligent life should have colonized the galaxy by now.",
    "tip": "Fermi Paradox: \"Where is everybody?\" (High probability vs zero contact).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-101",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-102",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "18 Ω",
      "2 Ω",
      "9 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-103",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Kilowatt-hour (kWh) or \"Unit\"",
      "Watt-second"
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-104",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Double Displacement Reaction",
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-105",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-106",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Chlorine",
      "Iodine",
      "Bromine (Br)",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-107",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Carbon monoxide",
      "Propane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-108",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-109",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-110",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-111",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-112",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Dobson Units (DU)",
      "Torr",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-113",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-114",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-115",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-116",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-117",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Baking solution",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-118",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Mercury",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-119",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Methane (CH₄, up to 75%)",
      "Butane",
      "Carbon monoxide",
      "Propane"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-120",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Xylem",
      "Phloem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-121",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-122",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-123",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-124",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-125",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-126",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-127",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-128",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Double Displacement Reaction",
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-129",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-130",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-131",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Propane",
      "Methane (CH₄, up to 75%)",
      "Butane",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-132",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Collenchyma",
      "Xylem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-133",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-134",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Beriberi",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-135",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-136",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-137",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-138",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-139",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-140",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-141",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-142",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Mercury",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-143",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-144",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Parenchyma",
      "Phloem"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-145",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin D (Calciferol)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-146",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Goitre",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-147",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-148",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Decibels",
      "Torr",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-149",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-150",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-151",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-152",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-153",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-154",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Iodine",
      "Chlorine",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-155",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-156",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-157",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-158",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Rickets",
      "Goitre",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-159",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-160",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Decibels",
      "Pascals",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-161",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-162",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-163",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-164",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-165",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Aqua Regia (Royal Water)",
      "Oleum",
      "Vitriol",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-166",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Bromine (Br)",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-167",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Methane (CH₄, up to 75%)",
      "Propane",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-168",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-169",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-170",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Beriberi",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-171",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-172",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-173",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-174",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-175",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-176",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-177",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-178",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Iodine",
      "Chlorine",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-179",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Methane (CH₄, up to 75%)",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-180",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Parenchyma",
      "Phloem"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-181",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-182",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Beriberi",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-183",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-184",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-185",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-186",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "2 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-187",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-188",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Double Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-189",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-190",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Bromine (Br)",
      "Mercury",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-191",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Carbon monoxide",
      "Propane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-192",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Parenchyma",
      "Phloem",
      "Xylem",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-193",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-194",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-195",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-196",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Decibels",
      "Dobson Units (DU)",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-197",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-198",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "9 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-199",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-200",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Double Displacement Reaction",
      "Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-201",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-202",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Mercury",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-203",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Carbon monoxide",
      "Propane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-204",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-205",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-206",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Goitre",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-207",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-208",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Dobson Units (DU)",
      "Torr",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-209",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-210",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-211",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-212",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Decomposition Reaction (Thermal Decomposition)",
      "Combination Reaction",
      "Double Displacement Reaction",
      "Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-213",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-214",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Chlorine",
      "Bromine (Br)",
      "Iodine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-215",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-216",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-217",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-218",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-219",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-220",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Dobson Units (DU)",
      "Torr",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-221",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-222",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-223",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Kilowatt-hour (kWh) or \"Unit\"",
      "Watt-second"
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-224",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-225",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-226",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-227",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-228",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-229",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-230",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-231",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-232",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-233",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-234",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "18 Ω",
      "2 Ω",
      "9 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-235",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-236",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Double Displacement Reaction",
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-237",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-238",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Mercury",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-239",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Carbon monoxide",
      "Propane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-240",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-241",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-242",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-243",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-244",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Decibels",
      "Pascals",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-245",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-246",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "9 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-247",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-248",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Double Displacement Reaction",
      "Combination Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-249",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Baking solution",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-250",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Chlorine",
      "Iodine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-251",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Methane (CH₄, up to 75%)",
      "Propane",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-252",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-253",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-254",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Goitre",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-255",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-256",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Torr",
      "Pascals",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-257",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-258",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-259",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-260",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-261",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-262",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Chlorine",
      "Mercury",
      "Iodine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-263",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-264",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Parenchyma",
      "Phloem"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-265",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-266",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Beriberi",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-267",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-268",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-269",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-270",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "18 Ω",
      "2 Ω",
      "9 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-271",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-272",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Displacement Reaction",
      "Double Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-273",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Vitriol",
      "Oleum",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-274",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Mercury",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-275",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-276",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-277",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-278",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Goitre",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-279",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-280",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-281",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-282",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "9 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-283",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-284",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-285",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-286",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Bromine (Br)",
      "Mercury",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-287",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Methane (CH₄, up to 75%)",
      "Propane",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-288",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-289",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-290",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Goitre",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-291",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-292",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Decibels",
      "Dobson Units (DU)",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-293",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-294",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-295",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-296",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Double Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-297",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-298",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Chlorine",
      "Iodine",
      "Mercury",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-299",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Methane (CH₄, up to 75%)",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-300",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-301",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin D (Calciferol)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-302",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Rickets",
      "Goitre",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-303",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-304",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-305",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-306",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-307",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-308",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-309",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Vitriol",
      "Oleum",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-310",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Iodine",
      "Chlorine",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-311",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Methane (CH₄, up to 75%)",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-312",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-313",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-314",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Goitre",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-315",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-316",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Dobson Units (DU)",
      "Pascals",
      "Torr"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-317",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-318",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-319",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-320",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Decomposition Reaction (Thermal Decomposition)",
      "Combination Reaction",
      "Double Displacement Reaction",
      "Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-321",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-322",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Chlorine",
      "Bromine (Br)",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-323",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-324",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-325",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-326",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Rickets",
      "Goitre",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-327",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-328",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-329",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-330",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-331",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-332",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-333",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Aqua Regia (Royal Water)",
      "Vitriol",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-334",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Bromine (Br)",
      "Iodine",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-335",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Carbon monoxide",
      "Propane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-336",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-337",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-338",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Goitre",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-339",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-340",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-341",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-342",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-343",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-344",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-345",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-346",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-347",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-348",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Xylem",
      "Parenchyma",
      "Phloem",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-349",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-350",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-351",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "Only 10% (90% is lost as metabolic heat and respiration)",
      "100%",
      "25%",
      "50%"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-352",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-353",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-354",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-355",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-356",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Double Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-357",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-358",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Chlorine",
      "Iodine",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-359",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Carbon monoxide",
      "Propane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-360",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-361",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-362",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-363",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-364",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Torr",
      "Pascals",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-365",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-366",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "2 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-367",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-368",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-369",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Aqua Regia (Royal Water)",
      "Baking solution",
      "Vitriol",
      "Oleum"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-370",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Mercury",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-371",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Methane (CH₄, up to 75%)",
      "Butane",
      "Propane",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-372",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-373",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-374",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-375",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-376",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-377",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-378",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "9 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-379",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-380",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Double Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-381",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-382",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-383",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-384",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-385",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-386",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Beriberi",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-387",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-388",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Decibels",
      "Dobson Units (DU)",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-389",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-390",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-391",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-392",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Combination Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-393",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-394",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Bromine (Br)",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-395",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Propane",
      "Butane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-396",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Parenchyma",
      "Phloem"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-397",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-398",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Goitre",
      "Pellagra",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-399",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-400",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-401",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-402",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-403",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Kilowatt-hour (kWh) or \"Unit\"",
      "Watt-second"
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-404",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Double Displacement Reaction",
      "Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-405",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Baking solution",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-406",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Iodine",
      "Chlorine",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-407",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Methane (CH₄, up to 75%)",
      "Butane",
      "Carbon monoxide",
      "Propane"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-408",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Collenchyma",
      "Xylem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-409",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-410",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Goitre",
      "Rickets"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-411",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-412",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-413",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-414",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "18 Ω",
      "2 Ω",
      "9 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-415",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-416",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Decomposition Reaction (Thermal Decomposition)",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-417",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Aqua Regia (Royal Water)",
      "Baking solution",
      "Vitriol"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-418",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Chlorine",
      "Iodine",
      "Bromine (Br)",
      "Mercury"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-419",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-420",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-421",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-422",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-423",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-424",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Dobson Units (DU)",
      "Pascals",
      "Torr"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-425",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-426",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "9 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-427",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-428",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-429",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Baking solution",
      "Vitriol",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-430",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Chlorine",
      "Iodine",
      "Mercury",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-431",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Methane (CH₄, up to 75%)",
      "Carbon monoxide"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-432",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Xylem",
      "Parenchyma",
      "Phloem",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-433",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-434",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-435",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-436",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-437",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-438",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-439",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-440",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-441",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Baking solution",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-442",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Bromine (Br)",
      "Mercury",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-443",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Butane",
      "Propane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-444",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Phloem",
      "Xylem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-445",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-446",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Rickets",
      "Beriberi",
      "Pellagra",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-447",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-448",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-449",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ampere (A)",
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-450",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "4.5 Ω",
      "18 Ω",
      "2 Ω",
      "9 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-451",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-452",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Combination Reaction",
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-453",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Aqua Regia (Royal Water)",
      "Oleum",
      "Vitriol",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-454",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Iodine",
      "Chlorine",
      "Mercury",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-455",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-456",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-457",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-458",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-459",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)",
      "100%"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-460",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Pascals",
      "Torr",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-461",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-462",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "9 Ω",
      "18 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-463",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-464",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)",
      "Double Displacement Reaction"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-465",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Oleum",
      "Vitriol",
      "Aqua Regia (Royal Water)",
      "Baking solution"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-466",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Chlorine",
      "Bromine (Br)",
      "Iodine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-467",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-468",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Phloem",
      "Xylem",
      "Parenchyma",
      "Collenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-469",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin D (Calciferol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-470",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-471",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "100%",
      "25%",
      "50%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-472",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Decibels",
      "Torr",
      "Pascals",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-473",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-474",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "2 Ω",
      "4.5 Ω",
      "9 Ω",
      "18 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-475",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Ampere-hour",
      "Joule",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-476",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Combination Reaction",
      "Double Displacement Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-477",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Baking solution",
      "Vitriol",
      "Oleum",
      "Aqua Regia (Royal Water)"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-478",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Mercury",
      "Iodine",
      "Chlorine",
      "Bromine (Br)"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-479",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Carbon monoxide",
      "Propane",
      "Butane",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-480",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Parenchyma",
      "Phloem"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-481",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)",
      "Vitamin A (Retinol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-482",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Goitre",
      "Rickets",
      "Beriberi",
      "Pellagra"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-483",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-484",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Pascals",
      "Decibels",
      "Dobson Units (DU)"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-485",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Volt (V)",
      "Watt (W)",
      "Ohm (Ω)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-486",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "2 Ω",
      "9 Ω",
      "4.5 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-487",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-488",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-489",
    "categoryId": "science",
    "question": "What is the mixture of concentrated Hydrochloric acid and concentrated Nitric acid in the ratio 3:1 called that can dissolve noble metals like Gold and Platinum?",
    "answer": "Aqua Regia (Royal Water)",
    "options": [
      "Aqua Regia (Royal Water)",
      "Baking solution",
      "Oleum",
      "Vitriol"
    ],
    "explanation": "Aqua Regia is a fresh mixture of 3 parts concentrated HCl and 1 part concentrated HNO₃.",
    "tip": "Aqua Regia = 3 HCl : 1 HNO₃.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-490",
    "categoryId": "science",
    "question": "Which non-metal is a liquid at normal room temperature?",
    "answer": "Bromine (Br)",
    "options": [
      "Bromine (Br)",
      "Iodine",
      "Mercury",
      "Chlorine"
    ],
    "explanation": "Bromine is the only non-metal that exists as a liquid at standard temperature and pressure. (Mercury is the only liquid metal).",
    "tip": "Liquid metal = Mercury; Liquid non-metal = Bromine.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-491",
    "categoryId": "science",
    "question": "What is the primary flammable hydrocarbon gas constituent of Biogas (Gobar Gas)?",
    "answer": "Methane (CH₄, up to 75%)",
    "options": [
      "Propane",
      "Butane",
      "Carbon monoxide",
      "Methane (CH₄, up to 75%)"
    ],
    "explanation": "Biogas produced by anaerobic digestion contains 55–75% methane (CH₄) and 25–45% CO₂.",
    "tip": "Biogas is primarily Methane (CH₄).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-492",
    "categoryId": "science",
    "question": "In green plants, which specialized vascular tissue is responsible for the unidirectional upward transport of water and dissolved minerals from roots to leaves?",
    "answer": "Xylem",
    "options": [
      "Collenchyma",
      "Xylem",
      "Phloem",
      "Parenchyma"
    ],
    "explanation": "Xylem vessels and tracheids transport water and minerals unidirectionally driven by transpiration pull. Phloem transports food (sucrose).",
    "tip": "Xylem = Water up; Phloem = Food both ways.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-493",
    "categoryId": "science",
    "question": "Deficiency of which vitamin causes \"Scurvy\", characterized by bleeding gums and delayed wound healing?",
    "answer": "Vitamin C (Ascorbic Acid)",
    "options": [
      "Vitamin A (Retinol)",
      "Vitamin C (Ascorbic Acid)",
      "Vitamin K (Phylloquinone)",
      "Vitamin D (Calciferol)"
    ],
    "explanation": "Vitamin C is essential for collagen synthesis; its deficiency leads to scurvy.",
    "tip": "Vitamin C deficiency = Scurvy (bleeding gums).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-494",
    "categoryId": "science",
    "question": "Deficiency of Vitamin D in growing children leads to which softening bone deformity disease?",
    "answer": "Rickets",
    "options": [
      "Beriberi",
      "Pellagra",
      "Rickets",
      "Goitre"
    ],
    "explanation": "Vitamin D promotes calcium absorption; deficiency causes rickets in children and osteomalacia in adults.",
    "tip": "Vitamin D deficiency = Rickets.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-495",
    "categoryId": "science",
    "question": "According to Lindeman's 10% Law of Energy Transfer in an ecosystem food chain, how much energy is transferred from one trophic level to the next higher level?",
    "answer": "Only 10% (90% is lost as metabolic heat and respiration)",
    "options": [
      "25%",
      "50%",
      "100%",
      "Only 10% (90% is lost as metabolic heat and respiration)"
    ],
    "explanation": "Raymond Lindeman (1942) showed that on average only about 10% of energy is fixed into new biomass at each successive trophic step.",
    "tip": "10% Law = Only 10% energy moves to next trophic level.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-496",
    "categoryId": "science",
    "question": "The thickness of the protective stratospheric ozone layer is measured in which scientific units?",
    "answer": "Dobson Units (DU)",
    "options": [
      "Torr",
      "Decibels",
      "Dobson Units (DU)",
      "Pascals"
    ],
    "explanation": "Ozone layer concentration is measured in Dobson Units (DU); 1 DU corresponds to 0.01 mm thickness at standard STP.",
    "tip": "Ozone layer measured in Dobson Units (DU).",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-497",
    "categoryId": "science",
    "question": "What is the SI unit of electric potential difference (voltage)?",
    "answer": "Volt (V)",
    "options": [
      "Ohm (Ω)",
      "Volt (V)",
      "Watt (W)",
      "Ampere (A)"
    ],
    "explanation": "Voltage or electric potential difference is measured in Volts (1 Volt = 1 Joule / 1 Coulomb).",
    "tip": "Voltage = Volts (V); Current = Amperes (A).",
    "difficulty": "beginner"
  },
  {
    "id": "sci-498",
    "categoryId": "science",
    "question": "Two resistors of 6 Ω and 3 Ω are connected in PARALLEL. What is their equivalent resistance?",
    "answer": "2 Ω",
    "options": [
      "18 Ω",
      "4.5 Ω",
      "2 Ω",
      "9 Ω"
    ],
    "explanation": "In parallel: 1/Rp = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2. Therefore Rp = 2 Ω.",
    "tip": "Parallel resistors: 1/Rp = 1/R1 + 1/R2.",
    "difficulty": "intermediate"
  },
  {
    "id": "sci-499",
    "categoryId": "science",
    "question": "What is the commercial unit of electrical energy consumed by domestic appliances?",
    "answer": "Kilowatt-hour (kWh) or \"Unit\"",
    "options": [
      "Joule",
      "Ampere-hour",
      "Watt-second",
      "Kilowatt-hour (kWh) or \"Unit\""
    ],
    "explanation": "1 commercial unit = 1 kWh = 1,000 Watts × 3,600 seconds = 3.6 × 10⁶ Joules.",
    "tip": "1 Unit = 1 kWh = 3.6 × 10⁶ Joules.",
    "difficulty": "beginner"
  },
  {
    "id": "sci-500",
    "categoryId": "science",
    "question": "Which chemical reaction involves a single substance breaking down into two or more simpler substances upon heating?",
    "answer": "Decomposition Reaction (Thermal Decomposition)",
    "options": [
      "Displacement Reaction",
      "Double Displacement Reaction",
      "Combination Reaction",
      "Decomposition Reaction (Thermal Decomposition)"
    ],
    "explanation": "Thermal decomposition breaks a single reactant into multiple products (e.g., 2 FeSO₄ → Fe₂O₃ + SO₂ + SO₃).",
    "tip": "Decomposition = One reactant breaks into simpler parts.",
    "difficulty": "beginner"
  }
];
