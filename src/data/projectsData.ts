import { CardRounded } from '../interfaces/Cards/CardRounded'

const projectsData: CardRounded[] = [
  {
    trans_key: 'odos',
    imageUrl: '/img/projects/odos.jpeg',
    title: 'The ODOS Network',
    description:
      'Developed a blockchain-based platform that provides identity proofing for women and children migrants and manages sensitive data',
    link: null,
    tags: [
      'NGOs',
      'Immigration',
      'Blockchain',
      'Digital identity',
      'Sensitive data'
    ],
    hasPrimary: true
  },
  {
    trans_key: 'polder',
    imageUrl: '/img/projects/polder.jpeg',
    title: 'The ITEA POLDER project',
    description:
      'Partnership with 15 more organizations across 4 European countries to build a decentralized data hub for Smart Cities to audit and monetize data with FiWARE and Hyperledger Fabric',
    link: null,
    tags: ['Smart Cities', 'R&D', 'Blockchain', 'FiWARE'],
    hasPrimary: false
  },
  {
    trans_key: 'coloqio',
    imageUrl: '/img/projects/coloqio.jpeg',
    title: 'Coloq.io',
    description:
      'Created our own flexible infrastructure for developers that allows the conversational ecosystems of large organizations and startups to scale orchestrating all conversational channels, NLP engines and data sources to their business processes.',
    link: {
      url: 'https://talk.coloq.io/',
      text: 'Coloq.io',
      color: 'rgba(255,255,255,.7)'
    },
    tags: ['Startup studio', 'Conversational agents', 'IaaS'],
    hasPrimary: true
  },
  {
    trans_key: 'metaledger',
    imageUrl: '/img/projects/metaledger.jpeg',
    title: 'Metaledger',
    description:
      'Design and development of an ecosystem of apps and IoT devices to provide end-to-end traceability of gold and other precious metals from artisanal and small-scale mines (ASM) in the third world to wholesalers in the first world',
    link: null,
    tags: ['R&D', 'Own product', 'Blockchain', 'Traceability'],
    hasPrimary: false
  },
  {
    trans_key: 'maldita',
    imageUrl: '/img/projects/maldita.jpeg',
    title: 'Maldita',
    description:
      'Deployment of a WhatsApp Business Chatbot integrated with the Spanish fact-checking platform focused on combating the spread of disinformation in order to expand their service’s reach',
    link: null,
    tags: ['Media', 'Fact-checking', 'Chatbots'],
    hasPrimary: true
  },
  {
    trans_key: 'pdc',
    imageUrl: '/img/projects/pdc.jpeg',
    title: 'DisasterAWARE',
    description:
      'Development of a Natural Language Processing (NLP) engine to process global unstructured data and hazard-related news to make them useful by the early warning and multi-hazard monitoring platform',
    link: null,
    tags: ['Disaster risk intelligence', 'Cognitive services', 'NLP'],
    hasPrimary: false
  },
  {
    trans_key: 'medecins',
    imageUrl: '/img/projects/MedecinsSansFrontieres.jpeg',
    title: 'Médecins Sans Frontières',
    description:
      'Design and development of a fully mobile- and offline-first platform to manage logistics operations and monitor the internet infrastructure across all MSF field locations in order to create a common ICT network',
    link: null,
    tags: ['NGOs', 'Offline-first', 'Mobile'],
    hasPrimary: true
  },
  {
    trans_key: 'yotengo',
    imageUrl: '/img/projects/yotengo.jpeg',
    title: 'Yotengo.bot',
    description:
      'Developed a platform to deploy a chatbot constellation helping US immigration lawyers to connect with potential clients via Facebook Messenger, WhatsApp Business and webchat with expert knowledge of legal language',
    link: {
      url: 'https://yotengo.bot/',
      text: 'Yotengo.bot',
      color: '#6666ff'
    },
    tags: ['Legal', 'Immigration', 'NLP', 'Chatbots'],
    hasPrimary: false
  }
]

export default projectsData
