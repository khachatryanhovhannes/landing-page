
import { Grid } from '@mui/material';
import ActionAreaCard from '../card';

const cardData = [
    {
        title: 'Card 1',
        description: 'Description for Card 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://cdn1.iconfinder.com/data/icons/business-startup-14/60/Development-1024.png',
    },
    {
        title: 'Card 2',
        description: 'Description for Card 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://hr.gwu.edu/sites/g/files/zaxdzs5691/files/image/ManagersHandbook/gear7sand-01.png',
    },
    {
        title: 'Card 3',
        description: 'Description for Card 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://cdn3.iconfinder.com/data/icons/business-vol-27-1/100/Artboard_9-1024.png',
    },
];

const CardList = () => {
    return (
        <Grid container spacing={"30px"} justifyContent="space-between">
            {cardData.map((card, index) => (
                <ActionAreaCard card={card} index={index} key={index} />
            ))}
        </Grid>
    );
};

export default CardList;
