import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Grid } from '@mui/material';

function CarouselComponent() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img: "https://www.wallpaperup.com/uploads/wallpapers/2016/06/25/992262/23d09ca2d76d5e73c967825c035d3827-1000.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img: "https://www.wallpaperup.com/uploads/wallpapers/2014/11/20/521992/29c0952c890841947b3e9f6f571ad7c0-1000.jpg"
        },
        {
            name: "Random Name #3",
            description: "Another random description.",
            img: "https://www.wallpaperup.com/uploads/wallpapers/2014/11/20/521992/29c0952c890841947b3e9f6f571ad7c0-1000.jpg"
        },
        {
            name: "Random Name #4",
            description: "Yet another random description.",
            img: "https://online.anyflip.com/vlmur/accountlogo.jpg"
        }
    ];

    return (
        <Carousel
            indicatorContainerProps={{ style: { marginTop: "0px" } }}
        >
            {items.map((item, i) => (
                <Paper key={i} style={{ background: "lightblue", borderRadius: "30px", padding: "20px" }}>
                    <Grid container spacing={2} justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <Button variant='contained'>Check it out!</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img
                                src={item.img}
                                alt={item.name}
                                style={{ width: "100%", borderRadius: "10px" }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;
