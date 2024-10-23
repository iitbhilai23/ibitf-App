
export const siteContent = {
  navbar: {
    // logo: 'assets/iit.png',ti
    logo: require('../assets/iit@.png'),
    menuItems: ['Home',
      {
        label:'About Us',
        submenu: ['About IBITF', 'Organizational Structure'],
      },
      
      
      
      {
        label: 'Programs & Initiatives',
        submenu: ['Thematic Areas', 'Schemes', 'Call for Proposals', 'Blogs'],
      },
      'Projects','Team','Career','Contact Us'],
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
        image: require('../assets/Cloud1.jpg'),
      },
      {
        title: 'AI-Driven Analytics',
        description: 'Harness the power of AI for insights.',
        image: require('../assets/AI.jpg'),
      },
      {
        title: 'Cybersecurity',
        description: 'Protect your business with top security solutions.',
        image: require('../assets/Cloud1.jpg'),
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




board_team:{
  title:'Board of Directors of the IBITF',
  members: [
    {
      name: 'Prof. Rajiv Prakash',
        designation: 'Director IIT Bhilai & Chariman',
        image: require('../assets/director.png'),
    },
    {
      name: 'Dr. Rajeev Shorey',
        designation: 'Chief Executive Officer & University of Queensland - IIT Delhi Academy of Research (UQIDAR)',
        image: require('../assets/RajeevShoury.jpg'),
    },
    {
      name: 'Prof. Sumeet Gupta',
        designation: 'Professor, IIM Raipur',
        image: require('../assets/SumitGupta.jpg'),
    },
    {
      name: 'Prof. Santosh Biswas',
      designation: 'Dean of R&D, Project Director (IBITF)',
      image: require('../assets/santosh.jpeg'),
    },
    {
      name: 'Dr. Souradyuti Paul',
      designation: 'Associate professor,  Dept. of EECS IIT Bhilai',
      image: require('../assets/PaulSir.jpeg'),
    },
    {
      name: 'Dr. Barun Gorain',
      designation: 'Assistant Professor,  Dept. of EECS IIT Bhilai',
      image: require('../assets/Barun.jpg'),
    },
    {
      name: 'Mr. Gautam Ramani',
      designation: 'Deputy Registrar (F and A), IIT Bhilai',
      image: require('../assets/Gautam.jpg'),
    },
    {
      name: 'Mr. S Mukopadhyay',
      designation: 'ED (Projects), Bhilai Steel Plant(BSP), Sail',
      image: require('../assets/Mukopadhyay.jpeg'),
    },
    {
      name: 'Padma Shri Phoolbasan Bai Yadav',
      designation: 'Founder, Maa Bamleshwari Janhit Kare Samiti',
      image: require('../assets/Poolbusan.png'),
    }
    ,
    {
      name: 'Shri. Manish Gupta',
      designation: 'Director, Beekay Engineering Corporation Pvt. Ltd',
      image: require('../assets/ManishGupta.jpeg'),
    }
    ,
    {
      name: 'Shri. Naresh Kumar',
      designation: 'CTO, India and EMEA Region, Tektronix Pvt. Ltd',
      image: require('../assets/NareshKumar.jpeg'),
    }
    ,
    {
      name: 'Shri. Somesh Sharma',
      designation: 'Co-Founder and COO, Augtech NextWealth IT Services Pvt. Ltd',
      image: require('../assets/SomeshSharma.jpeg'),
    }

  ]
},
governing_team:{
  title:'Hub Governing Body (HGB)',
  members: [
    
    {
      name: 'Prof. Rajiv Prakash',
        designation: 'Director IIT Bhilai & Chariman',
        image: require('../assets/director.png'),
    },
    {
      name: 'Prof. D. Janakiram',
      designation: 'Academic Representative, Member',
      image: require('../assets/jankiram.jpg'),
    },
    {
      name: 'Prof. G. Sivakumar',
      designation: 'Academic Representative, Member',
      image: require('../assets/shivkumar.jpg'),
    },
    {
      name: 'Mr. Rama Iyer',
      designation: 'Industry Representative, Member',
      image: require('../assets/ramalyer.jpg'),
    },
    {
      name: 'Mr. J A Chowdary',
      designation: 'Industry Representative, Member',
      image: require('../assets/JAChoudary.jpg'),
    },
    {
      name: 'Dr. Ekta Kapoor',
      designation: 'Mission Director of NM-ICPS & DST, Member',
      image: require('../assets/Ekta.jpg'),
    },
    {
      name: 'Mr. Prashant Mathur',
      designation: 'Chief Executive Officer, IBITF',
      image: require('../assets/ceo.jpeg'),
    },
    {
      name: 'Padma Shri Phoolbasan Bai Yadav',
      designation: 'Founder, Maa Bamleshwari Janhit Kare Samiti',
      image: require('../assets/Poolbusan.png'),
    }
    ,
    {
      name: 'Shri. Manish Gupta',
      designation: 'Director, Beekay Engineering Corporation Pvt. Ltd',
      image: require('../assets/ManishGupta.jpeg'),
    }
    ,
    {
      name: 'Shri. Naresh Kumar',
      designation: 'CTO, India and EMEA Region, Tektronix Pvt. Ltd',
      image: require('../assets/NareshKumar.jpeg'),
    }
    ,
    {
      name: 'Shri. Somesh Sharma',
      designation: 'Co-Founder and COO, Augtech NextWealth IT Services Pvt. Ltd',
      image: require('../assets/SomeshSharma.jpeg'),
    }

  ]
},
  team: {
    title: 'Meet Our Team',
    members: [
      {
        name: 'Mr. Prashant Mathur',
        designation: 'Chief Executive Officer, IBITF',
        image: require('../assets/ceo.jpeg'),
      },
      {
        name: 'Prof. Santosh Biswas',
        designation: 'Dean of R&D, Project Director (IBITF)',
        image: require('../assets/santosh.jpeg'),
      },
      {
        name: 'Mr. Vishnu Vaibhav Dwivedi',
        designation: 'Chief Technology Officer, (IBITF)',
        image: require('../assets/cto.png'),
      },
      {
        name: 'Mrs. Pratibha Dongre',
        designation: 'Project Associate, IBITF',
        image: require('../assets/pratibha.jpg'),
      },{
        name: 'Mrs. Preeti Tiwari',
        designation: 'Project Associate, IBITF',
        image: require('../assets/preeti.png'),
      },
      {
        name: 'Mrs. Nidhi Trivedi',
        designation: 'Project Associate, IBITF',
        image: require('../assets/nidhi.png'),
      },
      {
        name: 'Mrs. K Sujata',
        designation: 'Project Associate, IBITF',
        image: require('../assets/sujata.png'),
      },
      {
        name: 'Ms. Richa Bhoi',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Richa.jpeg'),
      },
      {
        name: 'Ms. Aanchal Sahu',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Aanchal_sahu.jpeg'),
      },
      {
        name: 'Ms. Sonali Patle',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/sonali.jpg'),
      },
      {
        name: 'Mr. Lala Ram',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/Lalaram.jpg'),
      },
      {
        name: 'Ms. Aanchal Barchhiha',
        designation: 'Project Assistant, IBITF',
        image: require('../assets/AnchalBarchhiha.jpg'),
      },
      {
        name: 'Mr. Domeshwar',
        designation: 'Project Attendent, IBITF',
        image: require('../assets/domesh24.jpeg'),
      },
    ],
  },
  thematic:{
    card:[{img:require('../assets/thematic/payment.png'),head:"E-Payment Systems",desc:"E-payment system (or online payment system) is one of the fundamental components underpinning any Fintech application. An e-payment system allows financial transactions or payments for goods or services to happen through the electronic medium, without the use of physical cheques or currencies."},
      {img:require('../assets/thematic/blockchain-rb.png'),head:"Blockchain Technology",desc:"Blockchain is a powerful and fascinating technology emerged in recent times which is perceived to have the potential to bring radical changes to the ways our financial systems (e.g. lending, mortgage, retail payments, stock exchange, leverage, risk assessment and underwriting, etc.) work."},
      {img:require('../assets/thematic/ai.png'),head:"Artificial Intelligence",desc:"Application of AI techniques to the Fintech arena facilitate predicting market trends, customized financial advices to enrich user experience, enhancing security, credit risk assessment, valuation modeling etc."},
      {img:require('../assets/thematic/iot.png'),head:"Internet of Things",desc:"With the advent of IoT paradigm, the financial sector is also witnessing the enormous impact of the technology in terms of features like immediate support and personalization of service, smart bank branches and ATMs, improved spending visibility, enhanced security, risk assessment for insurance and loan etc."}
    ],
    description:[{title:"E-Payment Systems",desc:["User friendly e-payment systems","Popularizing e-payments","e-payment system for utility services"],img:require('../assets/thematic/payment.png'),descImg:require('../assets/thematic/e-payment-desc.png')},
    {title:"Blockchain Technology",desc:["Design and analysis of structural components of Blockchain for Fintech","Applications of Blockchain for Fintech products",],img:require('../assets/thematic/blockchain-rb.png'),descImg:require('../assets/thematic/blockchainsjpg-desc.png')},
    {title:"Artificail Intelligence",desc:["Efficient AI and ML based models for Fintech applications","Process automation, improving user experience and security solutions for Fintech applications"],img:require('../assets/thematic/ai.png'),descImg:require('../assets/thematic/AI-desc.png')} ,
    {title:"Internet of Things",desc:["Security of IoT framework for Finetch solutions","IoT based Fintech products","Testing and improving reliability of IoT framework"],img:require('../assets/thematic/iot.png'),descImg:require('../assets/thematic/IOT-desc.png')},
    
    ]
  }
  
};
