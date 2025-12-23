import { Box, Container, Typography, Grid, Paper, useTheme, Button } from "@mui/material";
import { Users, MapPin, Building2, TrendingUp, Award, Globe } from "lucide-react";
import MarketStatsCard from "./MarketStatsCard";
import MarketPartnerLogos from "./MarketPartnerLogos";
import marketGif from "../../assets/marketPlace/market_gif.mp4";
import villageImg from "../../assets/workshop/3.png";
import train_01 from "../../assets/marketPlace/train_01.jpeg";
import train_02 from "../../assets/marketPlace/train_02.jpeg";
import { useState } from "react";

const MarketHeroSection = () => {
    const theme = useTheme();
    const [activeCard, setActiveCard] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box component="section" sx={{ py: { xs: 2, md: 4 }, p: 2, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
            {/* Background decoration */}
            <Box
                sx={{
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    width: 400,
                    height: 400,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(46, 139, 87, 0.1) 50%, rgba(25, 118, 210, 0.1) 100%)',
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -150,
                    left: -150,
                    width: 500,
                    height: 500,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(46, 139, 87, 0.05) 50%, rgba(25, 118, 210, 0.05) 100%)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 6, opacity: 0, animation: 'fadeIn 0.8s ease-out forwards' }}>
                    <style>
                        {`
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
            `}
                    </style>
                    <Typography
                        variant="h2"
                        component="h1"
                        fontWeight="700"
                        color="text.primary"
                        gutterBottom
                        sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}
                    >
                        Marketplace Literacy <Box component="span" sx={{
                            background: "linear-gradient(90deg, #D4AF37 0%, #2E8B57 50%, #1976d2 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent"
                        }}>Chhattisgarh</Box>
                    </Typography>
                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            maxWidth: 700,
                            mx: 'auto',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            fontWeight: 400
                        }}
                    >
                        Empowering women through financial education and entrepreneurship skills
                    </Typography>
                </Box>

                <Grid container spacing={4} alignItems="stretch">
                    <Grid item xs={12} lg={5}>
                        {/* Enhanced Stats Cards Container */}
                        <Box
                            sx={{
                                position: 'relative',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 3
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Decorative background for the cards container */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 3,
                                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(46, 139, 87, 0.05) 50%, rgba(25, 118, 210, 0.05) 100%)',
                                    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                                    transition: 'transform 0.5s ease',
                                    zIndex: 0
                                }}
                            />

                            {/* Connection lines between cards */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '33%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '2px',
                                    height: '34%',
                                    background: `linear-gradient(to bottom, 
                                        ${theme.palette.primary.main} 0%, 
                                        ${theme.palette.secondary.main} 50%, 
                                        ${theme.palette.info.main} 100%)`,
                                    opacity: isHovered ? 0.7 : 0.3,
                                    transition: 'opacity 0.5s ease',
                                    zIndex: 0
                                }}
                            />

                            <Box sx={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}> {/* Reduced gap to 2 to fit more items */}
                                <MarketStatsCard
                                    title="Total Training"
                                    count={399}
                                    delay={0}
                                    icon={<Award size={32} strokeWidth={1.5} />}
                                    isActive={activeCard === 0}
                                    onMouseEnter={() => setActiveCard(0)}
                                    onMouseLeave={() => setActiveCard(null)}
                                />
                                <MarketStatsCard
                                    title="Total Trainers"
                                    count={110}
                                    delay={100}
                                    icon={<Users size={32} strokeWidth={1.5} />}
                                    isActive={activeCard === 1}
                                    onMouseEnter={() => setActiveCard(1)}
                                    onMouseLeave={() => setActiveCard(null)}
                                />
                                <MarketStatsCard
                                    title="Total Participants"
                                    count={10081}
                                    delay={200}
                                    icon={<Globe size={32} strokeWidth={1.5} />}
                                    isActive={activeCard === 2}
                                    onMouseEnter={() => setActiveCard(2)}
                                    onMouseLeave={() => setActiveCard(null)}
                                />
                                <MarketStatsCard
                                    title="Total Districts"
                                    count={5}
                                    delay={300}
                                    icon={<Building2 size={32} strokeWidth={1.5} />}
                                    isActive={activeCard === 3}
                                    onMouseEnter={() => setActiveCard(3)}
                                    onMouseLeave={() => setActiveCard(null)}
                                />
                                <MarketStatsCard
                                    title="Total Blocks"
                                    count={30}
                                    delay={400}
                                    icon={<MapPin size={32} strokeWidth={1.5} />}
                                    isActive={activeCard === 4}
                                    onMouseEnter={() => setActiveCard(4)}
                                    onMouseLeave={() => setActiveCard(null)}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        href="#"
                                        sx={{
                                            borderRadius: 50,
                                            px: 4,
                                            background: 'linear-gradient(90deg, #D4AF37 0%, #2E8B57 100%)',
                                            textTransform: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 600,
                                            boxShadow: '0 8px 20px rgba(46, 139, 87, 0.3)',
                                            '&:hover': {
                                                background: 'linear-gradient(90deg, #C59237 0%, #257849 100%)',
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 12px 24px rgba(46, 139, 87, 0.4)',
                                            },
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        Explore More
                                    </Button>
                                </Box>
                            </Box>

                            {/* Floating action button */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -20,
                                    right: -20,
                                    width: 60,
                                    height: 60,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #D4AF37 0%, #2E8B57 50%, #1976d2 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 10px 20px -5px rgba(0,0,0,0.2)',
                                    transform: isHovered ? 'scale(1.1) rotate(15deg)' : 'scale(1) rotate(0)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer',
                                    zIndex: 2
                                }}
                            >
                                <TrendingUp size={28} color="white" />
                            </Box>
                        </Box>
                    </Grid>

                    {/* Right Side - Images */}
                    <Grid item xs={12} lg={7}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
                            <MarketPartnerLogos />

                            {/* Top Image (Video) */}
                            <Paper
                                elevation={0}
                                sx={{
                                    height: 300,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                                    animation: 'fadeIn 0.8s ease-out forwards 0.4s',
                                    opacity: 0,
                                    position: 'relative',
                                    '&:hover': {
                                        '&:after': {
                                            opacity: 1,
                                        },
                                        transform: 'scale(1.02)',
                                        transition: 'transform 0.3s ease',
                                    },
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }
                                }}
                            >
                                {/* <video
                                    src={marketGif}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                /> */}
                                <img
                                    src={train_01}
                                    alt="Rural village community"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Paper>

                            {/* Bottom Image (Village) */}
                            <Paper
                                elevation={0}
                                sx={{
                                    height: 300,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                                    animation: 'fadeIn 0.8s ease-out forwards 0.6s',
                                    opacity: 0,
                                    position: 'relative',
                                    '&:hover': {
                                        '&:after': {
                                            opacity: 1,
                                        },
                                        transform: 'scale(1.02)',
                                        transition: 'transform 0.3s ease',
                                    },
                                    '&:after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }
                                }}
                            >
                                <img
                                    src={train_02}
                                    alt="Rural village community"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MarketHeroSection;


// import { Box, Container, Typography, Grid, Paper } from "@mui/material";
// import { Users, MapPin, Building2 } from "lucide-react";
// import MarketStatsCard from "./MarketStatsCard";
// import MarketPartnerLogos from "./MarketPartnerLogos";
// import marketGif from "../../assets/marketPlace/market_gif.mp4";
// import villageImg from "../../assets/workshop/3.png";

// const MarketHeroSection = () => {
//     return (
//         <Box component="section" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default', overflow: 'hidden', position: 'relative' }}>
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

//                 <Grid container spacing={4} alignItems="stretch">
//                     <Grid item xs={12} lg={5}>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
//                             <MarketStatsCard
//                                 title="Women Trained"
//                                 count={2500}
//                                 delay={0}
//                                 icon={<Users size={32} strokeWidth={1.5} />}
//                             />
//                             <MarketStatsCard
//                                 title="Confidence Villages"
//                                 count={85}
//                                 delay={200}
//                                 icon={<MapPin size={32} strokeWidth={1.5} />}
//                             />
//                             <MarketStatsCard
//                                 title="Districts Covered"
//                                 count={12}
//                                 delay={400}
//                                 icon={<Building2 size={32} strokeWidth={1.5} />}
//                             />
//                         </Box>
//                     </Grid>

//                     {/* Right Side - Images */}
//                     <Grid item xs={12} lg={7}>
//                         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, height: '100%' }}>
//                             <MarketPartnerLogos />

//                             {/* Top Image (Video) */}
//                             <Paper
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
//                                         }
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
//                                     style={{ width: '100%', height: '100%', objectFit: 'contain' }}
//                                 />
//                             </Paper>

//                             {/* Bottom Image (Village) */}
//                             <Paper
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
//                                         }
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
//                                     src={villageImg}
//                                     alt="Rural village community"
//                                     style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//                                 />
//                             </Paper>
//                         </Box>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };

// export default MarketHeroSection;
