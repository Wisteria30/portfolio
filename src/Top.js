import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: 0,
        margin: 0,
    },
    text: {
        marginTop: theme.spacing.unit * 50,
    }
});

function Top(props) {
    const { classes } = props;

    return (
        <React.Fragment>
                <CssBaseline />
                <div className={classes.root}>
                        <Typography className={classes.text} component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
                            Welcome to my Portfolio
                        </Typography>
                </div>
        </React.Fragment >

    );
}

Top.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);