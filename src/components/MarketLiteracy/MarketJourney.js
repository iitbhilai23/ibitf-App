import { Box, Container, Typography, Paper } from "@mui/material";

const MarketJourney = () => {
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
                                    background: theme => `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                                }}
                            />
                            <Box>
                                <Typography variant="body2" color="text.secondary" fontWeight="medium">
                                    Started On
                                </Typography>
                                <Typography variant="h5" color="primary.main" fontWeight="bold" fontFamily='"Playfair Display", serif'>
                                    29th July 2024
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant="body1" paragraph sx={{ fontSize: '1.125rem', color: 'text.primary', mb: 3 }}>
                            The journey of Marketplace Literacy in Chhattisgarh began on 29th July 2024, with the vision to
                            empower rural women with essential financial literacy and entrepreneurship skills. Our mission
                            is to create self-sufficient communities where women can confidently participate in marketplace
                            activities, make informed financial decisions, and build sustainable livelihoods.
                        </Typography>

                        <Typography variant="body1" color="text.secondary">
                            Through comprehensive training programs, we equip participants with practical knowledge about
                            budgeting, savings, credit management, and basic business skills. Our approach combines
                            interactive workshops, hands-on activities, and community support systems to ensure lasting
                            impact and continuous growth.
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </Box>
    );
};

export default MarketJourney;
