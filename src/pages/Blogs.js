
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import { siteContent } from '../constants/content';

const Blogs = () => {
    const { cardData } = siteContent.Blogs;
    return (
        <>
            <Card>
                <h1 style={{ textAlign: "center", color: "#6a0dadb5", fontWeight: "bold", fontSize: "2rem" }}>
                    Our Blogs
                </h1>
                <Box
                    sx={{
                        backgroundColor: '#f9f9f9',
                        padding: '20px',
                        borderRadius: 3,
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
                        maxWidth: '1100px',
                        margin: '0 auto',
                        mt: 2,
                        mb: 4,
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            fontSize: '1rem',
                        }}
                    >
                        Dive into insightful articles that explore finance, technology, human history,
                        and beyond. Each piece is crafted to keep you informed and engaged on the latest
                        trends and ideas shaping our world.To conclude, the progress of human civilization is closely tied to the evolution in our
                        collective endeavour in creating wealth through discovering novel opportunities.
                        Such an evolution process of our financial systems is notoriously slow, so much so
                        that it is almost invisible to most of us.


                    </Typography>
                </Box>
                <Container sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center', mt: 4, mb: 4 }}>
                    {cardData.map((data, index) => (
                        <Card
                            key={index}
                            sx={{
                                width: 350,
                                height: 250,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
                                borderRadius: 3,
                                backgroundColor: '#f5f5f5',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: '0px 12px 24px rgba(0,0,0,0.15)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography
                                    sx={{
                                        color: 'text.secondary',
                                        textAlign: 'center',
                                        fontSize: '0.9rem',
                                        textTransform: 'uppercase',
                                        mb: 1,
                                        mt: 3,
                                    }}
                                >
                                    {data.date}
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        mb: 2
                                    }}
                                >
                                    {data.word}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                                <Button
                                    size="medium"
                                    variant="contained"
                                    sx={{
                                        borderRadius: 20,
                                        padding: '6px 16px',
                                        fontWeight: 'bold',
                                        textTransform: 'none',
                                        backgroundColor: "#6a0dadb5"
                                    }}
                                    onClick={() => window.open(data.pdfUrl, '_blank', 'noopener noreferrer')}
                                >
                                    {data.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Container>
            </Card>
        </>
    );
};

export default Blogs;
