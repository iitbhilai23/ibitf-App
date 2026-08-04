import { Box } from "@mui/material";
import MarketHeroSection from "./MarketHeroSection";
import MarketJourney from "./MarketJourney";
import MarketFounder from "./MarketFounder";
import PhotoGallery from "../PhotoGallery";

const MarketMainContainer = () => {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
            }}
        >
            {/* <MarketPartnerLogos /> */}
            <MarketHeroSection />
            <MarketJourney />
            <PhotoGallery
                eyebrow="Marketplace Literacy in Chhattisgarh"
                heading="Our Trainees in Action"
                description="Since July 2024, Marketplace Literacy has been empowering women across Chhattisgarh with the skills and confidence to participate as informed consumers and emerging entrepreneurs."
                initialPhotoCount={5}
                variant="marketplace"
            />
            <MarketFounder />

        </Box>
    );
};

export default MarketMainContainer;
