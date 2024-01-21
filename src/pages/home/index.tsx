
import { Typography, Grid } from "@mui/material";
import FirstSection from "../../components/firstSection";
import SecondSection from "../../components/secondSection";
import ThirdSection from "../../components/thirdSection";
import Footer from "../../components/footer";

const Home = () => {

    
    return (
        <>
            <Grid
                container
                minHeight="100vh"
                style={{ padding: '20px', margin: '50px 0 50px', color: "white" }}
                justifyContent={'center'}
            >
                <Grid
                    item
                    xs={12}
                    md={8}
                    padding="30px"
                    borderRadius="30px"
                    bgcolor="rgb(0, 0, 0, 0.4)"
                    height={"100%"}
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        textAlign="center"
                        fontSize={{ xs: '40px', md: '50px' }}
                    >
                        Learn and Master Web Technologies
                    </Typography>
                    <Typography marginTop="30px" fontSize={{ xs: '16px', md: '18px' }}>
                        Explore the latest web programming technologies and frameworks, from
                        HTML and CSS to JavaScript, React, Angular, and beyond. Our
                        comprehensive tutorials and guides will help you build a solid
                        foundation and stay up-to-date with the ever-evolving web landscape.
                    </Typography>
                </Grid>

            </Grid>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <Footer />
        </>
    );
};

export default Home;
