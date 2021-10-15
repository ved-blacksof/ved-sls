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
    },
    tabs: {
        width: '30%',
        marginTop: '2%',
        [theme.breakpoints.down('sm')]: {
            width:'50%'
        },
    },
    tab: {
        color: 'white',
        font: 'normal normal normal 1rem Access',
        textTransform: 'none',
        width: '100%',
        textAlign: 'left '
    },
    tabPanel: {
        height: 'fit-content',
        width: '360px',
        position: 'absolute',
        zIndex: '1',
        left: '60%',
        top: '-50%',
        '& img': {
            width: '100%',
            zIndex: '2'
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
                    <Box className={classes.redBack}></Box>
                    <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                        rich turnkey offerings cover a vast range of target platforms.
                    </h6>

                </TabPanel>

                <TabPanel className={classes.tabPanel} value={value} index={1}>
                    <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                    <Box className={classes.redBack}></Box>
                    <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
                        rich turnkey offerings cover a vast range of target platforms.
                    </h6>
                </TabPanel>

                <TabPanel className={classes.tabPanel} value={value} index={2}>
                    <img src={'./images/thisisengineering-raeng-ZPeXrWxOjRQ-unsplash.png'} />
                    <Box className={classes.redBack}></Box>
                    <h6 style={{ lineHeight: '1.5' }}>Forming the core of our technical expertise, our ready-to-integrate,
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
