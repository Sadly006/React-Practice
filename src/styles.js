import { makeStyles } from '@material-ui/core/styles';
import bg from './images/back.png'


export default makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
    paper: {
      justifyContent: 'center',
      padding: theme.spacing(2),
      marginTop: 10,
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: theme.spacing(2),
    },
    fileInput: {
      width: '97%',
      margin: '10px 0',
    },
    buttonSubmit: {
      marginTop: 10,
      marginBottom: 10,
      justifyContent: 'center',
      margin: '0 auto',
      //display: "flex",
    },
    appBar: {
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10,
      },
      heading: {
        color: 'rgba(0,183,255, 1)',
      },
      textField: {
        marginBottom: 10,
      },
      image: {
        marginTop: 60,
        marginBottom: 10,
      },
      // containerBg: {
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   width: `calc(100vw + 48px)`,
      //   // margin: -24,
      //   // padding: 24,
      // },
  }));