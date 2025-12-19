import { useEffect, useState, useRef } from "react";
import { Card, Box, Typography, Avatar } from "@mui/material";

const MarketStatsCard = ({ title, count, icon, delay = 0 }) => {
    const [displayCount, setDisplayCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Small initial delay before counting starts
        const startTimeout = setTimeout(() => {
            const duration = 2000;
            const steps = 60;
            const increment = count / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= count) {
                    setDisplayCount(count);
                    clearInterval(timer);
                } else {
                    setDisplayCount(Math.ceil(current));
                }
            }, duration / steps);

            return () => clearInterval(timer);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [count, delay, isVisible]);

    return (
        <Card
            ref={cardRef}
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 4, // More rounded as per image
                bgcolor: 'background.paper',
                boxShadow: '0 8px 30px rgba(0,0,0,0.04)', // Subtle shadow
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                transition: 'transform 0.3s ease-out, opacity 0.5s ease-out',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                border: '1px solid',
                borderColor: 'grey.100'
            }}
        >
            <Box
                sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    bgcolor: '#FFF4E5', // Light orange/gold background
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#D97706', // Darker gold/orange for icon
                    flexShrink: 0
                }}
            >
                {icon}
            </Box>
            <Box>
                <Typography
                    variant="h4"
                    component="div"
                    sx={{
                        fontWeight: 700,
                        fontFamily: '"Playfair Display", serif',
                        color: 'text.primary',
                        lineHeight: 1
                    }}
                >
                    {displayCount.toLocaleString()}+
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        mt: 0.5,
                        fontSize: '0.95rem',
                        fontWeight: 500
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Card>
    );
};

export default MarketStatsCard;
