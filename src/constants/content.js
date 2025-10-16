import SpecialCall from "../assets/PDF/proposal/SpecialCallForProposalforScheduledTribes.pdf";
import card2pdf from "../assets/PDF/proposal/card2.pdf";
import tbiScheme from "../assets/PDF/proposal/tbiScheme.pdf";
import chairProfessor from "../assets/PDF/proposal/chairProfessor.pdf";
import fellowship from "../assets/PDF/proposal/Faculty_Fellowship4.pdf";
// import doctoralFellowship from "../assets/PDF/proposal/doctrolFellowship6.pdf";
import doctoralFellowship from "../assets/PDF/proposal/Post-doctoral_Fellowships2025-26.pdf";
import Project0707 from "../assets/PDF/proposal/CallforProposalPRAYAS-Start-UpsandEIRscheme.pdf";
import Project2107 from "../assets/PDF/proposal/Project8.pdf";
import Project9 from "../assets/PDF/proposal/Project9.pdf";
import Project10 from "../assets/PDF/proposal/Project10.pdf";
import Project11 from "../assets/PDF/proposal/Call_for_Proposals_for_TBI_Scheme.2107.pdf";
import Project12 from "../assets/PDF/proposal/Call_for_Proposal_for_Technology_Development.0707.pdf";
import Project14 from "../assets/PDF/proposal/CFP-SSS.pdf";
import Project13 from "../assets/PDF/proposal/CFP_DIAL.pdf";
import PDF0721 from "../assets/PDF/proposal/CFP2025.pdf";
import Project15 from "../assets/PDF/proposal/Empanalment-of-Chartered-Accountant-at-IBITF.pdf";
import CA2 from "../assets/PDF/proposal/CA2.pdf"; 
import PG from "../assets/PDF/Fellwoship_Project/PG_Fellowship.pdf";
import UG from "../assets/PDF/Fellwoship_Project/UG_Fellowship.pdf";
import Doctoral_Fellowship from "../assets/PDF/Fellwoship_Project/Doctoral_Fellowship.pdf";
import PostDoctoral_Fellowship from "../assets/PDF/Fellwoship_Project/Post_Doctoral_Fellowship.pdf";
import Agritech from '../assets/PDF/tech_projects/Agritech.pdf';
import Fintech from '../assets/PDF/tech_projects/Fintech.pdf';
import HealthTech from '../assets/PDF/tech_projects/HealthTech.pdf';
import {
  FaLightbulb,
  FaFlask,
  FaPeopleArrows,
  FaGraduationCap,
  FaGlobe,
} from "react-icons/fa";
import {
  Business,
  Support,
  School,
  Laptop,
  Work,
  AccountBalance,
  People,
  BusinessCenter,
  Payment,
  Computer,
  Devices,
  Agriculture,
  Satellite,
  Eco,
  Drone,
  HealthAndSafety,
  Emergency,
  LocalHospital,
  SupervisedUserCircle,
  Group,
} from "@mui/icons-material";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

export const siteContent = {
  navbar: {
    // logo: 'assets/iit.png',ti
    logo: require("../assets/logo/iit@.png"),
    menuItems: [
      "Home",
      {
        label: "About Us",
        submenu: ["About IBITF", "Organizational Structure","Industries Partners","Project List","Awarded Fellowship","Tech Sectors"],
      },
      {
        label: "Programs & Initiatives",
        submenu: ["Thematic Areas", "Schemes", "Call for Proposals", "Blogs"],
      },
      "Projects",
      "Team",
      "Career",
      "Contact Us",
    ],
  },
  Blogs: {
    cardData: [
      {
        word: "Finance andDivyang ATM: Human History",
        date: "Oct. 06, 2021",
        buttonText: "Learn More",
        pdfUrl: require("../assets/PDF/Blogs/Fintech.pdf"),
      },

      {
        word: "Legalities of Bitcoin and other Virtual Assets",
        date: "Oct. 06, 2021",
        buttonText: "Learn More",
        pdfUrl: require("../assets/PDF/Blogs/Cryptocurrency.pdf"),
      },
      {
        word: "The ONDC: Why Everyone is Talking About it?",
        date: "June 05, 2023",
        buttonText: "Learn More",
        pdfUrl: require("../assets/PDF/Blogs/ondc.pdf"),
      },
    ],
  },

  NotificationPop :{
        title:'Notification Call for Proposal',
        message:'" Inviting Proposals for Innovation and Startup Support under IBITF Schemes "',
        deadline: 'Application Deadline Extended: 27-10-2025'
  },

  aboutPage: {
    // This is the section for the About IBITF content
    title: "IIT Bhilai Innovation and Technology Foundation (IBITF)",
    description:
      "Department of Science and Technology, under its National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) has funded IIT Bhilai to host the Technology Innovation Hub (TIH) for Financial Technologies (FINTECH) area. The TIH at IIT Bhilai is one of the 25 hubs setup under the NM-ICPS program. IIT BHILAI INNOVATION AND TECHNOLOGY FOUNDATION (IBITF), a Section 8 Company, has been established by IIT Bhilai to host this TIH. IBITF is the nodal centre for spearheading Entrepreneurship, Research and Development, HRD and Skill development and Collaboration related activities in the area of Financial Technologies. 55 crore INR has been sanctioned by for this initiative by DST for the period of five years.",
    nodalCenter: {
      title: "IBITF: Nodal Center for Financial Technologies",
      description: `Financial technologies have emerged as one of the most thriving sectors in terms of business growth, adoption among the customers, 
      employment generation etc. As per the reports of KPMG India and NASSCOM, 
      in the global parlance, 
      India has emerged as the worlds second-largest financial technology hub (trailing just after the US) reaching about USD 2.4 billion in 2020.
       Driven by factors like innovation-based start-ups, large market base,
        along with favourable regulatory policies and government-led initiatives, 
        India is witnessing more than 2000 start-ups operating in the space of financial technologies. 
        The digital payments or e-payments have proven to be rewarding for both at the individual level and for businesses, including the self-employed, rural entrepreneurs, small borrowers, SMEs and MSMEs.
        
        Financial technology companies, in a word,
         are those that facilitate all forms of financial services--consumer and enterprise by utilizing software and hardware technologies running on a broad range of electronic devices ranging from a simple desktop application to a smartphone,
          even to an advanced smart watch. The usage of various IoT devices for mobile banking, 
          and for lending and borrowing of services and goods, 
          are a few examples where cutting-edge technologies are being put to use to make financial services more accessible to the general public.
           More examples of new-age technologies being increasingly used by Fintech applications are IoT,
            AI, Blockchain, data science, etc.
             The ultimate goal is to augment or replace the traditional functioning of the financial sectors,
              in order to improve user experience, and to make transactions better in terms of security, 
              accessibility, speed and efficiency 
              Entrepreneurs are key to develop important innovative solutions for complex societal challenges.
               Entrepreneurship and innovation are relevant in many different sustainable business contexts,
               specifically in emerging technical fields like Fintech. 
               Entrepreneurs need a strong support and advisory system in order to turn their start-up ideas into valuable businesses. As a part of the activities at IBITF, one of the ambitions is to establish a strong support system for entrepreneurship and start-ups in the Fintech arena.
        `,
    },
    vision: {
      title: "Our Vision",
      points: [
        "Cutting-edge research and development in financial technologies.",
        "Scouting for young professionals and nurturing entrepreneurial skills.",
        "Building a robust innovation ecosystem with a focus on entrepreneurship.",
        "Supporting start-ups in financial technology.",
      ],
    },
  },

  governanceStructure: {
    title: "Governance Structure of the IBITF",
    sections: [
      {
        level: "BoG of IBITF",
        members: [
          "Director IIT Bhilai",
          "CEO, TIH",
          "Institute Coordinator TIH",
          "Dean R & D, IIT Bhilai",
          "Faculty Member IIT Bhilai (rotation)",
          "DR (F & A) IIT Bhilai",
          "External Industry",
          "External Academia",
        ],
      },
      {
        level: "Project Co-ordination Group",
        members: [
          "Institute Coordinator of the TIH",
          "Two Faculty Members IIT Bhilai (rotation)",
          "Two Faculty Members from Collaborators (rotation)",
          "Two Experts from Collaborating Industry (rotation)",
          "Representatives from GoI Agencies",
        ],
      },
      {
        level: "Project Selection Group PRSG",
        members: [
          "Chairman",
          "One Faculty Member",
          "One Expert from Industry",
          "One Expert from Startup Company",
        ],
      },
      {
        level: "Start-up Coordination Team",
        members: [
          "Two Faculty Members from Collaborators (rotation)",
          "Four Industry Experts (rotation)",
          "Five Representatives from Startups",
        ],
      },
      {
        level: "TIH Office Administration",
        subSections: [
          {
            category: "Academic Programs",
            members: ["Project Assistant (2)"],
          },
          {
            category: "Specialized TIH Programs",
            members: [
              "Project Manager (2)",
              "Project Associate (2)",
              "Project Assistant (2)",
            ],
          },
          {
            category: "HR, Finance, Legal and Others",
            members: [
              "Accountants (1 Project Associate and 1 Project Assistant)",
              "Admin (2 Project Associate and 2 Project Assistant)",
              "IP Lawyer / Legal Executive (Project Consultant)",
              "Attendant (2)",
              "House Keeping (1)",
            ],
          },
        ],
      },
    ],
  },

  // footer: {
  //   text: '© 2024 IIT Bhilai Innovation Technologies and Foundation. All rights reserved.',
  // },

  // this is footer page content

  footer: {
    footerlogo: require("../assets/logo/iit@.png"),
    text: "© 2024 IIT Bhilai Innovation Technologies and Foundation. All rights reserved.",
    about: {
      title: "IIT Bhilai Innovation Technologies and Foundation",
      description:
        "Dedicated to technological advancements and empowering the future with cutting-edge innovations.",
    },
    socials: [
      { name: "Facebook", url: "https://facebook.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Instagram", url: "https://instagram.com" },
      { name: "LinkedIn", url: "https://linkedin.com" },
    ],
    links: ["Home", "About us", "Career", "Contact us"],
    services: ["Thematic Area", "Schemes", "Call for Proposals", "Blogs","Startup Support Services"],
    info: ["IIT Bhilai", "About Ibitf", "Projects", "Team"],
    support: ["FAQ", "Help", "Privacy Policy", "Terms"],
  },

  //  this is home page content

  home: {
    heroTitle:
      "Here You are at FinTech Hub IIT Bhilai Innovation and Technology Foundation (IBITF)",
    heroSubtitle: `The Technology Innovation Hub (TIH) at IIT Bhilai is setup under the National Mission of Interdisciplinary Cyber-Physical Systems (NM-ICPS) program of the Department of Science and Technology (DST). IIT Bhilai Innovation and Technology Foundation, a sec 8 company of DST under the patronage of IIT Bhilai invite you to join this endeavor.
`,
    heroSubtitle1: `IIT Bhilai Innovation and Technology Foundation is the nodal centre for spearheading Entrepreneurship, Research and Development, HRD and Skill development and collaboration related activities in the area of Financial Technologies`,
    heroSubcontent: `Government focus on converting functional research into transitional research in technical institutions of repute so that commercial products and businesses (startups) can be created for socio economic benefit or the public in large. IBITF leverage within Science, Engineering, Technology and Liberal Art. The focus area is FinTech, AgriTech, HealthTech, Logistics, Industry 4.0 and other emerging needs using futuristic Technologies like AI, ML, AR, VR, IoT, LLM, Deep Analysis and many more in bringing innovative and novel products.
`,
    heroSubcontent1: `IBITF is associated with IIT Bhilai and work on FinTech, AgriTech and HealthTech concentrating emerging Technologies in creating smart products and industry alignment for the delivery of socio economic  benefits and employment through deep Technologies.
`,

    heroTitle1: "National Mission on Interdisciplinary Cyber Physical Systems",
    heroSubtitle2: `NM-ICPS (National Mission on Interdisciplinary Cyber Physical Systems) is a comprehensive Mission aimed at complete convergence with all stakeholders by establishing strong linkages between academia, industry, Government and International Organizations. The Mission was approved by the Union Cabinet at a total outlay of Rs. 3660 Crores for a period of five years.
`,
    heroSubtitle3: `NMICPS is turning the new technological evolution into a huge opportunity by research, training and skilling in robotics, artificial intelligence, digital manufacturing, big data analysis, deep learning, quantum communication and Internet-of-Things. The mission is into developing and exploiting these technologies in services and manufacturing sectors; in agriculture, water, energy & traffic management; health, environment, infrastructure and Geo-Information Systems; security; financial systems and in combating crime.
`,
    heroSubcontent:
      "The areas of focus are in various Major  Technologies like Big Data, Manufacturing, and Quantum Communication. One of the mandates is towards training youth at all levels, developing Incubators and start-ups in these areas.",
    ThemeticArea: [
      {
        title: "Fintech Solutions",
        description:
          "Facilitates quick, secure, and convenient online financial transactions online or via mobile devices, enhancing access to banking services.",
        route: "/FintechIgnite",
        image: require("../assets/VectorIMG/fintech.jpg"),
      },
      {
        title: "Agritech Solutions",
        description:
          "Driving fintech innovation through smart agriculture, entrepreneurship, and sustainable ecosystem focusing on increasing farmers income.",
        route: "/DigitalAgriVillage",
        image: require("../assets/VectorIMG/agritech.jpg"),
      },
      {
        title: "Healthtech Solutions",
        description:
          "Fintech augmentation with medical applications  like insurance, e-market place etc. Digitization of traditional knowledge of medicinal plants, their clinical study and standardization.",
        route: "/IndigenousMedicinalPlants",
        image: require("../assets/VectorIMG/meditech.jpg"),
      },
    ],

    technologiesDomain: [
      {
        title: "E-Payment Systems",
        description:
          "An e-payment system enables financial transactions or payments for goods and services to be made electronically, without the need for physical cheques or cash. It is a key component of any Fintech application.",
        // image: 'assets/service1.jpg'
        route: "/DigitalPayment",
        image: require("../assets/VectorIMG/E-Payment.jpeg"),
      },
      {
        title: "AI/ML (Artificial Intelligence/Machine Learning)",
        description:
          "Uses data and algorithms to make smart decisions and predictions, optimizing processes and providing personalized solutions.",
        // image: 'assets/service1.jpg'
        route: "/aiFintech",
        image: require("../assets/VectorIMG/ai-image.jpg"),
      },
      {
        title: "IoT (Internet of Things)",
        description:
          "Connects devices and sensors to the Internet, enabling real-time data collection and smarter management of resources and services.",
        // image: 'assets/service1.jpg',
        route: "/sustinableAgriculture",
        image: require("../assets/VectorIMG/iot.jpg"),
      },
      {
        title: "Blockchain",
        description:
          "Ensures secure, transparent, and tamper-proof transactions through a decentralized digital ledger.",
        // image: 'assets/service1.jpg',
        route: "/datalocker",
        image: require("../assets/VectorIMG/blockchain.jpg"),
      },
    ],
  },
  about: {
    title: "About Us",
    description:
      "IIT Bhilai Innovation Technologies and Foundation is dedicated to technological advancements and empowering the future with cutting-edge innovations...",
  },
  services: {
    title: "Our Services",
    description:
      "Explore a wide range of services including cloud, AI, and cybersecurity...",
  },
  career: {
    title: "Join Our Team",
    description: "Be a part of a dynamic team shaping the future...",
  },

  ContactForm: {
    title: "Get In Touch With Us!",
    // description: 'Feel free to drop us a line below!',
  },
  contactDetails: {
    title: "Contact Us",
    address:
      "IBITF Office, Level - 4, LDC Building, Kutelabhata, Durg, Chhattisgarh, 491002 ",
    email: "tih@iitbhilai.ac.in",
    phone: "+917587738819",
    fax: "+3356 1589 2100",
  },

  board_team: {
    title: "Board of Directors of the IBITF",
    members: [
      {
        name: "Prof. Rajiv Prakash",
        designation: "Director IIT Bhilai & Chairman",
        image: require("../assets/TeamImg/director.png"),
      },
      {
        name: "Dr. Rajeev Shorey",
        designation:
          "Chief Executive Officer & University of Queensland - IIT Delhi Academy of Research (UQIDAR)",
        image: require("../assets/TeamImg/RajeevShoury.jpg"),
      },
      {
        name: "Prof. Sumeet Gupta",
        designation: "Professor, IIM Raipur",
        image: require("../assets/TeamImg/SumitGupta.jpg"),
      },
      {
        name: "Prof. Santosh Biswas",
        designation: "Dean of R&D, Project Director (IBITF)",
        image: require("../assets/TeamImg/santosh.jpeg"),
      },
      {
        name: "Dr. Souradyuti Paul",
        designation: "Associate professor,  Dept. of EECS IIT Bhilai",
        image: require("../assets/TeamImg/PaulSir.jpeg"),
      },
      {
        name: "Dr. Barun Gorain",
        designation: "Assistant Professor,  Dept. of EECS IIT Bhilai",
        image: require("../assets/TeamImg/Barun.jpg"),
      },
      {
        name: "Mr. Gautam Ramani",
        designation: "Deputy Registrar (F and A), IIT Bhilai",
        image: require("../assets/TeamImg/Gautam.jpg"),
      },
      {
        name: "Mr. S Mukopadhyay",
        designation: "ED (Projects), Bhilai Steel Plant(BSP), Sail",
        image: require("../assets/TeamImg/Mukopadhyay.jpeg"),
      },
      {
        name: "Padma Shri Phoolbasan Bai Yadav",
        designation: "Founder, Maa Bamleshwari Janhit Kare Samiti",
        image: require("../assets/TeamImg/Poolbusan.png"),
      },
      {
        name: "Shri. Manish Gupta",
        designation: "Director, Beekay Engineering Corporation Pvt. Ltd",
        image: require("../assets/TeamImg/ManishGupta.jpeg"),
      },
      {
        name: "Shri. Naresh Kumar",
        designation: "CTO, India and EMEA Region, Tektronix Pvt. Ltd",
        image: require("../assets/TeamImg/NareshKumar.jpeg"),
      },
      {
        name: "Shri. Somesh Sharma",
        designation:
          "Co-Founder and COO, Augtech NextWealth IT Services Pvt. Ltd",
        image: require("../assets/TeamImg/SomeshSharma.jpeg"),
      },
    ],
  },
  governing_team: {
    title: "Hub Governing Body (HGB)",
    members: [
      {
        name: "Prof. Rajiv Prakash",
        designation: "Director IIT Bhilai & Chairman",
        image: require("../assets/TeamImg/director.png"),
      },
      {
        name: "Prof. D. Janakiram",
        designation: "Academic Representative, Member",
        image: require("../assets/TeamImg/jankiram.jpg"),
      },
      {
        name: "Prof. G. Sivakumar",
        designation: "Academic Representative, Member",
        image: require("../assets/TeamImg/shivkumar.jpg"),
      },
      {
        name: "Mr. Rama Iyer",
        designation: "Industry Representative, Member",
        image: require("../assets/TeamImg/ramalyer.jpg"),
      },
      {
        name: "Mr. J A Chowdary",
        designation: "Industry Representative, Member",
        image: require("../assets/TeamImg/JAChoudary.jpg"),
      },
      {
        name: "Dr. Ekta Kapoor",
        designation: "Mission Director of NM-ICPS & DST, Member",
        image: require("../assets/TeamImg/Ekta.jpg"),
      },
      {
        name: "Mr. Prashant Mathur",
        designation: "Chief Executive Officer, IBITF",
        image: require("../assets/TeamImg/ceo.jpeg"),
      },
      {
        name: "Padma Shri Phoolbasan Bai Yadav",
        designation: "Founder, Maa Bamleshwari Janhit Kare Samiti",
        image: require("../assets/TeamImg/Poolbusan.png"),
      },
      {
        name: "Shri. Manish Gupta",
        designation: "Director, Beekay Engineering Corporation Pvt. Ltd",
        image: require("../assets/TeamImg/ManishGupta.jpeg"),
      },
      {
        name: "Shri. Naresh Kumar",
        designation: "CTO, India and EMEA Region, Tektronix Pvt. Ltd",
        image: require("../assets/TeamImg/NareshKumar.jpeg"),
      },
      {
        name: "Shri. Somesh Sharma",
        designation:
          "Co-Founder and COO, Augtech NextWealth IT Services Pvt. Ltd",
        image: require("../assets/TeamImg/SomeshSharma.jpeg"),
      },
    ],
  },
  team: {
    title: "Meet Our Team",
    members: [
      {
        name: "Mr. Prashant Mathur",
        designation: "Chief Executive Officer, IBITF",
        image: require("../assets/TeamImg/ceo.jpeg"),
      },
      {
        name: "Prof. Santosh Biswas",
        designation: "Dean of R&D, Project Director (IBITF)",
        image: require("../assets/TeamImg/santosh.jpeg"),
      },
      {
        name: "Mr. Vishnu Vaibhav Dwivedi",
        designation: "Chief Technology Officer, (IBITF)",
        image: require("../assets/TeamImg/cto.png"),
      },
      {
        name: "Mrs. Pratibha Dongre",
        designation: "Project Engineer, IBITF",
        image: require("../assets/TeamImg/pratibha.jpg"),
      },
      {
        name: "Mrs. Preeti Tiwari",
        designation: "Project Associate, IBITF",
        image: require("../assets/TeamImg/preeti.png"),
      },
      {
        name: "Mrs. Nidhi Trivedi",
        designation: "Project Associate, IBITF",
        image: require("../assets/TeamImg/nidhi.png"),
      },
        {
        name: "Mr. Nem Singh",
        designation: "Project Associate(account), IBITF",
        image: require("../assets/TeamImg/NemSingh.jpeg"),
      },
       {
        name: "Mr. Santosh Kumar Sahu",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/SantoshKumarSahu.jpeg"),
      },
     
      {
        name: "Ms. Aanchal Sahu",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/Aanchal_sahu.jpeg"),
      },
      {
        name: "Ms. Sonali Patle",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/sonali.jpg"),
      },
      {
        name: "Mr. Lala Ram",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/Lalaram.jpg"),
      },
      {
        name: "Ms. Aanchal Barchhiha",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/AnchalBarchhiha.jpg"),
      },
       {
        name: "Mr. Tomesh Sahu",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/TomeshSahu.jpeg"),
      },
        {
        name: "Mr. Gaurav Kumar",
        designation: "Project Assistant, IBITF",
        image: require("../assets/TeamImg/GauravKumar.jpeg"),
      },
      {
        name: "Mr. Domeshwar",
        designation: "Project Attendent, IBITF",
        image: require("../assets/TeamImg/domesh24.jpeg"),
      },
       {
        name: "Mr. Shailesh",
        designation: "Project Attendent, IBITF",
        image: require("../assets/TeamImg/Shailesh.jpeg"),
      },
    ],
  },
  thematic: {
    card: [
      {
        img: require("../assets/thematic/payment.png"),
        head: "E-Payment Systems",
        desc: "E-payment system (or online payment system) is one of the fundamental components underpinning any Fintech application. An e-payment system allows financial transactions or payments for goods or services to happen through the electronic medium, without the use of physical cheques or currencies.",
      },
      {
        img: require("../assets/thematic/blockchain.png"),
        head: "Blockchain Technology",
        desc: "Blockchain is a powerful and fascinating technology emerged in recent times which is perceived to have the potential to bring radical changes to the ways our financial systems (e.g. lending, mortgage, retail payments, stock exchange, leverage, risk assessment and underwriting, etc.) work.",
      },
      {
        img: require("../assets/thematic/ai.png"),
        head: "Artificial Intelligence",
        desc: "Application of AI techniques to the Fintech arena facilitate predicting market trends, customized financial advices to enrich user experience, enhancing security, credit risk assessment, valuation modeling etc.",
      },
      {
        img: require("../assets/thematic/iot.png"),
        head: "Internet of Things",
        desc: "With the advent of IoT paradigm, the financial sector is also witnessing the enormous impact of the technology in terms of features like immediate support and personalization of service, smart bank branches and ATMs, improved spending visibility, enhanced security, risk assessment for insurance and loan etc.",
      },
    ],
    description: [
      {
        title: "E-Payment Systems",
        desc: "E-payment system (or online payment system) is one of the fundamental components underpinning any Fintech application. An e-payment system allows financial transactions or payments for goods or services to happen through the electronic medium, without the use of physical cheques or currencies.",
        subdescription: [
          {
            subTitle: "User friendly e-payment systems",
            subDesc: [
              "Minimal human intervention",
              "Unified payment system",
              "Low cost platforms",
            ],
          },
          {
            subTitle: "Popularizing e-payments",
            subDesc: [
              "Rural applications",
              "Urban applications",
              "Small retailers",
            ],
          },
          {
            subTitle: "e-payment systems for utility services",
            subDesc: ["Public Transport", "Utility supply payments"],
          },
        ],
        img: require("../assets/thematic/payment.png"),
      },
      {
        title: "Blockchain Technology",
        desc: "Blockchain is a powerful and fascinating technology emerged in recent times which is perceived to have the potential to bring radical changes to the ways our financial systems (e.g. lending, mortgage, retail payments, stock exchange, leverage, risk assessment and underwriting, etc.) work.",
        subdescription: [
          {
            subTitle:
              "Design and analysis of structural components of Blockchain for Fintech",
            subDesc: [
              "Consensus algorithms",
              "Smart contracts",
              "Hybrid Platforms",
              "Searchable encryption",
            ],
          },
          {
            subTitle: "Secure digital identity management",
            subDesc: [
              "Risk analysis and assessment",
              "Micro-loans",
              "Energy trading",
              "Intelligent Agriculture",
            ],
          },
        ],
        img: require("../assets/thematic/blockchain.png"),
      },
      {
        title: "Artificial Intelligence",
        desc: "Application of AI techniques to the Fintech arena facilitate predicting market trends, customized financial advices to enrich user experience, enhancing security, credit risk assessment, valuation modeling etc.",
        subdescription: [
          {
            subTitle: "Efficient AI models for Fintech applications",
            subDesc: [
              "Feature selection and ranking",
              "Prediction models",
              "Handling dynamic data",
              "Handling unstructured data ",
            ],
          },
          {
            subTitle: "Process automation and improving user experience",
            subDesc: ["Portfolio management", "Recommender System"],
          },
          {
            subTitle: "Security",
            subDesc: ["Anomaly detection systems", "Efficient classifiers"],
          },
        ],
        img: require("../assets/thematic/ai.png"),
      },
      {
        title: "Internet of Things",
        desc: "With the advent of IoT paradigm, the financial sector is also witnessing the enormous impact of the technology in terms of features like immediate support and personalization of service, smart bank branches and ATMs, improved spending visibility, enhanced security, risk assessment for insurance and loan etc.",
        subdescription: [
          {
            subTitle: "Standardization of Cyber Security for IoT devices",
            subDesc: [
              "Access Control",
              "Lightweight cryptography",
              "Secured data collection",
            ],
          },
          {
            subTitle: "IoT-based Fintech Products",
            subDesc: [
              "Biometric authentication systems",
              "Smart ATMs",
              "Wearable devices",
            ],
          },
          {
            subTitle: "Testing and Validation of the IoT framework",
            subDesc: [
              "Hardware-Software embedded testing",
              "Compatibility testing",
              "Data integrity testing",
            ],
          },
        ],
        img: require("../assets/thematic/iot.png"),
        descImg: require("../assets/thematic/IOT-desc.png"),
      },
    ],
  },
  cardDetail: [
    {
      title: "Grand Challenges and Competitions for Scouting Innovations (GCC)",
      description:
        "GCC is a pre-incubation activity targeted mainly to discover innovative ideas in the area of financial technology. Through different challenges like Hackathons, the IBITF can invite people from different areas with innovative solutions for solving issues and challenges in the area of finance particularly to Indian context. The basic objectives of the GCC are:",
      objectives: [
        "Find and nurture innovative ideas for addressing major challenges in the area of Fintech and their solution with the help of technology.",
        "Find untapped sources and convert ideas into start-up.",
        "Provide a minimal risk entry point into the start-up ecosystem.",
        "Provide structured guidance, mentoring and funding for application of ideas.",
        "Generate awareness and build a vibrant entrepreneurship ecosystem.",
      ],
    },
    {
      title:
        "Promotion and Acceleration of Young and Aspiring Technology Entrepreneurs (PRAYAS)",
      description:
        "At an early stage, a gap exists for young entrepreneurs to build a working prototype from their ideas before progressing to the next level. There are many challenges that are faced by entrepreneurs in preparing the first working prototype. PRAYAS would be filling this gap by providing funding and guidance at this stage to help entrepreneurs and allow a large number of potential ideas into incubation programs. Specifically, PRAYAS aims at the following:",
      objectives: [
        "Enable translation of ideas into prototypes.",
        "Attract a large number of youth with innovative ideas for different types of problems.",
        "Provide a platform for faster experimentation and modify approach from idea to prototype.",
        "Provide a platform to test ideas.",
      ],
    },
    {
      title: "Entrepreneur in Residence (EIR)",
      description:
        "The EIR program is envisaged to inspire best talents among PG and PhD graduates and provide ample support to minimize risk in pursuing start-ups. The program would provide enormous opportunity for innovative entrepreneurs to expand network and get critical feedback to promote their entrepreneurial goals and aspirations.",
      objectives: [
        "Encourage students to take up entrepreneurship by providing fellowship.",
        "Provide prestigious forum for deserving entrepreneurs to pursue their ideas without additional risks.",
        "To make entrepreneurship related to financial technology an attractive option among available career options.",
        "Enable creation of new start-ups and allow them to make significant progress towards raising funding and investment.",
      ],
    },
    {
      title: "Virtual Incubation (VI)",
      description:
        "Virtual incubation is a form of incubation usually provided to remote clients. The Virtual incubation aims to support FinTech start ups located in other TIHs/Incubation Centres/Startup Hubs located in Institutes of Higher Learning/Established by State/Central Government. The start-up should aim towards applying cutting edge technologies like Blockchain, AI/ML, IoT, Data Analytics etc. in the domain of Financial Technologies and services such as Banking, Insurance, Neo-Banks, NFT, Smart Contracts, GST, Micro-financing etc. The focus of the incubation is the entrepreneur rather than the building.",
      objectives: [],
    },
    {
      title: "Dedicated Innovation Accelerators (DIAL)",
      description:
        "Accelerators are a post-incubation initiative linked with the existing incubators to supplement and complement the scaling up of a start-up. It aims to direct focused resources for a start-up to validate product ideas and engage with customers for scaling up and boosting the incubator’s existing activities. Accelerators also help in realizing and deciding whether to create a scalable start-up from a very nascent stage. The basic objectives of DIAL involve:",
      objectives: [
        "Fast track growth of potential start-ups through monitoring and networking.",
        "Attract mentors, expert, academicians and investors through structure accelerator programs.",
      ],
    },
    {
      title: "Start-up",
      description:
        "A significant effort of the TIH is to innovate new ideas and technology for revolutionizing the financial sector. These innovations are incomplete if they are not brought forth for the use of common people. A way to do this is through creating start-ups based on the innovations made. Start-ups are the vehicle through which innovative ideas will not only be implemented, but also have substantial effect on the society around. The objectives of the startup program is to achieve:",
      objectives: [
        "Take forward innovation to the commercialization stage.",
        "Promote start-ups by young Indians students.",
        "Accelerate and guide the journey of an innovative idea.",
        "Provide financial assistance for the initial stage of start-up.",
      ],
    },
    {
      title: "Seed Support System (SSS)",
      description:
        "The SSS will allow for funding promising ideas and incubate them till next funding is obtained from investors. The funding allows the innovators and entrepreneurs to develop their technology to a level, where they can attract investments from well-known investors. Thus, it acts as a bridge between ideation, development and commercialization of an innovation in a hassle free manner. The basic objectives of SSS involve:",
      objectives: [
        "Ensure timely availability of seed support for deserving incubator.",
        "Provide platform for innovative entrepreneurs to carry their idea to commercialization.",
        "Widens the pipeline of incubators by attracting more innovators.",
        "Allow entrepreneurs to carry forward their start-up with minimal risk.",
      ],
    },
    {
      title: "Technology Business Incubators (TBI)",
      description:
        "The Technology Business Incubator will be primarily established with some academic, technical or management institution to bring in the innovations and technologies for venture creation by utilizing expertise and infrastructure already available with the host institution. The TBI initiative of the TIH will protect the institute to be funded, from the high risk involved in high growth ventures, to enhance the prospects of their success. The basic objectives of TBI involve:",
      objectives: [
        "Job creation, prototype and product design, businesses etc. aligned with national priorities.",
        "To facilitate start-ups with cutting edge research mentorship, lab facility etc.",
        "To provide a platform for speedy commercialization of technologies developed by the host institution or the stakeholders associated with the institute.",
        "To build a vibrant network of start-up ecosystems facilitating mentorship, technical and R&D related suggestions, financial support etc., by establishing a network between academia and industries, mainly involving the collaborators of the IBITF.",
      ],
    },
  ],
  cardDataForCFP: [
     {
      id: 16,

      mainHeading: "Inviting Proposals from Startups and Industries under various schemes of IBITF",
      description:
        "The IIT Bhilai Innovation and Technology Foundation (IBITF) is a Section-8 not-for-profit company, established under the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) of the Department of Science and Technology (DST), Government of India. IBITF focuses on the development and deployment of projects in the Fintech domain, focusing on identifying impactful solutions leveraging emerging technologies like Blockchain, IoT, AI/ML, and e-payments, with a primary emphasis on applying these technologies to other sectors like Agriculture and HealthTech.",
        lastDate: "The project proposal deadline has been extended to 27th October 2025.",
      buttons: [
      
        {
          text: "Detailed Call for Proposal",
          pdfLink: PDF0721, 
      
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/9467/1/apply", 
        },
       
      ],
    },
    {
      id: 9,

      mainHeading: "Call for Proposal for POST DOCTORAL FELLOWSHIP",
      description:
        "Proposals are invited by IBITF under the Post Doctoral Fellowship schemes.",
      lastDate: "This is a rolling advertisement",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: doctoralFellowship, 
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/11250/1/apply",
        },
      ],
    },
    {
      id: 15,

      mainHeading: "Request for Expression of Interest from Chartered Accountants.",
      description:
        "",
        lastDate: "",
      buttons: [
      
        {
          text: "Detailed Call for Proposal",
          pdfLink: CA2, // Replace with actual PDF URL
      
        },
        {
          text: "Apply Now",
          url: "https://docs.google.com/forms/d/1qztzmUwbFeRoBlNFJzPbrPdOsssqQAJ9zQRZXoTwCsk/viewform?edit_requested=true", 
        },
       
      ],
    },
    {
      id: 14,

      mainHeading: "Call For Proposal Under the CPS- SSS(Seed Support System)",
      description:
        " Seed Support System (SSS) is a scheme under IBITF funded by the National Mission- Interdisciplinary Cyber-Physical System (NM-ICPS), Department of Science and Technology (DST) that provides financial assistance to start-ups with promising ideas, innovations, and technologies. A wide gap exists in financial support required by technology-driven start-ups in their initial phase, which is not being addressed properly. ",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project14, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2877/1/apply", // Replace with the actual URL
        },
      ],
    },
    {
      id: 13,
      mainHeading:
        "Call For Proposal Under the CPS- DIAL(Dedicated Innovation Accelerator)",
      description:
        "Accelerators are post-incubation initiatives linked to existing incubators, aimed at supplementing and lementing the scaling-up of startups. It aims to focus on directing targeted resources to help startups to validate product ideas, engage with customers, and scale their operations while enhancing the incubators' ongoing activities. Accelerators also helps in realizing and deciding whether to create a scalable start-up from a very nascent stage. The basic objectives of DIAL involve",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project13, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2874/1/apply", // Replace with the actual URL
        },
      ],
    },
    {
      id: 1,

      mainHeading: "Call For Proposal for Technology Business Incubator Scheme",
      description:
        " Department of Science and Technology (DST), Government of India (GoI) has launched National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) which aims to create a strong foundation and a seamless ecosystem for CPS technologies by coordinating and integrating nationwide efforts.",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project11, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2808/1/apply", // Replace with the actual URL
        },
      ],
    },
    {
      id: 2,
      mainHeading: "Call For Proposal for Technology Development in FinTech",
      description:
        "The Department of Science and Technology, under its National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS), has funded IIT Bhilai to host the Technology Innovation Hub (TIH) for the Financial Technologies (FINTECH) area.",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project12, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2845/1/apply", // Replace with the actual URL
        },
      ],
    },
    {
      id: 3,

      mainHeading: "Call for Proposal under PRAYAS, Start-Ups and EIR scheme",
      description:
        "Project proposals are invited by IBITF under the following schemes aligned with the thematic areas. Promotion and Acceleration of Young and Aspiring technology entrepreneurs (PRAYAS),Start-Ups and Entrepreneur in Residence (EIR),Virtual Incubation (VI)",
        lastDate:"",
        // lastDate: "The second closure is open from 10th to 16th March",
    
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project0707, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2846/1/apply", // Replace with the actual URL
        },
      ],
    },
    {
      id: 4,

      mainHeading: "Call for Proposal under Virtual Incubation (VI)",
      description:
        "Eligibility criteria : All start-ups operating in the FinTech area, incorporated by January 2022, and incubated in TIHs/Incubation Centres/Startup Hubs located in Institutes of Higher Learning/Established by State/Central Government.IBITF could offer up to INR 50 lakhs in funding support (in exceptional cases the support could be up to INR 1.0 cr depending on the DPR) over two years based on the business model and project proposal in the area of FinTech.",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project9, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://example.com/submit-proposal", // Replace with the actual URL
        },
      ],
    },
    {
      id: 5,

      mainHeading: "Call for Proposal Social Impact Startups/Projects",
      description: "",
      lastDate: "This is a rolling advertisement",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: "", // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://google.com/", // Replace with the actual URL
        },
      ],
    },
    {
      id: 6,

      mainHeading: "Call for Proposal for Scheduled Tribes (ST)",
      description:
        "IBITF invites applications for conducting training programmes, workshops, conferences under Scheduled Tribe in Fintech Area.",
      // lastDate: "This is a rolling advertisement",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: card2pdf,
        },
        {
          text: "Apply Now",
          url: "https://google.com/",
        },
      ],
    },


    {
      id: 7,

      mainHeading: "Call for Proposal for Faculty Fellowship",
      description:
        "Proposals are invited by IBITF under the faculty fellowship scheme.",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: fellowship,
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2848/1/apply", // Replace with the actual URL
        },
      ],
    },
    {
      
      id: 8,
      mainHeading: "Call for Proposal for Chair Professor",
      description: "Proposals are invited by IBITF to join as Chair Professor.",
      lastDate: "",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: chairProfessor, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2847/1/apply", // Replace with the actual URL
        },
      ],
    },
    

    {
      id: 10,

      mainHeading: "Call for Proposal for Fellowships",
      description:
        "Proposals are invited by IBITF for BTech, MTech & PhD Fellowships.",
      lastDate: "This is a rolling advertisement",
      buttons: [
        {
          text: "Detailed Call for Proposal",
          pdfLink: Project2107, // Replace with actual PDF URL
        },
        {
          text: "Apply Now",
          url: "https://tihiitbhilai.accubate.app/ext/form/2850/1/apply", // Replace with the actual URL
        },
      ],
    },
   
  ],
  CollaborationBy: {
    title: "Supported By",
    logos: [
      require("../assets/logo/collaboration/1.png"),
      require("../assets/logo/collaboration/3.png"),
      require("../assets/logo/collaboration/4.png"),
      require("../assets/logo/collaboration/5.png"),
      require("../assets/logo/collaboration/6.png"),
      require("../assets/logo/collaboration/7.png"),
      require("../assets/logo/collaboration/2.png"),
      require("../assets/logo/collaboration/8.png"),
      require("../assets/logo/collaboration/9.png"),
      require("../assets/logo/collaboration/10.png"),
      require("../assets/logo/collaboration/11.png"),
      require("../assets/logo/collaboration/12.png"),
      require("../assets/logo/collaboration/13.png"),
      require("../assets/logo/collaboration/14.png"),
      require("../assets/logo/collaboration/15.png"),
      require("../assets/logo/collaboration/16.png"),
      require("../assets/logo/collaboration/17.png"),
    ],
  },

  // supportby page code here

  SupportBy: {
    title: "Supported By",
    logos: [
      require("../assets/Images/iitbhilai.png"), // Image 1
      require("../assets/Images/DST.png"), // Image 1
      require("../assets/Images/NMICPS.png"), // Image 1
      // require('../assets/Images/DST.png'),
      require("../assets/Images/ibitf.png"), // Image 1
    ],
  },


  // Awards component contents
  awards: [
    {
      image: require("../assets/Images/19.jpg"), // Replace with actual paths
      // title: 'Project Title 1',
      description:
        "National e-Governance “Gold Award” by Department of  Administrative Reforms Public  Grievance, Government of India, to the project entitled, “ Blochchain based IoT enabled Precision agriculture” and the Mobile App Crop doctor 2.0.",
    },
    {
      image: require("../assets/Images/20.jpg"),
      // title: 'Project Title 2',
      description:
        "Project titled, “Intelligent Emergency Care System (iECS) through Digital Hybrid Healthcare” is awarded the Dr. Keshav Baliram Hedgewar Arogya Shri Award (2024) at the Future of Healthcare Forum 2024, held at New Delhi.",
    },
    {
      image: require("../assets/Images/21.jpg"),
      // title: 'Project Title 3',
      description:
        "Project entitled, “Smart Cleaner: Automatic Clean the Smart Contract” has been awarded by The Institution of Engineers (India), Mumbai for  Research Excellence in 2023.",
    },
    {
      image: require("../assets/Images/22.jpg"),
      // title: 'Project Title 4',
      description:
        "Project titled, “AI based geo-enabled crop insurance” under BhoomiCam Pvt. Ltd. Start-up has been honored with the prestigious Best Geospatial Stratup Award at the National Geospatial awards 2024, organized by FOSSEE (GIS), held in VMCC, IIT Bombay under the aegies of the National Mission on Education, Government of India.",
    },
  ],

  // for slider page design

  sliderImages: [
    {
      url: require("../assets/slider/01.jpg"),
      title: "Two-Day Workshop on “Rasayan Mukt Jahar Mukt Tikau Kheti” at IIT Bhilai",
    },
    {
      url: require("../assets/slider/02.jpeg"),
      title: "IIT Bhilai Hosts “Baapi Na Uwat” Youth Leadership Workshop to Transform Communities Through Yuvodaya Volunteers of Dantewada",
    },
    {
      url: require("../assets/slider/03.jpeg"),
      title: "Demonstration of Digi Agri Village to Honourable Governor",
    },
    {
      url: require("../assets/slider/04.jpeg"),
      title: "two-day workshop on “Marketplace Literacy” workshop on July 29th and 30th, 2024",
    },
    {
      url: require("../assets/slider/05.jpeg"),
      title: "Inagauration of Smart ER",
    },
    {
      url: require("../assets/slider/1.jpg"),
      title:
        "The Divyang ATM has been successfully installed at the National Association For The Blind (Prerna Bhavan), Raipur, C.G., for comprehensive testing and validation.",
    },

    {
      url: require("../assets/slider/3.jpeg"),
      title: "Ankuran - Innovation Farmers Fair and Exhibhition",
    },
    {
      url: require("../assets/slider/4.jpeg"),
      title:
        "Honorable Governor of Mizoram, Dr. Hari Babu Kambhampati, served as the chief guest at the Workshop conducted by IBITF at Mizoram University.",
    },
    {
      url: require("../assets/slider/2.jpeg"),
      title: "Drone Didi Workshop at IIT Bhilai",
    },
  ],

  AboutSection: {
    title: "Innovation and Technology Foundation ",
    highlight: "IIT Bhilai",
    description:
      "IIT Bhilai has been entrusted with establishing a Technology Innovation Hub (TIH) under the NM-ICPS, focusing on financial technologies (FinTech) with significant emphasis on Agritech and Healthtech. As a Section-8 Company, IBITF oversees the TIH’s operations, ensuring alignment with the mission and vision of NMICPS.",
    buttonText: "Read More",
    image: require("../assets/Images/bg-iit.jpg"), // Path to your image
  },

  // Awards component contents
  awards: [
    {
      image: require("../assets/Images/19.jpg"), // Replace with actual paths
      // title: 'Project Title 1',
      description:
        "National e-Governance “Gold Award” by Department of  Administrative Reforms Public  Grievance, Government of India, to the project entitled, “ Blochchain based IoT enabled Precision agriculture” and the Mobile App Crop doctor 2.0.",
    },
    {
      image: require("../assets/Images/20.jpg"),
      // title: 'Project Title 2',
      description:
        "Project titled, “Intelligent Emergency Care System (iECS) through Digital Hybrid Healthcare” is awarded the Dr. Keshav Baliram Hedgewar Arogya Shri Award (2024) at the Future of Healthcare Forum 2024, held at New Delhi.",
    },
    {
      image: require("../assets/Images/21.jpg"),
      // title: 'Project Title 3',
      description:
        "Project entitled, “Smart Cleaner: Automatic Clean the Smart Contract” has been awarded by The Institution of Engineers (India), Mumbai for  Research Excellence in 2023.",
    },
    {
      image: require("../assets/Images/22.jpg"),
      // title: 'Project Title 4',
      description:
        "Project titled, “AI based geo-enabled crop insurance” under BhoomiCam Pvt. Ltd. Start-up has been honored with the prestigious Best Geospatial Stratup Award at the National Geospatial awards 2024, organized by FOSSEE (GIS), held in VMCC, IIT Bombay under the aegies of the National Mission on Education, Government of India.",
    },
  ],

  // featuredProjects component content
  featuredProjects: [
    {
      image: require("../assets/project_features/divyang_atm.jpeg"),
      title: "Accessible banking functionalities for Divyang using Smart ATM",
      description:
        "Divyang ATM: Divyang ATM, “An Accessible Banking Solution for All,” represents an innovative approach to banking designed to make financial services more accessible, especially for visually Divyang persons. This innovative system integrates an Android application with cutting-edge features to ensure a secure and convenient banking experience.",
      route: "/smartATM",
    },
    {
      image: require("../assets/project_features/bhoomicamp.jpeg"),
      title: "Bhoomicam",
      description:
        "Revolutionising Agriculture with AI and Satellite Technology: Bhoomicam: A versatile smartphone app ‘Bhoomicam,’ that empowers farmers to input crop information, creating a digital database linking land parcels and satellite imagery. The tool aims to geo-enable farms, integrate AI with satellite data for crop monitoring, and offer personalized recommendations for increasing the quality and quantity of crop production.",
      route: "/BhoomiCam",
    },
    {
      image: require("../assets/project_features/ices.jpeg"),
      title: "Intelligent Emergency Care System (iECS)" ,
      description:
        "Intelligent Emergency Care System (iECS) Strengthening the Emergency Care Systems in Chhattisgarh through Digital Hybrid Healthcare - An AI-driven platform for doctors in remote areas to manage emergencies, offer 24x7 tele-access to emergency experts, standardize patient assessment, and provide patients with information on affordable medicines, alternative treatments, and insurance options.",
      route: "/emergencyCare",
    },
    {
      image: require("../assets/project_features/digital_agrivillage.jpeg"),
      title: "Digital Agri Village: Empowering Tribal Farmers in Chhattisgarh",
      description:
        "The Concept of Digital Agri-village heralds a new era in agricultural innovation, aiming to transform traditional farming landscapes into technologically advanced, interconnected hubs of sustainable growth and empowerment. At the heart of this initiative lies a comprehensive vision to revolutionize farming practices and empower Self-help groups (SHGs) and farmers through an amalgamation of cutting-edge technologies and collaborative knowledge-sharing platforms.",
      route: "/DigitalAgriVillage",
    },
    {
      image: require("../assets/ProjectImages/vsk/04.jpeg"),
      title: "Vidya Samiksha Kendra",
      description:
        "An AI-based centralized monitoring platform designed to transform the state education system through data-driven decision-making. It offers real-time insights into school performance, infrastructure, and student demographics, enabling evidence-based policy formulation and resource allocation. This initiative fosters a more informed and responsive educational framework, contributing significantly to the overall improvement of Chhattisgarh education sector.",
      route: "/vsk",
    },
    {
      image: require("../assets/project_features/kyc.jpg"),
      title: "Video KYC",
      description:
        "This project aims to develop a blockchain-powered Video KYC framework for secure and efficient customer identity verification. It integrates machine learning models for automated identity verification and data extraction, enhancing security and user experience with a bilingual audio-visual chatbot and facial recognition technology.",
      route: "/videoKYC",
    },
  ],


  videoPage: {
    title: "The Hon'ble President of India Applauds Our Innovation",
    description:
      "The President of India appreciates IIT Bhilai Innovation and Technology Foundation for its impactful work in Fintech, Agritech, and Healtech.",
    videoThumbnail: require("../assets/Images/Video.jpeg"), // Update with the actual path to the thumbnail
    videoUrl:
      "https://www.youtube.com/embed/uW1wla5z6vc?si=4SWs_TIRX32Vgv8G&amp;start=260&end=360&autoplay=1", // YouTube video URL
  },
  jobListings: [

    {
      title: "Recruitment of various Project positions of FinteQ- quantum-Safe Financial Transaction Framework",
      positions: "03",
      qualifications: "Bachelor's/Master's degree in Engineering, M.Sc. (IT/CS) or MCA ,Technology,Management or related fields",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year",
      ageLimit: "Maximum Age 45 years",
      location: "IBITF IIT Bhilai",
      lastDate: "18th Sep 2025",   
      downloadLink: require("../assets/PDF/career/Fintech30-6-25@.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSfuoGR-rso5JI0kFzeVR9KUgSNq1z_WeM6cNxv4uXpmUcL8EA/viewform",
      applyText: "Apply Now",
    },

 {
      title: "Recruitment of various Project positions of IBITF",
      positions: "4",
      qualifications: "Bachelor's/Master's degree in Engineering, Technology,Management,law, or related fields",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year",
      ageLimit: "Maximum Age 45 years",
      location: "IBITF IIT Bhilai",
      lastDate: "11th AugUST 2025",   
      downloadLink: require("../assets/PDF/career/IBITF-Aug2025.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSd6kBZXX5sIHy6obqvmmQRIrbCMDcXg4TSb-QXsu74DRfoxZw/viewform",
      applyText: "Apply Now",
    },

    {
      title: "Recruitment of various Project positions of VSK Project",
      positions: "05",
      qualifications: "Bachelor's or Master's degree in Eng., M.Sc. (IT/CS), MCA, B.Com, B.A., M.Com, M.A., or any other related field",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year",
      ageLimit: "Maximum Age 45 years",
      location: "IBITF IIT Bhilai",
      lastDate: "Walk In Interview",   
      downloadLink: require("../assets/PDF/career/VSK-TE2025.pdf"),
      // applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeeDs2spmQb25x8c6nbTukDqSGQAKLDQsYWaGby1ePTFxrjcw/viewform",
      applyText: "Apply Now",
    },
    {
      title: "Recruitment of various Project positions of VSK Project",
      positions: "04",
      qualifications: "Bachelor's/Master's degree in Engineering, M.Sc. (IT/CS) or MCA ,Technology,Management or related fields",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year",
      ageLimit: "Maximum Age 45 years",
      location: "IBITF IIT Bhilai",
      lastDate: "27th April 2025",   
      downloadLink: require("../assets/PDF/career/VSK2025V2.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeeDs2spmQb25x8c6nbTukDqSGQAKLDQsYWaGby1ePTFxrjcw/viewform",
      applyText: "Apply Now",
    },
    {
      title: "Recruitment of various Project positions of IBITF",
      positions: "13",
      qualifications: "Bachelor's/Master's degree in Engineering, Technology,Management or related fields",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year/89 Days",
      ageLimit: "Maximum Age 45 years",
      location: "IBITF IIT Bhilai",
      lastDate: "6th April 2025",   
      downloadLink: require("../assets/PDF/career/Advt_April25_TIH.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSd6kBZXX5sIHy6obqvmmQRIrbCMDcXg4TSb-QXsu74DRfoxZw/viewform",
      applyText: "Apply Now",
    },
    {
      title: "Recruitment of Project Consultant(Finance cum Legal)",
      positions: "01",
      qualifications: "CA/CS, Master’s degree in Finance/economics or relevant field. A law degree with any above qualifications shall attract additional weightage.",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year (extendable)",
      ageLimit: "Maximum Age 50 years",
      location: "IIT Bhilai",
      lastDate: "9th February 2025",   
      downloadLink: require("../assets/PDF/career/ProjectConsultant.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSeYOrS3jLLk9M8YUVPVhUxNP5ghg_5FijCet5GofVXobYpLlQ/viewform",
      applyText: "Apply Now",
    },
    {
      title: "Recruitment of various Project positions of VSK",
      positions: "03",
      qualifications: "MTech/BTech, M.Sc/MCA, ME/MS in Computer Science. Proficiency in  Word, Excel, PowerPoint etc.",
      experience: "As Per Advertisement Attached",
      contractPeriod:"1 Year",
      ageLimit: "Maximum Age 35 years(as on date of application)",
      location: "IIT Bhilai",
      lastDate: "24th January 2025",   
      downloadLink: require("../assets/PDF/career/VSK-Staff.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSduz-xbjwR1jzWkCm5PA4qhC_qAW8v7K8OazCwueBfru6uD8A/viewform",
      applyText: "Apply Now",
    },
    {
      title: "Project Associate",
      positions: "01",
      qualifications: "Bachelor's/Master's degree in Engineering, Technology, Management or related fields",
      experience: "As Per Advertisement Attached",
      contractPeriod:
        "89 Days and may be extendable depending upon the performance",
      ageLimit: "Age shall not exceed 35 years ",
      location: "IIT Bhilai",
      lastDate: "22nd January 2025",   
      downloadLink: require("../assets/PDF/career/Project_Associate16JAN.pdf"),
      applyLink: "https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1EHB2IWivwoLZmGMu6mVvc-y6DFVFsJBPfftfJxVy9m4%2Fviewform&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2F1EHB2IWivwoLZmGMu6mVvc-y6DFVFsJBPfftfJxVy9m4%2Fviewform&ifkv=AVdkyDn9HJwRe2ugp7520CwEOX3bSP3sLrSj1BcbdhzR8tUSox-kVJ3kJa7B_XB5SCGEzsk-auy8Eg&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1692979787%3A1737027136531745&ddm=1",
      applyText: "Apply Now",
    },
    {
      title: "Project Manager/Project Associate",
      positions: "03",
      qualifications: "Phd or MBA/ME/MTech BE/BTech",
      experience: "As Per Advertisement Attached",
      contractPeriod:
        "89 Days and may be extendable depending upon the performance",
      ageLimit: "Preferably below 40 years but not exceeding 45 years.",
      location: "IIT Bhilai",
      lastDate: "10th December 2024",   
      downloadLink: require("../assets/PDF/career/01Advertise.pdf"),
      applyLink: "https://docs.google.com/forms/d/e/1FAIpQLSebCl0XSlsIonj_qHVWyM9dqaIPqW09p1rbfwqs41-uVtxKNw/viewform",
      applyText: "Apply Now",
    },
    // {
    //   title: "Project Associate (under MTS rules)",
    //   positions: "02",
    //   qualifications:
    //     "Master’s/Bachelor’s in Science, Commerce, CS, IT, or Engineering.",
    //   experience: "As Per Advertisement Attached",
    //   contractPeriod: "89 Days (extendable)",
    //   ageLimit: "Up to 45 years",
    //   location: "IBITF, IIT Bhilai",
    //   lastDate: "11th December 2024",
    //   downloadLink: require("../assets/PDF/career/MTSnovember2024.pdf"),
    //   applyLink:
    //     "https://docs.google.com/forms/d/1jgE7uJRr1Mjpa9wtws_dmlfhwD0-JwmVFTPOxTE5EgA/viewform",
    //   applyText: "Apply Now",
    // },
    // {
    //   title: "Recruitment of various Project positions at IBITF",
    //   positions: "05",
    //   qualifications:
    //     "MTech/BTech, M.Sc/MCA, ME/MS in Computer Science, or B.Com/BSc.",
    //   experience: "As Per Advertisement Attached",
    //   contractPeriod: "1 Year",
    //   ageLimit: "Up to 45 years",
    //   location: "IBITF Bhilai",
    //   lastDate: "11th December 2024",
    //   downloadLink: require("../assets/PDF/career/AdvertiseNovember.pdf"),
    //   applyLink:
    //     "https://docs.google.com/forms/d/1KevUcGv9Rz2BdIfMjrEgp92dIV-WyfodEkHSU4Tvkg8/viewform",
    //   applyText: "Apply Now",
    // },
    // {
    //   title: "Project Manager/Project Associate",
    //   positions: "03",
    //   qualifications: "Phd or MBA/ME/MTech BE/BTech",
    //   experience: "As Per Advertisement Attached",
    //   contractPeriod:
    //     "89 Days and may be extendable depending upon the performance",
    //   ageLimit: "Preferably below 40 years but not exceeding 45 years.",
    //   location: "IIT Bhilai",
    //   lastDate: "16th October 2024",
    //   downloadLink: require("../assets/PDF/career/01Advertise.pdf"),
    //   applyLink: "#",
    //   applyText: "Apply Now",
    // },
   
   
  ],

  selectedCandidates: [
      {
      title: "Provisional List of Shortlisted/Not Shortlisted applicants for the post of Technical Manager",
      positions: "01",
      interviewDate: "To be Announced",
      remarks: "Finalized",
      contactPerson: "HR Manager, tih@iitbhilai.ac.in",
      downloadLink: require("../assets/PDF/career/Technical-Manager-VSK-web-upload-approval.pdf"),
    },
     {
      title: "Provisional List of Shortlisted/Not Shortlisted applicants for the post of Project Assistant",
      positions: "02",
      interviewDate: "To be Announced",
      remarks: "Finalized",
      contactPerson: "HR Manager, tih@iitbhilai.ac.in",
      downloadLink: require("../assets/PDF/career/Project-Assistant-web-upload-approval-withresult.pdf"),
    },
     {
      title: "Provisional List of Shortlisted/Not Shortlisted applicants for the post of Accounts and Operational",
      positions: "01",
      interviewDate: "To be Announced",
      remarks: "Finalized",
      contactPerson: "HR Manager, tih@iitbhilai.ac.in",
      downloadLink: require("../assets/PDF/career/Accounts-and-Operational-CoordinatorVSK- web-upload-approval.pdf"),
    },
    {
      title: "List of Shortlisted/Not Shortlisted applicants for the post of Advisor (Finance)",
      positions: "01",
      interviewDate: "To be Announced",
      remarks: "Finalized",
      contactPerson: "HR Manager, tih@iitbhilai.ac.in",
      downloadLink: require("../assets/PDF/career/Advisor-Finance25-05-25.pdf"),
    },
     {
      title: "List of Shortlisted/Not Shortlisted applicants for the post of Senior Software Developer",
      positions: "01",
      interviewDate: "To be Announced",
      remarks: "Finalized",
      contactPerson: "HR Manager, tih@iitbhilai.ac.in",
      downloadLink: require("../assets/PDF/career/Senior-Software-Developer25-5-25.pdf"),
    },
     {
      title: "List of Shortlisted/Not Shortlisted applicants for the post of Project Engineer",
      positions: "01",
      interviewDate: "To be Announced",
      remarks: "Finalized",
      contactPerson: "HR Manager, tih@iitbhilai.ac.in",
      downloadLink: require("../assets/PDF/career/ProjectEngineer25-5-25.pdf"),
    },
    //  {
    //   title: "List of Shortlisted/Not Shortlisted applicants for the post of Project Associate",
    //   positions: "01",
    //   interviewDate: "To be Announced",
    //   remarks: "Finalized",
    //   contactPerson: "HR Manager, tih@iitbhilai.ac.in",
    //   downloadLink: require("../assets/PDF/career/Project-Associate25-5-25.pdf"),
    // },
    //  {
    //   title: "List of Shortlisted/Not Shortlisted applicants for the post of Project Assitant",
    //   positions: "02",
    //   interviewDate: "To be Announced",
    //   remarks: "Finalized",
    //   contactPerson: "HR Manager, tih@iitbhilai.ac.in",
    //   downloadLink: require("../assets/PDF/career/Project-Assistant25-5-25.pdf"),
    // },
    //  {
    //   title: "Senior Software Developer and Project Engineer",
    //   positions: "03",
    //   interviewDate: "To be Announced",
    //   remarks: "Finalized",
    //   contactPerson: "HR Manager, tih@iitbhilai.ac.in",
    //   downloadLink: require("../assets/PDF/career/Provisonal_Shortlisting.pdf"),
    // },
   
  ],

  vision: [
    {
      text: "The vision of the IIT Bhilai Innovation and Technology Foundation (IBITF) is to become a leading enabler of innovation and entrepreneurship in financial, agricultural and health technologies. It aims to position India as a global leader by advancing cutting-edge research, nurturing entrepreneurial talent, and fostering a sustainable ecosystem through national and international collaborations.",
      heading: "Vision",
    },
  ],
  mission: [
    {
      text: "The mission of IBITF is to drive impactful research and development in fintech, agritech and healthtech, support aspiring entrepreneurs through structured mentorship and funding, and empower individuals through capacity-building and skill development programs. IBITF is dedicated to creating innovative solutions for regional and national challenges while contributing to economic growth and social progress. Through collaborative efforts with academic institutions, industry, and government agencies, IBITF strives to develop a vibrant ecosystem that promotes technological advancements and entrepreneurial success.",
      heading: "Mission",
    },
  ],

  journey: [
    {
      text: "Under the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS), the Department of Science and Technology (DST) has designated IIT Bhilai as one of the 25  nodal centers to host the Technology Innovation Hub (TIH). This TIH serves as the epicenter driving entrepreneurship, translational R&D, and collaboration in the financial, agricultural and health technologies  in India. To oversee and manage all entrepreneurship-related initiatives at IIT Bhilai, IIT Bhilai Innovation and Technology Foundation (IBITF) has been established as a Section-8 non-profit company under the Companies Act, 2013.",
      heading: "IBITF and it’s Journey",
    },
    {
      description:
        "Establishment of the Technology Innovation Hub (TIH) at IIT Bhilai by NM-ICPS, DST in the year 2020. Initial Grant - ₹7.25 crore.",
    },
    {
      description:
        "Funding the Unified Video KYC project, along with 3 transitional research (PRAYAS) and 2 entrepreneurship in residence (EIR) projects. Second Grant - ₹5.5 crore.",
    },
    {
      description:
        "Funding 5 transitional research (PRAYAS), 12 technology business incubator (TBI), and 4 entrepreneurship in residence (EIR) projects. Third Grant (General) - ₹4 crore.",
    },
    {
      description:
        "Funding 8 transitional research (PRAYAS) and 4 entrepreneurship in residence (EIR) projects. Third Grant (ST) - ₹19 crore.",
    },
    {
      description:
        "Funding 54 projects under the ST Sub Plan. Third Grant (ST) - ₹19 crore.",
    },
  ],

  objective: [
    {
      heading: "Entrepreneurship and Startup Ecosystem",
      subHeading: [
        "To build a nation-wide innovation/incubation center that provides a platform for entrepreneurship.",
        "Supporting students/alumni and faculty for startups in Fintech, Agritech, and Healthtech ecosystems.",
        "Entrepreneurs in residence programs.",
        "Technology business incubation collaborations.",
      ],
    },
    {
      heading: "HRD and Skilling",
      subHeading: [
        "High-end skill development.",
        "Formal Education in Fintech, Agritech, and Healthtech.",
        "Research Education.",
        "Faculty fellowships for existing faculties and inviting cross-institution faculties.",
      ],
    },
    {
      heading: "Collaborations",
      subHeading: [
        "Academics - International and National Educational Institutes, Exchange and Mentorship Programs.",
        "Government organizations.",
        "Industry - MSME and Startups.",
      ],
    },
    {
      heading: "Research & Development",
      subHeading: [
        "E-Payment Systems.",
        "Blockchain for Fintech.",
        "AI for Fintech.",
        "IoT for Fintech.",
      ],
    },
  ],
   sectors : [
      {
        title: 'Agritech',
        description: 'Innovations in the agricultural sector.',
        pdf: Agritech,
      },
      {
        title: 'Fintech',
        description: 'Technology driving financial services.',
        pdf: Fintech,
      },
      {
        title: 'HealthTech',
        description: 'Advancements in healthcare technology.',
        pdf: HealthTech,
      },
    ],
  
  visionMissionData: [
    {
      icon: <FaLightbulb />,
      text: "Empowering young professionals and students to develop entrepreneurial skills",
    },
    {
      icon: <FaFlask />,
      text: "Cutting-edge research and development.",
    },
    {
      icon: <FaPeopleArrows />,
      text: "Contribution towards India’s leadership position in the technology revolution.",
    },
    {
      icon: <FaGraduationCap />,
      text: "Capability and capacity building using HRD and skill development at various levels.",
    },
    {
      icon: <FaGlobe />,
      text: "Building a sustainable ecosystem with national and international collaboration.",
    },
  ],

  scope: [
    {
      heading: "Entrepreneurship and Startup Ecosystem",
      points: [
        {
          subHeading: "Nationwide Innovation and Incubation Center",
          text: "Establishing a platform to foster entrepreneurship and innovation across the country.",
          icon: <Business />,
        },
        {
          subHeading: "Support for Students, Alumni, and Faculty",
          text: "Encouraging and nurturing startups.",
          icon: <Support />,
        },
        {
          subHeading: "Entrepreneurs-in-Residence (EIR) Programs",
          text: "Providing mentorship, resources, and support for aspiring entrepreneurs, during their study in academic institutes.",
          icon: <School />,
        },
        {
          subHeading: "Technology Business Incubation",
          text: "Offering infrastructure, funding, and guidance to accelerate startup growth.",
          icon: <Laptop />,
        },
      ],
    },
    {
      heading: "HRD and Skilling",
      points: [
        {
          subHeading: "High-End Skill Development",
          text: "Certifications, Quality Improvement Programs (QIPs), Workshops, and Self-Employment-oriented training.",
          icon: <Work />,
        },
        {
          subHeading: "Formal Education",
          text: "UG, PG, PhD, and Post-Doctoral Fellowships.",
          icon: <School />,
        },
        {
          subHeading: "Chair Professorships",
          text: "To promote advanced research and learning.",
          icon: <AccountBalance />,
        },
        {
          subHeading: "Opportunities for Students and Faculty",
          text: "Opportunities for students and faculty members across academic institutions.",
          icon: <People />,
        },
        {
          subHeading: "Industry-Academia Interface",
          text: "Strong industry-academia interface to align education with real-world fintech, agritech, and healthtech applications.",
          icon: <BusinessCenter />,
        },
      ],
    },
    {
      heading: "Research and Development",
      points: [
        {
          subHeading: "E-Payment Systems",
          text: "Advancing secure and seamless digital payment solutions.",
          icon: <Payment />,
        },
        {
          subHeading: "AI for Fintech",
          text: "Leveraging artificial intelligence for data-driven financial services.",
          icon: <Computer />,
        },
        {
          subHeading: "IoT for Fintech",
          text: "Integrating IoT solutions to enhance financial operations and security.",
          icon: <Devices />,
        },
        {
          subHeading: "Seamless Platforms for Agritech Services",
          text: "Mobile app with voice support in regional languages for easy accessibility regarding information on pesticides, weedicides, soil and field analysis, yield estimation, Geo-fencing, etc.",
          icon: <Agriculture />,
        },
        {
          subHeading: "Geo-enabled Crop Insurance",
          text: "Using satellite data to generate crop insurance advisories.",
          icon: <Satellite />,
        },
        {
          subHeading: "Organic Farming Practices",
          text: "Scientific study and standardization of indigenous knowledge-based organic farming practices.",
          icon: <AgricultureIcon />,
        },
        {
          subHeading: "Drone-based Precision Agriculture",
          text: "Implementing drone technology to enhance agricultural precision and efficiency.",
          icon: <AirplanemodeActiveIcon />,
        },
        {
          subHeading: "Seamless Platform for Healthtech Services",
          text: "Mobile app in regional languages for easy consultation with doctors, availability of medicines, diagnostics, etc.",
          icon: <HealthAndSafety />,
        },
        {
          subHeading: "Intelligent Emergency Care System",
          text: "Strengthening emergency care systems in remote areas through Digital Hybrid Healthcare.",
          icon: <Emergency />,
        },
        {
          subHeading: "Clinical Study of Indigenous Medical Practices",
          text: "Conducting clinical studies and standardizing indigenous medical practices.",
          icon: <LocalHospital />,
        },
      ],
    },
    {
      heading: "Strategic Collaborations and Partnerships",
      points: [
        {
          subHeading: "National and International Educational Institutes",
          text: "Fostering academic exchange programs and research collaborations.",
          icon: <School />,
        },
        {
          subHeading: "Mentorship for Startups",
          text: "Guiding startups with industry expertise and support.",
          icon: <SupervisedUserCircle />,
        },
        {
          subHeading: "Partnerships with Key Organizations",
          text: "Collaborating with UIDAI, GSTN, NPCI, CDAC, SAIL, NIC, T-Hub, IDRBT, and international laboratories/universities, including Siegen University, Germany; University of Illinois Urbana-Champaign, USA; University of Missouri, USA.",
          icon: <Group />,
        },
        {
          subHeading: "Support for MSMEs and Startups",
          text: "Promoting innovation and growth through tailored programs and initiatives.",
          icon: <Business />,
        },
      ],
    },
  ],
  projectData : [
    {
      title: 'UG',
      description: 'Kickstart your research journey with our Undergraduate fellowships, offering early exposure to high-impact projects and mentorship.',
      icon: '🎓',
      pdf: UG 
    },
    {
      title: 'PG',
      description: 'Deepen your specialization with our Postgraduate fellowships, designed for advanced study and significant contributions in your field.',
      icon: '🔬',
      pdf: PG
    },
    {
      title: 'Doctoral',
      description: 'Pursue groundbreaking research with our Doctoral (Ph.D.) fellowships, providing full support for producing a transformative thesis.',
      icon: '📜',
      pdf: Doctoral_Fellowship
    },
    {
      title: 'Post Doctoral',
      description: 'Collaborate with leading experts as a Post-Doctoral fellow, driving innovation and publishing pioneering work in your discipline.',
      icon: '🧑‍🔬',
      pdf: PostDoctoral_Fellowship
    },
  ],
};
