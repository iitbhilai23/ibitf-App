import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    // Update URL query params when the active tab changes
    const params = new URLSearchParams();
    params.set('tab', activeTab);
    navigate({ search: params.toString() });
  }, [activeTab, navigate]);

  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
    setSelectedSubCategory(''); // Reset subCategory when switching tabs
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
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

  const subCategories = [...new Set(pagesConfig
    .filter(({ category }) => category === activeTab)
    .map(({ subCategory }) => subCategory))];

  return (
    <Box sx={styles.container}>
      {/* Page Title */}

      <Card elevation={2} sx={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h4" sx={styles.title}>
          Explore Projects, Workshops, and Events
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
            sx={{ backgroundColor: "background.paper" }}
          >
            <Tab label="Projects" value="project" sx={styles.tab} />
            <Tab label="Events" value="event" sx={styles.tab} />
          </Tabs>
        </Box>

        <Box sx={styles.search}>
          <TextField
            variant="outlined"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            sx={styles.searchField}
          />
          {subCategories.length > 0 && (
            <Box sx={styles.dropdownContainer}>

              <Select
                value={selectedSubCategory}
                onChange={handleSubCategoryChange}
                displayEmpty
                variant="outlined"
                sx={styles.dropdown}
              >
                <MenuItem value="" sx={{ fontWeight: '400', fontFamily: 'Roboto, sans-serif' }}>
                  <em>ALL</em>
                </MenuItem>
                {subCategories.map((subCat, index) => (
                  <MenuItem key={index} value={subCat} sx={{ fontWeight: '300', fontFamily: 'Roboto, sans-serif' }}>
                    {subCat?.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
        </Box>

        {/* Search Panel */}
        <Box sx={styles.searchContainer}>

        </Box>
        <div className='card-cnt-list' style={styles.cardCnt}>
          <Grid container spacing={3} sx={styles.gridContainer}>
            {filteredProjects.map(({ title, path, description, id }, index) => (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <Link to={path} style={styles.cardLink}>
                  <CountCard
                    title={title}
                    onClick={() => console.log(`Clicked on ${title}`)}
                    height="170px"
                    color_num={(index % 4) + 1}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
        </div>
      </Card>
    </Box>
  );
};

// Define the styles using MUI's sx prop and custom styles
const styles = {
  search: {
    display: "flex",
    justifyContent: 'space-between',
  },
  container: {
    padding: '20px 20px',
    margin: '0 auto',
    height: "100%",
    overflowY: "auto",
    maxWidth: "1200px"
  },
  title: {
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
    fontSize: '18px',
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '20px',
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
    height: '50px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  searchContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: '20px',
  },
  searchField: {
    width: '280px',
    height: '50px',
    borderRadius: '10px',
    marginLeft: '20px',
    backgroundColor: '#fff', // Light background for contrast
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow
    // padding: '10px', // Add padding inside the input
    border: '1px solid #ccc', // Light border
    fontSize: '16px', // Increase font size for readability
    outline: 'none', // Remove the default outline
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove the default border
      },
    },
    '& .MuiInputBase-input': {
      paddingLeft: '10px', // Add padding inside the input
    },
    '&:focus-within': {
      backgroundColor: '#fff', // White background when focused
      border: '1px solid #3f51b5', // Blue border on focus for visibility
      boxShadow: '0px 0px 10px rgba(63, 81, 181, 0.2)', // Glow effect on focus
    },
  },
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: "5px"
  },
  cardLink: {
    textDecoration: 'none',
  },
  cardCnt: {
    height: "50vh",
    overflowY: "auto"

  }
};

export default ProjectsList;
