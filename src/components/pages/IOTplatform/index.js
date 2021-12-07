import React, { useEffect } from 'react'
import { IOTplatformTemplate } from '../../templates'

export function IOTplatform() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <IOTplatformTemplate />            
        </div>
    )
}

