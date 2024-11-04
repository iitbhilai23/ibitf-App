import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { siteContent } from "../constants/content";
import BlogLogo from "../assets/vector image/Blog.svg";

const Blogs = () => {
  const { cardData } = siteContent.Blogs;
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          color: "#6A0DAD",
          fontWeight: "bold",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          mt: 4,
        }}
      >
        Our Blogs
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#f5f5f5",
          padding: "30px",
          borderRadius: 3,
          boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.1)",
          maxWidth: "1400px",
          margin: "20px auto",
        }}
      >
        <Grid item md={6} sx={{
          display: "flex", justifyContent: "center", width: "300px",
          height: "330px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          borderRadius: "25px",
          overflow: "hidden",
          transition: "transform 0.3s ease",
          // border: "1px solid #6a0dad",
          backgroundColor: "rgba(58, 16, 120, 0.1)",
        }}>
          <img
            src={BlogLogo}
            alt="Blog logo"
            style={{ height: "300px", objectFit: "contain" }}
          />
        </Grid>
        <Grid item md={6} sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontSize: "1rem",
              lineHeight: 2,
              textAlign: "justify",
            }}
          >
            Dive into insightful articles that explore finance, technology,
            human history, and beyond. Each piece is crafted to keep you
            informed and engaged on the latest trends and ideas shaping our
            world. The progress of human civilization is closely tied to the
            evolution in our collective endeavour in creating wealth through
            discovering novel opportunities. Such evolution is often subtle but
            deeply impactful.
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 4,
          mb: 4,
        }}
      >
        {cardData.map((data, index) => (
          <Card
            key={index}
            sx={{
              width: 400,
              //   height: 280,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              borderRadius: 3,
              //   backgroundImage: "linear-gradient(135deg, #f3e7ff, #e2d1ff)",
              // backgroundColor: "rgba(58, 16, 120, 0.1)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.4s, box-shadow 0.4s",
              "&:hover": {
                transform: "scale(1.07)",
                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardContent>
              <Typography
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  mb: 1,
                }}
              >
                {data.date}
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "1.4rem",
                  color: "#4A148C",
                  mb: 2,
                }}
              >
                {data.word}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
              <Button
                size="medium"
                variant="contained"
                sx={{
                  borderRadius: 20,
                  padding: "8px 20px",
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#6A0DAD",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#5B0DA0",
                    boxShadow: "0px 8px 16px rgba(0,0,0,0.15)",
                  },
                }}
                onClick={() =>
                  window.open(data.pdfUrl, "_blank", "noopener noreferrer")
                }
              >
                {data.buttonText}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Blogs;



