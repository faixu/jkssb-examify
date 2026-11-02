import { Flashcard } from '../../types';

/**
 * 70 High-Yield Microsoft Office MCQs (MS Word, MS Excel, MS PowerPoint, MS Access, MS Outlook)
 * Source: /public/assets/aistudio/6._Practice_Session__Microsoft_Office_efbfe1c2.pdf
 * Includes:
 * - Part 1: Previous JKSSB Exams (PAA 2020, Statistical Assistant, FAA 2013, JSA, SI, Graduate Level 2019)
 * - Part 2: Comprehensive MS Office Suite Practice MCQs
 */
export const MS_OFFICE_PRACTICE_QUESTIONS: Flashcard[] = [
  // ==========================================
  // PART 1: MCQs Asked in Previous JKSSB Exams
  // ==========================================
  {
    id: "msoffice-q1",
    categoryId: "cs",
    question: "Which one among the following MS Excel functions is used to remove extra spaces from a cell/string?",
    answer: "TRIM",
    options: ["LEN", "TRIM", "REPLACE", "SPACE"],
    explanation: "The TRIM function in Excel removes all leading, trailing, and duplicate in-between spaces from a text string, leaving only single spaces between words.",
    tip: "JKSSB Panchayat Accounts Assistant (PAA) 2020",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q2",
    categoryId: "cs",
    question: "Which one of the following is a shortcut key to start a slide show From the beginning in MS PowerPoint?",
    answer: "F5",
    options: ["F3", "F5", "F6", "F8"],
    explanation: "Pressing F5 runs the presentation starting from the very first slide. Pressing Shift + F5 runs the slide show starting from the currently active slide.",
    tip: "JKSSB PAA 2020 • F5 = From beginning, Shift+F5 = Current slide",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q3",
    categoryId: "cs",
    question: "Which one of the following software applications serves as an email client and personal information manager in MS Office?",
    answer: "Outlook",
    options: ["Microsoft Windows Explorer", "Windows 98", "Microsoft PowerPoint", "Outlook"],
    explanation: "Microsoft Outlook is an email client and personal organizer that manages emails, calendars, appointments, tasks, contacts, and personal notes.",
    tip: "JKSSB PAA 2020 • MS Outlook = Email Client & Organizer",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q4",
    categoryId: "cs",
    question: "What is the function of keyboard shortcut CTRL + B in MS Word?",
    answer: "It makes the selected text bold.",
    options: [
      "It changes the selected text color to blue.",
      "It changes the selected text color to black.",
      "It makes the selected text bold.",
      "It makes the selected text italic."
    ],
    explanation: "Ctrl + B toggles bold formatting on the selected text. (Ctrl + I applies Italic, and Ctrl + U applies Underline).",
    tip: "JKSSB PAA 2020 • Ctrl+B = Bold text",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q5",
    categoryId: "cs",
    question: "Which function in MS Excel is used to count the number of cells that contain any data (non-empty cells)?",
    answer: "COUNTA()",
    options: ["COUNT()", "COUNTA()", "COUNTS()", "COUNTBLANK()"],
    explanation: "COUNTA() counts all cells containing any kind of value (numbers, text, logical values, or errors). COUNT() counts only cells with numbers, while COUNTBLANK() counts empty cells.",
    tip: "JKSSB Statistical Assistant • COUNT = Numbers, COUNTA = Any data",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q6",
    categoryId: "cs",
    question: "The built-in tool in MS Word used to look up synonyms and similar words for a selected term is called:",
    answer: "Thesaurus",
    options: ["Finder", "Thesaurus", "Dictionary", "Find and Replace"],
    explanation: "The Thesaurus tool (shortcut Shift + F7) in MS Word offers a dictionary of synonyms and antonyms to enrich vocabulary and phrasing.",
    tip: "JKSSB FAA 2013 • Thesaurus = Shift + F7",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q7",
    categoryId: "cs",
    question: "You are creating a new PowerPoint presentation in MS Office. Suppose you want to insert a 'Banner' shape in a slide. Which menu path is correct?",
    answer: "Insert -> Shapes -> Stars and Banners",
    options: [
      "Design -> Shapes -> Stars and Banners",
      "Insert -> Shapes -> Stars and Banners",
      "Format -> Shapes -> Stars and Banners",
      "Insert -> WordArt"
    ],
    explanation: "In PowerPoint, shapes (including lines, rectangles, basic shapes, block arrows, equation shapes, and Stars & Banners) are found under the Insert tab in the Illustrations/Shapes gallery.",
    tip: "JKSSB Junior Statistical Assistant (JSA)",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q8",
    categoryId: "cs",
    question: "How do you access and insert WordArt in modern ribbon-based MS Word?",
    answer: "Insert -> Word Art",
    options: [
      "Insert -> Word Art",
      "Tools -> Options -> Word Art",
      "View -> Word Art",
      "View -> Toolbars -> Word Art"
    ],
    explanation: "In the Ribbon interface of MS Word, WordArt is inserted via the Insert tab under the Text group.",
    tip: "JKSSB JSA • Insert tab > Text group > WordArt",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q9",
    categoryId: "cs",
    question: "Which of the following is the standard default file extension for an MS Access 2007 (and later) database?",
    answer: ".accdb",
    options: [".accdb", ".adp", ".mdw", ".accde"],
    explanation: "Starting with MS Access 2007, Microsoft introduced the XML-based ACCDB (.accdb) format, replacing the legacy MDB (.mdb) format.",
    tip: "JKSSB Sub-Inspector (SI) • Access 2007+ default = .accdb",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q10",
    categoryId: "cs",
    question: "In which year was Microsoft Excel officially launched for the Windows operating system?",
    answer: "1987",
    options: ["1986", "1985", "1987", "1988"],
    explanation: "Microsoft originally released Excel for the Apple Macintosh in 1985. The first Windows version (Excel 2.0) was launched in November 1987.",
    tip: "JKSSB SI • Mac = 1985, Windows = 1987",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q11",
    categoryId: "cs",
    question: "Which of the following keyboard shortcut combinations is used to create a new blank document in MS Word?",
    answer: "Ctrl + N",
    options: ["Ctrl + W", "Shift + N", "Ctrl + N", "Alt + N"],
    explanation: "Ctrl + N opens a new blank document window. (Ctrl + W closes the current active document window).",
    tip: "JKSSB SI • Ctrl+N = New Document",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q12",
    categoryId: "cs",
    question: "What is the shortcut key Ctrl + Q used for in Microsoft Word?",
    answer: "To remove the paragraph formatting",
    options: [
      "To remove the paragraph formatting",
      "To open an existing file",
      "To delete the selected text",
      "To spell check the document"
    ],
    explanation: "In MS Word, Ctrl + Q clears any direct paragraph-level formatting (such as line spacing and indents) and restores the default style formatting.",
    tip: "JKSSB SI • Ctrl+Q = Reset paragraph formatting",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q13",
    categoryId: "cs",
    question: "What is the number of slide page orientations permitted in Microsoft PowerPoint?",
    answer: "2",
    options: ["1", "2", "3", "4"],
    explanation: "PowerPoint supports two page orientations: Portrait (vertical) and Landscape (horizontal, the default presentation orientation).",
    tip: "JKSSB Graduate Level 2019 • 2 orientations (Portrait & Landscape)",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q14",
    categoryId: "cs",
    question: "A PowerPoint presentation can be saved or exported as which of the following file types?\n(i) .pdf\n(ii) .pps / .ppsx\n(iii) .jpg / .png\n(iv) .python",
    answer: "Only 1, 2 & 3",
    options: ["Only 1 & 2", "Only 2 & 4", "Only 1 & 3", "Only 1, 2 & 3"],
    explanation: "PowerPoint allows saving slides as PDF documents (.pdf), PowerPoint Slide Shows (.pps/.ppsx), and picture graphics (.jpg, .png), but cannot save files as Python scripts (.python).",
    tip: "JKSSB Graduate Level 2019",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q15",
    categoryId: "cs",
    question: "To increase the font size of the selected text by 1 point in MS Word, which key combination is used?",
    answer: "Ctrl + ]",
    options: ["Ctrl + Alt", "Ctrl + ]", "Shift + S", "Alt + Shift"],
    explanation: "Ctrl + ] increases font size by 1 point, while Ctrl + [ decreases font size by 1 point. (Ctrl + Shift + > and Ctrl + Shift + < adjust font size by preset ladder points).",
    tip: "JKSSB Graduate Level 2019 • Ctrl+] = Grow font 1pt",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q16",
    categoryId: "cs",
    question: "In MS Access 2013, what is the maximum number of characters that can be stored in a 'Short Text' data field?",
    answer: "255",
    options: ["127", "128", "255", "250"],
    explanation: "In Microsoft Access, a 'Short Text' (formerly Text) field can store up to 255 alphanumeric characters. For longer entries, the 'Long Text' (formerly Memo) data type is used.",
    tip: "JKSSB Graduate Level 2019 • Access Short Text max = 255",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q17",
    categoryId: "cs",
    question: "The default file extension for an MS Word 2016 document is:",
    answer: ".docx",
    options: [".txt", ".docx", ".pptx", ".wrdx"],
    explanation: "From MS Word 2007 onwards (including 2010, 2013, 2016, 2019, 2021, and 365), the default file format is Microsoft Word Open XML Document (.docx).",
    tip: "JKSSB Graduate Level 2019 • Word 2016 = .docx",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q18",
    categoryId: "cs",
    question: "Starting with MS Office 2007, the old default file extension for MS Access databases (.mdb) was changed to:",
    answer: ".accdb",
    options: [".mdc", ".mfc", ".net", ".accdb"],
    explanation: "Microsoft switched from Jet database engine .mdb files to ACE (Access Connectivity Engine) .accdb format in Access 2007, supporting multi-valued fields and attachments.",
    tip: "JKSSB Graduate Level 2019 • .mdb -> .accdb",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q19",
    categoryId: "cs",
    question: "In MS PowerPoint, which key combination is used to navigate to the next placeholder (or insert a new slide if on the slide's last placeholder)?",
    answer: "Ctrl + Shift + Tab",
    options: ["Alt + M", "Ctrl + Shift + Tab", "Ctrl + Enter", "Ctrl + D"],
    explanation: "In PowerPoint keyboard navigation, Ctrl + Shift + Tab cycles through placeholders on slides. Ctrl + Enter also advances between title and content placeholders and appends slides.",
    tip: "JKSSB Graduate Level 2019",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q20",
    categoryId: "cs",
    question: "In MS Excel, which keyboard shortcut combination is used to display the Font / Format Cells dialog box?",
    answer: "Ctrl + Shift + F",
    options: [
      "Alt + Shift + Down arrow",
      "Alt + Shift + Left arrow",
      "Shift + F9",
      "Ctrl + Shift + F"
    ],
    explanation: "Pressing Ctrl + Shift + F (or Ctrl + 1) directly invokes the Font tab of the Format Cells dialog box in Microsoft Excel.",
    tip: "JKSSB GL 2019 • Ctrl+Shift+F = Font dialog in Excel",
    difficulty: "intermediate"
  },

  // ==========================================
  // PART 2: Comprehensive MS Office Suite MCQs
  // ==========================================
  {
    id: "msoffice-q21",
    categoryId: "cs",
    question: "Microsoft Office Word is best defined as a(n):",
    answer: "Full featured Word processing program that can be used to create and revise professional looking documents easily",
    options: [
      "Area in the computer's main memory in which text files are stored temporarily",
      "Program that can be used only to create unformatted text files smaller than 64k",
      "Classified password that prevents unauthorized users from accessing documents",
      "Full featured Word processing program that can be used to create and revise professional looking documents easily"
    ],
    explanation: "MS Word is a full-featured word processing software application providing document creation, revision, formatting, proofreading, and desktop publishing capabilities.",
    tip: "MS Office Practice • Word Processor Definition",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q22",
    categoryId: "cs",
    question: "A word processor would be used best to:",
    answer: "type a story",
    options: ["paint a picture", "draw a diagram", "type a story", "work out income and expenses"],
    explanation: "A word processor is primarily designed for drafting and formatting text documents such as stories, essays, articles, and letters. (Paint is for drawing, Excel is for calculations).",
    tip: "IBPS Clerk 2011 • Word Processor Usage",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q23",
    categoryId: "cs",
    question: "Match the following Microsoft Office applications with their core functions:\n(i) MS Word\n(ii) MS PowerPoint\n(iii) MS Access\n(iv) MS Outlook\nFunctions:\n(a) Personal Management Software\n(b) Relational DBMS\n(c) Used to create professional looking documents\n(d) Display information through slides",
    answer: "i - c, ii - d, iii - b, iv - a",
    options: [
      "i - a, ii - c, iii - b, iv - d",
      "i - d, ii - c, iii - b, iv - a",
      "i - c, ii - d, iii - b, iv - a",
      "i - c, ii - b, iii - a, iv - d"
    ],
    explanation: "MS Word creates documents (c); MS PowerPoint delivers slide presentations (d); MS Access manages relational databases (b); MS Outlook manages emails and personal info (a).",
    tip: "MS Office Suite Core Components",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q24",
    categoryId: "cs",
    question: "According to Microsoft specifications, what is the maximum file size limit for text alone in an MS Word document?",
    answer: "32 MB",
    options: ["16 MB", "100 MB", "32 MB", "256 MB"],
    explanation: "The maximum text-only file size supported in Microsoft Word is 32 MB (not including embedded graphics, which can expand total document size to 512 MB).",
    tip: "MS Word Maximum Limits • Text only = 32 MB",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q25",
    categoryId: "cs",
    question: "Which of the following software applications is NOT a full-featured word processor?",
    answer: "Notepad",
    options: ["MS Word", "Google Docs", "Apple Pages", "Notepad"],
    explanation: "Notepad is a plain text editor with no document styling, font formatting, or table tools. MS Word, Google Docs, and Pages are word processors.",
    tip: "Text Editor vs Word Processor • Notepad = Plain text editor",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q26",
    categoryId: "cs",
    question: "You can open Microsoft Word directly from the Windows Run dialog (Win + R) by entering:",
    answer: "winword",
    options: ["Word", "msword", "Microsoft word", "winword"],
    explanation: "The Windows executable program filename for Microsoft Word is 'winword.exe'. Typing 'winword' into the Run prompt opens Word.",
    tip: "Run Command • Word = winword, Excel = excel, PPT = powerpnt",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q27",
    categoryId: "cs",
    question: "What is the default file extension for Microsoft Word documents saved in versions post-2007 (such as Word 2010 to 365)?",
    answer: ".docx",
    options: [".doc", ".docx", ".docc", ".doc7"],
    explanation: "Starting with Microsoft Office 2007, Word adopted the compressed XML file format ending in the extension .docx.",
    tip: "Word Document Extension • Post-2007 = .docx",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q28",
    categoryId: "cs",
    question: "The round 'Office Button' introduced in MS Office 2007 was replaced in MS Office 2010 and newer versions by which tab?",
    answer: "File",
    options: ["Home", "Office", "File", "Format"],
    explanation: "MS Office 2010 replaced the circular Office Button with the blue 'File' tab, which opens the Backstage view for document management.",
    tip: "MS Office Backstage • Office Button -> File tab",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q29",
    categoryId: "cs",
    question: "In Microsoft Word, tools such as Shapes, Header, Footer, Text Box, Pictures, and Tables are found under which ribbon tab?",
    answer: "Insert",
    options: ["Home", "Design", "Insert", "View"],
    explanation: "The Insert tab is used to add external objects and structural elements (tables, images, charts, headers, footers, page numbers, text boxes) into the document.",
    tip: "Ribbon Navigation • Insert Tab",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q30",
    categoryId: "cs",
    question: "Which ribbon tab in MS Word contains the Font, Paragraph, Styles, and Clipboard command groups?",
    answer: "Home",
    options: ["Home", "Design", "Insert", "View"],
    explanation: "The Home tab is the primary editing tab in Word, containing Clipboard tools (Cut, Copy, Paste), Font styling, Paragraph alignment/lists, and Styles.",
    tip: "Ribbon Navigation • Home Tab = Formatting core",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q31",
    categoryId: "cs",
    question: "Which ribbon tab in MS Word houses proofing and language tools like Spelling & Grammar, Thesaurus, Word Count, and Translate?",
    answer: "Review",
    options: ["Home", "Design", "Insert", "Review"],
    explanation: "The Review tab is dedicated to proofreading, language translation, comments, tracking changes, and document protection.",
    tip: "Ribbon Navigation • Review Tab = Proofing & Language",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q32",
    categoryId: "cs",
    question: "Which ribbon tab in MS Word contains page setup tools such as Margins, Orientation, Page Size, Columns, and Paragraph Indents?",
    answer: "Layout",
    options: ["View", "Design", "Review", "Layout"],
    explanation: "The Layout (or Page Layout) tab controls physical page geometry including margins, paper size, portrait/landscape orientation, and line breaks.",
    tip: "Ribbon Navigation • Layout Tab = Page setup & geometry",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q33",
    categoryId: "cs",
    question: "Which ribbon tab in MS Word consists of Table of Contents, Footnotes & Endnotes, Citations & Bibliography, Captions, and Index?",
    answer: "References",
    options: ["Mailings", "Help", "References", "Insert"],
    explanation: "The References tab is used for creating academic and formal document apparatus, including automated tables of contents, footnotes, citations, and indexes.",
    tip: "Ribbon Navigation • References Tab",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q34",
    categoryId: "cs",
    question: "The additional space added to the left, top, or inside binding margin of a printed document to accommodate binding or punch holes is known as:",
    answer: "Gutter",
    options: ["Indent", "Gutter", "Margin", "Punch"],
    explanation: "A gutter margin adds extra blank space to the side or top margin of a page to ensure text is not obscured after pages are stapled, spiral-bound, or hole-punched.",
    tip: "Word Typography • Gutter Margin = Binding space",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q35",
    categoryId: "cs",
    question: "In word processing and typography, bullet points are best described as:",
    answer: "Unordered lists",
    options: ["Numbered lists", "Ordered lists", "Unordered lists", "Tabulated lists"],
    explanation: "Bullets create unordered lists where the sequence of items is arbitrary. Numbers create ordered lists where sequential hierarchy matters.",
    tip: "Word Formatting • Bullets = Unordered lists",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q36",
    categoryId: "cs",
    question: "A document in Microsoft Word can be saved using which of the following actions?",
    answer: "All of the above",
    options: [
      "Clicking Save option from the File menu",
      "Selecting the Save icon from the Quick Access toolbar",
      "Pressing the keyboard shortcut Ctrl + S",
      "All of the above"
    ],
    explanation: "All three methods save changes to the current document: File > Save, the Quick Access floppy disk icon, or the universal shortcut Ctrl + S.",
    tip: "Word Basics • Saving documents",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q37",
    categoryId: "cs",
    question: "Which of the following early operating systems lacked built-in native peer-to-peer networking support between computers?",
    answer: "Windows 3.1",
    options: ["Windows 3.1", "Windows 95", "Windows 2000", "Windows NT"],
    explanation: "Windows 3.1 did not include native networking protocols; peer-to-peer networking was first introduced in Windows for Workgroups 3.11 and built into Windows 95/NT.",
    tip: "Operating Systems History • Windows 3.1 had no native networking",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q38",
    categoryId: "cs",
    question: "Match the following MS Word shortcut keys with their respective actions:\n(i) Ctrl + K\n(ii) Ctrl + M\n(iii) Ctrl + Alt + 1\n(iv) Ctrl + Space\nActions:\n(a) Indent the paragraph\n(b) Apply Heading 1 style\n(c) Clear character formatting to default font\n(d) Insert a hyperlink",
    answer: "i - d, ii - a, iii - b, iv - c",
    options: [
      "i - a, ii - c, iii - b, iv - d",
      "i - d, ii - a, iii - b, iv - c",
      "i - c, ii - d, iii - b, iv - a",
      "i - c, ii - b, iii - a, iv - d"
    ],
    explanation: "Ctrl + K inserts hyperlink (d); Ctrl + M increases left indent (a); Ctrl + Alt + 1 applies Heading 1 (b); Ctrl + Space removes manual character formatting (c).",
    tip: "MS Word Shortcuts • Essential navigation and styles",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q39",
    categoryId: "cs",
    question: "In MS Word, the keyboard combination Ctrl + Shift + '+' (plus sign) is used to apply:",
    answer: "Superscript",
    options: ["Right align the Paragraph", "Increase font size", "Superscript", "Increase space between lines"],
    explanation: "Ctrl + Shift + '+' formats highlighted text as Superscript (raised above the baseline, e.g. x²). Ctrl + '=' formats text as Subscript (below baseline, e.g. H₂O).",
    tip: "Word Formatting • Superscript = Ctrl+Shift+Plus, Subscript = Ctrl+=",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q40",
    categoryId: "cs",
    question: "Match the following MS Word keyboard shortcuts with their functions:\n(i) Ctrl + Shift + F\n(ii) Ctrl + 5\n(iii) Ctrl + Up-arrow\n(iv) Ctrl + Delete\nFunctions:\n(a) Spacing of 1.5 lines between paragraph lines\n(b) Open Font Options / Dialog\n(c) Delete the word to the right of cursor\n(d) Move cursor to the beginning of the paragraph",
    answer: "i - b, ii - a, iii - d, iv - c",
    options: [
      "i - b, ii - a, iii - d, iv - c",
      "i - d, ii - a, iii - b, iv - c",
      "i - c, ii - d, iii - b, iv - a",
      "i - c, ii - b, iii - a, iv - d"
    ],
    explanation: "Ctrl + Shift + F opens Font dialog (b); Ctrl + 5 sets 1.5 line spacing (a); Ctrl + Up jumps to start of paragraph (d); Ctrl + Delete deletes the next full word (c).",
    tip: "MS Word Navigation & Line Spacing Shortcuts",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q41",
    categoryId: "cs",
    question: "A computer application specifically designed for the organization, calculation, analysis, and storage of data in tabular grid form is called a:",
    answer: "Spreadsheet",
    options: ["Word processor", "Cell", "Spreadsheet", "Tableau"],
    explanation: "A spreadsheet (such as Microsoft Excel, Google Sheets, or Lotus 1-2-3) organizes numbers and text into rows and columns of cells for calculation and analysis.",
    tip: "Spreadsheet Fundamentals",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q42",
    categoryId: "cs",
    question: "Which of the following software applications is NOT a spreadsheet program?",
    answer: "MS Access",
    options: ["Snowball / Calc", "Corel Quattro Pro", "Apple Numbers", "MS Access"],
    explanation: "MS Access is a Relational Database Management System (RDBMS). Corel Quattro Pro, Apple Numbers, and OpenOffice Calc are spreadsheet software.",
    tip: "Software Categorization • MS Access is an RDBMS",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q43",
    categoryId: "cs",
    question: "Which of the following file extensions can be generated and used by Microsoft Excel?",
    answer: "All of these (.xlsx, .xls, .xlt, .xlm)",
    options: [".xlsx and .xls (workbooks)", ".xlt (template)", ".xlm (macro sheet)", "All of these (.xlsx, .xls, .xlt, .xlm)"],
    explanation: "Excel supports .xlsx (default workbook), .xls (legacy workbook), .xlt/.xltx (templates), and .xlm/.xlsm (macro-enabled workbooks).",
    tip: "Excel File Extensions • Comprehensive format list",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q44",
    categoryId: "cs",
    question: "Which of the following is NOT a valid built-in formula function name in Microsoft Excel?",
    answer: "SquareRoot",
    options: ["COUNT()", "COUNTA()", "TRIM()", "SquareRoot"],
    explanation: "In Microsoft Excel, calculating square root is performed with the function =SQRT(), not SquareRoot.",
    tip: "Excel Functions • Square root in Excel is =SQRT()",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q45",
    categoryId: "cs",
    question: "Which of the following statements is FALSE regarding Microsoft Excel?",
    answer: "By default a workbook has 3 sheets in MS Excel 2016",
    options: [
      "A cell is the intersection of rows and columns.",
      "A workbook may contain more than one worksheet.",
      "Columns are identified using letters of the English alphabet.",
      "By default a workbook has 3 sheets in MS Excel 2016"
    ]
    ,
    explanation: "In MS Excel 2013, 2016, 2019, and 365, new workbooks open with only 1 default worksheet ('Sheet1') by default. Older Excel versions (2010 and prior) defaulted to 3 sheets.",
    tip: "Excel Workbooks • Excel 2016 default = 1 sheet",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q46",
    categoryId: "cs",
    question: "A type of chart in Excel where categories are arranged along the vertical axis and numerical values along the horizontal axis using rectangular bars is a:",
    answer: "Bar Chart",
    options: ["Column Chart", "Pie Chart", "Bar Chart", "Line Chart"],
    explanation: "In Excel terminology, a Bar Chart runs horizontally, comparing values across categories. A Column Chart displays vertical bars.",
    tip: "Excel Charts • Bar = Horizontal, Column = Vertical",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q47",
    categoryId: "cs",
    question: "A _____ in MS Excel is an action or sequence of recorded commands that you can execute repeatedly to automate repetitive tasks.",
    answer: "Macro",
    options: ["Function", "Macro", "Formula", "Pivot Table"],
    explanation: "A Macro records keystrokes and clicks in VBA (Visual Basic for Applications) so that complex multi-step workflows can be replayed with a single command.",
    tip: "Excel Automation • Macro = Recorded sequence of actions",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q48",
    categoryId: "cs",
    question: "Which of the following is NOT a valid cell mode displayed on the MS Excel status bar?",
    answer: "Copy mode",
    options: ["Ready mode", "Edit mode", "Copy mode", "Enter mode"],
    explanation: "The four standard cell editing modes in Excel are: Ready (normal standby), Enter (typing initial data), Edit (modifying cell text), and Point (selecting cells for formula). 'Copy mode' does not exist.",
    tip: "Excel Cell Modes • Ready, Enter, Edit, Point",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q49",
    categoryId: "cs",
    question: "Pressing which function key while a cell is selected switches MS Excel directly into 'Edit' mode?",
    answer: "F2",
    options: ["F1", "F2", "F3", "F5"],
    explanation: "F2 puts the active cell into Edit mode with the cursor placed at the end of the cell contents. (F1 is Help, F5 is Go To).",
    tip: "Excel Function Keys • F2 = Edit active cell",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q50",
    categoryId: "cs",
    question: "Match the following MS Excel function keys with their default actions:\n(i) F2\n(ii) F5\n(iii) F11\n(iv) Shift + F3\nActions:\n(a) Create/insert a chart sheet\n(b) Edit the active cell\n(c) Open the Insert Function formula window\n(d) Go to a specific cell / range",
    answer: "i - b, ii - d, iii - a, iv - c",
    options: [
      "i - a, ii - c, iii - b, iv - d",
      "i - d, ii - a, iii - b, iv - c",
      "i - b, ii - d, iii - a, iv - c",
      "i - c, ii - b, iii - a, iv - d"
    ],
    explanation: "F2 edits the cell (b); F5 opens Go To dialog (d); F11 inserts a standalone chart sheet (a); Shift + F3 opens the Insert Function wizard (c).",
    tip: "Excel Function Keys Mastery",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q51",
    categoryId: "cs",
    question: "Which of the following statements regarding MS Excel Cell Modes is INCORRECT?",
    answer: "None of these (all statements are true)",
    options: [
      "Excel mode status displays 'Ready' when the user is not actively editing or inserting data",
      "Double clicking a populated cell places the cell into 'Edit' mode",
      "Double clicking a blank cell places the cell into 'Enter' mode",
      "None of these (all statements are true)"
    ],
    explanation: "All statements accurately describe Excel cell state transitions: idle state is Ready, opening a filled cell enters Edit mode, and starting on an empty cell activates Enter mode.",
    tip: "Excel Status Bar Diagnostics",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q52",
    categoryId: "cs",
    question: "Match the following Excel shortcut combinations with their functions:\n(i) Ctrl + Tab\n(ii) Ctrl + Shift + #\n(iii) Ctrl + Shift + ^\n(iv) Shift + Space\nFunctions:\n(a) Select the entire active row\n(b) Apply Scientific number format\n(c) Apply Date format (day, month, year)\n(d) Switch between open Excel workbooks",
    answer: "i - d, ii - c, iii - b, iv - a",
    options: [
      "i - a, ii - c, iii - b, iv - d",
      "i - d, ii - c, iii - b, iv - a",
      "i - b, ii - d, iii - a, iv - c",
      "i - c, ii - b, iii - a, iv - d"
    ],
    explanation: "Ctrl + Tab cycles open Excel windows (d); Ctrl + Shift + # applies Date format (c); Ctrl + Shift + ^ applies Exponential/Scientific format (b); Shift + Space selects entire row (a).",
    tip: "Excel Formatting Shortcuts • # = Date, ^ = Scientific, Shift+Space = Row",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q53",
    categoryId: "cs",
    question: "In Microsoft PowerPoint, which of the following operations can be performed?",
    answer: "All of the above",
    options: [
      "Insert and format textual typography",
      "Insert and manipulate multimedia graphic images and shapes",
      "Present animated information sequentially using slide shows",
      "All of the above"
    ],
    explanation: "PowerPoint is a presentation program that integrates text formatting, shapes, digital imagery, audio/video clips, animations, and slide transitions.",
    tip: "PowerPoint Capabilities",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q54",
    categoryId: "cs",
    question: "You can launch Microsoft PowerPoint from the Windows Run dialog by typing:",
    answer: "powerpnt",
    options: ["PowerPoint", "ppt", "powerpnt", "Microsoft PowerPoint"],
    explanation: "The executable binary name for Microsoft PowerPoint is 'powerpnt.exe'. Entering 'powerpnt' in the Run window starts PowerPoint.",
    tip: "Windows Run Commands • PowerPoint = powerpnt",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q55",
    categoryId: "cs",
    question: "Which area of the PowerPoint editing window displays miniature thumbnail views of all slides in the active presentation?",
    answer: "Slide Pane (Thumbnail pane)",
    options: ["Slide Area", "Slide Pane (Thumbnail pane)", "Notes Pane", "Ribbon"],
    explanation: "The Slides Thumbnail Pane on the left side of Normal view shows miniature versions of all slides, allowing users to reorder, duplicate, or delete slides quickly.",
    tip: "PowerPoint Interface • Thumbnail Slide Pane",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q56",
    categoryId: "cs",
    question: "Match the PowerPoint presentation views with their primary descriptions:\n(i) Normal View\n(ii) Slide Sorter View\n(iii) Notes Page View\n(iv) Slide Show View\nDescriptions:\n(a) Displays all slides as thumbnails for effortless reordering and organizing\n(b) Displays the slide thumbnail above with full presenter notes typed below\n(c) The main tripartite authoring view where individual slides are designed\n(d) Full-screen delivery view used to present slides to the audience",
    answer: "i - c, ii - a, iii - b, iv - d",
    options: [
      "i - a, ii - c, iii - b, iv - d",
      "i - d, ii - a, iii - b, iv - c",
      "i - b, ii - d, iii - a, iv - c",
      "i - c, ii - a, iii - b, iv - d"
    ],
    explanation: "Normal view is the main editing screen (c); Slide Sorter displays grid thumbnails (a); Notes Page shows speaker notes layout (b); Slide Show delivers full-screen presentation (d).",
    tip: "PowerPoint Views Mastery",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q57",
    categoryId: "cs",
    question: "Under the Master Views group on the View tab in MS PowerPoint, which of the following is NOT a Master view?",
    answer: "Outline View",
    options: ["Slide Master View", "Handout Master View", "Notes Master View", "Outline View"],
    explanation: "PowerPoint has three Master Views: Slide Master, Handout Master, and Notes Master. 'Outline View' is a presentation editing view, not a Master view.",
    tip: "PowerPoint Views • 3 Master Views: Slide, Handout, Notes",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q58",
    categoryId: "cs",
    question: "Match the following PowerPoint keyboard shortcuts with their functions:\n(i) Ctrl + M\n(ii) F5\n(iii) Esc\n(iv) Ctrl + End\nFunctions:\n(a) Move cursor to the end of the active text box\n(b) Run the slide show from the first slide\n(c) Insert a new slide into the presentation\n(d) Terminate and exit the slide show",
    answer: "i - c, ii - b, iii - d, iv - a",
    options: [
      "i - a, ii - c, iii - b, iv - d",
      "i - d, ii - a, iii - b, iv - c",
      "i - b, ii - d, iii - a, iv - c",
      "i - c, ii - b, iii - d, iv - a"
    ],
    explanation: "Ctrl + M inserts a new slide (c); F5 begins slide show from beginning (b); Esc ends slide show (d); Ctrl + End navigates to end of active text (a).",
    tip: "PowerPoint Shortcut Keys",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q59",
    categoryId: "cs",
    question: "Microsoft Access is architecturally classified as what type of database management system?",
    answer: "Relational Database Management System (RDBMS)",
    options: [
      "Object Oriented Database System",
      "Hierarchical Database System",
      "Relational Database Management System (RDBMS)",
      "Flat File Database System"
    ],
    explanation: "MS Access is an RDBMS that organizes data into tables consisting of rows and columns, establishing relational integrity via primary and foreign keys.",
    tip: "MS Access Architecture • Relational DBMS",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q60",
    categoryId: "cs",
    question: "In computer science and data management, the acronym DBMS stands for:",
    answer: "Database Management System",
    options: [
      "Database Based Management System",
      "Database Management System",
      "Database Managing Software",
      "Database Based Modelling Software"
    ],
    explanation: "DBMS stands for Database Management System, a software package designed to define, manipulate, retrieve, and manage data in a database.",
    tip: "Database Acronyms • DBMS = Database Management System",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q61",
    categoryId: "cs",
    question: "You can launch Microsoft Access directly from the Windows Run prompt by typing:",
    answer: "msaccess",
    options: ["access", "msaccess", "acss", "Microsoft access"],
    explanation: "The Windows executable name for Microsoft Access is 'msaccess.exe'. Typing 'msaccess' in the Run window executes the program.",
    tip: "Windows Run Commands • Access = msaccess",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q62",
    categoryId: "cs",
    question: "The foundational core components (objects) of a Microsoft Access database do NOT include:",
    answer: "Records",
    options: ["Tables", "Records", "Forms", "Queries and Reports"],
    explanation: "The four main database objects in MS Access are Tables, Queries, Forms, and Reports. 'Records' (rows) are data items inside tables, not standalone database objects.",
    tip: "Access Objects • Tables, Queries, Forms, Reports",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q63",
    categoryId: "cs",
    question: "SQL, the domain-specific language used for querying and managing relational databases, stands for:",
    answer: "Structured Query Language",
    options: [
      "Standard Query Language",
      "Structured Query Language",
      "Structured Quality Language",
      "Standard Quiz Language"
    ],
    explanation: "SQL stands for Structured Query Language, the standardized programming language used to execute queries, retrieve records, and update relational databases.",
    tip: "Database Standards • SQL = Structured Query Language",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q64",
    categoryId: "cs",
    question: "Which field data type in Microsoft Access can accommodate the largest individual data size?",
    answer: "OLE Object",
    options: ["Text", "Memo", "Number", "OLE Object"],
    explanation: "In MS Access, OLE Object fields can store external binary objects, pictures, spreadsheets, and files up to 1 GB (or 2 GB in modern Access), far exceeding Text (255 chars) or Memo (65,535 chars).",
    tip: "Access Data Types • OLE Object up to 1-2 GB",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q65",
    categoryId: "cs",
    question: "A field or combination of fields in an Access table that uniquely identifies each record and strictly cannot contain a NULL value is a:",
    answer: "Primary Key",
    options: ["Super field", "Primary Key", "ID field", "Closed Field"],
    explanation: "A Primary Key enforces entity integrity by uniquely identifying every record in a table and forbidding duplicate or NULL values.",
    tip: "Relational Concepts • Primary Key = Unique + NOT NULL",
    difficulty: "beginner"
  },
  {
    id: "msoffice-q66",
    categoryId: "cs",
    question: "Which of the following statements is FALSE regarding Microsoft Access database architecture?",
    answer: "A field can never contain a NULL value",
    options: [
      "A database may contain more than one table.",
      "The rows of a table are also called records (tuples).",
      "The columns of a table are also called fields (attributes).",
      "A field can never contain a NULL value"
    ],
    explanation: "Unless a field is configured as a Primary Key or has 'Required = Yes', database fields can indeed contain NULL (representing absent or unrecorded data).",
    tip: "Access Constraints • Fields can allow NULL by default",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q67",
    categoryId: "cs",
    question: "When an MS Access table is opened in 'Design View':",
    answer: "Only the fields and their data types are visible and can be edited.",
    options: [
      "You can enter and edit the data in the table directly.",
      "Only the fields and their data types are visible and can be edited.",
      "All the data rows present in the table are visible.",
      "All of the above"
    ],
    explanation: "Design View displays the schema structure (Field Name, Data Type, Description, and Field Properties) without showing actual table records. Datasheet View displays the rows of data.",
    tip: "Access Views • Design View = Schema, Datasheet View = Data",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q68",
    categoryId: "cs",
    question: "In Microsoft Access, what are the respective functions of the keyboard shortcuts Ctrl + N and Alt + N?",
    answer: "Create a new database and create a new database object",
    options: [
      "Create a new database object and create a new database",
      "Create a new database and create a new database object",
      "Insert a new record in the table and create a new table",
      "Create a new table and insert a new record in the table"
    ],
    explanation: "In MS Access, Ctrl + N initiates the creation of a brand new Access database file, whereas Alt + N creates a new database object (table, query, form, etc.).",
    tip: "Access Shortcuts • Ctrl+N = New DB, Alt+N = New DB Object",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q69",
    categoryId: "cs",
    question: "In MS Access Datasheet View, which keyboard shortcut is used to quickly add a new record to a table?",
    answer: "Ctrl + '+'",
    options: ["Ctrl + '+'", "Ctrl + N", "Ctrl + '-'", "Ctrl + Shift + A"],
    explanation: "In Access Datasheet View, pressing Ctrl + '+' (plus sign) appends a new blank record at the bottom of the table. (Ctrl + '-' deletes the current record).",
    tip: "Access Shortcuts • Ctrl + Plus = Add record, Ctrl + Minus = Delete record",
    difficulty: "intermediate"
  },
  {
    id: "msoffice-q70",
    categoryId: "cs",
    question: "Which of the following functions can be performed using Microsoft Outlook?",
    answer: "All of the Above (Emails, Tasks, Notes, Contacts)",
    options: [
      "Send, receive, and manage emails",
      "Schedule appointments and recurring tasks",
      "Create digital notes and manage contact address books",
      "All of the Above (Emails, Tasks, Notes, Contacts)"
    ],
    explanation: "MS Outlook is an integrated Personal Information Manager (PIM) that handles email communication, calendar appointments, task lists, digital sticky notes, and contact directories.",
    tip: "MS Outlook Capabilities",
    difficulty: "beginner"
  }
];
