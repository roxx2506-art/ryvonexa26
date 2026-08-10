const eventsData = [
  {
    id: 'code-chaos',
    title: 'Code Chaos',
    category: 'technical',
    tagline: 'Ultimate Competitive Speed Debugging & Coding Battle',
    shortDesc: 'Test your algorithmic agility, fix intentional bugs, and race against time in multi-language challenges.',
    fullDesc: 'Code Chaos is the flagship competitive programming challenge of RYVONEXA 2026. Participants will face a 3-stage challenge starting from lightning debugging rounds to complex algorithmic optimization problems.',
    rules: [
      'Individual participation or teams of max 2.',
      'Round 1: Rapid Debugging (15 questions in 20 mins).',
      'Round 2: Algorithmic Logic Building.',
      'Round 3: Speed Coding Boss Battle.'
    ],
    teamSize: '1 - 2 Members',
    time: '11:00 AM - 1:00 PM',
    venue: 'Computer Lab 3 (CC3)',
    icon: 'terminal',
    coordinators: [
      { name: 'Aravind Swamy', phone: '+91 98765 43210' },
      { name: 'Priya Dharshini', phone: '+91 98765 43211' }
    ]
  },
  {
    id: 'webforge',
    title: 'WebForge Hackathon',
    category: 'technical',
    tagline: 'Build Futuristic Cyber & Web Applications',
    shortDesc: 'A rapid 4-hour web creation hackathon to prototype next-gen web applications, glassmorphism UIs, or AI tools.',
    fullDesc: 'WebForge challenges developers, UI designers, and visionaries to prototype high-tech web solutions for real-world problems. Theme will be revealed at commencement.',
    rules: [
      'Team size: 2 to 4 members.',
      'Bring your own laptops and required dev tools.',
      'Live code submission on GitHub repository.'
    ],
    teamSize: '2 - 4 Members',
    time: '11:00 AM - 3:00 PM',
    venue: 'AI Innovation Hub (Lab 1)',
    icon: 'layout',
    coordinators: [
      { name: 'Karthik Raja', phone: '+91 98765 43212' }
    ]
  },
  {
    id: 'paper-matrix',
    title: 'Paper Matrix',
    category: 'technical',
    tagline: 'Research Paper & Innovation Presentation',
    shortDesc: 'Present your groundbreaking research in AI, Quantum Computing, Cybersecurity, Cloud, and Web3.',
    fullDesc: 'Paper Matrix offers an academic platform to showcase original research work and innovative project abstracts before a panel of distinguished professors.',
    rules: [
      'Team size: 1 to 3 members.',
      'Presentation duration: 8 mins + 2 mins Q&A.',
      'PPT template must follow IEEE standard layout format.'
    ],
    teamSize: '1 - 3 Members',
    time: '11:30 AM - 1:30 PM',
    venue: 'Seminar Hall B',
    icon: 'file-text',
    coordinators: [
      { name: 'Dr. Suresh Kumar', phone: '+91 98765 43214' }
    ]
  },
  {
    id: 'ai-nexus',
    title: 'AI Nexus',
    category: 'technical',
    tagline: 'Prompt Engineering & Generative AI Battle',
    shortDesc: 'Master prompt craftsmanship, benchmark LLMs, and solve generative AI challenges in record time.',
    fullDesc: 'AI Nexus puts your prompt engineering skills to the test. Create precise instructions to coax multimodal AI models into rendering exact target code and outputs.',
    rules: [
      'Individual participation.',
      'Round 1: Image Generation Reverse-Engineering.',
      'Round 2: Code Synthesis via Prompts.'
    ],
    teamSize: '1 Member',
    time: '2:00 PM - 3:30 PM',
    venue: 'Data Science Lab (Lab 4)',
    icon: 'cpu',
    coordinators: [
      { name: 'Rohan Sharma', phone: '+91 98765 43216' }
    ]
  },
  {
    id: 'pixel-craft',
    title: 'Pixel Craft',
    category: 'non-technical',
    tagline: 'UI/UX & Visual Graphic Design Challenge',
    shortDesc: 'Craft mesmerizing digital posters, glassmorphic interfaces, and brand identities under futuristic themes.',
    fullDesc: 'Pixel Craft is the ultimate playground for visual storytellers and graphic designers. Design high-fidelity UI screens or event posters using Figma, Adobe XD, Photoshop, or Illustrator.',
    rules: [
      'Individual or Duo teams.',
      'Duration: 90 Minutes.',
      'Assets provided on-spot; custom designs mandatory.',
      'Export formats: PNG + Source Figma/PSD link.'
    ],
    teamSize: '1 - 2 Members',
    time: '11:00 AM - 12:30 PM',
    venue: 'Design Studio Lab',
    icon: 'palette',
    coordinators: [
      { name: 'Ananya Roy', phone: '+91 98765 43217' }
    ]
  },
  {
    id: 'gaming-arena',
    title: 'Gaming Arena',
    category: 'non-technical',
    tagline: 'E-Sports Showdown (Valorant & BGMI)',
    shortDesc: 'Battle against elite squad teams in high-octane tactical shooter rounds to claim the championship trophy.',
    fullDesc: 'Step into the Gaming Arena! Compete in fast-paced LAN/Online matches in Valorant (PC 5v5) and BGMI (Mobile Squads). High-refresh rate displays and low latency Wi-Fi provided.',
    rules: [
      'Team size: 4 to 5 players per team.',
      'Knockout tournament structure.',
      'Strict anti-cheat policy & device checks.',
      'Official game rules & maps will apply.'
    ],
    teamSize: '4 - 5 Members',
    time: '2:00 PM - 4:00 PM',
    venue: 'Main Auditorium Arena',
    icon: 'gamepad-2',
    coordinators: [
      { name: 'Vikram Singh', phone: '+91 98765 43218' },
      { name: 'Sanjay Dutt', phone: '+91 98765 43219' }
    ]
  },
  {
    id: 'tech-trivia',
    title: 'Tech Trivia & Quiz',
    category: 'non-technical',
    tagline: 'High-Speed Cyber Quiz & Tech Riddles',
    shortDesc: 'Test your knowledge across pop tech culture, tech history, sci-fi movies, and tech titan trivia.',
    fullDesc: 'Fastest finger first! Tech Trivia combines buzzer rounds, logo guessing, audio snippet identification, and tech meme quizzes into an energetic stage competition.',
    rules: [
      'Teams of 2.',
      'Prelims written round (20 MCQs).',
      'Top 6 teams advance to Live Stage Finals.',
      'Buzzer penalty applies in finals.'
    ],
    teamSize: '2 Members',
    time: '2:00 PM - 3:15 PM',
    venue: 'Auditorium Hall 2',
    icon: 'help-circle',
    coordinators: [
      { name: 'Meera Nair', phone: '+91 98765 43220' }
    ]
  },
  {
    id: 'cinebyte',
    title: 'CineByte',
    category: 'non-technical',
    tagline: 'Short Film & Cyber Reel Contest',
    shortDesc: 'Showcase your cinematography, editing skills, and creative storytelling in a 60-second theme reel.',
    fullDesc: 'CineByte invites young filmmakers to capture campus vibes, technology themes, or sci-fi concepts in an engaging short film or reel video.',
    rules: [
      'Team size: Up to 4 members.',
      'Video duration: 60 to 180 seconds.',
      'Must include original soundtrack or royalty-free audio.',
      'Submission link: MP4 via Google Drive.'
    ],
    teamSize: '1 - 4 Members',
    time: '1:30 PM - 3:00 PM',
    venue: 'AV Media Room',
    icon: 'film',
    coordinators: [
      { name: 'Rahul Varma', phone: '+91 98765 43221' }
    ]
  }
];

module.exports = eventsData;
