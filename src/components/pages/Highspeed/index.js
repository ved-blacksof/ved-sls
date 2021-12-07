import React, { useEffect } from 'react'
import { HighspeedTemplate } from '../../templates'

export function Highspeed() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <HighspeedTemplate />            
        </div>
    )
}

