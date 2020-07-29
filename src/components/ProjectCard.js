import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpIcon from '@material-ui/icons/Http';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Project"
          height="140"
          width="140"
          image={props.imgLocation}
          title="Project"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {props.name}
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
            Technology: {props.technology}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          {props.github !== "#" && 
          <a href={props.github} target="_blank" rel="noreferrer" style={{paddingRight:`30px`, textDecoration:`none`}} ><GitHubIcon style={{color: `blue`}} />Repository</a>}

          {props.html !== "#" &&
          <a href={props.html} target="_blank" rel="noreferrer" style={{paddingRight:`30px`, textDecoration:`none`}} ><HttpIcon style={{color: `blue`}} />Live Site</a>}
        
      </CardActions>
    </Card>
  );
}