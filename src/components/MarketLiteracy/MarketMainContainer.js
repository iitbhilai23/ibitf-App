import { Box } from "@mui/material";
import MarketHeroSection from "./MarketHeroSection";
import MarketJourney from "./MarketJourney";
import MarketFounder from "./MarketFounder";
import PhotoGallery from "../PhotoGallery";
import MarketplaceLiteracy1 from "../../assets/StaticImages/Workshop/MarketplaceLiteracy.png";
import MarketplaceLiteracy2 from "../../assets/StaticImages/Workshop/MarketplaceLiteracy1.png";
import MarketPhoto1 from "../../assets/StaticImages/Workshop/market1.png";
import MarketPhoto2 from "../../assets/StaticImages/Workshop/market2.png";
import MarketPhoto3 from "../../assets/StaticImages/Workshop/market3.png";

const marketplaceTraineePhotos = [
    {
        image: MarketplaceLiteracy1,
        title: "Marketplace Literacy workshop",
    },
    {
        image: MarketplaceLiteracy2,
        title: "Trainees in action",
    },
    {
        image: MarketPhoto1,
        title: "Hands-on learning session",
    },
    {
        image: MarketPhoto2,
        title: "Guided marketplace training",
    },
    {
        image: MarketPhoto3,
        title: "Community participants",
    },
];

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
                photos={marketplaceTraineePhotos}
                initialPhotoCount={5}
                variant="marketplace"
            />
            <MarketFounder />

        </Box>
    );
};

export default MarketMainContainer;
