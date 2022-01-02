import React from 'react'
import { Box, makeStyles, styled, Tabs, Tab } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    main: {
        display: "flex",
        justifyContent: "center",
        marginTop: '10%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '15%',
        }
    },
    productTab: {
        width: '85%',
        marginTop: '2%',
        float: 'right',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    styledTabs: {
        color: '#476F66',
    },
    tabLabel: {
        font: 'normal normal normal 1.5rem urban',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.6rem'
        }
    }
}))

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        variant='fullWidth'
        aria-label="tabs example"
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))
    ({
        '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
            maxWidth: 200,
            width: '100%',
            backgroundColor: '#DAB188',
        },
    });

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    () => ({
        textTransform: 'none',
        color: '#476F66',
        '&.Mui-selected': {
            color: '#DAB188',
        }
    })
);


export function NewMeterTabs({
    options,
    handleFilter,
    handleFilterAll
}) {
    const classes = useStyles()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box className={classes.productTab} >
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
                className={classes.styledTabs}
            >
                {options.map((item,index) => {
                    const { category, categoryvalue } = item
                    return <StyledTab key={index} label={<span className={classes.tabLabel}>{category}</span>} 
                        onClick={() => {
                            if (categoryvalue !== "all") {
                                handleFilter(categoryvalue)
                            } else {
                                handleFilterAll(categoryvalue)
                            }
                        }}
                    />
                })}

            </StyledTabs>
            <Box sx={{ p: 3 }} />
        </Box>
    )
}
