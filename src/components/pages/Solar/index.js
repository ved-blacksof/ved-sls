import React, { useEffect } from 'react'
import { SolarTemplate } from '../../templates'

export function Solar() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <SolarTemplate />            
        </div>
    )
}

