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
  ComposedChart,
  ReferenceLine,
  LabelList,
  RadialBarChart,
  RadialBar,
  Treemap,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.customTooltip}>
        <p className={styles.tooltipLabel}>{label}</p>
        {payload.map((item, i) => (
          <p key={i} className={styles.tooltipValue} style={{ color: item.color }}>
            {item.name}: {item.value}
            {item.dataKey === 'growth' && '%'}
            {item.dataKey === 'avgRating' && ' ⭐'}
          </p>
        ))}
        {payload[0]?.payload?.trend !== undefined && (
          <p className={styles.tooltipTrend}>
            Trend: {payload[0].payload.trend > 0 ? '+' : ''}{payload[0].payload.trend}%
          </p>
        )}
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

  // Calculate average for reference line
  const avgTrainings = filteredMonthlyData.reduce((sum, item) => sum + item.trainings, 0) / filteredMonthlyData.length;
  const avgParticipants = filteredMonthlyData.reduce((sum, item) => sum + item.participants, 0) / filteredMonthlyData.length;

  // Prepare data for radial chart
  const radialData = filteredDistrictData.map(item => ({
    name: item.name,
    value: item.value,
    fill: COLORS.chartPalette[filteredDistrictData.indexOf(item) % COLORS.chartPalette.length]
  }));

  // Prepare data for radar chart
  const radarData = filteredCategoryData.map(item => ({
    category: item.name,
    value: item.value,
    fullMark: 40
  }));

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
                  <AreaChart data={filteredMonthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorTrainings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorParticipants" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={COLORS.secondary} stopOpacity={0.8}/>
                        <stop offset="95%" stopColor={COLORS.secondary} stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <ReferenceLine yAxisId="left" y={avgTrainings} stroke={COLORS.primary} strokeDasharray="5 5" label="Avg Trainings" />
                    <ReferenceLine yAxisId="right" y={avgParticipants} stroke={COLORS.secondary} strokeDasharray="5 5" label="Avg Participants" />
                    <Area 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="trainings" 
                      stroke={COLORS.primary} 
                      fillOpacity={1} 
                      fill="url(#colorTrainings)"
                      animationDuration={1000}
                      strokeWidth={2}
                    />
                    <Area 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="participants" 
                      stroke={COLORS.secondary} 
                      fillOpacity={1} 
                      fill="url(#colorParticipants)"
                      animationDuration={1000}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {/* -------- DISTRICTS -------- */}
              {selectedChart === "districts" && (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={filteredDistrictData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      dataKey="value" 
                      fill={COLORS.primary}
                      animationDuration={1000}
                      radius={[8, 8, 0, 0]}
                    >
                      <LabelList dataKey="value" position="top" />
                      {filteredDistrictData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={
                          entry.growth > 10 ? COLORS.success : 
                          entry.growth > 5 ? COLORS.warning : 
                          COLORS.primary
                        } />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* -------- CATEGORIES -------- */}
              {selectedChart === "categories" && (
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={filteredCategoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={800}
                    >
                      {filteredCategoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS.chartPalette[index % COLORS.chartPalette.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}

              {/* -------- QUALIFICATION -------- */}
              {selectedChart === "qualifications" && (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={filteredQualificationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="value" 
                      fill={COLORS.secondary}
                      animationDuration={1000}
                      radius={[8, 8, 0, 0]}
                    >
                      <LabelList dataKey="value" position="top" />
                    </Bar>
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="avgRating" 
                      stroke={COLORS.warning} 
                      strokeWidth={3}
                      dot={{ fill: COLORS.warning, r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}

              {/* -------- COMPARISON -------- */}
              {selectedChart === "comparison" && (
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={filteredDistrictData.slice(0,5)} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      yAxisId="left"
                      dataKey="value" 
                      fill={COLORS.primary}
                      animationDuration={1000}
                      radius={[8, 8, 0, 0]}
                    >
                      <LabelList dataKey="value" position="top" />
                    </Bar>
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="growth" 
                      stroke={COLORS.accent} 
                      strokeWidth={3}
                      dot={{ fill: COLORS.accent, r: 6 }}
                      activeDot={{ r: 8 }}
                    />
                    <ReferenceLine yAxisId="right" y={10} stroke={COLORS.warning} strokeDasharray="5 5" label="Target Growth" />
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