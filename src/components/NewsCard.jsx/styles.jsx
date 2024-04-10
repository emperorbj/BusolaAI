import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    media: {
        height: 250,
    },
    border: {
    border: 'solid',
    },
    fullHeightCard: {
    height: '100%',
    },
    card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottom: '10px solid white',
    height:'100vh',
    width:'350px',
    marginTop:'20px',
    marginBottom:'20px'
    },
    activeCard: {
    borderBottom: '10px solid #87cefa',
    },
    grid: {
    display: 'flex',
    },
    details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
    },
    title: {
    padding: '0 16px',
    },
    cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    },
}));

export default useStyles;