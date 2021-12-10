import React, { useEffect } from 'react'
import { SmartmeteringTemplate  } from '../../templates'
import { ScrollTop } from '../../molecules'

export function Smartmetering() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <ScrollTop />
            <SmartmeteringTemplate />            
        </div>
    )
}

