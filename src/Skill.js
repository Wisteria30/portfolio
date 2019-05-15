import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const cards = [
    ["Python", "機械学習、Webスクレイピング、競技プログラミングなど様々な用途でメインウェポンとして使用しています。"],
    ["JavaScript", "ReactやFirebase、APIを叩くなどWebが絡むときに使用しています。async,awaitでうっかりPromise返すぐらいには得意です。"],
    ["Keras", "KEY-VALUのモデルを作る際に作りました。回帰問題だったのでscikit-learnと組み合わせて使いました。"],
    ["Java", "基本的に学校の授業で使用します。簡単なコンパイラやCUIの人狼ゲームを作成しました。"],
    ["Ruby", "Ruby on Railsを使う際に覚えました。Ruby on Railsでは本の書籍管理サイトを作成しました。"],
    ["C++", "競技プログラミングの際のサブウェポンです。Pythonだと計算量が微妙なときに使います。"]]

function Skill(props) {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <div className={classes.heroUnit}>
                    <div className={classes.heroContent}>
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Skill
            </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            使用したことのある・使える技術
            </Typography>
                    </div>
                </div>
                <div className={classNames(classes.layout, classes.cardGrid)}>
                    {/* End hero unit */}
                    <Grid container spacing={40}>
                        {cards.map(card => (
                            <Grid item key={card[0]} sm={6} md={3} lg={4}>
                                <Card className={classes.card[0]}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card[0]}
                                        </Typography>
                                        <Typography>
                                            {card[1]}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>
        </React.Fragment>
    );
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);