import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Chip, makeStyles, Typography } from '@material-ui/core';
import { Row } from 'react-bootstrap';
import PetAppVideo from '../static/pet-sitting-app.mp4';
import QRCode from '../static/qr-code.JPG';
import Coinlayer from '../static/coinlayer-api.JPG';
import LibraryApp from '../static/library-app.JPG';

const useStyles = makeStyles({
  bgColor: {
    backgroundColor: '#f8f9fa',
  },
  projects: {
    paddingBottom: '10%',
    paddingTop: '5%',
  },
  header: {
    color: '#4a5a68',
    fontFamily: 'Verdana, sans-serif',
    fontSize: '40px',
    textAlign: 'center',
    textShadow: '2px 2px #dee7ef',
  },
  cardMedia: {
    boxShadow: '1px 2px 10px grey'
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    "&:hover": {
      color: 'black',
    },
  },
  frontendMentor: {
    color: '#4a5a68',
    textDecoration: 'none',
    "&:hover":{
      color: '#8c9dad',
    },
  },
});

export default function Projects() {
    
  const classes = useStyles();

  return (
    <div id="projects" className={classes.bgColor}>
      <div className={classes.projects}>
      <Typography className={classes.header}>Recent Projects</Typography>
      <Row className="row col-lg-12 col-md-8 col-sm-4 col-xs-2 justify-content-center">
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="video"
            autoPlay
            loop
            muted
            src={PetAppVideo}
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pet Sitting App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using ReactJS and Firebase, I created a full stack application that 
              allows users to create an account, create pet sitting listings, 
              update and delete listings, and message other users.
            </Typography>
            <br />
            <Chip label="React JS" variant="outlined" className="m-1"/>
            <Chip label="Firebase" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="CSS3" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/happy-paws-pet-sitters-app.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://pet-sitting-app-a1421.web.app/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={QRCode}
            alt="QR Code Project Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              QR Code Component
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using HTML and CSS, I created a responsive QR code component 
              based on a design provided by <a href="https://www.frontendmentor.io/solutions/responsive-qr-code-component-using-html-and-css-7YaFgV_BHv" 
                target="_blank" rel="noreferrer" className={classes.frontendMentor}>Frontend Mentor.</a>
            </Typography>
              <br />
              <Chip label="HTML5" variant="outlined" className="m-1"/>
              <Chip label="CSS3" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/flexbox-QR-code.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://marlisarebaum.github.io/flexbox-QR-code/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={Coinlayer}
            alt="Coinlayer API screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Current Crypto App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Using Coinlayer's public API, I created an app that uses API routes
              to display current cryptocurrency prices.
            </Typography>
            <br />
            <Chip label="JavaScript" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="Bootstrap" variant="outlined" className="m-1"/>
            <Chip label="Coinlayer API" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/coinlayer-api.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
          </CardActions>
        </Card>
        <Card className="col-lg-4 col-md-12 col-sm-12 col-xs-12 p-5 m-5">
          <CardMedia
            component="img"
            src={LibraryApp}
            alt="Library App Screenshot"
            className={classes.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Book Inventory App
            </Typography>
            <Typography variant="body2" color="text.secondary">
              The frontend of this application is created using React TypeScript 
              and the backend using Flask, PostgreSQL, and Firebase. The app 
              allows users to log in or create an account. Once logged in, users 
              are able to view the library book inventory, and add, update, and 
              delete book entries. The app is hosted on Firebase. 
            </Typography>
            <br />
            <Chip label="React" variant="outlined" className="m-1"/>
            <Chip label="TypeScript" variant="outlined" className="m-1"/>
            <Chip label="Flask" variant="outlined" className="m-1"/>
            <Chip label="PostgreSQL" variant="outlined" className="m-1"/>
            <Chip label="HTML5" variant="outlined" className="m-1"/>
            <Chip label="CSS3" variant="outlined" className="m-1"/>
            <Chip label="Firebase" variant="outlined" className="m-1"/>
          </CardContent>
          <CardActions>
            <Button size="small"><a href="https://github.com/MarlisaRebaum/react-library-app.git" 
              target="_blank" rel="noreferrer" className={classes.link}>GitHub</a>
            </Button>
            <Button size="small"><a href="https://react-library-app-7257a.web.app/" 
              target="_blank" rel="noreferrer" className={classes.link}>Live</a>
            </Button>
          </CardActions>
        </Card>
      </Row>
      </div>
    </div>
  );
};