
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

interface ActionAreaCardProps {
    index: number;
    card: {
        image: string;
        title: string;
        description: string;
    };
}

export default function ActionAreaCard({ card, index }: ActionAreaCardProps) {
    return (
        <Grid item xs={12} sm={6} md={4} key={index} >
            <Card sx={{ maxWidth: 345 }} style={{ boxShadow: "0 0 20px grey", borderRadius: "30px", padding:"10px" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={card.image}
                        alt={card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
