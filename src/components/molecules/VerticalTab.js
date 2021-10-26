import React from 'react'
import PropTypes from 'prop-types';
import {
    Box,
    Container,
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
    tabBox: {
        display: 'flex',
        position: 'relative',
        border: 'none',
        outline: 'none'
    },
    tabs: { 
        padding: '5%',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
            padding: '0%',
            margin: '5% 0%'
        },
    },
    tab: {
        color: 'white',
        font: 'normal normal normal 1rem Access',
        textTransform: 'none',
        textAlign: 'left',
        "& .MuiTab-wrapper": {
            justifyContent: 'center !important',
            alignItems: 'flex-start !important',
        },
        '& .MuiTab-root': {
            maxWidth: '350px !important',
            marginLeft: '100px !important',
        },
        '& .PrivateTabIndicator-vertical-173': {
            left: '0px !important',
            width: '3px !important',
        }
    },
    tabPanel: {
        height: 'fit-content',
        width: '360px',
        position: 'absolute',
        zIndex: '1',
        left: '45%',
        top: '-50%',
        '& img': {
            maxWidth: '100%',

        },
        '&::before': {
            content: "''",
            height: '40%',
            width: '20%',
            background: '#CA0017',
            position: 'absolute',
            right: '-0%',
            top: '20%',
            zIndex: '-1',
            [theme.breakpoints.down('xs')]: {
                position: 'static'
            }
        },
        [theme.breakpoints.down('sm')]: {
            left: '50%',
            width: '300px',
        },
        [theme.breakpoints.down('xs')]: {
            position: 'static',
            height: 'fit-content',
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
            <Box className={classes.tabBox}>
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                // classes={classes.tabs}
                // classes={{ tabs: classes.tabs }}
                >
                    <Tab className={classes.tab} label="ASIC/FPGA/SoC Design Services" {...a11yProps(0)} />
                    <Tab className={classes.tab} label="High Speed PCB Design Services" {...a11yProps(1)} />
                    <Tab className={classes.tab} label="Software Development" {...a11yProps(2)} />
                    <Tab className={classes.tab} label="Electronics Manufacturing Services (EMS)" {...a11yProps(3)} />
                    <Tab className={classes.tab} label="Testing and Calibration" {...a11yProps(4)} />
                    <Tab className={classes.tab} label="ML & AI" {...a11yProps(5)} />

                </Tabs>

                <TabPanel className={classes.tabPanel} value={value} index={0}>
                    <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                    <img className={classes.redLine} src={'/images/Component 4 – 1.svg'} />
                    <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                        rich turnkey offerings cover a vast range of target platforms.
                    </h6>

                </TabPanel>

                <TabPanel className={classes.tabPanel} value={value} index={1}>
                    <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                    <h6 style={{ lineHeight: '1.5' }}>of our technical expertise, our ready-to-integrate,
                        rich turnkey offerings cover a vast range of target platforms.
                    </h6>
                </TabPanel>

                <TabPanel className={classes.tabPanel} value={value} index={2}>
                    <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                    <h6 style={{ lineHeight: '1.5' }}> expertise, our ready-to-integrate,
                        rich turnkey offerings cover a vast range of target platforms.
                    </h6>
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={4}>
                    Item Four
                </TabPanel>
                <TabPanel className={classes.tabPanel} value={value} index={5}>
                    Item Four
                </TabPanel>
            </Box>
        </>
    )
}
