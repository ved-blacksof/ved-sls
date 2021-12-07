import React, { useEffect } from 'react'
import { SmartmeteringTemplate  } from '../../templates'

export function Smartmetering() {
    useEffect(() => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }, [1])
    return (
        <div>
            <SmartmeteringTemplate />            
        </div>
    )
}

