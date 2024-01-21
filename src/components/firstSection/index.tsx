import { Container, Typography } from '@mui/material';
import CardList from '../cardList';

const FirstSection = () => {
    return (

        <Container>
            <Typography
                id="services"
                variant="h2"
                style={{
                    fontSize: '3em',
                    color: '#333',
                    paddingBottom: "30px"
                }}

            >
                Our Services
            </Typography>

            <CardList />
        </Container>
    );
}

export default FirstSection;
