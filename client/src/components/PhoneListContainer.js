import React,{Component} from "react";
import axios from "axios"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import PhoneDetailComponent from './PhoneDetailComponent'

export default class PhoneListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading:true,
            show: false,
            showData:''
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = (phone) => {
        this.setState({ show: true,showData:phone });
    };
    hideModal = () => {
        this.setState({ show: false,showData:'' });
    };

    componentDidMount() {
        axios.get(`/api/phones`)
        .then(res => {
            this.setState({ data:res.data.result,loading:false });
        })
    }
    
  render() {
    const { data,loading,show,showData } = this.state;
    let content;
    if(show){
        return (
            <PhoneDetailComponent data={showData} handleClose={this.hideModal}>
                <p>Modal</p>
            </PhoneDetailComponent>
        )
    }
    else{
        content = data.map(phone=>{
            return (
                <Card sx={{ maxWidth: 500 }} key={phone.id} onClick={() => this.showModal(phone)}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="500"
                        image={phone.thumbnail}
                        alt={phone.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {phone.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {phone.price}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            );
        });
    }
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
            <div>
                <div className="title">
                    <h1>Phone Catalog</h1>
                </div>
                <div className="body">
                { loading ? <CircularProgress /> :
                        content
                    }
                </div>
            </div>
        </Grid>
    )
  }
}