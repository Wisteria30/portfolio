import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { unstable_Box as Box } from '@material-ui/core/Box';

const styles = theme => ({
    // root: {
    //     heigth: "auto",
    // },
    hoge: {
        padding: 0,
        margin: 0,
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // margin: '3000 0 80',
        // height: '500px',
        // max
    },
    text: {
        marginTop: theme.spacing.unit * 50,
        // marginBottom: theme.spacing.unit * 50,
        // padding: '100 100',
    }
});

function Top(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <Box height={100}>
                <CssBaseline />
                <div className={classes.hoge}>
                    <Box height="100%">
                        <Typography className={classes.text} component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
                            Welcome to my Portfolio
                        </Typography>
                    </Box>
                </div>

            </Box>
        </React.Fragment >

    );
}

Top.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Top);