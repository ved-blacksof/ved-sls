import React, { useEffect } from 'react'
import { HighspeedTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Highspeed() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <HighspeedTemplate />            
        </div>
    )
}

