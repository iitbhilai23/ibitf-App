import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { pagesConfig } from '../constants/pagesConfig';
import { Tabs, Tab, Box, Grid, MenuItem, Select, Typography, Paper, Card, TextField } from '@mui/material';
import CountCard from '../components/CountCard';

const ProjectsList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const initialTab = queryParams.get('tab') || 'project';
 
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const targetRef = useRef(null);

  useEffect(() => {
    // Update URL query params when the active tab changes
    const params = new URLSearchParams();
    params.set('tab', activeTab);
    navigate({ search: params.toString() });
  }, [activeTab, navigate]);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
    setSelectedSubCategory('');
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
    targetRef.current?.scrollIntoView({
      behavior: "smooth", block: "start"

    });
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProjects = pagesConfig
    .filter(
      ({ category, subCategory, title }) =>
        category === activeTab &&
        (selectedSubCategory === '' || subCategory === selectedSubCategory) &&
        title.toLowerCase().includes(searchTerm) // Filter based on search term
    );

  const subCategories = pagesConfig
    .filter(({ category }) => category === activeTab)
    .reduce((acc, { subCategory, schemeFullForm }) => {
      // Find if the subCategory already exists in the accumulator array
      const existingSubCategory = acc.find(item => item.subCategory === subCategory);

      if (existingSubCategory) {
        existingSubCategory.count += 1;
      } else {
        acc.push({ subCategory, schemeFullForm, count: 1 });
      }

      return acc;
    }, []);


  const subCategoryDetails = {
    PRAYAS: {
      title: 'Promotion and Acceleration of Young and Aspiring technology entrepreneurs (PRAYAS)',
      description: 'At an early stage, a gap exists for young entrepreneurs to build a working prototype from their ideas before progressing to the next level. There are many challenges that are faced by entrepreneurs in preparing the first working prototype. PRAYAS would be filling this gap by providing funding and guidance at this stage to help entrepreneurs and allow a large number of potential ideas into incubation programs. Specifically, PRAYAS aims at the following.',
      bulletPoints: [
        'Enable translation of ideas into prototypes',
        'Attract a large number of youth with innovative ideas for different types of problems.',
        'Provide a platform for faster experimentation and modify approach from idea to prototype.',
        'Provide a platform to test ideas.'
      ],
    },
    EIR: {
      title: 'Entrepreneur in Residence (EIR)',
      description: 'The EIR program is envisaged to inspire best talents among PG and PhD graduates and provide ample support to minimize risk in pursuing start-ups. The program would provide enormous opportunity for innovative entrepreneurs to expand network and get critical feedback to promote their entrepreneurial goals and aspirations.',
      bulletPoints: [
        'Encourage students to take up entrepreneurship by providing fellowship',
        'Provide prestigious forum for deserving entrepreneurs to pursue their ideas without additional risks',
        'To make entrepreneurship related to financial technology an attractive option among available career options.',
        'Enable creation of new start-ups and allow them to make significant progress towards raising funding and investment.'
      ],
    },
    TBI: {
      title: 'Technology Business Incubators (TBI)',
      description: 'The Technology Business Incubator will be primarily established with some academic, technical or management institution to bring in the innovations and technologies for venture creation by utilizing expertise and infrastructure already available with the host institution. The TBI initiative of the TIH will protect the institute to be funded, from the high risk involved in high growth ventures, to enhance the prospects of their success. The basic objectives of TBI involve,',
      bulletPoints: [
        'Job creation, prototype and product design, businesses etc. aligned with national priorities.',
        'To facilitate start-ups with cutting edge research mentorship, lab facility etc.',
        'To provide a platform for speedy commercialization of technologies developed by the host institution or the stakeholders associated with the institute.',
        'To build a vibrant network of start-up ecosystems facilitating mentorship, technical and R&D related suggestions, financial support etc., by establishing a network between academia and industries, mainly involving the collaborators of the IBITF.'
      ],
    },
    TSP: {
      title: 'Tribal Area Sub Plan (TSP)',
      description: 'The primary objective of the Tribal Area Sub-Plan (TSP) is to significantly enhance the livelihoods of Scheduled Tribe (ST) communities by integrating advanced financial technologies. This initiative aims to address the specific challenges faced by these communities through the strategic deployment of cutting-edge technologies such as Artificial Intelligence/Machine Learning (AI/ML), Internet of Things (IoT), Blockchain, and E-Payments. ',
    },
    TD: {
      title: 'Technology Development (TD)',
      description: 'Our Technology Development projects focus on fostering cutting-edge solutions that shape the future of industries and society. We aim to push the boundaries of what is possible by creating efficient, scalable, and impactful technological innovations that meet the needs of modern challenges',
    },
  };

  return (
    <Box sx={styles.container}>

      <Card elevation={2} sx={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h4" sx={styles.title}>
          {activeTab === 'project'
            ? 'Dive into a World of Innovative and Impactful Projects'
            : 'Immerse Yourself in Events, Workshops, and Inspiring Success Stories'}
        </Typography>

        <div style={styles.divider}></div>

        {/* Tabs for Categories */}
        <Box sx={styles.tabsContainer}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
            sx={{
              backgroundColor: "background.paper",
              "& .MuiTab-root.Mui-selected": {
                color: "#6a0dad",
                background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#6a0dad",
              }
            }}
          >
            <Tab label="Projects" value="project" sx={styles.tab} />
            <Tab label="Events" value="event" sx={styles.tab} />
          </Tabs>
        </Box>

        <Box sx={styles.search}>
          {/* Subcategory Cards */}
          <div className='projects-cards-clicked'>
            <Grid container spacing={8}>
              {subCategories.map((subCat, index) => (
                <Grid item xs={12} sm={4} md={4} key={index}>
                  <Card
                    onClick={() => handleSubCategoryClick(subCat?.subCategory)}
                    sx={{
                      // minHeight: "175px",
                      padding: "20px",
                      cursor: "pointer",
                      backgroundColor: selectedSubCategory === subCat?.subCategory ? "#c3cfe2" : "#ffffff",
                      transition: "background-color 0.3s",
                      '&:hover': {
                        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                        transform: "translateY(-5px)",
                        boxShadow: "#f5f7fa 0px 0px 0px, #c3cfe2 0px 0px 13px",
                        transition: "transform 1s ease",
                      },
                      borderRadius: "12px",
                      border: selectedSubCategory === subCat ? "1px solid #c3cfe2" : "none",
                      textAlign: "center",
                    }}
                  >
                    <span style={styles.clickedCardsTxt}>
                      <span style={{ fontWeight: 600, fontSize: "35px", color: "#000000" }}><Counter endValue={subCat?.count} /></span>
                      <span>{subCat?.subCategory?.toUpperCase()}</span>
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>{subCat?.schemeFullForm}</span>
                    </span>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>

        {selectedSubCategory && subCategoryDetails[selectedSubCategory] && (
          <Paper elevation={3} sx={styles.fullWidthCard}>
            <Typography variant="h6" sx={styles.fullWidthCardTitle}>
              {subCategoryDetails[selectedSubCategory]?.title}
            </Typography>
            <Typography variant="body1" sx={styles.fullWidthCardText}>
              {subCategoryDetails[selectedSubCategory]?.description}
            </Typography>
            {/* Display bullet points if they exist */}
            {subCategoryDetails[selectedSubCategory]?.bulletPoints && (
              <ul style={styles.bulletPointsList}>
                {subCategoryDetails[selectedSubCategory]?.bulletPoints.map((point, index) => (
                  <li key={index} style={styles.bulletPoint}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </Paper>
        )}
        <Box sx={{display:"flex",justifyContent:"end", margin:"20px 20px"}}>
          {selectedSubCategory && (
            <TextField
              variant="outlined"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              sx={styles.searchField}
            />
          )}
        </Box>

        <div ref={targetRef} style={{ minHeight: "50px" }}>
          {selectedSubCategory && (
            <div className='card-cnt-list' style={styles.cardCnt} >
              <Grid container spacing={3} sx={styles.gridContainer}>
                {filteredProjects.map(({ title, path, description, id }, index) => (
                  <Grid item xs={12} sm={6} md={2.4} key={id}>
                    <Link to={path} style={styles.cardLink}>
                      <CountCard
                        title={title}
                        onClick={() => console.log(`Clicked on ${title}`)}
                        height="130px"
                        color_num={(index % 4) + 1}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
        </div>
      </Card>
    </Box>
  );
};

// Define the styles using MUI's sx prop and custom styles
const styles = {
  search: {
    display: "flex",
    flexDirection: 'column',
  },
  container: {
    padding: '20px 20px',
    margin: '0 auto',
    height: "100%",
    overflowY: "auto",
  },
  title: {
    fontSize: '26px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  tabsContainer: {
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    borderBottom: "1px solid #c4c4c4"

  },
  tab: {
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '14px',
    color: '#6a0dad'
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '10px',
  },
  divider: {
    width: '50%',
    height: '3px',
    backgroundColor: '#6a0dad',
    margin: '15px auto',
    borderRadius: '4px',
  },
  dropdown: {
    width: '250px',
    height: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    marginRight: '20px',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '20px',
  },
  clickedCardsTxt: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#6a0dad",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "10px"
  },
  searchField: {
    width: '250px',
    height: '40px',
    borderRadius: '10px',
    justifyContent: 'center',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    border: '1px solid #ccc', // Light border
    fontSize: '16px', // Increase font size for readability
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove the default border
      },
    },
    '& .MuiInputBase-input': {
      paddingLeft: '10px', // Add padding inside the input
      height: '100%', // Ensure input height fills the field
    },
    '&:focus-within': {
      border: '1px solid #3f51b5', // Blue border on focus for visibility
      boxShadow: '0px 0px 5px rgba(63, 81, 181, 0.2)', // Glow effect on focus
    },
  },

  gridContainer: {
    padding: '0 20px 10px 20px',
    marginTop: "5px"
  },
  cardLink: {
    textDecoration: 'none',
  },
  cardCnt: {
    maxHeight: "70vh",
    overflowY: "auto",
    padding: "10px"
  },
  fullWidthCard: {
    padding: '30px',
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    borderRadius: '8px',
    margin: "20px 20px 0 20px",

  },
  fullWidthCardTitle: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  fullWidthCardText: {
    color: '#555',
  },
  bulletPointsList: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    marginTop: '10px',
  },
  bulletPoint: {
    color: '#555',
    marginBottom: '5px',
  },
};

export default ProjectsList;



const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof endValue === 'string') {
      // Directly set the count to the string value
      setCount(endValue);
      return;
    }

    // Counting animation for numeric values
    let start = 0;
    const increment = endValue / 100;
    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [endValue]);

  return <span>{count.toLocaleString()}</span>;
};