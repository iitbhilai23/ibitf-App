import { Box, Container, Typography, Paper } from "@mui/material";
import founderImg from "../../assets/marketPlace/market_founder.jpg";

const MarketFounder = () => {
    return (
        <Box component="section" sx={{ py: { xs: 7, md: 11 }, bgcolor: '#edf7f1' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                    <Typography sx={{ color: '#2e8b57', textTransform: 'uppercase', letterSpacing: '.13em', fontSize: '.8125rem', fontWeight: 800, mb: 1.5 }}>
                        The vision behind the movement
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        fontWeight="bold"
                        sx={{ color: '#17243b', fontFamily: '"Playfair Display", serif', fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.12 }}
                    >
                        Meet the
                        <Box
                            component="span"
                            sx={{
                                background: theme => `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                ml: 1
                            }}
                        >   
                            Founder
                        </Box>
                    </Typography>
                </Box>


                <Box sx={{ maxWidth: 'md', mx: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {/* Founder Image */}
                        <Box sx={{ position: 'relative', mb: 3 }}>
                            <Box
                                sx={{
                                    width: { xs: 160, md: 208 },
                                    height: { xs: 160, md: 208 },
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: '5px solid #fff',
                                    boxShadow: '0 16px 35px -16px rgba(15, 55, 42, .55)'
                                }}
                            >
                                <Box
                                    component="img"
                                    src={founderImg}
                                    alt="Founder Portrait"
                                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -8,
                                    right: -8,
                                    width: 48,
                                    height: 48,
                                    bgcolor: 'primary.main',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}
                            >
                                <span style={{ fontSize: '1.2rem' }}>✦</span>
                            </Box>
                        </Box>

                        {/* Founder Name */}
                        <Typography variant="h4" component="h3" fontWeight="bold" fontFamily='"Playfair Display", serif' sx={{ color: '#17243b', textAlign: 'center', fontSize: { xs: '1.5rem', md: '2rem' } }} gutterBottom>
                            Prof. Madhu Viswanathan
                        </Typography>
                        <Typography variant="subtitle1" color="primary" fontWeight="medium" sx={{ mb: 4, textAlign: 'center', lineHeight: 1.65, maxWidth: 870 }}>
                            Professor, Department of Marketing, College of Business Admin., Loyola Marymount University, Los Angeles<br />
                            Professor Emeritus and Research Professor, Department of Business Admin., Gies College of Business, UIUC<br />
                            Honorary Professor of Marketing, Nottingham University Business School, Nottingham, UK
                        </Typography>

                        {/* About Founder */}
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 4 },
                                textAlign: 'center',
                                borderRadius: 5,
                                bgcolor: 'rgba(255,255,255,.92)',
                                border: 1,
                                borderColor: 'rgba(46, 139, 87, .14)',
                                boxShadow: '0 20px 45px -28px rgba(15, 55, 42, .35)'
                            }}
                        >
                            <Typography variant="body1" paragraph sx={{ mb: 2, fontSize: { xs: '.975rem', md: '1rem' }, lineHeight: 1.8 }}>
                                Madhu Viswanathan (B.Tech, Mechanical Engineering, IIT, Madras, 1985; Ph.D., Marketing, University of Minnesota, 1990) is Professor of Marketing, College of Business Administration, Loyola Marymount University (2019-), and Professor Emeritus, University of Illinois, Urbana-Champaign (1990-2019). His research programs are on measurement, and subsistence marketplaces. He has authored several books including Measurement Error and Research Design (Sage, 2005), Enabling Consumer and Entrepreneurial Literacy in Subsistence Marketplaces (Springer, 2008), Subsistence Marketplaces (2013), and Bottom-Up Enterprise (2016).


                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                Madhu founded and pioneered the area of subsistence marketplaces, taking a bottom-up approach to poverty and marketplaces (www.business.illinois.edu/subsistence), through symbiotic academic-social enterprise. He founded and directs the Marketplace Literacy Project (www.marketplaceliteracy.org), pioneering the design and delivery of consumer, entrepreneurial and sustainability literacy education that has reached more than 100,000 women across four continents. He has taught courses on research methods, subsistence marketplaces, and sustainability to almost a thousand university students annually and to thousands of MOOC learners. He has created innovative curricular content for educators and learners relating to bottom-up immersion, design, innovation and enterprise (www.subsistencemarketplaces.org). He currently teaches Business For Good for all incoming undergraduate students.
                            </Typography>

                            <Typography variant="body1" paragraph sx={{ mt: 2, mb: 2, fontSize: { xs: '.975rem', md: '1rem' }, lineHeight: 1.8 }}>
                                Prof. has served on the Livelihoods Advisory Board of UNHCR. He has received numerous teaching, research, social impact and lifetime achievement awards and recognitions. He has created endowments at three universities he has been associated with, supporting student-centric learning experiences on subsistence marketplaces and marketplace literacy.
                            </Typography>

                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                Also, Prof. Madhu is Founding Editor-In Chief, Subsistence Marketplaces – a journal and web portal (2021-). He serves as the Director of the DK Kim Foundation Business for Good program at Loyola Marymount University. He currently holds the title of Honorary Professor, University of Nottingham. He served as Faculty Advisor for the online iMBA, University of Illinois (2015-16), leading the team that launched the program, designing and implementing key curricular policies and innovations. He has served as Chair, Consumer Behavior Special Interest Group, American Marketing Association; Secretary-Treasurer, Society for Consumer Psychology; Associate Editor, Journal of Public Policy and Marketing; and Director of Graduate Studies, Business Administration, University of Illinois.
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default MarketFounder;
