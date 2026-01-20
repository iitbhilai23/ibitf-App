import { Box, Container, Typography, Paper, Button } from "@mui/material";
import { useState } from "react";

const MarketJourney = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: 'action.hover' }}>
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        fontWeight="bold"
                        sx={{ mb: 4, fontFamily: '"Playfair Display", serif', fontSize: { xs: '1.5rem', md: '2.5rem' } }}
                    >
                        Journey of Marketplace Literacy:
                        <Box component="span" color="primary.main" sx={{ ml: 1 }}>
                            Chhattisgarh
                        </Box>
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 4, md: 6 },
                            borderRadius: 3,
                            border: 1,
                            borderColor: 'divider',
                            boxShadow: '0 4px 20px -4px rgba(0,0,0,0.1)'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                            <Box
                                sx={{
                                    width: 4,
                                    height: 64,
                                    borderRadius: 2,
                                    background: theme =>
                                        `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                                }}
                            />
                            <Box>
                                <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                    Started On
                                </Typography>
                                <Typography
                                    variant="h5"
                                    color="primary.main"
                                    fontWeight="bold"
                                    fontFamily='"Playfair Display", serif'
                                >
                                    29th July 2024
                                </Typography>
                            </Box>
                        </Box>

                        <Typography
                            variant="body1"
                            paragraph
                            sx={{ fontSize: '1.125rem', color: 'text.primary', mb: 3 }}
                        >
                            The journey of Marketplace Literacy (MPL) in Chhattisgarh began on 29th July 2024, ignited by a powerful vision: to empower women across the state with essential marketplace skills, enabling them to participate confidently, not only as informed consumers but also as emerging entrepreneurs.
                        </Typography>

                        <Typography variant="body1" color="text.secondary">
                            At the heart of this movement stands the unwavering dedication of Prof. Madhu Vishwanath, a pioneer who has been teaching Marketplace Literacy for over two decades, reaching more than 1,00,000 women across four continents. His commitment, combined with IIT Bhilai’s strong vision to scale this initiative within Chhattisgarh, laid a strong foundation for a transformative statewide movement.
                        </Typography>

                        {showMore && (
                            <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                                Equally inspiring is the determination of the women themselves. SHG women leaders traveled from distances as far as 500 kilometers, dedicating two full days to learning, sharing, and preparing themselves to take this knowledge back to their communities. Their enthusiasm turned training halls into spaces of energy, curiosity, and purpose.
                                <br /><br />
                                Since July 2024, Marketplace Literacy has grown rapidly across the state. To date, over 11,000 women from more than 300 villages across 5+ districts of Chhattisgarh have been trained through 03 phases of Educator Training and 03 phases of Pilot Training.
                                <br /><br />
                                Today, over 100 committed educators are actively teaching Marketplace Literacy across Chhattisgarh.
                            </Typography>
                        )}

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    if (!showMore) {
                                        window.open(
                                            "https://www.ibitf.co.in/ml/login",
                                            "_blank"
                                        );
                                        return; // 🚫 stop toggle — no confusion
                                    }
                                    setShowMore(false);
                                }}
                                sx={{
                                    borderRadius: 50,
                                    px: 4,
                                    background: 'linear-gradient(90deg, #D4AF37 0%, #2E8B57 100%)',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    boxShadow: '0 4px 12px rgba(46, 139, 87, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #C59237 0%, #257849 100%)',
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 6px 16px rgba(46, 139, 87, 0.4)',
                                    },
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {showMore ? 'Read Less' : 'Read More'}
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default MarketJourney;
