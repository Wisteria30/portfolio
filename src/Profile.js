import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 6,
        marginRight: theme.spacing.unit * 6,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    textField: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class Profile extends React.Component {
    state = {
        name: 'Kazuma Fujioka',
        university: "Kindai University",
        birthday: '1999/03/27',
        GitHub: 'https://github.com/Wisteria30',
        Qiita: 'https://qiita.com/Wisteria30',
        Twitter: 'https://twitter.com/ji_o_k',
        AtCoder: "https://atcoder.jp/users/wisteria30",
        Facebook: "https://www.facebook.com/profile.php?id=100018025867411",
        Mail: 'skymars0327[at]yahoo.co.jp',
        Experience1: "近畿大学 電子計算機研究会 会長",
        Experience2: "TGL-College2018 DevCon バリュー賞",
        Experience3: "冬KC3 2019 モバイルファクトリー賞"
    };

    linkTo = link => event => {
        window.open(link, '_blank')
    }

    render() {
        const { classes } = this.props;

        return (
            <main>
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Profile
            </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            自己紹介
            </Typography>
                    </div>
                </div>
                <form className={(classes.layout)} noValidate autoComplete="off">
                    <div display="flex" className={classes.container} justifyContent="center">
                        <TextField
                            required
                            id="name"
                            label="Name"
                            className={classes.textField}
                            value={this.state.name}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            required
                            id="university"
                            label="University"
                            defaultValue="近畿大学 理工学部 情報学科"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            required
                            id="birthday"
                            label="BirthDay"
                            value={this.state.birthday}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div display="flex" className={classes.container} justifyContent="center">
                        <TextField
                            error
                            id="github"
                            label="GitHub"
                            value="Wisteria30"
                            className={classes.textField}
                            margin="normal"
                            onClick={this.linkTo(this.state.GitHub)}
                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <TextField
                            error
                            id="qiita"
                            label="Qiita"
                            defaultValue="Wisteria30"
                            className={classes.textField}
                            margin="normal"
                            onClick={this.linkTo(this.state.Qiita)}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            error
                            id="atcoder"
                            label="AtCoder"
                            defaultValue="wisteria30"
                            className={classes.textField}
                            margin="normal"
                            onClick={this.linkTo(this.state.AtCoder)}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div display="flex" className={classes.container} justifyContent="center">
                        <TextField
                            error
                            id="twitter"
                            label="Twitter"
                            defaultValue="ジオン"
                            className={classes.textField}
                            margin="normal"
                            onClick={this.linkTo(this.state.Twitter)}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            error
                            id="facebook"
                            label="Facebook"
                            defaultValue="Kazuma Fujioka"
                            className={classes.textField}
                            margin="normal"
                            onClick={this.linkTo(this.state.Facebook)}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            id="mail"
                            label="Mail"
                            defaultValue={this.state.Mail}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div display="flex" className={classes.container} justifyContent="center">
                        <TextField
                            id="experience1"
                            label="Experience1"
                            defaultValue={this.state.Experience1}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div display="flex" className={classes.container} justifyContent="center">
                        <TextField
                            id="experience2"
                            label="Experience2"
                            defaultValue={this.state.Experience2}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                    <div display="flex" className={classes.container} justifyContent="center">
                        <TextField
                            id="experience3"
                            label="Experience3"
                            defaultValue={this.state.Experience3}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                readOnly: true,
                            }}

                        />
                    </div>
                </form>
            </main >
        );
    }
}

Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);