import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ComposedChart
} from 'recharts';
import { 
  FiTrendingUp, 
  FiMapPin, 
  FiLayers, 
  FiAward,
  FiFilter,
  FiDownload,
  FiCalendar,
  FiRefreshCw,
  FiBarChart2,
  FiPieChart,
  FiActivity,
  FiUsers,
  FiBookOpen,
  FiAlertCircle,
  FiX,
  FiSettings
} from 'react-icons/fi';

import styles from './TrainingChart.module.css';

// COLORS
const COLORS = {
  primary: '#4f46e5',
  secondary: '#7c3aed',
  accent: '#ec4899',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  dark: '#1f2937',
  light: '#f9fafb',
  chartPalette: ['#4f46e5', '#7c3aed', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#14b8a6']
};

// Dummy Data (unchanged)
const monthlyDataDummy = [
  { month: "Jan 2024", trainings: 12, participants: 240 },
  { month: "Feb 2024", trainings: 18, participants: 310 },
  { month: "Mar 2024", trainings: 22, participants: 400 },
  { month: "Apr 2024", trainings: 15, participants: 280 },
  { month: "May 2024", trainings: 25, participants: 470 },
  { month: "Jun 2024", trainings: 30, participants: 520 },
  { month: "Jul 2024", trainings: 28, participants: 490 },
  { month: "Aug 2024", trainings: 18, participants: 350 },
  { month: "Sep 2024", trainings: 22, participants: 410 },
  { month: "Oct 2024", trainings: 26, participants: 460 },
  { month: "Nov 2024", trainings: 32, participants: 540 },
  { month: "Dec 2024", trainings: 35, participants: 580 },
];

const districtDataDummy = [
  { name: "Raipur", value: 180, growth: 12 },
  { name: "Durg", value: 150, growth: 8 },
  { name: "Bilaspur", value: 140, growth: 15 },
  { name: "Korba", value: 120, growth: 5 },
  { name: "Rajnandgaon", value: 110, growth: 10 },
  { name: "Bastar", value: 95, growth: 18 },
  { name: "Surguja", value: 85, growth: 22 },
];

const categoryDataDummy = [
  { name: "Agriculture", value: 30, trend: 5 },
  { name: "IT Skills", value: 25, trend: 12 },
  { name: "Handicraft", value: 20, trend: -3 },
  { name: "Beauty & Wellness", value: 18, trend: 8 },
  { name: "Textile", value: 12, trend: -2 },
  { name: "Healthcare", value: 15, trend: 10 },
  { name: "Retail", value: 10, trend: 6 },
];

const qualificationDataDummy = [
  { name: "BA", value: 35, avgRating: 4.2 },
  { name: "B.Ed", value: 30, avgRating: 4.5 },
  { name: "M.Com", value: 22, avgRating: 4.3 },
  { name: "Diploma", value: 18, avgRating: 4.1 },
  { name: "MSc", value: 15, avgRating: 4.6 },
  { name: "PhD", value: 8, avgRating: 4.8 },
];

// Filter Hook (unchanged)
const useFilteredData = (data, filters) => {
  return useMemo(() => {
    let filtered = [...data];

    if (filters.dateRange.start && filters.dateRange.end && data[0]?.month) {
      filtered = filtered.filter(item => {
        const itemDate = new Date(item.month);
        const start = new Date(filters.dateRange.start);
        const end = new Date(filters.dateRange.end);
        return itemDate >= start && itemDate <= end;
      });
    }

    if (filters.categories.length > 0 && data[0]?.name) {
      filtered = filtered.filter(item => filters.categories.includes(item.name));
    }

    if (filters.districts.length > 0 && data[0]?.name) {
      filtered = filtered.filter(item => filters.districts.includes(item.name));
    }

    return filtered;
  }, [data, filters]);
};

// Summary Stats Hook (unchanged)
const useSummaryStats = (monthlyData, districtData, categoryData) => {
  return useMemo(() => {
    const totalTrainings = monthlyData.reduce((sum, i) => sum + (i.trainings || 0), 0);
    const totalParticipants = monthlyData.reduce((sum, i) => sum + (i.participants || 0), 0);
    const avgParticipants = totalTrainings > 0 ? Math.round(totalParticipants / totalTrainings) : 0;

    const topDistrict = districtData.length
      ? districtData.reduce((a, b) => (a.value > b.value ? a : b)).name
      : "";

    const topCategory = categoryData.length
      ? categoryData.reduce((a, b) => (a.value > b.value ? a : b)).name
      : "";

    return {
      totalTrainings,
      totalParticipants,
      avgParticipantsPerTraining: avgParticipants,
      topDistrict,
      topCategory
    };
  }, [monthlyData, districtData, categoryData]);
};

// Tooltip (unchanged)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{label}</p>
        {payload.map((item, i) => (
          <p key={i} className={styles.tooltipValue}>
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Stats Card (unchanged)
const StatsCard = ({ title, value, icon, color, subtitle }) => (
  <div className={styles.statsCard} style={{ borderTop: `3px solid ${color}` }}>
    <div className={styles.statsCardHeader}>
      <div className={styles.statsCardIcon} style={{ color }}>{icon}</div>
      <h4>{title}</h4>
    </div>
    <div className={styles.statsCardBody}>
      <p>{value}</p>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </div>
);

// Chart Type Selector (unchanged)
const ChartTypeSelector = ({ selectedChart, setSelectedChart }) => {
  const chartTypes = [
    { id: 'trends', label: 'Trends', icon: <FiActivity /> },
    { id: 'districts', label: 'Districts', icon: <FiMapPin /> },
    { id: 'categories', label: 'Categories', icon: <FiLayers /> },
    { id: 'qualifications', label: 'Qualifications', icon: <FiAward /> },
    { id: 'comparison', label: 'Comparison', icon: <FiBarChart2 /> },
  ];

  return (
    <div className={styles.chartTypeSelector}>
      {chartTypes.map(type => (
        <button
          key={type.id}
          className={`${styles.chartButton} ${selectedChart === type.id ? styles.active : ''}`}
          onClick={() => setSelectedChart(type.id)}
        >
          <span>{type.icon}</span> {type.label}
        </button>
      ))}
    </div>
  );
};

// Filter Component - Modified
const FilterControls = ({ filters, setFilters, onExport, onRefresh, onClose }) => {
  const handleDateChange = (field, value) => {
    setFilters({
      ...filters,
      dateRange: { ...filters.dateRange, [field]: value }
    });
  };

  const toggleCategory = (category) => {
    const updated = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];

    setFilters({ ...filters, categories: updated });
  };

  const toggleDistrict = (district) => {
    const updated = filters.districts.includes(district)
      ? filters.districts.filter(d => d !== district)
      : [...filters.districts, district];

    setFilters({ ...filters, districts: updated });
  };

  const resetFilters = () => {
    setFilters({
      dateRange: { start: "2024-01", end: "2024-12" },
      categories: [],
      districts: []
    });
  };

  return (
    <div className={styles.filterSidebar}>
      <div className={styles.filterHeader}>
        <h3 className={styles.filterTitle}>
          <FiFilter /> Filters
        </h3>
        <button className={styles.filterReset} onClick={resetFilters}>Reset</button>
        {onClose && <button className={styles.filterClose} onClick={onClose}><FiX /></button>}
      </div>

      <div className={styles.filterSection}>
        <h4><FiCalendar /> Date Range</h4>
        <div className={styles.dateInputs}>
          <input 
            type="month" 
            value={filters.dateRange.start}
            className={styles.dateInput}
            onChange={(e) => handleDateChange("start", e.target.value)} 
          />
          <input 
            type="month" 
            value={filters.dateRange.end}
            className={styles.dateInput}
            onChange={(e) => handleDateChange("end", e.target.value)} 
          />
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4><FiLayers /> Categories</h4>
        <div className={styles.filterOptions}>
          {categoryDataDummy.map(cat => (
            <label key={cat.name} className={styles.filterOption}>
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.name)}
                onChange={() => toggleCategory(cat.name)}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterSection}>
        <h4><FiMapPin /> Districts</h4>
        <div className={styles.filterOptions}>
          {districtDataDummy.map(dis => (
            <label key={dis.name} className={styles.filterOption}>
              <input
                type="checkbox"
                checked={filters.districts.includes(dis.name)}
                onChange={() => toggleDistrict(dis.name)}
              />
              {dis.name}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.filterActions}>
        <button className={`${styles.filterButton} ${styles.secondary}`} onClick={onRefresh}>
          <FiRefreshCw /> Refresh
        </button>
        <button className={`${styles.filterButton} ${styles.primary}`} onClick={onExport}>
          <FiDownload /> Export
        </button>
      </div>
    </div>
  );
};

// MAIN COMPONENT - Modified
const TrainingChart = () => {
  const [selectedChart, setSelectedChart] = useState("trends");

  const [filters, setFilters] = useState({
    dateRange: { start: "2024-01", end: "2024-12" },
    categories: [],
    districts: []
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredMonthlyData = useFilteredData(monthlyDataDummy, filters);
  const filteredDistrictData = useFilteredData(districtDataDummy, filters);
  const filteredCategoryData = useFilteredData(categoryDataDummy, filters);
  const filteredQualificationData = useFilteredData(qualificationDataDummy, filters);

  const summaryStats = useSummaryStats(
    filteredMonthlyData,
    filteredDistrictData,
    filteredCategoryData
  );

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  const handleExport = () => {
    let csv = "";

    if (selectedChart === "trends") {
      csv = "Month,Trainings,Participants\n";
      filteredMonthlyData.forEach(r => {
        csv += `${r.month},${r.trainings},${r.participants}\n`;
      });
    }

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `training_${selectedChart}.csv`;
    a.click();
  };

  const getChartTitle = () => {
    switch(selectedChart) {
      case 'trends': return 'Training Trends Over Time';
      case 'districts': return 'Training Distribution by District';
      case 'categories': return 'Training Distribution by Category';
      case 'qualifications': return 'Training Distribution by Qualification';
      case 'comparison': return 'District Training Comparison';
      default: return 'Training Analytics';
    }
  };

  return (
    <div className={styles.chartsContainer}>
      <div className={styles.dashboardHeader}>
        {/* <h1 className={styles.dashboardTitle}>Training Analytics Dashboard</h1> */}
        <div className={styles.dashboardActions}>
          <button className={styles.actionButton} onClick={handleRefresh}>
            <FiRefreshCw /> Refresh
          </button>
          <button className={`${styles.actionButton} ${styles.primary}`} onClick={handleExport}>
            <FiDownload /> Export
          </button>
        </div>
      </div>

      {/* <div className={styles.statsContainer}>
        <StatsCard title="Total Trainings" value={summaryStats.totalTrainings} icon={<FiBookOpen />} color={COLORS.primary} />
        <StatsCard title="Total Participants" value={summaryStats.totalParticipants} icon={<FiUsers />} color={COLORS.secondary} />
        <StatsCard title="Avg Participants" value={summaryStats.avgParticipantsPerTraining} icon={<FiTrendingUp />} color={COLORS.success} />
        <StatsCard title="Top District" value={summaryStats.topDistrict} icon={<FiMapPin />} color={COLORS.info} />
      </div> */}

      <div className={styles.mainContent}>
        <div className={styles.chartSection}>
          <ChartTypeSelector selectedChart={selectedChart} setSelectedChart={setSelectedChart} />

          <div className={styles.chartCardFull}>
            <div className={styles.chartHeader}>
              <h2 className={styles.chartTitle}>{getChartTitle()}</h2>
              <div className={styles.chartActions}>
                <button className={styles.chartAction} onClick={handleRefresh}>
                  <FiRefreshCw />
                </button>
                <button className={styles.chartAction} onClick={handleExport}>
                  <FiDownload />
                </button>
              </div>
            </div>
            
            <div className={styles.chartContent}>
              {isLoading && (
                <div className={styles.loadingOverlay}>
                  <div className={styles.loadingSpinner}></div>
                </div>
              )}
              
              {/* -------- TRENDS CHART -------- */}
              {selectedChart === "trends" && (
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart data={filteredMonthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area type="monotone" dataKey="trainings" stroke={COLORS.primary} fill={COLORS.primary} />
                    <Area type="monotone" dataKey="participants" stroke={COLORS.secondary} fill={COLORS.secondary} />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {/* -------- DISTRICTS -------- */}
              {selectedChart === "districts" && (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={filteredDistrictData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="value" fill={COLORS.primary} />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* -------- CATEGORIES -------- */}
              {selectedChart === "categories" && (
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie data={filteredCategoryData} dataKey="value" outerRadius={130} label>
                      {filteredCategoryData.map((e, i) => (
                        <Cell key={i} fill={COLORS.chartPalette[i % COLORS.chartPalette.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}

              {/* -------- QUALIFICATION -------- */}
              {selectedChart === "qualifications" && (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={filteredQualificationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="value" fill={COLORS.secondary} />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* -------- COMPARISON -------- */}
              {selectedChart === "comparison" && (
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={filteredDistrictData.slice(0,5)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="value" fill={COLORS.primary} yAxisId="left" />
                    <Line type="monotone" dataKey="growth" stroke={COLORS.secondary} yAxisId="right" />
                  </ComposedChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>
        </div>

        <FilterControls
          filters={filters}
          setFilters={setFilters}
          onExport={handleExport}
          onRefresh={handleRefresh}
        />
      </div>

      {/* Mobile Filter Toggle */}
      <button 
        className={styles.mobileFilterToggle} 
        onClick={() => setShowMobileFilters(true)}
      >
        <FiFilter />
      </button>

      {/* Mobile Filter Sidebar */}
      {showMobileFilters && (
        <div className={`${styles.filterSidebar} ${styles.active}`}>
          <FilterControls
            filters={filters}
            setFilters={setFilters}
            onExport={handleExport}
            onRefresh={handleRefresh}
            onClose={() => setShowMobileFilters(false)}
          />
        </div>
      )}
    </div>
  );
};

export default TrainingChart;