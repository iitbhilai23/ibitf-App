import { Box, Container, Typography, Paper, Button } from "@mui/material";

const MarketJourney = () => {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 11 }, bgcolor: '#f8fafc' }}>
            <Container maxWidth="lg">
                <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
                    <Typography align="center" sx={{ color: '#2e8b57', textTransform: 'uppercase', letterSpacing: '.13em', fontSize: '.8125rem', fontWeight: 800, mb: 1.5 }}>
                        Our story
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        fontWeight="bold"
                        sx={{ mb: 5, color: '#17243b', fontFamily: '"Playfair Display", serif', fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.12 }}
                    >
                        Journey of Marketplace Literacy:
                        <Box component="span" color="primary.main" sx={{ ml: 1 }}>
                            Chhattisgarh
                        </Box>
                    </Typography>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 3, sm: 4, md: 6 },
                            borderRadius: 5,
                            bgcolor: '#fff',
                            border: 1,
                            borderColor: 'rgba(46, 139, 87, .13)',
                            boxShadow: '0 20px 45px -28px rgba(15, 55, 42, .35)'
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
                            sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.8, color: '#26374d', mb: 3 }}
                        >
                            The journey of Marketplace Literacy (MPL) in Chhattisgarh began on 29th July 2024, ignited by a powerful vision: to empower women across the state with essential marketplace skills, enabling them to participate confidently, not only as informed consumers but also as emerging entrepreneurs.
                        </Typography>

                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                            At the heart of this movement stands the unwavering dedication of Prof. Madhu Viswanathan, a pioneer who has been teaching Marketplace Literacy for over two decades, reaching more than 1,00,000 women across four continents. His commitment, combined with IIT Bhilai’s strong vision to scale this initiative within Chhattisgarh, laid a strong foundation for a transformative statewide movement.
                        </Typography>

                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                            <Button
                                variant="contained"
                                component="a"
                                href="https://www.ibitf.co.in/ml/login"
                                sx={{
                                    borderRadius: 2,
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
                                Know More
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default MarketJourney;
