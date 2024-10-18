import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pagesConfig } from '../constants/pagesConfig';
import { Tabs, Tab, Box, Grid, MenuItem, Select, Typography } from '@mui/material';
import CountCard from '../components/CountCard';

const ProjectsList = () => {
  const [activeTab, setActiveTab] = useState('project');
  const [selectedSubCategory, setSelectedSubCategory] = useState('');


  const handleTabChange = (event, newTab) => {
    setActiveTab(newTab);
    setSelectedSubCategory(''); // Reset subCategory when switching tabs
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const filteredProjects = pagesConfig.filter(
    ({ category, subCategory }) =>
      category === activeTab && (selectedSubCategory === '' || subCategory === selectedSubCategory)
  );

  const subCategories = [...new Set(pagesConfig
    .filter(({ category }) => category === activeTab)
    .map(({ subCategory }) => subCategory))];

  return (
    <Box sx={styles.container}>
      {/* Page Title */}
      <Typography variant="h4" sx={styles.title}>
        Explore Projects, Workshops, and Events
      </Typography>

      {/* Tabs for Categories */}
      <Box sx={styles.tabsContainer}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          aria-label="Project categories"
          variant="fullWidth"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Projects" value="project" sx={styles.tab} />
          <Tab label="Events" value="event" sx={styles.tab} />
        </Tabs>
      </Box>

      {subCategories.length > 0 && (
        <Box sx={styles.dropdownContainer}>
          <Select
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
            displayEmpty
            variant="outlined"
            sx={styles.dropdown}
          >
            <MenuItem value="">
              <em>ALL</em>
            </MenuItem>
            {subCategories.map((subCat, index) => (
              <MenuItem key={index} value={subCat}>
                {subCat}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}

      <Grid container spacing={3} sx={styles.gridContainer}>
        {filteredProjects.map(({ title, path, description, id }, index) => (
          <Grid item xs={12} sm={6} md={3} key={id}>
            <Link to={path} style={styles.cardLink}>
              <CountCard
                title={title}              
                // isActive={index === 0}      
                onClick={() => console.log(`Clicked on ${title}`)}  
                height="170px"              
                color_num={(index % 4) + 1} 
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Define the styles using MUI's sx prop and custom styles
const styles = {
  container: {
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#333',
  },
  tabsContainer: {
    marginBottom: '30px',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  tab: {
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '18px',
  },
  dropdownContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '30px',
  },
  dropdown: {
    width: '250px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  cardLink: {
    textDecoration: 'none',
  },
};

export default ProjectsList;
