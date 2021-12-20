import { Box, Container, makeStyles } from '@material-ui/core'
import React from 'react'
import { ipcoreBoxes } from '../../molecules/PortfolioData'
import { GridBlue, MainContainer, MapIcon, MapIcon1 } from '../../atoms'
import { PosBoxes } from '../../molecules'

const useStyles = makeStyles((theme) => ({
    mainBox: {
        width: '100%',
        marginTop: '20%',
    },


}))

export function Offerings({
    icon,
    h4,
    h6,
}) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.mainBox}>
                <h2 style={{ color: 'black' , textAlign:'center',marginBottom:'8%'}}>Offerings</h2>
                <PosBoxes
                    data={ipcoreBoxes}
                    style={{ padding: '0px',objectFit:'revert' }}
                />
            </Box>
        </>
    )
}
