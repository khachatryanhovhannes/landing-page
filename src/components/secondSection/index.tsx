import { Container, Typography } from '@mui/material';
import Carusel from '../carusel';

const SecondSection = () => {
    return (

        <Container style={{ paddingTop: "100px", }} >
            <Typography
                id="gallery"
                variant="h2"
                style={{
                    fontSize: '3em',
                    color: '#333',
                    paddingBottom: "30px"
                }}

            >
                Gallery
            </Typography>

            <Carusel />
        </Container>
    );
}


export default SecondSection;
