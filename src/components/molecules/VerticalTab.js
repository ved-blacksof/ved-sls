import React from 'react'
import PropTypes from 'prop-types';
import {
    Box,
    Tabs,
    Tab,
    Typography,
    makeStyles,
} from '@material-ui/core';

import './molecule.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    mainBox: {
        display: 'flex',
    },
    leftBox: {
        width: '50%',
        height: '100%',
        padding:'5% 0%',
        [theme.breakpoints.down('sm')]: {
            padding:'0%',
         },
    },
    tabs: {
        padding: '5%',
    },
    tab: {
        minWidth: '100%',
        color: 'white',
        font: 'normal normal normal 1.2rem Access',
        textTransform: 'none',
        textAlign: 'left',
        paddingLeft:'1rem',
        [theme.breakpoints.down('sm')]: {
           fontSize:'1rem'
        },
    },
    rightBox: {
        width: '50%',
        position: 'relative',
    },
    tabPanel: {
        width: '70%',
        position: 'absolute',
        zIndex: '1',
        top: '-45%',
        [theme.breakpoints.down('md')]: {
            top: '-50%',
         },
        [theme.breakpoints.down('sm')]: {
            position: 'static',
            height: 'fit-content',
            width: '80%',
            margin:'0 auto'
        },
        '& .MuiBox-root':{
            padding:'0px'
        },
        '& img': {
            maxWidth: '100%',
            height: '100%'
        },
        '&::before': {
            content: "''",
            height: '40%',
            width: '30%',
            background: '#D9393E',
            position: 'absolute',
            right: '-8%',
            top: '15%',
            zIndex: '-1',
            [theme.breakpoints.down('sm')]: {
                position: 'static'
            }
        },
       
       
    },


}))

export function VerticalTab() {

    const classes = useStyles()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box className={classes.mainBox}>
                <Box className={classes.leftBox}>
                    <Tabs
                        disableRipple
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        className={classes.tabs}
                        TabIndicatorProps={{
                            style: {
                                left: '0',
                                width:'4px',
                                height:'22px',
                                marginTop:'11px',
                                borderRadius:'2px'
                            }
                        }}
                    >
                        <Tab className={classes.tab} disableRipple label="ASIC/FPGA/SoC Design Services" {...a11yProps(0)} />
                        <Tab className={classes.tab} disableRipple label="High Speed PCB Design Services" {...a11yProps(1)} />
                        <Tab className={classes.tab} disableRipple label="Software Development" {...a11yProps(2)} />
                        <Tab className={classes.tab} disableRipple label="Electronics Manufacturing Services (EMS)" {...a11yProps(3)} />
                        <Tab className={classes.tab} disableRipple label="Testing and Calibration" {...a11yProps(4)} />
                        <Tab className={classes.tab} disableRipple label="ML & AI" {...a11yProps(5)} />

                    </Tabs>
                </Box>

                <Box className={classes.rightBox}>
                    <TabPanel className={classes.tabPanel} value={value} index={0}>
                        <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                            rich turnkey offerings cover a vast range of target platforms.
                        </h6>

                    </TabPanel>

                    <TabPanel className={classes.tabPanel} value={value} index={1}>
                        <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                            rich turnkey offerings cover a vast range of target platforms.
                        </h6>
                    </TabPanel>

                    <TabPanel className={classes.tabPanel} value={value} index={2}>
                        <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                            rich turnkey offerings cover a vast range of target platforms.
                        </h6>
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={3}>
                        <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                            rich turnkey offerings cover a vast range of target platforms.
                        </h6>
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={4}>
                        <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                            rich turnkey offerings cover a vast range of target platforms.
                        </h6>
                    </TabPanel>
                    <TabPanel className={classes.tabPanel} value={value} index={5}>
                        <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                        <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                        <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                            rich turnkey offerings cover a vast range of target platforms.
                        </h6>
                    </TabPanel>
                </Box>
            </Box>
        </>
    )
}
