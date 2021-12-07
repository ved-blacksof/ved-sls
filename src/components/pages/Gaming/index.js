import React, { useEffect } from 'react'
import { GamingTemplate } from '../../templates'

export function Gaming() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <GamingTemplate />            
        </div>
    )
}

