import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { pagesConfig } from '../constants/pagesConfig';
import { Tabs, Tab, Box, Grid, MenuItem, Select, Typography, Paper, Card } from '@mui/material';
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
                  {subCat?.toUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </Box>
        )}
        <div className='card-cnt-list' style={styles.cardCnt}>
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
        </div>
      </Card>
    </Box>
  );
};

// Define the styles using MUI's sx prop and custom styles
const styles = {
  container: {
    padding: '20px 20px',
    margin: '0 auto',
    height: "100%",
    overflowY: "auto"
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
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop:"5px"
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
