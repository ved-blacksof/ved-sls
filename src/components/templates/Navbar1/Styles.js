import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',

    },
    navRelative: {
        position: 'relative',
        boxShadow: 'none',
    },
    navFixed: {
        position: 'fixed',
        // minHeight: '100px',
        top: '0px',
        boxShadow: '0px 0px 5px #777',
        background: 'white',
        zIndex: '4',
        scrollBehaviour: 'smooth',
        transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
        animation: `$translates 800ms linear`,
        animationIterationCount: 1,
        animationDuration: '800ms',
        [theme.breakpoints.down('sm')]: {
            minHeight: 'fit-content',
        },
        "&:hover": {
            color: '#DE141A'
        }
    },
    "@keyframes translates": {
        "0%": {
            transform: "translateY(-50px)"
        },
        "100%": {
            transform: "translateY(0px)"
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
        cursor: 'pointer',
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
        listStyle: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    navLI: {
        position: 'relative',
        minHeight: '90px',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25px',
        cursor: 'pointer',
        background: 'transparent',
        // border:'1px solid red',
        transition: 'all 0.7s cubic-bezier(0.645, 0.045, 0.355, 1)',
        boxShadow: 'none',
        color: 'white',
        "&::before": {
            content: "''",
            height: '3px',
            width: '0',
            background: '#DE141A',
            position: 'absolute',
            bottom: '0px',
            left: '0%',
            transition: 'all 500ms ease-in-out',
            [theme.breakpoints.down('sm')]: {
                height: '5px'
            }
        },
        "&:hover": {
            "& div": {
                display:'block',
                animation: `$menuAnimation 800ms ease-in-out`,
                animationIterationCount: 1,
                animationDuration: '500ms',
            },
            "&::before": {
                height: '3px',
                width: '100%',
                opacity: '1',
                [theme.breakpoints.down('sm')]: {
                    height: '5px'
                }
            },
            "&::after": {
                height: '0%',
            },

        },
    },
    indMenu: {
        display: 'none',
        // visibility:"hidden",
        position:'absolute',
        top:'100%',
        right:'0%',
        transition: 'all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)',
        animation: `$menuAnimation 800ms ease-in-out`,
        animationIterationCount: 1,
        animationDuration: '500ms',
    },
    '@keyframes menuAnimation': {
        '0%': {
            transform: 'translateY(6%)',
            opacity:0
        },
        '100%': {
            transform: 'translateY(0%)',
            opacity:1
        },
    },

    clsbeforePos: {
        textDecoration: 'none',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        "&:hover": {
            // color: '#d1d1d1'
        }
    },
    clsAfterPos: {
        textDecoration: 'none',
        color: 'black',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        "&:hover": {
            // color: '#182AC3'
        },
        "& $arrow": {
            color: 'black',
        }
    },
    linkActive: {
        fontWeight: 'bold',
        opacity: '1',
    },
    linkActiveAfterPos: {
        color: '#182AC3',
        fontWeight: 'bold',
        "&:hover": {
            "& h4": {
                // color: '#182AC3',
            },
        }
    },
    arrow: {
        color: 'white',
        fontSize: '1.8rem',
        marginTop: '4px'
    },
    // mega menu

    megaMenu: {
        height: 'fit-content',
        display: 'flex',
        borderRadius: '0px',
        background: 'white',
        zIndex: '100',
        padding: '1.4rem 1rem',
        boxShadow: '0px 0px 1px #777',
        borderBottom:'2px solid #182AC3'
    },
    uls: {
        display: 'flex',
        flexDirection: 'column',
        "& h6": {
            padding: '1rem',
        }
    },
    menuItem: {
        padding: '5px 15px',
        background: 'transparent',
        position: 'relative',
        "&:hover": {
            background: 'transparent !important',
        }
    },
    lios: {
        width: '100%',
        textDecoration: 'none',
        color: '#000',
        pointer: 'cursor',
        transform: 'width .4s ease-in-out',
        paddingLeft: '8px',
        "&::before": {
            content: "''",
            height: '50%',
            width: '5px',
            background: '#182AC3',
            borderRadius: '2rem',
            position: 'absolute',
            top:'28%',
            left: '0%',
            transform: 'translateY(0, -20px)',
            transition: 'all .3s ease-in-out',
            opacity: '0',
            visibility: 'hidden',
        },
        "&:hover": {
            color: '#182AC3',
            "&::before": {
                visibility: 'visible',
                opacity: '1',
            },

        },
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
        }
    },
    menuIconPos: {
        display: 'block',
        fontSize: '2.2rem',
        color: 'black'
    },
    menu: {

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            paddingBottom: '1%',
            transition: 'all 4s ease-in-out',
            transform: 'translate 100%'
        }
    },

    hrs: {
        borderRadius: '3px',
        opacity: '.2'
    },
    popper: {
        zIndex: '10',
        marginTop: '35px',
        // animation: 'menuani 2s ease-in',    
    },
    '@keyframes menuani': {
        '0%': {
            transform: 'translateY(50%)'
        },
        '100%': {
            transform: 'translateY(0%)'
        },
    }

}))