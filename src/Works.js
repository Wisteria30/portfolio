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
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import { BrowserRouter, Route, Link } from "react-router-dom"


const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
        // background: "#673AB7",
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
    ["images/works/key-valu.jpg", "KEY-VALU", "人の顔から資産価値をBTC換算で割り出すアプリです。How-Old.net × VALUというモチーフで作りました。VALUをスクレイピングした画像からKeras × sckit-learnでモデルを生成しました。", "https://github.com/Wisteria30/key-valu"],
    ["images/works/reiwa.png", "元号判別機", "word2vecを用いた元号判別。単語のベクトルだけでは決めれないので、元号のルールや過去の元号から統計をとって絞りました。令和は元号としてちゃんと判別されました。", "https://qiita.com/Wisteria30/items/ba6ced1d55d12ce79943"],
    ["images/works/ametyan.jpg", "アメちゃん", "冬KC3で作成したアプリ。カードを選ぶことで、関西のおすすめスポットを紹介してくれます。puppetterでじゃらんをスクレピング、Firebaseに保存するところを担当しました。", "https://github.com/winter-kc3/team-8-scraping"],
    ["images/works/kokoiko.jpg", "ココイコ", "HACK-Uで作成したアプリ。GPS機能を用いてユーザーの近くに登録した「お店」があれば、通知します。GCP NLのエンティティ解析とAuto NLの文書分類を使って、Twitter連携からお店のレコメンドを行う部分を担当しました。", ""],
    ["images/works/library.jpg", "電算ライブラリ", "所属している研究会の書籍管理アプリです。Ruby on Rails + booststrapで作成しました。", "https://github.com/Wisteria30/KindaiDensanLib"],
    ["images/works/portfolio.jpg", "Portfolio", "このポートフォリオです。フレームワークにReactとMaterial-UIを使用しています。", ""],
]

class Skill extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            // <BrowserRouter>
            <React.Fragment>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <div className={classes.heroUnit}>
                        <div className={classes.heroContent}>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Works
            </Typography>
                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                制作物
            </Typography>
                        </div>
                    </div>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        {/* End hero unit */}
                        <Grid container spacing={40}>
                            {cards.map((card, index) => (
                                <Grid item key={card[0]} sm={6} md={3} lg={4}>
                                    <Card className={classes.card[0]}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card[0]}
                                            title={card[0]}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card[1]}
                                            </Typography>
                                            <Typography>
                                                {card[2]}
                                            </Typography>
                                        </CardContent>
                                        {card[3] ? (
                                            <CardActions>
                                                <Button size="small" color="primary" onClick={() => { window.open(card[3]) }}>
                                                    View
                                                </Button>
                                            </CardActions>
                                        ) : (<unstable_Box />)}
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </main>
            </React.Fragment >
            // </BrowserRouter>
        );
    }
}

Skill.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);