import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../style/api.scss';
import axios from 'axios';
function Api() {
    const [state, setState] = React.useState([])

    React.useEffect(() => {
        axios.get('http://localhost:4004/user').then(e => setState(e.data))
    })
    return (
        <>
        <h1></h1>
            {
                state.map(e => {
                    return (
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    <h1>{e.familya}</h1>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })
            }
        </>
    );
}

export default Api;