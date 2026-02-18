import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, GeoJSON, useMap } from 'react-leaflet';
import { dashboardService } from '../../services/dashboardService';
import { locationService } from '../../services/locationService';
import { trainingService } from '../../services/trainingService';
import { Users, BookOpen, MapPin, Calendar, Filter, TrendingUp, Table, User, Map as MapIcon, Maximize, Minimize, House, X } from 'lucide-react';
import cgGeoJson from '../../assets/cg.json';

const THEME = {
    gap: { xs: '8px', sm: '12px', md: '16px', lg: '24px', xl: '32px' },
    pad: { s: '2', sm: '12px', md: '16px', lg: '20px', xl: '28px' },
    bgGradient: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)',
    glass: {
        background: '#ffffff',
        border: '1px solid #f3f4f6',
        borderRadius: '16px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease-in-out'
    },
    primary: '#4f46e5',
    secondary: '#db2777',
    success: '#059669',
    warning: '#d97706',
    danger: '#dc2626',
    gradients: {
        primary: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        success: 'linear-gradient(135deg, #0f766e 0%, #0f172a 120%)',
        warning: 'linear-gradient(135deg, #b45309 0%, #1f2937 120%)',
        secondary: 'linear-gradient(135deg, #334155 0%, #111827 100%)',
        cyan: 'linear-gradient(135deg, #0e7490 0%, #0f172a 120%)',
        kpiA: 'linear-gradient(135deg, #7b3f99 0%, #5a2b7a 100%)',
        kpiB: 'linear-gradient(135deg, #9b59b6 0%, #7b3f99 100%)',
        kpiC: 'linear-gradient(135deg, #6a0dad 0%, #4c1d95 100%)',
        kpiD: 'linear-gradient(135deg, #b06ad9 0%, #7b3f99 100%)'
    },
    input: {
        padding: '10px 16px', border: '1px solid #e5e7eb', borderRadius: '8px', fontSize: '0.9rem',
        fontWeight: '500', color: '#1e293b', background: '#ffffff', outline: 'none', cursor: 'pointer',
        transition: 'all 0.2s ease', height: '40px', display: 'flex', alignItems: 'center'
    }
};

const MarketHeroSection = () => {
    const [data, setData] = useState(null);
    const [viewData, setViewData] = useState(null);
    const [locationsData, setLocationsData] = useState([]);
    const [trainingLocations, setTrainingLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('summary');
    const [districts, setDistricts] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [filters, setFilters] = useState({
        district_cd: '', block_cd: '', village: '', start_date: '', end_date: '', subject: '', status: ''
    });

    const activeFilters = JSON.stringify({
        district_cd: filters.district_cd, block_cd: filters.block_cd,
        start_date: filters.start_date, end_date: filters.end_date, status: filters.status
    });

    useEffect(() => { fetchData(); }, [activeFilters]);

    const fetchData = async () => {
        setLoading(true); setError(null);
        try {
            const [summaryData, viewDataResult] = await Promise.all([
                dashboardService.getDashboardData(filters),
                dashboardService.getDashboardViewData(filters)
            ]);
            setData(summaryData); setViewData(viewDataResult);
        } catch (error) { console.error("Dashboard Fetch Error:", error); setError(error.message || "Failed to load dashboard data"); }
        finally { setLoading(false); }
    };

    useEffect(() => {
        const fetchDistricts = async () => { try { const data = await dashboardService.getDistricts(); setDistricts(Array.isArray(data) ? data : []); } catch (error) { console.error('Error loading districts', error); } };
        fetchDistricts();
    }, []);

    useEffect(() => {
        if (!filters.district_cd) { setBlocks([]); return; }
        const fetchBlocks = async () => {
            try {
                if (!filters.district_cd) { setBlocks([]); setFilters((prev) => ({ ...prev, block_cd: '' })); return; }
                const data = await dashboardService.getBlocksByDistrict(filters.district_cd);
                setBlocks(Array.isArray(data) ? data : []);
                setFilters((prev) => ({ ...prev, block_cd: '' }));
            } catch (error) { console.error('Error loading blocks', error); }
        };
        fetchBlocks();
    }, [filters.district_cd]);

    useEffect(() => {
        const fetchMapLocation = async () => { try { const data = await locationService.getAll(); setLocationsData(Array.isArray(data) ? data : []); } catch (error) { console.error("Error fetching locations for map:", error); } };
        fetchMapLocation();
    }, []);

    useEffect(() => {
        const fetchTrainingsForMap = async () => {
            try {
                const trainings = await trainingService.getAll();
                const trainingData = Array.isArray(trainings) ? trainings : trainings?.data || [];
                setTrainingLocations(trainingData);
            } catch (error) { console.error("Error fetching trainings for map:", error); }
        };
        fetchTrainingsForMap();
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value, ...(name === 'district_cd' ? { block_cd: '' } : {}) }));
    };

    if (loading) return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: THEME.bgGradient, color: THEME.primary, fontSize: '1rem', fontWeight: '600' }}>Loading Dashboard Data...</div>;
    if (error) return <div style={{ padding: THEME.pad.xl, color: THEME.danger, textAlign: 'center' }}>Error: {error}</div>;
    if (!data) return <div style={{ padding: THEME.pad.xl, color: '#64748b', textAlign: 'center' }}>No Data Available</div>;

    const { summary } = data;

    const selectSx = {
        minWidth: 150, height: '40px', background: '#fff', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 500,
        '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #e5e7eb', borderRadius: '8px' },
        '&:hover .MuiOutlinedInput-notchedOutline': { border: '1px solid #cbd5e1 !important' },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': { border: `1px solid ${THEME.primary} !important` },
        '& .MuiSelect-select': { padding: '10px 14px', display: 'flex', alignItems: 'center', color: '#1e293b' }
    };

    return (
        <div style={{ padding: 10, display: 'flex', flexDirection: 'column', gap: THEME.gap.sm, minHeight: '100vh', background: THEME.bgGradient, overflowX: "hidden" }}>
            <Box sx={{ textAlign: 'center', mb: 2, opacity: 0, animation: 'fadeIn 0.8s ease-out forwards' }}>
                <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>
                <Typography variant="h2" component="h1" fontWeight="700" color="text.primary" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                    Marketplace Literacy <Box component="span" sx={{ background: "linear-gradient(90deg, #D4AF37 0%, #2E8B57 50%, #1976d2 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Chhattisgarh</Box>
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: { xs: '1rem', md: '1.1rem' }, fontWeight: 400 }}>
                    Empowering women through financial education and entrepreneurship skills
                </Typography>
            </Box>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: THEME.gap.md }}>
                <div><h1 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>Dashboard Overview</h1></div>
                <div style={{ display: 'flex', gap: THEME.gap.xs, padding: '4px', background: '#ffffff', borderRadius: '10px', border: '1px solid #f3f4f6' }}>
                    <button onClick={() => setActiveTab('summary')} style={{ ...getTabStyle(activeTab === 'summary', THEME.gradients.primary) }}><TrendingUp size={18} /> <span>Summary</span></button>
                    <button onClick={() => setActiveTab('detailed')} style={{ ...getTabStyle(activeTab === 'detailed', THEME.gradients.primary) }}><Table size={18} /> <span>Detailed View</span></button>
                </div>
            </div>

            {/* ===== FILTERS ===== */}
            <div style={{ ...THEME.glass, padding: `${THEME.pad.md} ${THEME.pad.lg}`, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: THEME.gap.lg }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: THEME.gap.xs, paddingRight: THEME.pad.md, borderRight: '1px solid #f3f4f6', color: THEME.primary, fontWeight: '700', letterSpacing: '0.05em', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                    <Filter size={16} /> Filters
                </div>
                <Select name="district_cd" value={filters.district_cd} onChange={handleFilterChange} displayEmpty size="small" sx={selectSx} MenuProps={{ PaperProps: { sx: { maxHeight: 300, mt: 0.5, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } } }}>
                    <MenuItem value="">All Districts</MenuItem>
                    {districts.map((d) => (<MenuItem key={d.district_cd} value={d.district_cd}>{d.district_name}</MenuItem>))}
                </Select>
                <Select name="block_cd" value={filters.block_cd} onChange={handleFilterChange} displayEmpty size="small" sx={selectSx} MenuProps={{ PaperProps: { sx: { maxHeight: 300, mt: 0.5, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } } }}>
                    <MenuItem value="">All Blocks</MenuItem>
                    {blocks.map((b) => (<MenuItem key={b.block_cd} value={b.block_cd}>{b.block_name}</MenuItem>))}
                </Select>
                <div style={{ display: 'flex', alignItems: 'center', gap: THEME.gap.xs }}>
                    <Calendar size={16} style={{ color: '#94a3b8' }} />
                    <input type="date" name="start_date" style={THEME.input} onChange={handleFilterChange} value={filters.start_date} />
                    <span style={{ color: '#94a3b8', fontWeight: '600', fontSize: '0.85rem', margin: `0 ${THEME.gap.xs}` }}>to</span>
                    <input type="date" name="end_date" style={THEME.input} onChange={handleFilterChange} value={filters.end_date} />
                </div>
                <Select name="status" value={filters.status} onChange={handleFilterChange} displayEmpty size="small" sx={selectSx} MenuProps={{ PaperProps: { sx: { maxHeight: 300, mt: 0.5, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' } } }}>
                    <MenuItem value="">All Status</MenuItem>
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="ongoing">Ongoing</MenuItem>
                    <MenuItem value="scheduled">Scheduled</MenuItem>
                    <MenuItem value="cancelled">Cancelled</MenuItem>
                </Select>
            </div>

            {activeTab === 'summary' && <SummaryTab summary={data} viewData={viewData} locationsData={locationsData} trainingLocations={trainingLocations} />}
            {activeTab === 'detailed' && <DetailedTab viewData={viewData} />}
        </div>
    );
};

const getTabStyle = (isActive, gradient) => ({
    display: 'flex', alignItems: 'center', gap: THEME.gap.xs, padding: `8px ${THEME.pad.md}`, border: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.2s ease-in-out', background: isActive ? gradient : 'transparent', color: isActive ? 'white' : '#64748b', letterSpacing: '0.01em'
});

const MapResizer = ({ trigger }) => {
    const map = useMap();
    useEffect(() => {
        if (!map) return;
        const timeout = setTimeout(() => { if (map._container) map.invalidateSize(); }, 400);
        return () => clearTimeout(timeout);
    }, [trigger, map]);
    return null;
};

// ===== UPDATED TRAINING LOCATION MAP COMPONENT =====
const TraineeLocationMap = ({ trainingLocations }) => {
    const [geoJsonData, setGeoJsonData] = useState(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedTraining, setSelectedTraining] = useState(null); // State for modal

    const MIN_LAT = 17.5; const MAX_LAT = 24.0; const MIN_LNG = 79.5; const MAX_LNG = 85.0;
    const isWithinCG = (lat, lng) => lat >= MIN_LAT && lat <= MAX_LAT && lng >= MIN_LNG && lng <= MAX_LNG;

    const validTrainingLocations = (trainingLocations || []).filter(training => {
        const lat = Number(training?.location_details?.latitude);
        const lng = Number(training?.location_details?.longitude);
        return !isNaN(lat) && !isNaN(lng) && isWithinCG(lat, lng);
    });

    useEffect(() => { setGeoJsonData(cgGeoJson); }, []);

    const createCustomIcon = (color = '#9647bb') =>
        L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="position: relative; width: 26px; height: 36px;">
              <div style="position: absolute; top: 0; left: 50%; width: 24px; height: 24px; background: ${color}; border-radius: 50% 50% 50% 0; transform: translateX(-50%) rotate(-45deg); box-shadow: 0 4px 12px ${color}4D; border: 2px solid rgba(255,255,255,0.9);"></div>
              <div style="position: absolute; top: 7px; left: 50%; width: 10px; height: 10px; background: #fff; border-radius: 50%; transform: translateX(-50%);"></div>
            </div>`,
            iconSize: [26, 36], iconAnchor: [13, 36]
        });

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed': return '#059669'; case 'ongoing': return '#d97706'; case 'scheduled': return '#4f46e5'; case 'cancelled': return '#dc2626'; default: return '#9647bb';
        }
    };

    const getStatusStyle = (status) => {
        const s = status?.toLowerCase();
        switch (s) {
            case 'completed': return { background: '#d1fae5', color: '#065f46' };
            case 'ongoing': return { background: '#fef3c7', color: '#92400e' };
            case 'scheduled': return { background: '#e0e7ff', color: '#3730a3' };
            case 'cancelled': return { background: '#fee2e2', color: '#991b1b' };
            default: return { background: '#f1f5f9', color: '#475569' };
        }
    };

    const containerStyle = {
        height: '100%', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease-in-out', position: 'relative',
        background: 'linear-gradient(to bottom right, #f8fafc, #ffffff)', borderRadius: isFullScreen ? '0' : '16px',
        border: isFullScreen ? 'none' : '1px solid rgba(226, 232, 240, 0.8)', boxShadow: isFullScreen ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.05)',
        padding: isFullScreen ? 0 : THEME.pad.lg, overflow: 'hidden', boxSizing: 'border-box',
        ...(isFullScreen ? { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, margin: 0 } : {})
    };

    return (
        <div style={containerStyle}>
            {/* Animation Styles */}
            <style>{`
                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            `}</style>

            {!isFullScreen && (
                <>
                    <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(to right, #e2e8f0, #f1f5f9, #e2e8f0)', borderTopLeftRadius: '16px', borderTopRightRadius: '16px', zIndex: 1 }}></div>
                    <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', height: '3px', background: 'linear-gradient(to right, #e2e8f0, #f1f5f9, #e2e8f0)', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px', zIndex: 1 }}></div>
                </>
            )}

            <div style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000, background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(8px)', padding: '10px 16px', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', gap: '8px', pointerEvents: 'auto' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#9647bb', border: '2px solid white' }}></div>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>Training Locations ({validTrainingLocations.length})</div>
            </div>

            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 1000, pointerEvents: 'auto' }}>
                <button onClick={() => setIsFullScreen(!isFullScreen)} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px', cursor: 'pointer', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px' }}>
                    {isFullScreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>
            </div>

            <MapContainer style={{ width: '100%', height: '100%' }} zoomControl={false}>
                <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                <MapBoundsAdjuster geoJsonData={geoJsonData} trigger={isFullScreen} />
                <MapResizer trigger={isFullScreen} />
                {geoJsonData && <GeoJSON data={geoJsonData} style={{ color: THEME.primary, weight: 2, fillOpacity: 0.05 }} />}

                {validTrainingLocations.map((training, i) => {
                    const lat = Number(training.location_details?.latitude);
                    const lng = Number(training.location_details?.longitude);
                    const statusColor = getStatusColor(training.status);
                    
                    return (
                        <Marker 
                            key={`training-${training.id || i}`} 
                            position={[lat, lng]} 
                            icon={createCustomIcon(statusColor)}
                            eventHandlers={{
                                click: () => {
                                    setSelectedTraining(training);
                                }
                            }}
                        />
                    );
                })}
            </MapContainer>

            {/* MODAL OVERLAY - Centered Profile Card */}
            {selectedTraining && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(15, 23, 42, 0.4)', // Lighter overlay color
                    backdropFilter: 'blur(5px)', // DECREASED BLUR
                    WebkitBackdropFilter: 'blur(5px)', // DECREASED BLUR
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10000, // Higher than map fullscreen
                    animation: 'fadeIn 0.3s ease-out'
                }} onClick={() => setSelectedTraining(null)}>
                    
                    <div style={{
                        background: '#ffffff',
                        borderRadius: '24px',
                        width: '100%',
                        maxWidth: '380px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
                        position: 'relative',
                        overflow: 'hidden',
                        animation: 'scaleIn 0.3s ease-out'
                    }} onClick={(e) => e.stopPropagation()}>
                        
                        {/* Close Button */}
                        <button 
                            onClick={() => setSelectedTraining(null)}
                            style={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                background: 'rgba(255,255,255,0.9)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '32px',
                                height: '32px',
                                cursor: 'pointer',
                                zIndex: 10,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                                transition: 'transform 0.2s'
                            }}
                        >
                            <X size={18} color="#334155" />
                        </button>

                        {/* Profile Content */}
                        <div style={{ padding: '24px', textAlign: 'center' }}>
                             {/* Image */}
                             <div style={{
                                 width: '120px',
                                 height: '120px',
                                 borderRadius: '50%',
                                 border: '4px solid white',
                                 boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                                 margin: '0 auto 20px',
                                 overflow: 'hidden',
                                 background: '#f1f5f9'
                             }}>
                                 <img 
                                    src={selectedTraining.trainer_profile_image || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedTraining.trainer_name || 'Trainer')}&background=7b3f99&color=fff&size=200`}
                                    alt="Profile"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                 />
                             </div>

                             <h3 style={{ margin: 0, color: '#1e293b', fontSize: '1.3rem', fontWeight: '700' }}>
                                 {selectedTraining.trainer_name || 'Unknown Trainer'}
                             </h3>
                             <span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: '500' }}>
                                 Training Instructor
                             </span>

                             <div style={{ marginTop: '24px', textAlign: 'left' }}>
                                {/* Subject */}
                                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', marginBottom: '12px' }}>
                                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '4px' }}>
                                        Subject
                                    </div>
                                    <div style={{ fontSize: '1rem', fontWeight: '600', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <BookOpen size={16} color="#9647bb" />
                                        {selectedTraining.subject_name || 'N/A'}
                                    </div>
                                </div>

                                {/* Location */}
                                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '14px', marginBottom: '12px' }}>
                                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '6px' }}>
                                        Location
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'start', gap: '8px' }}>
                                        <MapPin size={16} color="#9647bb" style={{ marginTop: '2px' }} />
                                        <div>
                                            <div style={{ fontWeight: '600', color: '#334155', fontSize: '0.95rem' }}>
                                                {selectedTraining.location_details?.village || 'N/A'}
                                            </div>
                                            <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                                                {[selectedTraining.location_details?.block, selectedTraining.location_details?.district].filter(Boolean).join(', ')}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Status & Participants */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                     <span style={{ ...getStatusStyle(selectedTraining.status), padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase' }}>
                                        {selectedTraining.status || 'Unknown'}
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#475569', fontSize: '0.85rem', fontWeight: '500' }}>
                                        <Users size={16} />
                                        <span>{selectedTraining.total_participants || 0} Participants</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const MapBoundsAdjuster = ({ geoJsonData, trigger }) => {
    const map = useMap();
    useEffect(() => {
        if (!map || !geoJsonData) return; if (!map._container) return;
        const layer = L.geoJSON(geoJsonData); const bounds = layer.getBounds(); if (!bounds.isValid()) return;
        const timeout = setTimeout(() => { if (map._container) { map.invalidateSize(); map.fitBounds(bounds, { paddingTopLeft: [20, 40], paddingBottomRight: [160, 40], maxZoom: 8 }); } }, 400);
        return () => clearTimeout(timeout);
    }, [geoJsonData, trigger, map]);
    return null;
};

const SummaryTab = ({ summary, viewData, locationsData, trainingLocations }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: THEME.gap.md }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: THEME.gap.md }}>
            <StatCard title="Total Trainings" value={summary?.total_trainings || 0} icon={BookOpen} gradient={THEME.gradients.kpiA} />
            <StatCard title="Total Trainers" value={summary?.total_trainers || 0} icon={User} gradient={THEME.gradients.kpiB} />
            <StatCard title="Total Participants" value={summary?.total_participants || 0} icon={Users} gradient={THEME.gradients.kpiC} />
            <StatCard title="Total Locations" value={summary?.total_locations || 0} icon={House} gradient={THEME.gradients.kpiD} />
        </div>
        <div style={{ width: '100%', height: '460px' }}>
            <TraineeLocationMap trainingLocations={trainingLocations} />
        </div>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" size="large" href="https://www.ibitf.co.in/ml/login" sx={{ borderRadius: 50, px: 4, background: "linear-gradient(90deg, #D4AF37 0%, #2E8B57 100%)", textTransform: "none", fontSize: "1rem", fontWeight: 600, boxShadow: "0 4px 12px rgba(46, 139, 87, 0.3)", "&:hover": { background: "linear-gradient(90deg, #C59237 0%, #257849 100%)", transform: "translateY(-2px)", boxShadow: "0 6px 16px rgba(46, 139, 87, 0.4)" }, transition: "all 0.3s ease" }}>
                Explore More
            </Button>
        </Box>
    </div>
);

const DetailedTab = ({ viewData }) => (
    <div style={{ ...THEME.glass, padding: THEME.pad.xl, minHeight: '500px' }}>
        <div style={{ marginBottom: THEME.pad.lg, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <h2 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: THEME.gap.sm }}><Table size={24} color={THEME.primary} /> Training Directory</h2>
                <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Overview of all training sessions</p>
            </div>
            <div style={{ background: THEME.gradients.primary, padding: `6px ${THEME.pad.md}`, borderRadius: '8px', color: 'white', fontWeight: '700', fontSize: '0.85rem' }}>Total Records: {viewData?.data?.length || 0}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: THEME.gap.sm }}>
            {viewData && viewData.data && viewData.data.length > 0 ? (
                viewData.data.map((row, i) => (
                    <div key={row.training_id || row.id || i} style={{ display: 'grid', gridTemplateColumns: '80px 2.5fr 1.5fr 100px 120px 160px', gap: THEME.gap.md, alignItems: 'center', padding: `${THEME.pad.md} ${THEME.pad.lg}`, background: '#ffffff', borderRadius: '12px', border: '1px solid #f3f4f6', transition: 'all 0.15s ease-in-out', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = THEME.primary; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#f3f4f6'; e.currentTarget.style.boxShadow = 'none'; }}>
                        <div><span style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: THEME.primary, fontWeight: '700', background: '#eff6ff', padding: `4px ${THEME.pad.sm}`, borderRadius: '6px', display: 'inline-block' }}>#{row.training_id || row.id}</span></div>
                        <div><div style={{ fontWeight: '700', color: '#1e293b', marginBottom: '2px', fontSize: '0.95rem' }}>{row.subject_name}</div><div style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: THEME.gap.xs, fontWeight: '500' }}><User size={13} /> {row.trainer_name}</div></div>
                        <div><div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: '600' }}>{row.village || row.location_details?.village || '-'}</div><div style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '2px', fontWeight: '500' }}>{row.district || row.location_details?.district}</div></div>
                        <div><div style={{ display: 'flex', alignItems: 'center', gap: THEME.gap.sm }}><div style={{ width: '40px', height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}><div style={{ width: `${(row.total_participants / row.max_participants) * 100}%`, height: '100%', background: THEME.success, borderRadius: '2px' }}></div></div><span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#0f172a' }}>{row.total_participants}</span></div></div>
                        <div><span style={{ padding: `4px ${THEME.pad.sm}`, borderRadius: '6px', fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', display: 'inline-block', ...(row.status === 'completed' ? { background: '#d1fae5', color: '#065f46' } : row.status === 'ongoing' ? { background: '#fef3c7', color: '#92400e' } : row.status === 'scheduled' ? { background: '#e0e7ff', color: '#3730a3' } : { background: '#fee2e2', color: '#991b1b' }) }}>{row.status}</span></div>
                        <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '500' }}>{row.start_date ? new Date(row.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '-'}</div>
                    </div>
                ))
            ) : (<div style={{ padding: THEME.pad.xl, textAlign: 'center', background: '#ffffff', borderRadius: '12px', border: '1px dashed #f3f4f6', color: '#94a3b8', fontSize: '0.95rem' }}>No Training Data Available</div>)}
        </div>
    </div>
);

const StatCard = ({ title, value, icon: Icon, gradient }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '200px', padding: '16px 18px', borderRadius: '14px', position: 'relative', backgroundImage: `${gradient}`, backgroundSize: 'cover', border: '1px solid rgba(255, 255, 255, 0.15)', boxShadow: `0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`, transition: 'transform 220ms cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 220ms ease', cursor: 'default', overflow: 'hidden', userSelect: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 10px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)`; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)`; }}>
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))', pointerEvents: 'none' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1, zIndex: 1 }}>
                <div style={{ fontSize: '0.7rem', fontWeight: '600', color: 'rgba(255, 255, 255, 0.85)', letterSpacing: '0.08em', textTransform: 'uppercase', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>{title}</div>
                <div style={{ fontSize: '1.75rem', fontWeight: '800', lineHeight: '1', letterSpacing: '-0.02em', color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,0.15)' }}>{value}</div>
            </div>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 8px rgba(0,0,0,0.1)', zIndex: 1 }}><Icon size={20} color="#ffffff" strokeWidth={2.5} /></div>
        </div>
    );
};

export default MarketHeroSection;

// import { Box, Container, Typography, Grid, Paper, useTheme, Button } from "@mui/material";
// import { Users, MapPin, Building2, TrendingUp, Award, Globe } from "lucide-react";
// import MarketStatsCard from "./MarketStatsCard";
// import MarketPartnerLogos from "./MarketPartnerLogos";
// import marketGif from "../../assets/marketPlace/market_gif.mp4";
// import villageImg from "../../assets/workshop/3.png";
// import train_01 from "../../assets/marketPlace/train_01.jpeg";
// import train_02 from "../../assets/marketPlace/train_02.jpeg";
// import { useState } from "react";

// const MarketHeroSection = () => {
//     const theme = useTheme();
//     const [activeCard, setActiveCard] = useState(null);
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <Box component="section" sx={{ py: { xs: 2, md: 4 }, p: 2, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
//             {/* Background decoration */}
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: -100,
//                     right: -100,
//                     width: 400,
//                     height: 400,
//                     borderRadius: '50%',
//                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(46, 139, 87, 0.1) 50%, rgba(25, 118, 210, 0.1) 100%)',
//                     zIndex: 0,
//                 }}
//             />
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     bottom: -150,
//                     left: -150,
//                     width: 500,
//                     height: 500,
//                     borderRadius: '50%',
//                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(46, 139, 87, 0.05) 50%, rgba(25, 118, 210, 0.05) 100%)',
//                     zIndex: 0,
//                 }}
//             />

//             <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
//                 <Box sx={{ textAlign: 'center', mb: 6, opacity: 0, animation: 'fadeIn 0.8s ease-out forwards' }}>
//                     <style>
//                         {`
//               @keyframes fadeIn {
//                 from { opacity: 0; transform: translateY(20px); }
//                 to { opacity: 1; transform: translateY(0); }
//               }
//             `}
//                     </style>
//                     <Typography
//                         variant="h2"
//                         component="h1"
//                         fontWeight="700"
//                         color="text.primary"
//                         gutterBottom
//                         sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
//                     >
//                         Marketplace Literacy <Box component="span" sx={{
//                             background: "linear-gradient(90deg, #D4AF37 0%, #2E8B57 50%, #1976d2 100%)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent"
//                         }}>Chhattisgarh</Box>
//                     </Typography>
//                     <Typography
//                         variant="h6"
//                         color="text.secondary"
//                         sx={{
//                             maxWidth: 700,
//                             mx: 'auto',
//                             fontSize: { xs: '1rem', md: '1.1rem' },
//                             fontWeight: 400
//                         }}
//                     >
//                         Empowering women through financial education and entrepreneurship skills
//                     </Typography>
//                 </Box>

//                 {/* <Grid container spacing={4} alignItems="stretch">
//                     <Grid item xs={12} lg={5}>
//                         {/* Enhanced Stats Cards Container */}
//                 {/* <Box
//                             sx={{
//                                 position: 'relative',
//                                 height: '100%',
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 gap: 3
//                             }}
//                             onMouseEnter={() => setIsHovered(true)}
//                             onMouseLeave={() => setIsHovered(false)}
//                         > */}
//                 {/* Decorative background for the cards container */}
//                 {/* <Box
//                                 sx={{
//                                     position: 'absolute',
//                                     top: 0,
//                                     left: 0,
//                                     width: '100%',
//                                     height: '100%',
//                                     borderRadius: 3,
//                                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(46, 139, 87, 0.05) 50%, rgba(25, 118, 210, 0.05) 100%)',
//                                     transform: isHovered ? 'scale(1.02)' : 'scale(1)',
//                                     transition: 'transform 0.5s ease',
//                                     zIndex: 0
//                                 }}
//                             /> */}

//                 {/* Connection lines between cards */}
//                 {/* <Box
//                                 sx={{
//                                     position: 'absolute',
//                                     top: '33%',
//                                     left: '50%',
//                                     transform: 'translateX(-50%)',
//                                     width: '2px',
//                                     height: '34%',
//                                     background: `linear-gradient(to bottom,
//                                         ${theme.palette.primary.main} 0%,
//                                         ${theme.palette.secondary.main} 50%,
//                                         ${theme.palette.info.main} 100%)`,
//                                     opacity: isHovered ? 0.7 : 0.3,
//                                     transition: 'opacity 0.5s ease',
//                                     zIndex: 0
//                                 }}
//                             />

//                             <Box
//                                 sx={{
//                                     position: "relative",
//                                     zIndex: 1,
//                                     height: "100%",
//                                     display: "flex",
//                                     flexDirection: "column",
//                                     gap: 2,
//                                 }}
//                             >
//                                 <MarketStatsCard
//                                     title="Total Trainings"
//                                     count={450}
//                                     delay={0}
//                                     icon={<Award size={32} strokeWidth={1.5} />}
//                                     isActive={activeCard === 0}
//                                     onMouseEnter={() => setActiveCard(0)}
//                                     onMouseLeave={() => setActiveCard(null)}
//                                 />

//                                 <MarketStatsCard
//                                     title="Total Trainers"
//                                     count={150}
//                                     delay={100}
//                                     icon={<Users size={32} strokeWidth={1.5} />}
//                                     isActive={activeCard === 1}
//                                     onMouseEnter={() => setActiveCard(1)}
//                                     onMouseLeave={() => setActiveCard(null)}
//                                 />

//                                 <MarketStatsCard
//                                     title="Total Participants"
//                                     count={15500}
//                                     delay={200}
//                                     icon={<Globe size={32} strokeWidth={1.5} />}
//                                     isActive={activeCard === 2}
//                                     onMouseEnter={() => setActiveCard(2)}
//                                     onMouseLeave={() => setActiveCard(null)}
//                                 />

//                                 <MarketStatsCard
//                                     title="Total Districts"
//                                     count={12}
//                                     delay={300}
//                                     icon={<Building2 size={32} strokeWidth={1.5} />}
//                                     isActive={activeCard === 3}
//                                     onMouseEnter={() => setActiveCard(3)}
//                                     onMouseLeave={() => setActiveCard(null)}
//                                 />

//                                 <MarketStatsCard
//                                     title="Total Blocks"
//                                     count={35}
//                                     delay={400}
//                                     icon={<MapPin size={32} strokeWidth={1.5} />}
//                                     isActive={activeCard === 4}
//                                     onMouseEnter={() => setActiveCard(4)}
//                                     onMouseLeave={() => setActiveCard(null)}
//                                 />

// <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//     <Button
//         variant="contained"
//         size="large"
//         href="https://www.ibitf.co.in/ml/login"
//         sx={{
//             borderRadius: 50,
//             px: 4,
//             background: "linear-gradient(90deg, #D4AF37 0%, #2E8B57 100%)",
//             textTransform: "none",
//             fontSize: "1rem",
//             fontWeight: 600,
//             boxShadow: "0 4px 12px rgba(46, 139, 87, 0.3)",
//             "&:hover": {
//                 background: "linear-gradient(90deg, #C59237 0%, #257849 100%)",
//                 transform: "translateY(-2px)",
//                 boxShadow: "0 6px 16px rgba(46, 139, 87, 0.4)",
//             },
//             transition: "all 0.3s ease",
//         }}
//     >
//         Explore More
//     </Button>
// </Box>
//                             </Box> */}


//                 {/* Floating action button */}
//                 {/* <Box
//                                 sx={{
//                                     position: 'absolute',
//                                     bottom: -20,
//                                     right: -20,
//                                     width: 60,
//                                     height: 60,
//                                     borderRadius: '50%',
//                                     background: 'linear-gradient(135deg, #D4AF37 0%, #2E8B57 50%, #1976d2 100%)',
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     justifyContent: 'center',
//                                     boxShadow: '0 10px 20px -5px rgba(0,0,0,0.2)',
//                                     transform: isHovered ? 'scale(1.1) rotate(15deg)' : 'scale(1) rotate(0)',
//                                     transition: 'transform 0.3s ease',
//                                     cursor: 'pointer',
//                                     zIndex: 2
//                                 }}
//                             >
//                                 <TrendingUp size={28} color="white" />
//                             </Box> */}
//                 {/* </Box>
//                     </Grid> */}

//                 {/* Right Side - Images */}
//                 {/* <Grid item xs={12} lg={7}>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}> */}
//                 {/* <MarketPartnerLogos /> */}

//                 {/* Top Image (Video) */}
//                 {/* <Paper
//                                 elevation={0}
//                                 sx={{
//                                     height: 300,
//                                     borderRadius: 4,
//                                     overflow: 'hidden',
//                                     boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
//                                     animation: 'fadeIn 0.8s ease-out forwards 0.4s',
//                                     opacity: 0,
//                                     position: 'relative',
//                                     '&:hover': {
//                                         '&:after': {
//                                             opacity: 1,
//                                         },
//                                         transform: 'scale(1.02)',
//                                         transition: 'transform 0.3s ease',
//                                     },
//                                     '&:after': {
//                                         content: '""',
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                         width: '100%',
//                                         height: '100%',
//                                         background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
//                                         opacity: 0,
//                                         transition: 'opacity 0.3s ease',
//                                     }
//                                 }}
//                             >
//                                 <video
//                                     src={marketGif}
//                                     autoPlay
//                                     loop
//                                     muted
//                                     playsInline
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                 />
//                                 <img
//                                     src={train_01}
//                                     alt="Rural village community"
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                 />
//                             </Paper> */}

//                 {/* Bottom Image (Village) */}
//                 {/* <Paper
//                                 elevation={0}
//                                 sx={{
//                                     height: 300,
//                                     borderRadius: 4,
//                                     overflow: 'hidden',
//                                     boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
//                                     animation: 'fadeIn 0.8s ease-out forwards 0.6s',
//                                     opacity: 0,
//                                     position: 'relative',
//                                     '&:hover': {
//                                         '&:after': {
//                                             opacity: 1,
//                                         },
//                                         transform: 'scale(1.02)',
//                                         transition: 'transform 0.3s ease',
//                                     },
//                                     '&:after': {
//                                         content: '""',
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                         width: '100%',
//                                         height: '100%',
//                                         background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
//                                         opacity: 0,
//                                         transition: 'opacity 0.3s ease',
//                                     }
//                                 }}
//                             >
//                                 <img
//                                     src={train_02}
//                                     alt="Rural village community"
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                 />
//                             </Paper> */}
//                 {/* </Box>
//                     </Grid>
//                 </Grid> */}
//             </Container>
//         </Box>
//     );
// };

// export default MarketHeroSection;


// // import { Box, Container, Typography, Grid, Paper } from "@mui/material";
// // import { Users, MapPin, Building2 } from "lucide-react";
// // import MarketStatsCard from "./MarketStatsCard";
// // import MarketPartnerLogos from "./MarketPartnerLogos";
// // import marketGif from "../../assets/marketPlace/market_gif.mp4";
// // import villageImg from "../../assets/workshop/3.png";

// // const MarketHeroSection = () => {
// //     return (
// //         <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
// //             {/* Background decoration */}
// //             <Box
// //                 sx={{
// //                     position: 'absolute',
// //                     top: -100,
// //                     right: -100,
// //                     width: 400,
// //                     height: 400,
// //                     borderRadius: '50%',
// //                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(46, 139, 87, 0.1) 50%, rgba(25, 118, 210, 0.1) 100%)',
// //                     zIndex: 0,
// //                 }}
// //             />
// //             <Box
// //                 sx={{
// //                     position: 'absolute',
// //                     bottom: -150,
// //                     left: -150,
// //                     width: 500,
// //                     height: 500,
// //                     borderRadius: '50%',
// //                     background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(46, 139, 87, 0.05) 50%, rgba(25, 118, 210, 0.05) 100%)',
// //                     zIndex: 0,
// //                 }}
// //             />

// //             <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
// //                 <Box sx={{ textAlign: 'center', mb: 6, opacity: 0, animation: 'fadeIn 0.8s ease-out forwards' }}>
// //                     <style>
// //                         {`
// //               @keyframes fadeIn {
// //                 from { opacity: 0; transform: translateY(20px); }
// //                 to { opacity: 1; transform: translateY(0); }
// //               }
// //             `}
// //                     </style>
// //                     <Typography
// //                         variant="h2"
// //                         component="h1"
// //                         fontWeight="700"
// //                         color="text.primary"
// //                         gutterBottom
// //                         sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
// //                     >
// //                         Marketplace Literacy <Box component="span" sx={{
// //                             background: "linear-gradient(90deg, #D4AF37 0%, #2E8B57 50%, #1976d2 100%)",
// //                             WebkitBackgroundClip: "text",
// //                             WebkitTextFillColor: "transparent"
// //                         }}>Chhattisgarh</Box>
// //                     </Typography>
// //                     <Typography
// //                         variant="h6"
// //                         color="text.secondary"
// //                         sx={{
// //                             maxWidth: 700,
// //                             mx: 'auto',
// //                             fontSize: { xs: '1rem', md: '1.1rem' },
// //                             fontWeight: 400
// //                         }}
// //                     >
// //                         Empowering women through financial education and entrepreneurship skills
// //                     </Typography>
// //                 </Box>

// //                 <Grid container spacing={4} alignItems="stretch">
// //                     <Grid item xs={12} lg={5}>
// //                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
// //                             <MarketStatsCard
// //                                 title="Women Trained"
// //                                 count={2500}
// //                                 delay={0}
// //                                 icon={<Users size={32} strokeWidth={1.5} />}
// //                             />
// //                             <MarketStatsCard
// //                                 title="Confidence Villages"
// //                                 count={85}
// //                                 delay={200}
// //                                 icon={<MapPin size={32} strokeWidth={1.5} />}
// //                             />
// //                             <MarketStatsCard
// //                                 title="Districts Covered"
// //                                 count={12}
// //                                 delay={400}
// //                                 icon={<Building2 size={32} strokeWidth={1.5} />}
// //                             />
// //                         </Box>
// //                     </Grid>

// //                     {/* Right Side - Images */}
// //                     <Grid item xs={12} lg={7}>
// //                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
// //                             <MarketPartnerLogos />

// //                             {/* Top Image (Video) */}
// //                             <Paper
// //                                 elevation={0}
// //                                 sx={{
// //                                     height: 300,
// //                                     borderRadius: 4,
// //                                     overflow: 'hidden',
// //                                     boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
// //                                     animation: 'fadeIn 0.8s ease-out forwards 0.4s',
// //                                     opacity: 0,
// //                                     position: 'relative',
// //                                     '&:hover': {
// //                                         '&:after': {
// //                                             opacity: 1,
// //                                         }
// //                                     },
// //                                     '&:after': {
// //                                         content: '""',
// //                                         position: 'absolute',
// //                                         top: 0,
// //                                         left: 0,
// //                                         width: '100%',
// //                                         height: '100%',
// //                                         background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
// //                                         opacity: 0,
// //                                         transition: 'opacity 0.3s ease',
// //                                     }
// //                                 }}
// //                             >
// //                                 <video
// //                                     src={marketGif}
// //                                     autoPlay
// //                                     loop
// //                                     muted
// //                                     playsInline
// //                                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
// //                                 />
// //                             </Paper>

// //                             {/* Bottom Image (Village) */}
// //                             <Paper
// //                                 elevation={0}
// //                                 sx={{
// //                                     height: 300,
// //                                     borderRadius: 4,
// //                                     overflow: 'hidden',
// //                                     boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
// //                                     animation: 'fadeIn 0.8s ease-out forwards 0.6s',
// //                                     opacity: 0,
// //                                     position: 'relative',
// //                                     '&:hover': {
// //                                         '&:after': {
// //                                             opacity: 1,
// //                                         }
// //                                     },
// //                                     '&:after': {
// //                                         content: '""',
// //                                         position: 'absolute',
// //                                         top: 0,
// //                                         left: 0,
// //                                         width: '100%',
// //                                         height: '100%',
// //                                         background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
// //                                         opacity: 0,
// //                                         transition: 'opacity 0.3s ease',
// //                                     }
// //                                 }}
// //                             >
// //                                 <img
// //                                     src={villageImg}
// //                                     alt="Rural village community"
// //                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
// //                                 />
// //                             </Paper>
// //                         </Box>
// //                     </Grid>
// //                 </Grid>
// //             </Container>
// //         </Box>
// //     );
// // };

// // export default MarketHeroSection;

