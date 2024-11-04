import SpecialCall from "../assets/PDF/proposal/SpecialCallForProposalforScheduledTribes.pdf";
import card2pdf from "../assets/PDF/proposal/card2.pdf";
import tbiScheme from "../assets/PDF/proposal/tbiScheme.pdf";
import chairProfessor from '../assets/PDF/proposal/chairProfessor.pdf';


export const siteContent = {
  navbar: {
    // logo: 'assets/iit.png',ti
    logo: require('../assets/logo/iit@.png'),
    menuItems: ['Home',
      {
        label: 'About Us',
        submenu: ['About IBITF', 'Organizational Structure'],
      },
      {
        label: 'Programs & Initiatives',
        submenu: ['Thematic Areas', 'Schemes', 'Call for Proposals', 'Blogs'],
      },
      'Projects', 'Team', 'Career', 'Contact Us'],
  },
  Blogs:{
    cardData:[
      {
        word: "Finance and Human History",
        date: "Oct. 06, 2021",
         buttonText: "Learn More",
        pdfUrl:require("../assets/PDF/Blogs/Fintech.pdf")
    },
  
    {
      word: "Legalities of Bitcoin and other Virtual Assets",
      date: "Oct. 06, 2021",
      buttonText: "Learn More",
      pdfUrl:require("../assets/PDF/Blogs/Cryptocurrency.pdf")
  },
  {
      word: "The ONDC: Why Everyone is Talking About it?",
      date: "June 05, 2023",
      buttonText: "Learn More",
      pdfUrl:require("../assets/PDF/Blogs/ondc.pdf")
  },
    ],
  },


  aboutPage: {   // This is the section for the About IBITF content
    title: 'IIT Bhilai Innovation and Technology Foundation (IBITF)',
    description: 'Department of Science and Technology, under its National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) has funded IIT Bhilai to host the Technology Innovation Hub (TIH) for Financial Technologies (FINTECH) area. The TIH at IIT Bhilai is one of the 25 hubs setup under the NM-ICPS program. IIT BHILAI INNOVATION AND TECHNOLOGY FOUNDATION (IBITF), a Section 8 Company, has been established by IIT Bhilai to host this TIH. IBITF is the nodal centre for spearheading Entrepreneurship, Research and Development, HRD and Skill development and Collaboration related activities in the area of Financial Technologies. 55 crore INR has been sanctioned by for this initiative by DST for the period of five years.',
    nodalCenter: {
      title: 'IBITF: Nodal Center for Financial Technologies',
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
      title: 'Our Vision',
      points: [
        'Cutting-edge research and development in financial technologies.',
        'Scouting for young professionals and nurturing entrepreneurial skills.',
        'Building a robust innovation ecosystem with a focus on entrepreneurship.',
        'Supporting start-ups in financial technology.',
      ],
    },
  },


  governanceStructure: {
    title: 'Governance Structure of the IBITF',
    sections: [
      {
        level: 'BoG of IBITF',
        members: [
          'Director IIT Bhilai',
          'CEO, TIH',
          'Institute Coordinator TIH',
          'Dean R & D, IIT Bhilai',
          'Faculty Member IIT Bhilai (rotation)',
          'DR (F & A) IIT Bhilai',
          'External Industry',
          'External Academia'
        ],
      },
      {
        level: 'Project Co-ordination Group',
        members: [
          'Institute Coordinator of the TIH',
          'Two Faculty Members IIT Bhilai (rotation)',
          'Two Faculty Members from Collaborators (rotation)',
          'Two Experts from Collaborating Industry (rotation)',
          'Representatives from GoI Agencies',
        ],
      },
      {
        level: 'Project Selection Group PRSG',
        members: [
          'Chairman',
          'One Faculty Member',
          'One Expert from Industry',
          'One Expert from Startup Company',
        ],
      },
      {
        level: 'Start-up Coordination Team',
        members: [
          'Two Faculty Members from Collaborators (rotation)',
          'Four Industry Experts (rotation)',
          'Five Representatives from Startups',
        ],
      },
      {
        level: 'TIH Office Administration',
        subSections: [
          {
            category: 'Academic Programs',
            members: [
              'Project Assistant (2)',
            ],
          },
          {
            category: 'Specialized TIH Programs',
            members: [
              'Project Manager (2)',
              'Project Associate (2)',
              'Project Assistant (2)',
            ],
          },
          {
            category: 'HR, Finance, Legal and Others',
            members: [
              'Accountants (1 Project Associate and 1 Project Assistant)',
              'Admin (2 Project Associate and 2 Project Assistant)',
              'IP Lawyer / Legal Executive (Project Consultant)',
              'Attendant (2)',
              'House Keeping (1)',
            ],
          },
        ],
      },
    ],
  },

  footer: {
    text: '© 2024 IIT Bhilai Innovation Technologies and Foundation. All rights reserved.',
  },
  home: {
    heroTitle: 'Welcome to TIH at IIT Bhilai',
    heroSubtitle: `The Technology Innovation Hub (TIH) at IIT Bhilai is one of the 25 hubs setup under the National Mission of Interdisciplinary Cyber-Physical Systems (NM-ICPS) program of the Department of Science and Technology`,
    heroSubtitle1: `The TIH at IIT Bhilai is the nodal centre for spearheading Entrepreneurship, Research and Development, HRD and Skill development and collaboration related activities in the area of Financial Technologies`,


    heroTitle1: 'IBITF: Section 8 company for TIH at IIT Bhilai',
    heroSubtitle2: `IIT BHILAI INNOVATION AND TECHNOLOGY FOUNDATION (IBITF) is a Section 8 company responsible for executing the activities of TIH.`,
    heroSubtitle3: `Rs 55 crore is sanctioned by DST for the period of five years to the company which will focus on projects in arena of Financial Technologies`,
    cards: [
      {
        title: 'Cloud Solutions',
        description: 'Scalable cloud services for your business.',
        // image: 'assets/service1.jpg',
        image: require('../assets/Vector IMG/Cloud1.jpg'),
      },
      {
        title: 'AI-Driven Analytics',
        description: 'Harness the power of AI for insights.',
        image: require('../assets/Vector IMG/AI.jpg'),
      },
      {
        title: 'Cybersecurity',
        description: 'Protect your business with top security solutions.',
        image: require('../assets/Vector IMG/Cloud1.jpg'),
      },

    ],
  },
  about: {
    title: 'About Us',
    description: 'IIT Bhilai Innovation Technologies and Foundation is dedicated to technological advancements and empowering the future with cutting-edge innovations...',
  },
  services: {
    title: 'Our Services',
    description: 'Explore a wide range of services including cloud, AI, and cybersecurity...',
  },
  career: {
    title: 'Join Our Team',
    description: 'Be a part of a dynamic team shaping the future...',
  },


  ContactForm: {
    title: 'Get in Touch',
    description: 'Feel free to drop us a line below!',
  },
  contactDetails: {
    title: 'Contact Us',
    address: 'IIT Bhilai Innovation and Technology Foundation (IBITF), IIT Bhilai Permanent Campus, Kutelabhata, Khapari, District-Durg, Chhattisgarh-491001',
    email: 'tih@iitbhilai.ac.in',
    phone: '+91*******7181',
    fax: '+3356 1589 2100',
  },




  board_team: {
    title: 'Board of Directors of the IBITF',
    members: [
      {
        name: 'Prof. Rajiv Prakash',
        designation: 'Director IIT Bhilai & Chariman',
        image: require('../assets/Team IMG/director.png'),
      },
      {
        name: 'Dr. Rajeev Shorey',
        designation: 'Chief Executive Officer & University of Queensland - IIT Delhi Academy of Research (UQIDAR)',
        image: require('../assets/Team IMG/RajeevShoury.jpg'),
      },
      {
        name: 'Prof. Sumeet Gupta',
        designation: 'Professor, IIM Raipur',
        image: require('../assets/Team IMG/SumitGupta.jpg'),
      },
      {
        name: 'Prof. Santosh Biswas',
        designation: 'Dean of R&D, Project Director (IBITF)',
        image: require('../assets/Team IMG/santosh.jpeg'),
      },
      {
        name: 'Dr. Souradyuti Paul',
        designation: 'Associate professor,  Dept. of EECS IIT Bhilai',
        image: require('../assets/Team IMG/PaulSir.jpeg'),
      },
      {
        name: 'Dr. Barun Gorain',
        designation: 'Assistant Professor,  Dept. of EECS IIT Bhilai',
        image: require('../assets/Team IMG/Barun.jpg'),
      },
      {
        name: 'Mr. Gautam Ramani',
        designation: 'Deputy Registrar (F and A), IIT Bhilai',
        image: require('../assets/Team IMG/Gautam.jpg'),
      },
      {
        name: 'Mr. S Mukopadhyay',
        designation: 'ED (Projects), Bhilai Steel Plant(BSP), Sail',
        image: require('../assets/Team IMG/Mukopadhyay.jpeg'),
      },
      {
        name: 'Padma Shri Phoolbasan Bai Yadav',
        designation: 'Founder, Maa Bamleshwari Janhit Kare Samiti',
        image: require('../assets/Team IMG/Poolbusan.png'),
      }
      ,
      {
        name: 'Shri. Manish Gupta',
        designation: 'Director, Beekay Engineering Corporation Pvt. Ltd',
        image: require('../assets/Team IMG/ManishGupta.jpeg'),
      }
      ,
      {
        name: 'Shri. Naresh Kumar',
        designation: 'CTO, India and EMEA Region, Tektronix Pvt. Ltd',
        image: require('../assets/Team IMG/NareshKumar.jpeg'),
      }
      ,
      {
        name: 'Shri. Somesh Sharma',
        designation: 'Co-Founder and COO, Augtech NextWealth IT Services Pvt. Ltd',
        image: require('../assets/Team IMG/SomeshSharma.jpeg'),
      }

    ]
  },
  governing_team: {
    title: 'Hub Governing Body (HGB)',
    members: [

      {
        name: 'Prof. Rajiv Prakash',
        designation: 'Director IIT Bhilai & Chariman',
        image: require('../assets/Team IMG/director.png'),
      },
      {
        name: 'Prof. D. Janakiram',
        designation: 'Academic Representative, Member',
        image: require('../assets/Team IMG/jankiram.jpg'),
      },
      {
        name: 'Prof. G. Sivakumar',
        designation: 'Academic Representative, Member',
        image: require('../assets/Team IMG/shivkumar.jpg'),
      },
      {
        name: 'Mr. Rama Iyer',
        designation: 'Industry Representative, Member',
        image: require('../assets/Team IMG/ramalyer.jpg'),
      },
      {
        name: 'Mr. J A Chowdary',
        designation: 'Industry Representative, Member',
        image: require('../assets/Team IMG/JAChoudary.jpg'),
      },
      {
        name: 'Dr. Ekta Kapoor',
        designation: 'Mission Director of NM-ICPS & DST, Member',
        image: require('../assets/Team IMG/Ekta.jpg'),
      },
      {
        name: 'Mr. Prashant Mathur',
        designation: 'Chief Executive Officer, IBITF',
        image: require('../assets/Team IMG/ceo.jpeg'),
      },
      {
        name: 'Padma Shri Phoolbasan Bai Yadav',
        designation: 'Founder, Maa Bamleshwari Janhit Kare Samiti',
        image: require('../assets/Team IMG/Poolbusan.png'),
      }
      ,
      {
        name: 'Shri. Manish Gupta',
        designation: 'Director, Beekay Engineering Corporation Pvt. Ltd',
        image: require('../assets/Team IMG/ManishGupta.jpeg'),
      }
      ,
      {
        name: 'Shri. Naresh Kumar',
        designation: 'CTO, India and EMEA Region, Tektronix Pvt. Ltd',
        image: require('../assets/Team IMG/NareshKumar.jpeg'),
      }
      ,
      {
        name: 'Shri. Somesh Sharma',
        designation: 'Co-Founder and COO, Augtech NextWealth IT Services Pvt. Ltd',
        image: require('../assets/Team IMG/SomeshSharma.jpeg'),
      }

    ]
  },
  team: {
    title: 'Meet Our Team',
    members: [
      {
        name: 'Mr. Prashant Mathur',
        designation: 'Chief Executive Officer, IBITF',
        image: require('../assets/Team IMG/ceo.jpeg'),
      },
      {
        name: 'Prof. Santosh Biswas',
        designation: 'Dean of R&D, Project Director (IBITF)',
        image: require('../assets/Team IMG/santosh.jpeg'),
      },
      {
        name: 'Mr. Vishnu Vaibhav Dwivedi',
        designation: 'Chief Technology Officer, (IBITF)',
        image: require('../assets/Team IMG/cto.png'),
      },
      {
        name: 'Mrs. Pratibha Dongre',
        designation: 'Project Associate, IBITF',
        image: require('../assets/Team IMG/pratibha.jpg'),
      }, {
        name: 'Mrs. Preeti Tiwari',
        designation: 'Project Associate, IBITF',
        image: require('../assets/Team IMG/preeti.png'),
      },
      {
        name: 'Mrs. Nidhi Trivedi',
        designation: 'Project Associate, IBITF',
        image: require('../assets/Team IMG/nidhi.png'),
      },
      {
        name: 'Mrs. K Sujata',
        designation: 'Project Associate, IBITF',
        image: require('../assets/Team IMG/sujata.png'),
      },
      {
        name: 'Ms. Richa Bhoi',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Team IMG/Richa.jpeg'),
      },
      {
        name: 'Ms. Aanchal Sahu',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Team IMG/Aanchal_sahu.jpeg'),
      },
      {
        name: 'Ms. Sonali Patle',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Team IMG/sonali.jpg'),
      },
      {
        name: 'Mr. Lala Ram',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Team IMG/Lalaram.jpg'),
      },
      {
        name: 'Ms. Aanchal Barchhiha',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Team IMG/AnchalBarchhiha.jpg'),
      },
      {
        name: 'Mr. Domeshwar',
        designation: 'Project Attendent, IBITF',
        image: require('../assets/Team IMG/domesh24.jpeg'),
      },
    ],
  },
  thematic:{
    card:[{img:require('../assets/thematic/payment.png'),head:"E-Payment Systems",desc:"E-payment system (or online payment system) is one of the fundamental components underpinning any Fintech application. An e-payment system allows financial transactions or payments for goods or services to happen through the electronic medium, without the use of physical cheques or currencies."},
      {img:require('../assets/thematic/blockchain.png'),head:"Blockchain Technology",desc:"Blockchain is a powerful and fascinating technology emerged in recent times which is perceived to have the potential to bring radical changes to the ways our financial systems (e.g. lending, mortgage, retail payments, stock exchange, leverage, risk assessment and underwriting, etc.) work."},
      {img:require('../assets/thematic/ai.png'),head:"Artificial Intelligence",desc:"Application of AI techniques to the Fintech arena facilitate predicting market trends, customized financial advices to enrich user experience, enhancing security, credit risk assessment, valuation modeling etc."},
      {img:require('../assets/thematic/iot.png'),head:"Internet of Things",desc:"With the advent of IoT paradigm, the financial sector is also witnessing the enormous impact of the technology in terms of features like immediate support and personalization of service, smart bank branches and ATMs, improved spending visibility, enhanced security, risk assessment for insurance and loan etc."}
    ],
    description:[{title:"E-Payment Systems",desc:"E-payment system (or online payment system) is one of the fundamental components underpinning any Fintech application. An e-payment system allows financial transactions or payments for goods or services to happen through the electronic medium, without the use of physical cheques or currencies.",subdescription:[{subTitle:"User friendly e-payment systems",subDesc:["Minimal human intervention","Unified payment system","Low cost platforms"]},{subTitle:"Popularizing e-payments",subDesc:["Rural applications","Urban applications","Small retailers"]},{subTitle:"e-payment systems for utility services",subDesc:["Public Transport","Utility supply payments"]}],img:require('../assets/thematic/payment.png')},
    {title:"Blockchain Technology",desc:"Blockchain is a powerful and fascinating technology emerged in recent times which is perceived to have the potential to bring radical changes to the ways our financial systems (e.g. lending, mortgage, retail payments, stock exchange, leverage, risk assessment and underwriting, etc.) work.",subdescription:[{subTitle:"Design and analysis of structural components of Blockchain for Fintech",subDesc:["Consensus algorithms","Smart contracts","Hybrid Platforms","Searchable encryption"]},{subTitle:"Secure digital identity management",subDesc:["Risk analysis and assessment","Micro-loans","Energy trading","Intelligent Agriculture"]}],img:require('../assets/thematic/blockchain.png')},
    {title:"Artificail Intelligence",desc:"Application of AI techniques to the Fintech arena facilitate predicting market trends, customized financial advices to enrich user experience, enhancing security, credit risk assessment, valuation modeling etc.",subdescription:[{subTitle:"Efficient AI models for Fintech applications",subDesc:["Feature selection and ranking","Prediction models","Handling dynamic data","Handling unstructured data"]},{subTitle:"Process automation and improving user experience",subDesc:["Portfolio management","Recommender System"]},{subTitle:"Security",subDesc:["Anomaly detection systems","Efficient classifiers"]}],img:require('../assets/thematic/ai.png')} ,
    {title:"Internet of Things",desc:"With the advent of IoT paradigm, the financial sector is also witnessing the enormous impact of the technology in terms of features like immediate support and personalization of service, smart bank branches and ATMs, improved spending visibility, enhanced security, risk assessment for insurance and loan etc.",subdescription:[{subTitle:"Standardization of Cyber Security for IoT devices",subDesc:["Access Control","Lightweight cryptography","Secured data collection"]},{subTitle:"IoT-based Fintech Products",subDesc:["Biometric authentication systems","Smart ATMs","Wearable devices"]},{subTitle:"Testing and Validation of the IoT framework",subDesc:["Hardware-Software embedded testing","Compatibility testing","Data integrity testing"]}],img:require('../assets/thematic/iot.png'),descImg:require('../assets/thematic/IOT-desc.png')},
    
    ]
  },
  cardDetail: [
    {
        title: "Grand Challenges and Competitions for Scouting Innovations (GCC)",
        description: "GCC is a pre-incubation activity targeted mainly to discover innovative ideas in the area of financial technology. Through different challenges like Hackathons, the IBITF can invite people from different areas with innovative solutions for solving issues and challenges in the area of finance particularly to Indian context. The basic objectives of the GCC are:",
        objectives: [
            "Find and nurture innovative ideas for addressing major challenges in the area of Fintech and their solution with the help of technology.",
            "Find untapped sources and convert ideas into start-up.",
            "Provide a minimal risk entry point into the start-up ecosystem.",
            "Provide structured guidance, mentoring and funding for application of ideas.",
            "Generate awareness and build a vibrant entrepreneurship ecosystem."
        ]
    },
    {
        title: "Promotion and Acceleration of Young and Aspiring Technology Entrepreneurs (PRAYAS)",
        description: "At an early stage, a gap exists for young entrepreneurs to build a working prototype from their ideas before progressing to the next level. There are many challenges that are faced by entrepreneurs in preparing the first working prototype. PRAYAS would be filling this gap by providing funding and guidance at this stage to help entrepreneurs and allow a large number of potential ideas into incubation programs. Specifically, PRAYAS aims at the following:",
        objectives: [
            "Enable translation of ideas into prototypes.",
            "Attract a large number of youth with innovative ideas for different types of problems.",
            "Provide a platform for faster experimentation and modify approach from idea to prototype.",
            "Provide a platform to test ideas."
        ]
    },
    {
        title: "Entrepreneur in Residence (EIR)",
        description: "The EIR program is envisaged to inspire best talents among PG and PhD graduates and provide ample support to minimize risk in pursuing start-ups. The program would provide enormous opportunity for innovative entrepreneurs to expand network and get critical feedback to promote their entrepreneurial goals and aspirations.",
        objectives: [
            "Encourage students to take up entrepreneurship by providing fellowship.",
            "Provide prestigious forum for deserving entrepreneurs to pursue their ideas without additional risks.",
            "To make entrepreneurship related to financial technology an attractive option among available career options.",
            "Enable creation of new start-ups and allow them to make significant progress towards raising funding and investment."
        ]
    },
    {
        title: "Virtual Incubation (VI)",
        description: "Virtual incubation is a form of incubation usually provided to remote clients. The Virtual incubation aims to support FinTech start ups located in other TIHs/Incubation Centres/Startup Hubs located in Institutes of Higher Learning/Established by State/Central Government. The start-up should aim towards applying cutting edge technologies like Blockchain, AI/ML, IoT, Data Analytics etc. in the domain of Financial Technologies and services such as Banking, Insurance, Neo-Banks, NFT, Smart Contracts, GST, Micro-financing etc. The focus of the incubation is the entrepreneur rather than the building.",
        objectives: []
    },
    {
        title: "Dedicated Innovation Accelerators (DIAL)",
        description: "Accelerators are a post-incubation initiative linked with the existing incubators to supplement and complement the scaling up of a start-up. It aims to direct focused resources for a start-up to validate product ideas and engage with customers for scaling up and boosting the incubator’s existing activities. Accelerators also help in realizing and deciding whether to create a scalable start-up from a very nascent stage. The basic objectives of DIAL involve:",
        objectives: [
            "Fast track growth of potential start-ups through monitoring and networking.",
            "Attract mentors, expert, academicians and investors through structure accelerator programs."
        ]
    },
    {
        title: "Start-up",
        description: "A significant effort of the TIH is to innovate new ideas and technology for revolutionizing the financial sector. These innovations are incomplete if they are not brought forth for the use of common people. A way to do this is through creating start-ups based on the innovations made. Start-ups are the vehicle through which innovative ideas will not only be implemented, but also have substantial effect on the society around. The objectives of the startup program is to achieve:",
        objectives: [
            "Take forward innovation to the commercialization stage.",
            "Promote start-ups by young Indians students.",
            "Accelerate and guide the journey of an innovative idea.",
            "Provide financial assistance for the initial stage of start-up."
        ]
    },
    {
        title: "Seed Support System (SSS)",
        description: "The SSS will allow for funding promising ideas and incubate them till next funding is obtained from investors. The funding allows the innovators and entrepreneurs to develop their technology to a level, where they can attract investments from well-known investors. Thus, it acts as a bridge between ideation, development and commercialization of an innovation in a hassle free manner. The basic objectives of SSS involve:",
        objectives: [
            "Ensure timely availability of seed support for deserving incubator.",
            "Provide platform for innovative entrepreneurs to carry their idea to commercialization.",
            "Widens the pipeline of incubators by attracting more innovators.",
            "Allow entrepreneurs to carry forward their start-up with minimal risk."
        ]
    },
    {
        title: "Technology Business Incubators (TBI)",
        description: "The Technology Business Incubator will be primarily established with some academic, technical or management institution to bring in the innovations and technologies for venture creation by utilizing expertise and infrastructure already available with the host institution. The TBI initiative of the TIH will protect the institute to be funded, from the high risk involved in high growth ventures, to enhance the prospects of their success. The basic objectives of TBI involve:",
        objectives: [
            "Job creation, prototype and product design, businesses etc. aligned with national priorities.",
            "To facilitate start-ups with cutting edge research mentorship, lab facility etc.",
            "To provide a platform for speedy commercialization of technologies developed by the host institution or the stakeholders associated with the institute.",
            "To build a vibrant network of start-up ecosystems facilitating mentorship, technical and R&D related suggestions, financial support etc., by establishing a network between academia and industries, mainly involving the collaborators of the IBITF."
        ]
    },
],
cardDataForCFP: [
  {
    id: 1,
    mainHeading: "Open Call for Proposals (Rolling Advertisement Proposals)",
    subHeading: "Call for Proposals: Social Impact Startups/Projects",
    description: "",
    lastDate: "Last Date for Submission: December 10, 2023",
    buttons: [
      {
        text: "Detailed Call for Proposal",
        action: "action1",
        pdfLink:  SpecialCall ,
      },
      {
        text: "Submit your Proposal",
        action: "email",
        email: "tih@iitbhilai.ac.in",
        subject: "Application Submission",
        body: "Please find my application attached.",
      },
    ],
  },
  {
    id: 2,
    mainHeading: "Special Call for Proposals for Scheduled Tribes (ST)",
    subHeading: "",
    description:
      "IBITF invites applications for conducting training programmes, workshops, conferences under Scheduled Tribe in Fintech Area.",
    lastDate: "Last Date for Submission for this cohort: September 16, 2023",
    buttons: [
      {
        text: "Detailed Call for Proposal",
        action: "action3",
        pdfLink: card2pdf ,
      },
      {
        text: "Education Institution",
        action: "email",
        email: "info@example.com",
        subject: "Inquiry About Proposal",
        body: "I have some questions regarding the proposal.",
        pdfLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc1bpSdc-Y4xTalOvly6cJ6a3Lx_cktBvZB8dt8jfn71gDqAg/viewform?pli=1",
      },
      {
        text: "International Organization",
        pdfLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc1bpSdc-Y4xTalOvly6cJ6a3Lx_cktBvZB8dt8jfn71gDqAg/viewform?pli=1",
      },
      {
        text: "Govt.Organization/Department/Line Ministry",
        pdfLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc1bpSdc-Y4xTalOvly6cJ6a3Lx_cktBvZB8dt8jfn71gDqAg/viewform?pli=1",
      },
      {
        text: "Private Organization/NGOs/Others",
        pdfLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc1bpSdc-Y4xTalOvly6cJ6a3Lx_cktBvZB8dt8jfn71gDqAg/viewform?pli=1",
      },
      {
        text: "Fintech Startups",
        pdfLink:
          "https://docs.google.com/forms/d/e/1FAIpQLSc1bpSdc-Y4xTalOvly6cJ6a3Lx_cktBvZB8dt8jfn71gDqAg/viewform?pli=1",
      },
    ],
  },
  {
    id: 3,
    mainHeading: "Open Call for Proposals (Rolling Advertisement Proposals)",
    subHeading: "Call for Proposals for TBI Scheme",
    description:
      "Proposals are invited by IBITF under the Technology Business Incubator schemes.",
    lastDate: "Last Date for Submission for this cohort: March 20,2023",
    buttons: [
      {
        text: "Detailed Call for Proposal",
        action: "action3",
        pdfLink: tbiScheme,
      },
      {
        text: "Submit Your Proposal",
        action: "email",
        email: "info@example.com",
        subject: "Inquiry About Proposal",
        body: "I have some questions regarding the proposal.",
      },
    ],
  },
  {
    id: 4,
    mainHeading: "Open Call for Proposals (Rolling Advertisement Proposals)",
    subHeading: "Call for Proposals for Chair Professor",
    description: "Proposals are invited by IBITF to join as Chair Professor.",
    lastDate: "",
    buttons: [
      {
        text: "Detailed Call for Proposal",
        action: "action3",
        pdfLink: chairProfessor
         
      },
      {
        text: "Submit Your Proposal",
        action: "email",
        email: "info@example.com",
        subject: "Inquiry About Proposal",
        body: "I have some questions regarding the proposal.",
      },
    ],
  },
],
};
