
export const siteContent = {
  navbar: {
    // logo: 'assets/iit.png',ti
    logo: require('../assets/iit.png'),
    menuItems: ['Home', 'About-us',
      
      {
        label: 'Services',
        submenu: ['Web Development', 'App Development', 'SEO', 'Consulting'],
      },
      'Team','Career','Contact'],
  },
  footer: {
    text: '© 2024 IIT Bhilai Innovation Technologies and Foundation. All rights reserved.',
  },
  home: {
    heroTitle: 'Innovating the Future with Technology',
    heroSubtitle: 'Empowering Solutions for Tomorrow',
    cards: [
      {
        title: 'Cloud Solutions',
        description: 'Scalable cloud services for your business.',
        // image: 'assets/service1.jpg',
        // image: require('../assets/CloudServer.png'),
      },
      {
        title: 'AI-Driven Analytics',
        description: 'Harness the power of AI for insights.',
        image: 'assets/service2.jpg',
      },
      {
        title: 'Cybersecurity',
        description: 'Protect your business with top security solutions.',
        image: 'assets/service3.jpg',
      },
    
    ],
  },
  about: {
    images: [
      {
        heading: 'Affordable Medical Devices',
        image: require('../assets/icons/medical_devices2.png'),
      },
      {
        heading: 'Medical Imaging',
        image: require('../assets/icons/medical_imaging.png'),
      },
      {
        heading: 'Fintech for Healthcare',
        image: require('../assets/icons/healthcare.png'),
      },
      {
        heading: 'Smart Materials for Healthcare',
        image: require('../assets/icons/smart_healthcare.png'),
      },
      {
        heading: 'Teaching and Training',
        image: require('../assets/icons/teaching_training.png'),
      },
      {
        heading: 'IOT for Healthcare',
        image: require('../assets/icons/healthcare.png'),
      },
      {
        heading: 'Wireless Communication for Healthcare',
        image: require('../assets/icons/wireless.png'),
      },
    ],
  },
  services: {
    title: 'Our Services',
    description: 'Explore a wide range of services including cloud, AI, and cybersecurity...',
  },
  career: {
    title: 'Join Our Team',
    description: 'Be a part of a dynamic team shaping the future...',
  },
  contact: {  
    title: 'Contact Us',
    description: 'Reach out to us for business inquiries or support...',
    
  },
  contactInfo: {
    title: "Contact Us",
    address: "Indian Institute of Technology Bhilai, Kutelabhata village, Bhilai, Chhattisgarh ",
    postalCode: "491002",
    email: "administration@iitbhilai.ac.in",
    phone: " 0788-2991603",
  },
  mapIframes: [
    { 
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6175251911372!2d81.31628207503775!3d21.247010180457593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28db65364103d5%3A0x9ca0815dc09dac5f!2z4KSH4KSC4KSh4KS_4KSv4KSoIOCkh-CkqOCljeCkuOCljeCkn-Ckv-Ckn-CljeCkr-ClguCknyDgpJHgpKsg4KSf4KWH4KSV4KWN4KSo4KWJ4KSy4KWJ4KSc4KWAIOCkreCkv-CksuCkvuCkiA!5e0!3m2!1smr!2sin!4v1728974507631!5m2!1smr!2sin" 
    },
    { 
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1859.171529174987!2d81.57723248859604!3d21.257883895112325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de23ea073ba1%3A0x9de4d779d976c7c9!2z4KSP4KSu4KWN4KS4IOCksOCkvuCkr-CkquClguCksA!5e0!3m2!1smr!2sin!4v1728974682772!5m2!1smr!2sin&hl=en&language=en" 
    },
  
  ],

board_team:{
  title:'Faculty Members from IIT Bhilai',
  members: [
    {
      name: 'Dr. Santosh Biswas',
        designation: 'Professor',
        Qualification:"Ph.D. (IIT Kharagpur)",
        email:"santosh@iitbhilai.ac.in",
        image: require('../assets/santosh.jpeg'),
    },
    {
      name: 'Dr. Sanjib Banerjee',
        designation: ' Associate Professor',
        Qualification:"Ph.D.(IACS Kolkata)",
        email:"sanjib.banerjee@iitbhilai.ac.in",
        image: require('../assets/faculty/DrSanjin.jpg'),
    },
    {
      name: 'Dr. Gagan Raj Gupta',
        designation: 'Associate Professor',
        Qualification:"Ph.D. (Purdue University, USA)",
        email:"gagan@iitbhilai.ac.in",
        image: require('../assets/faculty/DrGagan.jpg'),
    },
    {
      name: 'Dr. Avishek Adhikary',
      designation: 'Assistant Professor',
      Qualification:"Ph.D. (IIT Kharagpur)",
      email:"avisheka@iitbhilai.ac.in",
      image: require('../assets/faculty/DrAvishek.jpg'),
    },
    {
      name: 'Dr. Anand M.  Baswade',
      designation: 'Assistant Professor',
      Qualification:"Ph.D. (IIT Hyderabad)",
      email:"anand@iitbhilai.ac.in",
      image: require('../assets/faculty/DrAnand.jpg'),
    },
    {
      name: 'Dr. Sk  Subidh  Ali',
      designation: 'Assistant Professor',
      email:"subidh@iitbhilai.ac.in",
      Qualification:"Ph.D. (IIT Kharagpur)",
      image: require('../assets/faculty/DrSubaidh.jpg'),
    },
    {
      name: 'Dr. Jose Immanuel  R',
      designation: 'Assistant Professor',
      email:"jose@iitbhilai.ac.in",
      Qualification:"Ph.D. (IIT Madras)",
      image: require('../assets/faculty/DrJose.jpg'),
    },
    {
      name: 'Dr. Rukmankesh',
      designation: 'Assistant Professor',
      email:"rukmankesh@iitbhilai.ac.in",
      Qualification:"PhD: CSIR-Indian Institute of Integrative Medicine (IIIM), Jammu",
      image: require('../assets/faculty/DrRukmankesh.jpg'),
    },  
    {
      name: 'Dr. Suchetan Pal',
      designation: 'Assistant Professor',
      email:"suchetanp@iitbhilai.ac.in",
      Qualification:"Ph.D. (Arizona State University)",
      image: require('../assets/faculty/DrSuchetan.jpg'),
    },
    
  ]
},
governing_team:{
  title:'Faculty Members from AIIMS Raipur',
  members: [
    
    {
      name: 'Dr. Alok chandra Agrawal',
        department:'Dean (Academics)',
        workplace:"AIIMS, Raipur",
        image: require('../assets/faculty/DrAlok.jpg'),
    },
    {
      name: 'Prof.(Dr.)  Debendra Kumar Tripathy',
      department:"Professor & Head Trauma & Emergency",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/DrDebendra.jpeg'),
    },
    {
      name: 'Prof.(Dr.)  Narendra K Bodhey',
      department:"Professor & Head Radiodiagnosis",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/DrNarendra.jpeg'),
    },
    {
      name: 'Prof.(Dr.) Renu Rajguru',
      department:"Professor & Head Dept.of ENT",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },
    {
      name: 'Prof.(Dr.) Ramanjan Sinha',
      department:"Professor & Head Dept.of Physiology",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },
    {
      name: 'Prof.(Dr.) Amit Chowhan',
      department:"Professor & Head Dept.of Pathology",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/DrAmit.jpeg'),
    },
    {
      name: 'Prof.(Dr.) Avinash  Ingle',
      department:"Associate Dean (Examination)",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },
    {
      name: 'Dr. Suprava Patel',
      department:"Additional Professor Dept.of Biochemistry",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },
    {
      name: 'Dr. Anagha  Phadhe',
      department:"Associate Professor Dept.of Physiology",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },
    {
      name: 'Dr. Rakesh Gupta',
      department:"Assistant Professor Dept.of Pathology",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/DrRakesh.jpg'),
    },  {
      name: 'Dr. Arunita T  Jagzape',
      department:"Assistant Professor Dept.of Physiology",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },{
      name: 'Dr. Naman Agrawal',
      department:"Assistant Professor Trauma & Emergency",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/DrNaman.jpg'),
    },{
      name: 'Dr. D.L.  Gupta',
      department:"Professor & Head Dept.of Pathology",
      workplace:"AIIMS, Raipur",
      image: require('../assets/faculty/dp.jpeg'),
    },

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
};
