import React, { useEffect } from 'react'
import { EvchargingTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Evcharging() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <EvchargingTemplate />
        </div>
    )
}

