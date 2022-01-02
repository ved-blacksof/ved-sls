import React, { useEffect } from 'react'
import { IOTplatformTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function IOTplatform() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <IOTplatformTemplate />            
        </div>
    )
}

