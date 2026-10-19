import { Flashcard } from '../../types';
import { ENGLISH_VOCAB_QUESTIONS } from './englishVocab';

export const GRAMMAR_QUESTIONS: Flashcard[] = [
  ...ENGLISH_VOCAB_QUESTIONS,
  {
    "id": "gram-1",
    "categoryId": "grammar",
    "question": "Identify the sentence with correct subject-verb agreement:",
    "answer": "Neither the teacher nor the students were in the classroom.",
    "options": [
      "Neither the teacher nor the students were in the classroom.",
      "Neither the teacher nor the students was in the classroom.",
      "Neither the students nor the teacher were in the classroom.",
      "Neither of the students are ready for the test."
    ],
    "explanation": "With correlative conjunctions (\"neither... nor\", \"either... or\"), the verb agrees with the subject closest to it (\"students were\").",
    "tip": "Proximity rule: The verb agrees with the subject adjacent to it.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-2",
    "categoryId": "grammar",
    "question": "Which of the following sentences correctly employs the Subjunctive Mood?",
    "answer": "I wish I were capable of flight.",
    "options": [
      "I wish I were capable of flight.",
      "I wish I was capable of flight.",
      "If he was here, he would agree.",
      "I demand that she is present immediately."
    ],
    "explanation": "The subjunctive mood expresses wishes, hypotheticals, or conditions contrary to fact. In English, \"were\" is used for all persons (including I/he/she/it).",
    "tip": "Hypothetical contrary-to-fact: Use \"were\", not \"was\".",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-3",
    "categoryId": "grammar",
    "question": "What grammatical error is present in: \"Walking down the street, the trees looked vibrant\"?",
    "answer": "Dangling Modifier",
    "options": [
      "Dangling Modifier",
      "Comma Splice",
      "Split Infinitive",
      "Faulty Parallelism"
    ],
    "explanation": "The participial phrase \"Walking down the street\" modifies the subject that immediately follows (\"the trees\"), implying the trees were walking down the street.",
    "tip": "A modifier must clearly and logically attach to the adjacent actor.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-4",
    "categoryId": "grammar",
    "question": "What is an \"Oxford Comma\" (serial comma)?",
    "answer": "The comma placed immediately before the coordinating conjunction in a list of three or more items",
    "options": [
      "The comma placed immediately before the coordinating conjunction in a list of three or more items",
      "The comma used to separate an introductory clause from a main clause",
      "A comma replacing a semicolon between two independent clauses",
      "The punctuation mark used inside direct quotation marks in British English"
    ],
    "explanation": "Example: \"apples, oranges, and bananas\". The comma before \"and\" resolves ambiguity (e.g., \"We invited the strippers, JFK and Stalin\").",
    "tip": "Item A, Item B, [Oxford Comma] and Item C.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-5",
    "categoryId": "grammar",
    "question": "Choose the sentence written in the Passive Voice:",
    "answer": "The Nobel prize was received by the lead astrophysicist.",
    "options": [
      "The Nobel prize was received by the lead astrophysicist.",
      "The astrophysicist received the Nobel prize yesterday.",
      "The committee awarded the medal with great enthusiasm.",
      "She published three ground-breaking research papers."
    ],
    "explanation": "In the passive voice, the target of the action (the Nobel prize) becomes the grammatical subject, and the actor is placed in a prepositional phrase (\"by ...\").",
    "tip": "Form: Subject + form of \"to be\" + Past Participle (+ by agent).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-6",
    "categoryId": "grammar",
    "question": "When should \"whom\" be used instead of \"who\"?",
    "answer": "When the pronoun acts as the object of a verb or preposition",
    "options": [
      "When the pronoun acts as the object of a verb or preposition",
      "When the pronoun serves as the grammatical subject of the clause",
      "Whenever introducing an essential defining relative clause",
      "Only in archaic formal British literature"
    ],
    "explanation": "Substitute \"he/she\" vs \"him/her\": if \"him/her\" fits, use \"whom\" (\"To whom did you give the book?\" -> \"I gave it to him\").",
    "tip": "Who = He/She (subject). Whom = Him/Her (object).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-7",
    "categoryId": "grammar",
    "question": "Which sentence correctly uses apostrophes for possession?",
    "answer": "The women's rights conference was held at the Joneses' residence.",
    "options": [
      "The women's rights conference was held at the Joneses' residence.",
      "The womens' rights conference was held at the Jones's residence.",
      "The women's rights conference was held at the Jones' residence.",
      "The womens rights conference was held at the Jone's residence."
    ],
    "explanation": "\"Women\" is already plural, so add 's (\"women's\"). For the plural family name \"the Joneses\", plural possessive ends with an apostrophe (\"Joneses'\").",
    "tip": "Plural nouns not ending in S take 's; plural nouns ending in S take only '.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-8",
    "categoryId": "grammar",
    "question": "What is a \"Comma Splice\"?",
    "answer": "Joining two independent clauses with only a comma and no coordinating conjunction",
    "options": [
      "Joining two independent clauses with only a comma and no coordinating conjunction",
      "Omitting a comma after an introductory adverbial phrase",
      "Placing a comma between a subject and its main verb",
      "Using a comma instead of quotation marks for dialogue"
    ],
    "explanation": "Two independent clauses cannot be joined by a comma alone; fix with a period, semicolon, or comma + coordinating conjunction (FANBOYS).",
    "tip": "Fix comma splices with: Period, Semicolon, or Comma + FANBOYS.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-9",
    "categoryId": "grammar",
    "question": "Which coordinating conjunctions form the acronym \"FANBOYS\"?",
    "answer": "For, And, Nor, But, Or, Yet, So",
    "options": [
      "For, And, Nor, But, Or, Yet, So",
      "From, Along, Neither, Because, Over, Yield, Since",
      "Few, Although, None, Both, Other, Yes, Soon",
      "Finally, Also, Never, Besides, Only, Therefore, Still"
    ],
    "explanation": "These seven coordinating conjunctions join words, phrases, and independent clauses (with a comma preceding when joining independent clauses).",
    "tip": "FANBOYS: For, And, Nor, But, Or, Yet, So.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-10",
    "categoryId": "grammar",
    "question": "Identify the sentence with correct parallel structure:",
    "answer": "She loves hiking, swimming, and riding bicycles.",
    "options": [
      "She loves hiking, swimming, and riding bicycles.",
      "She loves hiking, to swim, and riding bicycles.",
      "She loves to hike, swimming, and bicycle rides.",
      "She loves hiking, swimming, and to ride bicycles."
    ],
    "explanation": "Parallelism requires using the same grammatical pattern for items in a series (all gerunds: hiking, swimming, riding).",
    "tip": "Parallelism: Keep verb forms and structures consistent in lists.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-11",
    "categoryId": "grammar",
    "question": "What is a \"Split Infinitive\"?",
    "answer": "Inserting an adverb or phrase between the particle \"to\" and the base verb (e.g. \"to boldly go\")",
    "options": [
      "Inserting an adverb or phrase between the particle \"to\" and the base verb (e.g. \"to boldly go\")",
      "Splitting a compound sentence with an exclamation mark",
      "Using two auxiliary verbs in the same verb phrase",
      "Placing an adjective after the noun it modifies"
    ],
    "explanation": "While historically discouraged by 19th-century Latin-influenced prescriptivists, modern style guides accept split infinitives when they sound natural and clear.",
    "tip": "Split infinitive: \"to [word] verb\" (e.g. \"to boldly go\").",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-12",
    "categoryId": "grammar",
    "question": "Which sentence correctly demonstrates the difference between \"its\" and \"it's\"?",
    "answer": "It's obvious that the cat licked its paws.",
    "options": [
      "It's obvious that the cat licked its paws.",
      "Its obvious that the cat licked it's paws.",
      "It's obvious that the cat licked it's paws.",
      "Its obvious that the cat licked its paws."
    ],
    "explanation": "\"It's\" is the contraction for \"it is\" or \"it has\". \"Its\" is the possessive determiner (like \"his\" or \"her\"), which takes no apostrophe.",
    "tip": "It's = It is. Its = Possessive (belonging to it).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-13",
    "categoryId": "grammar",
    "question": "When should \"fewer\" be used instead of \"less\"?",
    "answer": "\"Fewer\" is used for countable nouns; \"less\" is used for singular uncountable/mass nouns",
    "options": [
      "\"Fewer\" is used for countable nouns; \"less\" is used for singular uncountable/mass nouns",
      "\"Fewer\" applies to time and money; \"less\" applies to physical objects",
      "\"Less\" is used strictly in formal legal documents",
      "\"Fewer\" is used only when referring to numbers under ten"
    ],
    "explanation": "Use \"fewer\" for items you can count individually (\"fewer apples, fewer calories\"); use \"less\" for bulk quantities (\"less water, less time\").",
    "tip": "Fewer = Countable items. Less = Uncountable bulk/mass.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-14",
    "categoryId": "grammar",
    "question": "What is the grammatical error in: \"Each of the doctors brought their own stethoscope\"?",
    "answer": "Pronoun-antecedent disagreement in number (\"each\" is singular, \"their\" is plural)",
    "options": [
      "Pronoun-antecedent disagreement in number (\"each\" is singular, \"their\" is plural)",
      "Dangling modifier",
      "Misplaced prepositional phrase",
      "Faulty tense sequencing"
    ],
    "explanation": "Indefinite pronouns like \"each\", \"everyone\", and \"nobody\" are grammatically singular. Traditionally: \"his or her stethoscope\" (though singular \"their\" is increasingly accepted in casual modern usage).",
    "tip": "Traditional grammar: \"Each\" is singular and requires a singular pronoun.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-15",
    "categoryId": "grammar",
    "question": "What is a \"Gerund\"?",
    "answer": "A verb form ending in \"-ing\" that functions as a noun in a sentence",
    "options": [
      "A verb form ending in \"-ing\" that functions as a noun in a sentence",
      "A past participle used exclusively as an adverb",
      "An auxiliary verb that indicates conditional certainty",
      "A noun phrase placed between dashes"
    ],
    "explanation": "In \"Swimming is great exercise\", \"swimming\" is a gerund serving as the subject of the sentence.",
    "tip": "Gerund = Verb + \"-ing\" behaving as a Noun.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-16",
    "categoryId": "grammar",
    "question": "When a noun or pronoun precedes a gerund, what case should it ideally take in formal English?",
    "answer": "Possessive case (e.g. \"I appreciated his coming to the meeting\")",
    "options": [
      "Possessive case (e.g. \"I appreciated his coming to the meeting\")",
      "Objective case (e.g. \"I appreciated him coming\")",
      "Nominative subject case exclusively",
      "Vocative direct address case"
    ],
    "explanation": "Because a gerund is a noun, it takes a possessive determiner: \"his singing\", \"Maria's winning\", not \"him singing\" or \"Maria winning\".",
    "tip": "Use possessive before a gerund: \"appreciate your helping\" (not \"you helping\").",
    "difficulty": "advanced"
  },
  {
    "id": "gram-17",
    "categoryId": "grammar",
    "question": "Which of the following is an example of an \"Appositive\"?",
    "answer": "\"My brother, an accomplished architect, designed this museum.\"",
    "options": [
      "\"My brother, an accomplished architect, designed this museum.\"",
      "\"Although he was tired, he finished the race.\"",
      "\"She walked slowly because the ice was slippery.\"",
      "\"The wind blew fiercely through the tall pines.\""
    ],
    "explanation": "An appositive is a noun or noun phrase that renames, identifies, or explains the adjacent noun (\"an accomplished architect\" renames \"My brother\").",
    "tip": "Appositive: A noun phrase placed alongside another to rename or explain it.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-18",
    "categoryId": "grammar",
    "question": "What is the difference between \"affect\" and \"effect\" in their most common usages?",
    "answer": "\"Affect\" is usually a verb meaning to influence; \"effect\" is usually a noun meaning a result",
    "options": [
      "\"Affect\" is usually a verb meaning to influence; \"effect\" is usually a noun meaning a result",
      "\"Effect\" is a verb meaning to emotionalize; \"affect\" is a noun meaning a cause",
      "\"Affect\" applies only to physical weather; \"effect\" applies to medicine",
      "Both words are interchangeable in modern American English"
    ],
    "explanation": "Example: \"The storm affected (verb) the power grid, and the effect (noun) was widespread blackouts.\" (Note: \"effect\" can be a verb meaning to bring about change; \"affect\" can be a psychology noun).",
    "tip": "RAVEN: Remember, Affect is Verb, Effect is Noun.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-19",
    "categoryId": "grammar",
    "question": "What is a \"Run-on Sentence\" (Fused Sentence)?",
    "answer": "Two or more independent clauses joined together with no punctuation or coordinating conjunction between them",
    "options": [
      "Two or more independent clauses joined together with no punctuation or coordinating conjunction between them",
      "A very long sentence containing five or more dependent clauses",
      "A sentence that begins with an adverbial prepositional phrase",
      "A compound sentence that ends with an exclamation point"
    ],
    "explanation": "Length does not make a sentence a run-on; joining two complete thoughts without proper punctuation or conjunctions does.",
    "tip": "Fused/Run-on: Two independent clauses smashed together with zero punctuation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-20",
    "categoryId": "grammar",
    "question": "Which punctuation mark is properly used to link two closely related independent clauses without a coordinating conjunction?",
    "answer": "Semicolon (;)",
    "options": [
      "Semicolon (;)",
      "Comma (,)",
      "Hyphen (-)",
      "Forward slash (/)"
    ],
    "explanation": "A semicolon connects two complete independent sentences that share close logical continuity: \"The storm was fierce; our power remained intact.\"",
    "tip": "Semicolon joins two related independent clauses.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-21",
    "categoryId": "grammar",
    "question": "When is a Colon (:) correctly used in formal grammar?",
    "answer": "After a complete independent clause to introduce a list, quote, explanation, or elaboration",
    "options": [
      "After a complete independent clause to introduce a list, quote, explanation, or elaboration",
      "Between a preposition and its object in a list",
      "Between a transitive verb and its direct object",
      "To connect two unrelated sentence fragments"
    ],
    "explanation": "What precedes a colon must be a grammatically complete independent clause: \"He had only one objective: to win the championship.\"",
    "tip": "A complete independent clause must precede a colon.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-22",
    "categoryId": "grammar",
    "question": "What is the difference between a Hyphen (-) and an Em Dash (—)?",
    "answer": "A hyphen joins compound words; an em dash creates an emphatic break or parenthetical interruption in thought",
    "options": [
      "A hyphen joins compound words; an em dash creates an emphatic break or parenthetical interruption in thought",
      "An em dash joins compound numbers under 100; a hyphen introduces dialogue",
      "A hyphen indicates omitted letters in contractions",
      "Both punctuation marks are identical in typography"
    ],
    "explanation": "Hyphens connect words (\"well-known author\", \"sugar-free\"). Em dashes set off dramatic interruptions or appositives (\"She had one true love—physics\").",
    "tip": "Hyphen connects words; Em dash separates thoughts.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-23",
    "categoryId": "grammar",
    "question": "What is an \"En Dash\" (–) typically used for?",
    "answer": "To indicate ranges of numbers, dates, or time (e.g. 1914–1918) and connections between equal entities (e.g. London–Paris flight)",
    "options": [
      "To indicate ranges of numbers, dates, or time (e.g. 1914–1918) and connections between equal entities (e.g. London–Paris flight)",
      "To replace question marks in rhetorical questions",
      "To capitalize proper nouns in title case headlines",
      "To separate run-on sentences in place of semicolons"
    ],
    "explanation": "Slightly longer than a hyphen but shorter than an em dash, the en dash represents \"to\" or \"through\" in numerical and chronological spans.",
    "tip": "En dash = Number/date ranges (pages 45–67).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-24",
    "categoryId": "grammar",
    "question": "Which of the following sentences correctly distinguishes \"that\" vs \"which\"?",
    "answer": "The painting that hung in the hallway was stolen, but the sculpture, which was in the garden, was untouched.",
    "options": [
      "The painting that hung in the hallway was stolen, but the sculpture, which was in the garden, was untouched.",
      "The painting which hung in the hallway was stolen, but the sculpture that was in the garden was untouched.",
      "The painting that hung in the hallway, was stolen, but the sculpture which was in the garden was untouched.",
      "The painting which hung in the hallway was stolen, but the sculpture, that was in the garden, was untouched."
    ],
    "explanation": "\"That\" introduces restrictive (essential) clauses without commas; \"which\" introduces non-restrictive (non-essential) clauses set off by commas.",
    "tip": "\"That\" = Essential (no commas). \"Which\" = Extra info (set off with commas).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-25",
    "categoryId": "grammar",
    "question": "What is a \"Restrictive Clause\"?",
    "answer": "A clause that provides essential information necessary to identify the noun it modifies, not set off by commas",
    "options": [
      "A clause that provides essential information necessary to identify the noun it modifies, not set off by commas",
      "A clause that adds optional parenthetical commentary surrounded by commas",
      "A clause that restricts the sentence from containing auxiliary verbs",
      "A clause that can stand alone as a complete sentence"
    ],
    "explanation": "In \"Students who study diligently pass exams\", \"who study diligently\" restricts the subject to a specific group; removing it alters the fundamental meaning.",
    "tip": "Restrictive = Essential to meaning (NO commas).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-26",
    "categoryId": "grammar",
    "question": "What is a \"Non-Restrictive Clause\"?",
    "answer": "A clause that adds supplementary, non-essential information and is enclosed by commas",
    "options": [
      "A clause that adds supplementary, non-essential information and is enclosed by commas",
      "A clause that cannot contain adjectives or adverbs",
      "A clause that changes the grammatical subject of the predicate",
      "A clause that serves as the direct object of a linking verb"
    ],
    "explanation": "In \"My oldest sister, who lives in Tokyo, is visiting next week\", the clause provides extra detail but is not required to identify which sister is meant.",
    "tip": "Non-restrictive = Extra bonus detail (enclosed by commas).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-27",
    "categoryId": "grammar",
    "question": "Choose the correct pronoun: \"Between you and ____, the proposal has flaws.\"",
    "answer": "me",
    "options": [
      "me",
      "I",
      "myself",
      "we"
    ],
    "explanation": "\"Between\" is a preposition, and prepositions require the objective pronoun case (\"between you and me\", not \"between you and I\").",
    "tip": "Prepositions govern objects: \"between you and ME\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-28",
    "categoryId": "grammar",
    "question": "When is a Reflexive Pronoun (e.g. \"myself\", \"himself\") correctly used?",
    "answer": "When the subject and object of the sentence refer to the exact same person or thing",
    "options": [
      "When the subject and object of the sentence refer to the exact same person or thing",
      "As a polite substitute for \"me\" or \"I\" in business emails",
      "Whenever a sentence contains more than two named subjects",
      "Exclusively after coordinating conjunctions like \"and\""
    ],
    "explanation": "Correct: \"I cut myself while cooking.\" Incorrect: \"Please contact John or myself.\" (Should be \"contact John or me\").",
    "tip": "Only use \"-self\" pronouns when the actor and recipient are the same person.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-29",
    "categoryId": "grammar",
    "question": "What is an \"Intensive Pronoun\"?",
    "answer": "A reflexive pronoun used immediately after a noun to emphasize it (e.g. \"The president himself called me\")",
    "options": [
      "A reflexive pronoun used immediately after a noun to emphasize it (e.g. \"The president himself called me\")",
      "A pronoun that expresses strong grammatical anger or negation",
      "A demonstrative pronoun capitalized for rhetorical effect",
      "A relative pronoun that introduces an exclamatory sentence"
    ],
    "explanation": "Unlike reflexive pronouns, intensive pronouns are optional and can be removed without altering the core sentence syntax.",
    "tip": "Intensive pronoun adds rhetorical emphasis: \"The author herself signed the book.\"",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-30",
    "categoryId": "grammar",
    "question": "Identify the sentence with the correct past participle of \"lie\" (to recline):",
    "answer": "He had lain on the sofa for three hours before waking.",
    "options": [
      "He had lain on the sofa for three hours before waking.",
      "He had laid on the sofa for three hours before waking.",
      "He had lied on the sofa for three hours before waking.",
      "He had lay on the sofa for three hours before waking."
    ],
    "explanation": "To recline: Lie, Lay, Lain (intransitive). To place something: Lay, Laid, Laid (transitive, requires an object).",
    "tip": "Lie (recline) -> Lay (past) -> Lain (past participle).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-31",
    "categoryId": "grammar",
    "question": "Identify the sentence with the correct past tense of \"lay\" (to place or put down):",
    "answer": "She laid the keys on the counter yesterday.",
    "options": [
      "She laid the keys on the counter yesterday.",
      "She layed the keys on the counter yesterday.",
      "She lay the keys on the counter yesterday.",
      "She lain the keys on the counter yesterday."
    ],
    "explanation": "Transitive verb \"to lay\" (to place an object) conjugates: Lay, Laid, Laid.",
    "tip": "Lay (place an object) -> Laid (past) -> Laid (past participle).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-32",
    "categoryId": "grammar",
    "question": "What is the past tense and past participle of \"hang\" when referring to execution by a noose?",
    "answer": "Hanged / Hanged",
    "options": [
      "Hanged / Hanged",
      "Hung / Hung",
      "Hanged / Hung",
      "Hang / Hang"
    ],
    "explanation": "Clothing and pictures are \"hung\"; human beings executed by the neck are \"hanged\" in legal and historical terminology.",
    "tip": "Pictures are hung; people are hanged.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-33",
    "categoryId": "grammar",
    "question": "What is a \"Tautology\" in writing and rhetoric?",
    "answer": "Needless repetition of the same idea in different words (e.g. \"frozen ice\", \"free gift\")",
    "options": [
      "Needless repetition of the same idea in different words (e.g. \"frozen ice\", \"free gift\")",
      "A grammatical error where subject and verb disagree in tense",
      "A philosophical argument that lacks empirical premise",
      "The omission of essential punctuation in dialogue"
    ],
    "explanation": "Tautologies produce wordy, redundant prose (e.g. \"PIN number\" [Personal Identification Number number], \"close proximity\").",
    "tip": "Tautology = Unnecessary redundancy (\"revert back\", \"ATM machine\").",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-34",
    "categoryId": "grammar",
    "question": "What is an \"Oxymoron\"?",
    "answer": "A figure of speech in which contradictory terms appear in conjunction (e.g. \"deafening silence\", \"bittersweet\")",
    "options": [
      "A figure of speech in which contradictory terms appear in conjunction (e.g. \"deafening silence\", \"bittersweet\")",
      "An insulting grammatical critique written by an editor",
      "A sentence containing two mutually exclusive relative clauses",
      "A metaphor comparing human traits to inanimate machinery"
    ],
    "explanation": "Derived from Greek meaning \"sharp-dull\", oxymorons create dramatic paradox or poetic irony.",
    "tip": "Oxymoron = Contradictory paired words (\"open secret\", \"jumbo shrimp\").",
    "difficulty": "beginner"
  },
  {
    "id": "gram-35",
    "categoryId": "grammar",
    "question": "What is a \"Euphemism\"?",
    "answer": "A mild or indirect word or expression substituted for one considered harsh, blunt, or unpleasant",
    "options": [
      "A mild or indirect word or expression substituted for one considered harsh, blunt, or unpleasant",
      "A literary technique where words mimic the natural sounds they describe",
      "A rhythmic repetition of vowel sounds within poetic lines",
      "A direct quotation formatted with italics rather than quotation marks"
    ],
    "explanation": "Examples: \"passed away\" for died, \"downsizing\" for firing workers, \"letting someone go\".",
    "tip": "Euphemism = Softer polite phrase for something harsh.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-36",
    "categoryId": "grammar",
    "question": "What is \"Onomatopoeia\"?",
    "answer": "The naming of a thing or action by a vocal imitation of the sound associated with it (e.g. \"buzz\", \"hiss\")",
    "options": [
      "The naming of a thing or action by a vocal imitation of the sound associated with it (e.g. \"buzz\", \"hiss\")",
      "The attribution of human feelings to nature and weather",
      "The arrangement of words in order of increasing rhetorical power",
      "The inversion of normal syntactic subject-verb word order"
    ],
    "explanation": "Words like \"sizzle\", \"cuckoo\", \"bang\", and \"splash\" phonetically mimic the auditory events they denote.",
    "tip": "Onomatopoeia = Word sounds like the noise it makes (buzz, pop, crash).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-37",
    "categoryId": "grammar",
    "question": "What is \"Alliteration\"?",
    "answer": "The repetition of identical initial consonant sounds in successive or closely connected words",
    "options": [
      "The repetition of identical initial consonant sounds in successive or closely connected words",
      "The rhyming of vowel sounds inside stressed syllables",
      "The comparison of two unlike things using \"like\" or \"as\"",
      "The exaggeration of facts for comic or dramatic effect"
    ],
    "explanation": "Example: \"Peter Piper picked a peck of pickled peppers\" or \"Whispering wild winds\".",
    "tip": "Alliteration = Repetition of initial consonant sounds.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-38",
    "categoryId": "grammar",
    "question": "What is \"Assonance\"?",
    "answer": "The repetition of vowel sounds within nearby words without repeating consonants (e.g. \"The rain in Spain falls mainly on the plain\")",
    "options": [
      "The repetition of vowel sounds within nearby words without repeating consonants (e.g. \"The rain in Spain falls mainly on the plain\")",
      "The repetition of consonant sounds at the beginning of words",
      "The harsh discordant mixture of sounds in prose",
      "The pairing of opposite concepts in balanced grammatical phrases"
    ],
    "explanation": "Assonance creates internal rhyme and musical cadence in poetry and rhetoric.",
    "tip": "Assonance = Repetition of internal vowel sounds.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-39",
    "categoryId": "grammar",
    "question": "What is a \"Synecdoche\"?",
    "answer": "A figure of speech in which a part is made to represent the whole, or vice versa (e.g. \"all hands on deck\" for sailors)",
    "options": [
      "A figure of speech in which a part is made to represent the whole, or vice versa (e.g. \"all hands on deck\" for sailors)",
      "An exaggerated statement not intended to be taken literally",
      "The substitution of the name of an attribute for that of the thing meant",
      "A narrative that carries an underlying symbolic moral lesson"
    ],
    "explanation": "Examples: \"hired hands\" (workers), \"boots on the ground\" (soldiers), \"new set of wheels\" (car).",
    "tip": "Synecdoche = A part represents the whole (or vice versa).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-40",
    "categoryId": "grammar",
    "question": "What is \"Metonymy\"?",
    "answer": "A figure of speech where a thing or concept is referred to by the name of something closely associated with it (e.g. \"The White House announced\")",
    "options": [
      "A figure of speech where a thing or concept is referred to by the name of something closely associated with it (e.g. \"The White House announced\")",
      "A figure of speech where a part represents the whole",
      "The comparison of two things using \"like\" or \"as\"",
      "Giving inanimate objects conscious human personalities"
    ],
    "explanation": "Examples: \"The pen is mightier than the sword\" (written word vs military force), \"Wall Street\" for the financial sector.",
    "tip": "Metonymy = Associated concept stands in for the object (The Crown = Monarchy).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-41",
    "categoryId": "grammar",
    "question": "Which of the following sentences correctly uses \"farther\" vs \"further\"?",
    "answer": "We walked farther down the trail to discuss the matter further.",
    "options": [
      "We walked farther down the trail to discuss the matter further.",
      "We walked further down the trail to discuss the matter farther.",
      "We walked further down the trail to discuss the matter further.",
      "We walked farther down the trail to discuss the matter farther."
    ],
    "explanation": "\"Farther\" refers to physical, measurable distance; \"further\" refers to figurative or metaphorical depth, degree, or time.",
    "tip": "Farther = Physical distance. Further = Figurative degree / time.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-42",
    "categoryId": "grammar",
    "question": "Which sentence correctly demonstrates the difference between \"principal\" and \"principle\"?",
    "answer": "The school principal refused to compromise on his ethical principles.",
    "options": [
      "The school principal refused to compromise on his ethical principles.",
      "The school principle refused to compromise on his ethical principals.",
      "The school principal refused to compromise on his ethical principals.",
      "The school principle refused to compromise on his ethical principles."
    ],
    "explanation": "\"Principal\" means the head of a school, main actor, or loan capital. \"Principle\" is a fundamental truth, law, or moral belief.",
    "tip": "Principal = Your pal (person) / main thing. Principle = Moral rule.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-43",
    "categoryId": "grammar",
    "question": "What is a \"Copular Verb\" (Linking Verb)?",
    "answer": "A verb that connects the subject to a subject complement (predicate adjective or noun) rather than showing action",
    "options": [
      "A verb that connects the subject to a subject complement (predicate adjective or noun) rather than showing action",
      "A verb that requires both a direct object and an indirect object",
      "A verb that can never be conjugated in past tense",
      "An auxiliary verb that forms the passive voice"
    ],
    "explanation": "Examples: \"be\", \"seem\", \"appear\", \"look\", \"smell\", \"taste\". In \"The soup tastes delicious\", \"tastes\" links soup to the adjective complement \"delicious\".",
    "tip": "Linking verbs (seem, be, taste, feel) connect subject to adjective/noun.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-44",
    "categoryId": "grammar",
    "question": "Choose the grammatically correct sentence regarding adjective vs adverb after a linking verb:",
    "answer": "She felt bad about missing the birthday celebration.",
    "options": [
      "She felt bad about missing the birthday celebration.",
      "She felt badly about missing the birthday celebration.",
      "She felt poorly about missing the birthday celebration.",
      "She felt badly because her sense of touch was damaged."
    ],
    "explanation": "\"Feel\" is a linking verb connecting to the predicate adjective \"bad\". Saying \"felt badly\" implies her physical tactile sensation is malfunctioning.",
    "tip": "Feel bad (adjective for emotional state); feel badly (adverb for sense of touch).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-45",
    "categoryId": "grammar",
    "question": "What is the \"Past Perfect\" tense used for?",
    "answer": "To describe an action completed before another past action or past point in time",
    "options": [
      "To describe an action completed before another past action or past point in time",
      "To describe an ongoing habit in the present day",
      "To express a hypothetical outcome in the future",
      "To describe an action that happened at an unspecified past moment"
    ],
    "explanation": "Formed with \"had\" + past participle: \"By the time the train arrived, we had waited for two hours.\"",
    "tip": "Past Perfect (had + V3): The \"past of the past\".",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-46",
    "categoryId": "grammar",
    "question": "What is the \"Future Perfect\" tense used for?",
    "answer": "To describe an action that will be completed prior to a specific point in the future",
    "options": [
      "To describe an action that will be completed prior to a specific point in the future",
      "To describe an event that might happen under ideal conditions",
      "To indicate that a past event was completed perfectly",
      "To express a scheduled recurring weekly occurrence"
    ],
    "explanation": "Formed with \"will have\" + past participle: \"By 2030, scientists will have discovered a cure.\"",
    "tip": "Future Perfect: \"will have done\" before a future deadline.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-47",
    "categoryId": "grammar",
    "question": "What is a \"Conditional Sentence Type 3\" (Third Conditional)?",
    "answer": "Expresses an unreal past condition and its hypothetical past result (If + past perfect, would have + past participle)",
    "options": [
      "Expresses an unreal past condition and its hypothetical past result (If + past perfect, would have + past participle)",
      "Expresses a general scientific fact (If + present, present)",
      "Expresses a real future possibility (If + present, will + verb)",
      "Expresses a hypothetical present situation (If + past, would + verb)"
    ],
    "explanation": "Example: \"If I had studied harder, I would have passed the exam.\" Used to express regrets about past outcomes that cannot be changed.",
    "tip": "Third Conditional: \"If had known, would have acted\" (past hypothetical regret).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-48",
    "categoryId": "grammar",
    "question": "What is a \"Mixed Conditional\"?",
    "answer": "A conditional sentence where the time in the if-clause is different from the time in the main clause",
    "options": [
      "A conditional sentence where the time in the if-clause is different from the time in the main clause",
      "A sentence that combines two coordinating conjunctions",
      "A question that combines declarative and imperative syntax",
      "A conditional clause with more than three dependent clauses"
    ],
    "explanation": "Example: \"If I had won the lottery last year (past), I would be wealthy today (present).",
    "tip": "Mixed Conditional combines past action with present consequence.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-49",
    "categoryId": "grammar",
    "question": "Identify the sentence with an error in comparative degrees of comparison:",
    "answer": "She is the most unique pianist in the entire conservatory.",
    "options": [
      "She is the most unique pianist in the entire conservatory.",
      "She is the more talented of the two sisters.",
      "Mount Everest is higher than any other mountain in the world.",
      "Her performance was better than expected."
    ],
    "explanation": "\"Unique\" is an absolute adjective meaning \"one of a kind\"; something cannot be \"more unique\" or \"most unique\" (use \"most unusual\" or simply \"unique\").",
    "tip": "Absolute adjectives (unique, perfect, dead, infinite) cannot take comparative degrees.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-50",
    "categoryId": "grammar",
    "question": "What is a \"Squinting Modifier\" (Two-Way Modifier)?",
    "answer": "An adverb placed between two words or phrases so that it could modify either the preceding or following word",
    "options": [
      "An adverb placed between two words or phrases so that it could modify either the preceding or following word",
      "A modifier that lacks a grammatical subject entirely",
      "An adjective placed at the very end of a sentence",
      "A prepositional phrase placed inside brackets"
    ],
    "explanation": "In \"Cycling frequently improves stamina\", does \"frequently\" modify \"cycling\" (cycling often) or \"improves\" (frequently improves)?",
    "tip": "Squinting modifier: Ambiguous placement looks both ways.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-51",
    "categoryId": "grammar",
    "question": "What is a \"Misplaced Modifier\"?",
    "answer": "A modifier separated too far from the word it modifies, creating unintended humor or ambiguity",
    "options": [
      "A modifier separated too far from the word it modifies, creating unintended humor or ambiguity",
      "A modifier that modifies nothing in the sentence",
      "An adverb that ends in \"-ly\" instead of \"-ing\"",
      "A conjunction placed at the start of a paragraph"
    ],
    "explanation": "In \"She served sandwiches to the children on paper plates\", it sounds like the children were on paper plates; move modifier next to \"sandwiches\".",
    "tip": "Place modifiers directly adjacent to the word they describe.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-52",
    "categoryId": "grammar",
    "question": "What is a \"Cumulative Adjective\" sequence (requiring no commas)?",
    "answer": "Adjectives that build on each other in a specific order of category to modify a noun, cannot be swapped with \"and\"",
    "options": [
      "Adjectives that build on each other in a specific order of category to modify a noun, cannot be swapped with \"and\"",
      "Adjectives of equal rank separated by commas",
      "Adjectives that modify the main verb instead of the noun",
      "Adjectives derived from geographical place names"
    ],
    "explanation": "In \"three large wooden boxes\", quantity -> size -> material follow natural hierarchy; inserting commas or \"and\" sounds unnatural.",
    "tip": "Royal Order of Adjectives: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-53",
    "categoryId": "grammar",
    "question": "What are \"Coordinate Adjectives\" (requiring commas between them)?",
    "answer": "Adjectives of equal importance that independently modify the same noun and can be separated by \"and\" or swapped",
    "options": [
      "Adjectives of equal importance that independently modify the same noun and can be separated by \"and\" or swapped",
      "Adjectives placed in alphabetical order",
      "Adjectives that end in identical suffixes",
      "Adjectives that modify adverbs in the predicate"
    ],
    "explanation": "In \"a warm, sunny day\", you can say \"a sunny, warm day\" or \"a warm and sunny day\"; thus, a comma is required.",
    "tip": "Coordinate adjectives pass the \"and\" test and the \"swap\" test (use a comma).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-54",
    "categoryId": "grammar",
    "question": "When should a hyphen be used in a compound adjective?",
    "answer": "When the compound adjective appears before the noun it modifies (e.g. \"well-known author\")",
    "options": [
      "When the compound adjective appears before the noun it modifies (e.g. \"well-known author\")",
      "Whenever two adjectives appear adjacent in a sentence",
      "Only when the compound ends in the suffix \"-ly\"",
      "When the compound appears in the predicate after a linking verb"
    ],
    "explanation": "Compare: \"a well-known author\" (hyphenated before noun) vs \"the author is well known\" (no hyphen after linking verb).",
    "tip": "Hyphenate compound adjectives BEFORE the noun, not after.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-55",
    "categoryId": "grammar",
    "question": "Should compound adjectives with adverbs ending in \"-ly\" be hyphenated (e.g. \"highly anticipated release\")?",
    "answer": "No, adverbs ending in \"-ly\" are never hyphenated with the following adjective",
    "options": [
      "No, adverbs ending in \"-ly\" are never hyphenated with the following adjective",
      "Yes, all adverbs before adjectives must be hyphenated",
      "Only in formal British academic publishing",
      "Only if the noun is plural"
    ],
    "explanation": "Because \"-ly\" clearly signals an adverb, there is zero risk of misreading it as an adjective modifying the noun; no hyphen is needed.",
    "tip": "NEVER hyphenate \"-ly\" adverbs (\"brightly lit room\", \"newly elected mayor\").",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-56",
    "categoryId": "grammar",
    "question": "What is an \"Ellipsis\" (...) used for in formal writing?",
    "answer": "To indicate the intentional omission of words, phrases, or sentences from quoted material",
    "options": [
      "To indicate the intentional omission of words, phrases, or sentences from quoted material",
      "To indicate that a speaker is shouting loudly",
      "To replace a missing question mark in indirect speech",
      "To separate items in a vertical bulleted list"
    ],
    "explanation": "Consists of three spaced or unspaced periods indicating that omitted text does not alter the fundamental meaning of the quote.",
    "tip": "Ellipsis (...) indicates omitted words from a quotation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-57",
    "categoryId": "grammar",
    "question": "What is the correct punctuation rule for periods and commas inside quotation marks in American English style?",
    "answer": "Periods and commas always go INSIDE the quotation marks",
    "options": [
      "Periods and commas always go INSIDE the quotation marks",
      "Periods and commas always go OUTSIDE the quotation marks",
      "Commas go inside, but periods go outside",
      "Periods go inside only if the quote is longer than ten words"
    ],
    "explanation": "In American English typography, commas and periods are placed inside quotation marks regardless of whether they are part of the original quote.",
    "tip": "American rule: Periods and commas go INSIDE the quotes.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-58",
    "categoryId": "grammar",
    "question": "What is the correct punctuation rule for question marks with quotation marks?",
    "answer": "Inside if the quotation itself is a question; outside if the entire sentence is a question",
    "options": [
      "Inside if the quotation itself is a question; outside if the entire sentence is a question",
      "Always placed inside the quotation marks in all cases",
      "Always placed outside the quotation marks in all cases",
      "Replaced by a comma followed by a question mark at the end"
    ],
    "explanation": "Compare: She asked, \"Are you coming?\" (quote is question -> inside) vs Did he really say, \"I quit\"? (sentence is question -> outside).",
    "tip": "Question mark goes inside if the quote asks; outside if the sentence asks.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-59",
    "categoryId": "grammar",
    "question": "What is an \"Interjection\"?",
    "answer": "A word or phrase used to express sudden emotion or sentiment, grammatically independent from the rest of the sentence",
    "options": [
      "A word or phrase used to express sudden emotion or sentiment, grammatically independent from the rest of the sentence",
      "A coordinating conjunction that introduces a subordinate clause",
      "A verb form that takes two direct objects",
      "A preposition placed at the very end of a sentence"
    ],
    "explanation": "Examples: \"Ouch!\", \"Wow,\", \"Alas!\", \"Hooray!\". Set off by exclamation points for strong emotion or commas for mild emotion.",
    "tip": "Interjection = Spontaneous exclamation expressing emotion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-60",
    "categoryId": "grammar",
    "question": "What is a \"Phrasal Verb\"?",
    "answer": "A verb combined with a preposition or adverb that creates a new idiomatic meaning different from the original verb",
    "options": [
      "A verb combined with a preposition or adverb that creates a new idiomatic meaning different from the original verb",
      "A verb phrase containing more than four auxiliary verbs",
      "A verb conjugated exclusively in the passive voice",
      "A Latin loanword used in legal terminology"
    ],
    "explanation": "Examples: \"give up\" (surrender), \"run out of\" (deplete), \"put off\" (postpone).",
    "tip": "Phrasal verb: Verb + Particle = Idiomatic meaning (e.g. \"turn down\" = reject).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-61",
    "categoryId": "grammar",
    "question": "What is the difference between Transitive and Intransitive verbs?",
    "answer": "Transitive verbs require a direct object to complete their meaning; intransitive verbs do not",
    "options": [
      "Transitive verbs require a direct object to complete their meaning; intransitive verbs do not",
      "Transitive verbs cannot be conjugated in past tense",
      "Intransitive verbs only apply to non-human actors",
      "Transitive verbs are always followed by coordinating conjunctions"
    ],
    "explanation": "Transitive: \"She kicked the ball\" (ball is direct object). Intransitive: \"The baby slept soundly\" (no object needed or possible).",
    "tip": "Transitive takes an object; Intransitive does not.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-62",
    "categoryId": "grammar",
    "question": "What is a \"Ditransitive Verb\"?",
    "answer": "A verb that takes both a direct object and an indirect object (e.g. \"She gave him the book\")",
    "options": [
      "A verb that takes both a direct object and an indirect object (e.g. \"She gave him the book\")",
      "A verb that takes two auxiliary verbs in the progressive aspect",
      "A verb that can be used either transitively or intransitively",
      "A verb that has two identical past participle forms"
    ],
    "explanation": "In \"She gave him the book\", \"the book\" is the direct object (what was given) and \"him\" is the indirect object (recipient).",
    "tip": "Ditransitive: Takes Direct Object + Indirect Object (give, send, show).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-63",
    "categoryId": "grammar",
    "question": "What is an \"Ergative Verb\" (Ambitransitive Verb)?",
    "answer": "A verb that can be used transitively or intransitively, where the direct object of the transitive becomes the subject of the intransitive",
    "options": [
      "A verb that can be used transitively or intransitively, where the direct object of the transitive becomes the subject of the intransitive",
      "A verb derived from ancient Germanic warrior dialects",
      "A verb that requires three coordinating prepositions",
      "A verb that cannot be used in imperative commands"
    ],
    "explanation": "Examples: \"He broke the window\" (transitive) -> \"The window broke\" (intransitive). Other examples: open, melt, cook, sink.",
    "tip": "Ergative: \"He melted the ice\" <-> \"The ice melted\".",
    "difficulty": "advanced"
  },
  {
    "id": "gram-64",
    "categoryId": "grammar",
    "question": "What is a \"Cataphoric Reference\" in discourse analysis?",
    "answer": "Using a pronoun or pro-form that refers forward to a noun or idea introduced later in the text",
    "options": [
      "Using a pronoun or pro-form that refers forward to a noun or idea introduced later in the text",
      "Using a pronoun that refers backward to an earlier antecedent",
      "A reference to external context outside the written document",
      "The repetition of identical consonant clusters across sentences"
    ],
    "explanation": "Example: \"When he arrived at the station, Alexander realized his train had already departed.\" (\"he\" refers forward to Alexander).",
    "tip": "Cataphora looks forward; Anaphora looks backward.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-65",
    "categoryId": "grammar",
    "question": "What is an \"Anaphoric Reference\"?",
    "answer": "Using a word or pronoun that refers back to an antecedent mentioned earlier in the discourse",
    "options": [
      "Using a word or pronoun that refers back to an antecedent mentioned earlier in the discourse",
      "Using a pronoun that refers forward to a later entity",
      "A rhetorical reference to classical mythology",
      "A sentence fragment lacking an overt grammatical subject"
    ],
    "explanation": "Example: \"Alexander missed his train because he was delayed.\" (\"he\" refers back to Alexander).",
    "tip": "Anaphora = Pointing back to a previously introduced noun.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-66",
    "categoryId": "grammar",
    "question": "Identify the sentence with correct case after \"than\" in an elliptical comparative construction:",
    "answer": "She plays chess better than he [does].",
    "options": [
      "She plays chess better than he [does].",
      "She plays chess better than him [does].",
      "She plays chess better then he.",
      "She plays chess better then him."
    ],
    "explanation": "Expand the implied elliptical clause: \"She plays chess better than he [plays chess].\" Nominative subject pronoun \"he\" is required.",
    "tip": "Finish the implied clause: \"taller than he [is]\".",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-67",
    "categoryId": "grammar",
    "question": "What is a \"Cleft Sentence\"?",
    "answer": "A complex sentence split into two clauses to give special emphasis to a particular element (e.g. \"It was John who broke the vase\")",
    "options": [
      "A complex sentence split into two clauses to give special emphasis to a particular element (e.g. \"It was John who broke the vase\")",
      "A run-on sentence that has been spliced by an em dash",
      "A compound sentence joined by two contrasting conjunctions",
      "A passive voice sentence that omits the agent preposition"
    ],
    "explanation": "It-clefts (\"It was X who...\") and Wh-clefts (\"What I need is X\") foreground key focus information in rhetorical discourse.",
    "tip": "Cleft sentence splits information to spotlight the focus element.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-68",
    "categoryId": "grammar",
    "question": "What is the \"Subjunctive Mandative\" form in English?",
    "answer": "Using the bare base verb in that-clauses after verbs of demand, request, or recommendation (e.g. \"I insist that he be present\")",
    "options": [
      "Using the bare base verb in that-clauses after verbs of demand, request, or recommendation (e.g. \"I insist that he be present\")",
      "Using past tense auxiliary verbs to soften polite invitations",
      "Using double negatives to express commanding military orders",
      "Placing modal adverbs at the beginning of imperative sentences"
    ],
    "explanation": "After verbs like demand, recommend, insist, suggest: \"We recommend that she study (not studies)\", \"They demanded that he be (not is) relieved\".",
    "tip": "Mandative subjunctive: Base verb used after demand/insist/recommend.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-69",
    "categoryId": "grammar",
    "question": "Which of the following sentences correctly demonstrates the Mandative Subjunctive?",
    "answer": "The committee requested that each member submit their report by Friday.",
    "options": [
      "The committee requested that each member submit their report by Friday.",
      "The committee requested that each member submits their report by Friday.",
      "The committee requested that each member will submit their report by Friday.",
      "The committee requested that each member must submit their report by Friday."
    ],
    "explanation": "The mandative subjunctive takes the base bare infinitive (\"submit\", not \"submits\" or \"will submit\").",
    "tip": "Base verb form: \"requested that he submit\" (no -s ending).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-70",
    "categoryId": "grammar",
    "question": "What is an \"Inversion\" construction in English syntax?",
    "answer": "Reversing the normal subject-verb order, often after negative or restrictive adverbs (e.g. \"Seldom have I seen such beauty\")",
    "options": [
      "Reversing the normal subject-verb order, often after negative or restrictive adverbs (e.g. \"Seldom have I seen such beauty\")",
      "Placing the direct object before the indirect object with a preposition",
      "Writing a sentence upside down in typographical layout",
      "Translating idioms word-for-word from a foreign language"
    ],
    "explanation": "Triggered by negative adverbials: \"Never had she felt...\", \"Hardly had they arrived when...\", \"Not only did he win, but...\"",
    "tip": "Negative inversion: \"Never have I...\" (Auxiliary verb before subject).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-71",
    "categoryId": "grammar",
    "question": "What is a \"Correlative Conjunction\" pair?",
    "answer": "Paired words that work together to join grammatically equal sentence elements (e.g. either/or, neither/nor, not only/but also)",
    "options": [
      "Paired words that work together to join grammatically equal sentence elements (e.g. either/or, neither/nor, not only/but also)",
      "Two verbs that share the same grammatical object",
      "Adverbs that modify both adjectives and participles",
      "A preposition combined with an exclamatory interjection"
    ],
    "explanation": "Both elements following the pair must be parallel in structure: \"She is not only talented, but also hardworking.\"",
    "tip": "Correlative pairs: either/or, neither/nor, both/and, not only/but also.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-72",
    "categoryId": "grammar",
    "question": "What is the \"Historic Present\" (Narrative Present)?",
    "answer": "The use of present tense verbs to narrate past historical events, creating vivid immediacy and drama",
    "options": [
      "The use of present tense verbs to narrate past historical events, creating vivid immediacy and drama",
      "A tense used exclusively when discussing archaeological fossils",
      "The standard tense used in financial accounting ledgers",
      "A grammatical error caused by shifting tenses mid-sentence"
    ],
    "explanation": "Common in literature and storytelling: \"So yesterday I am walking down the street, and suddenly this dog jumps out at me...\"",
    "tip": "Narrative Present uses present tense to recount past events vividly.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-73",
    "categoryId": "grammar",
    "question": "What is a \"Pleonasm\"?",
    "answer": "The use of more words than are necessary to convey meaning (e.g. \"I saw it with my own eyes\")",
    "options": [
      "The use of more words than are necessary to convey meaning (e.g. \"I saw it with my own eyes\")",
      "A sentence that contains no punctuation whatsoever",
      "A poetic meter consisting of alternating stressed syllables",
      "The grammatical omission of an auxiliary verb in casual speech"
    ],
    "explanation": "While often redundant, pleonasms are frequently used deliberately for rhetorical emphasis or clarity.",
    "tip": "Pleonasm = Semantic redundancy for emphasis (\"tuna fish\", \"burning fire\").",
    "difficulty": "advanced"
  },
  {
    "id": "gram-74",
    "categoryId": "grammar",
    "question": "What is a \"Malapropism\"?",
    "answer": "The mistaken use of an incorrect word in place of a similar-sounding one, resulting in a humorous utterance",
    "options": [
      "The mistaken use of an incorrect word in place of a similar-sounding one, resulting in a humorous utterance",
      "A typographical spelling error in printed newspapers",
      "A grammatical sentence that violates subject-verb agreement",
      "A word borrowed from foreign vocabulary without translation"
    ],
    "explanation": "Named after Mrs. Malaprop in Sheridan's play \"The Rivals\": \"He is the very pineapple [pinnacle] of politeness!\" or \"dance the flamingo [flamenco]\".",
    "tip": "Malapropism = Confusing similar-sounding words comically.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-75",
    "categoryId": "grammar",
    "question": "What is a \"Spoonerism\"?",
    "answer": "A verbal slip where corresponding consonants or vowels are swapped between two words (e.g. \"a blushing crow\" for \"a crushing blow\")",
    "options": [
      "A verbal slip where corresponding consonants or vowels are swapped between two words (e.g. \"a blushing crow\" for \"a crushing blow\")",
      "A pun that depends on homophonic pronunciation",
      "A poem written in rhyming heroic couplets",
      "A word coined by combining two independent nouns"
    ],
    "explanation": "Named after Oxford don William Archibald Spooner: \"The Lord is a shoving leopard\" (loving shepherd).",
    "tip": "Spoonerism = Accidental switching of initial sounds between words.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-76",
    "categoryId": "grammar",
    "question": "What is a \"Portmanteau\" word (Blend)?",
    "answer": "A new word created by blending the sounds and meanings of two distinct words (e.g. \"smog\" = smoke + fog)",
    "options": [
      "A new word created by blending the sounds and meanings of two distinct words (e.g. \"smog\" = smoke + fog)",
      "A compound word joined by a permanent hyphen",
      "An acronym pronounced as a single continuous syllable",
      "A foreign loanword assimilated without modification"
    ],
    "explanation": "Examples: \"brunch\" (breakfast + lunch), \"motel\" (motor + hotel), \"podcast\" (iPod + broadcast). Coined by Lewis Carroll.",
    "tip": "Portmanteau = Blending parts of two words into one.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-77",
    "categoryId": "grammar",
    "question": "What is the difference between an \"Acronym\" and an \"Initialism\"?",
    "answer": "Acronyms are pronounced as a word (e.g. NASA, NATO); initialisms are pronounced letter by letter (e.g. FBI, HTML)",
    "options": [
      "Acronyms are pronounced as a word (e.g. NASA, NATO); initialisms are pronounced letter by letter (e.g. FBI, HTML)",
      "Acronyms must have at least five letters; initialisms have three or fewer",
      "Initialisms are spelled with periods; acronyms never have periods",
      "Both terms mean the exact same thing in formal lexicography"
    ],
    "explanation": "NASA is pronounced \"na-suh\" (acronym); FBI is pronounced \"eff-bee-eye\" (initialism).",
    "tip": "Acronym = Spoken as a word (NASA). Initialism = Spoken letter by letter (FBI).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-78",
    "categoryId": "grammar",
    "question": "What is a \"Back-formation\" in English linguistics?",
    "answer": "Creating a new word by removing an imagined or real affix from an existing word (e.g. \"edit\" created from \"editor\")",
    "options": [
      "Creating a new word by removing an imagined or real affix from an existing word (e.g. \"edit\" created from \"editor\")",
      "Borrowing words from French and respelling them with English phonetics",
      "Translating foreign idioms into domestic slang",
      "Spelling words in reverse to create brand names"
    ],
    "explanation": "Other examples: \"burgle\" from \"burglar\", \"diagnose\" from \"diagnosis\", \"babysit\" from \"babysitter\".",
    "tip": "Back-formation: Shorter word created backwards from a longer existing word.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-79",
    "categoryId": "grammar",
    "question": "What is an \"Absolute Phrase\" (Nominative Absolute)?",
    "answer": "A noun and a participle (with modifiers) that modifies the entire sentence as a whole, lacking a connecting preposition or conjunction",
    "options": [
      "A noun and a participle (with modifiers) that modifies the entire sentence as a whole, lacking a connecting preposition or conjunction",
      "A clause that contains an absolute superlative adjective",
      "A phrase that cannot be translated into modern foreign languages",
      "A command spoken without a grammatical verb"
    ],
    "explanation": "Example: \"The storm having passed, we continued our journey.\" Or \"Her heart pounding furiously, she opened the envelope.\"",
    "tip": "Absolute phrase: Noun + Participle modifying the whole independent clause.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-80",
    "categoryId": "grammar",
    "question": "What is the grammatical term for words like \"deer\", \"sheep\", and \"aircraft\" whose plural form is identical to their singular form?",
    "answer": "Zero Plural (Unmarked Plural)",
    "options": [
      "Zero Plural (Unmarked Plural)",
      "Irregular Suppletion",
      "Dual Number Inflexion",
      "Mass Collective Noun"
    ],
    "explanation": "These nouns do not add an -s suffix for the plural; their number is determined solely by context and verb agreement.",
    "tip": "Zero plural: Same form for singular and plural (one sheep, ten sheep).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-81",
    "categoryId": "grammar",
    "question": "What is a \"Collective Noun\" and how does verb agreement differ between American and British English?",
    "answer": "American English treats collective nouns as singular (team is); British English often treats them as plural (team are)",
    "options": [
      "American English treats collective nouns as singular (team is); British English often treats them as plural (team are)",
      "British English always requires singular verbs for all groups",
      "American English forbids using collective nouns as grammatical subjects",
      "Both dialects strictly require plural verbs for groups under 10 members"
    ],
    "explanation": "Examples: government, committee, family, jury. US: \"The committee has decided.\" UK: \"The committee have decided.\"",
    "tip": "Collective nouns: US prefers singular (The band is playing); UK often plural (The band are playing).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-82",
    "categoryId": "grammar",
    "question": "What is a \"False Friend\" (Faux Ami) in language learning?",
    "answer": "A word in a foreign language that looks similar to an English word but has a completely different meaning",
    "options": [
      "A word in a foreign language that looks similar to an English word but has a completely different meaning",
      "A grammatical rule with numerous arbitrary exceptions",
      "An irregular verb that conjugates identically to a regular verb",
      "A dictionary definition that has become obsolete"
    ],
    "explanation": "Example: Spanish \"embarazada\" means pregnant (not embarrassed); German \"Gift\" means poison (not a present).",
    "tip": "False Friend = Looks like an English word, but means something else.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-83",
    "categoryId": "grammar",
    "question": "What is an \"Anacoluthon\"?",
    "answer": "An unexpected abrupt shift in the grammatical structure of a sentence before finishing the original thought",
    "options": [
      "An unexpected abrupt shift in the grammatical structure of a sentence before finishing the original thought",
      "A sequence of five or more consecutive prepositional phrases",
      "The repetition of conjunctions in close succession",
      "A sentence written entirely in rhyming pentameter"
    ],
    "explanation": "Example: \"I will have such revenges on you both, that all the world shall—I will do such things!\" (Shakespeare, King Lear).",
    "tip": "Anacoluthon = Mid-sentence breakdown or shift in syntactic structure.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-84",
    "categoryId": "grammar",
    "question": "What is \"Zeugma\" (Syllepsis)?",
    "answer": "A figure of speech in which a single word applies to two others in different senses (e.g. \"He took my advice and my wallet\")",
    "options": [
      "A figure of speech in which a single word applies to two others in different senses (e.g. \"He took my advice and my wallet\")",
      "The omission of letters from the middle of words",
      "The inversion of adjective order before a collective noun",
      "A rhetorical question that provides its own immediate answer"
    ],
    "explanation": "Example: \"She opened her heart and her purse to the orphan.\" The verb \"opened\" governs both abstract and literal nouns simultaneously.",
    "tip": "Zeugma: One verb binds two objects in different literal/figurative senses.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-85",
    "categoryId": "grammar",
    "question": "What is \"Polysyndeton\"?",
    "answer": "The deliberate repetition of multiple conjunctions in close succession (e.g. \"We have ships and men and money and stores\")",
    "options": [
      "The deliberate repetition of multiple conjunctions in close succession (e.g. \"We have ships and men and money and stores\")",
      "The complete elimination of conjunctions between clauses",
      "The use of polysyllabic words in formal legal contracts",
      "A grammatical sentence that repeats identical prepositions"
    ],
    "explanation": "Opposite of Asyndeton: creates a deliberate cumulative rhythmic weight and rhetorical grandeur.",
    "tip": "Polysyndeton = Many conjunctions (\"and... and... and...\").",
    "difficulty": "advanced"
  },
  {
    "id": "gram-86",
    "categoryId": "grammar",
    "question": "What is \"Asyndeton\"?",
    "answer": "The intentional omission of conjunctions between coordinate phrases, clauses, or words (e.g. \"I came, I saw, I conquered\")",
    "options": [
      "The intentional omission of conjunctions between coordinate phrases, clauses, or words (e.g. \"I came, I saw, I conquered\")",
      "The excessive use of coordinating conjunctions in a series",
      "A grammatical error where punctuation is omitted before adverbs",
      "The placement of an indirect object before a direct object"
    ],
    "explanation": "Julius Caesar's \"Veni, vidi, vici\" is the classic example: produces speed, conciseness, and dramatic impact.",
    "tip": "Asyndeton = No conjunctions (\"I came, I saw, I conquered\").",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-87",
    "categoryId": "grammar",
    "question": "What is a \"Chiasmus\"?",
    "answer": "A rhetorical device in which grammatical structures or concepts are repeated in reverse order (A-B-B-A)",
    "options": [
      "A rhetorical device in which grammatical structures or concepts are repeated in reverse order (A-B-B-A)",
      "A sentence containing three rhyming coordinating clauses",
      "The pairing of two contradictory adjectives before a noun",
      "The chronological sequencing of narrative historical events"
    ],
    "explanation": "Example: \"Ask not what your country (A) can do for you (B); ask what you (B) can do for your country (A).\"",
    "tip": "Chiasmus = Criss-cross reversal: A-B into B-A.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-88",
    "categoryId": "grammar",
    "question": "What is an \"Epistrophe\" (Epiphora)?",
    "answer": "The repetition of a word or phrase at the end of successive clauses or sentences",
    "options": [
      "The repetition of a word or phrase at the end of successive clauses or sentences",
      "The repetition of words at the beginning of successive sentences",
      "An address to an absent person or personified abstraction",
      "The substitution of an inoffensive term for a harsh one"
    ],
    "explanation": "Example: Lincoln's Gettysburg Address: \"...government of the people, by the people, for the people, shall not perish from the earth.\"",
    "tip": "Epistrophe = Repetition at the END of clauses. Anaphora = Repetition at the START.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-89",
    "categoryId": "grammar",
    "question": "What is an \"Apostrophe\" as a literary rhetorical device (not punctuation)?",
    "answer": "Directly addressing an absent person, deceased figure, or personified inanimate object (e.g. \"O Death, where is thy sting?\")",
    "options": [
      "Directly addressing an absent person, deceased figure, or personified inanimate object (e.g. \"O Death, where is thy sting?\")",
      "A punctuation mark indicating omitted letters in contractions",
      "An explanatory footnote placed at the bottom of a manuscript page",
      "A grammatical pause created by an introductory adverbial phrase"
    ],
    "explanation": "In rhetoric, an apostrophe turns away from the audience to address an entity that cannot respond.",
    "tip": "Rhetorical Apostrophe: Directly calling out to an absent entity or abstract concept.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-90",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct capitalization:",
    "answer": "My uncle traveled south to visit Uncle Robert at the Department of History.",
    "options": [
      "My uncle traveled south to visit Uncle Robert at the Department of History.",
      "My Uncle traveled South to visit uncle Robert at the Department of History.",
      "My uncle traveled South to visit Uncle Robert at the department of history.",
      "My Uncle traveled south to visit Uncle Robert at the Department Of History."
    ],
    "explanation": "Capitalize kinship titles when used as part of a proper name (\"Uncle Robert\"), but lowercase when preceded by a possessive (\"my uncle\"). Direction words (\"south\") are lowercase unless naming a specific recognized region (\"the Deep South\").",
    "tip": "Capitalize title before name (Uncle Robert); lowercase generic directions (travel south).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-91",
    "categoryId": "grammar",
    "question": "Identify the sentence with correct pronoun case following a prepositional compound:",
    "answer": "The director gave certificates of merit to both Marcus and me.",
    "options": [
      "The director gave certificates of merit to both Marcus and me.",
      "The director gave certificates of merit to both Marcus and I.",
      "The director gave certificates of merit to both Marcus and myself.",
      "The director gave certificates of merit to both Marcus and we."
    ],
    "explanation": "Remove the other person to test: \"The director gave certificates to me\", not \"to I\". Compound objects still require the objective case.",
    "tip": "Drop the partner name to test: \"to Marcus and ME\" (to me).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-92",
    "categoryId": "grammar",
    "question": "What is a \"Non-finite Verb\"?",
    "answer": "A verb form that does not show tense, person, or number (includes infinitives, gerunds, and participles)",
    "options": [
      "A verb form that does not show tense, person, or number (includes infinitives, gerunds, and participles)",
      "A verb that cannot be conjugated into future perfect tense",
      "A verb that requires three separate direct objects",
      "A verb borrowed from ancient Classical Greek drama"
    ],
    "explanation": "Finite verbs show tense and agree with the subject (\"She sings\"). Non-finite verbs cannot serve as the sole main predicate without auxiliaries (\"to sing\", \"singing\").",
    "tip": "Non-finite verbs: Infinitives, Gerunds, and Participles (no tense/person).",
    "difficulty": "advanced"
  },
  {
    "id": "gram-93",
    "categoryId": "grammar",
    "question": "What is a \"Modal Auxiliary Verb\"?",
    "answer": "A helping verb that expresses necessity, possibility, permission, or ability (e.g. can, must, should, might)",
    "options": [
      "A helping verb that expresses necessity, possibility, permission, or ability (e.g. can, must, should, might)",
      "A verb that transforms an active clause into a passive clause",
      "A verb that always takes an indirect object pronoun",
      "A verb conjugated with regular \"-ed\" endings in past tense"
    ],
    "explanation": "Modal verbs do not take an \"-s\" in third-person singular and are followed by bare infinitives without \"to\" (except \"ought to\").",
    "tip": "Modals: can, could, may, might, must, shall, should, will, would.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-94",
    "categoryId": "grammar",
    "question": "What is the difference between \"may\" and \"can\" in traditional formal grammar?",
    "answer": "\"May\" denotes permission or possibility; \"can\" denotes physical or mental ability",
    "options": [
      "\"May\" denotes permission or possibility; \"can\" denotes physical or mental ability",
      "\"Can\" is used only for inanimate machinery; \"may\" is used for humans",
      "\"May\" is used in past tense; \"can\" is used in present tense",
      "\"Can\" requires the subjunctive mood; \"may\" requires indicative"
    ],
    "explanation": "Traditional rule: \"May I leave early?\" (asking permission) vs \"Can I lift this weight?\" (testing ability).",
    "tip": "May = Permission/Possibility. Can = Ability/Capacity.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-95",
    "categoryId": "grammar",
    "question": "When should \"shall\" be used instead of \"will\" in traditional British grammar?",
    "answer": "With first-person pronouns (I, we) to indicate simple future, and with second/third person to express strong determination or obligation",
    "options": [
      "With first-person pronouns (I, we) to indicate simple future, and with second/third person to express strong determination or obligation",
      "Exclusively in legal courtroom contracts and maritime law",
      "Only when asking questions in negative passive constructions",
      "Whenever the sentence contains three coordinating adjectives"
    ],
    "explanation": "Classical rule: \"I shall go\" (simple future); \"You shall go\" (obligation/command). \"I will go\" (strong determination). In modern American English, \"will\" is used universally.",
    "tip": "Traditional rule: First person (I/we) takes \"shall\" for plain future.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-96",
    "categoryId": "grammar",
    "question": "What is a \"Dummy Pronoun\" (Expletive Pronoun)?",
    "answer": "A pronoun that fulfills a grammatical syntactic role but has no concrete semantic meaning (e.g. \"it\" in \"It is raining\")",
    "options": [
      "A pronoun that fulfills a grammatical syntactic role but has no concrete semantic meaning (e.g. \"it\" in \"It is raining\")",
      "An offensive slang pronoun used in informal street dialogue",
      "A relative pronoun that introduces an essential defining clause",
      "A pronoun that cannot be used in interrogative sentences"
    ],
    "explanation": "In \"It is snowing\" or \"There are three apples\", \"it\" and \"there\" act as dummy subjects required by English syntax because English clauses require overt subjects.",
    "tip": "Dummy subject: \"It\" in \"It is raining\" (fills subject slot with no referent).",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-97",
    "categoryId": "grammar",
    "question": "What is an \"Infinitive of Purpose\"?",
    "answer": "An infinitive phrase explaining why an action was performed (equivalent to \"in order to\")",
    "options": [
      "An infinitive phrase explaining why an action was performed (equivalent to \"in order to\")",
      "An infinitive that serves as the grammatical direct object of a linking verb",
      "An infinitive split by two or more descriptive adverbs",
      "An infinitive that expresses continuous habitual action"
    ],
    "explanation": "In \"He went to the grocery store to buy milk\", \"to buy milk\" expresses the purpose of going.",
    "tip": "Infinitive of purpose: \"He stopped to rest\" = in order to rest.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-98",
    "categoryId": "grammar",
    "question": "Identify the sentence with correct usage of \"lay\" vs \"lie\" in the present progressive:",
    "answer": "The patient is lying comfortably on the hospital bed.",
    "options": [
      "The patient is lying comfortably on the hospital bed.",
      "The patient is laying comfortably on the hospital bed.",
      "The patient is lieing comfortably on the hospital bed.",
      "The patient is layed comfortably on the hospital bed."
    ],
    "explanation": "\"Lying\" is the present participle of intransitive \"lie\" (recline). \"Laying\" requires an object: \"The worker is laying the bricks.\"",
    "tip": "Reclining = Lying. Putting an object down = Laying.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-99",
    "categoryId": "grammar",
    "question": "What is a \"Privative Prefix\"?",
    "answer": "A prefix that denotes the loss, absence, or negation of a quality (e.g. un-, in-, a-, dis-)",
    "options": [
      "A prefix that denotes the loss, absence, or negation of a quality (e.g. un-, in-, a-, dis-)",
      "A prefix that multiplies the numerical degree of an adjective",
      "A prefix used exclusively in military rank designations",
      "A prefix that converts transitive verbs into intransitive verbs"
    ],
    "explanation": "Examples: atypical (lacking typicality), asymmetrical, dishonest, unfinished.",
    "tip": "Privative prefixes (a-, un-, dis-) indicate negation or deprivation.",
    "difficulty": "advanced"
  },
  {
    "id": "gram-100",
    "categoryId": "grammar",
    "question": "What is the \"Substantive Adjective\"?",
    "answer": "An adjective that functions as a noun in a sentence (e.g. \"The brave shall inherit the earth\")",
    "options": [
      "An adjective that functions as a noun in a sentence (e.g. \"The brave shall inherit the earth\")",
      "An adjective that modifies another adjective directly",
      "An adjective placed inside quotation marks in legal statutes",
      "An adjective that cannot be compared with \"-er\" or \"-est\""
    ],
    "explanation": "In \"feed the poor\" or \"care for the sick\", \"the poor\" and \"the sick\" are adjectives acting substantively as plural nouns.",
    "tip": "Substantive adjective: Adjective acting as a noun (\"The rich\", \"The elderly\").",
    "difficulty": "advanced"
  },
  {
    "id": "gram-101",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "were",
      "has been",
      "is"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-102",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-103",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-104",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-105",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "would",
      "must"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-106",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-107",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-108",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationery's",
      "stationer",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-109",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-110",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-111",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-112",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-113",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-114",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Transient",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-115",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Careless and sloppy",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-116",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "were",
      "has been",
      "is"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-117",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-118",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-119",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-120",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-121",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-122",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-123",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-124",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-125",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray",
      "Organized in mathematical symmetry"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-126",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-127",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-128",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-129",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Transient",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-130",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Careless and sloppy",
      "Hasty and rushed",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-131",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "is",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-132",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-133",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-134",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-135",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-136",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "no article",
      "the"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-137",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-138",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-139",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-140",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-141",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-142",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "than",
      "of",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-143",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Prepositional Clause",
      "Adjective Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-144",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Short-lived",
      "Permanent (Eternal)",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-145",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Careless and sloppy",
      "Scrupulous and careful about details",
      "Hasty and rushed"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-146",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "is",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-147",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-148",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-149",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-150",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "would",
      "must"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-151",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "no article",
      "the"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-152",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-153",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationery's",
      "stationary",
      "stationery",
      "stationer"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-154",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-155",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray",
      "Arriving early for a formal meeting"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-156",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-157",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-158",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-159",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-160",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Hasty and rushed",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-161",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "were",
      "is",
      "was",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-162",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had departed before we had reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-163",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going.",
      "He asked me that where I was going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-164",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-165",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-166",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-167",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-168",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-169",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-170",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-171",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-172",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-173",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Noun Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-174",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Permanent (Eternal)",
      "Short-lived",
      "Transient",
      "Fleeting"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-175",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Hasty and rushed",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-176",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-177",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train had already departed before we reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-178",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-179",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-180",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-181",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "the",
      "an",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-182",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-183",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationery's",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-184",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-185",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray",
      "Having six or seven alternative options"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-186",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-187",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-188",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Prepositional Clause",
      "Adjective Clause",
      "Noun Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-189",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Short-lived",
      "Fleeting",
      "Transient",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-190",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Hasty and rushed",
      "Scrupulous and careful about details",
      "Careless and sloppy"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-191",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "has been",
      "is",
      "was",
      "were"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-192",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train had already departed before we reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-193",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-194",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-195",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-196",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "no article",
      "the",
      "an"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-197",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-198",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-199",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-200",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-201",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-202",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-203",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Noun Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-204",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Short-lived",
      "Fleeting",
      "Permanent (Eternal)",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-205",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Scrupulous and careful about details",
      "Hasty and rushed",
      "Careless and sloppy"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-206",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "were",
      "is",
      "was",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-207",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-208",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-209",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-210",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-211",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "the",
      "an",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-212",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-213",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationery's",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-214",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-215",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-216",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-217",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-218",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Noun Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-219",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Permanent (Eternal)",
      "Short-lived",
      "Transient",
      "Fleeting"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-220",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Hasty and rushed",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-221",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-222",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-223",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-224",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-225",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-226",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "the",
      "an",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-227",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-228",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationery's",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-229",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-230",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-231",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-232",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "than",
      "of",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-233",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Prepositional Clause",
      "Adjective Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-234",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Transient",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-235",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Hasty and rushed",
      "Careless and sloppy",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-236",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-237",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-238",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He said to me where I am going.",
      "He asked me where I was going.",
      "He asked me where was I going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-239",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-240",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "would",
      "must"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-241",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-242",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-243",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-244",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To work or study late into the night with diligence",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-245",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-246",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-247",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-248",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Prepositional Clause",
      "Noun Clause",
      "Adjective Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-249",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Transient",
      "Fleeting",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-250",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Scrupulous and careful about details",
      "Aggressive in speech",
      "Careless and sloppy"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-251",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "were",
      "has been",
      "is"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-252",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-253",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-254",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-255",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-256",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "no article",
      "the"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-257",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-258",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationer",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-259",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-260",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "In a state of complete confusion and disarray",
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "Organized in mathematical symmetry"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-261",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-262",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-263",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Noun Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-264",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Transient",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-265",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Scrupulous and careful about details",
      "Careless and sloppy",
      "Aggressive in speech"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-266",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "has been",
      "is",
      "were"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-267",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-268",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-269",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-270",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-271",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-272",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-273",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-274",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-275",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-276",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-277",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-278",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Adverbial Clause of condition",
      "Noun Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-279",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-280",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Hasty and rushed",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-281",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "is",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-282",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-283",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-284",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-285",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-286",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-287",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-288",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationery's",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-289",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-290",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "In a state of complete confusion and disarray",
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "Arriving early for a formal meeting"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-291",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-292",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-293",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Noun Clause",
      "Prepositional Clause",
      "Adjective Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-294",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-295",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Aggressive in speech",
      "Hasty and rushed",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-296",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "were",
      "was",
      "is",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-297",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train departed before we had reached the railway station.",
      "The train had already departed before we reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had departed before we had reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-298",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-299",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-300",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-301",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-302",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-303",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-304",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-305",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-306",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-307",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-308",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-309",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Transient",
      "Fleeting",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-310",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Hasty and rushed",
      "Careless and sloppy",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-311",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "has been",
      "is",
      "were"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-312",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-313",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-314",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-315",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-316",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "no article",
      "the"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-317",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-318",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-319",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-320",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray",
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-321",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-322",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "than",
      "of",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-323",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-324",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Short-lived",
      "Permanent (Eternal)",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-325",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Careless and sloppy",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-326",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "has been",
      "is",
      "were"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-327",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-328",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-329",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-330",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "would",
      "must"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-331",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-332",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-333",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationery's",
      "stationary",
      "stationery",
      "stationer"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-334",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-335",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-336",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-337",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-338",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-339",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-340",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Scrupulous and careful about details",
      "Aggressive in speech",
      "Hasty and rushed"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-341",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "were",
      "is",
      "was",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-342",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-343",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-344",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-345",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-346",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-347",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-348",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-349",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-350",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray",
      "Having six or seven alternative options"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-351",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-352",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-353",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Prepositional Clause",
      "Noun Clause",
      "Adjective Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-354",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Permanent (Eternal)",
      "Short-lived",
      "Transient",
      "Fleeting"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-355",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Aggressive in speech",
      "Scrupulous and careful about details",
      "Hasty and rushed"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-356",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-357",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-358",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-359",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-360",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-361",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "the",
      "an",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-362",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-363",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationer",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-364",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-365",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "In a state of complete confusion and disarray",
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting",
      "Having six or seven alternative options"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-366",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-367",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-368",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-369",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Short-lived",
      "Fleeting",
      "Transient",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-370",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Careless and sloppy",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-371",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-372",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-373",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-374",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-375",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-376",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "the",
      "an",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-377",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-378",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationery's",
      "stationary",
      "stationery",
      "stationer"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-379",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-380",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "In a state of complete confusion and disarray",
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-381",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-382",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-383",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Adjective Clause",
      "Noun Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-384",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Transient",
      "Fleeting",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-385",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Aggressive in speech",
      "Careless and sloppy",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-386",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "were",
      "is",
      "was",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-387",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-388",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-389",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-390",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-391",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-392",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-393",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-394",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-395",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "In a state of complete confusion and disarray",
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "Organized in mathematical symmetry"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-396",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-397",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-398",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition",
      "Noun Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-399",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-400",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Aggressive in speech",
      "Hasty and rushed",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-401",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-402",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-403",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-404",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-405",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-406",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "the",
      "an",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-407",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-408",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationery's",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-409",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-410",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-411",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-412",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "than",
      "of",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-413",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-414",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Transient",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-415",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Hasty and rushed",
      "Careless and sloppy",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-416",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-417",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had departed before we had reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-418",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-419",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-420",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "would",
      "must"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-421",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-422",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-423",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-424",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-425",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "Having six or seven alternative options",
      "In a state of complete confusion and disarray",
      "Arriving early for a formal meeting"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-426",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-427",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-428",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Adverbial Clause of condition",
      "Noun Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-429",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Transient",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-430",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Scrupulous and careful about details",
      "Careless and sloppy",
      "Aggressive in speech"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-431",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "were",
      "is",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-432",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-433",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-434",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers were verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-435",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-436",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-437",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-438",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-439",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-440",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-441",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-442",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-443",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause",
      "Adverbial Clause of condition"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-444",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Transient",
      "Fleeting",
      "Short-lived",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-445",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Aggressive in speech",
      "Careless and sloppy",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-446",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "is",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-447",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-448",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He said to me where I am going.",
      "He asked me that where I was going.",
      "He asked me where I was going.",
      "He asked me where was I going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-449",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-450",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "must",
      "could",
      "might",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-451",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-452",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-453",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationary",
      "stationery",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-454",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-455",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "In a state of complete confusion and disarray",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-456",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-457",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-458",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Prepositional Clause",
      "Adverbial Clause of condition",
      "Noun Clause",
      "Adjective Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-459",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-460",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Aggressive in speech",
      "Careless and sloppy",
      "Hasty and rushed",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-461",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "was",
      "has been",
      "is",
      "were"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-462",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-463",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He said to me where I am going.",
      "He asked me that where I was going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-464",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-465",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-466",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-467",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-468",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationer",
      "stationery's",
      "stationary",
      "stationery"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-469",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly",
      "To work or study late into the night with diligence"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-470",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray",
      "Arriving early for a formal meeting",
      "Having six or seven alternative options"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-471",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-472",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "from",
      "of",
      "than",
      "to"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-473",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adverbial Clause of condition",
      "Noun Clause",
      "Adjective Clause",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-474",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Permanent (Eternal)",
      "Short-lived",
      "Transient"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-475",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Hasty and rushed",
      "Careless and sloppy",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-476",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "were",
      "was",
      "has been",
      "is"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-477",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train had departed before we had reached the railway station.",
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-478",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-479",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-480",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "must",
      "would"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-481",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "the",
      "no article"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-482",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-483",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-484",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To celebrate late evening festivals",
      "To work or study late into the night with diligence",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-485",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "In a state of complete confusion and disarray",
      "Organized in mathematical symmetry",
      "Arriving early for a formal meeting",
      "Having six or seven alternative options"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-486",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"The candidate is thoroughly proficient ________ accounting standards.\"",
    "answer": "in",
    "options": [
      "at",
      "in",
      "on",
      "with"
    ],
    "explanation": "The adjective \"proficient\" is followed by the preposition \"in\" (proficient in a subject/skill).",
    "tip": "Proficient takes \"in\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-487",
    "categoryId": "grammar",
    "question": "Fill in the correct preposition: \"He is senior ________ me by three years in service.\"",
    "answer": "to",
    "options": [
      "of",
      "to",
      "from",
      "than"
    ],
    "explanation": "Adjectives ending in '-ior' (senior, junior, superior, inferior, prior) take the preposition \"to\", not \"than\".",
    "tip": "Senior, junior, superior take \"to\", not \"than\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-488",
    "categoryId": "grammar",
    "question": "Identify the clause in brackets: \"The auditor explained [why the discrepancies occurred].\"",
    "answer": "Noun Clause",
    "options": [
      "Adjective Clause",
      "Noun Clause",
      "Adverbial Clause of condition",
      "Prepositional Clause"
    ],
    "explanation": "The clause acts as the direct object of the transitive verb \"explained\", making it a Noun Clause.",
    "tip": "A clause answering \"what?\" after a transitive verb is a Noun Clause.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-489",
    "categoryId": "grammar",
    "question": "What is the antonym of the word \"EPHEMERAL\"?",
    "answer": "Permanent (Eternal)",
    "options": [
      "Fleeting",
      "Short-lived",
      "Transient",
      "Permanent (Eternal)"
    ],
    "explanation": "Ephemeral means lasting for a very short time; its antonym is permanent or eternal.",
    "tip": "Ephemeral = Fleeting; Antonym = Permanent.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-490",
    "categoryId": "grammar",
    "question": "What is the synonym of the word \"METICULOUS\"?",
    "answer": "Scrupulous and careful about details",
    "options": [
      "Careless and sloppy",
      "Hasty and rushed",
      "Aggressive in speech",
      "Scrupulous and careful about details"
    ],
    "explanation": "Meticulous means showing great attention to detail; thorough and scrupulous.",
    "tip": "Meticulous = Very careful and thorough.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-491",
    "categoryId": "grammar",
    "question": "Choose the correct verb form: \"The committee ________ divided in their opinions regarding the budget allocation.\"",
    "answer": "were",
    "options": [
      "is",
      "was",
      "were",
      "has been"
    ],
    "explanation": "When members of a collective noun act individually or disagree, a plural verb (\"were\") is used.",
    "tip": "Collective noun with divided members takes a plural verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-492",
    "categoryId": "grammar",
    "question": "Choose the sentence with correct use of the Past Perfect tense:",
    "answer": "The train had already departed before we reached the railway station.",
    "options": [
      "The train departed before we had reached the railway station.",
      "The train has departed before we reached the railway station.",
      "The train had already departed before we reached the railway station.",
      "The train had departed before we had reached the railway station."
    ],
    "explanation": "When two actions occurred in the past, the earlier completed action takes Past Perfect (had departed) and the later takes Simple Past (reached).",
    "tip": "Earlier past action = had + V3; later action = V2.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-493",
    "categoryId": "grammar",
    "question": "Change into Indirect Speech: He said to me, \"Where are you going?\"",
    "answer": "He asked me where I was going.",
    "options": [
      "He asked me where I was going.",
      "He asked me where was I going.",
      "He asked me that where I was going.",
      "He said to me where I am going."
    ],
    "explanation": "In WH-questions: reporting verb changes to \"asked\", conjunction \"that\" is omitted, and the interrogative word order becomes assertive (where I was going).",
    "tip": "In indirect WH-questions, use assertive order: where + subject + verb.",
    "difficulty": "intermediate"
  },
  {
    "id": "gram-494",
    "categoryId": "grammar",
    "question": "Change into Passive Voice: \"The accountant has verified all the financial vouchers.\"",
    "answer": "All the financial vouchers have been verified by the accountant.",
    "options": [
      "All the financial vouchers have been verified by the accountant.",
      "All the financial vouchers were verified by the accountant.",
      "All the financial vouchers had been verified by the accountant.",
      "All the financial vouchers has been verified by the accountant."
    ],
    "explanation": "Present Perfect active (has + V3) becomes passive: object + have/has been + V3 + by subject. \"Vouchers\" is plural, so \"have been verified\".",
    "tip": "Passive of has verified = have been verified.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-495",
    "categoryId": "grammar",
    "question": "Fill in the blank with the correct modal verb: \"You ________ adhere to the financial rules, as failure to do so is a legal offense.\"",
    "answer": "must",
    "options": [
      "could",
      "might",
      "would",
      "must"
    ],
    "explanation": "\"Must\" expresses a strong moral or legal obligation/necessity.",
    "tip": "\"Must\" expresses strong obligation.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-496",
    "categoryId": "grammar",
    "question": "Fill in the blank with the appropriate article: \"Copper is ________ useful metal.\"",
    "answer": "a",
    "options": [
      "a",
      "an",
      "no article",
      "the"
    ],
    "explanation": "\"Useful\" begins with a consonant glide sound /juː/ (yu), so the indefinite article \"a\" is used.",
    "tip": "Sound matters: \"useful\" starts with /juː/ sound, taking \"a\".",
    "difficulty": "beginner"
  },
  {
    "id": "gram-497",
    "categoryId": "grammar",
    "question": "Choose the correct pair to fill the blank: \"The heavy rainfall will ________ the crop yield, causing a severe ________ on market prices.\"",
    "answer": "affect; effect",
    "options": [
      "affect; affect",
      "affect; effect",
      "effect; affect",
      "effect; effect"
    ],
    "explanation": "\"Affect\" is a verb meaning to influence; \"Effect\" is a noun meaning a result or outcome.",
    "tip": "Affect = Verb (influence); Effect = Noun (result).",
    "difficulty": "beginner"
  },
  {
    "id": "gram-498",
    "categoryId": "grammar",
    "question": "Choose the correct homophone: \"She bought books from the ________ shop.\"",
    "answer": "stationery",
    "options": [
      "stationary",
      "stationery",
      "stationer",
      "stationery's"
    ],
    "explanation": "\"Stationery\" (with 'e') refers to writing paper, pens, and envelopes. \"Stationary\" (with 'a') means motionless.",
    "tip": "Stationery (with e) = Envelopes & paper; Stationary (with a) = Standing still.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-499",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"To burn the midnight oil\"?",
    "answer": "To work or study late into the night with diligence",
    "options": [
      "To work or study late into the night with diligence",
      "To celebrate late evening festivals",
      "To start an accidental house fire",
      "To waste valuable fuel recklessly"
    ],
    "explanation": "\"Burn the midnight oil\" means to study or work hard until late at night.",
    "tip": "Burn the midnight oil = Work late at night.",
    "difficulty": "beginner"
  },
  {
    "id": "gram-500",
    "categoryId": "grammar",
    "question": "What is the meaning of the idiom \"At sixes and sevens\"?",
    "answer": "In a state of complete confusion and disarray",
    "options": [
      "Arriving early for a formal meeting",
      "Having six or seven alternative options",
      "Organized in mathematical symmetry",
      "In a state of complete confusion and disarray"
    ],
    "explanation": "\"At sixes and sevens\" describes a confused, disorganized, or chaotic situation.",
    "tip": "At sixes and sevens = In total confusion.",
    "difficulty": "beginner"
  }
];
