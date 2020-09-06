import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


const Post = (props) => {

    const postsStyle = {
        marginBottom: '20 px',
        marginLeft: '100px',
        padding: '20px',
        width: '70%'
    }

    const { title, id } = props.posts;

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
    });

    const classes = useStyles();
    return (
        <div style = {postsStyle}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        <p>Title : {title}</p>
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <h3>ID: {id}</h3>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={"/post/" +id}>
                        <Button size="small" color="primary">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;