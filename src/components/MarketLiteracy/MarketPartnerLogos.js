import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Divider
} from "@mui/material";
import { siteContent } from "../../constants/content";

const MarketPartnerLogos = () => {
    const { partners } = siteContent.MarketLiteracy;


    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
            {partners.map((partner) => (
                <Grid item xs={4} key={partner.alt} display="flex" justifyContent="center">
                    <Card
                        elevation={0}
                        sx={{
                            // width: '300px',
                            maxWidth: 300,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            py: 1,
                            px: 1,
                            transition: 'all 0.3s ease',
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: 3,
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 8px 16px rgba(0,0,0,0.08)',
                                borderColor: 'primary.main'
                            }
                        }}
                    >
                        <Box
                            sx={{
                                height: "112px",
                                minWidth: '264px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                component="img"
                                src={partner.src}
                                alt={partner.alt}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default MarketPartnerLogos;
