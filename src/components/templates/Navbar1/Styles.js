

const useStyles = makeStyles((theme) => ({
    mainBox: {
        // background: '#182AC3',
        // opacity:'0.75',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '3%',
        boxShadow: 'none',
        // boxShadow:'2px 2px 2px black'
    },
    navRelative: {
        position: 'relative',
        boxShadow: 'none',
    },
    navFixed: {
        position: 'fixed',
        top: '0%',
        boxShadow: '2px 2px 5px grey',
        background: 'white',
        padding: '.8rem 0rem',
        transition: 'all ease-in-out .3s',
        "& ": {
            color: 'black'
        }
    },
    navbar: {
        width: '90%',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    logoBox: {
        width: '8rem',
        "& img": {
            width: '100%',
            maxHeight: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '6rem'
        }
    },
    logo: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    logofixed: {
        display: 'block'
    },
    logoFixedNone: {
        display: 'none',
    },
    navUL: {
        display: 'flex',
        alignItems: 'center',
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navLI: {
        textDecoration: 'none',
        color: 'white',
        margin: ' 0px 10px',
        background: 'transparent',
        boxShadow: 'none',
        cursor: 'pointer',
        textTranform: 'none',
    },
    navLink: {
        color: 'black',
    },
    megaMenu: {
        width: '50vw',
        display: 'flex',
        borderRadius: '0px'
    },
    uls: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '2% 2%',
        "& h6": {
            padding: '1rem',
        }
    },
    lios: {
        textDecoration: 'none',
        color: '#182AC3',
        pointer: 'cursor',
    },
    activeLios: {
        color: '#'
    },
    act: {
        margin: '2px',
        padding: '5px 1px',
        borderBottom: '1px solid white'
    },
    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            fontSize: '2.2rem',
            color: 'white'
        }
    }
}))