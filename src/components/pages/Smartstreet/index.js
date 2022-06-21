import React, { useEffect } from 'react'
import { SmartstreetTemplate } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Smartstreet() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <SmartstreetTemplate />            
        </div>
    )
}

