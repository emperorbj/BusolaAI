import NewsCard from "../NewsCard.jsx/NewsCard"
import { Grid, Grow, Typography } from '@mui/material'
import useStyles from "./styles"
import PropTypes from 'prop-types';

const infoCards = [
    { color: '#87cefa', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#87cefa', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Give me something about PlayStation 5' },
    { color: '#87cefa', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#87cefa', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];
export default function NewsCards({articles, activeArticle}){
    const classes = useStyles();

    if(!articles.length){
        return(
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {
                        infoCards.map((infoCard, index) => {
                            return(
                                <Grid key={index} item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
                                    <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                        <Typography className={classes.title} variant="h5">{infoCard.title}</Typography>
                                        {
                                            infoCard.info?
                                                (<Typography variant="h6">
                                                    <strong>
                                                        {infoCard.title.split(' ')[2]}:
                                                    </strong>
                                                        <br/>
                                                        {infoCard.info}
                                                </Typography>) : null
                                        }
                                        <Typography variant="h6" >Try saying: <br/> <i>{infoCard.text}</i></Typography>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grow>
        );
    }
    




    return(
        <Grow in>
            <Grid className={classes.ActiveContainer} container alignItems="stretch" spacing={3}>

            {
                articles.map((article,i)=>(
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i}/>
                    </Grid>
                    
                ))
            }

            </Grid>

        </Grow>
    )
}


// Prop types validation for NewsCards component
NewsCards.propTypes = {
    articles: PropTypes.array.isRequired,
    activeArticle: PropTypes.number
};

