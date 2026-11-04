/** Portfolio content based on Samkit's provided CV and requested marketing skills. */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Samkit Jansari',
  displayName: 'Samkit',
  firstName: 'SAMKIT',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SAMKIT ORIGINAL',
  role: 'React.js Developer',
  tagline: ['React.js Developer', 'Video Editor', 'Social Media'],
  intro:
    'A detail-oriented React developer with a strong foundation in JavaScript and front-end development, creating responsive user interfaces and web experiences.',
  location: 'Patan, Gujarat',
  email: '',
  links: {
    linkedin: '',
    github: 'https://github.com/Samkit2704',
  },
  resumePdf: '/assets/Samkit_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Samkit',
  },
  interests: ['Reading', 'Photography', 'Music', 'Fitness', 'Entrepreneurship'],
};

export const education = [
  {
    school: 'Gokul Global University',
    place: 'Siddhapur, Gujarat, India',
    degree: 'Bachelor of Information Technology',
    period: 'Dates not listed on CV',
  },
];

export const experience = [
  {
    company: 'Praxware Technology',
    role: 'React Developer',
    place: 'Ahmedabad, India',
    period: 'May 2024 – November 2024',
    points: [
      'Developed and maintained responsive user interfaces using React.js, enhancing usability and performance.',
      'Collaborated with senior developers to implement features and fix bugs.',
      'Integrated RESTful APIs to fetch and display dynamic data.',
      'Used Redux and React Context for state management.',
      'Used Git for version control and participated in code reviews.',
      'Assisted with component optimization to improve loading times and performance.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'ecommerce-website',
    title: 'Footwear E-commerce Website',
    year: 'CV project',
    genre: 'E-commerce • React.js',
    logline: 'A responsive footwear shopping experience with product discovery, filtering, cart, and checkout.',
    stack: ['React.js', 'JavaScript', 'React Context API', 'Material UI', 'React Router', 'HTML'],
    build: [
      'Developed a fully responsive e-commerce website for footwear using React.js.',
      'Implemented a product catalog, search functionality, and dynamic product filters.',
      'Integrated a shopping cart and checkout flow with React Context API for state management.',
      'Designed the interface with Material UI and ensured cross-browser compatibility.',
      'Implemented client-side routing with React Router.',
      'Improved loading performance with lazy loading and code splitting.',
    ],
    features: [
      'Responsive footwear storefront',
      'Product catalog, search, and filtering',
      'Shopping cart and checkout',
      'React Context API state management',
      'Material UI components',
      'React Router navigation',
      'Lazy loading and code splitting',
    ],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Building responsive web interfaces',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React Hooks', mono: 'Rh' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'Material UI', mono: 'Mu' },
      { name: 'React Router', mono: 'Rr' },
    ],
  },
  {
    id: 'apis-state',
    title: 'APIs & State',
    subtitle: 'Connecting data and managing UI state',
    skills: [
      { name: 'RESTful APIs', mono: 'Api' },
      { name: 'Redux', mono: 'Rx' },
      { name: 'React Context', mono: 'Rc' },
      { name: 'Git', mono: 'Gt' },
    ],
  },
  {
    id: 'databases',
    title: 'Database',
    subtitle: 'Database skills listed on the CV',
    skills: [{ name: 'MySQL', mono: 'My' }],
  },
  {
    id: 'digital-media',
    title: 'Digital Media',
    subtitle: 'Social media • Video editing',
    skills: [
      { name: 'Social Media', mono: 'SM' },
      { name: 'Video Editing', mono: 'VE' },
    ],
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    subtitle: 'Campaigns • Optimization • Measurement',
    skills: [
      { name: 'Paid Ads (Google/Meta)', mono: 'Ads' },
      { name: 'SEO / SEM', mono: 'SEO' },
      { name: 'Campaign Planning', mono: 'CP' },
      { name: 'Social Media Marketing', mono: 'SM' },
      { name: 'Content Strategy', mono: 'CS' },
      { name: 'Analytics & Reporting', mono: 'AR' },
      { name: 'Conversion Optimization', mono: 'CO' },
      { name: 'Email Marketing', mono: 'EM' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Languages listed on the CV',
    skills: [
      { name: 'English', mono: 'En' },
      { name: 'Gujarati', mono: 'Gu' },
      { name: 'Hindi', mono: 'Hi' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'React.js': ['Praxware Technology', 'Footwear E-commerce Website'],
  JavaScript: ['Footwear E-commerce Website'],
  'React Hooks': ['Listed on Samkit’s CV'],
  HTML: ['Listed on Samkit’s CV'],
  'Material UI': ['Footwear E-commerce Website'],
  'React Router': ['Footwear E-commerce Website'],
  'RESTful APIs': ['Praxware Technology'],
  Redux: ['Praxware Technology'],
  'React Context': ['Praxware Technology', 'Footwear E-commerce Website'],
  Git: ['Praxware Technology'],
  MySQL: ['Listed on Samkit’s CV'],
  'Social Media': ['Listed on Samkit’s CV'],
  'Video Editing': ['Listed on Samkit’s CV'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: 'Dates not listed',
    synopsis: 'Bachelor of Information Technology at Gokul Global University.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Information Technology',
        description: 'Studied Information Technology at Gokul Global University in Siddhapur, Gujarat.',
        tags: ['Bachelor of Information Technology'],
        runtime: 'Gokul Global University',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Building with React',
    period: 'May 2024 – November 2024',
    synopsis: 'React development experience at Praxware Technology in Ahmedabad.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The React Developer',
        description: 'Built responsive interfaces, integrated RESTful APIs, managed state with Redux and React Context, and contributed to code reviews.',
        tags: ['React.js', 'Redux', 'RESTful APIs'],
        runtime: 'May 2024 – November 2024',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'The E-commerce Build',
    period: 'Dates not listed',
    synopsis: 'A responsive footwear e-commerce website focused on product discovery and shopping flow.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Storefront',
        description: 'Created a footwear catalog with search and filtering, cart and checkout, Material UI, and React Router.',
        tags: ['React.js', 'E-commerce', 'Material UI'],
        runtime: 'CV project',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core skill', title: 'React.js', detail: 'Frontend development and responsive interfaces', palette: ocean },
  { label: 'Featured project', title: 'Footwear Store', detail: 'Responsive e-commerce experience', palette: amber },
  { label: 'Media skill', title: 'Video Editing', detail: 'Listed on Samkit’s CV', palette: crimson },
  { label: 'Media skill', title: 'Social Media', detail: 'Listed on Samkit’s CV', palette: violet },
  { label: 'Data', title: 'MySQL', detail: 'Database skill listed on the CV', palette: jade },
  { label: 'Interface', title: 'React Hooks', detail: 'Listed on Samkit’s CV', palette: ocean },
  { label: 'UI toolkit', title: 'Material UI', detail: 'Used in the e-commerce project', palette: amber },
  { label: 'Navigation', title: 'React Router', detail: 'Client-side project navigation', palette: crimson },
  { label: 'APIs', title: 'RESTful APIs', detail: 'Integrated during React developer experience', palette: violet },
  { label: 'State', title: 'Redux & Context', detail: 'State management experience', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'Information Technology',
    lines: ['Bachelor of Information Technology', 'Gokul Global University · Siddhapur, Gujarat'],
  },
  {
    kicker: 'Experience',
    title: 'React Developer',
    lines: ['Praxware Technology · Ahmedabad, India', 'May 2024 – November 2024'],
    chips: ['React.js', 'RESTful APIs', 'Redux', 'React Context'],
  },
  {
    kicker: 'Project',
    title: 'Footwear E-commerce',
    lines: ['Responsive storefront with product catalog, search, and filters', 'Cart and checkout with React Context API'],
    chips: ['React.js', 'Material UI', 'React Router'],
  },
  {
    kicker: 'Digital Media',
    title: 'Social & Video',
    lines: ['Social media', 'Video editing'],
  },
  {
    kicker: 'More skills',
    title: 'Performance Marketing',
    lines: ['Paid ads · SEO / SEM · Campaign planning', 'Content strategy · Analytics · Conversion optimization · Email marketing'],
  },
  {
    kicker: 'Languages',
    title: 'English · Gujarati · Hindi',
    lines: ['Languages listed on Samkit’s CV'],
  },
];

export type ProfileId = 'samkit' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'samkit',
    name: 'Samkit',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Experience, project & skills first',
    color: '#4cc9ff',
    order: ['story', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Project and development skills first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Media skills and highlights first',
    color: '#ffb547',
    order: ['skills', 'picks', 'originals', 'journey', 'about', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Featured Project`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Skills and CV highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Highlights', meta: 'No awards or certifications listed on the CV', palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
