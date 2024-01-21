import { Container, Typography, Grid, Button, TextField } from "@mui/material";

const ThirdSection = () => {
    return (
        <Container style={{ paddingTop: "100px" }}>
            <Typography
                id="contact"
                variant="h2"
                style={{
                    fontSize: "3em",
                    color: "#333",
                    paddingBottom: "30px",
                }}
            >
                Contact us
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96671.37289960857!2d43.7580045606443!3d40.784444976743515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041fb8b9b34fc9f%3A0x4f4bed0e45f99102!2sGyumri!5e0!3m2!1sen!2sam!4v1705774643910!5m2!1sen!2sam"
                        width="100%"
                        height="450"
                        style={{ border: "0" }}
                        loading="lazy"
                    ></iframe>
                </Grid>
                <Grid item xs={12} md={6}>

                    <Typography variant="body1" gutterBottom>
                        <strong>Address:</strong> 123 Street, City, Country
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>Phone:</strong> +1 (555) 123-4567
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        <strong>Email:</strong> info@example.com
                    </Typography>

                    <form>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"
                        />
                        <Button variant="contained" color="primary" fullWidth>
                            Send Message
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ThirdSection;
