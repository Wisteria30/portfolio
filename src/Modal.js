// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
// import Button from '@material-ui/core/Button';
// import classNames from 'classnames';


// function rand() {
//     return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//     const top = 50 + rand();
//     const left = 50 + rand();

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

// const styles = theme => ({
//     heroUnit: {
//         backgroundColor: theme.palette.background.paper,
//         // background: "#673AB7",
//     },
//     heroContent: {
//         maxWidth: 600,
//         margin: '0 auto',
//         padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
//     },
//     heroButtons: {
//         marginTop: theme.spacing.unit * 4,
//     },
//     layout: {
//         width: 'auto',
//         marginLeft: theme.spacing.unit * 3,
//         marginRight: theme.spacing.unit * 3,
//         [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
//             width: 1100,
//             marginLeft: 'auto',
//             marginRight: 'auto',
//         },
//     },
//     paper: {
//         position: 'absolute',
//         width: theme.spacing.unit * 50,
//         backgroundColor: theme.palette.background.paper,
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing.unit * 4,
//         outline: 'none',
//     },
// });

// class SimpleModal extends React.Component {
//     state = {
//         open: true,
//     };

//     handleOpen = () => {
//         this.setState({ open: true });
//     };

//     handleClose = () => {
//         this.setState({ open: false });
//     };

//     render() {
//         const { classes } = this.props;

//         return (
//             <div>
//                 <div className={classes.heroUnit}>
//                     <div className={classes.heroContent}>
//                         <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//                             Modal
//             </Typography>
//                         <Typography variant="h6" align="center" color="textSecondary" paragraph>
//                             モーダルループ
//             </Typography>
//                     </div>
//                 </div>
//                 <div className={classNames(classes.layout)}>
//                     <Typography gutterBottom>Click to get the full Modal experience!</Typography>
//                     <Button onClick={this.handleOpen}>Open Modal</Button>
//                     <Modal
//                         aria-labelledby="simple-modal-title"
//                         aria-describedby="simple-modal-description"
//                         open={this.state.open}
//                         onClose={this.handleClose}
//                     >
//                         <div style={getModalStyle()} className={classes.paper}>
//                             <Typography variant="h6" id="modal-title">
//                                 Text in a modal
//             </Typography>
//                             <Typography variant="subtitle1" id="simple-modal-description">
//                                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography>
//                             <SimpleModalWrapped />
//                         </div>
//                     </Modal>
//                 </div>
//             </div>
//         );
//     }
// }

// SimpleModal.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// // We need an intermediary variable for handling the recursive nesting.
// const SimpleModalWrapped = withStyles(styles)(SimpleModal);

// export default SimpleModalWrapped;