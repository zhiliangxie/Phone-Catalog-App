import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PhoneDetailComponent = ({ handleClose, data  }) => {

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
    >
        <div >
        <section className="modal-main">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="500"
                    image={data.thumbnail}
                    alt={data.title}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary">{data.title}</Typography>
                    <Typography variant="body2" color="text.secondary">brand: {data.brand}</Typography>
                    <Typography variant="body2" color="text.secondary">description: {data.description}</Typography>
                    <Typography component={'span'}  variant="body2" color="text.secondary"> <div>colors: {data.color.map(col=>{return(<span key={col}>{col},</span>);})}</div> 
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <button type="button" onClick={handleClose}>
                    Close
                    </button>
                </CardActions>
            </Card>
        </section>
        </div>
        </Grid>
  );
};

export default PhoneDetailComponent;