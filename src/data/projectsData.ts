/* eslint-disable camelcase */
import { CardRounded } from '../interfaces/Cards/CardRounded'

const STARTUP_STUDIO_TAG = 'Startup studio'
const CONVERSATIONAL_AGENTS = 'Conversational agents'
const IAAS_TAG = 'IaaS'
const OWN_PRODUCT_TAG = 'Own product'
const SMART_CITIES_TAG = 'Smart Cities'
const RD_TAG = 'R&D'
const BLOCKCHAIN_TAG = 'Blockchain'
const FiWARE_TAG = 'FiWARE'
const NGOS_TAG = 'NGOs'
const INMIGRATION_TAG = 'Immigration'
const DIGITAL_IDENTITY_TAG = 'Digital identity'
const SENSITIVE_DATA_TAG = 'Sensitive data'
const TRACEABILITY_TAG = 'Traceability'
const MEDIA_TAG = 'Media'
const FACT_CHECKING_TAG = 'Fact-checking'
const CHATBOTS_TAG = 'Chatbots'
const DISASTER_RISK_INTELLIGENCE_TAG = 'Disaster risk intelligence'
const COGNITIVES_SERVICES_TAG = 'Cognitive services'
const NLP_TAG = 'NLP'
const OFFLINE_FIRST_TAG = 'Offline-first'
const MOBILE_TAG = 'Mobile'
const LEGAL_TAG = 'Legal'
const IMIGRATION_TAG = 'Immigration'

const projectsData: CardRounded[] = [
  {
    trans_key: 'odos',
    imageUrl: '/img/projects/odos.jpeg',
    title: 'The ODOS Network',
    description:
      'Developed a blockchain-based platform that provides identity proofing for women and children migrants and manages sensitive data',
    link: null,
    tags: [
      NGOS_TAG,
      INMIGRATION_TAG,
      BLOCKCHAIN_TAG,
      DIGITAL_IDENTITY_TAG,
      SENSITIVE_DATA_TAG
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
    tags: [SMART_CITIES_TAG, RD_TAG, BLOCKCHAIN_TAG, FiWARE_TAG],
    hasPrimary: false
  },
  {
    trans_key: 'coloqio',
    imageUrl: '/img/projects/coloqio.jpeg',
    title: 'Coloq.io',
    description:
      'Created our own flexible infrastructure for developers that allows the conversational ecosystems of large organizations and startups to scale orchestrating all conversational channels, NLP engines and data sources to their business processes',
    link: {
      url: 'https://talk.coloq.io/',
      text: 'Coloq.io',
      color: 'rgba(255,255,255,.7)'
    },
    tags: [STARTUP_STUDIO_TAG, CONVERSATIONAL_AGENTS, IAAS_TAG, OWN_PRODUCT_TAG],
    hasPrimary: true
  },
  {
    trans_key: 'metaledger',
    imageUrl: '/img/projects/metaledger.jpeg',
    title: 'Metaledger',
    description:
      'Design and development of an ecosystem of apps and IoT devices to provide end-to-end traceability of gold and other precious metals from artisanal and small-scale mines (ASM) in the third world to wholesalers in the first world',
    link: null,
    tags: [RD_TAG, OWN_PRODUCT_TAG, BLOCKCHAIN_TAG, TRACEABILITY_TAG],
    hasPrimary: false
  },
  {
    trans_key: 'maldita',
    imageUrl: '/img/projects/maldita.jpeg',
    title: 'Maldita',
    description:
      'Deployment of a WhatsApp Business Chatbot integrated with the Spanish fact-checking platform focused on combating the spread of disinformation in order to expand their service’s reach',
    link: null,
    tags: [MEDIA_TAG, FACT_CHECKING_TAG, CHATBOTS_TAG],
    hasPrimary: true
  },
  {
    trans_key: 'pdc',
    imageUrl: '/img/projects/pdc.jpeg',
    title: 'DisasterAWARE',
    description:
      'Development of a Natural Language Processing (NLP) engine to process global unstructured data and hazard-related news to make them useful by the early warning and multi-hazard monitoring platform',
    link: null,
    tags: [DISASTER_RISK_INTELLIGENCE_TAG, COGNITIVES_SERVICES_TAG, NLP_TAG],
    hasPrimary: false
  },
  {
    trans_key: 'medecins',
    imageUrl: '/img/projects/MedecinsSansFrontieres.jpeg',
    title: 'Médecins Sans Frontières',
    description:
      'Design and development of a fully mobile- and offline-first platform to manage logistics operations and monitor the internet infrastructure across all MSF field locations in order to create a common ICT network',
    link: null,
    tags: [NGOS_TAG, OFFLINE_FIRST_TAG, MOBILE_TAG],
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
    tags: [LEGAL_TAG, IMIGRATION_TAG, NLP_TAG, CHATBOTS_TAG],
    hasPrimary: false
  }
]

export default projectsData
