import { Box } from "@mui/material";
import MarketHeroSection from "./MarketHeroSection";
import MarketJourney from "./MarketJourney";
import MarketFounder from "./MarketFounder";

const MarketMainContainer = () => {
    return (
        <Box component="main" sx={{ minHeight: '100vh' }}>
            {/* <MarketPartnerLogos /> */}
            <MarketHeroSection />
            <MarketJourney />
            <MarketFounder />

            {/* Footer */}
            {/* <Box component="footer" sx={{ py: 8, bgcolor: 'text.primary', color: 'background.paper' }}>
                <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                        © 2024 Marketplace Literacy Chhattisgarh. All rights reserved.
                    </Typography>
                    <Typography variant="caption" display="block" sx={{ opacity: 0.6, mt: 1 }}>
                        A collaborative initiative by IIT Bhilai, MLP & D.K. Kim Foundation
                    </Typography>
                </Container>
            </Box> */}
        </Box>
    );
};

export default MarketMainContainer;
