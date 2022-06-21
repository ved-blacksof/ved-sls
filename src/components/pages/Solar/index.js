import React, { useEffect } from 'react'
import { SolarTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Solar() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <SolarTemplate />            
        </div>
    )
}

